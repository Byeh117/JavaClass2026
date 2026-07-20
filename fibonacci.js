function fibonacciSequence(terms) {
    let sequence = [0, 1];
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i-1] + sequence[i-2]);
    }

    return sequence;

}

console.log(fibonacciSequence(10));