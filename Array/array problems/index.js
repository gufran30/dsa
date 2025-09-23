function sortColorsQuestion() {
  function sortColors(arr) {
    let n = arr.length,
      i = 0,
      j = 0,
      k = n - 1;

    while (i <= k) {
      if (arr[i] === 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = arr[i];

        i++;
        j++;
      } else if (arr[i] === 2) {
        swap(arr, i, k);
        k--;
      } else {
        i++;
      }
    }
    return arr;
  }

  function swap(arr, a, b) {
    let c = arr[a];
    arr[a] = arr[b];
    arr[b] = c;

    return arr;
  }

  let arr = [2, 0, 2, 1, 1, 0];
  const ans = sortColors(arr);
  console.log(ans); // [0, 0, 1, 1, 2, 2]
}

function trappingRainWaterQuestion() {
  function trappingRainWater(arr) {
    let ans = 0,
      n = arr.length;
    let left = new Array(arr.length);
    let right = new Array(arr.length);

    let maxLeft = arr[0];
    let maxRight = arr[n - 1];

    // filling leftArr
    for (let i = 0; i < n; i++) {
      maxLeft = Math.max(maxLeft, arr[i]);
      left[i] = maxLeft;
    }

    // filling rightArr
    for (let i = n - 1; i >= 0; i--) {
      maxRight = Math.max(maxRight, arr[i]);
      right[i] = maxRight;
    }

    // for ansSum
    for (let i = 0; i < n; i++) {
      ans += Math.min(left[i], right[i]) - arr[i];
    }

    return ans;
  }

  const height = [4, 2, 0, 3, 2, 5];
  const ans = trappingRainWater(height);
  console.log(ans); // 9
}

function containerWithMostWaterQuestion() {
  function containerWithMostWater(arr) {
    let ans = 0,
      i = 0,
      j = arr.length - 1;

    while (i < j) {
      ans = Math.max(ans, Math.min(arr[i], arr[j]) * (j - 1));
      if (arr[i] < arr[j]) i++;
      else j--;
    }
    return ans;
  }

  let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  // Output: 49
  const ans = containerWithMostWater(height);
  console.log(ans);
}

function threeSumQuestion() {
  function threeSum(arr) {
    let ans = [];
    arr.sort((a, b) => a - b);
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      if (i != 0 && arr[i - 1] == arr[i]) continue;

      let j = i + 1,
        k = n - 1;
      while (j < k) {
        let sum = arr[i] + arr[j] + arr[k];

        if (sum === 0) {
          let tempArr = [arr[i], arr[j++], arr[k--]];
          ans.push(tempArr);
          while (j < k && arr[j - 1] == arr[j]) j++;
          while (j < k && arr[k + 1] == arr[k]) k--;
        } else if (sum < 0) j++;
        else k--;
      }
    }
    return ans;
  }

  const nums = [-1, 0, 1, 2, -1, -4];
  // Output: [ [-1, -1, 2 ],[ -1, 0, 1 ] ]
  const ans = threeSum(nums);
  console.log(ans);
}

function removeElementsQuestion() {
  function removeElmemnt(nums, value) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != value) {
        nums[k++] = nums[i];
      }
    }

    return k;
  }

  const nums = [0, 1, 2, 2, 3, 0, 4, 2],
    value = 2;

  const ans = removeElmemnt(nums, value);
  console.log(ans);
}

function sqrtQuestion() {
  function sqrt(x) {
    if (x < 2) return x;

    let low = 0,
      high = x;
    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);
      if (mid * mid < x) {
        low = mid + 1;
      } else if (mid * mid > x) {
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return high;
  }

  let x = 8;
  console.log(sqrt(x));
}
