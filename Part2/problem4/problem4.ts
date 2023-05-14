function romanNumerals(value: number) {
  const romanNumerals: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let result = '';

  for (let key in romanNumerals) {
    while (value >= romanNumerals[key]) {
      result += key;
      value -= romanNumerals[key];
    }
  }

  return result;
}

console.log(romanNumerals(6));    // VI
console.log(romanNumerals(9));    // IX
console.log(romanNumerals(23));   // XXIII
console.log(romanNumerals(2021)); // MMXXI
console.log(romanNumerals(1646)); // MDCXLVI
