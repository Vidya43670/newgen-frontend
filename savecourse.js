// savecourse.js
const user = JSON.parse(localStorage.getItem("user"));
const careerTitle = document.getElementById("careerTitle").innerText;

document.getElementById("saveBtn").onclick = function () {
  if (!user) {
    alert("Please log in to save this course.");
    window.location.href = "login.html";
    return;
  }

  fetch(`${BASE_URL}/saveCourse`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: user.id, career_name: careerTitle }),
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert("✅ Course saved!");
      } else {
        alert("⚠️ Already saved or failed to save.");
      }
    })
    .catch(err => {
      console.error("Save error:", err);
      alert("❌ Could not save course.");
    });
};
