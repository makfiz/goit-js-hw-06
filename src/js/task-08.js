const loginForm = document.querySelector('.login-form')
const inputmail = loginForm[0]
const inputpas = loginForm[1]

function handleSubmit(event) {
    event.preventDefault();
    const email = inputmail.value
    const password = inputpas.value
    if (email == "" || password == "") return alert("Bсе поля должны быть заполнены!")
    else { const data = {email, password}
    console.log(data)
    }
   loginForm.reset()
}

loginForm.addEventListener('submit', handleSubmit)


