let btn = document.querySelector(".SubmitClass");
let validateForm = () => {
  // Get all form fields
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const adult = document.getElementById("adult");
  const child = document.getElementById("child");
  const checkin = document.getElementById("checkin-date");
  const checkout = document.getElementById("checkout-date");
  const houseSelection = document.getElementById("house-selection");
  const message = document.getElementById("message");

  // Clear any previous error messages
  clearErrorMessages();

  // Check for empty fields
  if (isEmpty(name.value) || isEmpty(email.value) || isEmpty(phone.value) || isEmpty(adult.value) || isEmpty(child.value) ) {
    alert("Please fill in all required fields.");
    return false;
  }

  // Check email format
  if (!isValidEmail(email.value)) {
    alert("Please enter a valid email address.");
    return false;
  }
  if (!isValidNumber(phone.value)) {
    alert("Please enter a phone email address.");
    return false;
  }
  if (!isValidAdult(adult.value)) {
    alert("No Empty space allowed");
    return false;
  }
  if (!isValidChild(child.value)) {
    alert("No empty space allowed");
    return false;
  }

  return true; // No errors found, submit form
}

btn.addEventListener("click", validateForm);



