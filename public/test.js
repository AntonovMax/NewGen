// function test(name) {
//     return 'Привет, ' + name;
// }

// var greating = test('Micha');


// function printLabel(labelledObj) {
//     console.log(labelledObj.label);
// }

// var myObj = { size: 10, label: 'kuka' };
// var label = printLabel(myObj);
// console.log('функция ---- ', greating);

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

  get username () {
    return this._username
  }

  get password () {
    throw 'Password not allowed'
  }

  set username (value) {
    this._username = value
  }

  set password (value) {
    this._password = value
  }

  authenticate_user () {
    let xhr = new XMLHttpRequest()

    let json = {
      name: this.username,
    }

    xhr.open('POST', '/', true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.responseType = 'json'
    xhr.onload = function () {
      this.auth = xhr.response
      console.log(xhr.response);
    }

    xhr.send(json)
  }
}

btn.addEventListener('click', async (event) => {
  event.preventDefault()
  const user = new UserAuthAPI('Ivan', 123)
  console.log(user);
  user.authenticate_user()
  console.log(user.auth);
})
