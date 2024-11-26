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
    }

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
    }
}) 
