import '../index.css';

function App() {
  return (
    <>
      <div>
        <div className='popup popup-submit'>
          <div className='popup__container'>
            <button
              className='popup__btn-close btn-opacity'
              type='button'
            ></button>
            <h2 className='popup__title'>Вы уверены?</h2>
            <button
              className='popup__btn-save popup__form-submit'
              type='button'
            >
              Да
            </button>
          </div>
        </div>
        <div className='popup popup-avatar'>
          <div className='popup__container'>
            <button
              className='popup__btn-close btn-opacity'
              type='button'
            ></button>
            <h2 className='popup__title'>Обновить аватар</h2>
            <form
              className='popup__form popup__avatar-form'
              name='avatar-form'
              action='#'
              novalidate
            >
              <input
                id='avatar-url-input'
                className='popup__field popup__field_newcard-adress popup__form-input'
                type='url'
                value=''
                name='avatarLink'
                placeholder='Ссылка на картинку'
                required
                autocomplete='off'
              />
              <span className='avatar-url-input-error input-error'>
                Введите адрес аватара.
              </span>
              <button
                className='popup__btn-save popup__form-submit'
                type='submit'
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className='popup popup-profile'>
          <div className='popup__container'>
            <button
              className='popup__btn-close btn-opacity'
              type='button'
            ></button>
            <h2 className='popup__title'>Редактировать профиль</h2>
            <form
              className='popup__form popup__profile-form'
              name='profile-form'
              action='#'
              novalidate
            >
              <input
                id='name-input'
                className='popup__field popup__field_type_name popup__form-input'
                type='text'
                value=''
                name='name'
                placeholder='Введите имя'
                minlength='2'
                maxlength='40'
                required
                autocomplete='off'
              />
              <span className='name-input-error input-error'>
                Вы пропустили это поле.
              </span>
              <input
                id='job-input'
                className='popup__field popup__field_type_job popup__form-input'
                type='text'
                value=''
                name='about'
                placeholder='Введите род деятельности'
                minlength='2'
                maxlength='200'
                required
                autocomplete='off'
              />
              <span className='job-input-error input-error'>
                Вы пропустили это поле.
              </span>
              <button
                className='popup__btn-save popup__form-submit'
                type='submit'
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className='popup popup-add-card'>
          <div className='popup__container'>
            <button
              className='popup__btn-close btn-opacity'
              type='button'
            ></button>
            <h2 className='popup__title'>Новое место</h2>
            <form
              className='popup__form popup__newcard-form'
              name='newcard-form'
              action='#'
              novalidate
            >
              <input
                id='newcard-name-input'
                className='popup__field popup__field_newcard-name popup__form-input'
                type='text'
                value=''
                name='cardName'
                placeholder='Название'
                minlength='2'
                maxlength='30'
                required
                autocomplete='off'
              />
              <span className='newcard-name-input-error input-error'>
                Вы пропустили это поле.
              </span>
              <input
                id='newcard-url-input'
                className='popup__field popup__field_newcard-adress popup__form-input'
                type='url'
                value=''
                name='cardAdress'
                placeholder='Ссылка на картинку'
                required
                autocomplete='off'
              />
              <span className='newcard-url-input-error input-error'>
                Введите адрес сайта.
              </span>
              <button
                className='popup__btn-save popup__form-submit'
                type='submit'
              >
                Создать
              </button>
            </form>
          </div>
        </div>
        <div className='popup popup_fullsize'>
          <figure className='popup__figure'>
            <button
              className='popup__btn-close btn-opacity'
              type='button'
            ></button>
            <img className='popup__full-photo' src='#' alt='макет' />
            <figcaption className='popup__figcaption'></figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}

export default App;
