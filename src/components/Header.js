export default function Header() {
  return (
    <header className='header'>
      <a className='header__logo' href='#' />
      <div className='header__user-block'>
        <div className='header__user-email'>useremail@email.com</div>
        <button className='header__user-btn'>Выход</button>
      </div>
    </header>
  );
}
