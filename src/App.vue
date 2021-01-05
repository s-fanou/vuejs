<template>

<message> This is a message from Sotiris </message>
  
</template>

<script>
import message from './components/message.vue'
/* this is code for the custom component whose template is above */
export default {
  components: { message },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
