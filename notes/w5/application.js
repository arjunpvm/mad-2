Vue.component('message-board', {
    props: ['title'],
    template: `
    <div>
        <h2>{{title}}</h2>
        <label for="name">Name</label>
        <input v-model="username" type="text" required> <br>
        <label for="user_message">Message</label>
        <input v-model="user_message" type="text" required>
        <p v-if="count == 0"> Count not staterted yet</p>
        <p v-else-if="count >= 5"> Yamatekudasai </p>
        <p v-else> No of counts: {{count}}</p>

        <ul>
            <li v-for="message in messages">
                {{message["username"]}}:{{message["user_message"]}}
            </li>
        </ul>
        <button v-on:click="letsGo">Lets Goo!</button>
    </div>
`,
    data: function() {
        return {
            username: "",
            user_message: "",
            messages: []
        }
    },
    methods: {
        letsGo: function() {
            this.messages.push({ "username": this.username, "user_message": this.user_message });
            this.username = "";
            this.user_message = "";
            this.$emit("add-to-global");
        },
    },
    computed: {
        count: function() {
            return this.messages.length;
        }
    },
    beforeCreate: function() {
        console.log('component before create is running');
    },
    created: function() {
        console.log('component created is running');
    },
    beforeMount: function() {
        console.log('component before mount is running');
    },
    mounted: function() {
        // here we fetch data from the backend
        console.log('component mounted is running');
    },
    beforeUpdate: function() {
        console.log('component before update is running');
    },
    updated: function() {
        console.log('component updated is running');
    },
})
let app = new Vue({
    el: "#app",
    data: {
        global_count: 0
    },
    methods: {
        count_global: function() {
            this.global_count += 1
        }
    },
    beforeCreate: function() {
        console.log('app before create is running');
        console.log(this.global_count);
    },
    created: function() {
        console.log('app created is running');
        console.log(this.global_count);
    },
    beforeMount: function() {
        console.log('app before mount is running');
        console.log(this.global_count);
    },
    mounted: function() {
        // here we fetch data from the backend
        console.log('app mounted is running');
        console.log(this.$el);
    },
    beforeUpdate: function() {
        console.log('app before update is running');
        console.log(this.global_count);
    },
    updated: function() {
        console.log('app updated is running');
    },
}) 
