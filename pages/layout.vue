<template>
<v-app class="grey lighten-5">
  <v-row class="d-flex flex-nowrap" width="">
    <!-- Outer -->
    <v-col cols="12" class="wrap">
      <v-card class="pa-1" outlined tile>

        <v-row no-gutters>
          <v-col cols="12">
            <v-card class="pa-2 pl-4" outlined tile>
              <h2>Setting Manu</h2>
            </v-card>
          </v-col>
        </v-row>

        <v-row>

          <!-- Layout-Left  -->
          <v-col cols="3" style="">
            <!-- Basic Conditions -->
            <v-card class="pa-1" outlined tile>
              <v-col cols="12">
                <v-card class="pa-1" outlined tile>
                  <v-col cols="12">
                    <h3 class="pb-2">Basic Conditions</h3>
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
            </v-card>
            <!-- /Basic Conditions -->

            <!-- Month Conditions -->
            <v-card class="pa-1" outlined tile>
              <v-col cols="12">
                <v-card class="pa-1" outlined tile>
                  <v-col cols="12">
                    <h3 class="pb-4">Month Conditions </h3>
                    <!-- Date Picker -->
                    <div class="d-flex flex-column">
                      <div class="form_title">Pick Month：</div>
                      <div class="form_field">
                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                          <template v-slot:activator="{ on }">
                            <v-text-field v-model="date" label="" prepend-icon="event" readonly v-on="on"></v-text-field>
                          </template>
                          <v-date-picker v-model="date" type="month" :landscape="landscape" :reactive="reactive" locale="jp-ja" :day-format="date => new Date(date).getDate()" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                            <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                          </v-date-picker>
                        </v-menu>
                      </div>
                    </div>
                    <!-- / Date Picker -->

                    <div class="d-flex flex-column">
                      <div class="form_title">WorkTime：</div>
                      <div class="form_field">
                        <v-text-field label="" single-line></v-text-field>
                      </div>
                    </div>
                    <div class="d-flex flex-column">
                      <div class="form_title">Holiday：</div>
                      <div class="form_field">
                        <v-text-field label="" single-line></v-text-field>
                      </div>
                    </div>

                    <div class="d-flex flex-column">
                      <div class="form_title">NightWork：</div>
                      <div class="form_field">
                        <v-text-field label="" single-line></v-text-field>
                      </div>
                    </div>
                  </v-col>
                </v-card>
              </v-col>
            </v-card>
            <!-- /Month Conditions -->

            <!-- Week Conditions -->
            <v-card class="pa-1" outlined tile>
              <v-col cols="12">
                <v-card class="pa-1" outlined tile>
                  <v-col cols="12">
                    <h3 class="pb-3">Week Conditions</h3>
                    <!-- <h4 class="pb-1">Weekdays</h4> -->

                    <div class="d-flex flex-column">
                      <h5 class="grey lighten-2 pa-1 mb-2 mt-1">Hi Class：</h5>
                      <div class="form_title"></div>
                      <div class="form_field">
                        <v-text-field label="Weekdays" value="0" type="number" suffix=""></v-text-field>
                        <v-text-field label="Saturday" value="0" type="number" suffix=""></v-text-field>
                        <v-text-field label="Holiday" value="0" type="number" suffix=""></v-text-field>
                      </div>
                    </div>

                    <div class="d-flex flex-column">
                      <h5 class="grey lighten-2 pa-1 mb-2 mt-1">Mid Class：</h5>
                      <div class="form_title"></div>
                      <div class="form_field">
                        <v-text-field label="Weekdays" value="0" type="number" suffix=""></v-text-field>
                        <v-text-field label="Saturday" value="0" type="number" suffix=""></v-text-field>
                        <v-text-field label="Holiday" value="0" type="number" suffix=""></v-text-field>
                      </div>
                    </div>

                    <div class="d-flex flex-column">
                      <h5 class="grey lighten-2 pa-1 mb-2 mt-1">Low Class：</h5>
                      <div class="form_title"></div>
                      <div class="form_field">
                        <v-text-field label="Weekdays" value="0" type="number" suffix=""></v-text-field>
                        <v-text-field label="Saturday" value="0" type="number" suffix=""></v-text-field>
                        <v-text-field label="Holiday" value="0" type="number" suffix=""></v-text-field>
                      </div>
                    </div>

                    <div class="d-flex flex-column">
                      <h5 class="grey lighten-2 pa-1 mb-2 mt-1">Sub Class：</h5>
                      <div class="form_title"></div>
                      <div class="form_field">
                        <v-text-field label="Weekdays" value="0" type="number" suffix=""></v-text-field>
                        <v-text-field label="Saturday" value="0" type="number" suffix=""></v-text-field>
                        <v-text-field label="Holiday" value="0" type="number" suffix=""></v-text-field>
                      </div>
                    </div>

                  </v-col>

                </v-card>
              </v-col>
            </v-card>
            <!-- /Week Conditions -->
          </v-col>
          <!-- /Layout-Left  -->

          <!-- Main -->
          <v-col cols="6">

            <v-card class="pa-1" outlined tile>
              <v-col cols="12">
                <!-- Main team-->
                <v-card class="pa-1" outlined tile>
                  <v-col cols="12" class="d-flex">
                    <v-col cols="6">
                      <h3 class="pb-3">Team Setting</h3>
                      <!-- <h4 class="pb-1">Weekdays</h4> -->
                      <div class="d-flex flex-column">
                        <div class="form_title">NewTeam：</div>
                        <div class="form_field">
                          <v-text-field label="" single-line></v-text-field>
                        </div>
                        <div class="form_title">Team Name：</div>
                        <div class="form_field">
                          <v-text-field label="" single-line></v-text-field>
                        </div>
                        <div class="form_title">Team Count：</div>
                        <div class="form_field">
                          <v-text-field label="" single-line></v-text-field>
                        </div>
                      </div>
                    </v-col>

                    <v-col cols="6">
                      <p>Team Select</p>
                    </v-col>
                  </v-col>
                </v-card>
                <!-- /Week Conditions -->
              </v-col>

              <v-col cols="12">
                <v-card class="pa-1" outlined tile>
                  <ul class="menberLists">
                    <li>MemberName/ Skill / Hope Day Job Night</li>
                    <li>MemberName/ Skill / Hope Day Job Night</li>
                    <li>MemberName/ Skill / Hope Day Job Night</li>
                    <li>MemberName/ Skill / Hope Day Job Night</li>
                    <li>MemberName/ Skill / Hope Day Job Night</li>
                    <li>MemberName/ Skill / Hope Day Job Night</li>
                    <li>MemberName/ Skill / Hope Day Job Night</li>
                    <li>MemberName/ Skill / Hope Day Job Night</li>
                    <li>MemberName/ Skill / Hope Day Job Night</li>
                    <li>MemberName/ Skill / Hope Day Job Night</li>
                    <li>MemberName/ Skill / Hope Day Job Night</li>
                    <li>MemberName/ Skill / Hope Day Job Night</li>
                  </ul>
                </v-card>
              </v-col>
            </v-card>
          </v-col>
          <!-- /Main -->

          <v-col cols="3">
            <v-card class="pt-2" outlined style="" tile>
              <v-col cols="12">
                <ul class="menberLists">
                  <li draggable>MemberName/ vacation days / OverTime</li>
                  <li draggable>MemberName/ vacation days / OverTime</li>
                  <li draggable>MemberName/ vacation days / OverTime</li>
                  <li draggable>MemberName/ vacation days / OverTime</li>
                  <li draggable>MemberName/ vacation days / OverTime</li>
                  <li draggable>MemberName/ vacation days / OverTime</li>
                  <li draggable>MemberName/ vacation days / OverTime</li>
                  <li draggable>MemberName/ vacation days / OverTime</li>
                  <li draggable>MemberName/ vacation days / OverTime</li>
                  <li draggable>MemberName/ vacation days / OverTime</li>
                  <li draggable>MemberName/ vacation days / OverTime</li>
                  <li draggable>MemberName/ vacation days / OverTime</li>
                </ul>
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
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    modal: false,
  }),
}
</script>

<style lang="sass" scoped>
.wrap
  max-width: 1600px
  min-width: 80vw
  width: 100%
.form_title
  font-size: 13px
.v-input.theme--light.v-text-field.v-text-field--single-line.v-text-field--is-booted
  margin: 0
  padding: 0
.menberLists
  ul
    padding: 0
  li
    list-style: none
    border: 1px solid #ccc
    border-radius: 2px
    padding: 12px
    margin-bottom: 12px
.v-application ul, .v-application ol
    padding-left: 0
</style>
