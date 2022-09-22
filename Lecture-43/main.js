

const nums = [-1,-3];

function solve() {
    nums.sort((a, b) => a - b);
    // console.log(nums);
    let max = null;

    if (nums[nums.length - 1] < 0) {
        return 1;
    }
    else {
        let maximum = nums[nums.length - 1]
        let i = 1;
        while (i <= maximum) {
            if (!nums.includes(i)) {
                break;
            }
            i++;
        }

        if (i === maximum + 1) {
            return i;
        }
        return i;
    }
}

console.log(solve(nums));

