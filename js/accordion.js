var acc = document.getElementsByClassName("accordion-header");
var accCountry = document.getElementsByClassName("accordion-country");
var i;

for (i = 0; i < acc.length; i++) {
  // Add a click event listener to each accordion header
  acc[i].addEventListener("click", function() {
    
    // Add or remove the active class on the clicked header
    this.classList.toggle("active");
    // Get the next element sibling, which is the accordion content
    var panel = this.nextElementSibling;

    // If the panel has a max-height, remove it
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      // Otherwise, set the max-height to the scroll height of the panel
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

for (i = 0; i < accCountry.length; i++) {
  // Add a click event listener to each accordion country header
  accCountry[i].addEventListener("click", function() {
    
    // Add or remove the active class on the clicked header
    this.classList.toggle("active");
    // Get the next element sibling, which is the accordion content
    var panel = this.nextElementSibling;

    // If the panel has a max-height, remove it
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      // Otherwise, set the max-height to the scroll height of the panel
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Source: https://www.w3schools.com/howto/howto_js_accordion.asp