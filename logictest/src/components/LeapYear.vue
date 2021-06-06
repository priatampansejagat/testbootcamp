<template>
  <div>
    <h3 class="card-text" v-html="title"></h3>
    <input type="text" v-model:value="awal">
    <input type="text" v-model:value="akhir">
    <button @click="calcLeapYear">Process</button>
    <p>Hasil : {{ output }}</p>
  </div>
</template>

<script>
export default {

  data(){
    return {
      title : 'Leap Year',
      awal : 'awal',
      akhir : 'akhir',
      output : ''
    }
  },
  methods: {
    calcLeapYear(){
      var awal = this.awal;
      var akhir = this.akhir;

      var hasil = awal;

      while(awal <= akhir){
        awal++;
        if ((awal % 4 == 0 && awal % 100 != 0) || (awal % 4 == 0 && awal % 400 == 0)){
          hasil = hasil+', '+awal;
        }
      }

      this.output = hasil;
    }
  }
}
</script>

<style lang="scss">

</style>
