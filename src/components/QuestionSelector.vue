<template>
    <div class="user-questions">
        <div 
            class="question" 
            v-for="question in this.$store.state.possibleQuestions" 
            v-bind:key="question.id"
        >
            <button class="question button" @click="handleQuestion(question)">{{ question.text }}</button>
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
                    this.addUserMessage(newMessage)
                    this.addBotMessage(newMessage)
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

</style>