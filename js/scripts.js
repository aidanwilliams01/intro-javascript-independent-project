function onPageLoad() {
  let form = document.querySelector("form");
  let formSubmissions = 0;
  function formSubmission(event) {
    event.preventDefault();
    formSubmissions = formSubmissions + 1;
    if (formSubmissions > 3) {
      document.querySelector("h3").setAttribute("class", "");
      document.querySelector("p").innerText = "";
    }
    else {
      const name = document.querySelector("input#name").value;
      const q1 = document.querySelector("input[name='q1']:checked").value;
      const q2 = document.querySelector("input[name='q2']:checked").value;
      const q3 = document.querySelector("input[name='q3']:checked").value;
      const q4 = document.querySelector("input[name='q4']:checked").value;
      const q5 = document.querySelector("input[name='q5']:checked").value;
      let a1 = 0;
      let a2 = 0;
      let a3 = 0;
      q1 === "Answer 1" ? a1 = 1
      : q1 === "Answer 2" ? a2 = 1
      : a3 = 1;
      q2 === "Answer 1" ? a1 = a1 + 1
      : q2 === "Answer 2" ? a2 = a2 + 1
      : a3 = a3 + 1;
      q3 === "Answer 1" ? a1 = a1 + 1
      : q3 === "Answer 2" ? a2 = a2 + 1
      : a3 = a3 + 1;
      q4 === "Answer 1" ? a1 = a1 + 1
      : q4 === "Answer 2" ? a2 = a2 + 1
      : a3 = a3 + 1;
      q5 === "Answer 1" ? a1 = a1 + 1
      : q5 === "Answer 2" ? a2 = a2 + 1
      : a3 = a3 + 1;
      document.querySelector("p").innerText = a1 >= a2 && a1 >= a3 ? `${name}, you should study Ruby.`
      : a2 > a1 && a2 >= a3 ? `${name}, you should study C#.`
      : `${name}, you should study Javascript.`;
    }
  }
  form.addEventListener("submit", formSubmission);
}

window.addEventListener("load", onPageLoad);