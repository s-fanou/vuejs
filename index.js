
Vue.component("task-list", {
    //the template must have only one root element therefore we enclose it in a <div></div>
    template: "<div v-bind:class='sotClass'><li v-for='oneTask in mytasks' v-text='oneTask.task'></li></div>",
  
    // for components the data must be a function which returns a JS object
    //as compared to the data of the Vue object below which is a simple JS object
    data: function () {
      return { 
          mytasks: [
          {task: 'go to bank', complete: true},
          {task: 'go to supermarket', complete: false},
          {task: 'go to pharmacy', complete: false}  ],    
          sotClass: 'red-class'
            };
    },
  });

var vueObj = new Vue({
  el: "#app",
  data: {
    msgVar: "Sotiris Fanou",
    colorVar: "Red",
    colorsArr: ["red", "green", "blue"],
    styleVar: "red-class",
    changeStyleVar: false,
  }, //ends data object
  methods: {
    myFunction() {
      //this.colorsArr.push(this.colorVar);
      //this.colorVar = "";
      //this.styleVar = 'blue-class';
      this.changeStyleVar = !this.changeStyleVar;
    }, //ends myFunction()
  }, //ends methods object
});

vueObj.msgVar = "New sotiris message";
