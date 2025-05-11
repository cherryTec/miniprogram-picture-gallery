Component({
  data: {
    value: 0,
    list: [{
      pagePath: "/pages/home/index",
      icon: 'home',
      text: "首页"
    }, {
      pagePath: "/pages/profile/index",
      icon: 'user',
      text: "我的"
    }]
  },

  methods: {
    onChange(e) {
      const index = e.detail.value;
      const tabItem = this.data.list[index];
      wx.switchTab({
        url: tabItem.pagePath
      });
    },

    init() {
      const page = getCurrentPages().pop();
      const route = page ? page.route : 'pages/home/index';
      const index = this.data.list.findIndex(item => item.pagePath.includes(route));
      this.setData({ value: index > -1 ? index : 0 });
    }
  },

  lifetimes: {
    ready() {
      this.init();
    },
  },

  pageLifetimes: {
    show() {
      this.init();
    },
  }
}); 