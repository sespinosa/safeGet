## simple-safe-get


### Build

if you need to build this locally just clone this repo and run

```
npm run build
```

you will find the file in `build/index.js`


This microlib only supports ES6 import, if anyone needs this in the browser open a issue.


### Intall

```
npm i simple-safe-get
```


### Example

```
import safeGet from 'simple-safe-get'


const test = {
  
  users: [
    {
      firstName: 'Rick',
      lastName: 'Sanchez',
      roles: [
        'Most intelligent mammal in the universe',
        'Scientist',
        'Rapper'
      ]
    },
    {
      firstName: 'Morty',
      lastName: 'Smith',
      roles: [
        'Grandson',
        'Kid',
        'Noob'
      ]
    }
  ]

}

console.log(safeGet(test, 'users.0.firstName'))
/* Output: 'Rick' */

console.log(safeGet(test, 'users.0.roles.0'))
/* Output: 'Most intelligent mammal in the universe' */

console.log(safeGet(test, 'users.1.roles.2'))
/* Output: 'Noob' */

```