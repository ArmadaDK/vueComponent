<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <DraggableTable></DraggableTable> -->
    <!-- <VeloxiComponent></VeloxiComponent> -->

    <sortablejs></sortablejs>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DraggableTable from '@/components/DraggableTable.vue';
// import VeloxiComponent from '@/components/VeloxiComponent.vue';
import sortablejs from '@/components/sortablejs.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    DraggableTable,
    sortablejs
    // VeloxiComponent
  }
}
</script>
