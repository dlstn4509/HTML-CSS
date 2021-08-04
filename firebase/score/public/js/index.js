/***************** global init *******************************/
var auth = firebase.auth();
var googleAuth = new firebase.auth.GoogleAuthProvider();
var db = firebase.database();

var user = null;

/***************** function init *******************************/

/***************** event callback *******************************/
function onSubmit (f) {
  if(!user) alert('로그인 후 사용해 주세요.')
  else {
    var data = {
      username: f.username.value.trim(),
      comment: f.comment.value.trim(),
      createdAt: new Date().getTime(),
      uid: user.uid,
      email: user.email
    }
    if (data.username !== '' && data.commen !== '') {
      db.ref('root/test').push(data);
      f.reset();
    }
  }return false;
}

function onAuthChanged(v){        // auth의 상태가 변하면 알려줘
  user = v;
  if(user){
    $('.bt-login').hide();
    $('.bt-logout').show();
    $('.photo-logo img').attr('src', user.photoURL);
    $('.photo-logo').show();
    $('.icon-logo').hide();
  }
  else{
    $('.bt-login').show();
    $('.bt-logout').hide();
    $('.photo-logo').hide();
    $('.icon-logo').show();
  }
}

function onLogin() {
	auth.signInWithRedirect(googleAuth);
	// auth.signInWithPopup(googleAuth);
}

function onLogout() {
  auth.signOut();
}

/***************** event init *******************************/
auth.onAuthStateChanged(onAuthChanged); // auth의 상태가 변하면 알려줘
$('.bt-login').click(onLogin);
$('.bt-logout').click(onLogout);



