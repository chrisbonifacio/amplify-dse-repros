<template>
  <Tutorial />
</template>

<script>
import {Amplify, API} from 'aws-amplify'
import {listTodos} from '../src/graphql/queries'
import awsconfig from '../src/aws-exports'

Amplify.configure(awsconfig)

const fetchTodos = async () => {
  try {
    const res = await API.graphql({
      query: listTodos,
      authMode: "API_KEY"
    })

    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

export default {
  name: 'IndexPage',
  mounted () {
   fetchTodos()
  }
}
</script>
