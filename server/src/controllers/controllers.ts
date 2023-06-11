import { Request, Response } from 'express';
import CreateItemModol from '../models/listingModel';
import UserModal from '../models/users';
import categoryModel from '../models/categoryModal';
import PurchaseModel from "../models/puchaseModel"

export const CreateUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        let { name, dept } = req.body
        const todo = new UserModal({ name, dept });
        await todo.save();
        res.status(201).json({ todo });
        console.log('Document inserted');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}


export const createItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const item = new CreateItemModol(req.body);
        await item.save();
        res.status(201).json({ item });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}
export const getItemList = async (req: Request, res: Response): Promise<void> => {
    try {
        const { category,price } = req.body;
        
       
        if (category?.length > 0 && price) {
            const filter = {
                category: category
            };
            let items = await CreateItemModol.find(filter);
            const filteredItems: object[] = [];
             let data =items.map((item:any) => {
                const { categoryItem,category } = item;
                 categoryItem.forEach((category:any) => {
                    if (category.price <= price) {
                        filteredItems.push(category) 
                     }
                 });
                 return {
                     category: category,
                     categoryItem:filteredItems
                 }
            });
             res.status(200).json(data);
        } else if(category?.length > 0){
             const filter = {
                category: category
            };
            let data = await CreateItemModol.find(filter);
             res.status(200).json(data);
        } else if (price) {
            let items = await CreateItemModol.find()
            let filteredItems: object[] = [];
            let data = items.map((item: any) => {
                 filteredItems=[]
                const { categoryItem,category } = item;
                 categoryItem.forEach((category:any) => {
                    if (category.price <= price) {
                        filteredItems.push(category) 
                     }
                 });
                if (filteredItems?.length > 0) {
                   return {
                     category: category,
                     categoryItem:filteredItems
                 } 
                } else {
                    return {
                     category: "",
                     categoryItem:filteredItems
                 }
                }
                 
                 
             });
              res.status(200).json(data);
        }
        else {
            let data = await CreateItemModol.find()
            res.status(200).json(data);
            
        }
       
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
export const getCategoryItem = async (req: Request, res: Response) => {
    try {
        let data= await categoryModel.find()
        res.status(200).json(data)
    }
    catch (error)
     {
        console.log(error)
        res.status(500).json(error)
    }
}

export const purchaseItem = async (req: Request, res: Response) => {
    try {
        let { purchaseItems } = req?.body
        console.log({purchaseItems})
        let item = new PurchaseModel({purchaseItems})
        await item?.save()
        res.status(201).json({ item });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}
export const purchaseItemList = async (req: Request, res: Response) => {
    try {
        let item = await PurchaseModel.find()
        let data:object[]=[]
        item?.forEach((e) => {
            e?.purchaseItems?.forEach((el) => {
                data.push(el)
            })
        })
        res.status(200).json( data );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}





