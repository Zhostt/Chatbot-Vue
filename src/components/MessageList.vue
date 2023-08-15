<template>
  <div class="container">
    <div class="message-window row justify-content-center" ref="messageContainer">
          <div 
            :class="['message', 'mb-3', 'p-6', message.author]"
            v-for="message in this.$store.state.messages" 
            v-bind:key="message.id"
          > 
            <img class="avatar m-1 "
              :src="this.$store.state.images[message.author].src" 
              :alt="this.$store.state.images[message.author].alt">
            <div class="message message-body">
              <p class="m-2 p-3 bg-light rounded">{{ message.text }}</p></div>
            </div>
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
  .message {
    display: flex;
    align-items: center;
  }

  .avatar {
    width: 20%;
    max-width: 5em;
    height: auto;
  }

  .user {
    flex-direction: row-reverse;
  }
</style>