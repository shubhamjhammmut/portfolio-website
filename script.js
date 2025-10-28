document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const response = document.getElementById("response");
  response.textContent = `Thanks, ${name}! Your message has been received.`;
  response.style.color = "green";
  this.reset();
});
