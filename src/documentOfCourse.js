export default function setupDocument(lesson) {
    const documentElement = document.getElementById('course-document')
    documentElement.addEventListener('click', () => {
        renderListOfLessonOfCourse(lesson)
    })
}

function renderListOfLessonOfCourse(lesson) {
    const viewRoot = document.getElementById('view-root')
    viewRoot.innerHTML = `
        <div class="exercise-container">
            <button class="course-lesson-menu"><i class="fa-solid fa-bars"></i></button>
            <div class="course-lesson-list-container">
                <div class="course-lesson-list course-lesson-list-document">
                    ${lesson.map(item => {
                        return `
                                    <li id=${item.id} class="course-lesson-item">${item.name}</li>
                                `
                    }).join('')}
                </div>
            </div>
            <div class="course-lesson-content"></div>
        </div>
    `

    setupCourseLessonList(lesson)
    setupToggleLessonList(lesson)
}

function setupCourseLessonList(lesson) {
    const courseLessonItems = document.querySelectorAll('.course-lesson-item')
    courseLessonItems.forEach(element => {
        element.addEventListener('click', () => {
            courseLessonItems.forEach(item => item.classList.remove("active"))
            element.classList.add("active")
            const content = lesson.find(item => parseInt(item.id) === parseInt(element.id))
            renderContentOfLesson(content)
        })
    })
}

function renderContentOfLesson(content) {
    const courseLessonContent = document.querySelector('.course-lesson-content')
    courseLessonContent.innerHTML = content.document
}

export function setupToggleLessonList() {
    const courseLessonMenu = document.querySelector('.course-lesson-menu')
    const courseLessonListContainer = document.querySelector('.course-lesson-list-container')
    courseLessonMenu.addEventListener('click', () => {
        toggleLessonList()
    })
    courseLessonListContainer.addEventListener('click', (e) => {
        e.stopPropagation()
        if (e.target.matches('.course-lesson-list-container')) {
            toggleLessonList()
        }
    })
}

function toggleLessonList() {
    const courseLessonListContainer = document.querySelector('.course-lesson-list-container')
    if (courseLessonListContainer.matches('.hidden')) {
        courseLessonListContainer.classList.remove('hidden')
        // courseLessonListContainer.style.display = 'block'
        return 'block'
    }
    courseLessonListContainer.classList.add('hidden')
    // courseLessonListContainer.style.display = 'none'
}