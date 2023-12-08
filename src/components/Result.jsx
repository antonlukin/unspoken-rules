import { useState } from 'react'

import styles from './Result.module.scss'
import mixins from './Mixins.module.scss'

import Popup from './Popup'

function Result({final, setHero}) {
  const [extended, setExtended] = useState(false)

  const closePopup = () => {
    setExtended(false)

    document.body.style.overflow = null
  }

  const openPopup = () => {
    setExtended(true)

    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: final.text }} />

      <div className={styles.result}>
        <button type='button' className={mixins.button + ' ' + mixins.primary} onClick={() => { setHero(null) }}>
            Попробовать еще раз
          </button>

          <button type='button' className={mixins.button} onClick={openPopup}>
            Прочитать комментарий эксперта
          </button>
      </div>

      { extended &&
        <Popup closePopup={closePopup}>
          {final.photo &&
            <img src={final.photo} alt="" />
          }
          <article dangerouslySetInnerHTML={{ __html: final.popup }} />
        </Popup>
      }
    </>
  )
}

export default Result
