function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([-1, -2, 4, 3, 8, 5]))
console.log(quickSort([8, 20, -2, 4, -6]))
console.log(quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))