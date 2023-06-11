import { Schema, model } from "mongoose";
interface category{
    name:string
}
const categorySchema = new Schema<category>({
    name: {
        type: String,
        required:true
    }
})
const categoryModel = model<category>('category-items', categorySchema)
export default categoryModel;
