export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className='gallery__item' onClick={handleClick}>
      <button
        className='gallery__delete-btn gallery__delete-btn_hidden'
        type='button'
      ></button>
      <img className='gallery__img' src={card.link} alt={card.name} />
      <div className='gallery__text'>
        <h2 className='gallery__title'>{card.name}</h2>
        <div className='gallery_like'>
          <button className='gallery__like-btn' type='button'></button>
          <div className='gallery__like-qty'>{card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}
