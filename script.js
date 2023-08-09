console.log("Hello World!")

// Move all zero's to the end of the array  
//note: You must mutate original array

// const zeroesToEnd = (arr) => {
//     let zeroArr = [];
//     let wholeNum = [];
//     let sorted = arr.sort();
//  for(let i = 0; i < sorted.length; i++) {
//     sorted[i] == 0 ? zeroArr.push(sorted[i]) : wholeNum.push(sorted[i]);    
// }
//  return wholeNum.concat(zeroArr);
// }

// console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]))
// // ➞ [1, 2, 4, 5, 0, 0, 0]
// console.log(zeroesToEnd([0, 0, 2, 0, 5]))
// //➞ [2, 5, 0, 0, 0]
// console.log(zeroesToEnd([4, 4, 5]))
// // ➞ [4, 4, 5]
// console.log(zeroesToEnd([0, 0])) 
//➞ [0, 0]


const numInStr = (arr) => {
    console.log(arr)
    return arr.filter(item => {
		for (char of item){
			if (char.charCodeAt(0)>47 && char.charCodeAt(0)<58){
				return item;
			}
		}
	})
}

console.log(numInStr(["1a", "a", "2b", "b"])) 
//➞ ["1a", "2b"]
numInStr(["abc", "abc10"])
// ➞ ["abc10"]
numInStr(["abc", "ab10c", "a10bc", "bcd"])
 //➞ ["ab10c", "a10bc"]
console.log(numInStr(["this is a test", "test1"]))
// ➞ ["test1"]