import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "entrer votre nom"] 
    },
    firstname: {
        type:String,
        required: [true, "entrer votre prenom"] 
    },
    mail: {
        type: String,
        required: [true, "entrer votre mail"]
    },
    password: {
        type: String,
        required: [true, "entrer votre mot de passe"]
    }
})

const UserModel = mongoose.model('users', userSchema)
export default UserModel