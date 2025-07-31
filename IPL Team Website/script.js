document.getElementById('pollForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('pollMessage').textContent = "Thanks for voting! (Demo only.)";
});
