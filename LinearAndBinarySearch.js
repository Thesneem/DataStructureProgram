function linearsearch(arr, t) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === t) {
            return i
        }

    }
    return -1
}

console.log(linearsearch([1, 6, 5, 3, 4, 9], 9))
console.log(linearsearch([1, 6, 5, 3, 4, 9], 0))

//////////////////////////////////////////////////////////////

function BinarySearch(array, t) {
    let arr = array.sort()
    console.log(arr)
    let rightIndex = arr.length - 1
    let leftIndex = 0
    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((rightIndex + leftIndex) / 2)
        if (arr[midIndex] === t) {
            return midIndex
        }
        if (t < arr[midIndex]) {
            rightIndex = midIndex - 1
        }
        else {
            leftIndex = midIndex + 1
        }
    }
    return -1
}

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7))
console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8], 3))
console.log(BinarySearch([1, 2, 9, 3, 4, 5, 6, 7, 8], 9))