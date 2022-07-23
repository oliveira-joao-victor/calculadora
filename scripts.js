//adicionando número ao textarea
function addNumber(element) {
    const INPUT = document.getElementById("input");
    INPUT.value += element;
}

//adicionando um operador
function addOperator(operator) {
    const INPUT = document.getElementById("input");

    const HAS_CONTENT = document.getElementById("input").value != "";

    if (HAS_CONTENT) {
        const EXPRESSION = array();
        if (EXPRESSION[1] == '/' && EXPRESSION[2] == 0){
        
        }else if (EXPRESSION.length == 3 && EXPRESSION[EXPRESSION.length - 1]) {
            calc();
            INPUT.value += ` ${operator} `;
        }else{
            INPUT.value += " " + operator + " ";
        }
    }
}

// Separando a operação
function array() {
    const INPUT = document.getElementById("input");
    let lines = INPUT.value.split('\n');
    let array = lines[lines.length - 1].split(' ');
    return array;
}

//calculo
function calc() {
    const INPUT = document.getElementById("input");
    const CALC_ARRAY = array();
    if (CALC_ARRAY[CALC_ARRAY.length - 1] != '') {
        let n1 = parseFloat(CALC_ARRAY[0]);
        let operator = CALC_ARRAY[1];
        let n2 = parseFloat(CALC_ARRAY[2]);
        let result = 0;

        switch (operator) {
            case '+':
                result = n1 + n2;
                INPUT.value += `\n${result.toFixed(2)}`;
                break;
            case '-':
                result = n1 - n2;
                INPUT.value += `\n${result.toFixed(2)}`;

                break;
            case 'x':
                result = n1 * n2;
                INPUT.value += `\n${result.toFixed(2)}`;

                break;
            case '/':
                if (n2 == 0) {
                    INPUT.value = ``;
                } else {
                    result = n1 / n2;
                    INPUT.value += `\n${result.toFixed(2)}`;
                }
                break;
        }
    }
}

//capturar tecla
function tec(event) {
    const KEY = String.fromCharCode(event.keyCode);
    if (!isNaN(KEY)) {
        addNumber(KEY);
    } else if (KEY == '+' || KEY == '-' || KEY == 'x' || KEY == '/') {
        addOperator(KEY);
    }
}

//Evitando do enter quebrar linha no textarea
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        calc();
        e.preventDefault();
    }else if (e.keyCode === 32){
        e.preventDefault();
    }
});

//clear
function cleaning() {
    const INPUT = document.getElementById("input");
    INPUT.value = '';
}