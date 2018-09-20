<template>
  <div>
    <p>
      Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    </p>
    <el-button type="primary" @click="increment">加</el-button>
    <el-button type="primary" @click="decrement">减</el-button>
    <el-button type="primary" @click="incrementIfOdd">Increment if odd</el-button>
    <el-button type="primary" @click="incrementAsync">Increment async</el-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>
