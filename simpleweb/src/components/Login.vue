<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Buat aplikasi oauth dengan facebook/google</h2>
    <ul>
      <li>
        <!-- <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div> -->
        <button id="signinButton" v-on:click="signinButton()">Sign in with Google</button>
      </li>
    </ul>
  </div>
</template>

<script>

  var auth2;
  function startAuth() {
    gapi.load('auth2', function() {
      auth2 = gapi.auth2.init({
        client_id: '522234879513-ke06fm1fi5ghactdp53463petacjrm7p.apps.googleusercontent.com',
        scope: 'profile email'
      });
    });
  }
  startAuth();

  export default {
    name: 'Login',
    data () {
      return {
        msg: 'oAuth2'
      }
    },
    methods:{
      signinButton(){

        auth2.grantOfflineAccess().then(
          function (authResult) {

            if (authResult['code']) {
              console.log(JSON.stringify(authResult));

              // $('#signinButton').attr('style', 'display: none');

              // Send the code to the server
              $.ajax({
                type: 'POST',
                url: 'http://localhost:8081/login',
                dataType: "json",
                headers: {
                  'X-Requested-With': 'XMLHttpRequest'
                },
                contentType: 'application/x-www-form-urlencoded',
                success: function(result) {
                  console.log(result);
                },
                processData: false,
                data: authResult['code']
              });
            } else {
              // There was an error.
            }
          }
        );

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
