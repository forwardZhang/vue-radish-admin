<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  const settings = require('./util/settings');
  export default {
    mounted(){
      console.log('1');
      console.log('settings',settings);
    }
  }
</script>
<style>
</style>
