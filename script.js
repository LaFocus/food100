// Основа

// Создаем основной Объект с продуктами
const product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 400,
        amount: 0,
        get Summ() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        }
    },
    freshBurger: {
        name: 'Гамбургер FRESH',
        price: 20500,
        kcall: 500,
        amount: 0,
        get Summ() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 700,
        amount: 0,
        get Summ() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        }
    }
}
// Создаем доп Объект с модификациями
const extraProduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 500,
        kcall: 50
    },
    lettuce: {
        name: 'Салатный лист',
        price: 300,
        kcall: 10
    },
    cheese: {
        name: 'Сыр',
        price: 400,
        kcall: 30
    }
}


const loading = document.querySelector('.header__timer-extra'),
    btnPlusOrMinus = document.querySelectorAll('.main__product-btn')


let loadingNum = 0
let loadingSpeed = 0
function loadingFunc() {
    switch (loadingNum) {
        case 20:
            loadingSpeed = 20
            break;
        case 50:
            loadingSpeed = 50
            break;
        case 70:
            loadingSpeed = 100
            break;
        case 90:
            loadingSpeed = 300
            break;
        case 98:
            loadingSpeed = 1000
            break;
    }

    if (loadingNum < 100) {
        loadingNum++
        loading.innerHTML = loadingNum
        setTimeout(() => loadingFunc(), loadingSpeed)
    }
}

loadingFunc()


for (let i = 0; i < btnPlusOrMinus.length; i++) {
    btnPlusOrMinus[i].addEventListener('click', function () {
        plusOrMinus(this)
    })
}


function plusOrMinus(element) {
    const parent = element.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        out = parent.querySelector('.main__product-num'),
        elementData = element.getAttribute('data-symbol'),
        price = parent.querySelector('.main__product-price span'),
        kkal = parent.querySelector('.main__product-kcall span')


    if (elementData == '+') {
        product[parentId].amount++
    } else if (elementData == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }

    out.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].Summ()
    kkal.innerHTML = product[parentId].Kcall()

}



// for (let i = 0; i < btnPlusOrMinus.length; i++) {
//     btnPlusOrMinus[i].addEventListener("click", function () {
//         plusOrMinus(this)
//     })
// }

// function plusOrMinus(element) {
//     const parent = element.closest(".main__product"),
//         parentId = parent.getAttribute("id"),
//         out = parent.querySelector(".main__product-num"),
//         price = parent.querySelector(".main__product-price span"),
//         kkal = parent.querySelector(".main__product-kcall span"),
//         elementData = element.getAttribute("data-symbol")

//     if (elementData == "+" && product[parentId].amount < Infinity) {
//         product[parentId].amount++
//     } else if (elementData == "-" && product[parentId].amount > 0) {
//         product[parentId].amount--
//     }


//     out.innerHTML = product[parentId].amount
//     price.innerHTML = product[parentId].Summ()
//     kkal.innerHTML = product[parentId].Kkal()
// }