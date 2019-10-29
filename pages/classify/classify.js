// pages/classify/classify.js
Page({
  /**
   * 点击方式
  */
  click:function(event){
    console.log(event.currentTarget.dataset.id)
  
},

  /**
   * 页面的初始数据
   */
  data: {
    // tradeList:[]
     tradeList:[
       { name: 'iOS', img: '/images/666.jpg', title: 'iOS作品集' }, { name: 'PHP', img: '/images/777.jpg', title: 'PHP作品集' }, { name: 'JAVA', img: '/images/888.jpg', title: 'JAVA作品集' }, { name: 'H5', img: "/images/999.jpg", title: 'H5作品集' }
     ]
  },

  /**
   * 生命周期函数--监听页面加载
   * url写在这里
   */
  onLoad: function (options) {
  //  wx.request({
  //    url: '',data:{'name':'小明'},method:'get',success:function(requestObject){this.data.tradeList=requestObject}
  //  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作 下拉刷新
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数    
   */
  onReachBottom: function () {
    //  wx.showLoading({
    //    title: '加载中',
    //  })

  },

  /**
   * 用户点击右上角分享   这个是转发给朋友可以配置内容
   */
  onShareAppMessage: function () {
  
  }
})