<template>
<v-container fluid>
  <v-row>
    <v-col cols="12">
      <v-row :align="alignment" :justify="justify" class="grey lighten-5" style="height: 300px;">
        <!-- <v-card v-for="n in 1" :key="n" class="ma-3 pa-6" outlined tile> -->
        <v-card class="ma-3 pa-6" outlined tile>
          <v-text-field v-model="placeholder" label="Placeholder" @keyup.enter="addToDo"></v-text-field>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      alignmentsAvailable: [
        'start',
        'center',
        'end',
        'baseline',
        'stretch',
      ],
      alignment: 'center',
      dense: false,
      justifyAvailable: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between',
      ],
      justify: 'center',
    }
  },
  methods: {
    addToDo(e){
      this.$store.commit('todos/add', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
