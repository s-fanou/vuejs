var vueObj = new Vue({
    el: '#app',
    data: {
        msgVar: 'Sotiris Fanou',
        colorVar: 'Red',
        colorsArr: ['red','green','blue'],
        styleVar: 'red-class',
        changeStyleVar: false
    }, //ends data object
    methods: {

        myFunction(){
            //this.colorsArr.push(this.colorVar);
            //this.colorVar = "";
            //this.styleVar = 'blue-class';
            this.changeStyleVar = !this.changeStyleVar;

        }//ends myFunction()

    }//ends methods object
});

vueObj.msgVar = "New sotiris message";

