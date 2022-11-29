import { setupToggleLessonList } from './documentOfCourse.js'

export default function setupVideo(lesson) {
	const documentElement = document.getElementById('course-video');
	// @ts-expect-error
	documentElement.addEventListener('click', () => {
		renderListOfLessonOfCourse(lesson);
	})
}

export function renderListOfLessonOfCourse(lesson) {
	const viewRoot = document.getElementById('view-root');
	viewRoot.innerHTML = `
		<div class="exercise-container">
			<button class="course-lesson-menu course-lesson-menu-video"><i class="fa-solid fa-bars"></i></button>
			<div class="course-lesson-list-container">
                <div class="course-lesson-list course-lesson-list-video">
                    ${lesson.map(item => {
                        return `
                                    <li id=${item.id} class="course-lesson-item">${item.name}</li>
                                `
                    }).join('')}
                </div>
            </div>
			<div class="course-lesson-content course-lesson-content-video">
				<video id="demovid" controls>
					<source src="../videos/HTMLcoding1.mp4" type="video/mp4">
				</video>
				<div class="progress" >
					<progress id="progressBar" value="0" min="0"></progress>
					<input id="seek" type="range" min="0" value="0"></input>
				</div>
				<div class="controller">
					<img id="video-pause-icon" class="ctrl-play" src="../images/lesson/playvideo-icon.png"alt="Play" ></img>
					<img class="ctrl-fullscr" src="../images/lesson/fullscreen-icon.png" alt="Full Screen"></img>
				</div>
			</div>
		</div>
	`;
	setupCourseLessonList(lesson);
	setupToggleLessonList(lesson);
	setupControlsVideo();
}

function setupCourseLessonList(lesson) {
	const courseLessonItems = document.querySelectorAll('.course-lesson-item');
	courseLessonItems.forEach(element => {
		element.addEventListener('click', () => {
			courseLessonItems.forEach(item => item.classList.remove("active"))
            element.classList.add("active")
			const content = lesson.find(item => parseInt(item.id) === parseInt(element.id));
			renderContentOfLesson(content);
		})
	});
}
function renderContentOfLesson(content) {
	const courseLessonContent = document.querySelector('.course-lesson-content');
	// courseLessonContent.innerHTML = content.document;
}

function setupControlsVideo() {
	const playButton = document.querySelector('.ctrl-play')
	const fullscrButton = document.querySelector('.ctrl-fullscr')
	playButton.addEventListener('click', togglePlay)
	fullscrButton.addEventListener('click', makeFullscr)
	updateProgress()
}

function togglePlay() {
	const video = document.getElementById('demovid');
	var playButton = document.getElementById("video-pause-icon");
	if (video.paused || video.ended) {
		video.play();
		playButton.setAttribute("src", "https://i.ibb.co/y5mYVm1/pause-icon.png");
	}
	else {
		video.pause();
		playButton.setAttribute("src", "https://i.ibb.co/cxCQGBy/playvideo-icon.png");
	}
}

function makeFullscr() {
	const video = document.getElementById('demovid');
	// const fullscrButton = document.querySelector('.ctrl-fullscr');
	if (document.fullscreenElement)
		document.exitFullscreen();
	else {
		video.requestFullscreen();
		video.setAttribute("controls", "controls");
	}
	video.removeAttribute("controls");
}

function updateProgress() {
	const video = document.getElementById('demovid');
	let duration, progressBar
	const seek = document.getElementById('seek');
	video.addEventListener('loadedmetadata', () => {
		duration = Math.round(video.duration);
		progressBar = document.getElementById('progressBar');
		seek.setAttribute('max', duration);
		progressBar.setAttribute('max', duration);
		const time = formatTime(duration);
		progressBar.innerText = `${time.minutes}:${time.seconds}`;
		progressBar.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
	}
	)

	video.addEventListener('timeupdate', () => {
		seek.value = Math.floor(video.currentTime);
		progressBar.value = Math.floor(video.currentTime);
	})

	seek.addEventListener('input', () => {
		video.currentTime = seek.value;
	})
}

function formatTime(time) {
	const hours = Math.floor(time / 60);
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;

	if (seconds < 10) {
		seconds = `0${ seconds }`;
	}

	return `${ hours }:${ minutes }:${ seconds }`;
}