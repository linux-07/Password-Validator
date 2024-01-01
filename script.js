let btn = document.querySelector("button");
let pass_status = document.createElement('div');
pass_status.classList.add('status');

document.body.appendChild(pass_status);

function generateUpperCaseLetters() {
    let letters = [];
    for (let i = 65; i <= 90; i++) {
        letters.push(String.fromCharCode(i));
    }
    return letters;
}

const upperCase = generateUpperCaseLetters();

function generateLowercaseLetters() {
    let letters = [];
    for (let i = 97; i <= 122; i++) {
        letters.push(String.fromCharCode(i));
    }
    return letters;
}

const lowerCase = generateLowercaseLetters();

function generateSymbols() {
    let symbols = [];
    for (let i = 33; i <= 47; i++) {
        symbols.push(String.fromCharCode(i));
    }
    for (let i = 58; i <= 64; i++) {
        symbols.push(String.fromCharCode(i));
    }
    for (let i = 91; i <= 96; i++) {
        symbols.push(String.fromCharCode(i));
    }
    for (let i = 123; i <= 126; i++) {
        symbols.push(String.fromCharCode(i));
    }
    return symbols;
}

const symbols = generateSymbols();

function generateNumbers() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(i + 1);
    }

    return arr;
}

const numbers = generateNumbers();

const hasUpperCase = (pass) => {
    for (let i = 0; i < pass.length; i++) {
        if (upperCase.includes(pass[i])) {
            return true;
        }
    }
    return false;
};

const hasLowerCase = (pass) => {
    for (let i = 0; i < pass.length; i++) {
        if (lowerCase.includes(pass[i])) {
            return true;
        }
    }
    return false;
};

const hasSymbols = (pass) => {
    for (let i = 0; i < pass.length; i++) {
        if (symbols.includes(pass[i])) {
            return true;
        }
    }
    return false;
};

const hasNumbers = (pass) => {
    for (let i = 0; i < pass.length; i++) {
        if (numbers.includes(pass[i])) {
            return true;
        }
    }
    return false;
};

function checkPass(pass) {
    if (pass) {
        let valid = true;

        if (pass.length <= 8) {
            pass_status.innerHTML = "Length of Password should be greater than 8<br>";
            valid = false;
        }
        if (!hasUpperCase(pass)) {
            pass_status.innerHTML += "Your Password should have at least 1 uppercase character<br>";
            valid = false;
        }
        if (!hasLowerCase(pass)) {
            pass_status.innerHTML += "Your Password should have at least 1 lowercase character<br>";
            valid = false;
        }
        if (!hasSymbols(pass)) {
            pass_status.innerHTML += "Your Password should have at least 1 symbol<br>";
            valid = false;
        }
        if (!hasNumbers(pass)) {
            pass_status.innerHTML += "Your Password should have at least 1 number<br>";
            valid = false;
        }
        if (valid) {
            pass_status.innerHTML = "Your Password is Valid!";
            pass_status.style.color = 'white';
        }
    }
    else {
        pass_status.innerHTML = "Please enter your Password";
    }
}

btn.addEventListener("click", () => {
    let pass = prompt("Enter your Password");
    checkPass(pass);
});
