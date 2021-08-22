/*************** global init ********************/
var auth = firebase.auth();
var database = firebase.database();
var storage = firebase.storage();
var googleAuth = new firebase.auth.GoogleAuthProvider();
var dbRoot = database.ref('root')
var stRoot = storage.ref().child('imgs');
var user = null;


/*************** user function ******************/
function genFile() {
  var folder = moment().format('YYYYMMDDHH')
  return {
    folder : folder,
    file : folder + '_' + uuidv4()
  }
}

/*************** event callback *****************/
function onAuthChanged(r) {
  user = r;
  if(user) {
    $('.bt-login').hide();
    $('.bt-logout').show();
  }
  else {
    $('.bt-login').show();
    $('.bt-logout').hide();
  }
}

function onLogin() {
  auth.signInWithPopup(googleAuth);
}

function onLogout() {
  auth.signOut();
}

function onSubmit(e) {
  e.preventDefault();
  var el = document.querySelector('input[name="upfile"]')
  if(el.files.length && user) {
    var file = document.querySelector('input[name="upfile"]').files[0];
    console.log("🚀 ~ file: 08.file copy.js ~ line 46 ~ onSubmit ~ file", file)
    var savename = genFile();
    var uploader = stRoot.child(savename.folder).child(savename.file).put(file);
    uploader.on('state_changed', onUploading, onUploadError, onUploaded);
  }

  function onUploading(snapshot) {
    upfile = snapshot;
    console.log(snapshot);
  }
  
  function onUploadError(err) {
    console.log(err);
  }
  
  function onUploaded(snapshot) {
    upfile.ref.getDownloadURL().then(onSuccess).catch(onError);
    // upfile.ref.getMetadata().then(onSuccess).catch(onError);
  }
   
  function onSuccess(r) {
    console.log(r);
    var saveData = {
      name: file.name,
      size: file.size,
      type: file.type.split('/').pop(),
      savename: savename,
      path: path
    }
    console.log("🚀 ~ file: 08.file copy.js ~ line 75 ~ onSuccess ~ saveData", saveData)
  }
  
  function onError(err) {
    console.log(err);
  }
}

/*************** event init *********************/
auth.onAuthStateChanged(onAuthChanged);
$('form[name="uploadForm"]').submit(onSubmit);
$('.bt-login').click(onLogin);
$('.bt-logout').click(onLogout);

/*************** start init *********************/