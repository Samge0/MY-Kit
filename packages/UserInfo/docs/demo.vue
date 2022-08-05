<template>
  <div>
    <my-user-info v-model:name="name" v-model:phone="phone" @click="onClick" :autoCopy="true"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  setup() {
    const state = reactive({
      name: "samge",
      phone: "18124099720",
    })
    const onClick = (value: string) => { console.log(`点击：${value}`) }
    return {
      ...toRefs(state),
      onClick,
    }
  }
})
</script>