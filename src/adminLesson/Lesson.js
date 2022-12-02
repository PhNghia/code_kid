
import Exercises from './Exercises.js'
import Document from './Document.js'


export default class Lessons {
    constructor(courseId, lessonData) {
        this.courseId = courseId
        this.data = [...lessonData];
        this.adminContentRoot = this.getElement('.admin-content-course')
        this.according = this.getElement('.admin-according') || this.createElement('div', 'admin-according')
        this.content = this.getElement('.admin-content-edit') || this.createElement('div', 'admin-content-edit')
        this.adminContentRoot.append(this.according, this.content)
        this.currentLesson = this.data[0]
        this.currentExercises = null
    }

    createElement (tag, className) {
        const element = document.createElement(tag)
        if (className) 
            element.classList.add(className)
        return element
    }

    getElement (selector) {
        return document.querySelector(selector)
    }

    getElements (selector) {
        return document.querySelectorAll(selector)
    }

    saveLocal () {
        const result = JSON.parse(localStorage.getItem('codeKidCouresLesson'))
        const currentCourse = { ...result[this.courseId], lessons: this.data }
        localStorage.setItem('codeKidCouresLesson', JSON.stringify({
            ...result,
            [this.courseId]: { ...currentCourse }
        }))
    }

    render () {
        this.renderListOfLesson()
        if (this.currentLesson) {
            this.changeNewExercises()
            this.renderLessonVideo()
    
            this.toggleMiniAccording(this.getElements('.admin-lesson-name:not(.admin-add-lesson-btn)')[0])
    
            this.bindClickExerciseItem(this.getElements('.admin-exercises-menu')[0])
        } else {
            this.renderFormAddLesson()
        }
    }

    renderListOfLesson () {
        this.according.innerHTML = this.data.map((value, index) => {
            return `
                <div class="admin-lesson-item" data-id="${value.id}">
                    <h3 class="admin-lesson-name">Lesson ${index + 1}: ${value.name}</h3>
                    <ul class="admin-lesson-menu according-content">
                        <p class="admin-lesson-video">Video</p>
                        <p class="admin-lesson-document">Document</p>
                        <div class="admin-exercises-lesson" data-parentid="${value.id}">
                            <p>Exercise</p>
                            <ul class="admin-exercises-menu according-content">
                                <li>Add</li>
                                ${(value.exercises && value.exercises.length > 0) ? value.exercises.map((ex, i) => `<li data-id=${ex.id} data-parentid=${ex.idParent}>Exercise ${i + 1} <span><i class="fa-solid fa-trash"></i></span></li>`).join('') : `<li>No Exercise</li>`}
                            </ul>
                        </div>
                    </ul>
                </div>
            `
        }).join('')

        const addLessonButton = this.createElement('button', "admin-lesson-name")
        addLessonButton.classList.add('admin-add-lesson-btn')
        addLessonButton.textContent = 'Add Lesson'
        this.according.prepend(addLessonButton)
        
        this.bindClickAddLesson()
        this.bindClickLesson()
        this.bindClickVideoLesson()
        this.bindClickDocumentLesson()
        this.bindClickExercisesTitle()
    }

    renderListOfExercises (exercises) {
        this.currentLesson.exercises = exercises
        this.saveLocal()
        const adminLessonMenuShow = this.getElement('.admin-lesson-menu.show')
        const adminExercisesMenu = adminLessonMenuShow.querySelector('.admin-exercises-menu')
        adminExercisesMenu.innerHTML = `
            <li>Add</li>
            ${(this.currentLesson.exercises && this.currentLesson.exercises.length > 0) ? this.currentLesson.exercises.map((ex, i) => `<li data-id=${ex.id} data-parentid=${ex.idParent}>Exercise ${i + 1} <span><i class="fa-solid fa-trash"></i></span></li>`).join('') : `<li>No Exercise</li>`}
        `
        this.bindClickExerciseItem(adminExercisesMenu)
    }

