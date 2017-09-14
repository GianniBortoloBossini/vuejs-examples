var app = new Vue(
    {
        el: "#userinputhandling",
        data: {
            message: "Gianni Bortolo Bossini"
        },
        methods: {
            reverseMessage: function() {
                this.message = this.message.split('').reverse().join('')
            }
        }
    }
)