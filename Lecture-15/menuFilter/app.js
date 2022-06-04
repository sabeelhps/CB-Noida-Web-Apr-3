
const menu = [
    'Kadhai Paneer', 'Dal Makhni', 'Butter Chicken', 'Paneer Do Pyaza', 'Dal Fry',
    'Paneer Lababdar', 'Chicken Biryani', 'Egg Curry', 'Kadhai Chicken', 'Garlic Bread',
    'Onion Rings', 'Garlic Naan', 'French Fries', 'Onion Pizza', 'Pinneapple Pizza',
    'Pastry', 'Onion Dosa', 'Paav Bhaaji', 'Gol Gappe', 'Misal Paav', 'Tandoori Chicken',
    'Mutton Biryani', 'Chicken Momos', 'Veg Momos', 'Paneer Momos', 'Sandwich', 'Butter Roti',
    'Tawa Roti'
];



function isVeg(food) {
    if (food.toLowerCase().includes('chicken') || food.toLowerCase().includes('mutton') || food.toLowerCase().includes('egg')) {
        return false;
    }
    return true;
}

function isOnionGarlicFree(food) {
    if (food.toLowerCase().includes('onion') || food.toLowerCase().includes('garlic')) {
        return false;
    }
    return true;
}

const vegMenu = menu.filter(isVeg);
const jainMenu = menu.filter(isVeg).filter(isOnionGarlicFree);

console.log(menu);
console.log(vegMenu);
console.log(jainMenu);