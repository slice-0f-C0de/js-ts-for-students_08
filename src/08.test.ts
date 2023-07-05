import {usersObj} from "./08";

type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType

beforeEach(() => {
    users = {
        "27": {id: 27, name: "Daniil"},
        "72": {id: 72, name: "Ksenia"},
        "69": {id: 69, name: "Ilya"},
        "96": {id: 96, name: "Ruslan"}
    }
})

test("should update corresponding user", () => {
    users["27"].name = "Danila"

    expect(users["27"].name).toBe("Danila")
})