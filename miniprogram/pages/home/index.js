Page({
  data: {
    images: [
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23',
        prompt: '一个穿红色连衣裙的女孩在花园里读书，水彩风格'
      },
      {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1',
        prompt: '一只金毛狗在草地上奔跑，阳光照射，写实风格'
      },
      {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1',
        prompt: '科幻城市夜景，霓虹灯，赛博朋克风格'
      },
      {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab',
        prompt: '宇航员站在月球表面，地球在远处，梦幻般的光影，电影感'
      },
      {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47',
        prompt: '中世纪城堡内部，烛光照明，有一位骑士站在大厅中央'
      },
      {
        id: 6,
        imageUrl: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1',
        prompt: '繁华的日本街头，樱花飘落，动漫风格'
      },
      {
        id: 7,
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23',
        prompt: '荒芜沙漠中的绿洲，椰子树，蓝天白云，油画风格'
      },
      {
        id: 8,
        imageUrl: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1',
        prompt: '古代中国山水画，雾气缭绕的山峰，小船在江面上行驶'
      }
    ],
    isLoading: true
  },

  onLoad() {
    // 模拟数据加载
    setTimeout(() => {
      this.setData({
        isLoading: false
      });
    }, 1500);
  },

  onReachBottom() {
    // 模拟加载更多图片
    this.setData({
      isLoading: true
    });
    
    setTimeout(() => {
      this.setData({
        isLoading: false
      });
    }, 1500);
  },

  navigateToCreate() {
    wx.navigateTo({
      url: '/pages/create/index'
    });
  }
}); 