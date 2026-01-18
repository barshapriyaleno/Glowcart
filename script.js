// =====================
// SIMULATED DATABASE
// =====================
const users = [
  { email: "admin@glowcart.com", password: "admin123" },
  { email: "user@glowcart.com", password: "user123" },
  { email: "demo@glowcart.com", password: "demo123" }
];

// =====================
// LOGIN
// =====================
function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const validUser = users.find(
    u => u.email === email && u.password === password
  );

  if (validUser) {
    localStorage.setItem("loggedInUser", email);
    window.location.href = "home.html";
  } else {
    document.getElementById("msg").innerText =
      "Invalid email or password";
  }
}

// =====================
// BLOCK DIRECT ACCESS
// =====================
function checkLogin() {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    window.location.href = "index.html";
  }
}

// =====================
// LOGOUT
// =====================
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}

// =====================
// SECTION SWITCH
// =====================
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.style.display = "none");
  document.getElementById(sectionId).style.display = "block";
}

// =====================
// BUY NOW
// =====================
function buyNow() {
  alert("✅ Order Successful!");
}