    renderLessonVideo () {
        this.content.innerHTML = `
            <form action="" class="admin-form form-update-lesson-content">
                <div class="form-update-lesson-group">
                    <label for="">Lesson name (*)</label>
                    <input type="text" value="${this.currentLesson.name}" required>
                </div>
                <div class="form-update-lesson-group">
                    <label>Video Lesson (*)</label>
                    <input type="file" accept="video/mp4,video/x-m4v,video/*">
                </div>
                
                <video controls width=300 height=200>
                    ${this.currentLesson.videoUrl && `<source src="${this.currentLesson.videoUrl}">`}
                </video>
                <br>
                <input type="submit" />
            </form>
            <div class="button-delete-lesson">
                <button>Delete this lesson<span><i class="fa-solid fa-trash"></i></span></button>
            </div>
        `

        this.bindSubmitFormUpdateLessonContent()
        this.bindDeleteLesson()
    }

    renderFormAddLesson () {
        this.content.innerHTML = `
            <form class="admin-form admin-form-add-lesson">
                <div>
                    <label>Number lessson (*)</label>
                    <input type="number" min="1" max="${this.data.length + 1}" required />
                </div>
                <div>
                    <label>Name (*)</label>
                    <input type="text" required />
                </div>
                <input type="submit" />
            </form>
        `
        this.bindSubmitFormAddLesson()
    }

    bindClickLesson () {
        const lessonItems = this.getElements('.admin-lesson-name:not(.admin-add-lesson-btn)');
        lessonItems.forEach(item => {
            item.addEventListener('click', () => {
                this.getElements('.admin-lesson-menu.show')?.forEach(e => {
                    this.toggleMiniAccording(e.parentElement.querySelector('.admin-lesson-name'))
                    e.parentElement.classList.remove('active')
                })
                this.toggleMiniAccording(item)
                item.parentElement.classList.add('active')
                Object.assign(item.parentElement.style, {
                    top: this.getElement('.admin-add-lesson-btn').scrollHeight + 'px'
                })
                this.currentLesson = this.data.find(value => value.id === parseInt(item.parentElement.dataset.id))
                this.renderLessonVideo()
                this.changeNewExercises()
                this.bindClickExerciseItem(item.parentElement.querySelector('.admin-exercises-menu'))
            })
        })
    }

    bindClickAddLesson () {
        const addLessonBtn = this.getElement('.admin-add-lesson-btn')
        addLessonBtn.addEventListener('click', () => {
            this.getElements('.admin-lesson-menu.show')?.forEach(e => {
                this.toggleMiniAccording(e.parentElement.querySelector('.admin-lesson-name'))
                e.parentElement.classList.remove('active')
            })
            this.renderFormAddLesson()
        })
    }

    bindSubmitFormAddLesson () {
        const formAddLesson = this.getElement('.admin-form-add-lesson')
        formAddLesson.addEventListener('submit', e => {
            e.preventDefault()
            const inputs = formAddLesson.querySelectorAll('input:not([type="submit"])')
            const numberLesson = inputs[0].valueAsNumber
            const name = inputs[1].value
            if (numberLesson && name.trim()) {
                this.addLesson({ id: numberLesson, name: name })
                this.renderListOfLesson()
                this.saveLocal()
            }
            formAddLesson.reset()
        })
    }

    bindSubmitFormUpdateLessonContent () {
        const formUpdateLessonContent = this.getElement('.form-update-lesson-content')
        formUpdateLessonContent.addEventListener('submit', this.handleSubmitFormUpdateLessonContent.bind(this))
    }

    bindDeleteLesson () {
        const deleteButton = this.getElement('.button-delete-lesson')
        deleteButton.addEventListener('click', () => {
            const isDelete = confirm(`Are you sure you want to delete the ${this.currentLesson.name} lesson?`)
            if (isDelete) {
                this.data = this.data.filter(value => value.id !== this.currentLesson.id)
                this.data = this.data.map((value, index) => ({ ...value, id: index + 1 }))
                this.currentLesson = this.data[0]
                this.saveLocal()
                this.render()
            }
        })
    }

    bindClickVideoLesson () {
        this.getElements('.admin-lesson-video').forEach(element => {
            element.addEventListener('click', () => {
                this.renderLessonVideo()
            })
        }) 
    }

