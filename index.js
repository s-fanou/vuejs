var vueObj = new Vue({
    el: '#app',
    data: {
        msgVar: 'Sotiris Fanou',
        colorVar: 'Red',
        colorsArr: ['red','green','blue'],
        styleVar: 'red-class'
    }, //ends data
    methods: {

        myFunction(){
            //this.colorsArr.push(this.colorVar);
            //this.colorVar = "";
            this.styleVar = 'blue-class';

        }//ends myFunction()

    }//ends methods
});

vueObj.msgVar = "New sotiris message";

