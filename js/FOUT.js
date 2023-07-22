//flash of unstyled text FOUT

 // Function to load the Roboto font from Google Fonts
 function loadFont() {
    const webFontScript = document.createElement('script');
    webFontScript.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(webFontScript, firstScript);
  }

  // Function to show the content once the font is ready
  function showContent() {
    document.documentElement.classList.remove('fonts-loading');
    document.documentElement.classList.add('fonts-loaded');
  }

  // Event listener to load the font and show the content
  document.addEventListener('DOMContentLoaded', function() {
    loadFont();
    WebFontConfig = {
      google: { families: ['Roboto:400,400i,500,500i,700,700i'] },
      active: showContent
    };
  });