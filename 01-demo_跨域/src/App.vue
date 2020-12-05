<template>
  <div id="app">Hello World</div>
</template>

<script>
import axios from "axios";
import jsonp from "jsonp";
export default {
  name: "App",
  components: {},
  mounted() {
    const url = "https://www.easy-mock.com/mock/5fca1dc3584b91646b4cfd33/mall/query#!method=get";
    axios.get(url).then(() => {});

    const urljs = "/api/Search?keyword=%E9%A4%90%E8%BE%B9%E6%9F%9C&enc=utf-8&wq=%E9%A4%90%E8%BE%B9%E6%9F%9C&pvid=9c2n26ri.0jxopm";
    jsonp(urljs, (err, data) => {
      this.data = data;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
