


function printArray(arr, numberStep) {

    var selectedElements=[];
        for( var i=0; i<arr.length; i=i+numberStep){
            selectedElements.push(arr[i]);
    }
    return selectedElements;
}

var stepArr = printArray([1,2,3,4,5,6,7],3);

console.log(stepArr);