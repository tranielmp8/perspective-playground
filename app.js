Vue.createApp({

  data() {
    return{
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      r: 0,
      g: 0,
      b: 0
      
    }
  },
  computed: {
    box() {
      return{
        transform: `
        perspective(${this.perspective}px)
        rotateX(${this.rotateX}deg)
        rotateY(${this.rotateY}deg)
        rotateZ(${this.rotateZ}deg)
        `,

        background: `rgb(${this.r}, ${this.g}, ${this.b})`
      }

    }
  },
  methods: {
    reset() {
      this.perspective = 100
      this.rotateX = 0
      this.rotateY = 0
      this.rotateZ = 0
      this.r = 0
      this.g = 0
      this.b = 0
      
    },

    copy() {
      const el = document.createElement('textarea')
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      el.value = `
      transform: ${this.box.transform}
      
      `
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
  }


}).mount('#app')