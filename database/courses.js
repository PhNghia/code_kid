// @ts-check
/**
 * @typedef {{ text: string, answer: boolean }} FillInPart
 * @typedef {{ idParent: number, id: string, question: string, fillInParts: FillInPart[] }} FillInExercise
 * @typedef {{ id: number, name: string, document: string, videoUrl: string, exercises?: FillInExercise[] }} Lesson
 * @typedef {{ name: string, lessons: Lesson[] }} Course
 * @typedef {{ html: Course, css: Course, js: Course }} Courses
 */

/** @type {Courses} */
export const courses = {
    html: {
        name: "HTML",
        lessons: [
            {
                id: 1,
                name: "HTML HOME",
                document: "HTML HOME document",
                videoUrl: "HTML HOME video"
            },
            {
                id: 2,
                name: "HTML Introduction",
                document: "HTML Introduction document",
                videoUrl: "HTML Introduction video"
            },
            {
                id: 3,
                name: "HTML Editors",
                document: "HTML Editors document",
                videoUrl: "HTML Editors video"
            },
            {
                id: 4,
                name: "HTML Basic",
                document: "HTML Basic document",
                videoUrl: "HTML Basic video"
            },
            {
                id: 5,
                name: "HTML Elements",
                document: "HTML Elements document",
                videoUrl: "HTML Elements video"
            },
            {
                id: 6,
                name: "HTML Attributes",
                document: "HTML Attributes document",
                videoUrl: "HTML Attributes video",
                exercises: [
                    {   
                        idParent: 6,
                        id: "Attribute-1",
                        question: "Add a \"tooltip\" to the paragraph below with the text \"About W3Schools\".",
                        fillInParts: [
                            { text: "&lt;p ", answer: false },
                            { text: "title", answer: true },
                            { text: "=\"About W3Schools\"&gt;W3Schools is a web developer's site.&lt;/p&gt;", answer: false }
                        ]
                    },
                    {   
                        idParent: 6,
                        id: "Attribute-2",
                        question: "Set the size of the image to 250 pixels wide and 400 pixels tall.",
                        fillInParts: [
                            { text: "&lt;img src=\"w3schools.jpg\" width=\"", answer: false },
                            { text: "250", answer: true },
                            { text: "\" height=\"", answer: false },
                            { text: "400", answer: true },
                            { text: "\"&gt;", answer: false }
                        ]
                    }
                ]
            },
            {
                id: 7,
                name: "HTML Headings",
                document: "HTML Headings document",
                videoUrl: "HTML Headings video",
                exercises: [
                    {   
                        idParent: 7,
                        id: "Attribute-1",
                        question: `Use the correct HTML tag to add a heading with the text "London".`,
                        fillInParts: [
                            { text: "<h1>London</h1>", answer: true },
                            { text: "<br><br>", answer: false },
                            { text: `&lt;p&gt;London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.&lt;/p&gt;`, answer: false }
                        ]
                    }
                ]
            }
        ]
    },
    css: {
        name: "CSS",
        lessons: [
            {
                id: 1,
                name: "CSS HOME",
                document: "CSS HOME document",
                videoUrl: "CSS HOME video"
            },
            {
                id: 2,
                name: "CSS Introduction",
                document: "CSS Introduction document",
                videoUrl: "CSS Introduction video"
            },
            {
                id: 3,
                name: "CSS Syntax",
                document: "CSS Syntax document",
                videoUrl: "CSS Syntax video"
            },
            {
                id: 4,
                name: "CSS Selectors",
                document: "CSS Selectors document",
                videoUrl: "CSS Selectors video"
            },
            {
                id: 5,
                name: "CSS How To",
                document: "CSS How To document",
                videoUrl: "CSS How To video"
            }
        ]
    },
    js: {
        name: "JavaScript",
        lessons: [
            {
                id: 1,
                name: "JS HOME",
                document: "JS HOME document",
                videoUrl: "JS HOME video"
            },
            {
                id: 2,
                name: "JS Introduction",
                document: "JS Introduction document",
                videoUrl: "JS Introduction video"
            },
            {
                id: 3,
                name: "JS Where To",
                document: "JS Where To document",
                videoUrl: "JS Where To video"
            },
            {
                id: 4,
                name: "JS Output",
                document: "JS Output document",
                videoUrl: "JS Output video"
            },
            {
                id: 5,
                name: "JS Statements",
                document: "JS Statements document",
                videoUrl: "JS Statements"
            }
        ]
    }
}