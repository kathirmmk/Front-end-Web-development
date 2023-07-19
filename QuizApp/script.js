const quizData = [{
        question: "WHAT IS THE CAPITAL OF INDIA?",
        a: "Assam",
        b: "Gujarat",
        c: "Tamil Nadu",
        d: "New Delhi",
        correct: "d",
    },
    {
        question: "WHAT IS THE CAPITAL OF ENGLAND?",
        a: "Tokyo",
        b: "London",
        c: "Berlin",
        d: "Denver",
        correct: "b",
    },
    {
        question: "WHAT IS CAPITAL OF JAPAN ?",
        a: "Tokyo",
        b: "Kolkata",
        c: "Paris",
        d: "London",
        correct: "a",
    },
    {
        question: "WHAT IS THE CAPITAL OF FRANCE?",
        a: "Beijing",
        b: "Paris",
        c: "Rome",
        d: "Stockholm",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_new')
const b_text = document.getElementById('b_new')
const c_text = document.getElementById('c_new')
const d_text = document.getElementById('d_new')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_new.innerText = currentQuizData.a
    b_new.innerText = currentQuizData.b
    c_new.innerText = currentQuizData.c
    d_new.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You have answered ${score}/${quizData.length} questions correctly.<br>Click below to resubmit!</h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }
})