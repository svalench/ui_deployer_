export default (context, inject) => {
  const toast = function makeToast({text="", title="Внимание", timeDelay=5000,variant="secondary", append = false}={}) {
        this.$bvToast.toast(text, {
          title: title,
          autoHideDelay: timeDelay,
          appendToast: append,
          variant: variant,
          solid: true
        })
      }
  inject('toast', toast)
}
