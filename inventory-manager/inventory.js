const inventory = [
    { id: 1, name: "Mechanical Keyboard", category: "Peripherals", price: 250, quantity: 10 },
    { id: 2, name: "Gamer Mouse", category: "Peripherals", price: 120, quantity: 5 },
    { id: 3, name: "24 Monitor", category: "Monitors", price: 900, quantity: 3 }
]

function addProduct(name, category, price, quantity){
    const newProduct = {
        id: inventory.length + 1,
        name: name,
        category: category,
        price: price,
        quantity: quantity
    }

    inventory.push(newProduct)
    return newProduct
}

