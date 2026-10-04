const password = document.getElementById("password");
const button = document.getElementById("button");
const result = document.getElementById("result");
const checkPassword = (val) => {
  let score = 0;
  if (val.length >= 12) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[a-z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;

  switch (score) {
    case 0:
      return "No Password";
    case 1:
      return "Weak";
    case 2:
    case 3:
    case 4:
      return "Medium";
    default:
      return "Strong";
  }
};

button.addEventListener("click", () => {
  const value = password.value;
  const message = checkPassword(value);
  result.textContent = message;
});
