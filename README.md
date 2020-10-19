# ppysb-query-ripple
为聊天bot设计的ppysb服查询器

不知道为什么UserInfo不复制一份就会出错

## 使用方法
### 安装
```sh
npm install ArilyChan/ppysb-query-ripple
```

### 使用
```javascript
const ppysbQuery = require("ppysb-query-ripple");
let psq = new ppysbQuery({
    admin: [123456], // 管理员列表，必要
    // 以下都可省略
    host: "osu.ppy.sb", // ripple网址，默认为"osu.ppy.sb"
    database: "./Opsbot-Ripple-v1.db", // 数据库路径，默认为根目录下的Opsbot-Ripple-v1.db
    prefixs: ["*"], // 指令前缀，必须为单个字符，默认为["*"]
    exscore: false // 设为true时获取谱面文件以计算更多数据，但是会拖慢响应时间，默认为false
    // 以下只是为了兼容旧版，不再使用
    // prefix: "*", // 指令前缀，必须为单个字符，默认为*
    // prefix2: "*", // 备用指令前缀，必须为单个字符，默认为*
})

let reply = await psq.apply(
    userId, // qqId
    message // 指令
    );
```

### 指令
详细指令说明可以输入help查看，或者查看modules文件夹
