import { Schema, model } from 'mongoose'

interface User{
    name: string,
    dept: string,
}
const useSchema = new Schema<User>({
    name: {
        type:String,
    },
    dept: {
        type:String,
    }
})
const UserModal = model<User>('User', useSchema)
export default UserModal