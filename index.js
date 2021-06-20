window.onload = ()=> {
    document.getElementsByTagName('input')[0].disabled = true;
}

let screen = document.getElementById('screen');
let buttons = document.getElementsByTagName('button')
let screenValue = "";

for (const item of buttons) {
    document.getElementsByTagName('input')[0].disabled = false;
    document.onkeydown = false;
    item.addEventListener('click', (e)=> {
        buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == 'X') {
            buttonText = '*'
            screenValue += buttonText ;
            screen.value = screenValue;
        } else if (buttonText == 'CE') {
            buttonText = '';
            screenValue = buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'C') {
            buttonText = screenValue.slice(0,screenValue.length-1);
            screenValue = buttonText;
            screen.value = screenValue;
        } else if (buttonText == '=') {
            if (screen.value) {
                
                screenValue = eval(screenValue)
                screen.value = screenValue;

            }
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}