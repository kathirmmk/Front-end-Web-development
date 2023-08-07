function isValidEmail(email) {
  const emailCondition = /^\S+@\S+\.\S+$/;
  return emailCondition.test(email);
}

function isValidMobileNumber(mobileno) {
  const mobileCondition = /^\d{10}$/;
  return mobileCondition.test(mobileno);
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  toTable();
});

function toTable() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobileno = document.getElementById("mobileno").value;
  const emailInput = document.getElementById("email");
  const mobilenoInput = document.getElementById("mobileno");

  if(name == 0 || email == 0 || mobileno == 0) {
    alert('Please fill all the fields');
    return;
  }
  else if (!isValidEmail(email) && !isValidMobileNumber(mobileno)) {
    alert('Invalid email and mobile no');
    return;
  } 
  else if (!isValidEmail(email)) {
    alert("Invalid email address");
    emailInput.classList.add("error-input");
    return;
  } 
  else if (!isValidMobileNumber(mobileno)) {
    alert("Invalid mobile number");
    mobilenoInput.classList.add("error-input");
    return;
  }
  else {
    mobilenoInput.classList.remove("error-input");
  }

  const tableBody = document.getElementById("tableBody");
  const newRow = tableBody.insertRow();
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);

  cell1.innerHTML = name;
  cell2.innerHTML = email;
  cell3.innerHTML = mobileno;
  cell4.innerHTML = '<button onclick="editRow(this)">Edit</button>';
  cell5.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

  document.getElementById("myForm").reset();
}

function editRow(button) {
  const row = button.parentNode.parentNode;
  const name = row.cells[0];
  const email = row.cells[1];
  const mobileno = row.cells[2];

  const newName = prompt("Enter new name:", name.innerHTML);
  const newEmail = prompt("Enter new email:", email.innerHTML);
  const newMobileNo = prompt("Enter new mobile number:", mobileno.innerHTML);

  if (!isValidEmail(newEmail)) {
    alert("Please enter a valid email address");
    return;
  }

  if (!isValidMobileNumber(newMobileNo)) {
    alert("Please enter a 10-digit number");
    return;
  }

  name.innerHTML = newName;
  email.innerHTML = newEmail;
  mobileno.innerHTML = newMobileNo;
}

function createRow() {
  const tableBody = document.getElementById("tableBody");
  const newRow = tableBody.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);

  cell1.innerHTML = prompt("Enter any name");
  cell2.innerHTML = prompt("Enter your email");
  cell3.innerHTML = prompt("Enter your mobile no");
  cell4.innerHTML = '<button onclick="editRow(this)">Edit</button>';
  cell5.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

  newRow.classList.add("error-row");
}

function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.remove();
}