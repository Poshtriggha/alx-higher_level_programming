// 9-script.js

// Wait for the DOM content to be fully loaded before manipulating it
$(document).ready(function () {
  // Use jQuery to make an AJAX request to fetch the translation
  $.ajax({
    url: 'https://hellosalut.stefanbohacek.dev/?lang=fr',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      // Display the translation in the HTML tag DIV#hello
      $('#hello').text(data.hello);
    },
    error: function (error) {
      console.error('Error fetching translation:', error);
    }
  });
});
