export default class Exercises {

    constructor(lessonId, exercises, root, callbacks) {
        this.root = root;
        this.lessonId = lessonId;
        this.exercises = exercises;
        this.currentExercise = null
        this.callbacks = callbacks;
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

    changeCurrentExercise(newExercise) {
        this.currentExercise = newExercise
        this.renderExerciseContent()
    }

    removeExercise(id) {
        this.exercises = this.exercises.filter(ex => {
            if (!this.currentExercise || !this.currentExercise.id || this.currentExercise.id === id)
                this.currentExercise = null
            if (ex.id !== id) {
                return true
            }
            return false
        })
        this.callbacks.renderListOfExercises(this.exercises)
        this.renderExerciseContent()
    }

    renderExerciseContent () {
        this.root.innerHTML = `
            <div class="admin-guide-container exercise-guide-container">
                <button>Open guide table</button>
                <div class="exercise-guide-table"></div>
            </div>
            ${this.htmlFormEditExercise()}
        `
        this.renderGuideTable()
        this.renderResultExercise()
        this.bindToggleGuideTable()
        this.bindSubmitFormEdit()
        this.bindUpdateResultOnFormInput()
    }

    htmlFormEditExercise () {
        return `
            <div class="admin-exercise-form-result-container">
                <form class="admin-form admin-exercise-form-edit">
                    ${this.currentExercise && this.currentExercise.id ? `<legend>Exercise ${this.currentExercise.id}</legend>` : ''}
                    <div>
                        <label>Exercise Question</label>
                        <input type="text" required value="${this.currentExercise ? this.currentExercise.question : ""}"/>
                    </div>
                    <div>
                        <label>Exercise Fill In Parts</label>
                        <textarea type="text" required>${this.convertToString() || ""}</textarea>
                    </div>
                    <input type="submit" />
                </form>
                <div class="exercise-result-container"></div>
            </div>
        `
    }

    renderResultExercise () {
        this.getElement('.exercise-result-container').innerHTML = `
            <div>
                <h3>View</h3>
                ${this.currentExercise ? 
                    `
                        <div>
                            ${this.currentExercise.question ? 'Question: ' : ''}
                            <h4>${this.currentExercise.question || ''}</h4>
                            <div class="exercise-answer">
                                ${(
                                    this.currentExercise.fillInParts?.map(part => part.answer ? 
                                    `
                                        <input type="text" 
                                            value="${part.text}" 
                                            style="--num: ${part.text.length}; color: blue; text-align: center" 
                                            maxlength=${part.text.length} 
                                        />
                                    ` : 
                                    part.text).join('')
                                    ) || 
                                    ""
                                }
                            </div>
                        </div>
                    ` : 
                    ""
                }
            </div>
        `
    }

    bindToggleGuideTable () {
        const buttonToggleGuide = this.getElement('.exercise-guide-container').querySelector('button')
        buttonToggleGuide.addEventListener('click', () => {
            const guideTable = this.getElement('.exercise-guide-table')
            if (guideTable.firstChild) {
                guideTable.innerHTML = null
            } else {
                this.renderGuideTable()
            }
        })
    }

    bindUpdateResultOnFormInput () {
        const formEdit = this.getElement('.admin-exercise-form-edit')
        const input = formEdit.querySelector('input:not([type="submit"])')
        const textArea = formEdit.querySelector('textarea')

        input.addEventListener('input', e => {
            if (!this.currentExercise) this.currentExercise = {}
            this.currentExercise.question = e.target.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
            this.renderResultExercise()
        })

        textArea.addEventListener('input', e => {
            if (!this.currentExercise) this.currentExercise = {}
            this.currentExercise.fillInParts = this.convertToArray(e.target.value)
            this.renderResultExercise()
        })
    }

    bindSubmitFormEdit () {
        const formEdit = this.getElement('.admin-exercise-form-edit')
        formEdit.addEventListener('submit', e => {
            e.preventDefault()
            if (this.exercises) {
                if (this.currentExercise.id) {
                    this.exercises = this.exercises.map(ex => {
                        if (ex.id === this.currentExercise.id) {
                            return {
                                ...ex,
                                ...this.currentExercise
                            }
                        }
                        return ex                        
                    })
                } else {
                    this.exercises.push({
                        ...this.currentExercise,
                        idParent: this.lessonId,
                        id: this.exercises.length + 1
                    })
                    formEdit.reset()
                }
            } else {
                this.exercises = [{
                    ...this.currentExercise,
                    idParent: this.lessonId,
                    id: 1
                }]
                formEdit.reset()
            }
            
            this.callbacks.renderListOfExercises(this.exercises)
        })
    }

    renderGuideTable () {
        const actions = [
            {
                syntax: "~",
                uses: "Create string"
            },
            {
                syntax: "^",
                uses: "Break line"
            },
            {
                syntax: "$$",
                uses: "Create empty value input"
            }
        ]
        this.getElement('.exercise-guide-table').innerHTML = `
            <table border="1" cellspacing="0">
                <tr>
                    <th>Syntax</th>
                    <th>Uses</th>
                </tr>
                ${actions.map(action => `
                    <tr>
                        <td>${action.syntax}</td>
                        <td>${action.uses}</td>
                    </tr>
                `).join('')}
            </table>        
        `
    }

    convertToString () {
        if (!this.currentExercise) {
            return null
        }
        const result = this.currentExercise.fillInParts.map(part => {
            if (part.answer) {
                return `$$${part.text}\r\n`
            } else {
                if (part.text.includes('&lt;') || part.text.includes('&gt;')) {
                    return `~${part.text.replaceAll('&lt;', '<').replaceAll('&gt;', '>')}\r\n`
                } else if (part.text.includes('<br>')) {
                    return `${part.text.replaceAll('<br>', '^')}\r\n`
                } else {
                    return `~${part.text}\r\n`
                }
            }
        })
        return result.join('')
    }

    convertToArray (string) {
        const array = string.split('\n')
        const result = array.map(item => {
            switch (item[0]) {
                case '~':
                    return {
                        text: item.slice(1, item.length).replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
                        answer: false
                    }
                case '^':
                    return {
                        text: item.replaceAll('^', '<br>'),
                        answer: false
                    }
                case '$':
                    if (item[1] === '$') {
                        return {
                            text: item.slice(2, item.length),
                            answer: true
                        }
                    } else {
                        return {
                            text: item,
                            answer: false
                        }
                    }
                default:
                    return {
                        text: item,
                        answer: false
                    }
            }
        })
        return result
    }

}