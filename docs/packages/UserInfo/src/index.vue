<template>
  <div class="my-user-info">
    <p @click="$emit('click', name, $event, copy(name, autoCopy))">用户名：{{name}}</p>
    <p @click="$emit('click', phone, $event, copy(phone, autoCopy))">手机号：{{phone}}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  phone: {
    type: String,
    default: ""
  },
  autoCopy: {
    type: Boolean,
    default: false
  },
})

const emit = defineEmits(['click'])

const copy = (value, autoCopy) => {
  if(autoCopy) {
    console.log(`自动复制点击内容：${value}`)
    navigator.clipboard.writeText(value).then(() => {
      console.log('复制成功')
    }).catch((error) => {
      console.log(`复制失败：${error}`)
    })
  }
}

</script>

<style scoped>
.my-user-info {
  
}
</style>