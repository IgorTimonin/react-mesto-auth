import { Link } from "react-router-dom";

export default function Header(props) {
// console.log(props.userEmail);
  return (
    <header className='header'>
      <Link className='header__logo' to='/' />
      <div className='header__user-block'>
        <div
          className={`${props.loggedIn ? 'header__user-email btn-opacity' : 'popup__btn_hide'}`}
        >
          {props.userEmail}
        </div>
        <button
          className='header__user-btn btn-opacity'
          onClick={props.headerBtnAction}
        >
          {props.headerBtnText}
        </button>
      </div>
    </header>
  );
}
