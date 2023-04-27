function onPageLoad() {
  let form = document.querySelector("form");
  function formSubmission(event) {
    event.preventDefault();
    const q1 = document.querySelector("input[name='q1']:checked").value;
    const q2 = document.querySelector("input[name='q2']:checked").value;
    const q3 = document.querySelector("input[name='q3']:checked").value;
    const q4 = document.querySelector("input[name='q4']:checked").value;
    const q5 = document.querySelector("input[name='q5']:checked").value;
  }
  form.addEventListener("submit", formSubmission);
}

window.addEventListener("load", onPageLoad)