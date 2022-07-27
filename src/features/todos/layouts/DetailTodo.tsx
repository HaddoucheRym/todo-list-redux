import React from 'react'
import { useParams } from 'react-router-dom'

export const DetailTodo = () => {

    const {todoId} = useParams();

  return (
    <div>{todoId}</div>
  )
}
