var superherodata = {
    selectedId: 0
}

Vue.component('superhero-title', {
    template: '<h1>This is a superhero list</h1>'
})

Vue.component('superhero-item', {
    props: ['superhero'],
    template: '<li>{{superhero.text}} <button v-on:click="selectedId=superhero.id">Select me!</button></li>',
    data: function () {
        return superherodata
    }
})

Vue.component('superhero-choice', {
    template: '<p>My choice: <b>{{selectedId}}</b></p>',
    data: function () {
        return superherodata
    }
})

// create a root instance
var app = new Vue(
    {
        el: '#example',
        data: {
            list: [
                {text: "gattoboy", id:1},
                {text: "romeo", id:2},
                {text: "gufetta", id:3},
                {text: "geko", id:4}
            ]
        }
    }
)