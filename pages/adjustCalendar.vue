<template lang="pug">
v-app#shift_calendar
  div
    v-row
      v-col.mb-5.controls(sm='12',
        lg='12')
        v-btn(outlined absolute　left　class="mr-3" color="blue-grey lighten-3" @click="$refs.calendar.prev()" ) 前月
        v-select.selectType(v-model='type',
          :items='typeOptions',
          label='表示切替',
          hide-details='',
          outlined='',
          dense='')
        v-toolbar-title(class="titleMonth") {{ titleMonth }}
        v-btn(outlined absolute　right　class="ml-3" color="blue-grey lighten-3" @click="$refs.calendar.next()" ) 次月

      v-col.pl-4(sm='12')
        v-sheet(height='840')
          v-calendar(
            ref='calendar',
            locale='ja-jp',
            v-model='start',
            :type='type',
            :start='start',
            :end='end',
            :min-weeks='minWeeks',
            :max-days='maxDays',
            :weekdays='weekdays',
            :short-months='shortMonths',
            :short-weekdays='shortWeekdays',
            :color='color',
            :events='events',
            :event-overlap-mode='mode',
            :event-overlap-threshold='45',
            :event-color='getEventColor',
            @change='getEvents'
            @click:event='showEvent',
            @click:date='viewDay',
            @click:add="saveEvent"
            @click:more="viewMore"
          )

          // Modal for Add new Event
          v-dialog(v-model='dialog', persistent='', max-width='320')
            v-card.dialogCard
              v-card-title.headline {{ titleMonth }} 
              v-card-text シフト新規追加
              v-card-text
                v-select(:items='names', label='メンバー選択', item-value='text')
              v-card-text
                v-select(:items='select', label='シフト種', item-value='text')
              v-card-actions
                v-spacer
                .d-flex
                v-btn(color='green darken-1', text='', @click='dialog = false') Cancel
                v-btn(color='green darken-1', text='', @click='saveEvent') Save
</template>

<script>
const weekdaysDefault = [1, 2, 3, 4, 5, 6, 0]

