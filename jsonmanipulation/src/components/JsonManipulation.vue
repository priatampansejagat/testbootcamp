<template>
  <div>
    <h3 class="card-text" v-html="title"></h3>
    <p>Data JSON :</p>

    <ul>
      <li v-for="data in jsondata">
         {{ data }}
       </li>
    </ul>

    <button @click="case_1">Items in the Meeting Room</button>
    <button @click="case_2">all electronic devices</button>
    <button @click="case_3">all the furniture</button>
    <button @click="case_4">all items were purchased on 16 Januari 2020</button>
    <button @click="case_5">all items with brown color</button>

    <p>Hasil : {{ count }}</p>
    <ul>
      <li v-for="data in output">
         {{ data }}
       </li>
    </ul>
  </div>
</template>

<script>
import items from './local_data/data.json';

export default {

  data(){
    return {
      title : 'JSON Manipulation',
      jsondata : items,
      count : 0,
      output : ''
    }
  },
  methods: {
    case_1(){
      var jsonData = this.jsondata;
      var jsonResult = [];
      this.count = 0;
      for (var i = 0; i < jsonData.length; i++) {
        // Cari by Name, not ID
        if (jsonData[i]['placement']['name'] == 'Meeting Room') {
          jsonResult.push(jsonData[i]);
          this.count++;
        }
      }

      this.output = jsonResult;
    },
    case_2(){
      var jsonData = this.jsondata;
      var jsonResult = [];
      this.count = 0;

      for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i]['type'] == 'electronic') {
          jsonResult.push(jsonData[i]);
          this.count++;
        }
      }

      this.output = jsonResult;
    },
    case_3(){
      var jsonData = this.jsondata;
      var jsonResult = [];
      this.count = 0;

      for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i]['type'] == 'furniture') {
          jsonResult.push(jsonData[i]);
          this.count++;
        }
      }

      this.output = jsonResult;
    },
    case_4(){
      var jsonData = this.jsondata;
      var jsonResult = [];
      this.count = 0;
      //pakai substring karena format yang diminta hanya tanggal, bulan, tahun
      var date = new Date("2020-01-16").getTime().toString().substring(0,5);

      for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i]['purchased_at'].toString().substring(0,5) == date) {
          jsonResult.push(jsonData[i]);
          this.count++;
        }
      }

      this.output = jsonResult;
    },
    case_5(){
      var jsonData = this.jsondata;
      var jsonResult = [];
      this.count = 0;

      for (var i = 0; i < jsonData.length; i++) {
        for (var j = 0; j < jsonData[i]['tags'].length; j++) {
          if (jsonData[i]['tags'][j] == 'brown' || jsonData[i]['tags'][j] == 'Brown'){

            jsonResult.push(jsonData[i]);
            this.count++;
            break;

          }
        }

      }

      this.output = jsonResult;
    }
  }
}
</script>

<style lang="scss">

</style>
