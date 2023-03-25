(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}function n(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var o=function(){function e(t,r,o,i){var u=this,c=i.handleCardClick,a=i.handleTrashBtn,s=i.handleLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"showLike",(function(){u._likeBtn.classList.add("cards__item-btn_active")})),n(this,"removeLike",(function(){u._likeBtn.classList.remove("cards__item-btn_active")})),this._data=t,this._template=r,this._cardImage=t.link,this._cardText=t.name,this._fillPopup=c,this._handleTrashBtn=a,this._handleLike=s,this._ownerId=t.owner._id,this._myId=o,this._likes=t.likes,this.cardId=t._id}var r,o;return r=e,(o=[{key:"_getTemplate",value:function(){return this._cardElement=document.querySelector(this._template).content.querySelector(".cards__item").cloneNode(!0),this._cardElement}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".cards__item-img"),this._likeBtn=this._element.querySelector(".cards__item-btn"),this._likeCount=this._element.querySelector(".cards__item-like-count"),this._trashBtn=this._element.querySelector(".card__item-trash-btn"),this._setEventListeners(),this._elementImage.src=this._cardImage,this._elementImage.alt=this._cardText,this._element.querySelector(".cards__item-title").textContent=this._cardText,this._checkMyCard(),this.setLike(this._likes),this._checkOwnerLike(),this._element}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_checkMyCard",value:function(){this._ownerId!==this._myId&&this._trashBtn.remove()}},{key:"isLike",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._myId}))}},{key:"_checkOwnerLike",value:function(){this.isLike()?this.showLike():this.removeLike()}},{key:"setLike",value:function(e){this._likes=e,this._likeCount.textContent=this._likes.length}},{key:"_setEventListeners",value:function(){var e=this;this._trashBtn.addEventListener("click",(function(){e._handleTrashBtn()})),this._likeBtn.addEventListener("click",this._handleLike),this._elementImage.addEventListener("click",(function(){e._fillPopup(e._data)}))}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();const i=o;function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a(r.key),r)}}function a(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}const s=function(){function e(t,n){var r,o,i,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,i=function(e){u._inputList.length>=2?u._inputList.forEach((function(t){t.classList.remove(e.inputErrorClass),u._errorSpans=document.querySelectorAll("#".concat(t.id,"-error")),u._errorSpans.forEach((function(e){e.textContent=""}))})):u._inputList.forEach((function(t){t.classList.remove(e.inputErrorClass),u._errorSpan.textContent=""}))},(o=a(o="resetErrorSpan"))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,this._formSelector=n,this._obj=t,this._submitBtn=this._formSelector.querySelector(t.buttonSelector),this._inputList=Array.from(this._formSelector.querySelectorAll(t.inputSelector))}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){var e=this;this._form=this._formSelector,this._form.addEventListener("submit",this._disableDefaultEvent),this._form.addEventListener("input",(function(){e._toggleBtn(e._form,e._obj)})),this._toggleBtn(this._form,this._obj),this._addInputListeners()}},{key:"_disableDefaultEvent",value:function(e){e.preventDefault()}},{key:"_handleFormInput",value:function(e,t){this._input=e.target,this._inputId=this._input.id,this._errorSpan=document.querySelector("#".concat(this._inputId,"-error")),this._input.validity.valid||(this._input.classList.add(t.inputErrorClass),this._errorSpan.textContent=this._input.validationMessage),this._input.validity.valid&&(this._input.classList.remove(t.inputErrorClass),this._errorSpan.textContent="")}},{key:"_toggleBtn",value:function(e,t){this._isFormValid=e.checkValidity(),this._submitBtn.disabled=!this._isFormValid,this._submitBtn.classList.toggle(t.buttonDisabledClass,!this._isFormValid)}},{key:"_addInputListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(t){e._handleFormInput(t,e._obj)}))}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,p(r.key),r)}}function p(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===l(t)?t:String(t)}const y=function(){function e(t,n){var r,o,i,u=this,c=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,i=function(e){return u._container.prepend(e)},(o=p(o="addItem"))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,this._renderer=c,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,m(r.key),r)}}function m(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===h(t)?t:String(t)}const b=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=m(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(t),this._popupOpenClass="popup_opened",this._closeBtn=this._popup.querySelector(".popup__btn-close"),this._overlay=this._popup.querySelector(".popup__overlay")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add(this._popupOpenClass),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._closeBtn.addEventListener("click",(function(){e.close()})),this._overlay.addEventListener("click",(function(){e.close()}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}const k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".full-screen__image"),t._description=t._popup.querySelector(".full-screen__descriptions"),t}return t=u,(n=[{key:"open",value:function(e){this._image.src=e.link,this._image.alt=e.name,this._description.textContent=e.name,S(w(u.prototype),"open",this).call(this)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(b);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}const L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n,r=t.handleFormSubmit,o=t.handleClose;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=r,n._form=n._popup.querySelector(".popup__form"),n._formInputs=n._form.querySelectorAll(".popup__input"),n._submitBtn=n._popup.querySelector(".popup__btn-submit"),n._handleClose=o,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._formInputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(){e._submitForm(e._getInputValues())})),E(C(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._handleClose(),this._form.reset(),E(C(u.prototype),"close",this).call(this)}},{key:"changeBtnText",value:function(){this._submitBtn.textContent="Сохранение..."}},{key:"returnBtnText",value:function(){this._submitBtn.textContent="Сохранить"}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(b);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}const R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n,r=t.submitCallback;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitBtn=n._popup.querySelector(".popup__btn-submit"),n._form=n._popup.querySelector(".popup__form"),n._submit=r,n}return t=u,(n=[{key:"handleSubmitConfirm",value:function(e){this._submit=e}},{key:"open",value:function(e){this._data=e,console.log(this._data),I(q(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submit(e._data)})),I(q(u.prototype),"setEventListeners",this).call(this)}},{key:"changeBtnText",value:function(){this._submitBtn.textContent="Удаление..."}},{key:"returnBtnText",value:function(){this._submitBtn.textContent="Да"}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(b);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==A(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}var U=function(){function e(t){var n=t.userName,r=t.userProf,o=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userProfession=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._userName.textContent,e.about=this._userProfession.textContent,e.avatar=this._userAvatar.src,e}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userProfession.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e.avatar}}],n&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const F=U;function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==N(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}const M=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"sendAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"sendUserData",value:function(e){return fetch("".concat(this._url,"users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"sendNewCard",value:function(e){return fetch("".concat(this._url,"cards"),{headers:this._headers,method:"POST",body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{headers:this._headers,method:"DELETE"}).then(this._handleResponse)}},{key:"sendLike",value:function(e){return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{headers:this._headers,method:"PUT"}).then(this._handleResponse)}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var J=document.querySelector(".profile__avatar"),H=document.querySelector(".profile__edit-btn"),z=document.querySelector(".profile__add-btn"),$=document.querySelector(".popup__input_user_name"),G=document.querySelector(".popup__input_user_profession"),K=document.querySelector(".popup__form_edit-profile"),Q=document.querySelector(".popup__form_new-card"),W=document.querySelector(".popup__form_update-user-img"),X=(document.querySelector(".full-screen__descriptions"),document.querySelector(".full-screen__image"),document.querySelector(".profile__user-name"),document.querySelector(".profile__profession"),{formSelector:".popup__form",inputSelector:".popup__input",inputErrorClass:"popup__input_type_error",buttonSelector:".popup__btn-submit",buttonDisabledClass:"popup__btn-submit_disabled"});function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Z,ee=new M({url:"https://mesto.nomoreparties.co/v1/cohort-62/",headers:{authorization:"0924fc4a-7677-45df-b079-60f5e85d79cd","Content-Type":"application/json"}});Promise.all([ee.getUserInfo(),ee.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Z=o._id,te.setUserInfo(o),te.setUserAvatar(o),console.log(i),ce.renderItems(i.reverse())})).catch((function(e){return console.log(e)}));var te=new F({userName:".profile__user-name",userProf:".profile__profession",userAvatar:".profile__avatar"}),ne=new R(".popup-delete-confirm",{submitCallback:function(e){ne.changeBtnText(),Promise.resolve(ee.deleteCard(e)).then((function(){ne.close()})).catch((function(e){console.log(e)})).finally((function(){ne.returnBtnText()}))}});ne.setEventListeners();var re=new k(".popup-image");re.setEventListeners();var oe=new L(".popup-update-user-img",{handleFormSubmit:function(e){oe.changeBtnText(),Promise.resolve(ee.sendAvatar(e)).then((function(e){te.setUserAvatar(e)})).catch((function(e){return console.log(e)})).finally((function(){oe.returnBtnText()})),oe.close()},handleClose:function(){fe.resetErrorSpan(X)}});oe.setEventListeners();var ie=new L(".popup-edit",{handleFormSubmit:function(e){ie.changeBtnText(),Promise.resolve(ee.sendUserData(e)).then((function(e){te.setUserInfo(e)})).catch((function(e){return console.log(e)})).finally((function(){ie.returnBtnText()})),ie.close()},handleClose:function(){se.resetErrorSpan(X)}});ie.setEventListeners();var ue=new L(".popup-add",{handleFormSubmit:function(e){ue.changeBtnText(),Promise.resolve(ee.sendNewCard(e)).then((function(e){ce.addItem(ae(e))})).catch((function(e){return console.log(e)})).finally((function(){ue.returnBtnText()})),ue.close()},handleClose:function(){le.resetErrorSpan(X)}});ue.setEventListeners();var ce=new y({renderer:function(e){var t=ae(e);ce.addItem(t)}},".cards__list"),ae=function(e){var t=new i(e,"#card-item",Z,{handleCardClick:function(e){re.open(e)},handleTrashBtn:function(){ne.open(t.cardId),ne.handleSubmitConfirm((function(){ne.changeBtnText(),ee.deleteCard(t.cardId).then((function(){t.deleteCard(),ne.close()})).catch((function(e){return console.log(e)})).finally((function(){ne.returnBtnText()}))}))},handleLike:function(){t.isLike()?(console.log(t.isLike),ee.deleteLike(t.cardId).then((function(e){t.removeLike(),t.setLike(e.likes)})).catch((function(e){return console.log(e)}))):ee.sendLike(t.cardId).then((function(e){console.log(e),t.showLike(),t.setLike(e.likes)})).catch((function(e){return console.log(e)}))}});return t.generateCard()},se=new s(X,K),le=new s(X,Q),fe=new s(X,W);H.addEventListener("click",(function(){var e=te.getUserInfo();$.value=e.name,G.value=e.about,ie.open(),se.enableValidation()})),z.addEventListener("click",(function(){ue.open(),le.enableValidation()})),J.addEventListener("click",(function(){oe.open(),fe.enableValidation()}))})();