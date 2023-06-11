import express, { Request, Response, } from 'express';
import { createItem,getCategoryItem,getItemList } from '../controllers/controllers';
import { purchaseItem } from '../controllers/controllers';
import { purchaseItemList } from '../controllers/controllers';
const router = express.Router();

router.post('/items', createItem);
router.post('/get-item-list',getItemList);
router.get('/get-category-item',getCategoryItem);
router.post('/purchase-item', purchaseItem);
router.get('/get-purchase-item-list', purchaseItemList);

export default router;