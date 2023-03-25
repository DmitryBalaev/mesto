class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer
    this._container = document.querySelector(containerSelector)
  }
  renderItems(arr) {
    arr.forEach((item) => {
      this._renderer(item)
    });
  }

  addItem = (el) => this._container.prepend(el)

}


export default Section
