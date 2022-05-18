<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo" @click="$router.push({name: 'main'})">Кинотеатр</div>
        <div class="header__buttons">
          <button
              :class="$route.path === '/films' && 'header__button_active'"
              class="button header__button"
              @click="$router.push({name: 'films'})"
          >
            Фильмы
          </button>
          <button
              :class="$route.path === '/serials' && 'header__button_active'"
              class="button header__button"
              @click="$router.push({name: 'serials'})"
          >
            Сериалы
          </button>
          <button
              v-if="isAuth"
              :class="$route.path === '/favorites' && 'header__button_active'"
              class="button header__button"
              @click="$router.push({name: 'favorites'})"
          >
            Мои избранные
          </button>
        </div>
        <button class="button header__login" @click="changeAuthStatus">{{ isAuth ? 'Выйти' : 'Войти' }}</button>
      </div>
    </div>
  </header>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  methods: {
    ...mapMutations({
      setIsAuth: "auth/SET_IS_AUTH"
    }),

    changeAuthStatus() {
      if (!this.isAuth) {
        localStorage.setItem('auth', true);
        this.setIsAuth(true)
      } else {
        localStorage.removeItem('auth');
        this.setIsAuth(false)
        this.$router.push({name: 'films'})
      }
    }
  },

  computed: {
    ...mapState({
      isAuth: state => state.auth.isAuth
    })
  },

  created() {
    if (localStorage.getItem('auth')) {
      this.setIsAuth(true)
    }
  },
}
</script>

<style scoped>
.header {
  background-color: #000;
  padding: 25px 0;
}

.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 50px;
}

.header__logo {
  color: #d74f16;
  font-size: 38px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
}

.header__buttons {
  display: flex;
  gap: 10px;
  margin-right: auto;
  align-self: flex-end;
}

.header__button {
  border: none;
  font-size: 22px;
  font-weight: 700;
  padding: 5px;
}

.header__button_active {
  color: #de7f56;
}

.header__button:hover {
  background-color: transparent;
  color: #de7f56;
}

.header__login {
  font-weight: bold;
}
</style>