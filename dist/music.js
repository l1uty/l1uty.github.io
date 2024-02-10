const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
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
    ]
});
