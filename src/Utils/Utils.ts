class Tools{
    public timer: any
    public flag: boolean | undefined
    public timeout: any = null

    public throttle(func: (...args: any) => void, wait = 500, immediate = true) {
        if (immediate) {
          if (!this.flag) {
            this.flag = true
            // 如果是立即执行，则在wait毫秒内开始时执行
            typeof func === 'function' && func()
            this.timer = setTimeout(() => {
              this.flag = false
            }, wait)
          }
        } else {
          if (!this.flag) {
            this.flag = true
            // 如果是非立即执行，则在wait毫秒内的结束处执行
            this.timer = setTimeout(() => {
              this.flag = false
              typeof func === 'function' && func()
            }, wait)
          }
        }
      }
}
export default Tools