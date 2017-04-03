## safeGet

### Intall

```
npm i safeGet
```


### Example

```
import safeGet from 'safeGet'


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