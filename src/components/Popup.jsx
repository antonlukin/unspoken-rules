import styles from './Popup.module.scss'

function Popup({children, setExtended}) {
  return (
    <div className={styles.popup}>
      <div className={styles.wrapper}>
        {children}
      </div>

      <button type='button' className={styles.close} onClick={() => {setExtended(false)}}>
        Закрыть
      </button>
    </div>
  )
}

export default Popup
