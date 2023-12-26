class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Lal`
    }

    set password(value){
        this._password = value
    }
}

const lal = new User("Lal@gmail.lal", "abc")
console.log(lal.email);