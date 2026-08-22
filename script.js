/* =====================================================
   ORTHONEXUS AI
   FRONTEND DEMO LOGIC
===================================================== */


/* =====================================================
   REGISTER
===================================================== */

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("fullName").value.trim();

            const role =
                document.getElementById("role").value;

            const email =
                document.getElementById("registerEmail").value.trim();

            const password =
                document.getElementById("registerPassword").value;


            if (!name || !role || !email || !password) {

                alert("Please complete all required fields.");

                return;

            }


            /*
                Demo only:
                Save account information
                locally in browser.
            */

            localStorage.setItem(
                "orthoUser",
                JSON.stringify({
                    name: name,
                    role: role,
                    email: email,
                    password: password
                })
            );


            alert(
                "Workspace created successfully!"
            );


            window.location.href =
                "login.html";

        }
    );

}


/* =====================================================
   LOGIN
===================================================== */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById("loginEmail").value.trim();

            const password =
                document.getElementById("loginPassword").value;


            const savedUser =
                JSON.parse(
                    localStorage.getItem("orthoUser")
                );


            /*
                If no registered account exists,
                allow demo login.
            */

            if (!savedUser) {

                if (email && password) {

                    localStorage.setItem(
                        "orthoSession",
                        "demo"
                    );

                    window.location.href =
                        "dashboard.html";

                }

                return;

            }


            if (
                email === savedUser.email &&
                password === savedUser.password
            ) {

                localStorage.setItem(
                    "orthoSession",
                    "active"
                );


                window.location.href =
                    "dashboard.html";

            }

            else {

                alert(
                    "Incorrect email or password."
                );

            }

        }
    );

}


/* =====================================================
   PASSWORD VISIBILITY
===================================================== */

function togglePassword() {

    const password =
        document.getElementById("loginPassword");


    if (!password) return;


    if (password.type === "password") {

        password.type = "text";

    }

    else {

        password.type = "password";

    }

}


/* =====================================================
   DEMO DASHBOARD
===================================================== */

function openDashboard() {

    localStorage.setItem(
        "orthoSession",
        "demo"
    );


    window.location.href =
        "dashboard.html";

}


/* =====================================================
   DASHBOARD USER DETAILS
===================================================== */

const userNameElement =
    document.getElementById("userDisplayName");

const userRoleElement =
    document.getElementById("userDisplayRole");

const heroUserElement =
    document.getElementById("heroUser");


if (
    userNameElement ||
    userRoleElement ||
    heroUserElement
) {

    const savedUser =
        JSON.parse(
            localStorage.getItem("orthoUser")
        );


    if (savedUser) {

        if (userNameElement) {

            userNameElement.textContent =
                savedUser.name;

        }


        if (userRoleElement) {

            userRoleElement.textContent =
                savedUser.role;

        }


        if (heroUserElement) {

            heroUserElement.textContent =
                savedUser.name.split(" ")[0];

        }

    }

}


/* =====================================================
   FILE UPLOAD
===================================================== */

function showFileName(input) {

    const fileName =
        document.getElementById("fileName");


    if (!fileName) return;


    if (input.files.length > 0) {

        fileName.textContent =
            "Selected: " +
            input.files[0].name;

        fileName.style.color =
            "#2563eb";

    }

}


/* =====================================================
   LOGOUT
===================================================== */

function logoutUser() {

    localStorage.removeItem(
        "orthoSession"
    );


    window.location.href =
        "login.html";

}
