function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1
    }
    let midIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[midIndex]) {
        return midIndex
    }
    if (target < arr[midIndex]) {
        return search(arr, target, leftIndex, midIndex - 1)
    }
    else {
        return search(arr, target, midIndex + 1, rightIndex)

    }

}


console.log(recursiveBinarySearch([1, 2, 3, 5, 6, 7], 7))
/////////////////////////////////////////////////////////////


function recursiveFactorial(n) {
    if (n == 0) {
        return 1
    }
    return n * recursiveFactorial(n - 1)
}


console.log(recursiveFactorial(3))
////////////////////////////////////////////////////////////////

function fibonacci(n) {
    if (n < 2) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(6))