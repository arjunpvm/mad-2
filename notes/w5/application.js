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

        <button v-on:click="letsGo">Lets Goo!</button>
        <ul>
            <li v-for="message in messages">
                {{message["username"]}}:{{message["user_message"]}}
            </li>
        </ul>
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
            // we should put the messages to backend through api here


            fetch('https://httpbin.org/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application.json',
                },
                body: JSON.stringify({
                    "for": this.title,
                    "username": this.username,
                    "user message": this.user_message
                }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success: ', data);
                })
                .catch((error) => {
                    console.log("ERROR: ", error)
                });

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
}) 
