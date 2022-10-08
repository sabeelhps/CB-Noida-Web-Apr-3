import axios from 'axios';

const BACKEND_URL = 'http://localhost:3000';


export async function getAllFoods() {
    const res = await axios.get(`${BACKEND_URL}/api/v1/allfoods`);
    if (res.status !== 200) {
        throw new Error('something went wrong');
    }
    return res.data;
}

export async function placeOrderFromCart(data) {
    const res = await axios.post(`${BACKEND_URL}/api/v1/placeOrder`, { cart: data });
    if (res.status !== 201) {
        throw new Error('cannot place the order right now');
    }
    return res.data;
}