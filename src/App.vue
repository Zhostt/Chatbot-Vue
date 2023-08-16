<template>
  <div class="container">
  <div class="row d-flex justify-content-center align-items-center vh-100">
    <img class="welcome-face py-1" src="/avatars/BotGreen.svg" alt="Welcome-face">
    <h2 class="welcome">Welcome to Vue chat-bot by Zhostt</h2>
    <div class="chat-window col-12 col-lg-12">
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
  font-size: 14px;
  background: linear-gradient(180deg,black 60%, grey 120%);
}

.welcome-face {
  height: 10vh;
}

.welcome {
color: rgb(216, 233, 238);
text-align: center;
}

.chat-window {
  width: 70%;
  height: 80%;
  background-color: white;
  overflow-y: scroll;
  border-radius: 2em 2em 0 0;
}

::-webkit-scrollbar {
    width: 12px;
}

</style>