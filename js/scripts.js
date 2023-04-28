function onPageLoad() {
  let form = document.querySelector("form");
  function formSubmission(event) {
    event.preventDefault();
    const name = document.querySelector("input#name").value;
    const q1 = document.querySelector("input[name='q1']:checked").value;
    const q2 = document.querySelector("input[name='q2']:checked").value;
    const q3 = document.querySelector("input[name='q3']:checked").value;
    const q4 = document.querySelector("input[name='q4']:checked").value;
    const q5 = document.querySelector("input[name='q5']:checked").value;
    let a1 = 0;
    let a2 = 0;
    let a3 = 0;
    if (q1 === "Answer 1") {
      a1 = 1;
    }
    else if (q1 === "Answer 2") {
      a2 = 1;
    }
    else if (q1 === "Answer 3") {
      a3 = 1;
    }
    if (q2 === "Answer 1") {
      a1 = a1 + 1;
    }
    else if (q2 === "Answer 2") {
      a2 = a2 + 1;
    }
    else if (q2 === "Answer 3") {
      a3 = a3 + 1;
    }
    if (q3 === "Answer 1") {
      a1 = a1 + 1;
    }
    else if (q3 === "Answer 2") {
      a2 = a2 + 1;
    }
    else if (q3 === "Answer 3") {
      a3 = a3 + 1;
    }
    if (q4 === "Answer 1") {
      a1 = a1 + 1;
    }
    else if (q4 === "Answer 2") {
      a2 = a2 + 1;
    }
    else if (q4 === "Answer 3") {
      a3 = a3 + 1;
    }
    if (q5 === "Answer 1") {
      a1 = a1 + 1;
    }
    else if (q5 === "Answer 2") {
      a2 = a2 + 1;
    }
    else if (q5 === "Answer 3") {
      a3 = a3 + 1;
    }
    if (a1 >= a2 && a1 >= a3) {
      document.querySelector("p").innerText = name + ", you should study Coding language 1.";
    }
    else if (a2 > a1 && a2 >= a3) {
      document.querySelector("p").innerText = name + ", you should Coding language 2.";
    }
    else {
      document.querySelector("p").innerText = name + ", you should study Coding language 3.";
    }
  }
  form.addEventListener("submit", formSubmission);
}

window.addEventListener("load", onPageLoad);