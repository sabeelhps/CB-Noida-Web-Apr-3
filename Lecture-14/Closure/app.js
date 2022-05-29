

function fun() {
    
    var a = 100;

    function innerFun() {
        a = a + 1;
        console.log(a);
    }

    return innerFun;
}


var f = fun();

f();