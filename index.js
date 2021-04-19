let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
var val = '',
    deg, str1 = '(',
    str2 = ')',
    pi = Math.PI,
    flag = 0,
    v = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'C') {
            screenValue = '';
            val = '';
            screen.value = screenValue;
        } else if (buttonText == '=') {
            try {
                if (flag == 1) {
                    screen.value = screenValue;
                    buttonText = Math.pow(val, v);
                    screenValue = buttonText;
                    v = '';
                    flag = 0;
                }
                screen.value = eval(screenValue);
                screenValue = screen.value;
                val = '';
            } catch (e) {
                console.log('error');
            }
        } else if (buttonText == '▼') {
            screenValue = screen.value;
        } else if (buttonText == 'π') {
            screen.value = screenValue + buttonText;
            buttonText = Math.PI;
            screenValue += buttonText;
        } else if (buttonText == 'sin') {
            deg = parseFloat(val) * pi * 1.0 / 180;
            screen.value = screenValue.substr(0, screenValue.length - val.length) + buttonText + str1 + val + str2;
            buttonText = Math.sin(deg);
            screenValue = buttonText;
            val = '';
        } else if (buttonText == 'cos') {
            deg = parseFloat(val) * pi * 1.0 / 180;
            screen.value = screenValue.substr(0, screenValue.length - val.length) + buttonText + str1 + val + str2;
            buttonText = Math.cos(deg);
            screenValue = buttonText;
            val = '';
        } else if (buttonText == 'tan') {
            deg = parseFloat(val) * pi * 1.0 / 180;
            screen.value = screenValue.substr(0, screenValue.length - val.length) + buttonText + str1 + val + str2;
            buttonText = Math.tan(deg);
            screenValue = buttonText;
            val = '';
        } else if (buttonText == 'log') {
            screen.value = screenValue.substr(0, screenValue.length - val.length) + buttonText + str1 + val + str2;
            buttonText = Math.log10(val);
            screenValue = buttonText;
            val = '';
        } else if (buttonText == 'ln') {
            screen.value = screenValue.substr(0, screenValue.length - val.length) + buttonText + str1 + val + str2;
            buttonText = Math.log(val);
            screenValue = buttonText;
            val = '';
        } else if (buttonText == '√') {
            screen.value = screenValue.substr(0, screenValue.length - val.length) + buttonText + str1 + val + str2;
            buttonText = Math.sqrt(val);
            screenValue = buttonText;
            val = '';
        } else if (buttonText == '^') {
            flag = 1;
            screenValue = val + buttonText;
            screen.value = screenValue;
        } else if (buttonText == '⌫') {
            screenValue = screenValue.substr(0, screenValue.length - 1);
            screen.value = screenValue;
        } else {
            if (flag == 0) {
                val = val + String(buttonText);
                screenValue += buttonText;
                screen.value = screenValue;
            } else if (flag == 1) {
                v = v + String(buttonText);
                screenValue += buttonText;
                screen.value = screenValue;
            }
        }
    })
}