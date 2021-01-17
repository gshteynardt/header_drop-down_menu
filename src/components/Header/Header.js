import React, {useState} from "react";
import Logo from '../../images/logo.svg';
import './Header.css';
import {ReactComponent as Burger} from '../../images/burger.svg';
import {ReactComponent as Cross} from '../../images/close.svg';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <header className="header">

      <div className="logo header__logo">
        <img src={Logo} className="logo__img" alt="logo" />
        <p className="logo__title">Веб-стандарты</p>
        <p className="logo__tagline">Сообщество разработчиков</p>
      </div>

      <nav className={'menu header__menu'}>

        <button
          className={'menu__button'}
          aria-expanded={'false'}
          aria-controls={'menu__list'}
          onClick={() => setIsOpen(!isOpen)}
        >{
          isOpen
          ? <Cross className={'menu__icon'}/>
          : <Burger/>
        }
        </button>

        <ul className={`menu__list ${isOpen && "menu__list_open"}`} id={'menu__list'}>
          <li className="menu__item">
            <a href='#' className="menu__link menu__link_current">Статьи</a>
          </li>
          <li className="menu__item">
            <a className="menu__link menu__link_inactive">Подкаст</a>
          </li>
          <li className="menu__item">
            <a className="menu__link menu__link_inactive">Календарь</a>
          </li>
          <li className="menu__item">
            <a className="menu__link menu__link_inactive">О проекте</a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link menu__link_patron">Поддержать</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

