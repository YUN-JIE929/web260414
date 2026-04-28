var number=[1,5,2,8,3];

var max =-99999;


for(var i=0;i<number.length;i++){
    if(max < number[i]){
        max = number[i];
    }
}

console.log("最大值:"+max);

console.log(number);