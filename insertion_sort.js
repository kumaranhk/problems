// Function to sort array using insertion sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        console.log("hello");
        while (j >= 0 && arr[j] > key) {
            console.log(j, arr[j]);

            arr[j + 1] = arr[j];
            j = j - 1;
            console.log(j, arr[j]);
            console.log(arr);
        }
        arr[j + 1] = key;
        console.log(arr, "Changed array");
    }
}

let arr = [12, 11, 13, 5, 6];

insertionSort(arr);
console.log(arr);
