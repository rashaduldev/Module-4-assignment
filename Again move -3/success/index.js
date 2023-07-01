// Create a function to be called when the button is clicked
function showText() {
    // Get the input element by its ID
    var input = document.getElementById('myInput');
    
    // Get the paragraph element by its ID
    var paragraph = document.getElementById('myParagraph');
    
    // Set the text content of the paragraph to the input value
    paragraph.textContent = input.value;
  }
  
  // Attach an event listener to the button
  var button = document.getElementById('myButton');
  button.addEventListener('click', showText);
  