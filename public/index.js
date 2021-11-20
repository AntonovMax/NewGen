let btn = document.getElementById('1')
const outer_outer = document.getElementById('outer_outer')
const outer = document.getElementById('outer')
const inner = document.getElementById('inner')

class UserAuthAPI {

  constructor(username, password) {
    this._username = username
    this._password = password
    this.auth = false
  }

  get username() {
    return this.username
  }

  get password() {
    throw { error: 'Password is not allowed' }
  }

  set username(value) {
    this._username = value
  }

  authenticate() {
    
    const xhr = new XMLHttpRequest()

    let json = JSON.stringify({
      name: this._username
    })

    xhr.open('POST', '/')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.responseType = 'json'
    xhr.onload = function () {
      this.auth = xhr.response.authenticate
      // console.log('response - ', xhr.response.authenticate);
      // console.log('auth - ', this.auth);
      return 'onload is - ', this.auth
    }

    xhr.send(json)

    // console.log(this.auth);

    return 'main return is ' + this.auth
  }
}




btn.addEventListener('click', async (event) => {
  event.preventDefault()
  const user = new UserAuthAPI('John', '123')
  user.name = 'Nina'
  console.log(user.name);
  const isAuth = await user.authenticate()
  console.log(isAuth);
})


// поднятие

outer_outer.addEventListener('click', () => {
  console.log('outer_outer');
})

outer.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log('outer');
}) 

inner.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log('inner');
}, true)
