import Header from "./Header";

export default function PageWithForm(props) {
  return (
    <div className='auth'>
      <Header
        headerBtnText={props.headerBtnText}
        headerLinkPath={props.headerLinkPath}
      />
      <div className='auth__container'>
        <h2 className='auth__title'>{props.title}</h2>
        <form
          onSubmit={props.onSubmit}
          className={`auth__form auth__${props.name}-form popup__form`}
          name='Form'
          action='#'
          noValidate
        >
          <input
            id='user-email-input'
            className='auth__field popup__form-input'
            type='email'
            //   value=''
            //   onChange={}
            name='userEmail'
            placeholder='Email'
            required
          />
          <span className='user-email-input-error input-error_auth'>
            Введите email.
          </span>
          <input
            id='user-password-input'
            className='auth__field popup__form-input'
            type='password'
            //   value=''
            //   onChange={}
            name='userPassword'
            placeholder='Пароль'
            required
          />
          <span className='user-password-input-error input-error_auth'>
            Введите пароль.
          </span>
          <button
            className='auth__btn-save auth__form-submit btn-opacity'
            type='submit'
          >
            {props.btnText}
          </button>
          {props.children}
        </form>
      </div>
    </div>
  );
}
