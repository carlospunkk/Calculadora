function calculadora() {
  const operacao = Number(
    prompt(
      'escolha uma operação:\n 1 - Soma(+)\n 2-subtração(-)\n 3-multiplicação(*)\n 4-Divisão(/)\n 5-Divisão Inteira(%)\n 6-Potenciação(**)\n'
    )
  )
  if (!operacao || operacao >= 7) {
    alert('ERRO - OPERAÇÃO INVÁLIDA')
    calculadora()
  } else {
    let n1 = Number(prompt('insira o primeiro valor:'))
    let n2 = Number(prompt('insira o segundo valor'))
    let resultado

    if (!n1 || !n2) {
      alert('ERRO - PARAMETROS INVÁLIDOS')
      calculadora()
    } else {
      function soma() {
        resultado = n1 + n2
        alert(`SOMA \n ${n1} + ${n2} = ${resultado}`)
        novaop()
      }

      function subtracao() {
        resultado = n1 - n2
        alert(`Subtração\n${n1} - ${n2} = ${resultado}`)
        novaop()
      }

      function multiplicacao() {
        resultado = n1 * n2
        alert(`Multiplicação\n${n1} * ${n2} = ${resultado}`)
        novaop()
      }

      function divisao() {
        resultado = n1 / n2
        alert(`Divisão\n${n1} / ${n2} = ${resultado}`)
        novaop()
      }
      function divisaointeira() {
        resultado = n1 % n2
        alert(
          `DivisãoInteira\n${n1} % ${n2}  o resto da divisão é =  ${resultado}`
        )
        novaop()
      }
      function potenciacao() {
        resultado = n1 ** n2
        alert(`Potenciação\n${n1}**${n2} = ${resultado}`)
        novaop()
      }

      function novaop() {
        let opcao = prompt(
          'Deseja fazer outra operação ? \n 1 - Sim \n 2 - Não\n'
        )

        if (opcao == 1) {
          calculadora()
        } else if (opcao == 2) {
          alert('até mais')
        } else {
          alert('digite uma opção válida !')
          novaop()
        }
      }
    }

    /*if (operacao == 1) {
      soma()
    } else if (operacao == 2) {
      subtracao()
    } else if (operacao == 3) {
      multiplicacao()
    } else if (operacao == 4) {
      divisao()
    } else if (operacao == 5) {
      divisaointeira()
    } else if (operacao == 6) {
      potenciacao()
    }*/
    switch (operacao) {
      case 1:
        soma()
        break
      case 2:
        subtracao()
        break
      case 3:
        multiplicacao()
        break
      case 4:
        divisao()
        break
      case 5:
        divisaointeira()
        break
      case 6:
        potenciacao()
        break
    }
  }
}

calculadora()
