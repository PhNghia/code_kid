export default class SyntaxDocument {
    
    constructor() {
        this.actions = [
            {
                syntax: '$h[1,6]_',
                uses: 'create heading 1 to 6',
                convert: (syntax, content) => {
                    return `<h${syntax[2]} class="document-heading">${content}</h${syntax[2]}>`;
                }
            },
            {
                syntax: '$intro_',
                uses: 'create intro paragraph',
                convert: (syntax, content) => {
                    return `<p class="document-intro">${content}</p>`;
                }
            },
            {
                syntax: '$note_',
                uses: 'create note',
                convert: (syntax, content) => {
                    return `<p class="document-note">${content}</p>`;
                }
            },
            {
                syntax: '$tag_',
                uses: 'create example tag: $tag_tagName{content}',
                convert: (syntax, content) => {
                    const isValid = content.includes('{') && content.includes('}')
                    return `
                        <p>
                            <span class="document-tag-syntax">&lt;</span>
                            <span class="document-tag-tagName">${isValid ? content.slice(0, content.indexOf('{')) : content.slice(0, content.length)}</span>
                            <span class="document-tag-syntax">&gt;</span>
                            ${isValid ? content.slice(content.indexOf('{') + 1, content.lastIndexOf('}')) : ''}
                            <span class="document-tag-syntax">&lt;</span>
                            <span class="document-tag-tagName">/${isValid ? content.slice(0, content.indexOf('{')) : content.slice(0, content.length)}</span>
                            <span class="document-tag-syntax">&gt;</span>
                        </p>
                    `;
                }
            },
            {
                syntax: '{colspan_}',
                uses: 'create a paragraph have tag is make strong what put in syntax {}',
                convert: (content) => {
                    return `<span class="document-colspan">&lt;${content}&gt;</span>`;
                }
            },
            {
                syntax: '{bold_}',
                uses: 'create a paragraph have strong (bold) text what put in syntax {}',
                convert: (content) => {
                    return `<b>${content}</b>`;
                }
            },
            {
                syntax: 'nothing',
                uses: 'create a paragraph'
            },
            {
                syntax: 'enter',
                uses: 'end the statment'
            }
        ]
    }

    converTable () {
        return `
            <table border="1" cellspacing="0">
                <tr>
                    <th>Syntax</th>
                    <th>Uses</th>
                </tr>
                ${this.actions.map(action => {
                    return `
                        <tr>
                            <td>${action.syntax}</td>
                            <td>${action.uses}</td>
                        </tr>
                    `
                }).join('')}
            </table>
        `
    }

    convertInline (content) {
        const array = content.split('{')
        const result = array.map((string, i) => {
            const indexOfUnline = string.indexOf('_')
            if (indexOfUnline != -1 && string.includes('}')) {
                const syntax = string.slice(0, indexOfUnline)
                const action = this.actions.find(action => {
                    if (action.syntax.includes('$')) return false
                    return syntax.trim() && 
                        syntax.trim().length === action['syntax'].slice(action['syntax'].indexOf('{') + 1, action['syntax'].indexOf('_')).length &&
                        action['syntax'].toLowerCase().includes(syntax.toLowerCase()) 
                })
                if (action) {
                    let mainContent = string.slice(indexOfUnline + 1, string.indexOf('}'))
                    return action.convert(mainContent) + string.slice(string.indexOf('}') + 1, string.length)
                }
                return '{' + string
            }
            return i == 0 ? string : `{${string}`
        })
        return result.join('')
    }

    convertBlock (content) {
        let syntax = content.slice(1, content.indexOf('_'))
        if (syntax.includes('h') && syntax.length == 2) {
            if (parseInt(syntax[1]) >= 1 && parseInt(syntax[1]) <= 6) {
                return this.actions[0].convert(`$${syntax}_`, content.slice(content.indexOf('_') + 1, content.length))
            }
            return content
        }
        const action = this.actions.find(action => {
            if (action.syntax.includes('{')) return false
            return syntax.trim() && 
                syntax.length === action['syntax'].slice(action['syntax'].indexOf('$') + 1, action['syntax'].indexOf('_')).length &&
                action['syntax'].toLowerCase().includes(syntax.toLowerCase()) 
        })
        if (action) {
            return action.convert(`$${syntax}_`, content.slice(content.indexOf('_') + 1, content.length))
        }
        return content
    }

    convertTag (string) {
        let value = string.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
        if (value[0] === '$') {
            const indexOfUnline = value.indexOf('_')
            if (indexOfUnline !== -1) {
                const result = this.convertBlock(value)
                return this.convertInline(result)
            }
            return this.convertInline(value)
        }
        return `<p>${this.convertInline(value)}</p>`
    }

    convertHTML (documentString) {
        const array = documentString.split('\n')
        const result = array.map(item => this.convertTag(item))
        return result.join('') || ""
    } 
}