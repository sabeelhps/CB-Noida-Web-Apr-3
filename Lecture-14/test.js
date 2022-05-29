
const nums = [1, 2, 3, 4, 99, 87, 32, 10, 8, 2];


function searchElement(nums, target) {
    
    let index2 = nums.lastIndexOf(target);

    if (index2 === -1) {
        return -1;
    }
    return index2;
}


let target = 2;

let ans = searchElement(nums, target);

console.log(ans);