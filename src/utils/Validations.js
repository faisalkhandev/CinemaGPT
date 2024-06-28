export const Validation = (name, email, password) => {

    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    const isNameValid = /^[a-zA-Z0-9]{4,}$/.test(name);


    if (!isEmailValid) return "The email is not valid"

    if (!isPasswordValid) return "The password is not valid"

    if (!isNameValid) return "The name is not valid"


    return null
}