const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "这一生关于你的风景",
        artist: '隔壁老樊',
        url: 'http://www.ytmp3.cn/down/73916.mp3',
        cover: 'https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951164289743850&auth=d39d8a782171d2830010f00d7530aa7b50e7dcce',
      },
    {
        name: "如果这就是爱情",
        artist: 'en',
        url: 'http://www.ytmp3.cn/down/78800.mp3',
        cover: 'https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951169038655532&auth=a9a60b8c124d1fcf82207029caea039dc73a138e&quot',
    },
	  {
        name: '把回忆拼好给你',
        artist: '王贰浪',
        url: 'http://www.ytmp3.cn/down/75925.mp3',
        cover: 'https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951164485969446&auth=ba0fb57c0a20399a42d5ca4164c69abaa00aad2f&quot',
    },
    {
        name: "可不可以",
        artist: '张紫豪（咚鼓版）',
        url: 'http://www.ytmp3.cn/down/61619.mp3',
        cover: 'https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951163760637999&auth=603c038460ffd418f833197079ba3bd1168a4e8f',
      },
    ]
});
