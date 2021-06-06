<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Buat aplikasi oauth dengan facebook/google</h2>
    <ul>
      <li>
        <!-- <a href="#" onclick="signOut();">Sign out</a> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Berhasil Login :)'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
