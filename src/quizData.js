// complete
const html = [
    {
        question: "What does HTML stand for?",
        answers: {
            a: "Home Tool Markup Language",
            b: "Hyper Text Markup Language",
            c: "Hyperlinks and Text Markup Language"
        },
        correctAnswer: {
            a: false,
            b: true,
            c: false,
        }
    },
    {
        question: "Who is making the Web standards?",
        answers: {
            a: "Mozilla",
            b: "Microsoft",
            c: "Google",
            d: "The World Wide Web Consortium"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        },
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        answers: {
            a: "&lt;heading&gt;",
            b: "&lt;h6&gt;",
            c: "&lt;h1&gt;",
            d: "&lt;head&gt;"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
            d: false
        }
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: {
            a: "&lt;break&gt;",
            b: "&lt;lb&gt;",
            c: "&lt;br&gt;",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "What is the correct HTML for adding a background color?",
        answers: {
            a: "&lt;body style=\"background-color:yellow;\"&gt;",
            b: "&lt;body bg=\"yellow\"&gt;",
            c: "&lt;background&gt;yellow&lt;/background&gt;",
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
        }
    },
    {
        question: "Choose the correct HTML element to define important text",
        answers: {
            a: "&lt;strong&gt;",
            b: "&lt;i&gt;",
            c: "&lt;b&gt;",
            d: "&lt;important&gt;"
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
            d: false
        }
    },
    {
        question: "Choose the correct HTML element to define emphasized text",
        answers: {
            a: "&lt;em&gt;",
            b: "&lt;italic&gt;",
            c: "&lt;i&gt;",
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
        }
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        answers: {
            a: "&lt;a&gt;http://www.w3schools.com&lt;/a&gt;",
            b: "&lt;a url=\"http://www.w3schools.com\"&gt;W3Schools.com&lt;/a&gt;",
            c: "&lt;a name=\"http://www.w3schools.com\"&gt;W3Schools.com&lt;/a&gt;",
            d: "&lt;a href=\"http://www.w3schools.com\"&gt;W3Schools&lt;/a&gt;"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        question: "Which character is used to indicate an end tag?",
        answers: {
            a: "^",
            b: "&lt;",
            c: "/",
            d: "*"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
            d: false
        }
    },
    {
        question: "How can you open a link in a new tab/browser window?",
        answers: {
            a: "&lt;a href=\"url\" target=\"_blank\"&gt;",
            b: "&lt;a href=\"url\" target=\"new\"&gt;",
            c: "&lt;a href=\"url\" new&gt;",
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
        }
    },
    {
        question: "Which of these elements are all &lt;table&gt; elements?",
        answers: {
            a: "&lt;table&gt;&lt;tr&gt;&lt;td&gt;",
            b: "&lt;thead&gt;&lt;body&gt;&lt;tr&gt;",
            c: "&lt;table&gt;&lt;head&gt;&lt;tfoot&gt;",
            d: "&lt;table&gt;&lt;tr&gt;&lt;tt&gt;"
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
            d: false
        }
    },
    {
        question: "Inline elements are normally displayed without starting a new line.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: {
            a: true,
            b: false,
        }
    },
    {
        question: "How can you make a numbered list?",
        answers: {
            a: "&lt;ul&gt;",
            b: "&lt;list&gt;",
            c: "&lt;dl&gt;",
            d: "&lt;ol&gt;"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        question: "How can you make a bulleted list?",
        answers: {
            a: "&lt;ul&gt;",
            b: "&lt;list&gt;",
            c: "&lt;ol&gt;",
            d: "&lt;dl&gt;"
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
            d: false
        }
    },
    {
        question: "What is the correct HTML for making a checkbox?",
        answers: {
            a: "&lt;checkbox&gt;",
            b: "&lt;check&gt;",
            c: "&lt;input type=\"check\"&gt;",
            d: "&lt;input type=\"checkbox\"&gt;"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        question: "What is the correct HTML for making a text input field?",
        answers: {
            a: "&lt;textinput type=\"text\"&gt;",
            b: "&lt;input type=\"textfield\"&gt;",
            c: "&lt;input type=\"text\"&gt;",
            d: "&lt;textfield&gt;"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
            d: false
        }
    },
    {
        question: "What is the correct HTML for making a drop-down list?",
        answers: {
            a: "&lt;select&gt;",
            b: "&lt;input type=\"dropdown\"&gt;",
            c: "&lt;input type=\"list\"&gt;",
            d: "&lt;list&gt;"
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
            d: false
        }
    },
    {
        question: "What is the correct HTML for making a text area?",
        answers: {
            a: "&lt;input type=\"textbox\"&gt;",
            b: "&lt;input type=\"textarea\"&gt;",
            c: "&lt;textarea&gt;",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "What is the correct HTML for inserting an image?",
        answers: {
            a: "&lt;img src=\"image.gif\" alt=\"MyImage\"&gt;",
            b: "&lt;img alt=\"MyImage\"&gt;image.gif&lt;/img&gt;",
            c: "&lt;image src=\"image.gif\" alt=\"MyImage\"&gt;",
            d: "&lt;img href=\"image.gif\" alt=\"MyImage\"&gt;"
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
            d: false
        }
    },
    {
        question: "What is the correct HTML for inserting a background image?",
        answers: {
            a: "&lt;background img=\"background.gif\"&gt;",
            b: "&lt;body style=\"background-image:url(background.gif)\"&gt;",
            c: "&lt;body bg=\"background.gif\"&gt;",
        },
        correctAnswer: {
            a: false,
            b: true,
            c: false,
        }
    },
    {
        question: "An &lt;iframe&gt; is used to display a web page within a web page.",
        answers: {
            a: "There is no such thing as an &lt;iframe&gt;",
            b: "False",
            c: "True",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "HTML comments start with &lt;!-- and end with --&gt;",
        answers: {
            a: "False",
            b: "True",
        },
        correctAnswer: {
            a: false,
            b: true,
        }
    },
    {
        question: "Block elements are normally displayed without starting a new line.",
        answers: {
            a: "True",
            b: "False",
        },
        correctAnswer: {
            a: false,
            b: true,
        }
    },
    {
        question: "Which HTML element defines the title of a document?",
        answers: {
            a: "&lt;title&gt;",
            b: "&lt;meta&gt;",
            c: "&lt;head&gt;",
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
        }
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answers: {
            a: "title",
            b: "longdesc",
            c: "src",
            d: "alt"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        question: "Which doctype is correct for HTML5?",
        answers: {
            a: "&lt;!DOCTYPE html&gt;",
            b: "&lt;!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 5.0//EN\" \"http://www.w3.org/TR/html5/strict.dtd\"&gt;",
            c: "&lt;!DOCTYPE HTML5&gt;",
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
        }
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        answers: {
            a: "&lt;bottom&gt;",
            b: "&lt;footer&gt;",
            c: "&lt;section&gt;",
        },
        correctAnswer: {
            a: false,
            b: true,
            c: false,
        }
    },
    {
        question: "In HTML, you can embed SVG elements directly into an HTML page.",
        answers: {
            a: "True",
            b: "False",
        },
        correctAnswer: {
            a: true,
            b: false,
        }
    },
    {
        question: "What is the correct HTML element for playing video files?",
        answers: {
            a: "&lt;video&gt;",
            b: "&lt;media&gt;",
            c: "&lt;movie&gt;",
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
        }
    },
    {
        question: "What is the correct HTML element for playing audio files?",
        answers: {
            a: "&lt;mp3&gt;",
            b: "&lt;audio&gt;",
            c: "&lt;sound&gt;",
        },
        correctAnswer: {
            a: false,
            b: true,
            c: false,
        }
    },
    {
        question: "The HTML global attribute, \"contenteditable\" is used to:",
        answers: {
            a: "Update content from the server",
            b: "Specifies a context menu for an element. The menu appears when a user right-clicks on the element",
            c: "Return the position of the first found occurrence of content inside a string",
            d: "Specify whether the content of an element should be editable or not"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        question: "In HTML, onblur and onfocus are:",
        answers: {
            a: "Style attributes",
            b: "HTML elements",
            c: "Event attributes",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "Graphics defined by SVG is in which format?",
        answers: {
            a: "XML",
            b: "HTML",
            c: "CSS",
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
        }
    },
    {
        question: "The HTML &lt;canvas&gt; element is used to:",
        answers: {
            a: "manipulate data in MySQL",
            b: "display database records",
            c: "draw graphics",
            d: "create draggable elements"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
            d: false
        }
    },
    {
        question: "In HTML, which attribute is used to specify that an input field must be filled out?",
        answers: {
            a: "placeholder",
            b: "validate",
            c: "formvalidate",
            d: "required"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        question: "Which input type defines a slider control?",
        answers: {
            a: "slider",
            b: "range",
            c: "search",
            d: "controls"
        },
        correctAnswer: {
            a: false,
            b: true,
            c: false,
            d: false
        }
    },
    {
        question: "Which HTML element is used to display a scalar measurement within a range?",
        answers: {
            a: "&lt;range&gt;",
            b: "&lt;meter&gt;",
            c: "&lt;measure&gt;",
            d: "&lt;gauge&gt;"
        },
        correctAnswer: {
            a: false,
            b: true,
            c: false,
            d: false
        }
    },
    {
        question: "Which HTML element defines navigation links?",
        answers: {
            a: "&lt;navigate&gt;",
            b: "&lt;nav&gt;",
            c: "&lt;navigation&gt;",
        },
        correctAnswer: {
            a: false,
            b: true,
            c: false,
        }
    },
    {
        question: "In HTML, what does the &lt;aside&gt; element define?",
        answers: {
            a: "A navigation list to be shown at the left side of the page",
            b: "Content aside from the page content",
            c: "The ASCII character-set; to send information between computers on the Internet",
        },
        correctAnswer: {
            a: false,
            b: true,
            c: false,
        }
    },
    {
        question: "Which HTML element is used to specify a header for a document or section?",
        answers: {
            a: "&lt;top&gt;",
            b: "&lt;section&gt;",
            c: "&lt;header&gt;",
            d: "&lt;head&gt;"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
            d: false
        }
    }
]

// complete
const css = [
    {
        question: "What does CSS stand for?",
        answers: {
            a: "Computer Style Sheets",
            b: "Creative Style Sheets",
            c: "Colorful Style Sheets",
            d: "Cascading Style Sheets"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        question: "What is the correct HTML for referring to an external style sheet?",
        answers: {
            a: "What is the correct HTML for referring to an external style sheet?",
            b: "&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\"&gt;",
            c: "&lt;stylesheet&gt;mystyle.css&lt;/stylesheet&gt;",
        },
        correctAnswer: {
            a: false,
            b: true,
            c: false,
        }
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        answers: {
            a: "At the end of the document",
            b: "In the &lt;body&gt; section",
            c: "In the &lt;head&gt; section",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: {
            a: "&lt;style&gt;",
            b: "&lt;css&gt;",
            c: "&lt;script&gt;",
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
        }
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        answers: {
            a: "styles",
            b: "class",
            c: "font",
            d: "style"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        question: "Which is the correct CSS syntax?",
        answers: {
            a: "body {color: black;}",
            b: "{body:color=black;}",
            c: "{body;color:black;}",
            d: "body:color=black;"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        question: "How do you insert a comment in a CSS file?",
        answers: {
            a: "// this is a comment //",
            b: "' this is a comment",
            c: "// this is a comment",
            d: "/* this is a comment */"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        question: "Which property is used to change the background color?",
        answers: {
            a: "color",
            b: "bgcolor",
            c: "background-color",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "How do you add a background color for all &lt;h1&gt; elements?",
        answers: {
            a: "all.h1 {background-color:#FFFFFF;}",
            b: "h1 {background-color:#FFFFFF;}",
            c: "h1.all {background-color:#FFFFFF;}",
        },
        correctAnswer: {
            a: false,
            b: true,
            c: false,
        }
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: {
            a: "fgcolor",
            b: "text-color",
            c: "color",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "Which CSS property controls the text size?",
        answers: {
            a: "font-style",
            b: "text-style",
            c: "font-size",
            d: "text-size"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
            d: false
        }
    },
    {
        question: "What is the correct CSS syntax for making all the &lt;p&gt; elements bold?",
        answers: {
            a: "p {text-size:bold;}",
            b: "&lt;p style=\"text-size:bold;\"&gt;",
            c: "&lt;p style=\"font-size:bold;\"&gt;",
            d: "p {font-weight:bold;}"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        question: "How do you display hyperlinks without an underline?",
        answers: {
            a: "a {decoration:no-underline;}",
            b: "a {underline:none;}",
            c: "a {text-decoration:no-underline;}",
            d: "a {text-decoration:none;}"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        answers: {
            a: "You can't do that with CSS",
            b: "text-style:capitalize",
            c: "text-transform:capitalize",
            d: "transform:capitalize"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
            d: false
        }
    },
    {
        question: "Which property is used to change the font of an element?",
        answers: {
            a: "font-style",
            b: "font-weight",
            c: "font-family",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "How do you make the text bold?",
        answers: {
            a: "font:bold;",
            b: "style:bold;",
            c: "font-weight:bold;",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "How do you display a border like this:\n\nThe top border = 10 pixels\nThe bottom border = 5 pixels\nThe left border = 20 pixels\nThe right border = 1pixel?",
        answers: {
            a: "border-width:10px 1px 5px 20px;",
            b: "border-width:10px 20px 5px 1px;",
            c: "border-width:5px 20px 10px 1px;",
            d: "border-width:10px 5px 20px 1px;"
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
            d: false
        }
    },
    {
        question: "Which property is used to change the left margin of an element?",
        answers: {
            a: "indent",
            b: "margin-left",
            c: "padding-left",
        },
        correctAnswer: {
            a: false,
            b: true,
            c: false,
        }
    },
    {
        question: "When using the padding property; are you allowed to use negative values?",
        answers: {
            a: "Yes",
            b: "No",
        },
        correctAnswer: {
            a: false,
            b: true,
        }
    },
    {
        question: "How do you make a list that lists its items with squares?",
        answers: {
            a: "list: square;",
            b: "list-type: square;",
            c: "list-style-type: square;",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "How do you select an element with id 'demo'?",
        answers: {
            a: "#demo",
            b: "demo",
            c: "*demo",
            d: ".demo"
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
            d: false
        }
    },
    {
        question: "How do you select elements with class name 'test'?",
        answers: {
            a: "*test",
            b: "#test",
            c: ".test",
            d: "test"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
            d: false
        }
    },
    {
        question: "How do you select all p elements inside a div element?",
        answers: {
            a: "div.p",
            b: "div + p",
            c: " div p",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "How do you group selectors?",
        answers: {
            a: "Separate each selector with a space",
            b: "Separate each selector with a plus sign",
            c: "Separate each selector with a comma",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "What is the default value of the position property?",
        answers: {
            a: "absolute",
            b: "static",
            c: "relative",
            d: "fixed"
        },
        correctAnswer: {
            a: false,
            b: true,
            c: false,
            d: false
        }
    }
]

// complete
const js = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "&lt;scripting&gt;",
            b: "&lt;js&gt;",
            c: "&lt;script&gt;",
            d: "&lt;javascript&gt;"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
            d: false
        }
    },
    {
        question: 
        "What is the correct JavaScript syntax to change the content of the HTML element below?\n\n&lt;p id=\"demo\"&gt;This is a demonstration.&lt;/p&gt;",
        answers: {
            a: "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
            b: "#demo.innerHTML = \"Hello World!\";",
            c: "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
            d: "document.getElement(\"p\").innerHTML = \"Hello World!\";"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
            d: false
        }
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            a: "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
            b: "The &lt;head&gt; section",
            c: "The &lt;body&gt; section",
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
        }
    },
    {
        question: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        answers: {
            a: "&lt;script href=\"xxx.js\"&gt;",
            b: "&lt;script name=\"xxx.js\"&gt;",
            c: "&lt;script src=\"xxx.js\"&gt;",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "The external JavaScript file must contain the &lt;script&gt; tag.",
        answers: {
            a: "True",
            b: "False",
        },
        correctAnswer: {
            a: false,
            b: true,
        }
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        answers: {
            a: "alertBox(\"Hello World\");",
            b: "msg(\"Hello World\");",
            c: "msgBox(\"Hello World\");",
            d: "alert(\"Hello World\");"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: {
            a: "function myFunction()",
            b: "function:myFunction()",
            c: "function = myFunction()",
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
        }
    },
    {
        question: "How do you call a function named \"myFunction\"?",
        answers: {
            a: "myFunction()",
            b: "call function myFunction()",
            c: "call myFunction()",
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
        }
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: {
            a: "if i = 5",
            b: "if i == 5 then",
            c: "if (i == 5)",
            d: "if i = 5 then"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
            d: false
        }
    },
    {
        question: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
        answers: {
            a: "if (i != 5)",
            b: "if (i &lt;&gt; 5)",
            c: "if i &lt;&gt; 5",
            d: "if i =! 5 then"
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
            d: false
        }
    },
    {
        question: "How does a WHILE loop start?",
        answers: {
            a: "while (i &lt;= 10; i++)",
            b: "while i = 1 to 10",
            c: "while (i &lt;= 10)",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "How does a FOR loop start?",
        answers: {
            a: "for (i &lt;= 5; i++)",
            b: "for (i = 0; i &lt;= 5)",
            c: "for (i = 0; i &lt;= 5; i++)",
            d: "for i = 1 to 5"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
            d: false
        }
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: {
            a: "//This is a comment",
            b: "'This is a comment",
            c: "&lt;!--This is a comment--&gt;",
        },
        correctAnswer: {
            a: true,
            b: false,
            c: false,
        }
    },
    {
        question: "How to insert a comment that has more than one line?",
        answers: {
            a: "//This comment has\nmore than one line//",
            b: "&lt;!--This comment has\nmore than one line--&gt;",
            c: "/*This comment has\nmore than one line*/",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: {
            a: "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
            b: "var colors = \"red\", \"green\", \"blue\"",
            c: "var colors = [\"red\", \"green\", \"blue\"]",
            d: "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
            d: false
        }
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: {
            a: "Math.rnd(7.25)",
            b: "rnd(7.25)",
            c: "round(7.25)",
            d: "Math.round(7.25)"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answers: {
            a: "ceil(x, y)",
            b: "Math.max(x, y)",
            c: "top(x, y)",
            d: "Math.ceil(x, y)"
        },
        correctAnswer: {
            a: false,
            b: true,
            c: false,
            d: false
        }
    },
    {
        question: "What is the correct JavaScript syntax for opening a new window called \"w2\" ?",
        answers: {
            a: "w2 = window.open(\"http://www.w3schools.com\");",
            b: "w2 = window.new(\"http://www.w3schools.com\");",
        },
        correctAnswer: {
            a: true,
            b: false,
        }
    },
    {
        question: "JavaScript is the same as Java.",
        answers: {
            a: "True",
            b: "False",
        },
        correctAnswer: {
            a: false,
            b: true,
        }
    },
    {
        question: "How can you detect the client's browser name?",
        answers: {
            a: "client.navName",
            b: "navigator.appName",
            c: "browser.name",
        },
        correctAnswer: {
            a: false,
            b: true,
            c: false,
        }
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: {
            a: "onmouseover",
            b: "onchange",
            c: "onmouseclick",
            d: "onclick"
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: {
            a: "v carName;",
            b: "variable carName;",
            c: "var carName;",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: {
            a: "-",
            b: "*",
            c: "X",
            d: "="
        },
        correctAnswer: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        question: "What will the following code return: Boolean(10 &gt; 9)",
        answers: {
            a: "NaN",
            b: "false",
            c: "true",
        },
        correctAnswer: {
            a: false,
            b: false,
            c: true,
        }
    },
    {
        question: "Is JavaScript case-sensitive?",
        answers: {
            a: "No",
            b: "Yes",
        },
        correctAnswer: {
            a: false,
            b: true,
        }
    }
]

export const quiz = {
    html: [...html],
    css: [...css],
    js: [...js]
}
