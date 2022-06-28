import CardProject from '@components/ui/CardProject'
import { proyects } from '@constants/proyects'
import styles from './Proyects.module.css'
const Proyects = () => {
  return (
    <section id="proyects" className={styles.proyectList}>
      {proyects.map((proyect) => (
        <CardProject key={proyect.name} proyect={proyect} />
      ))}
    </section>
  )
}

export default Proyects
