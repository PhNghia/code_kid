export const courses = {
    html: {
        name: "HTML",
        lessons: [
            {
                id: 1,
                name: "HTML HOME",
                document: `$h1_HTML Tutorial\n$h2_Easy Learning with HTML "Try it Yourself"\nWith our "Try it Yourself" editor, you can edit the HTML code and view the result:\n$intro_{bold_Click on the "Try it Yourself" button to see how it works}\n$h2_HTML Examples\nIn this HTML tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!\n$h2_HTML Exercises\nThis HTML tutorial also contains nearly 100 HTML exercises.\n$h2_HTML Quiz Test\nTest your HTML skills with our HTML Quiz!`,
                videoUrl: "HTML HOME video"
            },
            {
                id: 2,
                name: "HTML Introduction",
                document: `$h1_HTML Introduction\n$intro_HTML is the standard markup language for creating Web pages.\n$h2_What is HTML?\nHTML stands for Hyper Text Markup Language\nHTML consists of a series of elements\nHTML elements tell the browser how to display the content\nHTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.\n$h2_Example\nThe {colspan_DOCTYPE html} declaration defines that this document is an HTML5 document\nThe {colspan_body} element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.\nThe {colspan_h1} element defines a large heading\nThe {colspan_p} element defines a paragraph\n$h2_What is an HTML Element?\nAn HTML element is defined by a start tag, some content, and an end tag:\n$tag_tagname{Content goes here ...}\nThe HTML {bold_element} is everything from the start tag to the end tag:\n$tag_h1{My First Heading}\n$tag_p{My first paragraph.}\n$note_{bold_Note:} Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!`,
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
                        id: 1,
                        question: "Add a \"tooltip\" to the paragraph below with the text \"About W3Schools\".",
                        fillInParts: [
                            { text: "&lt;p ", answer: false },
                            { text: "title", answer: true },
                            { text: "=\"About W3Schools\"&gt;W3Schools is a web developer's site.&lt;/p&gt;", answer: false }
                        ]
                    },
                    {   
                        idParent: 6,
                        id: 2,
                        question: "Set the size of the image to 250 pixels wide and 400 pixels tall.",
                        fillInParts: [
                            { text: "&lt;img src=\"w3schools.jpg\" width=\"", answer: false },
                            { text: "250", answer: true },
                            { text: "\" height=\"", answer: false },
                            { text: "400", answer: true },
                            { text: "\"&gt;", answer: false }
                        ]
                    },
                    {   
                        idParent: 6,
                        id: 3,
                        question: `Make the element below into a link that goes to "https://www.w3schools.com".`,
                        fillInParts: [
                            { text: "&lt;a ", answer: false },
                            { text: "href=", answer: true },
                            { text: `"https://www.w3schools.com">This is a link</a>`, answer: false }
                        ]
                    },
                    {   
                        idParent: 6,
                        id: 4,
                        question: `Specify an alternate text for the image.<br>Alternate text is useful when the image cannot be displayed, like when the page is read by a screen reader.`,
                        fillInParts: [
                            { text: `&lt;img src="w3schools.png" `, answer: false },
                            { text: "alt", answer: true },
                            { text: `="w3schools Logo"&gt;`, answer: false }
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
                        id: 1,
                        question: `Use the correct HTML tag to add a heading with the text "London".`,
                        fillInParts: [
                            { text: "<h1>London</h1>", answer: true },
                            { text: "<br><br>", answer: false },
                            { text: `&lt;p&gt;London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.&lt;/p&gt;`, answer: false }
                        ]
                    },
                    {   
                        idParent: 7,
                        id: 2,
                        question: `Add six headings to the document with the text "Hello".
                        <br>
                        Start with the most important heading (the largest) and end with the least important heading (the smallest).`,
                        fillInParts: [
                            { text: "&lt;html&gt;<br><br>", answer: false },
                            { text: "&lt;body&gt;<br><br>", answer: false },
                            { text: "<h1>Hello</h1>", answer: true },
                            { text: '<br><br>', answer: false },
                            { text: "<h2>Hello</h2>", answer: true },
                            { text: '<br><br>', answer: false },
                            { text: "<h3>Hello</h3>", answer: true },
                            { text: '<br><br>', answer: false },
                            { text: "<h4>Hello</h4>", answer: true },
                            { text: '<br><br>', answer: false },
                            { text: "<h5>Hello</h5>", answer: true },
                            { text: '<br><br>', answer: false },
                            { text: "<h6>Hello</h6>", answer: true },
                            { text: '<br><br>', answer: false },
                            { text: "&lt;/body&gt;<br><br>", answer: false },
                            { text: "&lt;/html&gt;", answer: false }
                        ]
                    },
                    {   
                        idParent: 7,
                        id: 3,
                        question: `Mark up the text with appropriate tags:
                        <br><br>
                        "Universal Studios Presents" is the most important heading.
                        <br><br>
                        "Jurassic Park" is the next most important heading.
                        <br><br>
                        "About" is the third most important heading.
                        <br><br>
                        The last sentence is just a paragraph.
                        <br><br>
                        Start with the most important heading (the largest) and end with the least important heading (the smallest).`,
                        fillInParts: [
                            { text: '<h1>', answer: true },
                            { text: 'Universal Studios Presents', answer: false },
                            { text: '</h1>', answer: true },
                            { text: '<br><br>', answer: false },
                            { text: '<h2>', answer: true },
                            { text: 'Jurassic Park', answer: false },
                            { text: '</h2>', answer: true },
                            { text: '<br><br>', answer: false },
                            { text: '<h3>', answer: true },
                            { text: 'About', answer: false },
                            { text: '</h3>', answer: true },
                            { text: '<br><br>', answer: false },
                            { text: '<p>', answer: true },
                            { text: 'On the Island of Isla Nublar, a new park has been built: Jurassic Park is a theme park of cloned dinosaurs!!', answer: false },
                            { text: '</p>', answer: true },
                        ]
                    }
                ]
            },
            {
                id: 8,
                name: "HTML Parapraphs",
                document: "HTML Parapraphs document",
                videoUrl: "HTML Parapraphs video",
                exercises: [
                    {   
                        idParent: 8,
                        id: 1,
                        question: `Use the correct HTML tag to add a paragraph with the text "Hello World!".`,
                        fillInParts: [
                            { text: "&lt;html&gt;<br><br>", answer: false },
                            { text: "&lt;body&gt;<br><br>", answer: false },
                            { text: "<p>Hello World!</p>", answer: true },
                            { text: "<br><br>&lt;/body&gt;<br><br>", answer: false },
                            { text: "&lt;/html&gt;", answer: false }
                        ]
                    },
                    {   
                        idParent: 8,
                        id: 2,
                        question: `Clean up this document with proper end tags.`,
                        fillInParts: [
                            { text: "&lt;h1&gt;This is a Heading", answer: false },
                            { text: "</h1>", answer: true },
                            { text: "<br><br>&lt;p&gt;This is a paragraph.", answer: false },
                            { text: "</p>", answer: true }
                        ]
                    },
                    {   
                        idParent: 8,
                        id: 3,
                        question: `Add a horizontal rule between the heading and the paragraph.`,
                        fillInParts: [
                            { text: '&lt;London&gt;<br><br>', answer: false },
                            { text: '<hr>', answer: true },
                            { text: `<br><br>&lt;p&gt;London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.&lt;/p&gt;`, answer: false }
                        ]
                    },
                    {   
                        idParent: 8,
                        id: 4,
                        question: `Add a line break in the middle of the paragraph:`,
                        fillInParts: [
                            { text: '&lt;p&gt;My Bonnie lies', answer: false },
                            { text: '<br>', answer: true },
                            { text: `over the ocean.&lt;/p&gt;`, answer: false }
                        ]
                    },
                    {   
                        idParent: 8,
                        id: 5,
                        question: `Wrap this poem around HTML tags that will preserve all spaces and linebreaks when the element is displayed.`,
                        fillInParts: [
                            { text: '<pre>', answer: true },
                            { text: `<br><br>My Bonnie lies over the ocean.
                            <br><br>
                            My Bonnie lies over the sea.
                            <br><br>
                            My Bonnie lies over the ocean.
                            <br><br>
                            Oh, bring back my Bonnie to me.<br><br>`, answer: false },
                            { text: `</pre>`, answer: true }
                        ]
                    }
                ]
            },
            {
                id: 9,
                name: "HTML Styles",
                document: "HTML Styles document",
                videoUrl: "HTML Styles video"
            },
            {
                id: 10,
                name: "HTML Formatting",
                document: "HTML Formatting document",
                videoUrl: "HTML Formatting video"
            },
            {
                id: 11,
                name: "HTML Quotations",
                document: "HTML Quotations document",
                videoUrl: "HTML Quotations video"
            },
            {
                id: 12,
                name: "HTML Comments",
                document: "HTML Comments document",
                videoUrl: "HTML Comments video"
            },
            {
                id: 13,
                name: "HTML Colors",
                document: "HTML Colors document",
                videoUrl: "HTML Colors video"
            },
            {
                id: 14,
                name: "HTML CSS",
                document: "HTML CSS document",
                videoUrl: "HTML CSS video"
            },
            {
                id: 15,
                name: "HTML Links",
                document: "HTML Links document",
                videoUrl: "HTML Links video"
            },
            {
                id: 16,
                name: "HTML Images",
                document: "HTML Images document",
                videoUrl: "HTML Images video"
            },
            {
                id: 17,
                name: "HTML Favicon",
                document: "HTML Favicon document",
                videoUrl: "HTML Favicon video"
            },
            {
                id: 18,
                name: "HTML Tables",
                document: "HTML Tables document",
                videoUrl: "HTML Tables video"
            },
            {
                id: 19,
                name: "HTML Lists",
                document: "HTML Lists document",
                videoUrl: "HTML Lists video"
            },
            {
                id: 20,
                name: "HTML Block & Inline",
                document: "HTML Block & Inline document",
                videoUrl: "HTML Block & Inline video"
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
            },
            {
                id: 6,
                name: "CSS Comments",
                document: "CSS Comments document",
                videoUrl: "CSS Comments video"
            },
            {
                id: 7,
                name: "CSS Colors",
                document: "CSS Colors document",
                videoUrl: "CSS Colors video"
            },
            {
                id: 8,
                name: "CSS Backgrounds",
                document: "CSS Backgrounds document",
                videoUrl: "CSS Backgrounds video"
            },
            {
                id: 9,
                name: "CSS Borders",
                document: "CSS Borders document",
                videoUrl: "CSS Borders video"
            },
            {
                id: 10,
                name: "CSS Margins",
                document: "CSS Margins document",
                videoUrl: "CSS Margins video"
            },
            {
                id: 11,
                name: "CSS Padding",
                document: "CSS Padding document",
                videoUrl: "CSS Padding video"
            },
            {
                id: 12,
                name: "CSS Height/Width",
                document: "CSS Height/Width document",
                videoUrl: "CSS Height/Width video"
            },
            {
                id: 13,
                name: "CSS Box Model",
                document: "CSS Box Model document",
                videoUrl: "CSS Box Model video"
            },
            {
                id: 14,
                name: "CSS Outline",
                document: "CSS Outline document",
                videoUrl: "CSS Outline video"
            },
            {
                id: 15,
                name: "CSS Text",
                document: "CSS Text document",
                videoUrl: "CSS Text video"
            },
            {
                id: 16,
                name: "CSS Fonts",
                document: "CSS Fonts document",
                videoUrl: "CSS Fonts video"
            },
            {
                id: 17,
                name: "CSS Icons",
                document: "CSS Icons document",
                videoUrl: "CSS Icons video"
            },
            {
                id: 18,
                name: "CSS Links",
                document: "CSS Links document",
                videoUrl: "CSS Links video"
            },
            {
                id: 19,
                name: "CSS Lists",
                document: "CSS Lists document",
                videoUrl: "CSS Lists video"
            },
            {
                id: 20,
                name: "CSS Tables",
                document: "CSS Tables document",
                videoUrl: "CSS Tables video"
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
            },
            {
                id: 6,
                name: "JS Syntax",
                document: "JS Syntax document",
                videoUrl: "JS Syntax video"
            },
            {
                id: 7,
                name: "JS Comments",
                document: "JS Comments document",
                videoUrl: "JS Comments video"
            },
            {
                id: 8,
                name: "JS Variables",
                document: "JS Variables document",
                videoUrl: "JS Variables video"
            },
            {
                id: 9,
                name: "JS Let",
                document: "JS Let document",
                videoUrl: "JS Let video"
            },
            {
                id: 10,
                name: "JS Const",
                document: "JS Const document",
                videoUrl: "JS Const video"
            },
            {
                id: 11,
                name: "JS Operators",
                document: "JS Operators document",
                videoUrl: "JS Operators video"
            },
            {
                id: 12,
                name: "JS Aritmetic",
                document: "JS Aritmetic document",
                videoUrl: "JS Aritmetic video"
            },
            {
                id: 13,
                name: "JS Assignment",
                document: "JS Assignment document",
                videoUrl: "JS Assignment video"
            },
            {
                id: 14,
                name: "JS Data Types",
                document: "JS Data Types document",
                videoUrl: "JS Data Types video"
            },
            {
                id: 15,
                name: "JS Functions",
                document: "JS Functions document",
                videoUrl: "JS Functions video"
            },
            {
                id: 16,
                name: "JS Objects",
                document: "JS Objects document",
                videoUrl: "JS Objects video"
            },
            {
                id: 17,
                name: "JS Events",
                document: "JS Events document",
                videoUrl: "JS Events video"
            },
            {
                id: 18,
                name: "JS Strings",
                document: "JS Strings document",
                videoUrl: "JS Strings video"
            },
            {
                id: 19,
                name: "JS String Methods",
                document: "JS String Methods document",
                videoUrl: "JS String Methods video"
            },
            {
                id: 20,
                name: "JS String Search",
                document: "JS String Search document",
                videoUrl: "JS String Search video"
            }
        ]
    }
}

function getCourses () {
    let result = JSON.parse(localStorage.getItem('codeKidCouresLesson'))
    if (!result) {
        localStorage.setItem('codeKidCouresLesson', JSON.stringify(courses))
        result = { ...courses }
    }
    return result
}

export { getCourses }