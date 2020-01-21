<template>
<div id="">

  <v-app light>
    <v-content>
      <section>
        <v-layout column wrap class="my-12" align-center>
          <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
              <h2 class="headline">Welcome to develop space</h2>
              <span class="subheading">
                Use Nuxt &amp; Vieutify
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <div class="text-center">
                <h1>Hello Vuex</h1>
              </div>
              <div class="text-center">
                <p>{{ $store.state.message }}</p>
              </div>
              <div class="text-center">
                <p>{{ $store.state.num * 2 }}</p>
              </div>
              <div class="text-center">
                <p>{{ $store.state.item[0].name }}</p>
              </div>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
    </v-content>
  </v-app>

</div>
</template>
<script>
export default {
  name: "",
  data: () => ({}),
}
</script>
<style lang="scss" scoped>
</style>
