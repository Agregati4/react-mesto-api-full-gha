import logo from '../images/logo.svg';
import * as React from 'react';

function Header(props) {
  const [ isMobileMenuActive, setIsMobileMenuActive ] = React.useState(false);
  const isMobileMenuNeed = !isMobileMenuActive && props.loggedIn;

  function handleMobileMenuActive() {
    setIsMobileMenuActive((state) => state = !state);
  };

  React.useEffect(() => {
    setIsMobileMenuActive(false);
  }, [props.loggedIn]);

  return (
    <header className={ `header ${ !props.loggedIn && "header_signin" }` }>
      <div className={ `header__mobile-menu ${ !props.loggedIn && "header__mobile-menu_signin" }` }>
        <img className="logo" src={ logo } alt="Логотип" />
        <button className={
            `header__nav
            ${ !props.loggedIn && "mobileDisplayNone" }
            ${ !isMobileMenuActive && "header__nav_burger"}`
          } onClick={ handleMobileMenuActive }></button>
      </div>
      {props.loggedIn && <p className={ `header__email ${ !isMobileMenuActive && "mobileDisplayNone"}` }>{ props.email }</p> }
      <button onClick={ props.onButtonClick } className={
        `header__button
        ${ !props.loggedIn && "header__button_signin" }
        ${ isMobileMenuNeed && "mobileDisplayNone"}`
      }>{ props.buttonText }</button>
    </header>
  )
}

export default Header;