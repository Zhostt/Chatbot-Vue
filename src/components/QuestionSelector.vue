<template>
    <div class="container questions">
        <div class="user-questions row justify-content-center">
            <div class="col-lg-8">
            <div class="row ">
                <div 
                    class="question col-12  col-s-6 col-md-3 " 
                    v-for="question in this.$store.state.possibleQuestions" 
                    v-bind:key="question.id"
                >
                    <button class="question btn question-button" role="'button" @click="handleQuestion(question)">{{ question.text }}</button>
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
    .container{
        width: 100%;
    }
    .user-questions {
        margin-bottom: 1em;
        padding:1em 0;
    }
    .question-button {
        border: 2px solid #B9E52F;
        width: 110%;
        margin-bottom: 5px;
        height: 3em;
        border-radius: 3em;
     }
     .question-button:hover {
        background-color: #B9E52F;
     }
</style>