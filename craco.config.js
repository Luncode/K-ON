module.exports = {
    devServer: {
        proxy: {
            "/oneTalk": {
                target: "https://v1.hitokoto.cn",
                changeOrigin: true,
                pathRewrite: {
                    "^/oneTalk": ""
                }
            },
            "/bilibili":{
                target:'https://api.bilibili.com/',
                changeOrigin:true,
                pathRewrite:{
                    '^/bilibili':''
                }
            }
        }
    }
}