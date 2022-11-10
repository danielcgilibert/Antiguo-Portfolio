import { routes } from '@constants/routesNav'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = ({ children }) => {
  const [active, setActive] = useState(false)
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <>
      <nav className={styles.nav2}>
        <ul className={styles.navbarNav}>
          {routes.map(({ href, name, icon: Icon }) => (
            <li key={name} className={styles.navItem}>
              <a href={href} className={styles.navLink}>
                <Icon width={50} height={40} />
                <span className={styles.linkText}>{name}</span>
              </a>
            </li>
          ))}

          <li className={styles.navItem} onClick={changeTheme}>
            {theme === 'light' ? (
              <SunIcon width={50} height={40} className="cursor-pointer" />
            ) : (
              <MoonIcon width={50} height={40} className="cursor-pointer" />
            )}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
