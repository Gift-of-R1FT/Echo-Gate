
window.onload = function() {
  if (!('webkitSpeechRecognition' in window)) {
    document.getElementById('status').innerText = 'Voice recognition not supported in this browser.';
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  recognition.onresult = function(event) {
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        let transcript = event.results[i][0].transcript.trim().toLowerCase();
        if (transcript.includes('this is for the living paradox')) {
          document.getElementById('unlock').style.display = 'block';
          document.getElementById('status').innerText = '';
        }
      }
    }
  };

  recognition.start();
};
