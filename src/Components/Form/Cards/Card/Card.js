import React from 'react'

function Card(props) {
  return (
    <div
      className="flex flex-col bg-slate-300
    background-color: rgb(203 213 225); rounded-md p-3 text-center text-zinc-800 mx-1 sm:w-40"
    >
      <h1 className="text-2xl pb-4">{props.children}</h1>
    </div>
  )
}

export default Card
