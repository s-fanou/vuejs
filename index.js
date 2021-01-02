/* It seems that props are used for Vue components for which the data is not passed 
using the Vue data object in JS but rather the data is assigned directly in the HTML file 
like this: <message title="Title of my message" body="Body of my message."></message> */
Vue.component("message", {
  props: ["title", "body"],
  //the instructor uses a css library to make the message template
  //beautiful I just use a <p></p> for demo purposes
  // v-show="false" hides the element, v-show="true" shows the element
  template: `<div v-show="isVisible">
                  <hr>
                  <p>{{ title }}</p>
                  <p>{{ body }}</p>
                  <button type="button" @click="isVisible = false">HIDE</button>
                  <hr>
              </div>`,

  data: function () {
    return { isVisible: true };
  },
});

Vue.component("task-item", {
  //this component is included in the task-list component below
  template: "<li></li>",
});

Vue.component("task-list", {
  //the template must have only one root element therefore we enclose it in a <div></div>
  template:
    "<div><task-item v-for='oneTask in mytasks' v-text='oneTask.task'></task-item></div>",

  // for components the data must be a function which returns a JS object
  //as compared to the data of the Vue object below which is a simple JS object
  data: function () {
    return {
      mytasks: [
        { task: "go to bank", complete: true },
        { task: "go to supermarket", complete: false },
        { task: "go to pharmacy", complete: false },
      ],
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
