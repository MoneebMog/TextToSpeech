function speak() {
  // Get the text from the textarea
  var text = document.getElementById("text").value;
  // Get the button
  var button = document.getElementById("speak-button");
  // Get the selected voice from the dropdown menu
  var voiceSelect = document.getElementById("voice-select");
  var voice = voiceSelect.value;

  // Use the SpeechSynthesis API to speak the text
  var synth = window.speechSynthesis;
  var utterance = new SpeechSynthesisUtterance(text);
  // Set the voice based on the selected option
  if (voice !== "default") {
      utterance.voice = synth.getVoices().find(function(v) {
          return v.lang === voice;
      });
  };
  synth.speak(utterance);
}
