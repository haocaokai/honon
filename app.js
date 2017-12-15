//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  onShow: function(){
    console.log('onShow');
  },
  onHide: function(){
    console.log('onHide');
  },
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData : {
    "shops": [
      {
        "id": 1,
        "img": "../../images/img/images/1.jpg",
        "name": "流光溢彩（方）",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 30平方米",
        "material": "五金 + 进口亚克力",
        "power": "81W / 90W"
      },
      {
        "id": 2,
        "img": "../../images/img/images/2.jpg",
        "name": "流光溢彩（圆）",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 30平方米",
        "material": "五金 + 进口亚克力",
        "power": "81W / 90W"
      },
      {
        "id": 3,
        "img": "../../images/img/images/3.jpg",
        "name": "异域风情",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 15平方米",
        "material": "五金 + 进口亚克力",
        "power": "26W"
      },
      {
        "id": 4,
        "img": "../../images/img/images/4.jpg",
        "name": "春暖花开",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 15平方米",
        "material": "五金 + 进口亚克力",
        "power": "26"
      },
      {
        "id": 5,
        "img": "../../images/img/images/5.jpg",
        "name": "同心结",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 25平方米",
        "material": "五金 + 进口亚克力",
        "power": "30W / 60W"
      },
      {
        "id": 6,
        "img": "../../images/img/images/6.jpg",
        "name": "如意吉祥",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 30平方米",
        "material": "五金 + 进口亚克力",
        "power": "32W / 90W"
      },
      {
        "id": 7,
        "img": "",
        "name": "丽悦",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 25平方米",
        "material": "五金 + 进口亚克力 + 铝型材",
        "power": "32W / 90W"
      },
      {
        "id": 8,
        "img": "",
        "name": "天悦",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 25平方米",
        "material": "五金 + 进口亚克力 + 铝型材",
        "power": "32W / 90W"
      },
      {
        "id": 9,
        "img": "",
        "name": "星悦",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 25平方米",
        "material": "五金 + 进口亚克力 + 铝型材",
        "power": "32W / 90W"
      },
      {
        "id": 10,
        "img": "",
        "name": "璞玉",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "36W / 81W"
      },
      {
        "id": 11,
        "img": "",
        "name": "曲美",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 25平方米",
        "material": "五金 + 进口亚克力 + 铝合金",
        "power": "36W / 81W"
      },
      {
        "id": 12,
        "img": "",
        "name": "金苹果",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 25平方米",
        "material": "五金 + 进口亚克力 + 铝型材",
        "power": "36W / 81W"
      },
      {
        "id": 13,
        "img": "",
        "name": "蓝精灵",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 15平方米",
        "material": "五金 + 进口亚克力 + 铝型材",
        "power": "28W"
      },
      {
        "id": 14,
        "img": "",
        "name": "白玉兰",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 15平方米",
        "material": "五金 + 进口亚克力 + ABS",
        "power": "28W"
      },
      {
        "id": 15,
        "img": "",
        "name": "瑞雪",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 25平方米",
        "material": "五金 + 进口亚克力 + 铝型材",
        "power": "32W / 90W"
      },
      {
        "id": 16,
        "img": "",
        "name": "瑞月",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 25平方米",
        "material": "五金 + 进口亚克力 + ABS",
        "power": "32W / 90W"
      },
      {
        "id": 17,
        "img": "",
        "name": "瑞玉",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 25平方米",
        "material": "五金 + 进口亚克力 + ABS",
        "power": "32W / 90W"
      },
      {
        "id": 18,
        "img": "",
        "name": "瑞彩",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 25平方米",
        "material": "五金 + 进口亚克力 + 铝型材",
        "power": "32W / 90W"
      },
      {
        "id": 19,
        "img": "",
        "name": "丽悦",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 25平方米",
        "material": "五金 + 进口亚克力 + 铝型材",
        "power": "32W / 90W"
      },
      {
        "id": 20,
        "img": "",
        "name": "和氏璧",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 15平方米",
        "material": "五金 + 亚克力 + PC",
        "power": "24W / 36W"
      },
      {
        "id": 21,
        "img": "",
        "name": "木棉花",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 25平方米",
        "material": "五金 + 亚克力 + 水晶",
        "power": "90W"
      },
      {
        "id": 22,
        "img": "",
        "name": "花好月圆",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 20平方米",
        "material": "五金 + 亚克力",
        "power": "30W / 72W"
      },
      {
        "id": 23,
        "img": "",
        "name": "花叶",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "90W"
      },
      {
        "id": 23,
        "img": "",
        "name": "花蕾",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 30平方米",
        "material": "五金 + 亚克力 + 水晶装饰材质",
        "power": "100W"
      },
      {
        "id": 24,
        "img": "",
        "name": "心相印",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 30平方米",
        "material": "五金 + 亚克力 + 水晶，颜色丰富",
        "power": "108W"
      },
      {
        "id": 25,
        "img": "",
        "name": "朗韵(LN-XT84)",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 20平方米",
        "material": "五金 + 进口亚克力 + ABS",
        "power": "84W"
      },
      {
        "id": 26,
        "img": "",
        "name": "朗韵(LN-XT60)",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 20平方米",
        "material": "五金 + 进口亚克力 + ABS",
        "power": "60W"
      },
      {
        "id": 27,
        "img": "",
        "name": "朗韵(LN-XT132)",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 20平方米",
        "material": "五金 + 进口亚克力 + ABS",
        "power": "132W"
      },
      {
        "id": 28,
        "img": "",
        "name": "蝴蝶",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 15平方米",
        "material": "铁艺烤漆 + 进口亚克力",
        "power": "30W"
      },
      {
        "id": 29,
        "img": "",
        "name": "海豚",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 15平方米",
        "material": "五金 + 进口亚克力",
        "power": "30W"
      },
      {
        "id": 30,
        "img": "",
        "name": "海陵",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "36W / 81W"
      },
      {
        "id": 31,
        "img": "",
        "name": "致炫",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 30平方米",
        "material": "五金 + 进口亚克力 + 水晶",
        "power": "56W / 90W"
      },
      {
        "id": 32,
        "img": "",
        "name": "飘逸",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 30平方米",
        "material": "五金 + 进口亚克力",
        "power": "36W / 108W"
      },
      {
        "id": 33,
        "img": "",
        "name": "丽影",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 30平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "36W / 81W"
      },
      {
        "id": 34,
        "img": "",
        "name": "致炫",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 30平方米",
        "material": "五金 + 进口亚克力 + 水晶",
        "power": "56W / 90W"
      },
      {
        "id": 35,
        "img": "",
        "name": "心影LED吊线灯",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 20平方米",
        "material": "五金 + 进口亚克力",
        "power": "30W"
      },
      {
        "id": 36,
        "img": "",
        "name": "幻影LED吊线灯",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 20平方米",
        "material": "五金 + 进口亚克力",
        "power": "72W"
      },
      {
        "id": 37,
        "img": "",
        "name": "雀彩耀辉",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "30W / 56W / 72W"
      },
      {
        "id": 38,
        "img": "",
        "name": "繁花璀璨",
        "area": "客厅、卧式、书房",
        "area2": "15 ~ 22平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "36W / 64W / 90W"
      },
      {
        "id": 39,
        "img": "",
        "name": "时空叠影",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "56W / 72W / 108W"
      },
      {
        "id": 40,
        "img": "",
        "name": "时空之光",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 30平方米",
        "material": "五金 + 进口亚克力",
        "power": "36W / 64W / 90W / 108W"
      },
      {
        "id": 41,
        "img": "",
        "name": "典娜之美",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "28W / 48W / 72W"
      },
      {
        "id": 42,
        "img": "",
        "name": "凌空繁星",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 20平方米",
        "material": "五金 + 进口亚克力",
        "power": "28W / 48W"
      },
      {
        "id": 42,
        "img": "",
        "name": "金澜韵玉",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "36W / 56W / 90W"
      },
      {
        "id": 43,
        "img": "",
        "name": "秋之密语",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "28W / 32W / 36W / 90W"
      },
      {
        "id": 44,
        "img": "",
        "name": "秋之琉璃",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "36W / 56W / 90W"
      },
      {
        "id": 45,
        "img": "",
        "name": "田园之绚",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "28W / 32W / 36W / 56W / 90W"
      },
      {
        "id": 46,
        "img": "",
        "name": "田园之绚",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 30平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "45W / 120W / 156W"
      },
      {
        "id": 47,
        "img": "",
        "name": "繁星光雨",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "36W / 56W / 90W"
      },
      {
        "id": 48,
        "img": "",
        "name": "雀之灵动（方）",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 25平方米",
        "material": "五金 + 进口亚克力",
        "power": "48W / 56W / 90W"
      },
      {
        "id": 49,
        "img": "",
        "name": "雀之灵动（圆）",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "28W / 32W"
      },
      {
        "id": 50,
        "img": "",
        "name": "星语星愿",
        "area": "客厅、卧式、书房",
        "area2": "15 ~ 22平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "48W / 56W / 90W"
      },
      {
        "id": 51,
        "img": "",
        "name": "方怡平静（圆）",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 20平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "28W / 32W"
      },
      {
        "id": 52,
        "img": "",
        "name": "方怡平静（方）",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 20平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "36W / 64W / 90W / 108W"
      },
      {
        "id": 53,
        "img": "",
        "name": "流金岁月",
        "area": "客厅、卧式、书房",
        "area2": "15 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "48W / 56W / 90W"
      }, {
        "id": 54,
        "img": "",
        "name": "沁溢花香（方）",
        "area": "客厅、卧式、书房",
        "area2": "12 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "48W / 56W / 90W"
      },
      {
        "id": 55,
        "img": "",
        "name": "沁溢花香（圆）",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 20平方米",
        "material": "五金 + 进口亚克力",
        "power": "28W / 32W"
      },
      {
        "id": 56,
        "img": "",
        "name": "恋恋风情",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 18平方米",
        "material": "五金 + 进口亚克力",
        "power": "28W / 32W"
      },
      {
        "id": 57,
        "img": "",
        "name": "简方",
        "area": "客厅、卧式、书房",
        "area2": "2 ~ 5平方米",
        "material": "五金镀铬 + 亚克力",
        "power": "6W / 9W"
      },
      {
        "id": 58,
        "img": "",
        "name": "光影",
        "area": "客厅、卧式、书房",
        "area2": "2 ~ 5平方米",
        "material": "五金镀铬 + 亚克力",
        "power": "6W / 9W"
      },
      {
        "id": 59,
        "img": "",
        "name": "光虹",
        "area": "客厅、卧式、书房",
        "area2": "2 ~ 5平方米",
        "material": "五金镀铬 + 亚克力",
        "power": "12W / 18W"
      },
      {
        "id": 60,
        "img": "",
        "name": "方雅",
        "material": "五金烤漆",
        "power": "3W"
      },
      {
        "id": 61,
        "img": "",
        "name": "缇香/尚香",
        "material": "五金烤漆",
        "power": "3W / 9W"
      },
      {
        "id": 62,
        "img": "",
        "name": "亭翠",
        "material": "五金烤漆",
        "power": "3W"
      },
      {
        "id": 63,
        "img": "",
        "name": "奢丽",
        "material": "五金烤漆",
        "power": "8W"
      },

    ]
  }
})