<template>
  <v-row>
    <!-- Layout-Right  -->
    <v-col cols="12" class="flex" style="">
      <!-- <v-card flat> -->
      <v-card class="pa-1" outlined tile>
        <!-- <v-card-text>Contents for Item 2 go here</v-card-text> -->
        <v-col cols="12" style="">
          <h3>メンバーリスト</h3>

          <v-container fluid="">
            <h2>チーム名：2A</h2>
            <h3>上級</h3>
            <v-row align="center">
              <v-col cols="12" sm="4">
                <v-subheader v-text="'佐藤真由美'"></v-subheader>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select v-model="e1" :items="states" :menu-props="{ maxHeight: '400' }" label="ペア選択" multiple=""
                  hint="NG選択" persistent-hint=""></v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <textarea placeholder="個人ノート"></textarea>
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid="">
            <h3>中級</h3>
            <v-row align="center">
              <v-col cols="12" sm="4">
                <v-subheader v-text="'香川芳江'"></v-subheader>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select v-model="e2" :items="states" :menu-props="{ maxHeight: '400' }" label="ペア選択" multiple=""
                  hint="NG選択" persistent-hint=""></v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <textarea placeholder="個人ノート"></textarea>
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid="">
            <v-row align="center">
              <v-col cols="12" sm="4">
                <v-subheader v-text="'吉岡万由子'"></v-subheader>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select v-model="e3" :items="states" :menu-props="{ maxHeight: '400' }" label="ペア選択" multiple=""
                  hint="NG選択" persistent-hint=""></v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <textarea placeholder="個人ノート"></textarea>
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid="">
            <h3>初級</h3>
            <v-row align="center">
              <v-col cols="12" sm="4">
                <v-subheader v-text="'佐藤真由美'"></v-subheader>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select v-model="e4" :items="states" :menu-props="{ maxHeight: '400' }" label="ペア選択" multiple=""
                  hint="NG選択" persistent-hint=""></v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <textarea placeholder="個人ノート"></textarea>
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid="">
            <v-row align="center">
              <v-col cols="12" sm="4">
                <v-subheader v-text="'佐藤真由美'"></v-subheader>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select v-model="e5" :items="states" :menu-props="{ maxHeight: '400' }" label="ペア選択" multiple=""
                  hint="NG選択" persistent-hint=""></v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <textarea placeholder="個人ノート"></textarea>
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid="">
            <v-row align="center">
              <v-col cols="12" sm="4">
                <v-subheader v-text="'佐藤真由美'"></v-subheader>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select v-model="e6" :items="states" :menu-props="{ maxHeight: '400' }" label="ペア選択" multiple=""
                  hint="NG選択" persistent-hint=""></v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <textarea placeholder="個人ノート"></textarea>
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid="">
            <v-row align="center">
              <v-col cols="12" sm="4">
                <v-subheader v-text="'佐藤真由美'"></v-subheader>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select v-model="e7" :items="states" :menu-props="{ maxHeight: '400' }" label="ペア選択" multiple=""
                  hint="NG選択" persistent-hint=""></v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <textarea placeholder="個人ノート"></textarea>
              </v-col>
            </v-row>
          </v-container>


          <div class="teamGroup">
            <div class="title_team">Aチーム</div>
            <div class="title_class">上級</div>
            <ul>
              <li class="ngBox">
                <p>佐藤真由美</p>
                <div class="flex">
                  <v-select :items="name" label="スタッフ"></v-select> +
                  <v-select :items="name" label="スタッフ"></v-select>
                  <textarea name="" id="" cols="" rows="8" placeholder="NG理由など"></textarea>
                </div>

              </li>
              <li>高橋敏</li>
              <li>田中善子</li>
              <li>鈴木雅美</li>
            </ul>
            <div class="title_class">中級</div>
            <ul>
              <li>佐藤真由美</li>
              <li>高橋敏</li>
              <li>田中善子</li>
              <li>鈴木雅美</li>
            </ul>
            <div class="title_class">初級</div>
            <ul>
              <li>佐藤真由美</li>
              <li>高橋敏</li>
              <li>田中善子</li>
              <li>鈴木雅美</li>
            </ul>
          </div>

          <div class="teamGroup">
            <div class="title_team">Bチーム</div>
            <div class="title_class">上級</div>
            <ul>
              <li>佐藤真由美</li>
              <li>高橋敏</li>
              <li>田中善子</li>
              <li>鈴木雅美</li>
            </ul>
            <div class="title_class">中級</div>
            <ul>
              <li>佐藤真由美</li>
              <li>高橋敏</li>
              <li>田中善子</li>
              <li>鈴木雅美</li>
            </ul>
            <div class="title_class">初級</div>
            <ul>
              <li>佐藤真由美</li>
              <li>高橋敏</li>
              <li>田中善子</li>
              <li>鈴木雅美</li>
            </ul>
          </div>

        </v-col>
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
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ],
    teams: ['1A', '1B', '1C', '2A', '2B', '2C'],
    name: ['佐藤真由美', '鈴木雅美', '高橋敏', '田中善子'],
    items: '',
  }),
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

textarea
  border: 1px solid #eee
  width: 100%
  max-width: 180px
  color: #444
  padding: 12px
  font-size: 14px

.v-text-field fieldset,
.v-text-field .v-input__control
  width: 120px

</style>
