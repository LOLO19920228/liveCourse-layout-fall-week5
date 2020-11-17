$(document).ready(() => {
  console.log('Hello Bootstrap4');
  $("#allAssignmentBtn").click(function (e) {
    e.preventDefault();
    $(this).siblings('#list-tab').slideToggle();
    console.log('Hello Bootstrap666666');
});
});