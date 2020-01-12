
import './css/main.css';
import './scss/main.scss';

//
async function SignUp() {
    let formSignUp = document.querySelector("#signUp_form");
    let formData = new FormData (formSignUp);
    let obj = {};
    formData.forEach((value, key) => {
    	obj[key] = value;
    });
    console.log(obj);

    let response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
    })
    .then((response) => {
        if (response.status === 200){
            window.location.href = './login.html'
        }
        else{
            alert('Wrong input')
        }
    })
}

try{
    document.getElementById('signUp_form').addEventListener('submit', (e) => {
        e.preventDefault();
        SignUp()
    })
}catch(err){}

async function Login() {
    let formLogin = document.querySelector("#login_form");
	let formData = new FormData (formLogin);
    let obj = {};
    formData.forEach((value, key) => {
    	obj[key] = value;
    });
    console.log(obj);

    let response = await fetch('http://localhost:3000/api/users/login', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
    })
    .then((response) => {
    console.log(response.status);
    console.log(response.headers.get('x-auth-token'))
    if (response.status === 200) {
        localStorage.setItem('token', response.headers.get('x-auth-token'))
        window.location.href = 'logout.html'
    }
    else{
        alert('Incorrect password or email!')
    }
    })
}

try{
    document.getElementById('login_form').addEventListener('submit', (e) => {
        e.preventDefault();
        Login();
    })
}catch(err){}

async function ResetPassword() {
    let formResetPassword = document.querySelector("#reset_form");
	let formData = new FormData (formResetPassword);
    let obj = {};
    formData.forEach((value, key) => {
    	obj[key] = value;
    });
    console.log(obj);

    let response = await fetch('http://localhost:3000/api/users/reset_password', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
    })
    .then((response) => {
        if(response.status == 200){
            window.location.href = './login.html'
        }
        else{
            alert('Wrong Input')
        }
    })

}

try{
    document.getElementById('reset_form').addEventListener('submit', (event) => {
        event.preventDefault();
        ResetPasswdAPI();
    })
}catch(err){}


 // window.onload = () => {
//     if (window.location == 'logout.html'){
//             alert("Hello ")
//         async function Logout() {
//             let response = await fetch('http://localhost:3000/api/users/current', {
//                 headers: {
//                 "x-access-token" : localStorage.token
//                 }
//             }) 
//             .then( (response) => {
//                 if(response.status != 200){
//                     window.location = './login.html'
//                 } 
//             })
//         }
 
//        Logout();
//     console.log(response);

//     } 
// }

try{
    document.getElementById('logout').addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.clear()
        window.location = './dist/pages/login.html'
    })
}catch(err){}
