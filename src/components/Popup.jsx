import styles from './Popup.module.scss'
import mixins from './Mixins.module.scss'

function Popup({children, closePopup}) {
  return (
    <div className={styles.popup}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {children}
        </div>

        <div className={styles.close}>
          <button type='button' className={mixins.button} onClick={closePopup}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup
