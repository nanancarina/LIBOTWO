let loginButton=document.querySelector("#button")
let userDiv= document.querySelector("#user")

// let logoutButton = document.querySelector("#outButton")

loginButton.addEventListener("click",e=>{
    console.log("button clicked")
    signInWithGoogle()
})

function signInWithGoogle(){
    var googleAuthProvider= new firebase.auth.GoogleAuthProvider
    firebase.auth().signInWithPopup(googleAuthProvider)
    .then(function(data){
        console.log(data)
        addUserToScreen(data)
    })
}

function addUserToScreen(userData){
    let userName = userData.user.displayName
    localStorage.setItem("name",userName)
    userDiv.innerHTML = `Welcome, ${localStorage.getItem("name")}, `
    let userEmail = userData.user.email
    localStorage.setItem("email", userEmail)
    userDiv.innerHTML += `${localStorage.getItem("email")}.`
    // let userPicture = userData.user.photoURL 
    // userDiv.innerHTML +=`Photo: <img src ="${picture}">`
}

window.onLoad=startup

function startup(){
    if (localStorage.getItem("name")!= null){
          userDiv.innerHTML = `Welcome, ${localStorage.getItem("name")}, `
    }
  else {
      loginButton.innerHTML= "Please log in by pressing the button."
  }
  
     if (localStorage.getItem("email")!= null){
          userDiv.innerHTML = `${localStorage.getItem("email")}.`
    }
  else {
      userDiv.innerHTML= "Please log in by pressing the button."
  }
  
}
// logoutButton.addEventListener("click",e=>{
//     signOut()
// })
// function signOut(){
//     userDiv.innerHTML = ""
//     localStorage.removeItem(["name"])
//     userDiv.innerHTML= "You have successfully signed out"
// }

