 let yourName = document.getElementById("yourName")
 let yourEmail = document.getElementById("yourEmail")
 let yourPassword = document.getElementById("yourPassword")
 let up = document.getElementById("up")
 let login = document.getElementById("login")
 let loginEmail = document.getElementById("loginEmail")
 let loginPassaword = document.getElementById("loginPassaword")
//  let Success = document.getElementById("Success")
 let exists = document.getElementById("exists")
 let required = document.getElementById("required")
 let incorrect = document.getElementById("incorrect")
 let inner = document.getElementById("inner")
 let welcome = document.getElementById("welcome")
 let dataList ;

 if (localStorage.getItem("item") != null) {
    dataList = JSON.parse(localStorage.getItem("item"))
 }
 else{
    dataList = []
 }



// var regexEmail = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
// var regexName = "\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+"
// var regexPass = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"

if (login != null) {
    login.addEventListener("click" , function (e) {
        for (let i = 0; i < dataList.length; i++) {
            
            if (dataList[i].email == loginEmail.value && dataList[i].password == loginPassaword.value) {
                localStorage.setItem("userName" , JSON.stringify(dataList[i].name))
                  login.setAttribute("href" , "home.html")
            } 
           
        }

        if (loginEmail.value == "" || loginPassaword.value == "") {
                console.log("ay7aga");
            
        }

        else{
            console.log("error");
        }
          
        
    });
}



if (welcome != null) {
    welcome.innerHTML = "welcome " + JSON.parse(localStorage.getItem("userName"))
}




if (up != null) {
    up.addEventListener("click", function () {
        let product = {
            name: yourName.value,
            email: yourEmail.value,
            password: yourPassword.value,
        };
    
        if (dataList.length > 0) {
            let emailExists = true;
    
            dataList.forEach(element => {
                if (element.email == yourEmail.value) {
                    exists.classList.replace("d-none", "d-block");
                    emailExists = false;
                    return; // استخدم return بدلاً من break
                }
            });
    
            if (emailExists) {
                dataList.push(product);
                localStorage.setItem("item", JSON.stringify(dataList));
                exists.classList.replace("d-block", "d-none");
            }
        } else {
            dataList.push(product);
            localStorage.setItem("item", JSON.stringify(dataList));
        }
    });
}








function clearForm() {
    yourName.value = ""
    yourEmail.value = ""
    yourPassword.value = ""
}






