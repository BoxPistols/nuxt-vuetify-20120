<template>
<div id="">
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
      </div>
      <v-card>
        <v-card-title class="headline">
          Home
        </v-card-title>
        <v-card-text>
          to Content
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/">
            index
          </v-btn>
          <v-btn color="primary" nuxt to="/table">
            table
          </v-btn>
          <v-btn color="primary" nuxt to="/todo">
            ToDo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
