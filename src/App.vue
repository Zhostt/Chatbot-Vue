<template>
  <div class="container">
  <div class="row justify-content-center  align-items-end  vh-100">
    <img class="welcome-image mt-5 mb-3" src="/avatars/Welcome-face.svg" alt="Welcome-face">
    <h4 class="welcome">Vue chat-bot by Zhostt</h4>
    <div class="chat-window mt-3 p-0 ">
      <MessageList/>
      <QuestionSelector/>
    </div>
  </div>
</div>
</template>

<script>
import MessageList from './components/MessageList.vue'
import QuestionSelector from './components/QuestionSelector.vue'

export default {
  components: {MessageList, QuestionSelector},
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
  background: linear-gradient(180deg,black 60%, grey 120%);
}

.welcome-image {
  height: 10vh;
}

.welcome {
color: #B9E52F;
text-align: center;
}

.chat-window {
  height: 75%;
  background-color: white;
  overflow-y: scroll;
  border-radius: 2em 2em 0 0;
  width: 90%
}

::-webkit-scrollbar {
    width: 12px;
}
@media screen and (min-width: 0px) {
  .chat-window{
    width: 100%
  }
}
@media screen and (min-width: 860px) {
    .chat-window{
      width:  50%
    }
}

</style>