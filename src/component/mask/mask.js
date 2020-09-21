export function MaskTelefone(valor) {
  valor = valor || ''
  let valueNew = ''
  if (valor.length <= 9) {
    valueNew = valor
      .replace(/\D/g, '')
      .replace(/^(\d)/, '($1')
      .replace(/(.{3})(\d)/, '$1)$2')
      .replace(/(.{4})(\d)/, '$1 $2')
  } else if (valor.length > 9 && valor.length <= 14) {
    valueNew = valor.replace('-', '').replace(/(\d{4})(\d)/, '$1-$2')
  } else if (valor.length > 14) {
    valueNew = valor.replace('-', '').replace(/(\d{5})(\d)/, '$1-$2')
  }
  return valueNew
}

export const MaskItemCep = valor => {
  let valueNew = ''
  valueNew = valor.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2')
  return valueNew
}

export const MaskData = valor => {
  let valueNew = ''
  valueNew = valor
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
  return valueNew
}

export const MaskValor = valor => {
  valor = valor || ''
  let valueNew = ''
  valueNew = valor
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
  return valueNew
}

export const MaskValorMoeda = valor => {
  valor = valor || ''
  let valueNew = ''
  valueNew = valor.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
  return valueNew
}
