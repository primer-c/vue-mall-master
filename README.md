# Vue全家桶电商系统

### 1. 视频网址

1. Vue全家桶电商系统: https://www.bilibili.com/video/BV1wv411r7d4/?spm_id_from=333.788.videocard.5

### 2. 源码网址

1. Vue全家桶电商系统: https://pan.baidu.com/s/1r6Uk2DPRRC1ho7K0S66w6A 

2. 密码： gnc4

### 3. Git 

### 4. Vue Cli安装

### 5. Vue tools安装

### 6. 前端跨域

#### 1. cors实现跨域

- cors后端实现跨域

- 后端入口文件

  ```bash
  npm install cors
  ```

- 配置

  ```js
  const cors = require("cors");
  ```

- 前端安装axios

  ```bash
  npm install axios --save
  ```

- App.vue

  ```js
  import axiso from "axios";
  exports default {
    mounted(){
      const url = "https://www.easy-mock.com/mock/5fca1dc3584b91646b4cfd33/mall/query#!method=get";
      axios.get(url).then(()=>{});
    }
  }
  ```
- easy mock 编辑接口,点击预览，并将接口url复制到上述;

#### 2. Jsonp跨域

  ```js
  import HelloWorld from "./components/HelloWorld.vue";
  import axios from "axios";
  import jsonp from "jsonp";
  export default {
    name: "App",
    components: {
      HelloWorld,
    },
    mounted() {
      const url = "https://www.easy-mock.com/mock/5fca1dc3584b91646b4cfd33/mall/query#!method=get";
      axios.get(url).then(() => {});

      const url1 = "https://blackhole-m.m.jd.com/getinfo";
      jsonp(url1, (err, res) => {
        let result = res;
        this.data = result;
      });
    },
  };
  ```
#### 3. 代理跨域

- 前端修改代理实现跨域

- 接口代理： 修改Nginx代理服务器配置


  ```js
  
  ```

### 7. Easy Mock 

1. Easy Mock官网： https://www.easy-mock.com/docs