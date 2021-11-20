let btn = document.getElementById('1')

class UserAuthAPI {


  constructor(username, password) {
    this._username = username
    this._password = password
  }

  get username() {
    return this._username
  }

  set username(value) {
    this._username = value
  }

  get password() {
    return 'Not allowed'
  }

  set password(value) {
    this._password = value
  }


  authenticate_user() {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      let json = JSON.stringify({
        name: this.username,
        password: this._password
      })
      xhr.open('POST', '/', true)
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.responseType = 'json'
      xhr.onload = function () {
        if (xhr.response.status = 200) {
          resolve(xhr.response)
        } else {
          let error = new Error('Ошибка аутентификации')
          // error.code = this.status
          reject(error)
        }
      }
      xhr.send(json)
    })

  }
}

btn.addEventListener('click', async (event) => {
  event.preventDefault()
  const response = new UserAuthAPI('Ivan', 123).authenticate_user()
 
  response
    .then((message) => {
      if (message.authenticate) {
        document.location.href = '/home'
      } 
    })
    .catch(err => alert(err))
})



