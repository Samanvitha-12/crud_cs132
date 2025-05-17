

// dom id targets
let membernameEl = document.getElementById("membername")
let emailidEl = document.getElementById("emailid")
let hobbyEl = document.getElementById("hobby")
let ageEl = document.getElementById("age")
let phoneEl = document.getElementById("phone")
let genderEl = document.getElementById("gender")
let qualification = document.getElementById("qualification")
// server url
const URL = "http://localhost:8080"


// read the single user data with ref to user id
let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("userId")
console.log('userid = ', id)

// read the data from api
async function readUserById() {
    await fetch(`${URL}/users/${id}`,{
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    }).then(res => res.json())
    .then(res => {
        console.log('single user =', res)
        membername.value = res.membername;
        emailididEl.value = res.email;
        hobbyEl.value = res.hobby;
        age.value = res.age;
        phoneEl.value = res.phone;
        genderEl.value = res.gender;
        qualification.value = res.qualification
        
    }).catch(err => console.error(err.message))
}

readUserById()

// submit function
async function submitHandler(event) {
    event.preventDefault(); // to avoid page reload after submit event

    let newUser = {
        // key: value
        membername: membernameEl.value,
        emailid: emailidEl.value,
        hobby:hobbyEl.value,
        age:ageEl.value,
        phone: phoneEl.value,
        gender: genderEl.value,
        qualification: qualificationEl.value
        
    }

    console.log('new user =', newUser)

    // promise request - put
    await fetch(`${URL}/users/${id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(newUser)
    }).then(res => res.json())
    .then(res => {
        alert('User data updated successfully')
        window.location.href = "/index.html";
    }).catch(err => {
        console.error(err.message)
    })
}
