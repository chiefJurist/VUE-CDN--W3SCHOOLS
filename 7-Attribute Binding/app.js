const app =  Vue.createApp({
    data(){
        return{
            showBooks: true,
            url: "https://netninja.co.uk",
            books: [
                {title: 'Name of the wind', author: 'Patrick Rothfuss'},
                {title: 'The Way of Kings', author: 'Brandon Sanderson'},
                {title: 'The Final Empire', author: 'Brandon Sanderson'}
            ]
        }
    },
    methods:{
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')