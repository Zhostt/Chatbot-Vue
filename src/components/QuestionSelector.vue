<template>
    <div class="container">
        <div class="user-questions">
            <div class="row justify-content-center">
                <div 
                    class="question col-lg-3 col-md-4 col-sm-6 col-6" 
                    v-for="question in this.$store.state.possibleQuestions" 
                    v-bind:key="question.id"
                >
                    <button class="question btn btn-primary question-button" @click="handleQuestion(question)">{{ question.text }}</button>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// import store from '../store.js'
    export default {
        methods: {
            handleQuestion(question) {
                    const text = question.text
                    const id = question.id
                    const newMessage = {
                        text,
                        id,
                        author: 'user',
                    }
                    
                    setTimeout((() => this.addUserMessage(newMessage)),200)
                    setTimeout((() => this.addBotMessage(newMessage)),500)
                    
            },


            addUserMessage(newMessage) {
                this.$store.commit('addMessage', newMessage)
            },

            addBotMessage(newMessage) {
                const questionId = newMessage.id
                const botAnswer = this.$store.getters.getPossibleAnswers
                                .find(answer => answer.id === questionId)
                this.$store.commit('addMessage', botAnswer)
            }
        }
  }

</script>

<style lang="scss" scoped>
    .user-questions {
        display: flex;
        justify-content: center; 
        align-items: center; 
        position: absolute;
        left: 0;
        right: 0;
        padding: 0% 10%;

    }
    .question-button {
        width: 100%;
        margin-bottom: 10px;
        min-height: 4rem;
     }
</style>