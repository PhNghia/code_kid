// @ts-check
import { loadDatabase, getUsers, setUsers, getCourses, setCourses } from "./database.js";

(() => {
    loadDatabase();

    setupOverlay();
    setupSearchAction();
    setupAddAction();
    renderUsers(getUsers());
    getCourses()
    renderCourses(getCourses());
})()

/** @param {HTMLDivElement} overlay */
function hideOverlay(overlay) {
    overlay.innerHTML = "";
    overlay.classList.toggle("shown", false);
}

function setupOverlay() {
    /** @type {HTMLDivElement | null} */
    const overlay = document.querySelector(".overlay");
    if (!overlay) {
        console.log("Missing .overlay Element!");
        return;
    }
    overlay.addEventListener("click", e => {
        // @ts-expect-error
        if (!e.target || !e.target.classList.contains("overlay")) return;
        hideOverlay(overlay)
    });
}

/**
 * @param {string} actionClass
 * @param {{ id: number; title: string; subtitle: string; type: string; }[]} items
 */
function renderItems(actionClass, items) {
    /** @type {Element | null} */
    const itemsElement = document.querySelector(actionClass + ">.items");
    if (!itemsElement) {
        console.log("Missing " + actionClass + ">.items Element");
        return;
    }
    itemsElement.innerHTML = items.map(x =>
        `<div class="item unselectable">
            <span class="title">${x.title}</span>
            <br>
            <span class="subtitle">${x.subtitle}</span>
            <div class="options">
                <span class="icon edit mdi mdi-pencil" data-type="${x.type}" data-id="${x.id}"></span>
                <span class="icon remove mdi mdi-delete" data-type="${x.type}" data-id="${x.id}"></span>
            </div>
        </div>`
    ).reduce((p, v) => p + "<hr>" + v);
    setupEditAction(actionClass);
    setupRemoveAction(actionClass);
}

/** @param {import("./database.js").User[]} users */
function renderUsers(users) {
    renderItems(".users", users.map(x => ({
        id: x.id,
        title: x.userName,
        subtitle: x.email,
        type: "user"
    })))
}

/** @param {import("./database.js").Courses} courses */
function convertCourses(courses) {
    return Object.entries(courses).map(([k, c]) => [c.lessons.map(lesson => ({
        id: lesson.id,
        title: lesson.name,
        subtitle: k === "html" ? "HTML Lesson" : k === "css" ? "CSS Lesson" : k === "js" ? "JavaScript Lesson" : "Lesson",
        type: k === "html" ? "html-lesson" : k === "css" ? "css-lesson" : k === "js" ? "js-lesson" : "lesson"
    })), c.quizzes.map((quiz, id) => ({
        id: id,
        title: quiz.question,
        subtitle: k === "html" ? "HTML Quiz" : k === "css" ? "CSS Quiz" : k === "js" ? "JavaScript Quiz" : "Quiz",
        type: k === "html" ? "html-quiz" : k === "css" ? "css-quiz" : k === "js" ? "js-quiz" : "quiz"
    }))]).reduce((p, v) => [p[0].concat(v[0]), p[1].concat(v[1])]).reduce((p, v) => p.concat(v));
}

/** @param {import("./database.js").Courses} courses */
function renderCourses(courses) {
    renderItems(".courses", convertCourses(courses));
}

/** @param {string} className */
function clearSearchContent(className) {
    document.querySelectorAll(className + ">.search>.text").forEach(e => {
        e.textContent = "";
    });
    document.querySelectorAll(className + ">.search>.placeholder").forEach(e => {
        e.classList.toggle("shown", true);
    });
}

function setupSearchAction() {
    // @ts-expect-error
    document.querySelectorAll(".optionGroup").forEach((/** @type {HTMLDivElement} */ target) => {
        const placeholder = target.querySelector(".search>.placeholder");
        if (!placeholder) {
            console.log("Missing PlaceHolder for " + target);
            return;
        }
        /** @type {HTMLDivElement} */
        // @ts-expect-error
        const text = target.querySelector(".search>.text");
        if (text) text.addEventListener("input", (e) => {
            placeholder.classList.toggle("shown", !text.textContent || text.textContent.length === 0);
            // @ts-expect-error
            onSearchAction(text.dataset.type, text.textContent, target.querySelector(".items"));
        })
    })
}

