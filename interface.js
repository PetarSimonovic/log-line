$(document).ready(function() {
  var prompt = new Prompt();
  updateLogLine()

  function updateLogLine() {
  $('#logline').text(prompt.constructLogLine());
  }


})
