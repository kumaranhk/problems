// 3477. Fruits Into Baskets II

/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
    let unplaced = 0;
    let usedBasket = new Array(baskets.length).fill(false);
    for (let fruit = 0; fruit < fruits.length; fruit++) {
        let placed = false;
        for (let basket = 0; basket < baskets.length ; basket ++) {
            if (!usedBasket[basket] && baskets[basket] >= fruits[fruit]) {
                usedBasket[basket] = true;
                placed = true;
                break;
            }
        }
        if (!placed) unplaced++;
    }
    return unplaced;
};