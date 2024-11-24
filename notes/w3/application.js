let app = new Vue({
    el: "#app",
    data: {
        message: 'Lets learn Vue 2',
        username: "",
        visitors: []
    },
    methods: {
        letsGo: function() {
            this.message = `Lets go motherfucker ${this.username}`;
            this.visitors.push(this.username);
            this.username = ""
        },
    },
    computed: {
        count: function() {
            return this.visitors.length;
        }
    }
})
