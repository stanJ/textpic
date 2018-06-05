var app = new Vue({
  el: '#app',
  data: {
    content: '',
    fontSize: '14',
    fonts: [],
    fontFamily: ''
  },
  mounted() {
    this.setFonts()
  },
  computed: {

  },
  methods: {
    setFonts() {
      // 数据
      var res = []
      var arrFont = dataFont['windows'].concat(dataFont['OS X'], dataFont['office'], dataFont['open'])
      arrFont.forEach(function (obj) {
        var fontFamily = obj.en;
        if (isSupportFontFamily(fontFamily)) {
          res.push(obj)
        }
      });
      this.fonts = res
      // this.fontFamily = res[0].en
    },
    downloadImg() {
      var el = document.querySelector('.preview')
      domToImg.dom = el
      domToImg.download()
    }
  }
})