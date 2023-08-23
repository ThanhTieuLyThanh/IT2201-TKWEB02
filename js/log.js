window.onload = function() {
    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var p = document.querySelector("#login2");
    var q = document.querySelector("#register2");
    eyeHidden = document.querySelectorAll(".hidden");
    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }
    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }  
    a.onclick=login;
    p.onclick=login;
    b.onclick=register;
    q.onclick=register;

    eyeHidden.forEach((icon) => { icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type == "password") {
            getPwInput.type = "text";
            setTimeout(()=>icon.classList.replace("fa-eye-slash", "fa-eye"),5 );
        } else{
            getPwInput.type = "password";
            setTimeout(()=>icon.classList.replace("fa-eye", "fa-eye-slash"),5 );
        }
    });
});


function handleFormValidation(form) {
    const eField = form.querySelector(".email"),
        eInput = eField.querySelector("input"),
        pField = form.querySelector(".password"),
        pInput = pField.querySelector("input"),
        inputs = form.querySelectorAll(".ten-ho");

    form.onsubmit = (e) => {
        e.preventDefault();
        let hasError = false;

        if (eInput.value === "") {
            eField.classList.add("shake", "error");
        } else {
            checkEmail();
        }
        if (pInput.value === "") {
            pField.classList.add("shake", "error");
        }
        inputs.forEach((input) => {
            const field = input.parentElement.parentElement;
            if (input.value === "") {
                field.classList.add("shake", "error");
                hasError = true;
            }
        });

        setTimeout(() => {
            eField.classList.remove("shake");
            pField.classList.remove("shake");
            inputs.forEach((input) => {
                input.parentElement.parentElement.classList.remove("shake");
            });
        }, 500);

        eInput.onkeyup = () => {
            checkEmail();
        };

        function checkEmail() {
            let pattern = /^[^ ]+@[^]+\.[a-z]{2,3}$/; //pattern to validate email
            if (!eInput.value.match(pattern)) {
                eField.classList.add("error");
                let errorTxt = eField.querySelector(".error");
                // if email is not empty then show "Enter a valid email address" until email is valid,
                // else show "Email can't be blank."
                (eInput.value !== "")
                    ? (errorTxt.innerText = "Địa chỉ email không hợp lệ")
                    : (errorTxt.innerText = "Chưa nhập email");
            } else {
                eField.classList.remove("error");
            }
        }

        pInput.onkeyup = () => {
            if (pInput.value !== "") {
                // if password is not empty, remove the error class
                pField.classList.remove("error");
            } else {
                pField.classList.add("error");
            }
        };

        inputs.forEach((input) => {
            input.onkeyup = () => {
                const field = input.parentElement.parentElement;
                if (input.value !== "") {
                    field.classList.remove("error");
                } else {
                    field.classList.add("error");
                }
            };
        });

        // let's work on what to do after the user fills up proper details
        // if error class is not present in eField and pField, then the user has entered proper details
        if (
            !eField.classList.contains("error") &&
            !pField.classList.contains("error") &&
            !hasError
        ) {
            // submit the form data here
            window.location.href="#"; 
            console.log("Form Submitted!");
        }
    };
    
}

// Get the login and register forms
const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");

// Apply the validation logic to each form
handleFormValidation(loginForm);
handleFormValidation(registerForm);

let t = document.getElementById("myMenuFunction")
t.onclick = function () {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }

}