<template>
<v-app class="grey lighten-5">
  <v-row class="d-flex flex-nowrap" width="">
    <!-- Outer -->
    <v-col cols="12" class="wrap">
      <v-card class="pa-1" outlined tile>

        <v-row no-gutters>
          <v-col lg="6">
            <h2 class="mt-4 ml-3">条件入力</h2>
            <div class="d-inline-flex">
              <v-col cols="4">
                <v-select :items="teams" label="病棟"></v-select>
              </v-col>
              <v-col cols="4">
                <v-select :items="year" label="年"></v-select>
              </v-col>
              <v-col cols="4">
                <v-select :items="month" label="月"></v-select>
              </v-col>
            </div>
          </v-col>
        </v-row>

        <v-tabs color="teal" slider-color="teal">
          <v-tab ripple>病院条件</v-tab>
          <v-tab ripple>個人条件</v-tab>

          <!-- tab1 -->
          <v-tab-item>
            <v-row>
              <!-- Layout-Left  -->
              <v-col cols="6" style="">
                <!-- Basic Conditions -->
                <v-card class="pa-1" outlined tile>
                  <v-col cols="12">
                    <v-card class="pa-1" outlined tile>
                      <v-col cols="12">
                        <h3 class="pb-2">基本条件入力</h3>
                        <div class="mt-4 d-flex flex-column">
                          <div class="form_title">所定労働時間</div>
                          <div class="form_field">
                            <v-text-field label="時間" single-line></v-text-field>
                          </div>
                        </div>
                        <div class="d-flex flex-column">
                          <div class="form_title">総夜勤時間：</div>
                          <div class="form_field">
                            <v-text-field label="時間" single-line></v-text-field>
                          </div>
                        </div>
                        <div class="d-flex flex-column">
                          <div class="form_title">公休：</div>
                          <div class="form_field">
                            <v-text-field label="日" single-line></v-text-field>
                          </div>
                        </div>
                      </v-col>
                    </v-card>
                  </v-col>
                </v-card>
                <!-- /Basic Conditions -->



                <!-- ToDo List -->
                <v-card class="totoList pa-1 mt-4" outlined tile>
                  <v-col cols="12" class="">
                    <div>
                      <h4 class="totoList pt-1 mb-2">Work Styles</h4>
                      <!-- v-on:keyup.enter="addTodo(newItemTitle) -->
                      <input type="text" placeholder="input Style" v-model="newItemTitle">

                      <select v-model="newItemSelect">
                        <option value="08:00">08:00</option>
                        <option value="22:00">22:00</option>
                        <option value="12:00">12:00</option>
                      </select>
                      〜
                      <select v-model="newItemJob">
                        <option value="19:00">19:00</option>
                        <option value="12:00">12:00</option>
                        <option value="6:00">6:00</option>
                      </select>

                      <button type="button" name="button" v-on:click="addTodo(newItemTitle, newItemSelect, newItemJob)">追加</button>
                    </div>

                    <ul>
                      <li v-for="item in items" :key="item.index">
                        <p>
                          <label v-bind:class="{ done: item.isChecked }">
                            {{ item.title }} ｜ {{ item.selItem }} 〜 {{ item.itemJob }} <input type="checkbox" v-model="item.isChecked">
                          </label>
                        </p>
                      </li>
                    </ul>

                    <button v-on:click="deleteTodo()">Delete</button>

                  </v-col>
                </v-card>
                <!-- /ToDo List -->
              </v-col>
              <!-- /Layout-Left  -->

              <!-- Main -->
              <v-col cols="6">

                <v-card class="pa-1" outlined tile>
                  <v-col cols="12">

                    <!-- Dialog -->
                    <v-card class="mb-4">
                      <v-tabs vertical>
                        <v-tab>
                          <v-icon left>mdi-account</v-icon>
                          Team 1
                        </v-tab>
                        <v-tab>
                          <v-icon left>mdi-lock</v-icon>
                          Team 2
                        </v-tab>
                        <v-tab>
                          <v-icon left>mdi-access-point</v-icon>
                          Team 3
                        </v-tab>

                        <v-tab-item>
                          <v-card flat>
                            <v-card-text>
                              <p>
                                Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                              </p>
                              <p class="mb-0">
                                Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
                              </p>
                            </v-card-text>
                          </v-card>
                        </v-tab-item>
                        <v-tab-item>
                          <v-card flat>
                            <v-card-text>
                              <p>
                                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing
                                dolor
                                urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                              </p>

                              <p class="mb-0">
                                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum
                                nec,
                                nisi.
                              </p>
                            </v-card-text>
                          </v-card>
                        </v-tab-item>
                        <v-tab-item>
                          <v-card flat>
                            <v-card-text>
                              <p>
                                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget,
                                vestibulum et, tempor auctor, justo.
                              </p>

                              <p class="mb-0">
                                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus
                                interdum sagittis.
                              </p>
                            </v-card-text>
                          </v-card>
                        </v-tab-item>
                      </v-tabs>
                    </v-card>


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

                          <v-dialog v-model="dialog" persistent max-width="290">
                            <template v-slot:activator="{ on }">
                              <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
                            </template>
                            <v-card>
                              <v-card-title class="headline">Use Google's location service?</v-card-title>
                              <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
                                <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>

                        </v-col>
                      </v-col>
                    </v-card>
                    <!-- /Week Conditions -->

                  </v-col>
                  <!-- Members List-->
                  <v-col cols="12">
                    <v-card class="pa-1" outlined tile>
                      <h4 class="totoList pt-1 pl-2 mb-2">Members</h4>
                      <ul class="menberLists pa-2">
                        <li>MemberName/ Skill / Hope Day Job Night</li>
                        <li>MemberName/ Skill / Hope Day Job Night</li>
                        <li>MemberName/ Skill / Hope Day Job Night</li>
                      </ul>
                    </v-card>

                  </v-col>
                </v-card>
              </v-col>
              <!-- /Main -->


            </v-row>

          </v-tab-item>
          <!-- /tab1 -->
          <!-- tab2 -->
          <v-tab-item>
            <v-card flat>
              <v-card-text>Contents for Item 2 go here</v-card-text>
            </v-card>
          </v-tab-item>

        </v-tabs>

      </v-card>
    </v-col>

  </v-row>
