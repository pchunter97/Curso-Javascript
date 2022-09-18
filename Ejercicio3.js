//Factorial break
let i2 = 1;
while (true) {
  let fac = 1;
  let j = 1;
  while (true) {
    fac = fac * j;
    if (j === i2) {
        	break
    }
    j++;
  }
  i2++
  console.log(fac)
if(i2===10)
{
    break;
}
}

//Factorial for
for (let i = 1; i < 11; i++) {
    let fac = 1;
    console.log(i);
    for (let j = 1; j < i; j++) {
      fac = fac * j;
    }
    console.log(fac);
  }

  //Factorial while
let i = 1;
while (i < 11) {
  let fac = 1;
  let j = 1;
  while (j < i) {
    fac = fac * j;
    j++;
  }
  console.log(fac);
  i++;
}