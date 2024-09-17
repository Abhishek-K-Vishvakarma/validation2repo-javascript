function FunName() {
  let name = document.getElementById("name").value;
  let pass = document.getElementById("pass").value;
  console.log(name.length + ":" + pass.length);
}


function FunName() {
  let name = document.getElementById("name").value;
  let pass = document.getElementById("pass").value;
  console.log(name.length + ":" + pass.length);
  if (name.length == 0) {
    alert("Enter name:");
  }
  if (pass.length == 0) {
    alert("Enter pass");
  }
}


function FunName() {
  let name = document.getElementById("name").value;
  let pass = document.getElementById("pass").value;
  let err1 = document.getElementById("err1");
  let err2 = document.getElementById("err2");
  console.log(name.length + ":" + pass.length);
  if (name.length == 0) {
    err1.innerText = 'Enter valid name'
    err1.style.color = 'red'
  }
  if (pass.length == 0) {
    err2.innerText = 'Enter valid password'
    err2.style.color = 'red'
  }
}


function FunName() {
  let name = document.getElementById("name").value;
  let pass = document.getElementById("pass").value;
  let err1 = document.getElementById("err1");
  let err2 = document.getElementById("err2");
  console.log(name + ":" + pass);
  if (name.length == 0) {
    err1.innerText = 'Enter valid name'
    err1.style.color = 'red'
  } else {
    err1.innerText = '';
  }
  if (pass.length == 0) {
    err2.innerText = 'Enter valid password'
    err2.style.color = 'red'
  } else {
    err2.innerText = '';
  }
}


function FunName() {
  let city = document.getElementById("city").value;
  let err1 = document.getElementById("err1");
  console.log(city);
  if (city == 0) {
    err1.innerText = 'Select any one city!'
    err1.style.color = 'red';
  } else {
    err1.innerText = '';
  }
}


