import {createStore} from "vuex"

export default createStore({
    state: {
        messages: [
          {text: 'Здравствуйте, чем могу помочь?', author: 'bot', id: 1}, 
        ],
        possibleQuestions: [
          {id: 'pizza', text: 'Пицца', author: 'user'},
          {id: 'alarm', text: 'Будильник', author: 'user'},
          {id: 'weather', text: 'Погода', author: 'user'},
          {id: 'otherQuestions', text: 'Другое', author: 'user'},
        ],
        possibleAnswers: [
          {id: 'pizza', author: 'bot', text: 'Пицца уже готовится! Что-нибудь еще?'},
          {id: 'alarm', author: 'bot', text: 'Я позабочусь, чтобы вы не проспали! Что-нибудь еще?'},
          {id: 'weather', author: 'bot', text: 'Наилучшая для выполнения тестовых заданий! Что-нибудь еще?'},
          {id: 'otherQuestions', author: 'bot', text: 'Здесь  могла быть менюшка с расширенным списком вопросов и поиском по ним, но я слишком прост для таких вещей! Спасибо за внимание!'},
        ],
        images: {
          bot: {alt: 'Bot avatar', src: '/avatars/BotGreen.svg'},
          user: {alt: 'User avatar', src: '/avatars/UserBlack.svg'},
        }
        
    },

    mutations: {
      addMessage(state, message) {
        state.messages.push(message)
      },
      switchCurrentAuthor(state, author) {
        state.currentAuthor = author
      }
    },

    getters: {
      getPossibleAnswers(state) {
        return state.possibleAnswers
      }
    }
  });
