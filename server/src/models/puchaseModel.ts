import { Schema, model } from 'mongoose'


interface Category {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}

interface MyDocument {
  purchaseItems: Category[];

}

const purchaseSchema = new Schema<MyDocument>({
  purchaseItems: {
    type: [Schema.Types.Mixed] as any,
    required: true,
  },
  // Other properties in your schema
});


const PurchaseModel = model<MyDocument>("purchaseLists", purchaseSchema)
 export default PurchaseModel