<template>
  <div class="container">
    <h1 class="header row">Vue Chatbot</h1>
    <div class="chat-window mx-1 col-10">
      <MessageList/>
      <QuestionSelector/>
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
}


.chat-window {
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  overflow-y: scroll;
  width: 70%;
  min-height: 80%;
  max-height: 80%;
}
</style>