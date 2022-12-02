import { setupToggleLessonList } from "./documentOfCourse.js";

const userAnswers = []

export default function setupExercise(lesson) {
    const exerciseElement = document.getElementById('course-exercise');
    exerciseElement.addEventListener('click', () => {
        const itemOfLesson = lesson.find(item => item.exercises && item.exercises.length > 0)
        if (itemOfLesson) {
            renderListOfLessonOfExercise(lesson, itemOfLesson.exercises[0])
        } else {
            const viewRoot = document.getElementById('view-root')
            viewRoot.innerHTML = '<h2 style="color: #fff">No Exercises</h2>'
        }
    })
}

function renderListOfLessonOfExercise(lesson, currentExercise, ...args) {
    const viewRoot = document.getElementById('view-root')
    viewRoot.innerHTML = `
        <div class="exercise-container">
            <button class="course-lesson-menu"><i class="fa-solid fa-bars"></i></button>
            <div class="course-lesson-list-container ${args[0] && args[0].hideList && "hidden"}">
                <div class="course-lesson-list">
                    ${lesson.map(item => {
                        if (item['exercises'] && item['exercises'].length > 0) {
                            return `
                                <div>
                                    <p id=${item.id} class="course-lesson-item">${item.name}</p>
                                    <ul class="course-lesson-item-list">
                                        ${item['exercises'].map((exercise, index) => {
                                            return `
                                                <li data-id=${exercise.id} class="lesson-exercise ${exercise.id === currentExercise.id && exercise.idParent === currentExercise.idParent && "active"}" data-parentid=${item.id}>Exercise ${index + 1}</li>
                                            `
                                        }).join("")}
                                    </ul>
                                </div>
                            `
                        }
                        return ""
                    }).join('')}
                </div>
            </div>
            <div class="course-lesson-content">
                <h3>Exercise</h3>
                <p class="exercise-question">${currentExercise.question}</p>

                <div class="exercise-answer"></div>

                <button class="exercise-submit-button">Submit Answer <i class="fa-solid fa-chevron-right"></i></button>
                <button class="exercise-submit-button next-exercise">Next Exercise <i class="fa-solid fa-chevron-right"></i></button>
                <button class="exercise-submit-button try-again">Try Again</button>
            </div>
        </div>
    `
    setupToggleLessonList()
    setupLessonExercises(lesson)
    renderExerciseContent(currentExercise)
    setupSubmitAnswer(currentExercise, lesson)
    
}

function renderExerciseContent (exercise) {
    const exerciseAnswer = document.querySelector(".exercise-answer")
    exerciseAnswer.innerHTML = `
        ${exercise.fillInParts.map(part => part.answer ? `<input type="text" style="--num: ${part.text.length}" maxlength=${part.text.length} data-status="hidden"/>` : part.text).join('')}
        <button class="exercise-toggle-button">Show Answer</button>
    `
    setupToggleAnswer(exercise)
}

function setupLessonExercises(lesson) {
    const lessonExerciseElements = document.querySelectorAll('.lesson-exercise')
    lessonExerciseElements.forEach(exercise => {
        exercise.addEventListener('click', () => {
            const contentLesson = lesson.find(item => item.id === parseInt(exercise.dataset['parentid']))
            const curentExercise = contentLesson['exercises'].find(item => item.id === parseInt(exercise.dataset.id))
            renderListOfLessonOfExercise(lesson, curentExercise)
        })
    })
}

function setupToggleAnswer(exercise) {
    const exerciseToggleButton = document.querySelector('.exercise-toggle-button')
    exerciseToggleButton.addEventListener("click", () => {
        const inputs = document.querySelectorAll(".exercise-answer input")
        if (exerciseToggleButton.innerText.toLowerCase().includes("hide")) {
            exerciseToggleButton.innerText = "Show Answer"
            renderButton(1,0,0)
        } else {
            inputs.forEach((input, index) => userAnswers[index] = input.value)
            exerciseToggleButton.innerText = "Hide Answer"
            renderButton(0,0,0)
        }
        toggle(exercise)
    })
}

function toggle(exercise) {
    const inputs = document.querySelectorAll(".exercise-answer input")
    const correctAnswers = exercise.fillInParts.reduce((acc, part) => {
        if (part.answer) {
            return [...acc, part]
        }
        return acc
    }, [])
    inputs.forEach((input, index) => {
        if (input.dataset.status === "show") {
            input.dataset.status = "hide"
            input.value = userAnswers[index]
            input.style.color = "#000"
            return
        }
        input.dataset.status = "show"
        input.value = correctAnswers[index].text
        input.style.color = "blue"
    })
}

