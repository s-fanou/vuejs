var vueObj = new Vue({
    el: '#app',
    data: {//the msgVar and colorVar are computed but actually the proper way is below
        msgVar: 'Sotiris Fanou ' + new Date(),
        colorVar: 'the color var is ' + 'Red',
        colorsArr: ['red','green','blue'],
        styleVar: 'red-class',
        changeStyleVar: false
    }, //ends data object

    computed: { //these are the proper computed properties
        computedVar: () => {
            return "computed var " + new Date;
        },
        computedProperty(){
            //let surVar = "fanou";
            //surVar1 = surVar.toUpperCase();
            return "sotiris " + "fanou".toUpperCase();
        },
        computedP2: function(){
            return "another computed P2 " + "shows 3 different ways to write functions"; 
        }

    }, // ends computed 

    methods: {

        myFunction(){
            //this.colorsArr.push(this.colorVar);
            //this.colorVar = "";
            //this.styleVar = 'blue-class';
            this.changeStyleVar = !this.changeStyleVar;

        }//ends myFunction()

    }//ends methods
});

//vueObj.msgVar = "New sotiris message";

