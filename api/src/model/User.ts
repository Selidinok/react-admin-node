import mongoose from "mongoose";
import bcrypt from 'bcrypt'

export type UserDocument = mongoose.Document & {
    email: string
    password: string
    firstName: string
    lastName: string
    comparePassword: comparePasswordFunction
}

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
})

type comparePasswordFunction = (candidatePassword: string, callback: (err: any, isMatch: any) => void) => Promise<mongoose.Error|boolean>

const comparePassword: comparePasswordFunction = async function (candidatePassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, this.password, (err: mongoose.Error, isMatch: boolean) => {
            if (err) {
                reject(err)
            } else {
                resolve(isMatch)
            }
        })
    })
}
userSchema.methods.comparePassword = comparePassword

export const User = mongoose.model<UserDocument>("User", userSchema)