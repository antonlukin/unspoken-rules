import { useState } from 'react'
import styles from './Game.module.scss'

import Welcome from './Welcome'
import Process from './Process'

import dictionary from '../dictionary.json'

function Game() {
  const [hero, setHero] = useState(null)

  return (
    <main className={styles.game}>
      { hero
        ? <Process storage={dictionary[hero]} setHero={setHero} />
        : <Welcome setHero={setHero} />
      }
    </main>
  )
}

export default Game
