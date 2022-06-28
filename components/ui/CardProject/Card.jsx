import { Code, Link } from 'phosphor-react'
import styles from './Card.module.css'

const Card = ({ proyect }) => {
  const { cover, name, desc, hrefCode, hrefWeb, stackIcons } = proyect
  return (
    <article
      className={styles.card}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="w-full">
        <img src={cover} className="rounded-t-lg max-h-44 w-full" />
      </div>

      <div>
        <h1>{name}</h1>
        <p>{desc}</p>
      </div>

      <ul>
        {stackIcons.map((icon, index) => (
          <li key={index}>
            <img src={icon} className="rounded-t-lg " />
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap mt-8 justify-center items-center content-center  ">
        <a target="_blank" href={hrefCode}>
          <Code size={25} color="white" />
        </a>
        {hrefWeb && (
          <a target="_blank" href={hrefWeb}>
            <Link size={25} color="white" />
          </a>
        )}
      </div>
    </article>
  )
}

export default Card
