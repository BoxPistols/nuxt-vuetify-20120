<template>
<v-app class="grey lighten-5">
  <v-row>
    <!-- Outer -->
    <v-col cols="12">
      <v-card class="pa-1" outlined tile>

        <v-row no-gutters>
          <v-col cols="12">
            <v-card class="pa-1" outlined tile>
              Setting
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters>


          <v-col cols="3">
            <v-card class="pa-1" outlined tile>

              <v-col cols="12">
                <v-card class="pa-1" outlined tile>
                  L
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card class="pa-1" outlined tile>
                  L
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card class="pa-1" outlined tile>
                  L
                </v-card>
              </v-col>

            </v-card>
          </v-col>

          <v-col cols="6">
            <v-card class="pa-2" outlined tile>
              <v-col cols="12">
                <v-card class="pa-1" outlined tile>
                  M
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card class="pa-1" outlined tile>
                  M
                </v-card>
              </v-col>

            </v-card>
          </v-col>

          <v-col cols="3">
            <v-card class="pa-2" outlined style="background-color: lightgrey;" tile>
              <v-col cols="12">
                <v-card class="pa-1" outlined tile>
                  R
                </v-card>
              </v-col>
            </v-card>
          </v-col>

        </v-row>
      </v-card>
    </v-col>
  </v-row>

</v-app>
</template>

<script>
export default {
  data: () => ({
    // justify: [
    //   'start',
    //   'end',
    //   'center',
    //   'space-between',
    //   'space-around',
    // ],
  }),
}
</script>

<style lang="sass" scoped>
.wrap
  width: 100%
  height: 100vh
  background: #000
</style>
