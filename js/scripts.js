function onPageLoad() {
  let form = document.querySelector("form");
  function formSubmission(event) {
    event.preventDefault();
  }
  form.addEventListener("submit", formSubmission);
}

window.addEventListener("load", onPageLoad)