<template>
<v-app class="grey lighten-5">
  <v-row class="d-flex flex-nowrap" width="">
    <!-- Outer -->
    <v-col cols="12" class="wrap">
      <v-card class="pa-2" outlined tile>

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

        <v-tabs class="ml-3" color="teal" slider-color="teal">
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
                        <h3 class="pb-2 ml-2">基本条件入力</h3>
                        <v-col cols="8">
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
                      </v-col>
                    </v-card>
                  </v-col>
                </v-card>
                <!-- /Basic Conditions -->

                <!-- ToDo List -->
                <v-card class="totoList pa-1 mt-4" outlined tile>
                  <v-col cols="12" class="">
                    <div>
                      <h3 class="totoList pl-2 mb-2">勤務種類の作成</h3>
                      <!-- v-on:keyup.enter="addTodo(newItemTitle) -->
                      <table class="working_type">
                        <tbody>
                          <th class="accent">勤務種類</th>
                          <th class="accent" colspan="2">開始時間</th>
                          <th>&nbsp;ー&nbsp;</th>
                          <th class="accent" colspan="2">終了時間</th>
                          <tr>
                            <td><input class="works" type="text" placeholder="勤務種類" v-model="newItemTitle"></td>
                            <td>
                              <v-select class="time start hour" :items="workTime" label="時間" placeholder="00" v-model="createJobStartHour"></v-select>
                            </td>
                            <td>
                              <v-select class="time stert minute" :items="workMinit" label="分" placeholder="00" v-model="createJobStartMinute"></v-select>
                            </td>
                            <td>&nbsp;ー&nbsp;</td>
                            <td>
                              <v-select class="time end hour" :items="workTime" label="時間" placeholder="00" v-model="createJobEndtHour"></v-select>
                            </td>
                            <td>
                              <v-select class="time end minute" :items="workMinit" label="分" placeholder="00" v-model="createJobEndMinute"></v-select>
                            </td>
                            <td> <button class="time push" type="button" name="button" v-on:click="addTodo(newItemTitle, createJobStartHour, createJobStartMinute, createJobEndtHour, createJobEndMinute)">作成</button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <ul class="todoView">
                      <li v-for="item in items" :key="item.index">
                        <p>
                          <label class="createJobList" v-bind:class="{ done: item.isChecked }">
                            {{ item.title }}： {{ item.setJobStartHour }}:{{ item.setJobStartMinute }} - {{ item.setJobEndHour }}:{{ item.setJobEndMinute }} &nbsp;<input type="checkbox" class="selectDelete" v-model="item.isChecked">
                          </label>
                        </p>
                      </li>
                    </ul>
                    <button v-on:click="deleteTodo()">選択削除</button>

                  </v-col>
                </v-card>
                <!-- /ToDo List -->


                <!-- List-->
                <v-card class="mt-3 pa-1" outlined tile>
                  <h3 class="totoList pt-1 pl-2 mb-2">NGシフト</h3>
                  <ul class="ngLists pa-2">
                    <li><input type="checkbox">深夜勤/明け → 深夜勤</li>
                    <li><input type="checkbox">准夜勤 → 日勤</li>
                    <li><input type="checkbox">5連勤</li>
                    <li><input type="checkbox">深夜勤/明け → 准夜勤</li>
                    <li><input type="checkbox">...</li>

                    <!--
                        1.準夜→日勤
                   　　　2.日勤→深夜
                   　　　3.深夜→休→日勤（深夜終了した日の次の日が日勤ということを指している）
                   　　　4.準深夜→日勤
                   　　　5.深夜→深夜
                   　　　6.準深夜→準深夜
                   　　　7.準夜→準夜
                 -->
                  </ul>
                </v-card>



              </v-col>
              <!-- /Layout-Left  -->

              <!-- Main -->
              <v-col cols="6">

                <v-card class="pa-1 calcArea" outlined tile>
                  <v-col cols="12">

                    <!-- Calc -->

                      <v-col cols="12" class="d-flex">
                        <v-col cols="6">
                          <h3 class="pb-3">各曜日に必要な人数</h3>

                          <CalcTable />
                        </v-col>
                      </v-col>

                    <!-- / -->

                  </v-col>

                </v-card>
              </v-col>
              <!-- /Main -->


            </v-row>

          </v-tab-item>
          <!-- /tab1 -->

          <!-- tab2 -->
          <v-tab-item>
            <NGPaire />
          </v-tab-item>

        </v-tabs>

      </v-card>
    </v-col>

  </v-row>
