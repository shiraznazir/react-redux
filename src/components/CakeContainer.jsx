import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCakes, buyCakesMore, addCakesToShop } from './redux/cake/CakeSlice'

const CakeContainer = () => {
  const addCakes = useRef(0)
  const buyBulkCakes = useRef(0)
  const noOfCakes = useSelector((state)=> state.cake.numOfCakes)
  const dispatch = useDispatch()
  
  return (
    <>
        <h1>Total Cakes : {noOfCakes}</h1>
        <button onClick={()=> dispatch(buyCakes())}>Buy Cake</button>
        <br />
        <input ref={buyBulkCakes} />
        <button onClick={()=> dispatch(buyCakesMore(buyBulkCakes.current.value))}>Buy Cakes</button>
        <br />
        <input ref={addCakes} />
        <button onClick={()=> dispatch(addCakesToShop(addCakes.current.value))}>Add Cakes</button>
    </>
  )
}

export default CakeContainer