document.addEventListener("DOMContentLoaded", function() {
  const sections = [
    {
      heading: "Organisation Information",
      questions: [
        { text: "• Enter the number of Full time Employees:", type: "number"},
        { text: "• Enter the number of Part-Time Employees/Consultants/Interns:", type: "number"},
        { text: "• Enter the number of Employees in largest Office:", type: "number" }
      ]
    },
    {
      heading: "Information Security Certifications",
      questions: [
        {text:  "• ISO27001:2022", type: "radio", options: ["Yes", "No"]},
         {text: "• NIST800-53", type: "radio", options:["Yes", "No"]},
         {text: "• SOC2 TypeII", type: "radio", options:["Yes", "No"]} 
        ]
    },
    {
      heading: "Data Privacy or Protection Certifications",
      questions: [
        {text:"• GDPR", type: "radio", options:["Yes", "No"]},
        {text:"• ISO27701", type: "radio", options: ["Yes", "No"] }
      ]
    },
    {
      heading: "Cyber-Liability Insurance",
      questions: [
        {text: "• Do you have cyber liability Insurance?", type: "radio" , options:["Yes", "No"]},
        {text: "• Coverage Amount?", type: "number"}, 
        {text: "• Is ransomware attack covered?", type: "radio" , options: ["Yes", "No"]}
      ]
    },
    {
      heading: "IT and Cybersecurity Expenditure",
      questions: [
        {text: "• IT & cybersecurity expenditure as % of total revenue:", type: "number"},
        {text: "• IT & cybersecurity expenditure as % of IT budget:", type:"number"},
      ]
    }
  ];

  let currentSectionIndex = 0;

  function displayQuestions() {
    const section = sections[currentSectionIndex];
    const formContainer = document.getElementById("formContainer");

    
    formContainer.innerHTML = "";

    
    formContainer.innerHTML += `<h2>${section.heading}</h2>`;

   
    const questionsHTML = section.questions.map((question, index) => `
      <div class="question">
        <label>${question.text}</label>
        ${question.type === "radio" ?
          question.options.map(option => `
            <div class="checkbox-container">
              <label for="question${index}_${option.toLowerCase()}">${option}</label>
              <input type="radio" id="question${index}_${option.toLowerCase()}" name="question${index}" value="${option}">
            </div>
          `).join('') :
          `<input type="${question.type}" name="question${index}" ${question.type === "number" ? "pattern='[0-9]*'" : ""}>`
        }
      </div>
    `).join('');

    formContainer.innerHTML += `<div class="question-container">${questionsHTML}</div>`;

    
    formContainer.innerHTML += `<button id="nextButton">Next</button>`;

    
    document.getElementById("nextButton").addEventListener("click", next);

    
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, index) => {
      setTimeout(() => {
        question.classList.add('show');
      }, index * 100); 
    });
  }

  function next() {
    const section = sections[currentSectionIndex];
    const formContainer = document.getElementById("formContainer");

    
    const inputs = formContainer.querySelectorAll("input[type=radio], input[type=text], input[type=number]");
    const userInput = Array.from(inputs).map(input => input.value);

  

    
    currentSectionIndex++;
    if (currentSectionIndex < sections.length) {
      displayQuestions();
    } else {
      alert("Thank you for completing the wizard!");
    }
  }

  
  displayQuestions();
});
