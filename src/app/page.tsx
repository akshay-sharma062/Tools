import Link from 'next/link'
import React from 'react'
import Card from './components/card'
import { cardsData } from './data/card'

function Home() {


  return (
    <>
    
    <div className="flex flex-col items-center">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          nextroute={card.nextroute}
          alternate={card.alternate}
          imageSrc={card.imageSrc}
          divText={card.divText}
          btnName={card.btnName}
          cardName={card.cardName}
        />
      ))}
    </div>
   
    </>
  )
}

export default Home
