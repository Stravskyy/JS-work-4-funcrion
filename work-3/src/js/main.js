


function getMin(arr) {
var min = arr[0];
for(var i=0; i<arr.length; i++){
    if(min>arr[i]){
        min=arr[i];
    }
}
return(min);
}

var minNum = getMin([111,23,13,54,51,68]);

console.log(minNum);