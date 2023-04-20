function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        var temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }

    return arr
}


console.log(selectionSort([-1, -2, 4, 3, 8, 5]))
console.log(selectionSort([8, 20, -2, 4, -6]))
console.log(selectionSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
