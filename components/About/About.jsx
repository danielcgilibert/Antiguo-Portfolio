import { work } from '@constants/work'
import { useTheme } from 'next-themes'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import styles from './About.module.css'

const Presentation = () => {
  const { theme, setTheme } = useTheme()

  return (
    <section id="about" className={styles.about}>
      <VerticalTimeline
        animate={false}
        lineColor={theme === 'dark' ? 'white' : 'black'}
      >
        {work.map(
          ({ job, company, city, date, tasks, icon, background = 'black' }) => (
            <VerticalTimelineElement
              contentStyle={{
                background,
                color: 'white',
              }}
              contentArrowStyle={{
                borderRight: `7px solid  ${
                  theme === 'dark' ? 'white' : 'black'
                }`,
              }}
              date={date}
              dateClassName={styles.date}
              icon={<img src={icon} className="rounded-full" />}
              lineColor={'black'}
            >
              <div
                className="my-5"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <h1 className={styles.title}>🖥️{job}</h1>
                <h2 className={styles.subTitle}>⚙️{company}</h2>
                <h3 className={styles.subTitle}>🏢{city}</h3>
                <ul>
                  {tasks.map((task) => (
                    <li dangerouslySetInnerHTML={{ __html: task }}></li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          )
        )}
      </VerticalTimeline>
    </section>
  )
}

export default Presentation
