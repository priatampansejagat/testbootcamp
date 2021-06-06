<template>
  <div>
    <h3 class="card-text" v-html="title"></h3>
    <input type="text" v-model:value="input" @change="calcPalindrome">
    <p>Hasil : {{ output }}</p>
  </div>
</template>

<script>
export default {

  data(){
    return {
      title : 'Palindrome',
      input : 'Insert Input',
      output : ''
    }
  },
  methods: {
    calcPalindrome(){
      var inputStr = this.input.toLowerCase();
      var inputArray = inputStr.split("");
      var outputStr = '';

      for(var i = inputArray.length-1;i >= 0 ;i--){
        outputStr = outputStr + inputArray[i];
      }

      this.output = (inputStr == outputStr) ? 'true - palindrome' : 'false - not palindrome';
    }
  }
}
</script>

<style lang="scss">

</style>
