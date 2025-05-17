


let membernameEl = document.getElementById("membername")
let emailidEl = document.getElementById("emailid")
let hobbyEl = document.getElementById("hobby")
let ageEl = document.getElementById("age")
let phoneEl = document.getElementById("phone")
let genderEl = document.getElementById("gender")
let qualificationEl = document.getElementById("qualification")

const URL = "http://localhost:8080"

async function submitHandler(event) {
    event.preventDefault(); 

    let newUser = {
        
        membername: membernameEl.value,
        emailid: emailidEl.value,
        hobby:hobbyEl.value,
        age:ageEl.value,
        phone: phoneEl.value,
        gender: genderEl.value,
        qualification: qualificationEl.value
        
    }

    console.log('new user =', newUser)

    // promise request - post
    await fetch(`${URL}/users`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(newUser)
    }).then(res => res.json())
    .then(res => {
        alert('New user data added successfully')
        window.location.href = "/index.html";
    }).catch(err => {
        console.error(err.message)
    })
}