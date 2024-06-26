
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
    const password=generate();
    document.getElementById("display").textContent=password
}