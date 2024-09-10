// Importing images
import controller from '../img/controller.png';
import keyboard from '../img/keyboard.png';
import chair from '../img/chair.png';
import screen from '../img/screen.png';
import bag from '../img/bestselling/bag.png';
import Gucci from '../img/bestselling/Gucci.png';
import gammaxx from '../img/bestselling/gammaxx.png';
import table from '../img/bestselling/table.png';
import dogfood from '../img/ExploreProduct/dogfood.png';
import camera from '../img/ExploreProduct/camera.png';
import laptop from '../img/ExploreProduct/laptop.png';
import cleanser from '../img/ExploreProduct/cleanser.png';
import CarKids from '../img/ExploreProduct/CarKids.png';
import soccershoes from '../img/ExploreProduct/soccershoes.png';
import jacket from '../img/ExploreProduct/jacket.png';
import controller1 from '../img/ExploreProduct/controller1.png';

const products = [
    {
        "id": "1",
        "productName": "HAVIT HV-G92 Gamepad",
        "salePrice": "120",
        "price": "160",
        "discount": "40",
        "image": controller,
        "imageDetail": [controller, controller, controller, controller],
        "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
        "id": "2",
        "productName": "AK-900 Wired Keyboard",
        "salePrice": "960",
        "price": "1160",
        "discount": "35",
        "image": keyboard,
        "imageDetail": [keyboard, keyboard, keyboard, keyboard],
        "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
        "id": "3",
        "productName": "S-Series Comfort Chair",
        "salePrice": "375",
        "price": "400",
        "discount": "25",
        "image": chair,
        "imageDetail": [chair, chair, chair, chair],
         "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
        "id": "4",
        "productName": "IPS LCD Gaming Monitor",
        "salePrice": "120",
        "price": "160",
        "discount": "40",
        "image": screen,
        "imageDetail": [screen, screen, screen, screen],
         "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
        "id": "5",
        "productName": "HAVIT HV-G92 Gamepad",
        "salePrice": "120",
        "price": "160",
        "discount": "40",
        "image": controller,
        "imageDetail": [controller, controller, controller, controller],
         "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
        "id": "9",
        "productName": "The north coat",
        "salePrice": "260",
        "price": "360",
        "discount": "25",
        "image": Gucci,
        "imageDetail": [Gucci, Gucci, Gucci, Gucci],
         "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
        "id": "10",
        "productName": "Gucci duffle bag",
        "salePrice": "960",
        "price": "1160",
        "discount": "30",
        "image": bag,
        "imageDetail": [bag, bag, bag],
         "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
        "id": "11",
        "productName": "RGB liquid CPU Cooler",
        "salePrice": "160",
        "price": "170",
        "discount": "35",
        "image": gammaxx,
        "imageDetail": [gammaxx, gammaxx, gammaxx],
         "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
        "id": "12",
        "productName": "Small BookSelf",
        "salePrice": "360",
        "price": "",
        "discount": "65",
        "image": table,
        "imageDetail": [table, table],
         "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
        "id": "13",
        "productName": "Breed Dry Dog Food",
        "salePrice": "50",
        "price": "100",
        "discount": "50",
        "image": dogfood,
        "imageDetail": [dogfood, dogfood, dogfood],
         "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
        "id": "14",
        "productName": "CANON EOS DSLR Camera",
        "salePrice": "120",
        "price": "360",
        "discount": "50",
        "image": camera,
        "imageDetail": [camera, camera],
         "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
        "id": "15",
        "productName": "ASUS FHD Gaming Laptop",
        "salePrice": "350",
        "price": "700",
        "discount": "50",
        "image": laptop,
        "imageDetail": [laptop, laptop, laptop],
         "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
        "id": "16",
        "productName": "Curology Product Set ",
        "salePrice": "250",
        "price": "500",
        "discount": "50",
        "image": cleanser,
        "imageDetail": [cleanser, cleanser],
         "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
        "id": "17",
        "productName": "Kids Electric Car",
        "salePrice": "660",
        "price": "960",
        "discount": "25",
        "image": CarKids,
        "imageDetail": [CarKids, CarKids, CarKids,CarKids],
         "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
        "id": "18",
        "productName": "Jr. Zoom Soccer Cleats",
        "salePrice": "560",
        "price": "1160",
        "discount": "50",
        "image": soccershoes,
        "imageDetail": [soccershoes, soccershoes, soccershoes],
         "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
        "id": "20",
        "productName": "Quilted Satin Jacket",
        "salePrice": "330",
        "price": "660",
        "discount": "50",
        "image": jacket,
        "imageDetail": [jacket, jacket, jacket],
         "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
        "id": "21",
        "productName": "Quilted Satin Jacket",
        "salePrice": "360",
        "price": "660",
        "discount": "45",
        "image": controller1,
        "imageDetail": [controller1, controller1, controller1],
         "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    }, 
    {
        "id": "22",
        "productName": "Quilted Satin Jacket",
        "salePrice": "150",
        "price": "660",
        "discount": "15",
        "image": jacket,
        "imageDetail": [jacket, jacket],
         "description" : "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    }
];

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const productData = { 
    getProducts,
    products
}
export default productData;
