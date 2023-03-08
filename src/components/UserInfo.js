class UserInfo {
  constructor({userName, userProf}) {
    this._userName = document.querySelector(userName);
    this._userProfession = document.querySelector(userProf);
  }

  getUserInfo() {
    const userInfo = {}
    userInfo.name = this._userName.textContent;
    userInfo.prof = this._userProfession.textContent;
    return userInfo;
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userProfession.textContent = data.prof;
  }
}

export default UserInfo;
