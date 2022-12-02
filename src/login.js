export default function setupLogin () {
    const loginIcon = document.querySelector(".nav-link-login")
    const formModal = document.querySelector('.form-modal')
    loginIcon.addEventListener('click', (e) => {
        e.preventDefault()
        formModal.classList.toggle('open')
    })
    setupClose(formModal)
}

function setupClose(modal) {
    modal.addEventListener('click', e => {
        e.stopPropagation()
        if (e.target.matches('.form-modal')) {
            modal.classList.toggle('open')
        }
    })
}

const container = document.querySelector(".loginContainer"),
signUp = document.querySelector(".signup-link"),
login = document.querySelector(".login-link"),
btnSignup = document.getElementById('btn'),
btnLogin = document.querySelector(".btn-login");


// chuyển đổi từ log sang sign
signUp.addEventListener("click", ( )=>{
    container.classList.add("active");
});
login.addEventListener("click", ( )=>{
    container.classList.remove("active");
});

btnSignup.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    id: Date.now(),
    username: document.getElementById('name').value,
    email: document.getElementById('mail').value,
    password: document.getElementById('pass').value,
    password1: document.getElementById('pass1').value
};
let json = JSON.stringify(user);
if (!document.getElementById('name').value || !document.getElementById('mail').value || !document.getElementById('pass').value || !document.getElementById('pass1').value ) {
    alert("Vui lòng nhập đầy đủ thông tin");
} else {
    localStorage.setItem( document.getElementById('mail').value, json);
    alert("Đăng kí thành công");
}
});

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    var  email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log(user);
    var user = localStorage.getItem(email);
    var data = JSON.parse(user);
    var json = JSON.stringify(user);
    if (user == null) {    
        alert("Vui lòng nhập đầy đủ thông tin");
    }
    else if (email == data.email && password == data.password) {

        alert("Đăng nhập thành công");

        window.location.href = "index.html";
    } else {
        alert("Đăng nhập thất bại");
    }
});


