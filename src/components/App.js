import { useState, useEffect } from 'react';
import '../index.css';
import userPic from '../images/user.png';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeletePopup from './ConfirmDeletePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] =
    useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setselectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({
    name: 'пользователь',
    about: 'профессия',
    avatar: userPic,
  });
  const [currentCard, setCurrentCard] = useState({});
  const userDataTargetUrl = 'https://nomoreparties.co/v1/cohort-41/users/me';
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards().then((cardsList) => {
      setCards(cardsList);
    }, []);
  });

  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточек
    api.likeSwitcher(card._id, isLiked).then((newCards) => {
      setCards((data) => data.map((c) => (c._id === card._id ? newCards : c)));
    });
  }

  function handleCardDeleteConfirm() {
    api.deleteCard(currentCard._id).then((newCards) =>
      // Отправляем запрос на удаление в API, получаем обновлённые данные карточек, фильтром создаём новый объект карточек, без карточки с удалённым id
      setCards((data) =>
        data.filter((c) => (c._id === currentCard._id ? newCards : c))
      )
    );
    closeAllPopups();
  }

  useEffect(() => {
    api.getUserData(userDataTargetUrl).then((userData) => {
      setCurrentUser(userData);
    });
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleDeleteClick = (cardId) => {
    setCurrentCard(cardId)
    setIsConfirmDeletePopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmDeletePopupOpen(false);
    handleCardClick('');
  };

  const handleCardClick = (data) => {
    setselectedCard(data);
  };

  const handleUpdateUser = (userData) => {
    api.setUserData(userDataTargetUrl, userData).then((newUserInfo) => {
      setCurrentUser(newUserInfo);
      closeAllPopups();
    });
  };

  const handleUpdateAvatar = (avatarLink) => {
    api
      .setUserAvatar(userDataTargetUrl, avatarLink.avatar)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      });
  };

  const handleAddPlaceSubmit = (cardData) => {
    api.setNewCard(cardData).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteClick}
        />
        <Footer />

        <ConfirmDeletePopup
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
          onConfirmCardDelete={handleCardDeleteConfirm}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
