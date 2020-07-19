// Author: Jasser Dhaouadi 



// Exercise 2

var list = [6,4,0, 3,-2,1];


Array.prototype.bubbleSort = function(){
let len = this.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (this[i] > this[i + 1]) {
                let tmp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return this;
};

console.log(list.bubbleSort()); // output: [-2, 0, 1, 3, 4, 6]