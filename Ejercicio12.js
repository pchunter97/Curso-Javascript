function fibo(num) {
  let fiboserie = [1, 1];
  let fibo = 1;

  if (num === 0) {
    return (fiboserie = [1]);
  } else if (num === 1) {
    return (fiboserie = [1, 1]);
  } else {
    for (let i = 2; i <= num; i++) {
      fibo = fiboserie[i - 1] + fiboserie[i - 2];
      fiboserie.push(fibo);
    //   console.log(fibo);
      
    }
    return fiboserie
  }
}
console.log(fibo(6));