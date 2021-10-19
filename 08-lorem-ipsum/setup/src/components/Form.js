import React , {useState} from 'react'



const Form = ({onSubmit}) => {

    return (
        <form className='lorem-form' onSubmit={onSummit}>
        <label htmlFor='amount'>
          paragraphs:
        </label>
        <input type='number'
        name='amount'
        id='amount'
        min='0'
        max='8'
        value={count}
        onChange={(e)=> setCount(e.target.value)}
        />
        <button className='btn' type='submit'>generate</button>
      </form>
    )
}

export default Form
