import splitbee from '@splitbee/web'
import Image from 'next/image'
import { Article, Envelope, GithubLogo, LinkedinLogo } from 'phosphor-react'
import styles from './Presentation.module.css'

const Presentation = () => {
  return (
    <section id="home" className={styles.divSection}>
      <Image
        data-aos="fade-up"
        className={styles.image}
        src="/images/profile.jpg"
        alt="Picture of the author"
        width={300}
        height={450}
        quality={100}
        priority
      />
      <div className="flex flex-col justify-center">
        <h1 data-aos="zoom-in" className={styles.title}>
          Hola, Soy <span className={styles.name}>Daniel</span>
        </h1>
        <h2 data-aos="zoom-in" className={styles.subTitle}>
          Web Developer
        </h2>
        <div className={styles.infoIcons} data-aos="fade-up">
          <a
            rel="noopener noreferrer"
            href="mailto:danielcgilibert@gmail.com"
            target="_blank"
            onClick={() => splitbee.track('Email')}
          >
            <Envelope width={45} height={45} />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://github.com/danielcgilibert"
            target="_blank"
            onClick={() => splitbee.track('Github')}
          >
            <GithubLogo width={45} height={45} />
          </a>
          <a
            rel="noopener noreferrer"
            href="/cv/Daniel Carmona Gilibert.pdf"
            download
            onClick={() => splitbee.track('PDF')}
          >
            <Article width={45} height={45} />
          </a>

          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/danielcarmonagilibert/"
            target="_blank"
            onClick={() => splitbee.track('Linkedin')}
          >
            <LinkedinLogo width={45} height={45} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Presentation
