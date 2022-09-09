function multi(numbers) {
    var multiples = numbers[0];
  
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % multiples === 0) {
        console.log(numbers[i]);
      }
    }
}