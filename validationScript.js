    // JavaScript code for form validation
	// Prevent form from submitting
  let myForm = document.getElementById('myForm');
  myForm.addEventListener('submit', ev=> {
//    ev.preventDefault();
//  })

      // Retrieve the input field value
      var inputValue = document.getElementById('inputField').value;

      //let btnSubmit = document.getElementById('btnsubmit');
      //btnSubmit.addEventListener('click', function() {
        
      // Regular expression pattern for alphanumeric input
      var regexVal = /^[a-zA-Z0-9]*$/;
        // Check if the input value matches the pattern
        if (regexVal.test(inputValue)) {
          // Valid input: display confirmation and submit the form
          alert("Input is valid.");
          return true;
        }
        else {
          // Invalid input: display error message
          alert("Error: Invalid input.");
          preventDefault();
          return false;
        }
      });