$(document).ready(function() {
  var prompt = new Prompt();
  updateLogLine("Press Story Mode to create a work of fiction or use Excuse Mode to justify your actions")

  function updateLogLine(text) {
  $('#logline').text(text);
  }

  $('#story').on('click', function() { // event listener
    updateLogLine(prompt.constructLogLine());
  })

  $('#excuse').on('click', function() { // event listener
    updateLogLine(prompt.constructExcuse());
  })



})
