// 6-script.js

// Wait for the DOM content to be fully loaded before manipulating it
$(document).ready(function () {
  // Use jQuery to handle click event on the DIV#update_header
  $('#update_header').click(function () {
    // Select the <header> element and update its text
    $('header').text('New Header!!!');
  });
});
