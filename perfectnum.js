function isPerfect(num) {
    let sqr = num * num;
    //console.log(sqr);
    sqr = sqr.toString();
    //console.log(num);
    //console.log(sqr);
    let test = sqr.includes(num);
    //console.log(test);
    if(test == true) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
isPerfect(25);