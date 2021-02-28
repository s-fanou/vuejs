var vueObj = new Vue({
  el: "#app",
  data: {
    //the msgVar and colorVar are computed but actually the proper way is below
    msgVar: "Sotiris Fanou ".toUpperCase(),
    colorVar: "the color var is " + "Red",
    colorsArr: ["red", "green", "blue"],
    styleVar: "red-class",
    changeStyleVar: false,
    tasks: [
      { desc: "go to bank", completed: true },
      { desc: "go to optician", completed: false },
      { desc: "go to fournos", completed: true },
      { desc: "go to supermarket", completed: false },
    ]
  }, //ends data object

  computed: {
    //these are the proper computed properties
    incompletedTasks(){      
        /* the below can also be written in ES6 syntax like this
          return this.tasks.filter(task => !task.completed);*/
        return this.tasks.filter(function (task){
            return !task.completed;
        });
    },//ends incompletedTasks()
    computedVar: () => {
      return "computed var " + new Date();
    },
    computedProperty() {
      //let surVar = "fanou";
      //surVar1 = surVar.toUpperCase();
      return "sotiris".toUpperCase();
    },
    computedP2: function () {
      return (
        "another computed P2 " + "shows 3 different ways to write functions"
      );
    }

  }, // ends computed

  methods: {
    myFunction() {
      //this.colorsArr.push(this.colorVar);
      //this.colorVar = "";
      //this.styleVar = 'blue-class';
      this.changeStyleVar = !this.changeStyleVar;
    }, //ends myFunction()
  }, //ends methods
});

//vueObj.msgVar = "New sotiris message";
