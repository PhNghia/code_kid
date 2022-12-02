import { getCourses } from '../coursesData.js'
import Lessons from './Lesson.js'

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function bindEventListenersOfCourses () {
    const coursesElements = $$('.courses-card');
    coursesElements.forEach(element => {
        element.addEventListener('click', () => {
            $('.courses-container').innerHTML = null
            $('.courses-container').style.display = 'none'
            $('.admin-content-title').removeAttribute("style");
            $('.admin-content-course').removeAttribute("style");
            const data = getCourses()[element.id].lessons;
            const lessons = new Lessons(element.id, data);
            lessons.render();
            $('.admin-content-course-container').style.display = 'block'
        })
    })
}

function renderDefaulView () {
    $('#root').innerHTML = `
        <header class="nav-header" style="position: relative">
            <div class="nav-content">
                <h1 class="nav-title">
                    <a href="admin-lesson.html">
                        <img class="nav-title-image" id="nav-brand" src="https://i.ibb.co/tHvWth7/logo-icon.png">
                    </a>
                </h1>
                <div>
                    <span style="color: #fff"><i class="fa-solid fa-user"></i></span>
                </div>
            </div>
        </header>
    
        <div class="courses-container">
            <div class="courses-body">
                <h2 class="courses-title">Edit Courses</h2>
                <div class="courses-main">
                    <div id="html" class="courses-card">
                        <div class="courses-card-wrap">
                            <div class="courses-img">
                                <img src="images/courses/html-icon.png" alt="">
                            </div>
                            <div class="courses-card-details">
                                <div class="name">HTML</div>
                            </div>
                        </div>
                    </div>
                    <div id="css" class="courses-card">
                        <div class="courses-card-wrap">
                            <div class="courses-img">
                                <img src="images/courses/css-icon.png" alt="">
                            </div>
                            <div class="courses-card-details">
                                <div class="name">CSS</div>
                            </div>
                        </div>
                    </div>
                    <div id="js" class="courses-card">
                        <div class="courses-card-wrap">
                            <div class="courses-img">
                                <img src="images/courses/js-icon.png" alt="">
                            </div>
                            <div class="courses-card-details">
                                <div class="name">JS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="admin-content-course-container" style="display: none;">
            <div style="display:none" class="admin-content-title">Edit Lesson</div>
            <div style="display:none" class="admin-content-course"></div>
        </div>
    `
    bindEventListenersOfCourses();
}

window.addEventListener('load', e => {
    if (e.target.defaultView.innerWidth < 800) {
        $('#root').innerHTML = '<h1>No support admin for device has sreen less then 800 width</h1>'
    } else {
        renderDefaulView()
    }
})


