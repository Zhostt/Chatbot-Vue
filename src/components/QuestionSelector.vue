<template>
    <div class="container">
        <div class="user-questions row">
                <div 
                    class="question col-10 col-md-6" 
                    v-for="question in this.$store.state.possibleQuestions" 
                    v-bind:key="question.id"
                >
                    <button class="question btn btn-dark question-button" @click="handleQuestion(question)">{{ question.text }}</button>
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
            },
            },
  }

</script>

<style lang="scss" scoped>
    .user-questions {
        display: flex;
        justify-content: center; 
        align-items: center; 
        margin-bottom: 1em;
        padding:1em 0;
    }
    .question-button {
        width: 100%;
        margin-bottom: 5px;
        height: 3.5em;
        max-height: 6em;
        border-radius: 3em;

     }
     .question-button:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
     }
</style>