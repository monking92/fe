<template>
  <div class="main">
    <div class="cover"></div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Todo from './components/Todo.vue'
export default {
  components: { Header, Footer, Todo },
  data() {
    return {
      msg: 'this is app.vue!'
    }
  }
}
</script>

<style lang="stylus">
.main {
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  .cover {
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background-color #999
    opacity .9
    z-index -1
  }
}
</style>
