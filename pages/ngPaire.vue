<template>
<v-row>
  <!-- Layout-Right -->
  <v-col cols='12' class='pa-4' style=''>
    <!-- <v-card flat> -->

    <v-card class='pa-4' outlined='outlined' tile='tile'>
      <div class='memberArea'>
        <!-- <h3>メンバーリスト</h3> -->
        <v-container fluid=''>
          <h2 class="mt-4 mb-4">チーム：{{ teams[3] }}</h2>
          <h3>上級</h3>
          <v-row align='center' class="manberInfo">
            <v-col cols='12' sm='3'>
              <v-subheader v-text='"佐藤真由美"'></v-subheader>
            </v-col>
            <v-col cols='12' sm='3'>
              <v-select v-model='e1' :items='states' :menu-props='{ maxHeight: "400" }' label='NGペア' multiple='' hint='' persistent-hint=''></v-select>
            </v-col>
            <v-col cols='12' sm='6'>
              <textarea placeholder='個人ノート'></textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid=''>
          <h3>中級</h3>
          <v-row align='center' class="manberInfo">
            <v-col cols='12' sm='3'>
              <v-subheader v-text='"香川芳江"'></v-subheader>
            </v-col>
            <v-col cols='12' sm='3'>
              <v-select v-model='e2' :items='states' :menu-props='{ maxHeight: "400" }' label='NGペア' multiple='' hint='' persistent-hint=''></v-select>
            </v-col>
            <v-col cols='12' sm='6'>
              <textarea placeholder='個人ノート'></textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid=''>
          <v-row align='center' class="manberInfo">
            <v-col cols='12' sm='3'>
              <v-subheader v-text='"吉岡万由子"'></v-subheader>
            </v-col>
            <v-col cols='12' sm='3'>
              <v-select v-model='e3' :items='states' :menu-props='{ maxHeight: "400" }' label='NGペア' multiple='' hint='' persistent-hint=''></v-select>
            </v-col>
            <v-col cols='12' sm='6'>
              <textarea placeholder='個人ノート'></textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid=''>
          <h3>初級</h3>
          <v-row align='center' class="manberInfo">
            <v-col cols='12' sm='3'>
              <v-subheader v-text='"佐藤真由美"'></v-subheader>
            </v-col>
            <v-col cols='12' sm='3'>
              <v-select v-model='e4' :items='states' :menu-props='{ maxHeight: "400" }' label='NGペア' multiple='' hint='' persistent-hint=''></v-select>
            </v-col>
            <v-col cols='12' sm='6'>
              <textarea placeholder='個人ノート'></textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid=''>
          <v-row align='center' class="manberInfo">
            <v-col cols='12' sm='3'>
              <v-subheader v-text='"佐藤真由美"'></v-subheader>
            </v-col>
            <v-col cols='12' sm='3'>
              <v-select v-model='e5' :items='states' :menu-props='{ maxHeight: "400" }' label='NGペア' multiple='' hint='' persistent-hint=''></v-select>
            </v-col>
            <v-col cols='12' sm='6'>
              <textarea placeholder='個人ノート'></textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid=''>
          <v-row align='center' class="manberInfo">
            <v-col cols='12' sm='3'>
              <v-subheader v-text='"佐藤真由美"'></v-subheader>
            </v-col>
            <v-col cols='12' sm='3'>
              <v-select v-model='e6' :items='states' :menu-props='{ maxHeight: "400" }' label='NGペア' multiple='' hint='' persistent-hint=''></v-select>
            </v-col>
            <v-col cols='12' sm='6'>
              <textarea placeholder='個人ノート'></textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid=''>
          <v-row align='center' class="manberInfo">
            <v-col cols='12' sm='3'>
              <v-subheader v-text='"佐藤真由美"'></v-subheader>
            </v-col>
            <v-col cols='12' sm='3'>
              <v-select v-model='e7' :items='states' :menu-props='{ maxHeight: "400" }' label='NGペア' multiple='' hint='' persistent-hint=''></v-select>
            </v-col>
            <v-col cols='12' sm='6'>
              <textarea placeholder='個人ノート'></textarea>
            </v-col>
          </v-row>
        </v-container>

      </div>
      <!--  -->
      <div class='memberArea'>
        <!-- <h3>メンバーリスト</h3> -->
        <v-container fluid=''>
          <h2 class="mt-4 mb-4">チーム：{{ teams[4] }}</h2>
          <h3>上級</h3>
          <v-row align='center' class="manberInfo">
            <v-col cols='12' sm='3'>
              <v-subheader v-text='"佐藤真由美"'></v-subheader>
            </v-col>
            <v-col cols='12' sm='3'>
              <v-select v-model='e1' :items='states' :menu-props='{ maxHeight: "400" }' label='NGペア' multiple='' hint='' persistent-hint=''></v-select>
            </v-col>
            <v-col cols='12' sm='6'>
              <textarea placeholder='個人ノート'></textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid=''>
          <h3>中級</h3>
          <v-row align='center' class="manberInfo">
            <v-col cols='12' sm='3'>
              <v-subheader v-text='"香川芳江"'></v-subheader>
            </v-col>
            <v-col cols='12' sm='3'>
              <v-select v-model='e2' :items='states' :menu-props='{ maxHeight: "400" }' label='NGペア' multiple='' hint='' persistent-hint=''></v-select>
            </v-col>
            <v-col cols='12' sm='6'>
              <textarea placeholder='個人ノート'></textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid=''>
          <v-row align='center' class="manberInfo">
            <v-col cols='12' sm='3'>
              <v-subheader v-text='"吉岡万由子"'></v-subheader>
            </v-col>
            <v-col cols='12' sm='3'>
              <v-select v-model='e3' :items='states' :menu-props='{ maxHeight: "400" }' label='NGペア' multiple='' hint='' persistent-hint=''></v-select>
            </v-col>
            <v-col cols='12' sm='6'>
              <textarea placeholder='個人ノート'></textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid=''>
          <h3>初級</h3>
          <v-row align='center' class="manberInfo">
            <v-col cols='12' sm='3'>
              <v-subheader v-text='"佐藤真由美"'></v-subheader>
            </v-col>
            <v-col cols='12' sm='3'>
              <v-select v-model='e4' :items='states' :menu-props='{ maxHeight: "400" }' label='NGペア' multiple='' hint='' persistent-hint=''></v-select>
            </v-col>
            <v-col cols='12' sm='6'>
              <textarea placeholder='個人ノート'></textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid=''>
          <v-row align='center' class="manberInfo">
            <v-col cols='12' sm='3'>
              <v-subheader v-text='"佐藤真由美"'></v-subheader>
            </v-col>
            <v-col cols='12' sm='3'>
              <v-select v-model='e5' :items='states' :menu-props='{ maxHeight: "400" }' label='NGペア' multiple='' hint='' persistent-hint=''></v-select>
            </v-col>
            <v-col cols='12' sm='6'>
              <textarea placeholder='個人ノート'></textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid=''>
          <v-row align='center' class="manberInfo">
            <v-col cols='12' sm='3'>
              <v-subheader v-text='"佐藤真由美"'></v-subheader>
            </v-col>
            <v-col cols='12' sm='3'>
              <v-select v-model='e6' :items='states' :menu-props='{ maxHeight: "400" }' label='NGペア' multiple='' hint='' persistent-hint=''></v-select>
            </v-col>
            <v-col cols='12' sm='6'>
              <textarea placeholder='個人ノート'></textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid=''>
          <v-row align='center' class="manberInfo">
            <v-col cols='12' sm='3'>
              <v-subheader v-text='"佐藤真由美"'></v-subheader>
            </v-col>
            <v-col cols='12' sm='3'>
              <v-select v-model='e7' :items='states' :menu-props='{ maxHeight: "400" }' label='NGペア' multiple='' hint='' persistent-hint=''></v-select>
            </v-col>
            <v-col cols='12' sm='6'>
              <textarea placeholder='個人ノート'></textarea>
            </v-col>
          </v-row>
        </v-container>

      </div>

    </v-card>
  </v-col>

