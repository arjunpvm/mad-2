const a = new Vue({
    el: '#app1',
    data: {
        message1: 'Arjun',
    },
})

const b = new Vue({
    el: '#app2',
    data: {
        message2: 'Dhesika',
    },
})


let x1 = {
    'a': 5,
    'b': 'hello',
    'add': function(x) {
        return this.b + ' ' + x
    },
}


let x2 = {
    'a': 5,
    'b': 'Welcome',
    'add': function(x) {
        return this.a + ' ' + x
    },
}

let y = x1.add

console.log(y.call(x2, "Dhesika"));

let x = {
    a: [1, 2, 3, 4, 5],
    b: function() {
        return [...this.a, 6, 7, 8]
    }
}

let c = x.b;
console.log(c.call(x));
