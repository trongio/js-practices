var arr = [2,1,5,4];
let len = arr.length;
for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
        if (arr[j] < arr[j + 1]) {
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
        }
    }
}
for (let i = 0; i < len; i++){
    console.log(arr[i]);
}
