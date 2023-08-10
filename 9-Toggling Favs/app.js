const app =  Vue.createApp({
    data(){
        return{
            showBooks: true,
            url: "https://netninja.co.uk",
            books: [
                {title: 'Name of the wind', author: 'Patrick Rothfuss', img:'assets/img1.jpg', isFav: true},
                {title: 'The Way of Kings', author: 'Brandon Sanderson', img:'assets/img2.jpg', isFav: false},
                {title: 'The Final Empire', author: 'Brandon Sanderson', img:'assets/img3.jpg', isFav: true}
            ]
        }
    },
    methods:{
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(item){
            item.isFav = !item.isFav
        }
    }
})

app.mount('#app')