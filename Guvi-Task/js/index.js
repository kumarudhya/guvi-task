let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
let submit = document.querySelector(".clkbtn1")
let name = document.querySelector(".name")


let profile = document.querySelector

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

// submit.addEventListener("click", (name) => {
//     if (name === " " || name === null) {

//         alert("*fields are mandatory");
//     } else {
//         alert("submited");
//         slider.classList.remove("moveslider");
//         formSection.classList.remove("form-section-move");
//     }


// })
