<template>
  <h1 class="wordCarousel">
    <div>
      <ul class="flip4">
        <li>Bryan Chua</li>
        <li>A Fullstack Engineer</li>
        <li>From Malaysia</li>
        <li>Happy that you're here</li>
      </ul>
    </div>
  </h1>
</template>

<script>
export default {};
</script>

<style lang="scss">
.wordCarousel {
  font-size: 36px;
  font-weight: 100;
  color: #b62121;
  display: flex;
  flex-direction: column;
}
// .wordCarousel > div {
//   overflow: hidden;
//   position: relative;
//   height: 65px;
//   padding-top: 10px;
//   margin-top: -10px;
// }
// .wordCarousel > div > li {
//   font-family: Serif;
//   color: #ccc;
//   font-weight: 700;
//   padding: 0 10px;
//   height: 45px;
//   margin-bottom: 45px;
//   display: block;
// }

.flip2 {
  animation: flip2 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}
.flip3 {
  animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}
.flip4 {
  animation: flip4 3s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}

@keyframes flip4 {
  0% {
    margin-top: -360px;
  }
  5% {
    margin-top: -270px;
  }
  25% {
    margin-top: -270px;
  }
  30% {
    margin-top: -180px;
  }
  50% {
    margin-top: -180px;
  }
  55% {
    margin-top: -90px;
  }
  75% {
    margin-top: -90px;
  }
  80% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}
</style>