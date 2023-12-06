import styles from './Popup.module.scss'
import mixins from './Mixins.module.scss'

function Popup({children, setExtended}) {
  return (
    <div className={styles.popup}>
      <div className={styles.wrapper}>
        {children}
      </div>

      <div className={styles.close}>
        <button type='button' className={mixins.button} onClick={() => {setExtended(false)}}>
          Закрыть
        </button>
      </div>
    </div>
  )
}

export default Popup
