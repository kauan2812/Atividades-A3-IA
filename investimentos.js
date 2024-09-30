const valorMax = 100000


const acoes = {
  A: { 
    custo: 30000,
    retorno: 40000 
  },
  B: { 
    custo: 50000,
    retorno: 60000
  },
  C: { 
    custo: 40000, 
    retorno: 45000 
  },
  D: { 
    custo: 10000, 
    retorno: 15000 
  },
  E: { 
    custo: 20000, 
    retorno: 25000 
  },
}

function razao(acao) {
  let result = acao.custo / acao.retorno
  return result
}

let items = Object.keys(acoes).map((key) => {
  return { nome: key, ...acoes[key], razao: razao(acoes[key]) }
})

items.sort((a, b) => a.razao - b.razao)

let valorAtual = 0
let acoesEscolhidas = []

items.map((item) => {
  if ((valorAtual + item.custo) > valorMax) {
    return
  }

  while(!((valorAtual + item.custo) > valorMax)) {
    acoesEscolhidas.push(item)
    valorAtual += item.custo
  }
  
})

console.log(acoesEscolhidas)
