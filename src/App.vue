<template>
  <div class="container">
  <div class="row d-flex  justify-content-center">
    <div class="chat-window col-12 col-md-12 col-lg-6 ">
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
  background: linear-gradient(180deg,grey 0%, black 80%, grey 120%);
}

.chat-window {
  width: 70%;
  height: 80%;
  background-color: white
}

.questions-background {
  background-color: rgb(216, 233, 238);
  border-top: 1px solid #333 ;
}


</style>