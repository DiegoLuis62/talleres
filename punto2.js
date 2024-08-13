function resolvedor(a, b, c) {

    let x = Number(prompt("x = 1  // -x = 0"));
  
    if (x === 1) {
      return (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
    } else if (x === 0) {
      return (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
    } else {
  
      console.log("Digite un numero valido: 1 o 0")
    }
  
  
  }
  
  console.log(resolvedor(1, 5, 4))