

  
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");

let btn2 = document.getElementById("myBtn")

// When the user clicks the button, open the modal
btn2.onclick = function () {
    modal.style.display = "block";
  };

  function closeModal() {
    modal.style.display = "none";
  }
  span.onclick = function () {
    closeModal();
  };


  
  var signup = document.getElementById("sign");
  var newhere = document.getElementById("new");

  function signIn() {
    // console.log("signup")
    register.style.display = "none";
    login.style.display = "";
  }
  function signUp() {
    // console.log("newhere")
    login.style.display = "none";
    register.style.display = "";
  }



  //login and signup 


function Register(e){
    e.preventDefault()

    let form = document.getElementById("signup-form")

let user_data = {
   
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
     mobile:form.mobile.value,
    username: form.username.value,
    description: form.description.value
}

user_data = JSON.stringify(user_data)


fetch("https://masai-api-mocker.herokuapp.com/auth/register",{

    method:"POST",

    body: user_data,

    headers:{
        "Content-Type": "application/json"
    },
})
.then((res)=>{
return res.json()
})
.then((res)=>{
    console.log('res:', res.message)
    alert(res.message)



})
.catch((err)=>{
    console.log('err:', err)

})


}






function Login(e){
   e.preventDefault()
   let form1 = document.getElementById("login-form")

let user_data = {
    username:form1.user.value,
    password:form1.pass.value,
    
   
}

let data_to_send = JSON.stringify(user_data)
// console.log('user_data:', user_data)

fetch("https://masai-api-mocker.herokuapp.com/auth/login",{


    method: "POST",

    body: data_to_send,

    headers: {
        "Content-Type": "application/json"
    },

})
.then((res)=>{
    return res.json()
})
.then((res)=>{
  if(res.error===false){
       alert("Login Is Successful")
     }
     else{
       alert("Wrong Password")
     }
    console.log('res:', res)


    fetchdata(user_data.username, res.token)

})
.catch((err)=>{
    console.log('err:', err)

})


}



function fetchdata(username,token){
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{

        headers:{
            "Content-Type": "application/json",

            "Authorization": `Bearer ${token}`
        }
    })
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log('res:', res.name)

     
         name_div.innerHTML = null
        let p = document.createElement("p")
        p.innerText = "Hello"+"   "+res.name

     name_div.append(p)

     p.setAttribute("id", "name1")

   
         
    })
    .catch((err)=>{
    console.log('err:', err)

    })
}
