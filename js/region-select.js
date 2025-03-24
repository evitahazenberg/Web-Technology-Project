const regionSelect = document.querySelector(".region-select");
regionSelect.addEventListener("change", handleSelectChange);

function handleSelectChange(event) {
  const currentValue = event.target.value;
  if (currentValue === "Europe") {
    window.location.href = "europe.html";
  }
}


// Source: https://sentry.io/answers/get-selected-value-in-dropdown-list-using-javascript/