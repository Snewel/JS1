 //ИМИТАЦИЯ РАБОТЫ БАЗЫ ДАННЫХ И СЕРВЕРА

 let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']
 let PRICES = [100, 120, 1000, 15, 18]
 let IDS = [0, 1, 2, 3, 4]
 
 let catalog = {
     items: [],
     container: '.products',
     construct () {
         this._init () // инкапсуляция 
     },
     _init () {
         this._handleData ()
         this.render ()
     },
     _handleData () {
         for (let i = 0; i < IDS.length; i++) {
             this.items.push (this._createNewProduct (i))
         }
     },
     _createNewProduct (index) {
         return {
             product_name: PRODUCTS_NAMES [index],
             price: PRICES [index],
             product_id: IDS [index]
         }
     },
     render () {
         let str = ''
         let currency = '$' //  мб лишнее, но выглядит вроде норм
         this.items.forEach (item => {
             str += `
                 <div class="product">
                     <img class="product-img" src="https://placehold.it/300x200">
                     <span class="product-name">${item.product_name}</span>
                     <span class="product-price">${item.price} ${currency}</span>
                     <button name="item-buy" class="product-buy">Купить</button>
                 </div>
            `
         })
         document.querySelector(this.container).innerHTML = str
     }
 }

 let cart = {
     items: [],
     total: 0,
     sum: 0,
     addProduct (product) {
         let id = product
         // вызывать метод другого объекта из объекта не есть хорошо :/
         let prod = catalog._createNewProduct (product)
         
         let find = this.items.find (product => product.product_id === id)
         if (find) {
             find.quantity++
         } else {
             prod.quantity = 1
             this.items.push (prod)
         }

     },
     deleteProduct (prodId) { // принимаю в качестве аргумента id продукта, который нужно удалить
        let del = this.items  
        del.findIndex (dol) //вероятно, тут можно сделать как-то лучше, но это работает :D 
        function dol (el, index, array) { 
            if (el.product_id == prodId) {
                if (el.quantity > 1) {
                    el.quantity --
                }
                else {
                    array.splice(index, 1)
                }
            }
        }
     },
     calculateSum (items) { // не смог принять в качестве аргумента массив items, поэтому пришлось делать через переменную
        let goods = this.items 
        goods.forEach(el => {
            for (let i = 1; i <= el.quantity; i++) {
                this.sum += el.price
            }
        })
     },
     delAllCart () { // функция удаления всей корзины
        while (this.items.length > 0) {
            this.items.shift()
        }
     },
     _checkTotal (items) {
        let all = this.items // аналогичная ситуация, как и с calculateSum ()
        all.forEach (el => {
            this.total += el.quantity
        })
     }
 }
 catalog.construct () //тут происходит создание объекта и вся прочая магия

 let item_buy = document.querySelectorAll ('.product-buy') // добавление товаров в корзину
 item_buy = [...item_buy] // преобразование НодЛиста в массив
 item_buy.findIndex (buy)
 function buy(el, index) {
    el.addEventListener ('click', () => {
        cart.addProduct(index)
    }) 
}

let del_all_goods = document.querySelector('.item-dlt-btn') // кнопка очистки всей корзины (не работает по нажатию кнопки), 
del_all_goods.onclick = cart.delAllCart                     /* работает, если вызвать из консоли, но по кнопке не хочет :с 
                                                            Uncaught TypeError: Cannot read property 'length' of undefined
                                                            at HTMLButtonElement.delAllCart (main.js:87) */

//item-img // остановился на функционале добавления картинки в корзину