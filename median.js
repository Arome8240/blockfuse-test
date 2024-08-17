function findMedianSortedArrays(nums1, nums2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      mergedArray.push(nums1[i]);
      i++;
    } else {
      mergedArray.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    mergedArray.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    mergedArray.push(nums2[j]);
    j++;
  }

  const n = mergedArray.length;
  if (n % 2 === 0) {
    return (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
  } else {
    return mergedArray[Math.floor(n / 2)];
  }
}

console.log("Median is:", findMedianSortedArrays([1, 2], [3, 4]));
