if (module.hot) {
  module.hot.accept()
}

import '../scss/index.scss'

const state = {
  render(model) {
    this.representation(model)
    this.nap(model)
  },

  representation(data) {
    let representation = view.ready(data)
    view.display(representation)
  },

  nap: (model) => true
}

const model = {
  counter: Math.floor((Math.random() * 50) + 10),
  total: 0,

  present(data) {
    if (data) {
      model.total += model.counter
      model.counter = data
    }
    state.render(model)
  }
}

const actions = {
  sumar(e) {
    let numrandom = Math.floor((Math.random() * 50) + 10)
    model.present(numrandom)
  }
}

const view = {
  init(model) {
    return this.ready(model)
  },

  ready(data) {
    let btn = document.createElement('div')
    btn.className = 'btndiv'
    let t = document.createTextNode(data.counter)
    btn.appendChild(t)
    btn.addEventListener('click', actions.sumar)

    let total = document.createElement('div')
    let tal = document.createTextNode(data.total)
    total.appendChild(tal)
    btn.appendChild(total)
    return btn
  },

  display(representation) {
    let stateRepresentation = document.getElementById('container')
    stateRepresentation.innerHTML = ''
    stateRepresentation.appendChild(representation)
  }
}

view.display(view.init(model))