import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
    
    return (
        <header className={styles['header']}>

            <div className={styles['header__nav']}>
            <a href="" className={styles['header__text']}>
            GITHUB FINDER</a>
            </div>
           
        </header>
    )
}

export default Header