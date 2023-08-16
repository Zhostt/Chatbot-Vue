<template>
    <div class="container questions">
        <div class="user-questions row justify-content-center mb-3"  ref="scrollToMe">

            <div class="row">
                <div 
                    class="question col-12 col-s-6 col-md-3" 
                    v-for="question in this.$store.state.possibleQuestions" 
                    v-bind:key="question.id"
                >
                    <button class="question btn question-button" role="button" @click="handleQuestion(question)">{{ question.text }}</button>
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
                    /*
                    setTimeout((() => this.addUserMessage(newMessage)),100)
                    setTimeout((() => this.addBotMessage(newMessage)),200)
                    setTimeout((() => this.scrollToElement()),300)
                    */
                    this.addUserMessage(newMessage)
                    this.addBotMessage(newMessage)
                    setTimeout((() => this.scrollToElement()),100)
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
            
            scrollToElement() {
                const el = this.$refs.scrollToMe;
                if (el) {
                // Use el.scrollIntoView() to instantly scroll to the element
                el.scrollIntoView({behavior: 'smooth'});
                    }
            },  
    }
  }

</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
    }
    .user-questions {
        padding-top: 2em;
    }
    .question-button {
        border: 2px solid #B9E52F;
        min-width: 100%;
        margin-bottom: 5px;
        height: 3em;
        border-radius: 2em;
        padding: 0;
        }
     .question-button:hover {
        background-color: #B9E52F;
     }
</style>