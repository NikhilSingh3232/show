function add (){
    var c=8;
    function Sum(){
        var a=+c;
        return a;
    }
    return Sum;
}

const SUM=add(4);
console.log("sum:", SUM(3));