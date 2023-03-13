let currentForm='login'

export function change(){
    let signup = document.getElementById('signupContainer') as HTMLDivElement
    let login = document.getElementById('loginContainer') as HTMLDivElement

if(currentForm === 'login'){
       signup.style.display = 'block'
       login.style.left = '4000px'

       setTimeout(()=>{
        login.style.display='none'
        signup.style.left = '0'
        currentForm = 'signup'
       },100)
     
}
else if(currentForm == 'signup'){
    login.style.display = 'block'
    setTimeout(()=>{
     signup.style.left = '-4000px'
     login.style.left = '0'
     currentForm = 'login'
    },100)
}else{
    return
}
}