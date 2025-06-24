
    const loginTab = document.getElementById("loginTab");
    const signupTab = document.getElementById("signupTab");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    loginTab.onclick = () => {
      loginTab.classList.add("active");
      signupTab.classList.remove("active");
      loginForm.classList.add("active");
      signupForm.classList.remove("active");
    };

    signupTab.onclick = () => {
      signupTab.classList.add("active");
      loginTab.classList.remove("active");
      signupForm.classList.add("active");
      loginForm.classList.remove("active");
    };

    async function handleLogin() {
      const user = document.getElementById("loginUser").value.trim();
      const pass = document.getElementById("loginPass").value.trim();

      if (!user || !pass) {
        alert("Please fill in all fields.");
        return;
      }

      try {
       const response = await fetch(`${BASE_URL}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: user, password: pass })
        });

        const data = await response.json();

        if (response.ok && data.message === 'Login successful') {
          alert(data.message);
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location.href = "home.html";
        } else {
          alert(data.message || "Login failed");
        }
      } catch (err) {
        alert("Login failed. Please try again.");
        console.error(err);
      }
    }

    async function handleSignup() {
      const name = document.getElementById("signupName").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const pass = document.getElementById("signupPass").value.trim();

      if (!name || !email || !pass) {
        alert("Please fill in all fields.");
        return;
      }

      try {
const response = await fetch(`${BASE_URL}/signup`, {
            method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password: pass })
        });

        const data = await response.json();
if (response.status === 201) {
  alert(data.message);
  localStorage.setItem("user", JSON.stringify({ name, email }));
  window.location.href = "home.html";
} else {
  alert(data.message || "Signup failed");
}

      } catch (err) {
        alert("Signup failed. Please try again.");
        console.error(err);
      }
    }
