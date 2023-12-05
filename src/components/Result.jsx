import styles from './Result.module.scss'
import mixins from './Mixins.module.scss'

function Result({final, setHero}) {
  return (
    <div className={styles.result}>
       <button className={mixins.button + ' ' + mixins.primary} onClick={() => { setHero(null) }}>
          Попробовать еще раз
        </button>

       <button className={mixins.button}>
          Прочитать комментарий эксперта
        </button>
    </div>
  )
}

export default Result
