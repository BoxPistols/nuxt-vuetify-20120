<template>
<div id="">

  <v-tabs class="ml-3" color="teal" slider-color="teal">

    <v-tab ripple>%表示</v-tab>
    <v-tab ripple>人数表示</v-tab>

    <v-tab-item>
      <section class="percentNum">

        <h2>%表示</h2>
        <p></p>
        <h3>日勤</h3>
        <p></p>
        <h4>上級 + 初級の合計人数</h4>
        <label><input v-model.number="days" type="number"></label>
        <br>
        <br>

        <h3>人数単位</h3>
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
              <label><input v-model.number="daysHi" type="number"></label>
            <td>
              <label><input v-model.number="daysSat" type="number"></label>
            </td>
            <td>
              <label><input v-model.number="daysSun" type="number"></label>
            </td>
          </tr>

          <tr>
            <td>初級</td>
            <td>
              <label><input v-model.number="daysBeginner" type="number"></label>
            </td>
            <td>
              <label><input v-model.number="satBeginner" type="number"></label>
            </td>
            <td>
              <label><input v-model.number="sunBeginner" type="number"></label>
            </td>
          </tr>

          <tr>
            <td>日合計</td>
            <td>
              {{ daysHi + daysBeginner + Math.floor(days * 0.4) }}
            <td>
              {{ daysSat + satBeginner  + Math.floor(days * 0.4) }}
            </td>
            <td>
              {{ daysSun + sunBeginner  + Math.floor(days * 0.4) }}
            </td>
          </tr>

        </table>
      </section>
    </v-tab-item>

    <v-tab-item>
      <section class="percentNum">

        <h2>日勤</h2>
        <br>

        <h4>上級 + 初級の合計人数</h4>
        <label><input v-model.number="days" type="number"></label>
        <br>
        <br>

        <h3>人数単位</h3>
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
              <label><input v-model.number="daysHi" type="number"></label>
            <td>
              <label><input v-model.number="daysSat" type="number"></label>
            </td>
            <td>
              <label><input v-model.number="daysSun" type="number"></label>
            </td>
          </tr>

          <tr>
            <td>初級</td>
            <td>
              <label><input v-model.number="daysBeginner" type="number"></label>
            </td>
            <td>
              <label><input v-model.number="satBeginner" type="number"></label>
            </td>
            <td>
              <label><input v-model.number="sunBeginner" type="number"></label>
            </td>
          </tr>

          <tr>
            <td>日合計</td>
            <td>
              {{ daysHi + daysBeginner + Math.floor(days * 0.4) }}
            <td>
              {{ daysSat + satBeginner  + Math.floor(days * 0.4) }}
            </td>
            <td>
              {{ daysSun + sunBeginner  + Math.floor(days * 0.4) }}
            </td>
          </tr>

        </table>
      </section>
    </v-tab-item>

  </v-tabs>
</div>
</template>

<script>
export default {
  name: "",
  data: () => ({
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
  computed: {
    totals: function() {},
    /*
      中級は40%
    */
    daysHi: function() {
      return Math.floor(this.days / 100 * 20 / 3)
      // return　30
    },
    daysSat: function() {
      return Math.floor(this.days / 100 * 30 / 8)
      // return　30
    },
    daysSun: function() {
      return Math.floor(this.days / 100 * 20 / 6)
      // return　30
    },
    daysBeginner: function() {
      return Math.floor(this.days / 100 * 40 / 3)
      // return　30
    },
    satBeginner: function() {
      return Math.floor(this.days / 100 * 50 / 6)
      // return　30
    },
    sunBeginner: function() {
      return Math.floor(this.days / 100 * 50 / 6)
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
  },
}
</script>

<style lang="scss" scoped>
h1,h2,h3,h4{
  font-weight: 400;
}

.percentNum {
    width: 90%;
    margin: 0px auto;
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
</style>
