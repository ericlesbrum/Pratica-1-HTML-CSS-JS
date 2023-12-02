export class DataBase {
    dbProducts = [
        {
            "prodCod": 1,
            "prodName": "Smartphone Galaxy S21",
            "costPrice": 799.99,
            "sellingPrice": 999.99,
            "amount": 50,
            "totalSelling": 50
        },
        {
            "prodCod": 2,
            "prodName": "Notebook Inspiron 15",
            "costPrice": 899.99,
            "sellingPrice": 1299.99,
            "amount": 30,
            "totalSelling": 30
        },
        {
            "prodCod": 3,
            "prodName": "Headphone Sony WH-1000XM4",
            "costPrice": 249.99,
            "sellingPrice": 349.99,
            "amount": 40,
            "totalSelling": 40
        },
        {
            "prodCod": 4,
            "prodName": "4K Smart TV LG 55",
            "costPrice": 1299.99,
            "sellingPrice": 1599.99,
            "amount": 20,
            "totalSelling": 20
        },
        {
            "prodCod": 5,
            "prodName": "Câmera DSLR Canon EOS Rebel T7i",
            "costPrice": 699.99,
            "sellingPrice": 899.99,
            "amount": 60,
            "totalSelling": 60
        },
        {
            "prodCod": 6,
            "prodName": "Apple AirPods Pro",
            "costPrice": 199.99,
            "sellingPrice": 249.99,
            "amount": 25,
            "totalSelling": 25
        },
        {
            "prodCod": 7,
            "prodName": "Console de Videogame PlayStation 5",
            "costPrice": 499.99,
            "sellingPrice": 699.99,
            "amount": 35,
            "totalSelling": 35
        },
        {
            "prodCod": 8,
            "prodName": "Monitor Ultrawide Dell 34",
            "costPrice": 899.99,
            "sellingPrice": 1199.99,
            "amount": 15,
            "totalSelling": 15
        },
        {
            "prodCod": 9,
            "prodName": "Impressora Multifuncional HP",
            "costPrice": 149.99,
            "sellingPrice": 199.99,
            "amount": 55,
            "totalSelling": 55
        },
        {
            "prodCod": 10,
            "prodName": "Mouse Gamer Logitech G Pro X",
            "costPrice": 79.99,
            "sellingPrice": 129.99,
            "amount": 28,
            "totalSelling": 28
        },
        {
            "prodCod": 11,
            "prodName": "Teclado Mecânico Corsair K95 RGB",
            "costPrice": 149.99,
            "sellingPrice": 199.99,
            "amount": 42,
            "totalSelling": 42
        },
        {
            "prodCod": 12,
            "prodName": "Máquina de Café Expresso Nespresso",
            "costPrice": 199.99,
            "sellingPrice": 299.99,
            "amount": 18,
            "totalSelling": 18
        },
        {
            "prodCod": 13,
            "prodName": "Fones de Ouvido Beats Solo Pro",
            "costPrice": 299.99,
            "sellingPrice": 349.99,
            "amount": 33,
            "totalSelling": 33
        },
        {
            "prodCod": 14,
            "prodName": "Geladeira Electrolux Frost Free",
            "costPrice": 799.99,
            "sellingPrice": 1099.99,
            "amount": 22,
            "totalSelling": 22
        },
        {
            "prodCod": 15,
            "prodName": "Cadeira Gamer DXRacer Formula Series",
            "costPrice": 329.99,
            "sellingPrice": 449.99,
            "amount": 48,
            "totalSelling": 48
        },
        {
            "prodCod": 16,
            "prodName": "Aspirador de Pó Robô iRobot Roomba",
            "costPrice": 499.99,
            "sellingPrice": 599.99,
            "amount": 10,
            "totalSelling": 10
        },
        {
            "prodCod": 17,
            "prodName": "Mochila Targus para Notebook",
            "costPrice": 69.99,
            "sellingPrice": 89.99,
            "amount": 38,
            "totalSelling": 38
        },
        {
            "prodCod": 18,
            "prodName": "Panela Elétrica de Arroz Britânia",
            "costPrice": 49.99,
            "sellingPrice": 69.99,
            "amount": 29,
            "totalSelling": 29
        },
        {
            "prodCod": 19,
            "prodName": "Ventilador de Torre Cadence",
            "costPrice": 89.99,
            "sellingPrice": 109.99,
            "amount": 45,
            "totalSelling": 45
        },
        {
            "prodCod": 20,
            "prodName": "Cabo USB-C Belkin",
            "costPrice": 19.99,
            "sellingPrice": 29.99,
            "amount": 50,
            "totalSelling": 50
        }
    ];
    constructor() {
        localStorage.setItem("PRODUCTS", JSON.stringify(this.dbProducts));
    }
    Add(key, object) {
        localStorage.setItem(key, object);
    }
    Get(key) {
        return localStorage.getItem(key);
    }
    Remove(key) {
        localStorage.removeItem(key);
    }
}