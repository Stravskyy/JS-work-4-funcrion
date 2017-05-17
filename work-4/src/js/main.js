


function getMax(arr) {
var max = arr[0];
for(var i=1; i<arr.length; i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
return(max);
}

var maxNum = getMax([1,2,3,4,5,6,7]);

console.log(maxNum);