import { useContext } from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike }) {
   function handleLikeClick() {
     onCardLike(card);
   }
  function handleClick() {
    onCardClick(card);
  };
  
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteBtnClassName = `gallery__delete-btn ${
    isOwn ? '' : 'gallery__delete-btn_hidden'
  }`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeBtnClassName = `gallery__like-btn ${
    isLiked ? 'gallery__like-btn_active' : ''
  }`;
  return (
    <>
      <li className='gallery__item'>
        <button
          className={cardDeleteBtnClassName}
          type='button'
          onClick={handleClick}
        ></button>
        <img className='gallery__img' src={card.link} alt={card.name} />
        <div className='gallery__text'>
          <h2 className='gallery__title'>{card.name}</h2>
          <div className='gallery_like'>
            <button
              className={cardLikeBtnClassName}
              type='button'
              onClick={handleLikeClick}
            ></button>
            <div className='gallery__like-qty'>{card.likes.length}</div>
          </div>
        </div>
      </li>
    </>
  );
}
