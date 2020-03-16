<template>
<div id="">
  <!-- <v-tabs class="ml-3" color="teal" slider-color="teal">

    <v-tab ripple>人数表示</v-tab>
    <v-tab ripple>割合表示</v-tab>

    <v-tab-item>
      <section class="percentNum"> -->

  <div class="wrapper">
    <button @click='toggle("one")'>Section 人</button>
    <button @click='toggle("two")'>Section ％</button><br><br>

    <div class="section active" data-section='one'>




      <section class="percentNum">

        <h2>割合表示</h2>

        <h3>日勤</h3>

        <table>
          <tr>
            <th>日勤</th>
            <th>平日</th>
            <th>土曜</th>
            <th>日/祝日</th>
          </tr>

          <tr>
            <td>上級</td>
            <td>
              <!-- <label><input v-model.number="days" type="number"></label> -->
              <label><input v-model.number="daysHiP" type="number">%</label>
            <td>
              <label><input v-model.number="daysSatP" type="number">%</label>
            </td>
            <td>
              <label><input v-model.number="daysSunP" type="number">%</label>
            </td>
          </tr>

          <tr>
            <td>初級</td>
            <td>
              <label><input v-model.number="daysBeginner" type="number">%</label>
            </td>
            <td>
              <label><input v-model.number="satBeginner" type="number">%</label>
            </td>
            <td>
              <label><input v-model.number="sunBeginner" type="number">%</label>
            </td>
          </tr>

          <tr>
            <td>出勤人数</td>
            <td>
              {{ daysHi + daysBeginner + Math.floor(days * 0.4)}}
            <td>
              {{ daysSat + satBeginner  + Math.floor(days * 0.4) }}
            </td>
            <td>
              {{ daysSun + sunBeginner  + Math.floor(days * 0.4) }}
            </td>
          </tr>

        </table>
      </section>


    </div>

    <div class="section" data-section='two'>
      <p>This is SECTION %</p>
      <table>
        <tbody>
          <th>A</th>
          <th>B</th>
          <th>c</th>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
  <!--
        <h2>人数表示</h2>
        <p></p><p></p>
        <h4>スタッフの合計人数（上級 + 中級 + 初級）</h4>
        <label><input v-model.number="days" type="number"></label>
        <br>
        <br>

        <h3>日勤</h3>
        <p>※休み、中級は省く</p>
        <table>
          <tr>
            <th></th>
            <th>平日</th>
            <th>土曜</th>
            <th>日/祝日</th>
          </tr>

          <tr>
            <td>上級</td>
            <td>
              <label><input v-model.number="days" type="number"></label>
              <label><input v-model.number="daysHi" type="number">人</label>
            <td>
              <label><input v-model.number="daysSat" type="number">人</label>
            </td>
            <td>
              <label><input v-model.number="daysSun" type="number">人</label>
            </td>
          </tr>

          <tr>
            <td>初級</td>
            <td>
              <label><input v-model.number="daysBeginner" type="number">人</label>
            </td>
            <td>
              <label><input v-model.number="satBeginner" type="number">人</label>
            </td>
            <td>
              <label><input v-model.number="sunBeginner" type="number">人</label>
            </td>
          </tr>

          <tr>
            <td>出勤人数</td>
            <td>
              {{ daysHi + daysBeginner + Math.floor(days * 0.4) }}人
            <td>
              {{ daysSat + satBeginner  + Math.floor(days * 0.4) }}人
            </td>
            <td>
              {{ daysSun + sunBeginner  + Math.floor(days * 0.4) }}人
            </td>
          </tr>

        </table>

        <p></p>
        <p></p>
        <p></p>
        <h3>深夜</h3>
        <table>
          <tr>
            <th></th>
            <th>平日</th>
            <th>土曜</th>
            <th>日/祝日</th>
          </tr>

          <tr>
            <td>上級</td>
            <td>
              <label><input v-model.number="days" type="number"></label>
              <label><input v-model.number="daysHi" type="number">人</label>
            <td>
              <label><input v-model.number="daysSat" type="number">人</label>
            </td>
            <td>
              <label><input v-model.number="daysSun" type="number">人</label>
            </td>
          </tr>

          <tr>
            <td>初級</td>
            <td>
              <label><input v-model.number="daysBeginner" type="number">人</label>
            </td>
            <td>
              <label><input v-model.number="satBeginner" type="number">人</label>
            </td>
            <td>
              <label><input v-model.number="sunBeginner" type="number">人</label>
            </td>
          </tr>

          <tr>
            <td>出勤人数</td>
            <td>
              {{ daysHi + daysBeginner + Math.floor(days * 0.4) }}人
            <td>
              {{ daysSat + satBeginner  + Math.floor(days * 0.4) }}人
            </td>
            <td>
              {{ daysSun + sunBeginner  + Math.floor(days * 0.4) }}人
            </td>
          </tr>

        </table>


        <p></p>
        <p></p>
        <p></p>
        <h3>準夜</h3>
        <table>
          <tr>
            <th></th>
            <th>平日</th>
            <th>土曜</th>
            <th>日/祝日</th>
          </tr>

          <tr>
            <td>上級</td>
            <td>
              <label><input v-model.number="days" type="number"></label>
              <label><input v-model.number="daysHi" type="number">人</label>
            <td>
              <label><input v-model.number="daysSat" type="number">人</label>
            </td>
            <td>
              <label><input v-model.number="daysSun" type="number">人</label>
            </td>
          </tr>

          <tr>
            <td>初級</td>
            <td>
              <label><input v-model.number="daysBeginner" type="number">人</label>
            </td>
            <td>
              <label><input v-model.number="satBeginner" type="number">人</label>
            </td>
            <td>
              <label><input v-model.number="sunBeginner" type="number">人</label>
            </td>
          </tr>

          <tr>
            <td>出勤人数</td>
            <td>
              {{ daysHi + daysBeginner + Math.floor(days * 0.4) }}人
            <td>
              {{ daysSat + satBeginner  + Math.floor(days * 0.4) }}人
            </td>
            <td>
              {{ daysSun + sunBeginner  + Math.floor(days * 0.4) }}人
            </td>
          </tr>

        </table>

      </section> -->
  <!-- </v-tab-item> -->

  <!-- <v-tab-item> -->
  <!-- <section class="percentNum">

        <h2>割合表示</h2>
        <p></p>
        <h4>スタッフの合計人数</h4>
        <label><input v-model.number="days" type="number"></label>
        <br>
        <br>

        <h3>日勤</h3>
        <p>※休み、中級は省く</p>
        <table>
          <tr>
            <th>日勤</th>
            <th>平日</th>
            <th>土曜</th>
            <th>日/祝日</th>
          </tr>

          <tr>
            <td>上級</td>
            <td>
              <label><input v-model.number="days" type="number"></label>
              <label><input v-model.number="daysHiP" type="number">%</label>
            <td>
              <label><input v-model.number="daysSatP" type="number">%</label>
            </td>
            <td>
              <label><input v-model.number="daysSunP" type="number">%</label>
            </td>
          </tr>

          <tr>
            <td>初級</td>
            <td>
              <label><input v-model.number="daysBeginner" type="number">%</label>
            </td>
            <td>
              <label><input v-model.number="satBeginner" type="number">%</label>
            </td>
            <td>
              <label><input v-model.number="sunBeginner" type="number">%</label>
            </td>
          </tr>

          <tr>
            <td>出勤人数</td>
            <td>
              {{ daysHi + daysBeginner + Math.floor(days * 0.4)}}
            <td>
              {{ daysSat + satBeginner  + Math.floor(days * 0.4) }}
            </td>
            <td>
              {{ daysSun + sunBeginner  + Math.floor(days * 0.4) }}
            </td>
          </tr>

        </table>
      </section> -->
  <!-- </v-tab-item>

  </v-tabs> -->
