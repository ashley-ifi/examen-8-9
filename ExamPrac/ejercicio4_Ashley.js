function reverse(array) {
    var inver = [];
    while (inver.length) {
      output.push(array.pop());
    }
  
    return output;
  }
  
  console.log(reverse([23,5,34,56,98,'cadena' ,7]));