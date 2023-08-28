import React from 'react'
import { ButtonComponent } from '../components/ButtonComponent'
import { CardComponent } from '../components/CardComponent'
import { AdvancedForm } from '../components/AdvancedForm'

export const Home = () => {

  const handleClick = (event) => {
    console.log('¡Se hizo clic!', event);
  }

  return (
    <>
      <h1>Stencil JS in React project</h1>
      <div className='container-card'>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
      </div>
      <div className='container-button'>
        <ButtonComponent text="Transferir" color="#D2006E"  buttonClicked={(event)=>{console.log(event)}} />
      </div>
      <AdvancedForm></AdvancedForm>
    </>
  )
}
