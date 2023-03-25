import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import Section from "../components/Section.js"
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupConfirm from "../components/PopupConfirm.js"
import UserInfo from "../components/UserInfo.js"
import Api from "../components/Api.js"
import './index.css'
import { popupConfirmDelete, btnEditProfile, btnAddCard, popupEditProfileUserNameInput, popupEditProfileUserProfessionInput, popupEditProfileForm, popupAddCardForm, popupFullScreenSelector, cardListSelector, formValidationObj, UserProfileSelectorObj, popupUpdateUserImage, userAvatar } from '../utils/constants.js'


// Api
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-62/',
  headers: {
    authorization: '0924fc4a-7677-45df-b079-60f5e85d79cd',
    'Content-Type': 'application/json'
  }
})

let myId
// Рендер карточек на страницу получения данных пользователя
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    myId = user._id
    userInfo.setUserInfo(user)
    userInfo.setUserAvatar(user)

    console.log(cards)
    cardSection.renderItems(cards.reverse())
  })
  .catch(err => console.log(err))

// Работа с данными пользователя
const userInfo = new UserInfo(UserProfileSelectorObj)

// Попап подтверждения удаления

const confirmDelete = new PopupConfirm(popupConfirmDelete, {
  submitCallback: (data) => {
    confirmDelete.changeBtnText()
    Promise.resolve(api.deleteCard(data))
      .then(() => {
        confirmDelete.close()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        confirmDelete.returnBtnText()
      })
  }
})

confirmDelete.setEventListeners()

// Попап картинки
const popupWhitImage = new PopupWithImage(popupFullScreenSelector)
popupWhitImage.setEventListeners()

// Попап формы изменения аватара
const popupWithFormAvatar = new PopupWithForm('.popup-update-user-img', {
  handleFormSubmit: (data) => {
    popupWithFormAvatar.changeBtnText()
    Promise.resolve(api.sendAvatar(data))
      .then(res => {
        userInfo.setUserAvatar(res)
      })
      .catch(err => console.log(err))
      .finally(() => {
        popupWithFormAvatar.returnBtnText()
      })
    popupWithFormAvatar.close()
  },
  handleClose: () => {
    formUpdateUserImage.resetErrorSpan(formValidationObj)
  }
})
popupWithFormAvatar.setEventListeners()

// Попап формы изменения данных Пользователя
const popupWithFormEdit = new PopupWithForm('.popup-edit', (data) => {
  popupWithFormEdit.changeBtnText()
  Promise.resolve(api.sendUserData(data))
    .then(res => {
      userInfo.setUserInfo(res)
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupWithFormEdit.returnBtnText()
    })
  popupWithFormEdit.close()
},
  () => {
    formEditProfileValidator.resetErrorSpan(formValidationObj)
  }
)
popupWithFormEdit.setEventListeners()

// Попап формы добавления карточки
const popupWithFormAddCard = new PopupWithForm('.popup-add', (data) => {
  popupWithFormAddCard.changeBtnText()
  Promise.resolve(api.sendNewCard(data))
    .then(res => {
      cardSection.addItem(createCard(res))
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupWithFormAddCard.returnBtnText()
    })
  popupWithFormAddCard.close()
},
  () => {
    formAddCardValidator.resetErrorSpan(formValidationObj)
  }
)
popupWithFormAddCard.setEventListeners()

// Добавляем на страницу 6 исходных карточек
const cardSection = new Section({
  renderer: (item) => {
    const card = createCard(item);
    cardSection.addItem(card)
  }
}, cardListSelector);

// Возвращаем разметку карточки со слушателями
const createCard = (data) => {
  const cardClass = new Card(data,
    '#card-item',
    myId,
    {
      handleCardClick: (data) => {
        popupWhitImage.open(data)
      },
      handleTrashBtn: () => {
        confirmDelete.open(cardClass.cardId)
        confirmDelete.handleSubmitConfirm(() => {
          confirmDelete.changeBtnText()
          api.deleteCard(cardClass.cardId)
            .then(() => {
              cardClass.deleteCard()
              confirmDelete.close()
            })
            .catch(err => console.log(err))
            .finally(() => {
              confirmDelete.returnBtnText()
            })
        })
      },
      handleLike: () => {
        if (cardClass.isLike()) {
          console.log(cardClass.isLike)
          api.deleteLike(cardClass.cardId)
            .then((data) => {
              cardClass.removeLike()
              cardClass.setLike(data.likes)
            })
            .catch(err => console.log(err))
        } else {
          api.sendLike(cardClass.cardId)
            .then((data) => {
              console.log(data)
              cardClass.showLike()
              cardClass.setLike(data.likes)
            })
            .catch(err => console.log(err))
        }
      }
    }
  )

  const cardElement = cardClass.generateCard()
  return cardElement
}


// Валидация форм
const formEditProfileValidator = new FormValidator(formValidationObj, popupEditProfileForm)
const formAddCardValidator = new FormValidator(formValidationObj, popupAddCardForm)
const formUpdateUserImage = new FormValidator(formValidationObj, popupUpdateUserImage)

// Слушателеи кнопкок открытия попапов
btnEditProfile.addEventListener('click', function () {
  const profileValues = userInfo.getUserInfo()
  popupEditProfileUserNameInput.value = profileValues.name
  popupEditProfileUserProfessionInput.value = profileValues.about
  popupWithFormEdit.open()
  formEditProfileValidator.enableValidation()
})
btnAddCard.addEventListener('click', function () {
  popupWithFormAddCard.open()
  formAddCardValidator.enableValidation()
})
userAvatar.addEventListener('click', function () {
  popupWithFormAvatar.open()
  formUpdateUserImage.enableValidation()
})