</v-row>
</template>

<script>
export default {
  data: () => ({
    e1: [],
    e2: [],
    e3: [],
    e4: [],
    e5: [],
    e6: [],
    e7: [],
    states: [
      "吉岡万由子",
      "香川芳江",
      "佐藤真由美",
      "神田八重子",
      "長野葉子",
      "伊集院小枝子",
      "高橋敏",
      "鈴木雅美",
      "田中善子"
    ],
    teams: ['1A', '1B', '1C', '2A', '2B', '2C'],
    name: ['佐藤真由美', '鈴木雅美', '高橋敏', '田中善子', '伊集院小枝子', '神田八重子'],
    items: '',
  }),
}
</script>

<style lang="sass" scoped>

.memberArea
  max-width: 960px
  margin: auto

h1,h2,h3,h4
  font-weight: 400
h2
  font-size: 1.5em
  border-bottom: 1px solid #ccc
  padding: 24px 0 12px
h3
  font-size: 1.4em
  padding: 24px 0 12px

.wrap
  max-width: 1600px
  min-width: 80vw
  width: 100%

.v-subheader
  font-size: 1.15em
  text-align: center

.form_title
  font-size: 14px
.v-input.theme--light.v-text-field.v-text-field--single-line.v-text-field--is-booted
  margin: 0
  padding: 0

  .v-application ul, .v-application ol
    padding-left: 0

.teamGroup
  padding: 12px
  .title_team
    font-size: 24px
    line-height: 2
  .title_class
    font-size: 20px
    line-height: 2
  ul
    li
      list-style-type: none
      margin-left: 12px
      line-height: 1.75

.manberInfo
  background: rgba(167, 203, 213, 0.05)
  padding: 4px 24px 0px 4px
  margin: 0 12px 0 32px
  border: 1px solid #cee7ef
  border-radius: 8px

textarea
  border: 1px solid #abc
  width: 100%
  color: #444
  padding: 4px 12px
  margin: 0 12px
  font-size: 14px
  min-height: 80px
  min-width: 320px

.v-text-field fieldset,
.v-text-field .v-input__control
  width: 120px

</style>
