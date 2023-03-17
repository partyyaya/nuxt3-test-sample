export const useCount = () => {
  const count = ref(0)
  const increment = () => {
    count.value += 1
  }

  return {
    count,
    increment
  }
}
