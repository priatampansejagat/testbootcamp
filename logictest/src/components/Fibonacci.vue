<template>
  <div>
    <h3 class="card-text" v-html="title"></h3>
    <input  id='bilangan' type="text" v-model:value="bilangan">
    <button @click="calcFibo">Process</button>
    <p>Nearest : {{ nearest }}</p>
    <p>Hasil : {{ output }}</p>
  </div>
</template>

<script>
export default {

  data(){
    return {
      title : 'Nearest Fobonacci',
      bilangan : 'Masukan integer dipisahkan dengan spasi',
      nearest : '',
      output : ''
    }
  },
  methods: {
    calcFibo(){
      var bilanganArr = this.bilangan.split(' ');
      var fibo_1 = 0;
      var fibo_2 = 1;
      var fibo_temp = 1;
      var jumlBilangan = 0;
      var nearest = 0;
      var output = 0;

      for (var i = 0; i < bilanganArr.length; i++) {
        jumlBilangan=jumlBilangan + Number(bilanganArr[i]);
      }

      while(fibo_2 < jumlBilangan){
        fibo_temp = fibo_1 + fibo_2;
        fibo_1 = fibo_2;
        fibo_2 = fibo_temp;
      }

      nearest = ((fibo_2 - jumlBilangan) < (jumlBilangan - fibo_1)) ? fibo_2 : fibo_1;
      output = (nearest > jumlBilangan) ? nearest - jumlBilangan : jumlBilangan - nearest;
      this.nearest = nearest;
      this.output = output;
    }
  }
}
</script>

<style lang="scss">
#bilangan {
      width: 30%;
  }
</style>
