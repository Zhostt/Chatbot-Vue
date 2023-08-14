<template>
  <div class="message-window">
      <div 
        :class="['message', message.author]"
        v-for="message in this.$store.state.messages" 
        v-bind:key="message.id"
        >
          <div class="message-author"><strong>{{ message.author }}</strong></div>
          <div class="message message-body">{{ message.text }}</div>
      </div>
  </div>
      
</template>

<script>
  // eslint-disable-next-line no-unused-vars
  // import store from '../store.js'
  export default {

    }
</script>

<style lang="scss" scoped>

</style>