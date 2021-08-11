// const arrayNumbers: Array<number> = [1,2,3,4,5]
const arrayNumbers: number[] = [1,2,3,4,5]
const arrayString: string[] = ["A","B"]

function reverse<T>(array: T[]): T[ ] {
    return array.reverse()
}

reverse(arrayNumbers)
reverse(arrayString)