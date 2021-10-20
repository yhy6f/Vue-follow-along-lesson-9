const app = Vue.createApp({
    data() {
        return{
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle() {
            // this.title = 'Words of Radiance'
            this.title = title
        }
    }
})

app.mount('#app')