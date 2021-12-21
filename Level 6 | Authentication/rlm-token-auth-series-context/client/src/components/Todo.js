import React from 'react'

export default function Todo(props){
  const { title, description, imgUrl, _id } = props
  return (
    <div className="todo">
      <h1>{ title }</h1>
      <h1>{ description }</h1>
      <h1>{ imgUrl }</h1>
    </div>
  )
}