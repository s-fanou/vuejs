Vue.component("task-item", {
    //this component is included in the task-list component below
  template: "<li></li>"
});

Vue.component("task-list", {
    template: "<div><task-item v-for='oneTask in mytasks' v-text='oneTask.task'></task-item></div>",
  
    // for components the data must be a function which returns a JS object
    //as compared to the data of the Vue object below which is a simple JS object
    data: function () {
      return { mytasks: [
          {task: 'go to bank', complete: true},
          {task: 'go to supermarket', complete: false},
          {task: 'go to pharmacy', complete: false}
      ] };
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
