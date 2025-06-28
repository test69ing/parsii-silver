
const validCode = "SILVER01TEST";
const password = "PA1STCO";
let currentStep = 1;

function verifyCode() {
  const input = document.getElementById("codeInput").value;
  if (input === validCode) {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("coupon-section").classList.remove("hidden");
  } else {
    alert("Invalid Code");
  }
}

function applyCoupon(step) {
  if (step > currentStep) {
    alert("Locked. Complete the previous step first.");
    return;
  }

  const entered = prompt("Enter Password to Apply Coupon:");
  if (entered !== password) {
    alert("Wrong password.");
    return;
  }

  document.getElementById("step" + step).querySelector("button").innerText = "Used";
  document.getElementById("step" + step).classList.add("locked");

  currentStep++;

  if (currentStep <= 5) {
    const next = document.getElementById("step" + currentStep);
    next.classList.remove("locked");
    next.querySelector("button").innerText = "Apply";
  }

  if (step === 5) {
    document.getElementById("message").innerHTML =
      "🎉 Congratulations! You’ve earned a beautiful saree and a shiny Gold coupon!";
  }
}
