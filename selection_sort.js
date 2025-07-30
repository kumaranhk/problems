const selection_sort = (arr) => {

    for (let i = 0; i < arr.length - 1; i++) {
        let min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min_index] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[min_index];
                arr[min_index] = temp;
            }
        }
        console.log(arr);
    }
    console.log(arr);
}

selection_sort([66, 44, 24, 11]);