function setupAddAction() {
    // @ts-expect-error
    document.querySelectorAll(".optionGroup>.search>.add-options>.option").forEach((/** @type {HTMLSpanElement} */ target) => {
        target.addEventListener("click", e => {
            // @ts-expect-error
            setupForm(target.dataset.type, undefined);
        });
    });
}

/** @param {string} className */
function setupEditAction(className) {
    // @ts-expect-error
    document.querySelectorAll(className + ".optionGroup>.items>.item>.options>.edit").forEach((/** @type {HTMLSpanElement} */ target) => {
        target.addEventListener("click", e => {
            // @ts-expect-error
            setupForm(target.dataset.type, target.dataset.id);
        });
    });
}

/** @param {string} className */
function setupRemoveAction(className) {
    // @ts-expect-error
    document.querySelectorAll(className + ".optionGroup>.items>.item>.options>.remove").forEach((/** @type {HTMLSpanElement} */ target) => {
        target.addEventListener("click", e => {
            // @ts-expect-error
            onRemoveAction(target.dataset.type, target.dataset.id);
        });
    });
}

/**
 * @param {"user" | "course"} type
 * @param {string | null} textContent
 */
function onSearchAction(type, textContent) {
    if (type === "user") {
        const users = getUsers();
        if (textContent && textContent.length > 0) {
            const text = textContent.toLowerCase().trim();
            const filtered = users.filter(user => user.userName.toLowerCase().includes(text) || user.email.toLowerCase().includes(text))
            if (filtered.length > 0) {
                renderUsers(filtered);
                return;
            }
            alert("Not found!");
        }
        renderUsers(users);
        return;
    } else if (type === "course") {
        const converted = convertCourses(getCourses());
        if (textContent && textContent.length > 0) {
            const text = textContent.toLowerCase().trim();
            const filtered = converted.filter(x => x.title.toLowerCase().indexOf(text) >= 0 || x.subtitle.toLowerCase().indexOf(text) >= 0)
            if (filtered.length > 0) {
                renderItems(".courses", filtered);
                return;
            }
            alert("Not found!");
        }
        renderItems(".courses", converted);
        return;
    }
    console.log(type, textContent);
}

/**
 * @param {"user" | "html-lesson" | "css-lesson" | "js-lesson" | "html-quiz" | "css-quiz" | "js-quiz"} type
 * @param {string} id
 */
function onRemoveAction(type, id) {
    if (type === "user") {
        const iID = Number(id);
        if (iID === 0) {
            alert("Super User could not be removed!");
            return;
        }
        const users = getUsers().filter((user) => user.id === 0 || user.id !== iID);
        setUsers(users);
        clearSearchContent(".users");
        renderUsers(users);
        return;
    } else if (type === "html-lesson") {
        const iID = Number(id);
        const courses = getCourses();
        const lessons = courses.html.lessons;
        for (let i = 0; i < lessons.length; i++) {
            const lesson = lessons[i];
            if (lesson.id === iID) {
                lessons.splice(i, 1);
                break;
            }
        }
        setCourses(courses);
        clearSearchContent(".courses");
        renderCourses(courses);
        return
    } else if (type === "css-lesson") {
        const iID = Number(id);
        const courses = getCourses();
        const lessons = courses.css.lessons;
        for (let i = 0; i < lessons.length; i++) {
            const lesson = lessons[i];
            if (lesson.id === iID) {
                lessons.splice(i, 1);
                break;
            }
        }
        setCourses(courses);
        clearSearchContent(".courses");
        renderCourses(courses);
        return;
    } else if (type === "js-lesson") {
        const iID = Number(id);
        const courses = getCourses();
        const lessons = courses.js.lessons;
        for (let i = 0; i < lessons.length; i++) {
            const lesson = lessons[i];
            if (lesson.id === iID) {
                lessons.splice(i, 1);
                break;
            }
        }
        setCourses(courses);
        clearSearchContent(".courses");
        renderCourses(courses);
        return;
    } else if (type === "html-quiz") {
        const iID = Number(id);
        const courses = getCourses();
        const quizzes = courses.html.quizzes;
        quizzes.splice(iID, 1);
        setCourses(courses);
        clearSearchContent(".courses");
        renderCourses(courses);
        return;
    } else if (type === "css-quiz") {
        const iID = Number(id);
        const courses = getCourses();
        const quizzes = courses.css.quizzes;
        quizzes.splice(iID, 1);
        setCourses(courses);
        clearSearchContent(".courses");
        renderCourses(courses);
        return;
    } else if (type === "js-quiz") {
        const iID = Number(id);
        const courses = getCourses();
        const quizzes = courses.js.quizzes;
        quizzes.splice(iID, 1);
        setCourses(courses);
        clearSearchContent(".courses");
        renderCourses(courses);
        return;
    } else return;
}

