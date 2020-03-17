<template>
  <div>
    <h1>シフト一覧</h1>
    <!-- {{ $data }} -->
    <!-- {{ items }} -->
    <ul>
      <li v-for="item in items.items" :key=item.id>
        <!-- <p>名前：　{{ item.occupation }}</p> -->
        <!-- <p>名前：　{{ item.name }}</p> -->
        <!-- <p>開始時間：　{{ item.beginAt }}</p> -->
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        items: []
      }
    },
    // ToDo js Create 
    mounted() {
      axios.get('http://byotonurse.epigno.systems/api/users')
        .then(response => this.items = response.data);
    },
  }
</script>
