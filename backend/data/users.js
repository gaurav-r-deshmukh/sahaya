import bcrypt from "bcryptjs"

const users = [
    {
        name: "Gaurav Rajendra Deshmukh",
        age: 22,
        gender: "Male",
        email: "gaurav@gmail.com",
        contact: "1231231231",
        password: bcrypt.hashSync("gaurav123", 10)
    },
    {
        name: "Sammeet Sunil Nimgole",
        age: 22,
        gender: "Male",
        email: "sammeet@gmail.com",
        contact: "2231231231",
        password: bcrypt.hashSync("sammeet123", 10)
    },
    {
        name: "Prasad Mmanojkumar Kukde",
        age: 22,
        gender: "Male",
        email: "prasad@gmail.com",
        contact: "3231231231",
        password: bcrypt.hashSync("prasad123", 10)
    }
]

export default users