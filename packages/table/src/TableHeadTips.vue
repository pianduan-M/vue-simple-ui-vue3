<template>
  <el-tooltip effect="light" :content="content" placement="top">
    <div>
      <span>{{ label }}</span>
      <span><QuestionFilled :style="styles" /></span>
    </div>
  </el-tooltip>
</template>

<script>
import { QuestionFilled } from '@element-plus/icons-vue'

export default {
  name: 'TableHeadTips',
  components: { QuestionFilled },
  props: {
    content: {
      default: ''
    },
    label: {
      default: ''
    }
  },
  computed: {
    styles() {
      return {
        width: '1em',
        marginLeft: '8px',
        marginBottom: '3%',
        lineHeight: 1,
        verticalAlign: 'middle'
      }
    }
  }
}
</script>
