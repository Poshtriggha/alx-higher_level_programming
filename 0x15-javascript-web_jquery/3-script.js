// 3-script.js

// Wait for the DOM content to be fully loaded before manipulating it
$(document).ready(function () {
  // Use jQuery to handle click event on the DIV#red_header
  $('#red_header').click(function () {
    // Select the <header> element and add the class "red"
    $('header').addClass('red');
  });
});
