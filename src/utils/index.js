import { h } from 'vue'
import { isObject, isArray, isString, isFunction } from './is'

export function createEventsObj(eventObj = {}, row) {
  if (!eventObj) return {}
  const events = {}
  Object.keys(eventObj).map((key) => {
    events[key] = ($event) => {
      eventObj[key].call(this, row, $event)
    }
  })
  return events
}

/**
 *
 * @param {function} h  vue createElement
 * @param {object} option  生成 dom 的配置项
 * @param {object} rowData 表格行数据
 */

export function createElementByChildrenType(option, rowData) {
  const { childrenType } = option
  switch (childrenType) {
    case 'image':
      const src = option.formatter
        ? handleFormatter(option.formatter, rowData)
        : formatRowDataByKey(option.key, rowData)
      const childrenProps = isFunction(option.attrs)
        ? option.attrs(rowData)
        : option.attrs

      return h('img', {
        src,
        ...childrenProps
      })
    default:
  }
}

function handleFormatter(formatter, rowData) {
  if (typeof formatter === 'function') {
    return formatter(rowData)
  } else {
    return formatter
  }
}

export function formatRowDataByKey(key, row) {
  if (typeof key !== 'string') {
    throw new TypeError('key is not string')
  }

  const splitKey = key.split('.')
  if (splitKey.length === 1) {
    return row[splitKey[0]]
  } else {
    try {
      return splitKey.reduce((pre, cur) => {
        if (pre && isObject(pre)) {
          return pre[cur]
        } else {
          return ''
        }
      }, row)
    } catch (error) {
      return ''
    }
  }
}

export function merge(target, source) {
  if (isObject(target) && isObject(source)) {
    Object.keys(source).map((sourceKey) => {
      let targetVal = target[sourceKey]
      const sourceVal = source[sourceKey]
      // 如果没有
      if (!targetVal) {
        targetVal = sourceVal
      } else if (isObject(targetVal) && isObject()) {
        target[sourceKey] = merge(targetVal, sourceVal)
      } else if (isArray(targetVal) && isArray(sourceVal)) {
        target[sourceKey] = [...targetVal, ...sourceVal]
      }
    })
  }

  return target
}

export const getSelectOptions = (options, map = {}) => {
  let result = []
  if (isArray(options)) {
    result = options
  } else if (isString(options)) {
    result = map[options] || []
  }

  return result
}

export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach((v) => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}
