// home.js

// زر تسجيل الخروج
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html"; // يرجع لصفحة تسجيل الدخول
});

// زر الصفحة الرئيسية
document.getElementById("homeBtn").addEventListener("click", () => {
  window.location.href = "home.html";
});

// زر الريلز
document.getElementById("reelsBtn").addEventListener("click", () => {
  window.location.href = "reels.html"; // لازم تنشئ الصفحة لاحقاً
});

// زر الملف الشخصي
document.getElementById("profileBtn").addEventListener("click", () => {
  window.location.href = "profile.html"; // لازم تنشئ الصفحة لاحقاً
});

// مثال بسيط: عند الضغط على زر القلب ❤️ يتغير لونه
document.querySelectorAll(".post-actions button").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "❤️") {
      btn.textContent = "💜"; // إعجاب
    } else if (btn.textContent === "💜") {
      btn.textContent = "❤️"; // إزالة الإعجاب
    }
  });
});