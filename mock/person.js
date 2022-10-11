const Mock = require('mockjs')

let { personList } = Mock.mock({
  'personList|1-50': [
    {
      'id|+1': 1,
      createTime: "@date('yyyy-MM-dd')",
      name: '@name',
      age: '@integer(10,100)',
      weight: '@integer(40,100)',
      height: '@integer(150,200)',
      avatar: {
        image: "@image('200x200')"
      },
      'gender|1': ['man', 'woman'],
      networkTime: '@integer(10,100)',
      homeTown: '@integer(1,2)',
      profession: '@integer(1,6)',
      politics: '@integer(1,2)',
      education: '@integer(1,4)',
      marital: '@integer(1,2)',
      active: '@integer(0,1)'
    }
  ]
})

module.exports = [
  // get user info
  {
    url: '/api/person',
    type: 'get',
    response: (config) => {
      const { page, size, name, age, profession, gender } = config.query
      const query = [],
        result = []

      Object.keys(config.query).forEach((key) => {
        switch (key) {
          case 'name':
            !!name && query.push({ key: 'name', value: name })
            break
          case 'age':
            !!age && query.push({ key: 'age', value: age })
            break
          case 'profession':
            !!profession && query.push({ key: 'profession', value: profession })
            break
          case 'gender':
            !!gender && query.push({ key: 'gender', value: gender })
            break
        }
      })

      const filterList = personList.filter((item) => {
        let result = true
        for (let i = 0; i < query.length; i++) {
          const queryItem = query[i]
          if (item[queryItem.key] != queryItem.value) {
            result = false
            break
          }
        }
        return result
      })

      let resultList = filterList
      if (page && size) {
        resultList = filterList.slice((page - 1) * size, page * size)
      }

      const info = {
        roleId: 1,
        name: '总部'
      }

      // mock error
      if (!info) {
        return {
          code: 500,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 200,
        data: resultList,
        total: filterList.length
      }
    }
  },
  {
    url: '/api/person',
    type: 'delete',
    response: async (config) => {
      let { id: ids } = config.query

      if (!ids) {
        return {
          code: 500,
          message: 'failed to delete person'
        }
      }

      ids = ids.split(',')

      const promiseList = ids.map((id) => {
        const existingIndex = personList.findIndex((person) => person.id == +id)
        if (existingIndex >= 0) {
          return Promise.resolve(existingIndex)
        }
        return Promise.reject()
      })

      try {
        await Promise.all(promiseList)
        ids.map((id) => {
          const index = personList.findIndex((person) => person.id == +id)
          personList.splice(index, 1)
        })
      } catch (error) {
        console.log(error, 'error')
        return {
          code: 500,
          message: 'not find person id: ' + ids
        }
      }

      return {
        code: 200,
        message: 'success'
      }
    }
  },
  {
    url: '/api/person',
    type: 'put',
    response: (config) => {
      const { body } = config
      const id = body.id

      if (!id) {
        return {
          code: 500,
          message: 'missing id'
        }
      }

      const existingIndex = personList.findIndex((person) => person.id === +id)

      if (existingIndex < 0) {
        return {
          code: 500,
          message: 'not found person with id: ' + id
        }
      }

      let person = personList[existingIndex]
      person = {
        ...person,
        ...body
      }
      personList[existingIndex] = person

      return {
        code: 200,
        message: 'success'
      }
    }
  },
  {
    url: '/api/person',
    type: 'post',
    response: (config) => {
      const { body } = config
      const id = personList.length
      const person = {
        ...body,
        id
      }

      personList.unshift(person)
      return {
        code: 200,
        message: 'success'
      }
    }
  }
]
