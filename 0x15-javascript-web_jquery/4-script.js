// 4-script.js

// Wait for the DOM content to be fully loaded before manipulating it
$(document).ready(function () {
  // Use jQuery to handle click event on the DIV#toggle_header
  $('#toggle_header').click(function () {
    // Select the <header> element
    var headerElement = $('header');

    // Toggle between "red" and "green" classes
    if (headerElement.hasClass('red')) {
      headerElement.removeClass('red').addClass('green');
    } else {
      headerElement.removeClass('green').addClass('red');
    }
  });
});
