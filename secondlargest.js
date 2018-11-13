let larg=0;
let slarg=0;
let arr = [10,12,312,13,14,14,15,215,46,55,67,78,89,90,233,234];
for(i=0; i<arr.length; i++) {
    if(arr[i]>larg) {
        if(slarg<arr[i]) {
            slarg = larg;
        }
        larg = arr[i];
    }
    else {
        if(slarg<arr[i]) {
            slarg = arr[i];
        }
    }
}
console.log(slarg);
console.log(larg);