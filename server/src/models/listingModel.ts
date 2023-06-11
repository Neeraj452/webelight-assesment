
import { Schema, model } from 'mongoose'

// Define the interface for your document (optional but recommended)
interface categoryItf  {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating:number
}

interface item {
  category: string;
  categoryItem: categoryItf[];
}
const CategorySchema: Schema = new Schema<categoryItf> (
  {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
);
// Create a new schema
const ItemSchema: Schema = new Schema<item>(
  {
    category: {
      type: String,
      required: true,
    },
    categoryItem: [CategorySchema]

  },

);

 const CreateItemModol= model<item>("ItemList",ItemSchema)
export default CreateItemModol;
