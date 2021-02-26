var vueObj = new Vue({
    el: '#app',
    data: {
        msgVar: 'This is the msgVar value',
        colorVar: 'RED',
        colorsArr: ['red','green','blue']
    }, //ends data
    methods: {

        myFunction(){
            this.colorsArr.push(this.colorVar);
            this.colorVar = "";
        }//ends myFunction()

    }//ends methods
});

//vueObj.msgVar = "New sotiris message";

