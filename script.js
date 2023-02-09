let sum = 0;
for (i = 1; i <= 50; i++) {
  if (i % 7 === 0) sum += i;
}
console.log(sum);

let summ = 0;
for (i = 1; i <= 50; i++) {
  if (i % 5 === 0 && i % 10 === 0) sum += i;
}
console.log(summ);
for (i = 10; i >= 1; i--) {
  sum *= i;
}
console.log();

let kk = 1;
while (kk <= 99) {
  console.log(kk);
  kk++;
}
