import SyntaxDocument from "./SyntaxDocument.js";

export default class Document {
    
    constructor (lesson, root, callbacks) {
        this.lesson = lesson;
        this.root = root;
        this.callbacks = callbacks; 
        this.syntaxDocument = new SyntaxDocument()
        this.currentDocument = this.lesson.document
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

    render () {
        this.root.innerHTML = `
            <div class="admin-guide-container document-guide-container">
                <button>Open guide table</button>
                <div class="document-guide-table"></div>
            </div>
            <div class="admin-form-result-document-container">
                <form action="" class="admin-form form-update-lesson-content">
                    <div class="form-update-lesson-group">
                        <textarea name="">${this.currentDocument || ""}</textarea>
                    </div>    
                    <input type="submit" />
                </form>
                <div class="result-edit-document"></div>
            </div>
        `   

        this.renderGuideTable()
        this.bindToggleGuideTable()
        this.renderResultDocument()
        this.bindUpdateResultOnFormInput()
        this.bindSubmitForm()
    }

    bindToggleGuideTable () {
        const buttonToggleGuide = this.getElement('.document-guide-container').querySelector('button')
        buttonToggleGuide.addEventListener('click', () => {
            const guideTable = this.getElement('.document-guide-table')
            if (guideTable.firstChild) {
                guideTable.innerHTML = null
            } else {
                this.renderGuideTable()
            }
        })
    }

    bindUpdateResultOnFormInput () {
        const textarea = this.getElement('.form-update-lesson-content').querySelector('textarea')
        textarea.addEventListener('input', e => {
            this.currentDocument = e.target.value
            this.renderResultDocument()
        })
    }

    bindSubmitForm () {
        this.getElement('.form-update-lesson-content').addEventListener('submit', e => {
            e.preventDefault()
            this.lesson.document = this.currentDocument
            this.callbacks.changeNewDocument(this.currentDocument)
        })
    } 

    renderGuideTable () {
        this.getElement('.document-guide-table').innerHTML = this.syntaxDocument.converTable()
    }

    renderResultDocument () {
        const result = this.syntaxDocument.convertHTML(this.currentDocument || '')
        this.getElement('.result-edit-document').innerHTML = result
    }
}