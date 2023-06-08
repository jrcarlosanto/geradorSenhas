let visibility = false;
//let o = document.getElementsById("input");

const generatePassword = (size) => {
    const arrayCaracter= [];
    let randomNumber = 0;
    let password = '';
    for (let index = 0; index < size; index += 1) {
        randomNumber = Math.floor(Math.random() * 93) + 33; //33 a 126
        arrayCaracter.push(String.fromCharCode(randomNumber));
    }
    password = arrayCaracter.join('');
    return password
};

const showPassword = () => {
    let size = parseInt(document.getElementById("input").value);
    if(size <= 0 ){
        return alert("Só pode números maiores que 0!");;
    }
    let password = generatePassword(size);
    document.getElementById("show").innerHTML = password;
    visibility = true; 
};
