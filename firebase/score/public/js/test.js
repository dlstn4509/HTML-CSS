function onWriteSubmit(e) {                  // 모달창에서 글쓰기 버튼을 누르면 , validation 검증도 함 (필수사항들)
  e.preventDefault();
  var title = writeForm.title;
  var writer = writeForm.writer;
  var upfile = writeForm.upfile;            // upfile은 정보가 나와서 trim안됨
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

  function onRequiredValid(e) {
    requiredValid(this);
  }

writeForm.title.addEventListener('blur', onRequiredValid);
writeForm.title.addEventListener('keyup', onRequiredValid);

writeForm.writer.addEventListener('blur', onRequiredValid);
writeForm.writer.addEventListener('keyup', onRequiredValid);

writeForm.upfile.addEventListener('change', onUpfileChange);