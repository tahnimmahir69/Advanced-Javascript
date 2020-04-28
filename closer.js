function stopwatch(){
    let count = 0;

    return function(){
        count ++;
        return count;
    }
}

const clock1 = stopwatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());  /// clock1 ar value 1 2 3 4 kora barta thakna

const clock2 = stopwatch();
console.log(clock2());
console.log(clock2());  // aber 1 2 count
console.log(clock1());  // akana clock 1 count hoba 5
console.log(clock2());