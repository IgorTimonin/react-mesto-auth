import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className='header'>
      <Link className='header__logo' to='/' />
      <div className='header__user-block'>
        {props.loggedIn && (
          <div className='header__user-email btn-opacity'>
            {props.userEmail}
          </div>
        )}
        <Link
          className='header__user-btn btn-opacity'
          to={props.headerLinkPath}
        >
          {props.headerBtnText}
        </Link>
      </div>
    </header>
  );
}
