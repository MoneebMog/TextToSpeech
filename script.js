function speak() {
    // Get the text from the textarea
    var text = document.getElementById("text").value;
    // Get the button
    var button = document.getElementById("speak-button");
    // Disable the button
    button.disabled = true;
  
    // Use the SpeechSynthesis API to speak the text
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(text);
    // Add an event listener to detect when speaking is done
    utterance.addEventListener('end', function() {
      // Enable the button when speaking is done
      button.disabled = false;
    });
    synth.speak(utterance);
  }
  