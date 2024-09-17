function Mobile() {
  let mobile = document.getElementById("mob").value;
  let err1 = document.getElementById("err1");
  console.log(mobile.length);
  if (mobile.length == 0) {
    err1.innerText = 'Please enter number type';
    err1.style.color = 'red';
  } else if (isNaN(mobile)) {
    err1.innerText = "please enter only numeric type!";
    err1.style.color = 'red'
  } else if (mobile.length < 5 || mobile.length > 10) {
    err1.innerText = "Please enter 5 upto 9 digite!";
    err1.style.color = 'red'
  } else {
    err1.innerText = '';
  }
}