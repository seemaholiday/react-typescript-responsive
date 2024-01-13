import React, { ChangeEvent, FC } from 'react'

type Formprops={
    type: 'text' | 'number' | 'email'
    value: string | number
    placeholder: string
    name:string
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
}

const Inputcom:FC<Formprops>=(props:Formprops) =>{
  return (
        <input type={props.type} value={props.value} placeholder={props.placeholder} name={props.name}
            onChange={props.onChange}
        />
  )
}

export default Inputcom