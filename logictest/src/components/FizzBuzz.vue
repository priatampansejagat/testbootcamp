<template>
  <div>
    <h3 class="card-text" v-html="title"></h3>
    <input type="text" v-model:value="input">
    <button @click="fizzBuzz">Process</button>
    <p>Hasil : {{ output }}</p>
  </div>
</template>

<script>
export default {

  data(){
    return {
      title : 'FizzBuzz',
      input : 'Insert Number',
      output : ''
    }
  },
  methods: {
    fizzBuzz(){
      var num = this.input;
      var outputArr = [];

      for (var start = 1; start <= num; start++) {
        if (start % 3 == 0 && start % 5 == 0) {
          outputArr.push("FizzBuzz");
        }else if (start % 3 == 0){
          outputArr.push("Fizz");
        }else if (start % 5 == 0){
          outputArr.push("Buzz");
        }else{
          outputArr.push(start);
        }

      }

      this.output = JSON.stringify(outputArr);
    }
  }
}
</script>

<style lang="scss">

</style>
