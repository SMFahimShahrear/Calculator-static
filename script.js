let screen_1 = document.querySelector(".screen-1");
let screen_2 = document.querySelector(".screen-2");
let memory = [];
const op_position_plus = [];
const op_position_minus = [];
const op_position_mul = [];
const op_position_div = [];
let i = 0, a = 0, b = 0, c=0, d= 0;
let disp = '';
let init = '';

function btn_call(e){
    disp +=e;
    init +=e;
    screen_1.innerText = disp;
    if (e == "+" || e == "-" || e == "x" || e == "/") {
        i++;
        memory[i] = e;
        i++;
        init = '';

        if(e == "/"){
            op_position_div[a] = i-1;
            a++;
        }
        
        else if(e == "x"){
            op_position_mul[b] = i-1;
            b++;
        } 
        
        else if(e == "-"){
            op_position_minus[c] = i-1;
            c++;
        } 
        
        else if(e == "+"){
            op_position_plus[d] = i-1;
            d++;
        }
    }
    else if(e == "="){
        console.log("yo");
    }
    else if(isNaN(e) == false){
        memory[i] = init;
        console.log("dun dun")
    }
    console.log(memory);
    console.log(op_position_div);
    console.log(op_position_mul);
    console.log(op_position_minus);
    console.log(op_position_plus);
}