/**
 * @param {"user" | "html-lesson" | "css-lesson" | "js-lesson" | "html-quiz"| "css-quiz"| "js-quiz"} type
 * @param {string | undefined} id
 */
function setupForm(type, id) {
    /** @type {HTMLDivElement | null} */
    const overlay = document.querySelector(".overlay");
    if (!overlay) {
        console.log("Missing .overlay Element!");
        return;
    }

    if (type === "user") {
        let title;
        /** @type {import("./database.js").User} */
        let user;
        if (!id) {
            title = "Add User";
            const uids = getUsers().map(x => x.id);
            let iID;
            while (uids.includes(iID = Math.floor(1 + Math.random() * Number.MAX_SAFE_INTEGER)));
            user = {
                id: iID,
                userName: "",
                email: "",
                password: "",
            };
        } else {
            title = "Edit User";
            const iID = Number(id);
            // @ts-expect-error
            user = getUsers().find(user => user.id == iID);
            if (!user) {
                console.log("Invalid User ID!");
                return;
            }
            user = {
                id: user.id,
                userName: user.userName,
                email: user.email,
                password: user.password
            };
        }
        overlay.classList.toggle("shown", true);
        overlay.innerHTML = `
        <div class="form user">
            <div class="navbar">
                <a class="back mdi mdi-arrow-left" href="#"></a>
                <span class="title">${title}</span>
                <a class="done mdi mdi-check" href="#"></a>
            </div>
            <div class="content">
                <div class="optionGroup">
                    <div class="input">
                        <span class="icon mdi mdi-account"></span>
                        <span class="placeholder ${user.userName.length > 0 ? "" : "shown"}">Username</span>
                        <div class="text" data-prop="userName" contenteditable>${user.userName}</div>
                    </div>
                    <div class="input">
                        <span class="icon mdi mdi-email"></span>
                        <span class="placeholder ${user.email.length > 0 ? "" : "shown"}">Email</span>
                        <div class="text" data-prop="email" contenteditable>${user.email}</div>
                    </div>
                    <div class="input">
                        <span class="icon mdi mdi-key"></span>
                        <span class="placeholder ${user.password.length > 0 ? "" : "shown"}">Password</span>
                        <div class="text" data-prop="password" contenteditable>${user.password}</div>
                    </div>
                </div>
            </div>
        </div>`;
        overlay.querySelector(".user>.navbar>.back")?.addEventListener("click", () => {
            hideOverlay(overlay);
        })
        // @ts-expect-error
        overlay.querySelectorAll(".user>.content>.optionGroup>.input").forEach((/** @type {HTMLDivElement} */ input) => {
            const placeholder = input.querySelector(".placeholder");
            if (!placeholder) {
                console.log("Missing PlaceHolder for " + input);
                return;
            }
            /** @type {HTMLDivElement} */
            // @ts-expect-error
            const text = input.querySelector(".text");
            if (text) text.addEventListener("input", (e) => {
                placeholder.classList.toggle("shown", !text.textContent || text.textContent.length === 0);

                const prop = text.dataset.prop;
                const textContent = text.textContent;
                if (!textContent) return;
                if (prop === "userName")
                    user.userName = textContent;
                else if (prop === "email")
                    user.email = textContent;
                else if (prop === "password")
                    user.password = textContent;
            });
        })
        overlay.querySelector(".user>.navbar>.done")?.addEventListener("click", () => {
            if (user.userName.length <= 0 || user.email.length <= 0 || user.password.length <= 0) {
                alert("Fields could not be empty!");
                return;
            }
            const users = getUsers();
            (() => {
                for (let i = 0; i < users.length; i++) {
                    const x = users[i];
                    if (x.id === user.id) {
                        users[i] = user;
                        return;
                    }
                }
                users.push(user);
            })()
            setUsers(users);
            hideOverlay(overlay);
            clearSearchContent(".users")
            renderUsers(users);
        });
    } else if (type === "html-lesson") {

    } else if (type === "css-lesson") {

    } else if (type === "js-lesson") {

    } else if (type === "html-quiz") {
        setupQuizForm(overlay, "html", getCourses().html.quizzes, id);
        return;
    } else if (type === "css-quiz") {
        setupQuizForm(overlay, "css", getCourses().css.quizzes, id);
        return;
    } else if (type === "js-quiz") {
        setupQuizForm(overlay, "js", getCourses().js.quizzes, id);
        return;
    }
}

