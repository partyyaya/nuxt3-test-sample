export default () => {
  const isTrue = ref(false)
  const switchBoolean = () => {
    isTrue.value = !isTrue.value
  }

  return {
    isTrue,
    switchBoolean
  }
}
