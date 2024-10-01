function myform(event) {
  let errors = false;

  let inp1 = document.getElementById('inp1').value;
  let inp2 = document.getElementById('inp2').value;
  let check = document.getElementById('check').checked;

  let c1 = document.getElementById('c1').checked;
  let c2 = document.getElementById('c2').checked;
  let c3 = document.getElementById('c3').checked;

  let r1 = document.getElementById('r1').checked;
  let r2 = document.getElementById('r2').checked;
  let r3 = document.getElementById('r3').checked;

  let em1 = document.getElementById('em1');
  let em2 = document.getElementById('em2');
  let em3 = document.getElementById('em3');

  let err1 = document.getElementById('err1');
  let err2 = document.getElementById('err2');
  let err3 = document.getElementById('err3');

  let rerr1 = document.getElementById('rerr1');
  let rerr2 = document.getElementById('rerr2');
  let rerr3 = document.getElementById('rerr3');

  let pattern = /^[a-z0-9]+@[a-z]+\.[a-z]+$/;
  console.log(inp1.length + ":" + inp2.length + ":" + check.length);

  if (inp1.length < 5 || inp1.length > 10) {
    em1.innerText = "Please enter between 5 and 10 characters.";
    errors = true;
  } else {
    em1.innerText = "";
  }

  if (!pattern.test(inp2)) {
    em2.innerText = "Please write alphanumeric char and @ symbol only";
    errors = true;
  } else {
    em2.innerText = "";
  }

  if (!check) {
    em3.innerText = "Please check of ckeck box";
    errors = true;
  } else {
    em3.innerText = "";
  }


  if (c1 == '' && c2 == '' && c3 == '') {
    err1.innerText = 'Please first check';
    err2.innerText = 'Please first check';
    err3.innerText = 'Please first check';
    errors = true;
  } else {
    err1.innerText = '';
    err2.innerText = '';
    err3.innerText = '';
  }

  if (r1 == '' && r2 == '' && r3 == '') {
    rerr1.innerText = 'radio button';
    rerr2.innerText = 'radio button';
    rerr3.innerText = 'radio button';
    errors = true;
  } else {
    rerr1.innerText = '';
    rerr2.innerText = '';
    rerr3.innerText = '';
  }

  if (!errors) {
    alert('Form submitted successfully!');
    document.getElementById('myform').submit();
  }

  event.preventDefault();

}
let form = document.getElementById('myform');
form.addEventListener('submit', function (e) {
  myform(e);
});

document.querySelector('.btn-close').addEventListener('click', function () {
  // Option 1: Hide the element
  // document.getElementById('alertBox').style.display = 'none';

  // Option 2: Remove the element from the DOM (alternative to hiding)
  document.getElementById('alertBox').remove();
});
