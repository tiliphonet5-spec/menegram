// التأكد أن الصفحة تحتوي على النماذج
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  // تسجيل الدخول
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let email = document.getElementById("loginEmail").value;
      let password = document.getElementById("loginPassword").value;

      // مبدئيًا بدون تحقق حقيقي
      if (email && password) {
        alert("تم تسجيل الدخول ✅");
        window.location.href = "home.html"; // الانتقال للصفحة الرئيسية
      } else {
        alert("الرجاء إدخال البريد وكلمة المرور");
      }
    });
  }

  // إنشاء حساب
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let email = document.getElementById("regEmail").value;
      let password = document.getElementById("regPassword").value;

      if (email && password) {
        // هنا لاحقًا تقدر تحفظ البيانات في قاعدة بيانات (Neon أو Firebase)
        alert("تم تسجيل حسابك ✅");
        window.location.href = "home.html"; // الانتقال للصفحة الرئيسية
      } else {
        alert("الرجاء إدخال البريد وكلمة المرور");
      }
    });
  }
});