export default {
  name: 'MyCalender',
  components: {},

  data(){
    return ({
      dialog: false,
      select: [
        {text: "日勤"},
        {text: "早出"},
        {text: "遅出"},
        {text: "午前休"},
        {text: "午後休"},
        {text: "深夜"},
        {text: "明け"},
        {text: "準夜"},
        {text: "公休"}
      ],
      startMenu: false,
      start: '2020-03-01',
      endMenu: false,
      end: '2020-03-31',
      minWeeks: 1,
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['日勤 佐藤真弓', '公休 鈴木雅美', '夜勤 高橋敏子', '遅出 田中善子', '午前休 吉田輝美'],
      shifts: [
        "日勤",
        "夜勤",
        "準夜",
        "早出",
        "遅出",
        "半休",
        "全休",
        "明け",
      ],
      names: [
        "山田太郎",
        "吉田花子",
        "斎藤綾乃",
        "本山茂",
        "迫美香子",
        "伊集院進ノ介",
        "三輪幸子",
        "結城純"
      ],
      type: 'month',
      typeOptions: [{
          text: '月表示',
          value: 'month'
        },
        {
          text: '週表示',
          value: 'week'
        },
        {
          text: '日表示',
          value: 'day'
        },
      ],
      mode: 'stack',
      weekdays: weekdaysDefault,
      weekdaysOptions: [{
          text: '月曜 - 日曜',
          value: weekdaysDefault
        },
      ],
      maxDays: 7,
      color: 'primary',
      colorOptions: [{
          text: 'Primary',
          value: 'primary'
        },
        {
          text: 'Secondary',
          value: 'secondary'
        },
        {
          text: 'Accent',
          value: 'accent'
        },
        {
          text: 'Red',
          value: 'red'
        },
        {
          text: 'Pink',
          value: 'pink'
        },
        {
          text: 'Purple',
          value: 'purple'
        },
        {
          text: 'Deep Purple',
          value: 'deep-purple'
        },
        {
          text: 'Indigo',
          value: 'indigo'
        },
        {
          text: 'Blue',
          value: 'blue'
        },
        {
          text: 'Light Blue',
          value: 'light-blue'
        },
        {
          text: 'Cyan',
          value: 'cyan'
        },
        {
          text: 'Teal',
          value: 'teal'
        },
        {
          text: 'Green',
          value: 'green'
        },
        {
          text: 'Light Green',
          value: 'light-green'
        },
        {
          text: 'Lime',
          value: 'lime'
        },
        {
          text: 'Yellow',
          value: 'yellow'
        },
        {
          text: 'Amber',
          value: 'amber'
        },
        {
          text: 'Orange',
          value: 'orange'
        },
        {
          text: 'Deep Orange',
          value: 'deep-orange'
        },
        {
          text: 'Brown',
          value: 'brown'
        },
        {
          text: 'Blue Gray',
          value: 'blue-gray'
        },
        {
          text: 'Gray',
          value: 'gray'
        },
        {
          text: 'Black',
          value: 'black'
        },
      ],
      shortMonths: false,
      shortWeekdays: true,
    })
  },
  computed: {
    titleMonth() {
      return this.start.slice(0,7).split('-').join('/')
    },
  },
  methods: {
    viewDay({date}) {      
      this.dialog = true;
    },
    saveEvent({add}) {
      // set save event
      this.dialog = false;
    },
    viewMore({more}) {
      this.focus = more;
      this.type = "day";
    },
    showEvent({ nativeEvent, event}) {      
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen = true, 10)
        // getData
        // console.log(`${this.selectedEvent.start} - ${this.selectedEvent.end} : ${this.selectedEvent.name}`) 
      }
      if (this.selectedOpen) {
        this.selectedOpen = false        
        setTimeout(open, 10)
      } else {
        open()
      }
      nativeEvent.stopPropagation()
    },
    getEventColor(event) {
      return event.color
    },
    getEvents({
      start,
      end
    }) {
      const events = []
      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 90)
      
      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        let shiftBar = this.shifts[this.rnd(0, this.shifts.length - 1)]
        events.push({
          name: shiftBar + " " + this.names[this.rnd(0, this.names.length - 1)],
          start: this.formatDate(first, !allDay),
          end: this.formatDate(second, !allDay),
          color: this.colors[this.rnd(0, this.colors.length - 1)],
        })
      }
      this.events = events
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    formatDate(a, withTime) {
      return withTime ?
        `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}` :
        `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
    },
  } 
}
</script>

<style scoped lang="stylus">
#shift_calendar
  .selectType
    position absolute
    right 100px
    width 150px
    top 10px
  .v-toolbar__title
    &.titleMonth
      position absolute
      left 50%
      transform translate(-50%, 0%)
  >>>.v-event > .pl-1 
    font-weight 600
    font-size 11px
    padding 1px 1px 0 3px !important
    line-height 1.5
    >strong
      display none
  >>>div:empty
    display none

  >>>.v-calendar
    .v-event, .v-event-more
      position relative
      overflow hidden
      margin 0 2px
      padding 2px 4px 0px 1px
      max-width fit-content
      text-overflow ellipsis
      white-space nowrap
      font-size 12px
      display inline-block
      border-radius 2px
      line-height 1.6
      box-shadow 0 1px 1px #ccc
      cursor pointer
      z-index 1

  >>>.v-calendar-daily
    background-color #fff
    border-left 1px solid #e0e0e0
    border-top 1px solid #e0e0e0
    overflow scroll
    &_head-day
      flex 1 1 auto
      width 0
      position relative
      overflow scroll
      &.v-future
        padding 12px 32px
    &__body
      display none
    &__head
      height 100%
      max-height 70vh 

  >>>.v-calendar-weekly
    &__head-weekday
      font-size 12px
      background #f3f3ee
      border 1px solid #ccc
      margin -1px -1px 0
    &__day
      &.v-past,
      &.v-future,
      &.v-present
        position relative
        padding-top 24px
        transition .2s
        :hover
          cursor pointer
        .v-calendar-weekly__day-label .v-btn.v-btn--depressed
          position absolute
          top 0
          left 0
          width 100%
          height 100%
          border-radius 0

  >>>.v-btn__content
    position absolute
    top 8px

  >>>.v-btn.v-btn--depressed.v-btn--fab.primary
    color: #234
    border-radius: 0
    background: #eee !important

.dialogCard
  border: 3px solid #228b22
</style>
