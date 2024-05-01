// 22-misol
// function find_prime(n) {
//   if (n === 1) {
//     return false;
//   }
//   else if (n === 2) {
//     return true;
//   } else {
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// }
// console.log(find_prime(35));
// 21-misol

function FindOddNumber(n) {
  let toqRaqamMavjud = false;

  while (n > 0) {
    let raqam = n % 10;
    if (raqam % 2 !== 0) {
      toqRaqamMavjud = true;
      break;
    }
    n = Math.floor(n / 10);
  }

  if (toqRaqamMavjud) {
    return "Sonning ichida toq raqam mavjud";
  } else {
    return "Sonning ichida toq raqam yo'q";
  }
}

let n = prompt("Sonni kiriting: ");
console.log(FindOddNumber(parseInt(n)));

// 20-misol

// function IkkiRaqamniTopish(n) {
//   let ikkiRaqamMavjud = false;

//   while (n > 0) {
//       let raqam = n % 10;
//       if (raqam === 2) {
//           ikkiRaqamMavjud = true;
//           break;
//       }
//       n = Math.floor(n / 10);
//   }

//   if (ikkiRaqamMavjud) {
//       return "Sonning ichida ikki raqam mavjud";
//   } else {
//       return "Sonning ichida ikki raqam mavjud emas";
//   }
// }

// let n = prompt("Sonni kiriting: ");
// console.log(IkkiRaqamniTopish(parseInt(n)));

// 19-misol
// function RaqamTeskari(n) {
//   let teskariSon = "";

//   while (n > 0) {
//     let raqam = n % 10;
//     teskariSon += raqam;
//     n = Math.floor(n / 10);
//   }

//   return teskariSon;
// }

// let n = prompt("Sonni kiriting: ");
// console.log("Sonning raqamlari teskari tartibda: " + RaqamTeskari(parseInt(n)));

// 17-misol
// function ButunVaQoldiqniAniqlash(n, m) {
//   let count = 0;

//   while (n >= m) {
//       n = n - m;
//       count++;
//   }

//   return { butun: count, qoldiq: n };
// }

// let n = 20;
// let m = 3;

// let result = ButunVaQoldiqniAniqlash(n, m);
// console.log("Butun: " + result.butun);
// console.log("Qoldiq: " + result.qoldiq);

// 5-misol
// function DarajaAniqlash(n) {
//   let k = 0;
//   let temp = n;

//   while (temp % 2 === 0) {
//       k++;
//       temp = temp / 2;
//   }

//   if (temp === 1) {
//       return n + " soni 2 ning " + k + " chi darajasi";
//   } else {
//       return n + " soni 2 ning " + k + " darajasi emas";
//   }
// }

// let n = prompt("Sonni kiriting:");
// console.log(DarajaAniqlash(parseInt(n)));

// 4-misol
// function DarajaAniqlash(n) {
//   let k = 0;
//   let temp = n;

//   while (temp % 3 === 0) {
//       k++;
//       temp = temp / 3;
//   }

//   if (temp === 1) {
//       return n + " soni 3 ning darajasi";
//   } else {
//       return n + " soni 3 ning darajasi emas";
//   }
// }

// let n = prompt("Sonni kiriting:");
// console.log(DarajaAniqlash(parseInt(n)));

// 3-misol

// function ButunVaQoldiqniTopish(n, k) {
//   let count = 0;

//   while (n >= k) {
//       n = n - k;
//       count++;
//   }

//   return { butun: count, qoldiq: n };
// }

// let n = 16;
// let k = 3;

// let result = ButunVaQoldiqniTopish(n, k);
// console.log("Butun: " + result.butun);
// console.log("Qoldiq: " + result.qoldiq);

// 2-misol
// function KesmaniJoylashtirish(A, B) {
//   let count = 0;

//   while (A >= B) {
//     A = A - B;
//     count++;
//   }

//   return count;
// }

// let A = parseInt(prompt("Sonni kiriting: "));
// let B = parseInt(prompt("Sonni kiriting: "));

// console.log(
//   "A kesmani B kesmada " +
//     KesmaniJoylashtirish(A, B) +
//     " marta joylashtirish mumkin"
// );

// 1-misol
// function boshQismniAniqlash(A, B) {
//   let count = 0;

//   while (A >= B) {
//       A = A - B;
//       count++;
//   }

//   return A;
// }

// let A = parseInt(prompt("Sonni kiriting: "));
// let B = parseInt(prompt("Sonni kiriting: "));

// console.log("A kesmaning bo'sh qismi " + boshQismniAniqlash(A, B) + " ga teng");
