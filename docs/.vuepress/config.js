const { defaultTheme } = require('vuepress')

module.exports = {
  title:"pd-simple-ui vue3",
  description:"基于 element-plus 封装的 table、form、search-form 组件 vue3 版本",

  theme: defaultTheme({
    // 默认主题配置
    sidebar:[
      {
        text: 'table',
        link: '/table.html',
       
      },
      {
        text: 'form',
        link: '/form.html',
      },
      {
        text: 'search-form',
        link: '/search-form.html',
      },
    ],
    navbar:[
      {
        text: 'github',
        link: 'https://github.com/pianduan-M/vue-simple-ui-vue3',
      },
    ],
    sidebarDepth:0
  })
}