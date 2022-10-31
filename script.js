let screen_1 = document.querySelector(".screen-1");
let screen_2 = document.querySelector(".screen-2");
let memory = [];
let i = 0, j =0;
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

    }
    else if(e == "="){
        for(j=1; j<=i; j+=2){
            console.log(memory[j]);
        }
    }
    else if(isNaN(e) == false){
        memory[i] = init;
        console.log("dun dun")
    }
    console.log(memory);
}