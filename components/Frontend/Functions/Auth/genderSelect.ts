let check =false
export function select(a:String){
    let male=document.getElementById('gender-m') as HTMLButtonElement
    let female=document.getElementById('gender-f') as HTMLButtonElement

if(a === 'm')
{
    if(check) female.style.borderColor = 'rgb(244 114 182 / 0.2)';
    male.style.borderColor='rgb(96 165 250)'
    check=true
}else if(a === 'f'){
    if(check)   male.style.borderColor='rgb(96 165 250 /0.2)';
    female.style.borderColor = 'rgb(244 114 182)'
    check=true
  
}else{
    alert('Please enter a valid gender, stop toying with my request')
}
}