/*************** global init ********************/
var auth = firebase.auth();
var googleAuth = new firebase.auth.GoogleAuthProvider();
var firebaseDatabase = firebase.database();
var firebaseStorage = firebase.storage();
var db = firebaseDatabase.ref('root/board');
var ref = db.orderByChild('sort');
var storage = firebaseStorage.ref('root/board');
var user = null;
var allowType = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4']

/*************** element init ********************/
var btSave = document.querySelector('.write-wrapper .bt-save');       // 글작성 버튼
var btLogin = document.querySelector('.header-wrapper .bt-login');    // 로그인 버튼
var btLogout = document.querySelector('.header-wrapper .bt-logout');  // 로그아웃 버튼
var btWrite = document.querySelector('.list-wrapper .bt-write');      // 글쓰기 버튼
var btClose = document.querySelector('.write-wrapper .bt-close');     // 모달창 닫기 버튼
var btReset = document.querySelector('.write-wrapper .bt-reset');     // 모달창 리셋 버튼
var writeWrapper = document.querySelector('.write-wrapper');          
var writeForm = document.writeForm;                                  // 글작성 form
var loading = document.querySelector('.write-wrapper .loading-wrap'); // 로딩스피너

var page = 1;
var listCnt = 5;
var pagerCnt = 3;
var totalRecord = 0;

/*************** user function ******************/
function listInit() {
  if(page === 1)
    ref.limitToFirst(listCnt).get().then(onGetData).catch(onGetError);
  else
    ref.startAfter().limitToFirst(listCnt).get().then(onGetData).catch(onGetError);
}

/*************** event callback *****************/
function onGetData(r) {
  totalRecord = r.numChildren;
  r.forEach(function(v, i){

  })
}

function onGetError(err) {

}

function onAuthChanged(r) {  // onAuthStateChanged
  user = r;
  if(user) {                 // 로그인 되면 ui가 할 일
    btLogin.style.display = 'none';
    btLogout.style.display = 'block';
    btWrite.style.display = 'inline-block';
  }
  else {                     // 로그아웃 되면 ui가 할 일
    btLogin.style.display = 'block';
    btLogout.style.display = 'none';
    btWrite.style.display = 'none';
  }
}

function onLogin() { // login하면 구글 팝업
  auth.signInWithPopup(googleAuth);
}

function onLogout() {  // logout
  auth.signOut();
}

function onWrite() {                           // 모달창이 오픈되면 (글작성 버튼)
  $(writeWrapper).stop().fadeIn(300);
  writeForm.title.focus();
}

function onClose() {                           // 모달창이 닫히면
  $(writeWrapper).stop().fadeOut(300);
  onWriteReset();
}

function onWriteReset(e) {                    // 초기화 (모달창 닫으면 실행)
  writeForm.reset();                          // button[type-reset] 클릭
  writeForm.title.classList.remove('active');
  // writeForm.writer.value = '';
  writeForm.writer.classList.remove('active');
  // writeForm.content.value = '';
  document.querySelectorAll('.required-comment').forEach(function(v, i){
    v.classList.remove('active');            // 필수사항 입니다 에서 active 빼기
  })
}

