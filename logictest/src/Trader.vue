<template>
  <div>
    <palindrome></palindrome>
    <leap-year></leap-year>
    <reverse-words></reverse-words>
    <fibonacci></fibonacci>
    <fizz-buzz></fizz-buzz>
  </div>
</template>

<script>
  import Palindrome from './components/Palindrome.vue';
  import LeapYear from './components/LeapYear.vue';
  import ReverseWords from './components/ReverseWords.vue';
  import Fibonacci from './components/Fibonacci.vue';
  import FizzBuzz from './components/FizzBuzz.vue';

  export default {
    components: {Palindrome, LeapYear, ReverseWords, Fibonacci, FizzBuzz}
  }
</script>

<style lang="scss">

</style>
