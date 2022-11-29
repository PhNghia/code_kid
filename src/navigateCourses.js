import { courses } from '../database/courses.js'
import setupDocument from './documentOfCourse.js'
import setupExercise from './exerciseOfCourse.js'
import setupVideo, { renderListOfLessonOfCourse } from './videoCourses.js'

export default function setupNavigate() {
    // 3 cái navbar link HTML, CSS, JS
    const htmlLink = document.querySelector('.nav-link-html')
    const cssLink = document.querySelector('.nav-link-css')
    const jsLink = document.querySelector('.nav-link-js')

    htmlLink.addEventListener('click', () => {
        navigateToCourseContent('html')
    })

    cssLink.addEventListener('click', () => {
        navigateToCourseContent('css')
    })

    jsLink.addEventListener('click', () => {
        navigateToCourseContent('js')
    })

    // 3 Cái ô HTML, CSS, JS ở Courses
    const coursesElements = document.querySelectorAll('.courses-card')
    if (!coursesElements) return;
    coursesElements.forEach(element => {
        element.addEventListener('click', () => {
            const idOfCourse = element.id
            navigateToCourseContent(idOfCourse)
        })
    })
}

function navigateToCourseContent(id) {
    const lesson = courses[id].lessons;
    const navigateContent = document.querySelector('#navigate-content')
    navigateContent.innerHTML = `
        <div class="course-content">
            <h1 class="title">$(Unit's ${courses[id].name})</h1>

            <div id="view-root" class="video-frame">
                <video>

                </video>
                <div class="progress">
                    <progress max="100" value="50">
                    </progress>
                    <input type="range" min="0" max="100" value="50"></input>
                </div>
                <div class="controller">
                    <img src="images/lesson/playvideo-icon.png" alt="Play"></img>
                    <img src="images/lesson/fullscreen-icon.png" alt="Full Screen"></img>
                </div>
            </div>

            <div class="options">
                <div id="course-video" class="video">
                    <img src="images/lesson/star-icon.png" alt="Video" />
                    <h3 class="label">Video</h3>
                </div>
                <div id="course-document" class="lesson">
                    <img src="images/lesson/notebook-icon.png" alt="Document" />
                    <h3 class="label">Document</h3>
                </div>
                <div id="course-exercise" class="exercise">
                    <img src="images/lesson/pencil-icon.png" alt="Exercise" />
                    <h3 class="label">Exercise</h3>
                </div>
            </div>
        </div>
    `
    setupDocument(lesson)
    setupExercise(lesson)
    setupVideo(lesson)
    renderListOfLessonOfCourse(lesson)
}