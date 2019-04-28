<template>
  <div class="main-footer">
    <span>written by {{author}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      author: 'Sun'
    }
  }
}
</script>
<style lang="stylus">
.main-footer {
  margin-top 40px
  text-align center
  color #bfbfbf
  font-size 10px
  text-shadow 0 1px 0 #999
}
</style>
