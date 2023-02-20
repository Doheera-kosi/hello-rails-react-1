import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { messageFetch } from '../redux/greetingSlice'

const Greeting = () => {
  const dispatch = useDispatch()
  const { message } = useSelector((state) => state.message)

  
  useEffect(() => {
    dispatch(messageFetch(message))
  }, [])

  console.log(message)

  return (
    <div>
      <p>{message.message}</p>
    </div>
  )
}

export default Greeting;
