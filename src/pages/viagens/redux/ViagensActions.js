import { AddAlert } from '../../../component'

export const ATUALIZAR_CONTEUDO_FILTRO = 'ATUALIZAR_CONTEUDO_FILTRO'
export const atualizarFiltro = evento => ({
  type: ATUALIZAR_CONTEUDO_FILTRO,
  payload: evento
})
export const ATUALIZAR_FORUM = 'ATUALIZAR_FORUM'
const setAtualizarForum = e => ({
  type: ATUALIZAR_FORUM,
  payload: e
})

export const atualizarForum = e => {
  return dispatch => {
    dispatch([AddAlert('success', 'Informações atualizadas com sucesso'), setAtualizarForum(e)])
  }
}
