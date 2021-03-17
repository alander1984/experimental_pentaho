<template>
  <div class="hello">
    <div @click.stop="onSave">Save</div>
    <iframe src="/pentaho/api/repos/%3Ahome%3Aconstructor_reports%3Atest_01.pivot4j/generatedContent?ts=1615914301620" width="1000" height="600"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  setup() {
    function onSave() {
      console.log('123123');
    }
    return {
      onSave
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
