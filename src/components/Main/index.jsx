import React from 'react'
import styles from './Main.module.scss'
import imgMain from '../../assets/images/main_img.png'

const Main = () => {
  return (
    <div className={styles['header']}>
        <div className={styles['header__input']}>
        <input   type="text" placeholder='Введите имя пользователя'/>
        <button className={styles['header__link']}>НАЙТИ</button>
    </div>

        <div className={styles['header__id']}>
           <div className={styles['header__left']}>

            <img src={imgMain}  alt="" />

            <button className={styles['header__links']}>ПОСЕТИТЬ</button>

            </div>
            <div className={styles['header__right']}>

             <p className={styles['header__text']}>yyx990803</p>
             <p className={styles['header__text']}>Репозиториев: 10</p>
             <p className={styles['header__text']}>Создан: 2020-01-20</p>
             <p className={styles['header__text']}>Подписщиков: 1</p>
             <p className={styles['header__text']}>Подписок: 1</p>

            </div>

        </div>
        <div className={styles['header__info']}>
          <h2 className={styles['header__title']}>Сортировка</h2>
          <div className={styles['header__menu']}>
            <h2 className={styles['header__titl']}>ИМЯ</h2>
            <h2 className={styles['header__titl']}>ЗВЕЗДЫ</h2>
            <h2 className={styles['header__titl']}>ДАТА</h2>
            
            

          </div>

        </div>
        <div className={styles['main']}>
          <div className={styles['main__title']}>
          <h2 className={styles['main__pro']}>VUE</h2>
          <p className={styles['main__text']}>Кол-во звёзд: 0</p>
          <p className={styles['main__text']}>Дата добавления: 2022-05-30</p>
          </div>
          <button className={styles['main__btn']}>ПОСЕТИТЬ</button>

        </div>
        <div className={styles['main']}>
          <div className={styles['main__title']}>
          <h2 className={styles['main__pro']}>VUE</h2>
          <p className={styles['main__text']}>Кол-во звёзд: 0</p>
          <p className={styles['main__text']}>Дата добавления: 2022-05-30</p>
          </div>
          <button className={styles['main__btn']}>ПОСЕТИТЬ</button>

        </div>

          
    </div>


   
  )
}

export default Main