const bubbleSort = (arr) => {
    //iterating through the array
    for (let i = 0; i < arr.length; i++) {
        //Accesing the element which taken in first loop 
        //Comparing it to the other elements
        for (let j = 0; j < (arr.length - i - 1); j++) {
            console.log(arr[j], "arr[j]");
            console.log(arr[j + 1], "arr[j + 1]");
            //swapping the elements if it grater than the next element
            if (arr[j] > arr[j + 1]) {
                console.log("greater");

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        console.log(arr);

    }
    console.log(arr);

}

bubbleSort([66, 44, 24, 11]);