function onWriteSubmit(e) {                  // 모달창에서 글쓰기 버튼을 누르면 , validation 검증도 함 (필수사항들)
  e.preventDefault();
  var title = writeForm.title;
  var writer = writeForm.writer;
  var upfile = writeForm.upfile;            // upfile은 정보가 나와서 trim안됨
  var content = writeForm.content;
  if(!user) {
    alert('로그인 후 이용하세요')
    return false;
  }
  if(!requiredValid(title)) {
    title.focus();
    return false;
  }
  if(!requiredValid(writer)){
    writer.focus();
    return false;
  }
  if(!upfileValid(upfile)){
    return false;
  }

  var data = {};                           // 여기서 firebase save
  data.user = user.uid;
  data.title = title.value;
  data.writer = writer.value;
  data.content = content.value;
  data.createAt = new Date().getTime();
	data.sort = -data.createAt;
  db.limitToLast(1).get().then(getLastIdx).catch(onGetError);

  function getLastIdx(r) {
    if(r.numChildren() === 0) {
      data.idx = 1;
    }
    else {
      r.forEach(function(v) {
        data.idx = Number(v.val().idx) + 1
      });
    }

    if(upfile.files.length) {                // 파일이 존재하면 처리 로직
      var file = upfile.files[0];
      var savename = genFile();
      var uploader = storage.child(savename.folder).child(savename.file).put(file);
      uploader.on('state_changed', onUploading, onUploadError, onUploaded);
      data.file = {
        folder: 'root/board/'+savename.folder,
        name: savename.file
      }
    }
    else {
      onClose();
      db.push(data).key;                     //  firebase 저장 명령어
    }
  }

  

  function onUploading(snapshot) {        // 파일이 업로드 되는 동안
    loading.style.display = 'flex';
    upload = snapshot;
  }
  
  function onUploaded() {                 // 파일 업로드 완료 후
    loading.style.display = 'none';
    upload.ref.getDownloadURL().then(onSuccess).catch(onError);
  }
  
  function onUploadError(err) {           // 파일 업로드 실패시
    if(err.code === 'storage/unauthorized') location.href = '../403.html'
    else {
      loading.style.display = 'none';
      alert('파일 업로드에 실패하셨습니다. 관리자에게 문의 후 다시 시도해 주세요.');
      console.log('error', err);
    }
  }

  function onSuccess(r) {                 // r: 실제 웹으로 접근 가능한 경로
    onClose();
    data.file.path = r;
    db.push(data).key;                    //  firebase 저장 명령어
  }

  function onError(err) {
    loading.style.display = 'none';
    alert('파일 가져오기에 실패하셨습니다. 다시 시도해 주세요.');
    console.log(err);
  }
}

function onRequiredValid(e) {
  requiredValid(this);
}

function requiredValid(el) {               //  title, write에서 blur되거나 keyup되면
  var next = $(el).next()[0];
  if(el.value.trim() === '') {
    el.classList.add('active');
    next.classList.add('active');
    return false;
  }
  else {
    el.classList.remove('active');
    next.classList.remove('active');
    return true;
  }
}

function onUpfileChange(e) {                // upfile에서 값이 change되면 -> 확장자(타입) 검증
  upfileValid(this);
}

function upfileValid(el) {
  var next = $(el).next()[0];
  if(el.files.length > 0 && allowType.indexOf(el.files[0].type) === -1) {
    el.classList.add('active');
    next.classList.add('active');
    return false;
  }
  else {
    el.classList.remove('active');
    next.classList.remove('active');
    return true;
  }
}

function onLoadingClick(e) {                //  로딩바가 돌때 클릭 막기
  e.preventDefault();
  e.stopPropagation();
}

/*************** event init *********************/
auth.onAuthStateChanged(onAuthChanged);
btLogin.addEventListener('click', onLogin);
btLogout.addEventListener('click', onLogout);
btWrite.addEventListener('click', onWrite);
btClose.addEventListener('click', onClose);
btReset.addEventListener('click', onWriteReset);
writeForm.addEventListener('submit', onWriteSubmit);

writeForm.title.addEventListener('blur', onRequiredValid);
writeForm.title.addEventListener('keyup', onRequiredValid);

writeForm.writer.addEventListener('blur', onRequiredValid);
writeForm.writer.addEventListener('keyup', onRequiredValid);

writeForm.upfile.addEventListener('change', onUpfileChange);

loading.addEventListener('click', onLoadingClick);

// db.on('child_added', onAdded);
// db.on('child_changed', onChanged);
// db.on('child_remove', onRemove);

/*************** start init *********************/
listInit();