</v-app>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    modal: false,
    dialog: false,
    // getDay
    year: [2018, 2019, 2020, 2021, 2022],
    month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    day: 1,
    days_max: '',
    teams: ['1A', '1B', '1C', '2A', '2B', '2C'],
    items: [{
      title: 'DayWork',
      isChecked: false,
      selItem: "08:00",
      itemJob: "19:00"
    }, ],
    newItemTitle: 'DayWork',
    newItemSelect: '08:00',
    newItemJob: '19:00',
    active: false,
  }),
  created: function() {
    this.get_days();
  },
  methods: { //methodsオプションをまるっと追加
    addTodo: function(newItemTitle, newItemSelect, newItemJob) {
      if (this.newItemTitle.length < 1) {
        return false
      } else {
        this.items.push({
          title: newItemTitle,
          selItem: newItemSelect,
          itemJob: newItemJob,
          isChecked: false,
        });
      }
      this.newItemTitle = 'DayWork'
      this.newItemSelect = '08:00'
      this.newItemJob = '19:00'
    },
    deleteTodo: function() {
      this.items = this.items.filter(function(item) {
        return item.isChecked === false //チェックが付いていないものはスルーする
      });
    },
    // 日の最大数を取得
    get_days: function() {
      this.days_max = new Date(this.year, this.month, 0).getDate();
    },
  },
}
</script>

<style lang="sass" scoped>
h1,h2,h3,h4
  font-weight: 400
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

// todo
.totoList
  ul
    margin-top: 12px
  li
    line-height: 1.5
    list-style: none
    display: flex
    width: 100%
    margin-left: 12px
  .done
    text-decoration: line-through
  input, button, select
    margin: 4px
    outline: none
    border: 1px solid #ccc
    font-size: 16px
    background: none
    background-color: #eee
    border-radius: 4px
    padding: 4px
  select
   height: 32px

</style>
