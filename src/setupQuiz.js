import Quiz from './Quiz.js'
import { courses } from './coursesData.js'

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function setupOfQuiz() {
    const quizLink = $('a.nav-link.nav-link-quiz')
    if (!quizLink) return;
    quizLink.addEventListener('click', () => {
        navigateCourseConTent()
    })
}

function navigateCourseConTent() {
    const navigateContent = $('#navigate-content')
    navigateContent.innerHTML = `
        <div class="course-content">
            <h1 class="title">&lt;Quizes/&gt;</h1>
            <div class="options">
                <div id="html" class="exercise type-quiz">
                    <img src="images/lesson/pencil-icon.png" alt="HTML" />
                    <h3 class="label">HTML</h3>
                </div>
                <div id="css" class="lesson type-quiz">
                    <img src="images/lesson/notebook-icon.png" alt="CSS" />
                    <h3 class="label">CSS</h3>
                </div>
                <div id="js" class="video type-quiz">
                    <img src="images/lesson/star-icon.png" alt="JAVASCRIPT" />
                    <h3 class="label">JAVASCRIPT</h3>
                </div>
            </div>
        </div>
    `
    const typeQuizes = $$('.type-quiz')
    typeQuizes.forEach(type => {
        type.addEventListener('click', () => {
            runQuizApp(type.id)
        })
    })
}

function runQuizApp(id) {
    
    const navigateContent = $('#navigate-content')
    navigateContent.innerHTML = `
        <div class="course-content">
            <h1 class="title">&lt;${courses[id].name} Quiz/&gt;</h1>
            <div id="view-root" class="video-frame"></div>
        </div>
    `
    const quizApp = new Quiz(id)
    quizApp.renderListQuestion()
    quizApp.renderCurrentQuestion()
}

export default setupOfQuiz
