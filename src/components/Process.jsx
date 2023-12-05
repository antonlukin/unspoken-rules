import { useState } from 'react'

import Result from './Result'
import styles from './Process.module.scss'
import mixins from './Mixins.module.scss'

function Process({storage, setHero}) {
  const [step, setStep] = useState(storage.start)

  const changeStep = (action) => {
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

  return (
    <div className={styles.process}>
      {step.image &&
        <figure className={styles.image}>
          <img src={step.image} alt="" />
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
        <Result final={step.final} setHero={setHero} />
      }
    </div>
  )
}

export default Process
