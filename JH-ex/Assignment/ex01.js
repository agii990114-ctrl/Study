// // 다음 배열의 각 행 별 합계를 구하시오.
// const arr = [
//     [9,4,6,7],
//     [1,3,7,5],
//     [5,8,2,4],
// ]

// const arrSum =[];

// for(let i=0; i<arr.length; i++){
//     let sum = 0;
//     for(let j=0; j<arr[i].length; j++){
//         sum += arr[i][j];
//     }
//     arrSum.push(sum);
// }
// console.log(arrSum);


// // 다음 배열에서 각 행의 최대값을 구하시오.

// const arr2 = [
//     [96,42,61,75],
//     [13,32,74,55],
//     [58,88,26,103],
//     [24,51,124,131]
// ]

// // 만약 이 수가 현재 행에서 가장 큰 수일 경우 값을 저장

// let max = 0;

// for(let i = 0; i < arr2.length; i++){

//     for(let j = 0; j < arr2[i].length; j++){
//         if(arr2[i][j]>max){
//             max = arr2[i][j];
//         }
//     }
//    console.log(max);
//    max = 0;
// };

// let j = 0;
// for(i=1; i<=15; i++){
//     if(i%3===0){
//         j +=5;
//         console.log(`${i}X${j}=${i*j}`)
//     }
// }

// let blk = ' ';
// let str = '*';
// let max = 20;
// let sum =1;

// for(let i=1; i<=max; i++){
//     console.log(`${blk.repeat((max-sum)/2)}${str.repeat(sum)}`);
//     sum += 2;
//     if(max<sum) break;
// }

const arr = [
   [0, 'x', 0],
   ['x', 0, 0],
   [0, 'x', 'x']
]
const sumArr = [];

for(i=0; i< arr.length; i++){
   for(j=0; j<arr[i].length; j++){
     if(arr[i][j] === 'x'){
      sumArr.push([i,j]);
     } 
   };
};

console.log(sumArr);