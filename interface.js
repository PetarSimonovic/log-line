$(document).ready(function() {
  var prompt = new Prompt();
  updateLogLine()

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
