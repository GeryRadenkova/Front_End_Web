//Task1
var A = [10,5,13,18,51]

for(i=0;i<A.length;i++){
    console.log(A[i]);
}

//Task2
var B = new Array(5)
for(i=0;i<A.length;i++){
    B[i]=A[i]*2;
}

//Task3
for(i=0;i<A.length;i++){
    if(A[i]%2===0){
        console.log(A[i]);
    }
}

//Task4
function lessThen10(){
    for(i=0;i<A.length;i++){
        if(A[i] < 10){
            return (true);
        }
    }
    return (false);
}

function lessThen10B(){
    for(i=0;i<B.length;i++){
        if(B[i] < 10){
            return (true);
        }
    }
    return (false);
}

//Task5
var result = new Array();
function multiplesOf3(){ 
    j=0;
    for(i=0;i<A.length;i++){
        if(A[i]%3 === 0){
            result[j] = A[i];
            j++;
        }
    }
    return(result);
}     
