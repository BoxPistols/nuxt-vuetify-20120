<template>
<v-app class="grey lighten-5">
  <v-row>
    <!-- Outer -->
    <v-col cols="12">
      <v-card class="pa-1" outlined tile>

        <v-row no-gutters>
          <v-col cols="12">
            <v-card class="pa-2 pl-4" outlined tile>
              <h2>Setting</h2>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="3">
            <v-card class="pa-1" outlined tile>
              <v-col cols="12">
                <v-card class="pa-1" outlined tile>
                  <v-col cols="12">

                    <h3 class="pb-4">Basic</h3>

                    <v-switch v-model="switch1" :label="`Lock: ${switch1.toString()}`"></v-switch>

                    <div class="d-flex flex-column">
                      <div class="form_title">MemberID：</div>
                      <div class="form_field">
                        <v-text-field label="" single-line></v-text-field>
                      </div>
                    </div>
                    <div class="d-flex flex-column">
                      <div class="form_title">Boss Name：</div>
                      <div class="form_field">
                        <v-text-field label="" single-line></v-text-field>
                      </div>
                    </div>
                    <div class="d-flex flex-column">
                      <div class="form_title">Team：</div>
                      <div class="form_field">
                        <v-text-field label="" single-line></v-text-field>
                      </div>
                    </div>
                  </v-col>

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
    switch1: true,
  }),
}
</script>

<style lang="sass" scoped>
.form_title
  white-space: nowrap
  text-align: left
  // width: 50%
.v-input
  margin: 0
</style>