function setupSubmitAnswer(exercise, lesson) {
    renderButton(1, 0, 0)
    const correctAnswers = exercise.fillInParts.reduce((acc, part) => {
        if (part.answer) {
            return [...acc, part]
        }
        return acc
    }, [])
    const exerciseSubmitButton = document.querySelector('.exercise-submit-button')
    exerciseSubmitButton.addEventListener('click', (e) => {
        handleSubmitAnswer(exercise, correctAnswers, lesson)
    })
}

function handleSubmitAnswer (exercise, correctAnswers, lesson) {
    const inputs = document.querySelectorAll(".exercise-answer input")
    const result = correctAnswers.every((answer, index) => answer.text == inputs[index].value)
    const exerciseAnswerElement = document.querySelector('.exercise-answer')
    if (result) {
        exerciseAnswerElement.classList.add("submit", "correct")
        exerciseAnswerElement.innerHTML = `
            <h2 class="exercise-answer-result-title" style="margin: 10px 0">Correct</h2>
            <p class="exercise-answer-next-exercise" style="margin: 0">Next<i style="font-size: 12px; margin-left: 10px" class="fa-solid fa-chevron-right"></i></p>
        `
        renderButton(0, 1, 0)
        exerciseAnswerElement.addEventListener('click', () => {
            if (exerciseAnswerElement.matches('.submit.correct')) {
                nextExercise(lesson, exercise)
            }
        })
        setupNextExercise(exercise, lesson)
    } else {
        exerciseAnswerElement.classList.add("submit", "incorrect")
        exerciseAnswerElement.innerHTML = `
            <h2 class="exercise-answer-result-title" style="margin: 10px 0">Not Correct</h2>
            <p class="exercise-answer-next-exercise" style="margin: 0">Click <u>here</u> to try again.</p>
        `
        renderButton(0, 0, 1)
        exerciseAnswerElement.addEventListener('click', (e) => {
            if (exerciseAnswerElement.matches('.submit.incorrect')) {
                tryAgain(exercise)
            }
        })
        setupTryAgain(exercise)
    }
}

function setupTryAgain (exercise) {
    const tryAgainBtn = document.querySelector('.exercise-submit-button.try-again')
    tryAgainBtn.addEventListener('click', () => {
        tryAgain(exercise)
    })
}

function setupNextExercise (exercise, lesson) {
    const nextExerciseBtn = document.querySelector('.exercise-submit-button.next-exercise')
    nextExerciseBtn.addEventListener('click', () => {
        nextExercise(lesson, exercise)
    })
}

function tryAgain (exercise) {
    const exerciseAnswerElement = document.querySelector('.exercise-answer')
    exerciseAnswerElement.classList.remove("submit", "incorrect")
    renderExerciseContent(exercise)
    renderButton(1, 0, 0)
}

function nextExercise (lesson, exercise) {
    const exerciseAnswerElement = document.querySelector('.exercise-answer')
    exerciseAnswerElement.classList.remove("submit", "correct")
    let nextExercise;
    let isNext = false
    for (let index in lesson) {
        if (lesson[index].id === exercise.idParent) {
            isNext = true
            nextExercise = lesson[index].exercises.find(value => {
                return value.id === exercise.id + 1
            })
            if (nextExercise) {
                renderListOfLessonOfExercise(lesson, nextExercise, { hideList: true })
                return
            }
        } else {
            if (isNext) {
                if (lesson[index].exercises && lesson[index].exercises.length > 0 && lesson[index].exercises[0]) {
                    nextExercise = {...lesson[index].exercises[0]}
                    renderListOfLessonOfExercise(lesson, nextExercise, { hideList: true })
                    return
                }
            }
        }
    }
    renderListOfLessonOfExercise(lesson, exercise, { hideList: true })
}

function renderButton (submit, next, again) {
    const buttons = document.querySelectorAll('.exercise-submit-button')
    if (submit) {
        buttons[0].hidden = false
        buttons[1].hidden = true
        buttons[2].hidden = true
    } else if (next) {
        buttons[0].hidden = true
        buttons[1].hidden = false
        buttons[2].hidden = true
    } else if (again) {
        buttons[0].hidden = true
        buttons[1].hidden = true
        buttons[2].hidden = false
    } else {
        buttons[0].hidden = true
        buttons[1].hidden = true
        buttons[2].hidden = true
    }
}
