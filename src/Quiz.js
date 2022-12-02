import { loadDatabase, getCourses } from './adminOther/database.js'

;(() => {
    loadDatabase()
})()

export default class Quiz {

    constructor(id) {
        this.root = this.getElement('#view-root')
        this.container = this.createElement('div', 'quiz-container')
        this.id = id;
        this.questions = [...getCourses()[id].quizzes];
        this.randomQuestions()
        this.myAnswers = this.questions.map(q => [])
        this.currentIndex = 0;
        this.currentQuestion = this.questions[this.currentIndex]
        this.scrollbar = this.getElement('.quiz-scrollbar') || this.createElement('div', 'quiz-scrollbar')
        this.main = this.getElement('.quiz-main') || this.createElement('div', 'quiz-main')
        this.container.append(this.scrollbar, this.main)
        this.root.append(this.container)

    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className)
            element.classList.add(className)

        return element
    }

    getElement(selector) {
        return document.querySelector(selector)
    }

    getAllElements(selector) {
        return document.querySelectorAll(selector)
    }

    randomQuestions () {
        const newQuestions = []
        if (this.questions.length > 40) {
            for (let i = 0; i < 40; i++) {
                
                const question = this.questions.splice(Math.floor(Math.random() * this.questions.length), 1)
                newQuestions.push(question[0])
            }
        } else {
            let max = Math.floor(this.questions.length / 5) * 5
            this.questions.forEach((question, index) => {
                if (index >= max) {
                    return
                }
                newQuestions.push(question)
            })
        }
        this.questions = newQuestions
    }

    renderListQuestion() {
        this.scrollbar.innerHTML = `
            <div>
                ${this.questions.map((question, index) => {
                    // if ((this.questions.length / 2) < index) {
                    //     this.handleSubmitAnswers()
                    //     return
                    // }
                    // this.myAnswers[index] = [...question.corrects]
            if (index % 2 !== 0) return ''
            return `
                        <button class="quiz-question-stt ${this.myAnswers[index].includes(true) ? "quiz-question-stt-answered" : ""} ${index === this.currentIndex ? "active" : ""}" data-id=${index}>Question ${index + 1}</button>
                    `
        }).join('')}
            </div>
            <div>
            ${this.questions.map((question, index) => {
            if (index % 2 === 0) return ''
            return `
                    <button class="quiz-question-stt ${this.myAnswers[index].includes(true) ? "quiz-question-stt-answered" : ""} ${index === this.currentIndex ? "active" : ""}" data-id=${index}>Question ${index + 1}</button>
                `
        }).join('')}
            </div>
        `
        this.setupChangeQuestionByListQuestion()
    }

    renderCurrentQuestion() {
        this.main.innerHTML = `
            <p class="quiz-question-subtitle">Question ${this.currentIndex + 1}</p>
            <h3 class="quiz-question-title">${this.currentQuestion.question}</h3>
            <ul class="quiz-question-list-answer">
                ${this.currentQuestion.answers.map((answer, key) => {
            return `<li>
                        <input type="radio" name="question" data-id=${key} ${this.myAnswers[this.currentIndex][key] ? "checked" : ""}/>
                        <span class="quiz-question-icon-check"><i class="fa-solid fa-check"></i></span>
                        <span>${this.currentQuestion.answers[key]}</span>
                    </li>`
        }).join('')}
            </ul>
            <div class="quiz-question-orient">
                ${this.currentIndex > 0 ? `<button class="orient-button" data-id="prev">Prev Question</button>` : ''}
                ${this.currentIndex < this.questions.length - 1 ? `<button class="orient-button" data-id="next">Next Question</button>` : ''}
            </div>
            <hr>
            <button class="quiz-submit-answers">Submit Answers</button>
        `

        this.setupChangeQuestionByOrientButtons()
        this.setupSubmitAnswers()
    }

    setupChangeQuestionByListQuestion() {
        const buttons = this.getAllElements('.quiz-question-stt')
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.changeCurrentQuestion(parseInt(btn.dataset.id))
            })
        })
    }

    setupChangeQuestionByOrientButtons() {
        const buttons = this.getAllElements('.orient-button')
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const index = btn.dataset.id === 'prev' ? this.currentIndex - 1 : this.currentIndex + 1
                this.changeCurrentQuestion(index)
            })
        })
    }

    setupSubmitAnswers() {
        const button = this.getElement('.quiz-submit-answers')
        button.addEventListener('click', () => {
            this.saveAnswerOfCurrentQuestion()
            this.handleSubmitAnswers()
        })
    }

    changeCurrentQuestion(index) {
        this.saveAnswerOfCurrentQuestion()
        this.currentIndex = index
        this.currentQuestion = this.questions[index]
        this.renderListQuestion()
        this.renderCurrentQuestion()
    }

    saveAnswerOfCurrentQuestion() {
        const inputs = this.getAllElements('input[type="radio"]')
        inputs.forEach(input => {
            if (input.checked) {
                this.myAnswers[this.currentIndex].push(true)
            } else {
                this.myAnswers[this.currentIndex].push(false)
            }
        })
    }

    handleSubmitAnswers() {
        let numberCorrectQuestion = this.questions.reduce((acc, question, index) => {
            for (let i = 0; i < question.corrects.length; i++) {
                if (question.corrects[i] !== this.myAnswers[index][i]) {
                    return acc
                }
            }
            return acc + 1
        }, 0)
        this.renderResultQuiz(numberCorrectQuestion)
    }

    renderResultQuiz(numberCorrectQuestion) {
        const grade = (numberCorrectQuestion * 10) / this.questions.length
        this.container.innerHTML = `
            <div class="quiz-result">
                <h3 ${this.getColorResult(grade)}>Result</h3>
                <div class="quiz-result-grade">
                    <p>Correct <span ${this.getColorResult(grade)}>${numberCorrectQuestion}</span> / ${this.questions.length} questions</p>
                    <p>Your grade <span ${this.getColorResult(grade)}>${grade}</span> </p>
                </div>
                <div class="quiz-result-list">
                    ${this.questions.map((item, index) => {
                        return `
                            <div class="quiz-result-item">
                                <p class="quiz-result-item-subtitle">Question ${index + 1}</p>
                                <p class="quiz-result-item-question">${item.question}</p>
                                <div class="quiz-result-item-answers-compare">
                                    <ul class="quiz-question-list-answer result">
                                        <p>Your answer</p>
                                        ${item.answers.map((answer, i) => {
                                            return `<li>
                                                        ${this.myAnswers[index][i] ? `<span class="quiz-question-icon-check result correct"><i class="fa-solid fa-check"></i></span>` : `<span class="quiz-question-icon-check result"><i class="fa-solid fa-xmark"></i></span>`}
                                                        <span>${answer}</span>
                                                    </li>`
                                        }).join('')}
                                    </ul>
                                    <ul class="quiz-question-list-answer result">
                                        <p>Correct answer</p>
                                        ${item.answers.map((answer, i) => {
                                            return `<li>
                                                        ${item.corrects[i] ? `<span class="quiz-question-icon-check result correct"><i class="fa-solid fa-check"></i></span>` : `<span class="quiz-question-icon-check result"><i class="fa-solid fa-xmark"></i></span>`}
                                                        <span>${answer}</span>
                                                    </li>`
                                        }).join('')}
                                    </ul>
                                </div>
                            </div>
                        `
                    }).join("")}
                </div>
            </div>
        `
    }

    getColorResult (grade) {
        let color;
        if (grade < 5) {
            color = `style="color: red"`
        } else if (grade >= 8) {
            color = `style="color: rgb(12 238 27)"`
        } else {
            color = `style="color: rgb(241 236 14)"`
        }
        return color
    }
}