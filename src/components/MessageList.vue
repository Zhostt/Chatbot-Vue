<template>
  <div class="container">
    <div class="message-window row">
          <div 
            :class="['message', 'col-12 col-lg-6 justify-content-center', message.author]"
            v-for="message in this.$store.state.messages" 
            v-bind:key="message.id"
          > 
            <img class="avatar col-2"
              :src="this.$store.state.images[message.author].src" 
              :alt="this.$store.state.images[message.author].alt">
            <div class="message-body col-10">
              <p class="message-text">{{ message.text }}</p></div>
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

.message-window {
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .message {
    display: flex;
  }

  .avatar {
    min-width: 2em;
    max-width: 3em;

  }

  .user{
    flex-direction: row-reverse;
  }

  .message-text {
    background-color: rgb(216, 233, 238);
    border-radius: 1em;
    padding: 1em;
    margin: 1em;
  }
</style>