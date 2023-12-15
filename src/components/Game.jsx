import { useState } from 'react'
import styles from './Game.module.scss'

import Welcome from './Welcome'
import Process from './Process'

import dictionary from '../dictionary.json'

function Game() {
  const [hero, setHero] = useState(null)

  const resizeObserver = new ResizeObserver(entries => {
    const target = parseInt(entries[0]?.target?.clientHeight) + 10

    setTimeout(() => {
      frame.style.height = target + 'px'
    }, 50)
  })

  const frame = window.parent.document.getElementById('frame-unspoken-rules')

  if (frame) {
    resizeObserver.observe(document.body)
  }

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
