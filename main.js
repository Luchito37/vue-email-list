
const appVue = new Vue({
    el: "#app",
    data: {
        listaEmail: [],
        stringa: "",
    },
    methods: {
        generateRandomEmail(){

            this.listaEmail = [];
            for(let i = 0; i < 10; i++){
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")

                    .then((axiosResp) => {

                        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';

                        this.string += chars[Math.floor(Math.random() * chars.length)];

                        this.listaEmail.push( this.stringa + axiosResp.data.response);


                });

                console.log("eseguito ciclo" + i)
            }

            console.log("codidce dopo la fin del ciclo")
            console.log(this.listaEmail)
        },
    },
});