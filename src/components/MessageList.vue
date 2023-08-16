<template>
  <div class="container messages">
    <div class="message-window row">
          <div 
            :class="['message', 'col-12', 'col-lg-8', message.author]"
            v-for="message in this.$store.state.messages" 
            v-bind:key="message.id"
          > 
            <img class="avatar col-3"
              :src="this.$store.state.images[message.author].src" 
              :alt="this.$store.state.images[message.author].alt">
            <div class="message-body">
              <p class="message-text">{{ message.text }}</p></div>
              <div class="col-2 avatar avatar-dumper"></div>
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
  justify-content: center;
}
  .message {
    display: flex;
    width: 100%;
  }

  .avatar {
    min-width: 3em;
    max-width: 3.5em;
  }

  .user{
    flex-direction: row-reverse;
    padding-right: 0
  }

  .message-text {
    background-color: rgb(223, 221, 221);
    border-radius: 1em 1em 1em 0em;
    padding: 1em;
    margin: 1em;
    min-width: 100%
  }

  .user>.message-body>.message-text{
    background-color: #333;
    color: #B9E52F;
    float: right;
    border-radius: 1em 1em 0em 1em;
    min-width: 0%;

  }
  @media screen and (min-width: 0px) and (max-width: 300px){
    .message-text {
      margin: 0em;
      margin-bottom: 1em;
  }
}
  
</style>