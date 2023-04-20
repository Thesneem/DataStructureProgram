function bubbleSort(arr) {
    let swap
    do {
        swap = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swap = true
            }
        }
    } while (swap)
    return arr
}
//bigO=Quadratic
console.log(bubbleSort([-1, -2, 4, 3, 8, 5]))
console.log(bubbleSort([8, 20, -2, 4, -6]))
console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))