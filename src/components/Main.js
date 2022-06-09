import userPic from '../images/user.png';

function handleEditAvatarClick() {
  document.querySelector('.popup-avatar').classList.add('popup_opened')
};

function handleEditProfileClick() {
  document.querySelector('.popup-profile').classList.add('popup_opened');
}

function handleAddPlaceClick() {
  document.querySelector('.popup-add-card').classList.add('popup_opened');
};

export default function Main() {
  return (
    <main>
      <section className='profile'>
        <button className='profile__avatar-btn' onClick={handleEditAvatarClick}>
          <img
            className='profile__avatar profile__avatar_opacity'
            src={userPic}
            alt='Аватар пользователя'
          />
        </button>
        <div className='profile__info'>
          <div className='profile__container'>
            <h1 className='profile__name'>пользователь</h1>
            <button
              className='profile__edit-btn btn-opacity'
              type='button'
              onClick={handleEditProfileClick}
            ></button>
          </div>
          <p className='profile__job'>профессия</p>
        </div>
        <button
          className='profile__add-btn btn-opacity'
          type='button'
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className='gallery'>
        <ul className='gallery__cards'>
          <template className='gallery__template'>
            <li className='gallery__item'>
              <button
                className='gallery__delete-btn gallery__delete-btn_hidden'
                type='button'
              ></button>
              <img className='gallery__img' src='#' alt='макет' />
              <div className='gallery__text'>
                <h2 className='gallery__title'></h2>
                <div className='gallery_like'>
                  <button className='gallery__like-btn' type='button'></button>
                  <div className='gallery__like-qty'>1</div>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </section>
    </main>
  );
}
