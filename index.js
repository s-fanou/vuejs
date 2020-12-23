/*
https://bulma.io/documentation/components/modal/
@click="$emit('close')" this triggers a custom build event 
called 'close' which is caught in my HTML page on my sot-modal 
custom made component.
*/
Vue.component("sot-modal", {
  template: `<div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                <slot></slot>
                </div>
            </div>
            <button class="modal-close is-large" @click="$emit('close')" aria-label="close"></button>
            </div>`,
}); //ends sot-modal


var vueObj = new Vue({
  el: "#app",
  data: {
    showSotModal: false,
  }, //ends data object
  methods: {
    myFunction() {
      this.showSotModal = true;
    }, //ends myFunction()
    sotCloseModal(){
        this.showSotModal = false;
    }
  }, //ends methods object
});
