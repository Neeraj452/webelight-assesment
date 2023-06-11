import axios from 'axios';
interface data {
  price: any ;
  category: Array<any>; // Replace 'any' with the specific type of elements in the array
}

interface purchase{
 purchaseItems:any[]
}
export const getItemList = async (data:data) => {
  const response = await axios.post('http://localhost:8080/get-item-list',data);
  return response.data;
};
export const purchaseItem = async (data:purchase) => {
  const response = await axios.post('http://localhost:8080/purchase-item',data);
  return response.data;
};
export const getCategoryItem = async () => {
  const response = await axios.get('http://localhost:8080/get-category-item',);
  return response.data;
};
export const getPurchaseItemList = async () => {
  const response = await axios.get('http://localhost:8080/get-purchase-item-list',);
  return response.data;
};