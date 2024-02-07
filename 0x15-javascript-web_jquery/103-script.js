// 103-script.js

// Wait for the DOM content to be fully loaded before manipulating it
$(document).ready(function () {
  // Function to fetch and display the translation
  function fetchTranslation() {
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
  }

  // Handle click event on INPUT#btn_translate
  $('#btn_translate').click(fetchTranslation);

  // Handle keypress event on INPUT#language_code
  $('#language_code').keypress(function (event) {
    // Check if the pressed key is ENTER (key code 13)
    if (event.which === 13) {
      // Fetch and display the translation
      fetchTranslation();
    }
  });
});
