import { getCSS } from "./common.js";
async function quantidadeUsuarios() {
  const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
  const res = await fetch(url)
  const dados = await res.json()
  const nomeDasRedes = Object.keys(dados)
  const quantidadeUsuarios = Object.values(dados)

  const data = [
    {
      x: 'nomeDasRedes',
      y: quantidadeDeUsuarios,
      type: 'bar',
      marker: {
        color: getCSS('--primary-color')
      }
    }
  ]

  const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color')
}

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico, data, layout)

}

quantidadeUsuarios()

  //fim aula 08