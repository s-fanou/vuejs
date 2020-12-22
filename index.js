/*
https://bulma.io/documentation/components/modal/

*/
Vue.component("sot-modal", {
  template: `<div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <p>
                    This is my modal the unexamined life is not worth living!
                    </p>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close"></button>
            </div>`,
}); //ends sot-modal

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

var vueObj = new Vue({
  el: "#app",
  data: {
    showSotModal: false,
  }, //ends data object
  methods: {
    myFunction() {
      this.showSotModal = true;
    }, //ends myFunction()
  }, //ends methods object
});
