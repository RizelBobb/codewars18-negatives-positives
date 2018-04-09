function arrSort(input){
 let negative = [];
 let positive = [];
 for( let i = 0; i <= input.length-1; i++){
    if( input[i] < 0 ){
    negative.push(input[i]);
    }else {
    positive.push(input[i]);
    }
 }
 // [-5, -10] [3, 8, 1] -> ['h', 'i'].join('') -> 'hi'
 console.log(negative);
 console.log(positive);
 let newArray = negative.concat(positive)
 return newArray;
}

console.log(arrSort([-5, 3, -10, 8, 1]));
