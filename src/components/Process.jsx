import { useState, useEffect } from 'react'

import Result from './Result'
import styles from './Process.module.scss'
import mixins from './Mixins.module.scss'

function Process({storage, setHero}) {
  const [step, setStep] = useState(storage.start)
  const [visible, setVisible] = useState(true)
  const [poster, setPoster] = useState(null)

  useEffect(() => {
    setVisible(true)
  }, [step])

  useEffect(() => {
    setPoster(null)

    if (step.image) {
      const image = new Image()
      image.setAttribute('src', step.image)

      image.addEventListener('load', () => {
        setPoster(image)
      });
    }
  }, [step])

  const changeStep = (action) => {
    setVisible(false)

    if (action === 'welcome') {
      return setHero(null)
    }

    setStep(storage[action])
  }

  const buttonClass = (action) => {
    const classes = [mixins.button]

    if (action === 'continue') {
      classes.push(mixins.primary)
    }

    return classes.join(' ')
  }

  const classes = [styles.process]

  if (visible) {
    classes.push(styles.visible)
  }

  return (
    <div className={classes.join(' ')}>
      {poster &&
        <figure className={styles.image}>
          <img src={poster.src} alt="" />
        </figure>
      }

      {step.text &&
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: step.text }} />
      }

      {step.help &&
        <div className={styles.help} dangerouslySetInnerHTML={{ __html: step.help }} />
      }

      {step.buttons &&
        <div className={styles.manage}>
          {
            Object.keys(step.buttons).map((action) => {
              return (
                <button className={buttonClass(action)} onClick={() => changeStep(action)} key={action}>
                  {step.buttons[action]}
                </button>
              )
            })
          }
        </div>
      }

      {step.final &&
        <Result final={storage[step.final]} setHero={setHero} />
      }
    </div>
  )
}

export default Process
