import { useState, useEffect } from 'react'

import styles from './Welcome.module.scss'
import mixins from './Mixins.module.scss'

import Popup from './Popup'

function Welcome({setHero}) {
  const [started, setStarted] = useState(false)
  const [extended, setExtended] = useState(false)

  useEffect(() => {
    window.parent.scrollTo({top: 0})
  }, [started])

  const closePopup = () => {
    setExtended(false)

    document.body.style.overflow = null
  }

  const openPopup = () => {
    setExtended(true)

    document.body.style.overflow = 'hidden'
  }

  return (
    <div className={styles.intro}>
      { ! started &&
        <>
          <h1 className={styles.title}>Негласные правила</h1>
          <p className={styles.lead}>Помоги героиням услышать себя в мире стереотипов. Игра издания «Гласная» и школы прозы «Глагол».</p>

          <figure className={styles.image}>
            <img src="https://glasnaya.media/wp-content/uploads/2022/04/intro_desk.png" alt="intro" />
          </figure>

          <div className={styles.description}>
            <p>Эту игру мы придумали еще до 24 февраля. Хотели показать, какой ценой женщине в России дается право быть собой. Родные и даже незнакомые люди часто «лучше знают», как должна поступить женщина в самых разных ситуациях. Она же может сомневаться в выборе, к которому подталкивает общественное мнение и стереотипы.</p>
            <p>Сейчас важна гражданская позиция каждого, поэтому нам кажется, что игра в «Негласные правила» актуальна. Гражданская позиция начинается с критического мышления и собственной точки зрения. И то и другое нужно тренировать. Мы надеемся, что наша игра в этом поможет.</p>
            <p>«Гласная» и «Глагол» создали игру для практики собственных суждений.</p>
          </div>

          <div className={styles.manage}>
            <button type='button' className={mixins.button + ' ' + mixins.primary} onClick={() => setStarted(true)}>
              Начать игру
            </button>

            <button type='button' className={styles.team} onClick={openPopup}>Команда проекта</button>
          </div>
        </>
      }

      { started &&
        <>
          <div className={styles.grid}>
            <button type='button' className={styles.choice} onClick={() => { setHero('tatiana') }}>
              <img src="https://glasnaya.media/wp-content/uploads/2022/04/1-tatyana.jpg" alt="Татьяна" />
              <span>Татьяна</span>
            </button>

            <button type='button' className={styles.choice} onClick={() => { setHero('anya') }}>
              <img src="https://glasnaya.media/wp-content/uploads/2022/04/2-anya.jpg" alt="Аня" />
              <span>Аня</span>
            </button>

            <button type='button' className={styles.choice} onClick={() => { setHero('sveta') }}>
              <img src="https://glasnaya.media/wp-content/uploads/2022/04/4-sveta.jpg" alt="Света" />
              <span>Света</span>
            </button>

            <button type='button' className={styles.choice} onClick={() => { setHero('karina') }}>
              <img src="https://glasnaya.media/wp-content/uploads/2022/04/3-karina.jpg" alt="Карина" />
              <span>Карина</span>
            </button>
          </div>
        </>
      }

      { extended &&
        <Popup closePopup={closePopup}>
          <h2>Над игрой работали</h2>

          <figure>
            <ul>
              <li>
                <strong>Сценарии и тексты:</strong>
                <span>Женя Иванова — сценарий Татьяны</span>
                <span>Арина Бойко — сценарий Ани</span>
                <span>Настя Толстопятова — сценарий Карины</span>
                <span>Наташа Подлыжняк — сценарий Светланы</span>
              </li>

              <li>
                <strong>Редактура:</strong>
                <span>Катя Кудрявцева</span>
              </li>

              <li>
                <strong>Иллюстрации:</strong>
                <span>Вика Денисова</span>
                <span>Соня Буславская</span>
                <span>Тая Краюхина</span>
              </li>
            </ul>

            <ul>
              <li>
                <strong>Экспертиза:</strong>
                <span>Ирина Изотова</span>
                <span>Татьяна Дроздова</span>
                <span>Евгения Волункова</span>
              </li>

              <li>
                <strong>Консультации:</strong>
                <span>Юлия Счастливцева</span>
                <span>Ирина Изотова</span>
              </li>

              <li>
                <strong>Продюссирование, верстка, дизайн:</strong>
                <span>Тая Краюхина</span>
              </li>

              <li>
                <strong>Идея:</strong>
                <span>Точенов Андрей</span>
                <span>Тая Краюхина</span>
              </li>
            </ul>
          </figure>
        </Popup>
      }
    </div>
  )
}

export default Welcome