    bindClickDocumentLesson () {
        this.getElements('.admin-lesson-document').forEach(element => {
            element.addEventListener('click', () => {
                const document = new Document(this.currentLesson, this.content, { changeNewDocument: this.changeNewDocument.bind(this) });
                document.render()
            })
        }) 
    }

    bindClickExercisesTitle () {
        this.getElements('.admin-exercises-lesson > p').forEach(element => {
            element.addEventListener('click', () => {
                this.toggleMiniAccording(element)
                this.currentExercises.renderExerciseContent()
            })
        })
    }

    bindClickExerciseItem (ul) {
        const lis = ul.querySelectorAll('li')
        lis.forEach(li => {
            li.addEventListener('click', (e) => {
                if (e.target.matches('i') || e.target.matches('span')) {
                    this.currentExercises.removeExercise(parseInt(li.dataset.id))
                    return
                }
                if (li.dataset.id) {
                    const exercise = this.currentLesson.exercises.find(ex => ex.id === li.dataset.id || ex.id === parseInt(li.dataset.id))
                    this.currentExercises.changeCurrentExercise(exercise)
                } else if (li == lis[0]) {
                    this.currentExercises.changeCurrentExercise(null)
                }
            })
        })
    }

    changeNewDocument (document) {
        this.currentLesson.document = document
        this.saveLocal()
    }

    changeNewExercises () {
        this.currentExercises = new Exercises(
            this.currentLesson.id, 
            this.currentLesson.exercises, 
            this.content, 
            {
                renderListOfExercises: this.renderListOfExercises.bind(this)
            }
        )
    }

    toggleMiniAccording (accordingTitle) {
        const accordingContent = accordingTitle.nextElementSibling
        if (accordingContent.matches('.show')) {
            accordingContent.classList.remove('show')
            return true
        } else {
            accordingContent.classList.add('show')
        }
    }

    addLesson ({ id, name }) {
        if (!this.data || this.data.length === 0) {
            this.data = [{ id, name }]
            return
        }
        if (id > this.data[this.data.length - 1].id) {
            this.data.push({ id, name })
            return
        }

        const store = [...this.data]
        this.data = []

        for (let index in store) {
            if (store[index].id < id) {
                this.data.push(store[index])
            } else if (store[index].id > id) {
                this.data.push({ ...store[index], id: store[index].id + 1 })
            } else {
                this.data.push({ id, name })
                this.data.push({ ...store[index], id: store[index].id + 1})
            }
        }
    }

    handleSubmitFormUpdateLessonContent (e) {
        e.preventDefault()
        const inputs = e.target.querySelectorAll('input:not([type="submit"])')
        const name = inputs[0].value
        const files = inputs[1].files
        const adminLessonItem = [...this.getElements('.admin-lesson-item')]?.find(element => parseInt(element.dataset.id) === this.currentLesson.id)
        const adminLessonTitle = adminLessonItem.querySelector('.admin-lesson-name')
        if (name.trim()) {
            this.currentLesson = { ...this.currentLesson, name }
            adminLessonTitle.innerHTML = `Lesson ${this.currentLesson.id}: ${name}`
            this.data = this.data.map(item => 
                item.id === this.currentLesson.id ? 
                { ...this.currentLesson } :
                item
            )
            this.saveLocal()
        }
        if (files.length > 0) {
            this.readFile(files[0])
                .then(res => {
                    this.currentLesson = { ...this.currentLesson, videoUrl: res }
                    this.data = this.data.map(item => 
                        item.id === this.currentLesson.id ? 
                        { ...this.currentLesson } :
                        item
                    )
                    this.renderLessonVideo()
                })
                .catch(error => console.log(error))
        }
    }

    readFile (file) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onloadstart = () => {
                console.log("Load start");
            }

            reader.onprogress = () => {
                console.log("Loading " + reader.readyState);
            }
    
            reader.onload = () => {
                resolve(reader.result);
            };
    
            reader.onerror = () => {
                reject(reader.error)
            };

            reader.onloadend = () => {
                console.log("Load end");
            }
        })
    }
}