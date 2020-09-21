const idiomaText = () => {
  const locales = document.getElementById('idioma')
  const defaltText = require(`../nls/${locales.value}.json`)
  return defaltText.mensagem
}

export const ATUALIZAR_CONTEUDO_FILTRO = 'ATUALIZAR_CONTEUDO_FILTRO'
export const atualizarFiltro = evento => ({
  type: ATUALIZAR_CONTEUDO_FILTRO,
  payload: evento
})
