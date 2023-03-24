export default defineNuxtPlugin(() => {
  return {
    provide: {
      output: (msg: String) => `Hi! ${msg}`
    }
  }
})
