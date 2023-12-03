import type { Localization } from './types'

const locale: Localization = {
  '*': {
    prefix: 'Mỗi',
    suffix: '',
    text: 'Không xác định',
    '*': {
      empty: { text: 'mỗi {{field.id}}' },
      value: { text: '{{value.text}}' },
      range: { text: '{{start.text}}-{{end.text}}' },
      everyX: { text: 'mỗi {{every.value}}' },
    },
    month: {
      '*': { prefix: 'trong' },
      value: { text: '{{value.alt}}' },
      range: { text: '{{start.alt}}-{{end.alt}}' },
    },
    day: {
      '*': { prefix: 'vào ngày' },
      noSpecific: {
        text: 'không có ngày cụ thể',
      },
    },
    dayOfWeek: {
      '*': { prefix: 'vào ngày' },
      empty: { text: 'mỗi ngày trong tuần' },
      value: { text: '{{value.alt}}' },
      range: { text: '{{start.alt}}-{{end.alt}}' },
      noSpecific: {
        text: 'không có ngày trong tuần',
      },
    },
    hour: {
      '*': { prefix: 'lúc' },
    },
    minute: {
      '*': { prefix: ':' },
    },
    second: {
      '*': { prefix: ':' },
    },
  },
  minute: {
    text: 'Phút',
  },
  hour: {
    text: 'Giờ',
    minute: {
      '*': {
        prefix: 'lúc',
        suffix: 'phút',
      },
      empty: { text: 'mỗi' },
    },
  },
  day: {
    text: 'Ngày',
  },
  week: {
    text: 'Tuần',
  },
  month: {
    text: 'Tháng',
    dayOfWeek: {
      '*': { prefix: 'và' },
    },
  },
  year: {
    text: 'Năm',
    dayOfWeek: {
      '*': { prefix: 'và' },
    },
  },

  //quartz format
  'q-second': {
    text: 'Giây',
  },
  'q-minute': {
    text: 'Phút',
    second: {
      '*': {
        prefix: 'lúc',
        suffix: 'giây',
      },
      empty: { text: 'mỗi' },
    },
  },
  'q-hour': {
    text: 'Giờ',
    minute: {
      '*': {
        prefix: 'lúc',
      },
    },
  },
}

export default locale
