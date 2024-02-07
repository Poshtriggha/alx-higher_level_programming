// 102-script.js

// Wait for the DOM content to be fully loaded before manipulating it
$(document).ready(function () {
  // Use jQuery to handle click event on the INPUT#btn_translate
  $('#btn_translate').click(function () {
    // Get the language code entered by the user
    var languageCode = $('#language_code').val();

    // Use jQuery to make an AJAX request to fetch the translation
    $.ajax({
      url: 'https://www.fourtonfish.com/hellosalut/hello/',
      method: 'GET',
      data: { lang: languageCode },
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
});
