1/*************** global init ********************/
var auth = firebase.auth();
var googleAuth = new firebase.auth.GoogleAuthProvider();
var firebaseDatabase = firebase.database();
var firebaseStorage = firebase.storage();
var db = firebaseDatabase.ref('root/board');
var storage = firebaseStorage.ref('root/board');
var user = null;

/*************** element init ********************/
var btSave = document.querySelector('.write-wrapper .bt-save')       // 글작성 버튼
var btLogin = document.querySelector('.header-wrapper .bt-login')    // 로그인 버튼
var btLogout = document.querySelector('.header-wrapper .bt-logout')  // 로그아웃 버튼
var btWrite = document.querySelector('.list-wrapper .bt-write')       // 글쓰기 버튼
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

function onWriteSubmit(e) { // 모달창에서 글쓰기 버튼을 누르면 , validation 검증도 함 (필수사항)
  e.preventDefault();
  var title = writeForm.title.value.trim();
  var write = writeForm.write.value.trim();
  var upfile = writeForm.upfile.files;    // upfile은 정보가 나와서 trim안됨
  var content = writeForm.content.value.trim();

  if(title === '') {

  }
  if(write === ''){

  }
}

function onRequiredValid(e) {  //  title, write에서 blur되거나 keyup되면
  // var el = this; // e.target
  var next = $(this).next()[0];  // $().next()
  if(this.value.trim() === '') {
    this.classList.add('active');
    next.style.display = 'block';
    return false;
  }
  else {
    this.classList.remove('active');
    next.style.display = 'none';
    return true;
  }
}

function onUpFileBlur(e) { // upfile에서 blur되면

}



/*************** event init *********************/
auth.onAuthStateChanged(onAuthChanged);
btLogin.addEventListener('click', onLogin);
btLogout.addEventListener('click', onLogout);
btWrite.addEventListener('click', onWrite);
writeForm.addEventListener('submit', onWriteSubmit);

writeForm.title.addEventListener('blur', onRequiredValid);
writeForm.title.addEventListener('keyup', onRequiredValid);

writeForm.writer.addEventListener('blur', onRequiredValid);
writeForm.writer.addEventListener('keyup', onRequiredValid);

writeForm.upfile.addEventListener('blur', onUpFileBlur);





/*************** start init *********************/

