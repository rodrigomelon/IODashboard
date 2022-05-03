import React from 'react'
import Card from './Card/Card'

function Cards({ somaIN, somaOUT, balance }) {
  return (
    <div className="flex justify-center">
      <Card>
        IN'S
        <br /> ${somaIN}
      </Card>
      <Card>
        OUT'S <br />${somaOUT}
      </Card>
      <Card>
        BALANCE
        <br /> ${balance}
      </Card>
    </div>
  )
}

export default Cards
