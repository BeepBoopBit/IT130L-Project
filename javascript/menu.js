let carts = document.querySelectorAll('.add-to-cart-button')

let prodcuts = [
    {
        name:'item1',
        tag: 'item1',
        price: '1',
        inCart: 0
    },
    {
        name:'item2',
        tag: 'item2',
        price: '1',
        inCart: 0
    },
    {
        name:'item3',
        tag: 'item3',
        price: '1',
        inCart: 0
    },
    {
        name:'item4',
        tag: 'item4',
        price: '1',
        inCart: 0
    },
    {
        name:'item5',
        tag: 'item5',
        price: '1',
        inCart: 0
    },
    {
        name:'item6',
        tag: 'item6',
        price: '1',
        inCart: 0
    },
    {
        name:'item7',
        tag: 'item7',
        price: '1',
        inCart: 0
    },
    {
        name:'item8',
        tag: 'item8',
        price: '1',
        inCart: 0
    },
    {
        name:'item9',
        tag: 'item9',
        price: '1',
        inCart: 0
    },
    {
        name:'item10',
        tag: 'item10',
        price: '1',
        inCart: 0
    },
    {
        name:'item11',
        tag: 'item11',
        price: '1',
        inCart: 0
    },
    {
        name:'item12',
        tag: 'item12',
        price: '1',
        inCart: 0
    },
    {
        name:'item13',
        tag: 'item13',
        price: '1',
        inCart: 0
    },
    {
        name:'item14',
        tag: 'item14',
        price: '1',
        inCart: 0
    },
    {
        name:'item15',
        tag: 'item15',
        price: '1',
        inCart: 0
    },
    {
        name:'item16',
        tag: 'item16',
        price: '1',
        inCart: 0
    },
    {
        name:'item17',
        tag: 'item17',
        price: '1',
        inCart: 0
    },
    {
        name:'item18',
        tag: 'item18',
        price: '1',
        inCart: 0
    },
    {
        name:'item19',
        tag: 'item19',
        price: '1',
        inCart: 0
    },
    {
        name:'item20',
        tag: 'item20',
        price: '1',
        inCart: 0
    },

]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(prodcuts[i]);
        totalCost(prodcuts[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    
    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1); 
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        } 
    }
    

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        product.price = parseInt(product.price)
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else {
        localStorage.setItem("totalCost", product.price);
    }

}

onLoadCartNumbers()