// 2-script.js

// Wait for the DOM content to be fully loaded before manipulating it
$(document).ready(function () {
  // Use jQuery to handle click event on the DIV#red_header
  $('#red_header').click(function () {
    // Select the <header> element and update its text color to red
    $('header').css('color', '#FF0000');
  });
});
