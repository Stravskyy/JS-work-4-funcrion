


function numberSelect(arr) {
    var lasArr=[];
        for(i=0; i<arr.length; i++ ){
            i=i+1;
            lasArr.push(arr[i]);
    }
    return lasArr;
}

var min = numberSelect([5, 6, 2, 3, 7,22]);

console.log(min);