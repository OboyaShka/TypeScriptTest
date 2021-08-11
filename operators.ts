 interface Person {
     name: string,
     age: number
 }

 type PersonKeys = keyof Person

 let key: PersonKeys = 'name'
 key = 'age'

 type User = {
    _id: number
     name: string
     email: string
     createdAt: Date
 }

 type UserKeys = Exclude<keyof User, '_id' | 'createAt'>
 type UserKeysNoMeta = Pick<User, 'name' | 'email'>

 let u1: UserKeys = 'name'
 // let u4: UserKeysNoMeta = 'name'