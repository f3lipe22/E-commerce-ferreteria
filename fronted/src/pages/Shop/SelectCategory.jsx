import React from 'react'

const SelectCategory = (select) => {
  return (
    <select defaultValue={select}>
    <option value="all">Todas las categorías</option>
    <option value="electronics">Materiales</option>
    <option value="computer">Herramientas</option>
    <option value="smart-home">Electricas</option>
    <option value="automotive">Electricidad</option>
    <option value="baby">Plomería</option>                     
</select>
  )
}

export default SelectCategory