</div>
</template>

<script>
export default {
  name: "",
  data: () => ({
    show: true,
    days: 30,
    days2: 20,
    // daysSat: null,
    options2: [{
        text: 'low',
        value: 10
      },
      {
        text: 'mid',
        value: 20
      },
      {
        text: 'hi',
        value: 30
      }
    ],
    days3: 10,
    days4: 10,
    people2: 1,
    people: 1,
    options: [{
        text: '1',
        value: 1
      },
      {
        text: '2',
        value: 2
      },
      {
        text: '3',
        value: 3
      }
    ],
  }),
  methods: {
    toggleShow() {
      this.show = !this.show;
    },

    toggle: function(who) {
      this.show = false;
      document.querySelector(`[data-section="${who}"]`).classList.add("active");

      const hideSections = document.querySelectorAll(
        `[data-section]:not([data-section="${who}"])`
      );

      for (let i = 0; i < hideSections.length; i++) {
        hideSections[i].classList.remove("active");
      }
    },

  },
  computed: {
    totals: function() {},
    /*
      中級は40%
    */
    daysHi: function() {
      return Math.floor(this.days / 100 * 20 / 3)
      // return　30
    },
    daysHiP: function() {
      return Math.floor(100 / this.days / 100 * 20 / 3 * 100)
      // return　30
    },
    daysSat: function() {
      return Math.floor(this.days / 100 * 30 / 8)
      // return　30
    },
    daysSatP: function() {
      return Math.floor(100 / this.days / 100 * 30 / 8 * 100)
      // return　30
    },
    daysSun: function() {
      return Math.floor(this.days / 100 * 20 / 6)
      // return　30
    },
    daysSunP: function() {
      return Math.floor(100 / this.days / 100 * 20 / 6 * 100)
      // return　30
    },
    daysBeginner: function() {
      return Math.floor(this.days / 100 * 40 / 3)
      // return　30
    },
    daysBeginnerP: function() {
      return Math.floor(100 / this.days / 100 * 40 / 3 * 100)
      // return　30
    },
    satBeginner: function() {
      return Math.floor(this.days / 100 * 50 / 6)
      // return　30
    },
    satBeginnerP: function() {
      return Math.floor(100 / this.days / 100 * 50 / 6 * 100)
      // return　30
    },
    sunBeginner: function() {
      return Math.floor(this.days / 100 * 50 / 6)
      // return　30
    },
    sunBeginnerP: function() {
      return Math.floor(100 / this.days / 100 * 50 / 6 * 100)
      // return　30
    },
    unitPrice: function() {
      let totalP =
        (this.days +
          this.days2 +
          this.days3 +
          this.days4) /
        (this.people + this.people2);
      return Math.ceil(totalP);
    },
    unitPrice2: function() {
      let totalP =
        (this.days +
          this.days2 +
          this.days3 +
          this.days4) /
        (this.people + this.people2);
      return Math.floor(totalP * 1.1);
    },

    watch: {}
  },
}
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h4 {
    font-weight: 400;
}

