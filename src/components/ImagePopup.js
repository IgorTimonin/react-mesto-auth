function ImagePopup() {
    return (
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
    );
}

export default ImagePopup;