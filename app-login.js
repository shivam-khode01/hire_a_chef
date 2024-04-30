// Define userInfo outside event listeners
var userInfo = {};

document.getElementById('customerOption').addEventListener('click', function() {
  document.getElementById('customerForm').style.display = 'block';
  document.getElementById('chefForm').style.display = 'none';

  // Gather input data for customer
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var name = document.getElementById('customerName').value;
  var address = document.getElementById('customerAddress').value;
  var phone = document.getElementById('customerPhone').value;

  // Assign customer info to userInfo
  userInfo = { userType: 'customer', name, address, phone };
});

document.getElementById('chefOption').addEventListener('click', function() {
  document.getElementById('chefForm').style.display = 'block';
  document.getElementById('customerForm').style.display = 'none';

  // Gather input data for chef
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var education = document.getElementById('education').value;
  var degree = document.getElementById('degree').value;
  var occupation = document.getElementById('occupation').value;
  var duration = document.getElementById('duration').value;

  // Assign chef info to userInfo
  userInfo = { userType: 'chef', education, degree, occupation, duration };
});

function login() {
  // Redirect to index.html after login
  
 alert("successfully !! logged in as shivam khode ");
  window.location.href = 'index.html';
}

document.getElementById('loginButton').addEventListener('click', login);
