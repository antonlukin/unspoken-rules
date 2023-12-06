import { useState } from 'react'

import styles from './Result.module.scss'
import mixins from './Mixins.module.scss'

import Popup from './Popup'

function Result({final, setHero}) {
  const [extended, setExtended] = useState(false)

  return (
    <>
      <div className={styles.result}>
        <button type='button' className={mixins.button + ' ' + mixins.primary} onClick={() => { setHero(null) }}>
            Попробовать еще раз
          </button>

          <button type='button' className={mixins.button} onClick={() => setExtended(true)}>
            Прочитать комментарий эксперта
          </button>
      </div>


      { extended &&
        <Popup setExtended={setExtended}>
          <article dangerouslySetInnerHTML={{ __html: final.popup }} />
        </Popup>
      }
    </>
  )
}

export default Result
