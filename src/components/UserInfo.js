class UserInfo {
  constructor({userName, userProf, userAvatar}) {
    this._userName = document.querySelector(userName);
    this._userProfession = document.querySelector(userProf);
    this._userAvatar = document.querySelector(userAvatar)
  }

  getUserInfo() {
    const userInfo = {}
    userInfo.name = this._userName.textContent;
    userInfo.about = this._userProfession.textContent;
    userInfo.avatar = this._userAvatar.src;
    return userInfo;
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userProfession.textContent = data.about;
  }

  setUserAvatar(data) {
    this._userAvatar.src = data.avatar;
  }
}

export default UserInfo;
