import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard'
//import { heroes } from '../../data/heroes'

interface Props{
  publisher:string
}

export const HeroList: React.FC<Props> = ({publisher})=> {
  const heroes = useMemo(() => getHeroByPublisher(publisher),[publisher])
  //const heroes = getHeroByPublisher(publisher)
  
  return (
    <div className="row d-flex justify-content-center animate__animated animate__fadeIn">
      {
        heroes.map(hero => (
          <HeroCard 
          key ={hero.id}
              { ...hero}
          />
        ))
      }
    </div>
  )
}
