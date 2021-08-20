1/*************** global init ********************/
var auth = firebase.auth();
var googleAuth = new firebase.auth.GoogleAuthProvider();
var firebaseDatabase = firebase.database();
var firebaseStorage = firebase.storage();
var db = firebaseDatabase.ref('root/board');
var storage = firebaseStorage.ref('root/board');
var user = null;
var allowType = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4']

/*************** element init ********************/
var btSave = document.querySelector('.write-wrapper .bt-save')       // 글작성 버튼
var btLogin = document.querySelector('.header-wrapper .bt-login')    // 로그인 버튼
var btLogout = document.querySelector('.header-wrapper .bt-logout')  // 로그아웃 버튼
var btWrite = document.querySelector('.list-wrapper .bt-write')       // 글쓰기 버튼
var btClose = document.querySelector('.write-wrapper .bt-close')       // 모달창 닫기 버튼
var btReset = document.querySelector('.write-wrapper .bt-reset')       // 모달창 리셋 버튼
var writeWrapper = document.querySelector('.write-wrapper')          
var writeForm = document.writeForm;                                  // 글작성 form

/*************** user function ******************/


/*************** event callback *****************/
function onAuthChanged(r) {  // onAuthStateChanged
  user = r;
  if(user) { // 로그인 되면 ui가 할 일
    btLogin.style.display = 'none';
    btLogout.style.display = 'block';
  }
  else {     // 로그아웃 되면 ui가 할 일
    btLogin.style.display = 'block';
    btLogout.style.display = 'none';
  }
}
// login
function onLogin() {
  auth.signInWithPopup(googleAuth);
}

function onLogout() {
  auth.signOut();
}

function onWrite() { // 모달창이 오픈되면 (글작성 버튼)
  $(writeWrapper).stop().fadeIn(300);
  writeForm.title.focus();
}

function onClose() { // 모달창이 닫히면
  $(writeWrapper).stop().fadeOut(300);
  onWriteReset();
}

function onWriteReset(e) {  // 초기화 (모달창 닫으면 실행)
  writeForm.title.value = '';
  writeForm.title.classList.remove('active');
  writeForm.writer.value = '';
  writeForm.writer.classList.remove('active');
  writeForm.content.value = '';
  document.querySelectorAll('.required-comment').forEach(function(v, i){
    v.classList.remove('active');
  })
}

function onWriteSubmit(e) { // 모달창에서 글쓰기 버튼을 누르면 , validation 검증도 함 (필수사항)
  e.preventDefault();
  var title = writeForm.title;
  var writer = writeForm.writer;
  var upfile = writeForm.upfile;    // upfile은 정보가 나와서 trim안됨
  var content = writeForm.content;
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
  // 여기서 firebase save
  var data = {};
  data.user = user.uid;
  data.title = title.value;
  data.writer = writer.value;
  data.content = content.value;
  data.file = (upfile.files.length) ? upfile.files[0] : {};
  db.push(data).key;  //  firebase 저장 명령어
}

function onRequiredValid(e) {
  requiredValid(this);
}

function requiredValid(el) {  //  title, write에서 blur되거나 keyup되면
  // var el = this; // e.target
  var next = $(el).next()[0];  // $().next()
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

function onUpfileChange(e) { // upfile에서 값이 change되면 -> 확장자(타입) 검증
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





/*************** start init *********************/

