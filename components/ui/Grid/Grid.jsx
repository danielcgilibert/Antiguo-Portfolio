import styles from './Grid.module.css'

const Grid = ({ children }) => {
  return <main className={styles.grid}>{children}</main>
}

export default Grid
