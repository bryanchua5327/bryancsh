<template>
  <div>
    <div class="header1">
      <ul class="list1">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#home">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  z-index: 1;
}
.header1 > .list1 {
  list-style-type: none;
  margin: 0;
  padding: 0px;
  overflow: hidden;
  height: 50px;
  position: fixed;
  top: 40px;
  right: 40px;
}

.header1 > .list1 > li {
  float: right;
}

.header1 > .list1 > li > a {
  display: block;
  /* color: rgba(0, 0, 0, 0.582); */
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
.header1 > .list1 > li > a:hover {
  color: rgba(0, 0, 0, 1);
}
</style>