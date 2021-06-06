<template>
  <div>
    <h3 class="card-text" v-html="title"></h3>
    <input type="text" v-model:value="input" @change="reverseWords">
    <p>Hasil : {{ output }}</p>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        title : 'Reverse Words',
        input : 'Insert words',
        output : ''
      }
    },
    methods: {
          reverseWords(){
            var inputArray = this.input.split("");
            var outputStr = '';

            for(var i = inputArray.length-1;i >= 0 ;i--){
              outputStr = outputStr + inputArray[i];
            }

            this.output = outputStr;
          }
    }
  }
</script>

<style>
</style>
