<template>
  <div class="container">
    <div class="message-window">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div 
            :class="['message','bg-light', 'p-3', message.author]"
            v-for="message in this.$store.state.messages" 
            v-bind:key="message.id"
          > 
            <img class="avatar mr-3"
              :src="this.$store.state.images[message.author].src" 
              :alt="this.$store.state.images[message.author].alt">
            <div class="message message-body">{{ message.text }}</div>
        </div>
      </div>
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
    padding: 1rem;
    margin: 1rem;
    border: 0.1em solid #ccc;
    border-radius: 0.5rem;
  }
  .avatar {
    width: 30%;
    max-width: 70px;
    height: auto;
  }

  .user {
    flex-direction: row-reverse;
  }
</style>