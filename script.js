

// massiv elementlerinin random yerdeyismesi funksiyasi
const mixArrayElements = (array) =>{
    const tempArray = [];
    for(let i in array){
        tempArray[i] = array[i];
    }
    const mixedArray = [];
    while(tempArray.length  >0){
        let randomIndex = Math.floor(Math.random() * tempArray.length);
        mixedArray.push(tempArray.splice(randomIndex, 1)[0]);
       
     }
  
   
    return mixedArray;

}

// reqemler massivi
const digits = [];

for(let i =1; i<=9; i++){
    digits[i-1] = i;
    
}


let firstRow = mixArrayElements(digits);
console.log(digits)
console.log(firstRow)


const nextArray = [];
const tempArray = []
const flagArray = []
for(let i =1;i<10;i++){
    flagArray[i-1] = 0;
    tempArray[i-1] = i -1;

}
console.log(tempArray)
let index = 0;
let temp = 0;
for(let i=0;i<9;i++){
    for(let j=0;j<firstRow.length;j++){
        if(digits[i] == firstRow[j]){
            for(let k in tempArray){
                if(tempArray[k] == j){
                    temp = tempArray.splice(k,1)[0];
                }
            }
            
            console.log(temp);
            console.log(tempArray)
             index = Math.floor(Math.random() * tempArray.length);
               console.log(index)
                
                    flagArray[tempArray[index]] = digits[i]
                    tempArray.splice(index,1)
                    console.log(tempArray)
                    // console.log(flagArray)
                    tempArray.push(temp)
                    console.log(tempArray)
                    // firstRow.splice(j,1)
                    console.log(firstRow)
                    console.log(flagArray)
                   
           }
               
                    
                
           
            
           
        } ;  
    }






// console.log(tempArray)
// console.log(index)
// console.log(flagArray)


