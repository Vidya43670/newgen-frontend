function saveCourseForUser(courseName) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !user.id) {
    alert("Please log in to save this course.");
    return;
  }

  const data = {
    user_id: user.id,
    career_name: courseName
  };

  fetch("http://localhost:5000/save-career", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    if (response.message.includes("successfully")) {
      alert("✅ Course saved to your profile!");
    } else {
      alert("⚠️ " + response.message);
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("❌ Could not save course. Please try again later.");
  });
}