</v-app>
</template>

<script>
import NGPaire from './ngPaire.vue'
import CalcTable from './calcTable.vue'

export default {
  components: {
    NGPaire,
    CalcTable
  },
  data: () => ({
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    modal: false,
    dialog: false,
    teams: ['1A', '1B', '1C', '2A', '2B', '2C'],
    // getDay
    year: [2022, 2021, 2020, 2019, 2018],
    month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    day: 1,
    days_max: '',
    workTime: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
    workMinit: ['00', '15', '30', '45'],
    items: [{
      title: '日勤',
      isChecked: false,
      setJobStartHour: '08',
      setJobStartMinute: '30',
      setJobEndHour: '18',
      setJobEndMinute: '30',
    }, ],
    newItemTitle: '',
    // newItemSelect: '00',
    createJobStartHour: '00',
    createJobStartMinute: '00',
    createJobEndtHour: '00',
    createJobEndMinute: '00',
    // newItemJob: '00',
    active: false,
  }),
  created: function() {
    this.get_days();
  },
  methods: { //methodsオプションをまるっと追加
    addTodo: function(newItemTitle, createJobStartHour, createJobStartMinute, createJobEndtHour, createJobEndMinute) {
      if (this.newItemTitle.length < 1) {
        return false
      } else {
        this.items.push({
          title: newItemTitle,
          setJobStartHour: createJobStartHour,
          setJobStartMinute: createJobStartMinute,
          setJobEndHour: createJobEndtHour,
          setJobEndMinute: createJobEndMinute,
          isChecked: false,
        });
      }
      this.newItemTitle = '日勤'
      this.createJobStartHour = '00'
      this.createJobStartMinute = '00'
      this.createJobEndtHour = '00'
      this.createJobEndMinute = '00'
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
.flex
  display: flex
  min-width: 80vw


h1,h2,h3,h4
  font-weight: 400
.wrap
  max-width: 1600px
  min-width: 80vw
  width: 100%
.form_title
  font-size: 14px
.v-input.theme--light.v-text-field.v-text-field--single-line.v-text-field--is-booted
  margin: 0
  padding: 0
.v-application ul, .v-application ol
    padding-left: 0

// todo
.totoList
  ul
    margin-top: 16px
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
    // background-color: #eee
    border-radius: 4px
    padding: 4px 8px
  select
    height: 32px
table.working_type
  margin-top: 16px
  th
    text-align: left
    font-weight: normal
    font-size: 13px
    color: gray
    white-space: nowrap
    &.accent
      text-align: center
      padding: 8px
      background: #234!important
      color: white
      letter-spacing: 2px
  input
    &.works
      width: 7em
      margin: 0 .2em 0 0
  select
    &.time
      padding-left: 12px
      width: 4em
  button.push
    margin: 0 0 0 12px
    white-space: nowrap
    padding: 4px 24px

label.createJobList
  font-size: 1.2em
  display: flex
  align-items: center

.ngLists
  ul
    padding: 0
  li
    list-style: none
    padding: 8px
    margin-bottom: 4px
    display: flex
    align-items: center
    input[type="checkbox"]
      vertical-align: middle
      margin: -2px 6px 0 0

button.add
  margin-left: 85%
  border: 1px solid #ccc
  padding: 4px 16px
  border-radius: 4px
  white-space: nowrap

.v-text-field fieldset,
.v-text-field .v-input__control
  width: 120px

.calcArea
  height: 100%
  min-height: 80vh
  overflow-y: scroll

</style>
