<template lang="pug">
v-app#shift_calendar
  div
    v-row
      v-col.controls(sm='4')
        .d-flex.flex-row.align-center.ml-3
          v-select.mr-5(v-model='type',
          :items='typeOptions',
          label='表示切替[日/週/月]',
          hide-details='',
          outlined='',
          dense='')
          //- v-select(v-model='weekdays',
          //- :items='weekdaysOptions',
          //- dense='',
          //- outlined='',
          //- hide-details='',
          //- label='表示曜日')
      v-col.mb-5.controls(sm='12',
        lg='12')
          v-btn(fab='',
          small='',
          absolute='',
          left='',
          color='primary',
          depressed,
          @click='$refs.calendar.prev()')
            v-icon.far.fas.fa-arrow-left
          v-btn(fab='',
          small='',
          absolute='',
          right='',
          color='primary',
          depressed,
          @click='$refs.calendar.next()')
            v-icon.far.fas.fa-arrow-right

      v-col.pl-4(sm='12')
        v-sheet(height='840')
          v-calendar(
            ref='calendar',
            v-model='start',
            :type='type',
            :start='start',
            :end='end',
            :min-weeks='minWeeks',
            :max-days='maxDays',
            :now='now',
            :dark='dark',
            :weekdays='weekdays',
            :first-interval='intervals.first',
            :interval-minutes='intervals.minutes',
            :interval-count='intervals.count',
            :interval-height='intervals.height',
            :interval-style='intervalStyle',
            :show-interval-label='showIntervalLabel',
            :short-intervals='shortIntervals',
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
            template(v-slot:activator='{ on }')
              v-btn(color='primary', v-on='on') Open Dialog
            v-card
              v-card-title.headline {{ date }} 
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

const intervalsDefault = {
  first: 1,
  minutes: 60,
  count: 24,
  height: 48,
}

const stylings = {
  default (interval) {
    return undefined
  },
  workday(interval) {
    const inactive = interval.weekday === 0 ||
      interval.weekday === 6 ||
      interval.hour < 9 ||
      interval.hour >= 17
    const startOfHour = interval.minute === 0
    const dark = this.dark
    const mid = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'

    return {
      backgroundColor: inactive ? (dark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.05)') : undefined,
      borderTop: startOfHour ? undefined : '1px dashed ' + mid,
    }
  },
  past(interval) {
    return {
      backgroundColor: interval.past ? (this.dark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.05)') : undefined,
    }
  },
}

export default {
  name: 'MyCalender',
  components: {},

  data: () => {
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
      dark: false,
      startMenu: false,
      start: '2020-01-31',
      endMenu: false,
      end: '2020-02-29',
      nowMenu: false,
      minWeeks: 1,
      now: null,
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
          text: '1日表示',
          value: 'day'
        },
        {
          text: '4日表示',
          value: '4day'
        },
      ],
      mode: 'stack',
      modeOptions: [{
          text: 'カードを重ねる',
          value: 'stack'
        },
        {
          text: 'カードを重ねない',
          value: 'column'
        },
      ],
      weekdays: weekdaysDefault,
      weekdaysOptions: [{
          text: '月曜 - 日曜',
          value: weekdaysDefault
        },
        {
          text: '月曜 - 金曜',
          value: [1, 2, 3, 4, 5]
        },
        {
          text: '土 - 日',
          value: [6, 0]
        },
        {
          text: '月, 水, 金',
          value: [1, 3, 5]
        },
      ],
      intervals: intervalsDefault,
      intervalsOptions: [{
          text: 'Default',
          value: intervalsDefault
        },
        {
          text: 'Workday',
          value: {
            first: 16,
            minutes: 30,
            count: 20,
            height: 48
          }
        },
      ],
      maxDays: 7,
      maxDaysOptions: [{
          text: '7 days',
          value: 7
        },
        {
          text: '5 days',
          value: 5
        },
        {
          text: '4 days',
          value: 4
        },
        {
          text: '3 days',
          value: 3
        },
      ],
      styleInterval: 'default',
      styleIntervalOptions: [{
          text: 'デフォルト',
          value: 'default'
        },
        {
          text: '勤務時間帯',
          value: 'workday'
        },
        {
          text: 'オフ',
          value: 'past'
        },
      ],
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
      shortIntervals: false,
      shortMonths: false,
      shortWeekdays: true,
    })
  },
  computed: {
    intervalStyle() {
      return stylings[this.styleInterval].bind(this)
    },
    hasIntervals() {
      return this.type in {
        week: 1,
        day: 1,
        '4day': 1,
        'custom-daily': 1,
      }
    },
    hasEnd() {
      return this.type in {
        'custom-weekly': 1,
        'custom-daily': 1,
      }
    },
  },
  methods: {
    viewDay({date}) {      
      // this.focus = date
      // this.type = 'day'
      this.date = date;
      this.dialog = true;
      // this.start = date
    },
    saveEvent({add}) {
      this.event = event;
      this.dialog = false;
    },
    viewMore({more}) {
      this.focus = more;
      this.type = "day";
    },
    showEvent({ nativeEvent, event}) {
      alert(this.event);
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen = true, 10)
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
    showIntervalLabel(interval) {
      return interval.minute === 0
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
          // name: this.names[this.rnd(0, this.names.length - 1)],
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
  },
}
</script>

<style scoped lang="stylus">
#shift_calendar
  // for Prev & Next Arrow
  .controls
    position: relative
    z-index: 1

  >>>.pl-1
    font-weight 600
    font-size 11px
    padding 0px 1px 0px 3px !important
    line-height 1.4
    strong
      display none
  >>>div:empty
    display none

  >>>.v-calendar .v-event, .v-calendar .v-event-more
    position relative
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    font-size 12px
    cursor pointer
    z-index 1
    display inline-block
    max-width fit-content
    padding 2px 4px 0px 1px
    border-radius 2px
    line-height 1.6
    box-shadow 0 1px 1px #ccc
    margin 0 2px

  >>> .v-calendar-daily
      background-color #fff
      border-left 1px solid #e0e0e0
      border-top 1px solid #e0e0e0
      overflow scroll

  >>>.v-calendar-daily_head-day
    flex 1 1 auto
    width 0
    position relative
    overflow scroll

  >>>.v-calendar-daily__body
    display none

  >>>.v-calendar-daily__head
    height 100%
    max-height 70vh


  >>>.v-calendar-weekly__day.v-past,
  >>>.v-calendar-weekly__day.v-future, >>>.v-calendar-weekly__day.v-present
      position relative
      padding-top 24px
      transition .2s

  >>>.v-calendar-weekly__day.v-past:hover, >>>.v-calendar-weekly__day.v-future:hover, >>>.v-calendar-weekly__day.v-present:hover
      cursor pointer
      background-color #f0fffc

  >>>.v-calendar-weekly__day.v-past .v-calendar-weekly__day-label .v-btn.v-btn--depressed,
  >>>.v-calendar-weekly__day.v-future .v-calendar-weekly__day-label .v-btn.v-btn--depressed,
  >>>.v-calendar-weekly__day.v-present .v-calendar-weekly__day-label .v-btn.v-btn--depressed
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      border-radius 0

  >>>.v-btn__content
    position absolute
    top 8px

  >>>.v-dialog
      &.v-dialog--active
          &.v-dialog--persistent
              border 3px solid #228b22

  >>>.v-calendar-weekly__head-weekday
      font-size 12px
      background #f3f3ee
      border 1px solid #ccc
      margin -1px -1px 0
</style>
