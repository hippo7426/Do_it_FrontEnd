console.log("This is global context");

function ExContext1(){
    console.log("This is ExContext1");
}

function ExContext2(){
    ExContext1();
    console.log("This is ExContext2");
};

ExContext2();

function excute(parm1, parm2){
    var a= 1, b=2;
    function func(){
        return a+b;
    }
    return parm1 + parm2 + func();
}

excute(3,4);