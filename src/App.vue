<template>
  <div id="app">
    <Header/>
    <div class="mainCont">

      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped>
  #app{
    width: 100%;
    height: 100%;
  }
  .mainCont{
    box-sizing: border-box;
    height: 100%;
    padding-top: 64px;
  }
</style>
