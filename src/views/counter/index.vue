<template>
  <div>
    <p>
      Clicked: {{ $store.state.counter.count }} times, count is
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
  data(){
    return {
      count:null
    }
  },
  mounted:()=>{

  },

  computed: {
    ...mapGetters([
    'evenOrOdd'
  ])
  },
  methods: mapActions('counter', [
    'increment','decrement','incrementIfOdd','incrementAsync'
  ]),
}
</script>
