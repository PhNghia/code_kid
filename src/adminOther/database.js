// @type-check
/**
 * @typedef {{ text: string, answer: boolean }} FillInPart
 * @typedef {{ id: string, question: string, fillInParts: FillInPart[] }} FillInExercise
 * @typedef {{ id: number, name: string, document: string, videoUrl: string, exercises?: FillInExercise[] }} Lesson
 * @typedef {{ question: string, answers: string[], corrects: boolean[]}} Quiz
 * @typedef {{ name: string, lessons: Lesson[], quizzes: (Quiz|OldQuiz)[] }} Course
 * @typedef {{ html: Course, css: Course, js: Course }} Courses
 * @typedef {{ id: number, userName: string, email: string, password: string }} User
 * 
 * @typedef {{ [index: number]: string | undefined }} AnswerStorage
 */
const version = "0.0.0.1";

/** @type {Courses} */
let courses;

/** @type {User[]} */
let users;

/** @returns {Courses} */
function loadDefaultCourses() {
    const data = {
        "html": {
            "name": "HTML",
            // "lessons": [
            //     {
            //         "id": 1,
            //         "name": "HTML HOME",
            //         "document": "HTML HOME document",
            //         "videoUrl": "HTML HOME video"
            //     },
            //     {
            //         "id": 2,
            //         "name": "HTML Introduction",
            //         "document": "HTML Introduction document",
            //         "videoUrl": "HTML Introduction video"
            //     },
            //     {
            //         "id": 3,
            //         "name": "HTML Editors",
            //         "document": "HTML Editors document",
            //         "videoUrl": "HTML Editors video"
            //     },
            //     {
            //         "id": 4,
            //         "name": "HTML Basic",
            //         "document": "HTML Basic document",
            //         "videoUrl": "HTML Basic video"
            //     },
            //     {
            //         "id": 5,
            //         "name": "HTML Elements",
            //         "document": "HTML Elements document",
            //         "videoUrl": "HTML Elements video"
            //     },
            //     {
            //         "id": 6,
            //         "name": "HTML Attributes",
            //         "document": "HTML Attributes document",
            //         "videoUrl": "HTML Attributes video",
            //         "exercises": [
            //             {
            //                 "id": "Attribute-1",
            //                 "question": "Add a \"tooltip\" to the paragraph below with the text \"About W3Schools\".",
            //                 "fillInParts": [
            //                     {
            //                         "text": "<p ",
            //                         "answer": false
            //                     },
            //                     {
            //                         "text": "title",
            //                         "answer": true
            //                     },
            //                     {
            //                         "text": "=\"About W3Schools\">W3Schools is a web developer's site.</p>",
            //                         "answer": false
            //                     }
            //                 ]
            //             },
            //             {
            //                 "id": "Attribute-2",
            //                 "question": "Set the size of the image to 250 pixels wide and 400 pixels tall.",
            //                 "fillInParts": [
            //                     {
            //                         "text": "<img src=\"w3schools.jpg\" width=\"",
            //                         "answer": false
            //                     },
            //                     {
            //                         "text": "250",
            //                         "answer": true
            //                     },
            //                     {
            //                         "text": "\" height=\"",
            //                         "answer": false
            //                     },
            //                     {
            //                         "text": "400",
            //                         "answer": true
            //                     },
            //                     {
            //                         "text": "\"",
            //                         "answer": false
            //                     }
            //                 ]
            //             }
            //         ]
            //     }
            // ],
            "lessons": [],
            "quizzes": [
                {
                    "question": "What does HTML stand for?",
                    "answers": [
                        "Home Tool Markup Language",
                        "Hyper Text Markup Language",
                        "Hyperlinks and Text Markup Language"
                    ],
                    "corrects": [
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "Who is making the Web standards?",
                    "answers": [
                        "Mozilla",
                        "Microsoft",
                        "Google",
                        "The World Wide Web Consortium"
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "Choose the correct HTML element for the largest heading:",
                    "answers": [
                        "&lt;heading&gt;",
                        "&lt;h6&gt;",
                        "&lt;h1&gt;",
                        "&lt;head&gt;"
                    ],
                    "corrects": [
                        false,
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "What is the correct HTML element for inserting a line break?",
                    "answers": [
                        "&lt;break&gt;",
                        "&lt;lb&gt;",
                        "&lt;br&gt;"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "What is the correct HTML for adding a background color?",
                    "answers": [
                        "&lt;body style=\"background-color:yellow;\"&gt;",
                        "&lt;body bg=\"yellow\"&gt;",
                        "&lt;background&gt;yellow&lt;/background&gt;"
                    ],
                    "corrects": [
                        true,
                        false,
                        false
                    ]
                },
                {
                    "question": "Choose the correct HTML element to define important text",
                    "answers": [
                        "&lt;strong&gt;",
                        "&lt;i&gt;",
                        "&lt;b&gt;",
                        "&lt;important&gt;"
                    ],
                    "corrects": [
                        true,
                        false,
                        false,
                        false
                    ]
                },
                {
                    "question": "Choose the correct HTML element to define emphasized text",
                    "answers": [
                        "&lt;em&gt;",
                        "&lt;italic&gt;",
                        "&lt;i&gt;"
                    ],
                    "corrects": [
                        true,
                        false,
                        false
                    ]
                },
                {
                    "question": "What is the correct HTML for creating a hyperlink?",
                    "answers": [
                        "&lt;a&gt;http://www.w3schools.com&lt;/a&gt;",
                        "&lt;a url=\"http://www.w3schools.com\"&gt;W3Schools.com&lt;/a&gt;",
                        "&lt;a name=\"http://www.w3schools.com\"&gt;W3Schools.com&lt;/a&gt;",
                        "&lt;a href=\"http://www.w3schools.com\"&gt;W3Schools&lt;/a&gt;"
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "Which character is used to indicate an end tag?",
                    "answers": [
                        "^",
                        "&lt;",
                        "/",
                        "*"
                    ],
                    "corrects": [
                        false,
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "How can you open a link in a new tab/browser window?",
                    "answers": [
                        "&lt;a href=\"url\" target=\"_blank\"&gt;",
                        "&lt;a href=\"url\" target=\"new\"&gt;",
                        "&lt;a href=\"url\" new&gt;"
                    ],
                    "corrects": [
                        true,
                        false,
                        false
                    ]
                },
                {
                    "question": "Which of these elements are all &lt;table&gt; elements?",
                    "answers": [
                        "&lt;table&gt;&lt;tr&gt;&lt;td&gt;",
                        "&lt;thead&gt;&lt;body&gt;&lt;tr&gt;",
                        "&lt;table&gt;&lt;head&gt;&lt;tfoot&gt;",
                        "&lt;table&gt;&lt;tr&gt;&lt;tt&gt;"
                    ],
                    "corrects": [
                        true,
                        false,
                        false,
                        false
                    ]
                },
                {
                    "question": "Inline elements are normally displayed without starting a new line.",
                    "answers": [
                        "True",
                        "False"
                    ],
                    "corrects": [
                        true,
                        false
                    ]
                },
                {
                    "question": "How can you make a numbered list?",
                    "answers": [
                        "&lt;ul&gt;",
                        "&lt;list&gt;",
                        "&lt;dl&gt;",
                        "&lt;ol&gt;"
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "How can you make a bulleted list?",
                    "answers": [
                        "&lt;ul&gt;",
                        "&lt;list&gt;",
                        "&lt;ol&gt;",
                        "&lt;dl&gt;"
                    ],
                    "corrects": [
                        true,
                        false,
                        false,
                        false
                    ]
                },
                {
                    "question": "What is the correct HTML for making a checkbox?",
                    "answers": [
                        "&lt;checkbox&gt;",
                        "&lt;check&gt;",
                        "&lt;input type=\"check\"&gt;",
                        "&lt;input type=\"checkbox\"&gt;"
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "What is the correct HTML for making a text input field?",
                    "answers": [
                        "&lt;textinput type=\"text\"&gt;",
                        "&lt;input type=\"textfield\"&gt;",
                        "&lt;input type=\"text\"&gt;",
                        "&lt;textfield&gt;"
                    ],
                    "corrects": [
                        false,
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "What is the correct HTML for making a drop-down list?",
                    "answers": [
                        "&lt;select&gt;",
                        "&lt;input type=\"dropdown\"&gt;",
                        "&lt;input type=\"list\"&gt;",
                        "&lt;list&gt;"
                    ],
                    "corrects": [
                        true,
                        false,
                        false,
                        false
                    ]
                },
                {
                    "question": "What is the correct HTML for making a text area?",
                    "answers": [
                        "&lt;input type=\"textbox\"&gt;",
                        "&lt;input type=\"textarea\"&gt;",
                        "&lt;textarea&gt;"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "What is the correct HTML for inserting an image?",
                    "answers": [
                        "&lt;img src=\"image.gif\" alt=\"MyImage\"&gt;",
                        "&lt;img alt=\"MyImage\"&gt;image.gif&lt;/img&gt;",
                        "&lt;image src=\"image.gif\" alt=\"MyImage\"&gt;",
                        "&lt;img href=\"image.gif\" alt=\"MyImage\"&gt;"
                    ],
                    "corrects": [
                        true,
                        false,
                        false,
                        false
                    ]
                },
                {
                    "question": "What is the correct HTML for inserting a background image?",
                    "answers": [
                        "&lt;background img=\"background.gif\"&gt;",
                        "&lt;body style=\"background-image:url(background.gif)\"&gt;",
                        "&lt;body bg=\"background.gif\"&gt;"
                    ],
                    "corrects": [
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "An &lt;iframe&gt; is used to display a web page within a web page.",
                    "answers": [
                        "There is no such thing as an &lt;iframe&gt;",
                        "False",
                        "True"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "HTML comments start with &lt;!-- and end with --&gt;",
                    "answers": [
                        "False",
                        "True"
                    ],
                    "corrects": [
                        false,
                        true
                    ]
                },
                {
                    "question": "Block elements are normally displayed without starting a new line.",
                    "answers": [
                        "True",
                        "False"
                    ],
                    "corrects": [
                        false,
                        true
                    ]
                },
                {
                    "question": "Which HTML element defines the title of a document?",
                    "answers": [
                        "&lt;title&gt;",
                        "&lt;meta&gt;",
                        "&lt;head&gt;"
                    ],
                    "corrects": [
                        true,
                        false,
                        false
                    ]
                },
                {
                    "question": "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
                    "answers": [
                        "title",
                        "longdesc",
                        "src",
                        "alt"
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "Which doctype is correct for HTML5?",
                    "answers": [
                        "&lt;!DOCTYPE html&gt;",
                        "&lt;!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 5.0//EN\" \"http://www.w3.org/TR/html5/strict.dtd\"&gt;",
                        "&lt;!DOCTYPE HTML5&gt;"
                    ],
                    "corrects": [
                        true,
                        false,
                        false
                    ]
                },
                {
                    "question": "Which HTML element is used to specify a footer for a document or section?",
                    "answers": [
                        "&lt;bottom&gt;",
                        "&lt;footer&gt;",
                        "&lt;section&gt;"
                    ],
                    "corrects": [
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "In HTML, you can embed SVG elements directly into an HTML page.",
                    "answers": [
                        "True",
                        "False"
                    ],
                    "corrects": [
                        true,
                        false
                    ]
                },
                {
                    "question": "What is the correct HTML element for playing video files?",
                    "answers": [
                        "&lt;video&gt;",
                        "&lt;media&gt;",
                        "&lt;movie&gt;"
                    ],
                    "corrects": [
                        true,
                        false,
                        false
                    ]
                },
                {
                    "question": "What is the correct HTML element for playing audio files?",
                    "answers": [
                        "&lt;mp3&gt;",
                        "&lt;audio&gt;",
                        "&lt;sound&gt;"
                    ],
                    "corrects": [
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "The HTML global attribute, \"contenteditable\" is used to:",
                    "answers": [
                        "Update content from the server",
                        "Specifies a context menu for an element. The menu appears when a user right-clicks on the element",
                        "Return the position of the first found occurrence of content inside a string",
                        "Specify whether the content of an element should be editable or not"
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "In HTML, onblur and onfocus are:",
                    "answers": [
                        "Style attributes",
                        "HTML elements",
                        "Event attributes"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "Graphics defined by SVG is in which format?",
                    "answers": [
                        "XML",
                        "HTML",
                        "CSS"
                    ],
                    "corrects": [
                        true,
                        false,
                        false
                    ]
                },
                {
                    "question": "The HTML &lt;canvas&gt; element is used to:",
                    "answers": [
                        "manipulate data in MySQL",
                        "display database records",
                        "draw graphics",
                        "create draggable elements"
                    ],
                    "corrects": [
                        false,
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "In HTML, which attribute is used to specify that an input field must be filled out?",
                    "answers": [
                        "placeholder",
                        "validate",
                        "formvalidate",
                        "required"
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "Which input type defines a slider control?",
                    "answers": [
                        "slider",
                        "range",
                        "search",
                        "controls"
                    ],
                    "corrects": [
                        false,
                        true,
                        false,
                        false
                    ]
                },
                {
                    "question": "Which HTML element is used to display a scalar measurement within a range?",
                    "answers": [
                        "&lt;range&gt;",
                        "&lt;meter&gt;",
                        "&lt;measure&gt;",
                        "&lt;gauge&gt;"
                    ],
                    "corrects": [
                        false,
                        true,
                        false,
                        false
                    ]
                },
                {
                    "question": "Which HTML element defines navigation links?",
                    "answers": [
                        "&lt;navigate&gt;",
                        "&lt;nav&gt;",
                        "&lt;navigation&gt;"
                    ],
                    "corrects": [
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "In HTML, what does the &lt;aside&gt; element define?",
                    "answers": [
                        "A navigation list to be shown at the left side of the page",
                        "Content aside from the page content",
                        "The ASCII character-set; to send information between computers on the Internet"
                    ],
                    "corrects": [
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "Which HTML element is used to specify a header for a document or section?",
                    "answers": [
                        "&lt;top&gt;",
                        "&lt;section&gt;",
                        "&lt;header&gt;",
                        "&lt;head&gt;"
                    ],
                    "corrects": [
                        false,
                        false,
                        true,
                        false
                    ]
                }
            ]
        },
        "css": {
            "name": "CSS",
            // "lessons": [
            //     {
            //         "id": 1,
            //         "name": "CSS HOME",
            //         "document": "CSS HOME document",
            //         "videoUrl": "CSS HOME video"
            //     },
            //     {
            //         "id": 2,
            //         "name": "CSS Introduction",
            //         "document": "CSS Introduction document",
            //         "videoUrl": "CSS Introduction video"
            //     },
            //     {
            //         "id": 3,
            //         "name": "CSS Syntax",
            //         "document": "CSS Syntax document",
            //         "videoUrl": "CSS Syntax video"
            //     },
            //     {
            //         "id": 4,
            //         "name": "CSS Selectors",
            //         "document": "CSS Selectors document",
            //         "videoUrl": "CSS Selectors video"
            //     },
            //     {
            //         "id": 5,
            //         "name": "CSS How To",
            //         "document": "CSS How To document",
            //         "videoUrl": "CSS How To video"
            //     }
            // ],
            "lessons": [],
            "quizzes": [
                {
                    "question": "What does CSS stand for?",
                    "answers": [
                        "Computer Style Sheets",
                        "Creative Style Sheets",
                        "Colorful Style Sheets",
                        "Cascading Style Sheets"
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "What is the correct HTML for referring to an external style sheet?",
                    "answers": [
                        "What is the correct HTML for referring to an external style sheet?",
                        "&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\"&gt;",
                        "&lt;stylesheet&gt;mystyle.css&lt;/stylesheet&gt;"
                    ],
                    "corrects": [
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "Where in an HTML document is the correct place to refer to an external style sheet?",
                    "answers": [
                        "At the end of the document",
                        "In the &lt;body&gt; section",
                        "In the &lt;head&gt; section"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "Which HTML tag is used to define an internal style sheet?",
                    "answers": [
                        "&lt;style&gt;",
                        "&lt;css&gt;",
                        "&lt;script&gt;"
                    ],
                    "corrects": [
                        true,
                        false,
                        false
                    ]
                },
                {
                    "question": "Which HTML attribute is used to define inline styles?",
                    "answers": [
                        "styles",
                        "class",
                        "font",
                        "style"
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "Which is the correct CSS syntax?",
                    "answers": [
                        "body {color: black;}",
                        "{body:color=black;}",
                        "{body;color:black;}",
                        "body:color=black;"
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "How do you insert a comment in a CSS file?",
                    "answers": [
                        "// this is a comment //",
                        "' this is a comment",
                        "// this is a comment",
                        "/* this is a comment */"
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "Which property is used to change the background color?",
                    "answers": [
                        "color",
                        "bgcolor",
                        "background-color"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "How do you add a background color for all &lt;h1&gt; elements?",
                    "answers": [
                        "all.h1 {background-color:#FFFFFF;}",
                        "h1 {background-color:#FFFFFF;}",
                        "h1.all {background-color:#FFFFFF;}"
                    ],
                    "corrects": [
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "Which CSS property is used to change the text color of an element?",
                    "answers": [
                        "fgcolor",
                        "text-color",
                        "color"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "Which CSS property controls the text size?",
                    "answers": [
                        "font-style",
                        "text-style",
                        "font-size",
                        "text-size"
                    ],
                    "corrects": [
                        false,
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "What is the correct CSS syntax for making all the &lt;p&gt; elements bold?",
                    "answers": [
                        "p {text-size:bold;}",
                        "&lt;p style=\"text-size:bold;\"&gt;",
                        "&lt;p style=\"font-size:bold;\"&gt;",
                        "p {font-weight:bold;}"
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "How do you display hyperlinks without an underline?",
                    "answers": [
                        "a {decoration:no-underline;}",
                        "a {underline:none;}",
                        "a {text-decoration:no-underline;}",
                        "a {text-decoration:none;}"
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "How do you make each word in a text start with a capital letter?",
                    "answers": [
                        "You can't do that with CSS",
                        "text-style:capitalize",
                        "text-transform:capitalize",
                        "transform:capitalize"
                    ],
                    "corrects": [
                        false,
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "Which property is used to change the font of an element?",
                    "answers": [
                        "font-style",
                        "font-weight",
                        "font-family"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "How do you make the text bold?",
                    "answers": [
                        "font:bold;",
                        "style:bold;",
                        "font-weight:bold;"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "How do you display a border like this:\n\nThe top border = 10 pixels\nThe bottom border = 5 pixels\nThe left border = 20 pixels\nThe right border = 1pixel?",
                    "answers": [
                        "border-width:10px 1px 5px 20px;",
                        "border-width:10px 20px 5px 1px;",
                        "border-width:5px 20px 10px 1px;",
                        "border-width:10px 5px 20px 1px;"
                    ],
                    "corrects": [
                        true,
                        false,
                        false,
                        false
                    ]
                },
                {
                    "question": "Which property is used to change the left margin of an element?",
                    "answers": [
                        "indent",
                        "margin-left",
                        "padding-left"
                    ],
                    "corrects": [
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "When using the padding property; are you allowed to use negative values?",
                    "answers": [
                        "Yes",
                        "No"
                    ],
                    "corrects": [
                        false,
                        true
                    ]
                },
                {
                    "question": "How do you make a list that lists its items with squares?",
                    "answers": [
                        "list: square;",
                        "list-type: square;",
                        "list-style-type: square;"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "How do you select an element with id 'demo'?",
                    "answers": [
                        "#demo",
                        "demo",
                        "*demo",
                        ".demo"
                    ],
                    "corrects": [
                        true,
                        false,
                        false,
                        false
                    ]
                },
                {
                    "question": "How do you select elements with class name 'test'?",
                    "answers": [
                        "*test",
                        "#test",
                        ".test",
                        "test"
                    ],
                    "corrects": [
                        false,
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "How do you select all p elements inside a div element?",
                    "answers": [
                        "div.p",
                        "div + p",
                        " div p"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "How do you group selectors?",
                    "answers": [
                        "Separate each selector with a space",
                        "Separate each selector with a plus sign",
                        "Separate each selector with a comma"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "What is the default value of the position property?",
                    "answers": [
                        "absolute",
                        "static",
                        "relative",
                        "fixed"
                    ],
                    "corrects": [
                        false,
                        true,
                        false,
                        false
                    ]
                }
            ]
        },
        "js": {
            "name": "JavaScript",
            // "lessons": [
            //     {
            //         "id": 1,
            //         "name": "JS HOME",
            //         "document": "JS HOME document",
            //         "videoUrl": "JS HOME video"
            //     },
            //     {
            //         "id": 2,
            //         "name": "JS Introduction",
            //         "document": "JS Introduction document",
            //         "videoUrl": "JS Introduction video"
            //     },
            //     {
            //         "id": 3,
            //         "name": "JS Where To",
            //         "document": "JS Where To document",
            //         "videoUrl": "JS Where To video"
            //     },
            //     {
            //         "id": 4,
            //         "name": "JS Output",
            //         "document": "JS Output document",
            //         "videoUrl": "JS Output video"
            //     },
            //     {
            //         "id": 5,
            //         "name": "JS Statements",
            //         "document": "JS Statements document",
            //         "videoUrl": "JS Statements"
            //     }
            // ],
            "lessons": [],
            "quizzes": [
                {
                    "question": "Inside which HTML element do we put the JavaScript?",
                    "answers": [
                        "&lt;scripting&gt;",
                        "&lt;js&gt;",
                        "&lt;script&gt;",
                        "&lt;javascript&gt;"
                    ],
                    "corrects": [
                        false,
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "What is the correct JavaScript syntax to change the content of the HTML element below?\n\n&lt;p id=\"demo\"&gt;This is a demonstration.&lt;/p&gt;",
                    "answers": [
                        "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
                        "#demo.innerHTML = \"Hello World!\";",
                        "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
                        "document.getElement(\"p\").innerHTML = \"Hello World!\";"
                    ],
                    "corrects": [
                        false,
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "Where is the correct place to insert a JavaScript?",
                    "answers": [
                        "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
                        "The &lt;head&gt; section",
                        "The &lt;body&gt; section"
                    ],
                    "corrects": [
                        true,
                        false,
                        false
                    ]
                },
                {
                    "question": "What is the correct syntax for referring to an external script called \"xxx.js\"?",
                    "answers": [
                        "&lt;script href=\"xxx.js\"&gt;",
                        "&lt;script name=\"xxx.js\"&gt;",
                        "&lt;script src=\"xxx.js\"&gt;"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "The external JavaScript file must contain the &lt;script&gt; tag.",
                    "answers": [
                        "True",
                        "False"
                    ],
                    "corrects": [
                        false,
                        true
                    ]
                },
                {
                    "question": "How do you write \"Hello World\" in an alert box?",
                    "answers": [
                        "alertBox(\"Hello World\");",
                        "msg(\"Hello World\");",
                        "msgBox(\"Hello World\");",
                        "alert(\"Hello World\");"
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "How do you create a function in JavaScript?",
                    "answers": [
                        "function myFunction()",
                        "function:myFunction()",
                        "function = myFunction()"
                    ],
                    "corrects": [
                        true,
                        false,
                        false
                    ]
                },
                {
                    "question": "How do you call a function named \"myFunction\"?",
                    "answers": [
                        "myFunction()",
                        "call function myFunction()",
                        "call myFunction()"
                    ],
                    "corrects": [
                        true,
                        false,
                        false
                    ]
                },
                {
                    "question": "How to write an IF statement in JavaScript?",
                    "answers": [
                        "if i = 5",
                        "if i == 5 then",
                        "if (i == 5)",
                        "if i = 5 then"
                    ],
                    "corrects": [
                        false,
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
                    "answers": [
                        "if (i != 5)",
                        "if (i &lt;&gt; 5)",
                        "if i &lt;&gt; 5",
                        "if i =! 5 then"
                    ],
                    "corrects": [
                        true,
                        false,
                        false,
                        false
                    ]
                },
                {
                    "question": "How does a WHILE loop start?",
                    "answers": [
                        "while (i &lt;= 10; i++)",
                        "while i = 1 to 10",
                        "while (i &lt;= 10)"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "How does a FOR loop start?",
                    "answers": [
                        "for (i &lt;= 5; i++)",
                        "for (i = 0; i &lt;= 5)",
                        "for (i = 0; i &lt;= 5; i++)",
                        "for i = 1 to 5"
                    ],
                    "corrects": [
                        false,
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "How can you add a comment in a JavaScript?",
                    "answers": [
                        "//This is a comment",
                        "'This is a comment",
                        "&lt;!--This is a comment--&gt;"
                    ],
                    "corrects": [
                        true,
                        false,
                        false
                    ]
                },
                {
                    "question": "How to insert a comment that has more than one line?",
                    "answers": [
                        "//This comment has\nmore than one line//",
                        "&lt;!--This comment has\nmore than one line--&gt;",
                        "/*This comment has\nmore than one line*/"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "What is the correct way to write a JavaScript array?",
                    "answers": [
                        "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
                        "var colors = \"red\", \"green\", \"blue\"",
                        "var colors = [\"red\", \"green\", \"blue\"]",
                        "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")"
                    ],
                    "corrects": [
                        false,
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "How do you round the number 7.25, to the nearest integer?",
                    "answers": [
                        "Math.rnd(7.25)",
                        "rnd(7.25)",
                        "round(7.25)",
                        "Math.round(7.25)"
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "How do you find the number with the highest value of x and y?",
                    "answers": [
                        "ceil(x, y)",
                        "Math.max(x, y)",
                        "top(x, y)",
                        "Math.ceil(x, y)"
                    ],
                    "corrects": [
                        false,
                        true,
                        false,
                        false
                    ]
                },
                {
                    "question": "What is the correct JavaScript syntax for opening a new window called \"w2\" ?",
                    "answers": [
                        "w2 = window.open(\"http://www.w3schools.com\");",
                        "w2 = window.new(\"http://www.w3schools.com\");"
                    ],
                    "corrects": [
                        true,
                        false
                    ]
                },
                {
                    "question": "JavaScript is the same as Java.",
                    "answers": [
                        "True",
                        "False"
                    ],
                    "corrects": [
                        false,
                        true
                    ]
                },
                {
                    "question": "How can you detect the client's browser name?",
                    "answers": [
                        "client.navName",
                        "navigator.appName",
                        "browser.name"
                    ],
                    "corrects": [
                        false,
                        true,
                        false
                    ]
                },
                {
                    "question": "Which event occurs when the user clicks on an HTML element?",
                    "answers": [
                        "onmouseover",
                        "onchange",
                        "onmouseclick",
                        "onclick"
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "How do you declare a JavaScript variable?",
                    "answers": [
                        "v carName;",
                        "variable carName;",
                        "var carName;"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "Which operator is used to assign a value to a variable?",
                    "answers": [
                        "-",
                        "*",
                        "X",
                        "="
                    ],
                    "corrects": [
                        false,
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "What will the following code return: Boolean(10 &gt; 9)",
                    "answers": [
                        "NaN",
                        "false",
                        "true"
                    ],
                    "corrects": [
                        false,
                        false,
                        true
                    ]
                },
                {
                    "question": "Is JavaScript case-sensitive?",
                    "answers": [
                        "No",
                        "Yes"
                    ],
                    "corrects": [
                        false,
                        true
                    ]
                }
            ]
        }
    }
    localStorage['codeKidCourseQuizAndAcc'] = JSON.stringify(data);
    return data;
}

/** @type {User[]} */
function loadDefaultUsers() {
    const data = [
        { id: 0, userName: "Administrator", email: "superuser@codekid.vn", password: "pozbyf-2ziVbe-zydsoh" },
        { id: 4, userName: "Huỳnh Xuân Bách", email: "hxb04@codekid.vn", password: "hXb;2003" },
        { id: 6, userName: "Phạm Văn Nghĩa", email: "pvn06@codekid.vn", password: "pVn;2003" }
    ];
    localStorage.users = JSON.stringify(data);
    return data;
}

/** @returns {Courses} */
function loadCourses() {
    let courses = localStorage.getItem('codeKidCourseQuizAndAcc');
    return courses ? JSON.parse(courses) : loadDefaultCourses();
}

/** @returns {User[]} */
function loadUsers() {
    let users = localStorage.users;
    return users ? JSON.parse(users) : loadDefaultUsers();
}

function saveCourses() { if (courses) localStorage['codeKidCourseQuizAndAcc'] = JSON.stringify(courses); }

function saveUsers() { if (users) localStorage.users = JSON.stringify(users); }

export function loadDatabase() {
    courses = loadCourses();
    users = loadUsers();
    if (localStorage.version != version) {
        localStorage.version = version;
        courses = loadDefaultCourses();
        users = loadDefaultUsers();
    }
}

export function saveDatabase() {
    saveCourses();
    saveUsers();
}

/** @returns {Courses} */
export function getCourses() { return courses; }
/** @param {Courses} pCourses */
export function setCourses(pCourses) { 
    courses = pCourses;
    localStorage['codeKidCourseQuizAndAcc'] = JSON.stringify(pCourses);
}

/**
 * @param {keyof Courses} id
 * @returns {Lesson[]}
 */
export function getLessonsByCourseId(id) { return courses[id].lessons.map(x => x); }

/**
 * @param {keyof Courses} id
 * @returns {Quiz[]}
 */
export function getQuizzesByCourseId(id) { return courses[id].quizzes.map(x => x); }

/** @returns {User} */
export function getSuperUser() { return users.filter(x => x.id === 0)[0]; }
/** @returns {User[]} */
export function getNormalUsers() { return users.filter(x => x.id !== 0); }
/** @returns {User[]} */
export function getUsers() { return users; }
/** @param {User[]} pUsers */
export function setUsers(pUsers) { 
    users = pUsers;
    localStorage.users = JSON.stringify(pUsers);
}
