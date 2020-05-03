const quiz = [
  {
    id: 1,
    question: "Which country sent its navy around the world to fight the Japanese in 1904?",
    options: ['Russia', 'Germany', 'China'],
    answer: 'Russia'
  },
  {
    id: 2,
    question: "Which city was the capital of Australia from 1901 to 1927?",
    options: ['Brisbane', 'Melbourne', 'Sydney'],
    answer: 'Melbourne'
  },
  {
    id: 3,
    question: "What was the former name of New York?",
    options: ['New Munich', 'New Berlin', 'New Amsterdam'],
    answer: 'New Amsterdam'
  },
  {
    id: 4,
    question: "Which French king was called the Sun King?",
    options: ['Louis XIV', 'Napoleon Bornaparte', 'Napoleon'],
    answer: 'Louis XIV'
  },
  {
    id: 5,
    question: "In which city was the Titanic built?",
    options: ['Belfast', 'Stormont', 'Ravenhill Road'],
    answer: 'Belfast'
  }
]
let count = 0;
let score = 0;
let rate = 0;


if (count === 0) {
  document.querySelector('#instanciate').style.display = 'block';
  document.querySelector('.buttons').style.display = 'none';
} else {
  document.querySelector('#instanciate').style.display = 'none';
  document.querySelector('.buttons').style.display = 'block';
}


const clickMe = () => {
  const question = document.querySelector('#questionBox');
  const options = document.querySelector('.option');


  document.querySelector('#showAnswer').style.display = 'none';
  document.querySelector('#instanciate').style.display = 'none';
  document.querySelector('.buttons').style.display = 'block';
  document.querySelector('#showNext').style.display = 'block';
  document.querySelector('.card').style.display = 'block';

  count++;
  rate++;

  document.querySelector('#questionCount').innerHTML = `Question: ${count} of ${quiz.length} `;


  options.innerHTML = '';
  for (let i = 0; i < quiz.length; i++) {
    if (count === quiz[i].id) {
      question.innerHTML = `${quiz[i].id}.)  ${quiz[i].question}</li> `;

      if (count === quiz[i].id) {
        quiz[i].options.forEach(option => {
          const createList = document.createElement('li');
          const createLabel = document.createElement('label')
          const createRadio = document.createElement('input')

          createRadio.setAttribute('type', 'radio');
          createRadio.setAttribute('value', option);
          createRadio.setAttribute('name', 'answer');
          createLabel.setAttribute('for', option);
          createRadio.setAttribute('id', option);
          createRadio.setAttribute('onClick', 'selectAnswer(event)');
          createLabel.appendChild(createRadio);
          createLabel.append(option)
          createList.appendChild(createLabel);

          options.appendChild(createList)
        })
      }
    }
  }
  if (count == quiz.length) {
    document.querySelector('#showNext').style.display = 'none';
    count = quiz.length;
  }


}
function showResult() {
  showAnswer.innerHTML = 'Thanks for taking the quiz, you scored ' + score;
  count = 0;
  rate = 0;
  score = 0;
  document.querySelector('#showAnswer').style.display = 'block';
  document.querySelector('#instanciate').style.display = 'block';
  document.querySelector('.buttons').style.display = 'none';
  document.querySelector('.card').style.display = 'none';
}
const selectAnswer = event => {
  if (event.target.value === quiz[rate - 1].answer) {
    score++
  } else {
    score = score;
  }

  quiz.forEach(test => {
    if (count === test.id) {
      const allInput = document.querySelectorAll('input');
      for (let i = 0; i < allInput.length; i++) {
        if (allInput[i].value === test.answer) {
          allInput[i].setAttribute('disabled', 'true');
          const parent = allInput[i].parentNode;
          parent.classList.add('correct');
        } else {
          allInput[i].setAttribute('disabled', 'true');
          const parent = allInput[i].parentNode;
          parent.classList.add('wrong');
        }
      }

    }
  })


}
