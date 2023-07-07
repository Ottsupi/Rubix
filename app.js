const app = Vue.createApp({
    data() {
        return {
            inventory: [
                {id: 0, name: "3x3", price: 100, inCart: false,
                    img: "https://classteaching.files.wordpress.com/2019/09/rubiks-cube.jpg"},
                {id: 1, name: "2x2", price: 70, inCart: false,
                    img: "https://lzd-img-global.slatic.net/g/p/23a37378409d9d7e6ee347da94302ef8.jpg_720x720q80.jpg_.webp"},
                {id: 2, name: "4x4", price: 200, inCart: false,
                    img: "https://www.bigw.com.au/medias/sys_master/images/images/he1/hef/32051862208542.jpg"},
                {id: 3, name: "Pyraminx", price: 120, inCart: false,
                    img: "https://cf.shopee.ph/file/916bf60f57ffce5b9924d5a515222a5a"},
                {id: 4, name: "Megaminx", price: 300, inCart: false,
                    img: "https://lzd-img-global.slatic.net/g/p/b3a0764cea310b4e301a17dcbd9dd90b.jpg_720x720q80.jpg_.webp"},
                {id: 5, name: "Mirror Cube", price: 250, inCart: false,
                    img: "https://cf.shopee.ph/file/e3405e7b83cd4d01e21b67e6b47ef9b3"}
            ],
            cart: [],
            cartOverlayActive: false,
            totalPriceInCart: 0
        }
    },
    methods: {
        computeTotal() {
            accum = 0
            this.cart.forEach(item => {
                accum = accum + this.inventory[item.id].price
            });
            this.totalPriceInCart = accum
        },
        checkCart() {
            itemsInCart = []
            this.cart.forEach(item => {
                itemsInCart.push(item.id)
            })
            console.log(itemsInCart)
        },
        buttonCart() {
            this.computeTotal()
            this.cartOverlayActive = !this.cartOverlayActive
        },
        closeCart() {
            this.cartOverlayActive = false
        },
        addToCart(id) {
            this.inventory[id].inCart = !this.inventory[id].inCart 
            itemIsChecked = this.inventory[id].inCart

            newItem = {id: id, qty: 1}
            if (itemIsChecked) {
                console.log(`Item #${id} is checked!`)
                this.cart.push(newItem)
            } else {
                console.log(`Item #${id} is unchecked. :(`)
                this.cart = this.cart.filter(item => item.id !== id)
            }
        }
        
    }
})

app.mount('#app')