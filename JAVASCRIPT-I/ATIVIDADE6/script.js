function calc(n1, n2) {
  if (typeof n1 === 'undefined' || typeof n2 === 'undefined') {
    return 'Você deve informar os dois valores!';
  } 
  else if(n2 === 0){
    return 'A divisão por zero não é possível, verifique os valores informados'
  }
  else {
    return `
      ${n1} + ${n2} é = ${n1 + n2}
      ${n1} - ${n2} é = ${n1 - n2}
      ${n1} x ${n2} é = ${n1 * n2}
      ${n1} / ${n2} é = ${n1 / n2}
    `;
  }
}

console.log(calc(5,5));