.percentNum {
    width: 90%;
    margin: 0 auto;
    max-width: 500px;
    border: 1px solid #eee;
    padding: 24px 32px;
    // box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

h1 {
    text-align: center;
    font-size: 30px;
    margin: 24px;
}

input {
    padding: 10px;
    margin: 5px 0.5em;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.unitPrice {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    font-size: 1.5em;
    text-align: right;
    margin: 0 0 20px;
}

.unitPrice span {
    font-size: 15px;
}

table {
    border-spacing: 0;
    color: #555;
    th {
        font-weight: normal;
        text-align: center;
        padding-left: 0.2em;
    }
    td {
        border-spacing: 0;
        border: 1px solid #ccc;
        min-width: 40px;
        min-width: 30px;
        padding: 4px 8px;
        text-align: center;
        input {
            max-width: 60px;
            border: 1px solid #f9f9f9;
            margin: 0;
            font-size: 1em;
            padding: 4px;
            line-height: 1.3;
            text-align: center;
            color: #555;
        }
        select {
            width: 100%;
            height: 32px;
            border: 1px solid #eee;
            font-size: 1em;
            color: #555;
            /* padding: 24px; */
        }
    }
}

.wrapper {
    margin: 0 auto;
    display: block;
    width: 60%;
    position: relative;
}
.wrapper .section {
    opacity: 0;
    padding: 10px;
    transition: all 0.5s linear;
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    text-align: center;
    background: #eee;
    transform: scale(0);
}
.wrapper .section.active {
    opacity: 1;
    transform: scale(1);
    font-weight: bold;
}

button {
    clear: both;
}
</style>
