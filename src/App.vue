<template>
    <div class="container py-5">

    <div class="row d-flex justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4">
        <div class="card" id="chat1" style="border-radius: 15px;">
          <div
            class="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
            style="border-top-left-radius: 15px; border-top-right-radius: 15px;">
            <i class="fas fa-angle-left"></i>
            <p class="mb-0 fw-bold">Тренировочный чат-бот</p>
            <i class="fas fa-times"></i>
          </div>
          <div class="card-body">
            <MessageList />
            <QuestionSelector />
          </div>
        </div>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>