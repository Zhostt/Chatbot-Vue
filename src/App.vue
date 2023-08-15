<template>
  <div class="container">
  <div class="row justify-content-center ">
    <h1 class="header">Vue Chatbot by Zhostt</h1>
    <div class="chat-window py-4 col-12 col-md-12 col-lg-6 ">
      <MessageList/>
    </div>
    <div class="questions-background w-100 position-fixed bottom-0">
      <div class="questions-block col-12 col-md-12 col-xl-6 "></div>
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
}

.chat-window {
  width: 70%;
  height: 80%;
}

.questions-background {
  background-color: rgb(216, 233, 238);
  border-top: 1px solid #333 ;
}

.header {
  position: fixed; 
  background-color: rgb(216, 233, 238);
  border-bottom: 1px solid #333 ;
  text-align: center;
}
</style>