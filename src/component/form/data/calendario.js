import React, { useState } from 'react'
import { Button } from '../../button/button'
import './calendario.css'

export function Calendario({ action, dataInicio, dataFim }) {
  var dataAtual = new Date()
  const [dataa] = useState({
    dataFull: dataAtual,
    ano: dataAtual.getFullYear(),
    dia: dataAtual.getDate(),
    mes: dataAtual.getMonth(),
    diaSemana: dataAtual.getDay()
  })
  var data = new Date()

  var ano = data.getFullYear()
  var dia = data.getDate()
  var mes = data.getMonth()
  var dia_semana = data.getDay()

  var A_mes = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  var A_dia = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
  var A_semanas = [1, 2, 3, 4, 5]
  var A_dias_semanas = [1, 2, 3, 4, 5, 6, 7]

  data.setDate(1 - dia_semana)
  // const mudarMes = () => {
  //   console.log(mes, 'FDASFLDLSAÇDFASFÇDSAFLDSAFÇDASÇF', mes - 1)
  //   data.setMonth(mes - 1)
  //   setData({ ...dataa, mes: dataa.mes - 1, dataFull: data })
  // }

  return (
    <div className='box-calendario'>
      <table>
        <thead>
          <tr>
            <th>
              {/* <Button color='default' type='btn circle' action={() => mudarMes()}>
                {'<'}
              </Button> */}
            </th>
            <th colSpan='5'>{A_mes[dataa.mes] + ' de ' + ano}</th>
          </tr>
          <tr>
            {A_dia.map((dia, i) => {
              return <td key={`dia-semana-${dia}`}> {dia} </td>
            })}
          </tr>
        </thead>
        <tbody>
          {A_semanas.map(s => {
            const semanaDias = () =>
              A_dias_semanas.map(() => {
                const diaAtual = data.getDate()
                const mesAtual = dataa.mes //data.getMonth()
                data.setDate(diaAtual + 1)

                return (
                  <td
                    key={`dia-${diaAtual}`}
                    className={diaAtual === dia ? 'dia-atual' : mesAtual === mes ? 'mes-atual' : ''}
                  >
                    <Button
                      color={
                        dataInicio === `${diaAtual}/${mesAtual + 1}/${ano}` ||
                        dataFim === `${diaAtual}/${mesAtual + 1}/${ano}`
                          ? 'primary'
                          : 'default'
                      }
                      type='btn circle'
                      action={() => action(`${diaAtual}/${mesAtual + 1}/${ano}`)}
                    >
                      {diaAtual}
                    </Button>
                  </td>
                )
              })

            return <tr key={`semana-${s}`}>{semanaDias()}</tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
