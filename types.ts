const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e22

const message: string = 'String'

const numberArray: number[] = [1, 2, 3, 4, 5]
const numberArray2: Array<number> = [1, 2, 3, 4, 5]

const words: string[] = ["A", "B"]

const contact: [string, number] =  ['Denis', 123]

let variable: any = 42

variable = 'New string'
variable = []

function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Имя')

function throwErr(msg: string):never {
    throw new Error(msg)
}

function infinity():never {
    while(true){
        console.log("123")
    }
}

type Login = string

const login: Login = 'admin'
// const login2: Login = 1 err

type ID = string | number
const id1: ID = 1234
const id2: ID = "1234"

type SomeType = string | null | undefined