/**
 * @param {HTMLDivElement} overlay
 * @param {string} courseId
 * @param {import("./database.js").Quiz[]} quizzes
 * @param {string | undefined} id
 */
function setupQuizForm(overlay, courseId, quizzes, id) {
    let title;
    let iID;
    /** @type {import("./database.js").Quiz} */
    let quiz;
    if (!id) {
        title = (courseId === "html") ? "Add HTML Quiz" : (courseId === "css") ? "Add CSS Quiz" : (courseId === "js") ? "Add JavaScript Quiz" : "Add Quiz";
        iID = quizzes.length;
        quiz = {
            question: "",
            answers: ["", ""],
            corrects: [false, false]
        };
    } else {
        title = (courseId === "html") ? "Edit HTML Quiz" : (courseId === "css") ? "Edit CSS Quiz" : (courseId === "js") ? "Edit JavaScript Quiz" : "Edit Quiz";
        iID = Number(id);
        quiz = quizzes[iID];
        if (!quiz) {
            console.log("Invalid Quiz ID!");
            return;
        }
        quiz = {
            question: quiz.question,
            answers: [...quiz.answers],
            corrects: [...quiz.corrects]
        };
    }
    overlay.classList.toggle("shown", true);
    overlay.innerHTML = `
    <div class="form courses">
        <div class="navbar">
            <a class="back mdi mdi-arrow-left" href="#"></a>
            <span class="title">${title}</span>
            <a class="done mdi mdi-check" href="#"></a>
        </div>
        <div class="content">
            <div class="optionGroup">
                <div class="input">
                    <span class="icon mdi mdi-help-box"></span>
                    <span class="placeholder ${quiz.question.length > 0 ? "" : "shown"}">Question</span>
                    <div class="text" data-prop="question" contenteditable>${quiz.question}</div>
                </div>
                <div class="answers">
                    ${quiz.answers.map((a, i) => ({ id: i, answer: a, correct: quiz.corrects[i] })).map(x =>
                        `<div class="input" data-prop="answer" data-id="${x.id}">
                            <span class="placeholder ${x.answer.length > 0 ? "" : "shown"}">Answer</span>
                            <div class="text" contenteditable>${x.answer}</div>
                            <label class="checkbox mdi unselectable">
                                <input type="checkbox" name="answer" ${x.correct ? "checked" : ""}></input>
                            </label>
                            <span class="remove mdi mdi-delete"></span>
                        </div>`
                    ).reduce((p, v) => p + v)}
                </div>
                <div class="button add">
                    <span class="icon mdi mdi-message"></span>
                    <div class="text">Add Answer</div>
                </div>
            </div>
        </div>
    </div>`;
    overlay.querySelector(".courses>.navbar>.back")?.addEventListener("click", () => {
        hideOverlay(overlay);
    });
    overlay.querySelector(".courses>.navbar>.done")?.addEventListener("click", () => {
        if (quiz.question.length <= 0 || quiz.answers.filter(x => x.length > 0).length <= 0) {
            alert("Fields could not be empty!");
            return;
        } else if (!quiz.corrects.includes(true)) {
            alert("Quiz requires at least one correct answer");
            return;
        }
        // if (iID < quizzes.length)
        quizzes[iID] = quiz;
        // else quizzes.push(quiz);
        const courses = getCourses();
        setCourses(courses);
        hideOverlay(overlay);
        clearSearchContent(".courses");
        renderCourses(courses);
    });
    const answers = overlay.querySelector(".courses>.content>.optionGroup>.answers");
    if (!answers) {
        console.log("Missing .courses>.content>.optionGroup>.answers Element!");
        return;
    }
    overlay.querySelector(".courses>.content>.optionGroup>.button.add")?.addEventListener("click", e => {
        quiz.answers.push("");
        quiz.corrects.push(false);
        renderQuizAnswers();
    });

    const questionElement = overlay.querySelector(".courses>.content>.optionGroup>.input");
    if (questionElement) {
        const placeholder = questionElement.querySelector(".placeholder");
        if (!placeholder) {
            console.log("Missing PlaceHolder for " + questionElement);
            return;
        }
        /** @type {HTMLDivElement} */
        // @ts-expect-error
        const text = questionElement.querySelector(".text");
        if (text) text.addEventListener("input", e => {
            placeholder.classList.toggle("shown", !text.textContent || text.textContent.length === 0);
            const prop = text.dataset.prop;
            const textContent = text.textContent;
            if (!textContent) return;
            console.log(prop, id, questionElement);
            if (prop === "question")
                quiz.question = textContent;
        });
    }

    setupQuizAnswersListeners(overlay.querySelectorAll(".courses>.content>.optionGroup>.answers>.input"));

    function renderQuizAnswers() {
        // @ts-expect-error
        answers.innerHTML = quiz.answers.map((a, i) => ({ id: i, answer: a, correct: quiz.corrects[i] })).map(x =>
            `<div class="input" data-prop="answer" data-id="${x.id}" >
                <span class="placeholder ${x.answer.length > 0 ? "" : "shown"}">Answer</span>
                <div class="text" contenteditable>${x.answer}</div>
                <label class="checkbox mdi unselectable">
                    <input type="checkbox" name="answer" ${x.correct ? "checked" : ""}></input>
                </label>
                <span class="remove unselectable mdi mdi-delete"></span>
            </div>`
        ).reduce((p, v) => p + v);
        // @ts-expect-error
        setupQuizAnswersListeners(answers.querySelectorAll(".input"));
    }

    /** @param {NodeListOf<Element>} elements */
    function setupQuizAnswersListeners(elements) {
        // @ts-expect-error
        elements.forEach((/** @type {HTMLDivElement} */ input) => {
            const placeholder = input.querySelector(".placeholder");
            if (!placeholder) {
                console.log("Missing PlaceHolder for " + input);
                return;
            }
            /** @type {HTMLDivElement} */
            // @ts-expect-error
            const text = input.querySelector(".text");
            if (text) text.addEventListener("input", e => {
                placeholder.classList.toggle("shown", !text.textContent || text.textContent.length === 0);

                const id = input.dataset.id;
                const prop = input.dataset.prop;
                const textContent = text.textContent;
                if (!textContent || !id) return;
                else if (prop === "answer")
                    quiz.answers[Number(id)] = textContent;
            });

            /** @type {HTMLInputElement} */
            // @ts-expect-error
            const check = input.querySelector("input[type=\"checkbox\"]");
            if (check) check.addEventListener("change", e => {
                const prop = input.dataset.prop;
                const id = input.dataset.id;
                if (!id) return;
                else if (prop === "answer")
                    quiz.corrects[Number(id)] = check.checked;
            });
            /** @type {HTMLSpanElement} */
            // @ts-expect-error
            const remove = input.querySelector(".remove");
            console.log(input, remove);
            if (!remove) {
                console.log("Missing .remove Element!");
                return;
            }
            remove.addEventListener("click", e => {
                const prop = input.dataset.prop;
                const id = input.dataset.id;
                if (!id) return;
                else if (prop === "answer") {
                    const iID = Number(id);
                    quiz.answers.splice(iID, 1);
                    quiz.corrects.splice(iID, 1);
                    renderQuizAnswers();
                }
            })
        });
    }
}
