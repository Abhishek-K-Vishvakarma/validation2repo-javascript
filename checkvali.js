function change() {
  let inp = document.getElementById("pass").value;
  let err1 = document.getElementById("err1");
  let inp1 = document.getElementById("confirmpass").value;
  let err2 = document.getElementById("err2");

  console.log(inp.length + ":" + inp1.length);

  if (inp.length == 0) {
    err1.innerText = 'Plz enter valid password!';
    err1.style.color = 'red';
  } else if (inp.length < 5 || inp.length > 10) {
    err1.innerText = 'Please enter 9 digite';
  } else {
    err1.innerText = '';
  }

  if (inp1.length == 0) {
    err2.innerText = 'plz confirmPassword!';
    err2.style.color = 'red';
  } else {
    err2.innerText = '';
  }
}
function check() {
  let inp = document.getElementById("pass").value;
  let inp1 = document.getElementById("confirmpass").value;
  let err2 = document.getElementById("err2");
  if (inp != inp1) {
    err2.innerText = "Password not match!";
    err2.style.color = 'red';
  } else {
    err2.innerText = 'Password Success!';
    err2.style.color = "green";
    err2.style.fontSize = '30px';
  }
}