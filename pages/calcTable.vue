<template>
  <div id="">
    <div class="wrapper">

      <div class="buttonGoup">
        <button @click='toggle("one")'>人数表示</button>
        <button @click='toggle("two")'>割合表示</button><br><br>
      </div>

      <div class="section active" data-section='one'>
        <section class="percentNum">

          <h2>人数表示（人）</h2>
          <h3>日勤</h3>
          <table>
            <tr>
              <th></th>
              <th>平日</th>
              <th>土曜</th>
              <th>日/祝日</th>
            </tr>

            <tr>
              <td>総数</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
            </tr>
            <tr>
              <td>上級</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
            </tr>
            <tr>
              <td>初級</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
            </tr>

          </table>

          <h3>深夜</h3>
          <table>
            <tr>
              <th></th>
              <th>平日</th>
              <th>土曜</th>
              <th>日/祝日</th>
            </tr>

            <tr>
              <td>総数</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
            </tr>
            <tr>
              <td>上級</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
            </tr>
            <tr>
              <td>初級</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
            </tr>

          </table>

          <h3>準夜</h3>
          <table>
            <tr>
              <th></th>
              <th>平日</th>
              <th>土曜</th>
              <th>日/祝日</th>
            </tr>

            <tr>
              <td>総数</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
            </tr>
            <tr>
              <td>上級</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
            </tr>
            <tr>
              <td>初級</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
            </tr>

          </table>

        </section>
      </div>

      <div class="section" data-section='two'>

        <section class="percentNum">

          <h2>割合表示（％）</h2>
          
          <h3>日勤</h3>
          <table>
            <tr>
              <th></th>
              <th>平日</th>
              <th>土曜</th>
              <th>日/祝日</th>
            </tr>

            <tr>
              <td>総数</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
            </tr>
            <tr>
              <td>上級</td>
              <td class="num"><span>N</span>%</td>
              <td class="num"><span>N</span>%</td>
              <td class="num"><span>N</span>%</td>
            </tr>
            <tr>
              <td>初級</td>
              <td class="num"><span>N</span>%</td>
              <td class="num"><span>N</span>%</td>
              <td class="num"><span>N</span>%</td>
            </tr>

          </table>
        
          <h3>深夜</h3>
          <table>
            <tr>
              <th></th>
              <th>平日</th>
              <th>土曜</th>
              <th>日/祝日</th>
            </tr>

            <tr>
              <td>総数</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
            </tr>
            <tr>
              <td>上級</td>
              <td class="num"><span>N</span>%</td>
              <td class="num"><span>N</span>%</td>
              <td class="num"><span>N</span>%</td>
            </tr>
            <tr>
              <td>初級</td>
              <td class="num"><span>N</span>%</td>
              <td class="num"><span>N</span>%</td>
              <td class="num"><span>N</span>%</td>
            </tr>

          </table>
        
          <h3>準夜</h3>
          <table>
            <tr>
              <th></th>
              <th>平日</th>
              <th>土曜</th>
              <th>日/祝日</th>
            </tr>

            <tr>
              <td>総数</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
              <td class="num"><span>N</span>人</td>
            </tr>
            <tr>
              <td>上級</td>
              <td class="num"><span>N</span>%</td>
              <td class="num"><span>N</span>%</td>
              <td class="num"><span>N</span>%</td>
            </tr>
            <tr>
              <td>初級</td>
              <td class="num"><span>N</span>%</td>
              <td class="num"><span>N</span>%</td>
              <td class="num"><span>N</span>%</td>
            </tr>

          </table>
        
        </section>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data: () => ({
      show: true,
    }),
    methods: {
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
  }
</script>

<style lang="scss" scoped>
  h1,
  h2,
  h3,
  h4 {
    font-weight: 400;
    text-align: left;
  }

  h1 {
    text-align: center;
    font-size: 30px;
    margin: 24px;
  }
  h3 {
    font-size: 22px;
    margin: 32px 0 5px;
  }

  table {
    margin: 24px auto 12px;
    border-spacing: 0;
    color: #235;
    width: 100%;
    max-width: 600px;
    min-width: 450px;
    border: 1px solid #ccc;
    tr{
      &:nth-child(1){
        background: #eee;
      }
    }
    th {
      font-weight: normal;
      text-align: center;
      padding-left: 0.2em;
      border-right: 1px solid #ccc;
      &:last-child{
        border-right: 0;
      }
    }

    td {
      border-spacing: 0;
      border-right: 1px solid #ccc;
      border-top: 1px solid #ccc;
      min-width: 40px;
      min-width: 30px;
      padding: 6px 8px;
      text-align: center;
      &:last-child{
        border-right: 0;
      }
    }
  }

  .wrapper {
    margin: 0 auto;
    display: block;
    position: relative;
    max-width: 400px;
  }

  .wrapper .section {
    max-width: 400px;
    opacity: 0;
    padding: 10px;    
    position: absolute;
    top: 50px;
    left: 0px;
    right: 0;
    text-align: center;
    // background: #eee;
    transform: scale(0);
    opacity: 0;
    transition: all 0.4s;
  }

  .wrapper .section.active {
    opacity: 1;
    left: 0;
    transform: scale(1);
  }

  .buttonGoup {
    margin: 12px 0;
    button {
      margin: 0 8px 0 0;
      outline: none;
      clear: both;
      border: 1px solid #999;
      padding: 4px 12px;
      border-radius: 8px;
      transition: all 0.3s;
      &:hover{
        background: rgba(167, 203, 213, 0.2) 
      }
    }
  }

  td.num{
    color: #555;
  }
</style>
