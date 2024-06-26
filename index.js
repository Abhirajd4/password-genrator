
function generate(lenght=12){
    const letter='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password= '';
    for(i=0; i<lenght; i++){
        const randomkey=Math.floor(Math.random() * letter.length);
        password+=letter[randomkey];
    }
    return password

}
function displaypasword(){
    const password=generate(12);
    document.getElementById('display').value=password;
}
 async function copycommand(){
    const passwordCopy=document.getElementById('display')
  
    try {
        await navigator.clipboard.writeText(passwordCopy.value);
        alert("Password copied: " + passwordCopy.value);
    }
    catch (err) {
        alert('Failed to copy: ', err);
    } 


}
