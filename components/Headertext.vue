<template>
  <h1 class="wordCarousel">
    <div>
      <ul class="flip pa-0">
        <li><h1 style="color: #707070">I'm Happy You're Here!</h1></li>
        <li><h1 style="color: #707070">I'm a Software Engineer</h1></li>
        <li><h1 style="color: #707070">I'm Proudly Malaysian!</h1></li>
        <li><h1 style="color: #707070">I Worked in a Tunnel!</h1></li>
      </ul>
    </div>
  </h1>
</template>

<script>
export default {};
</script>

<style lang="scss">
$height: 100px;
$flip: 4;
.wordCarousel {
  font-size: 70px;
  font-weight: 100;
  color: #444444;
  display: relative;

  width: 100%;
}
.grey {
  color: #707070;
}
.wordCarousel > div {
  overflow-y: hidden;
  position: relative;
  height: 120px;
  padding-top: 10px;
  margin-top: -10px;
}
.wordCarousel > div > ul > li {
  font-weight: 700;
  padding: 0;
  height: $height;
  margin-bottom: $height;
  display: block;
}

.flip {
  animation: flip 12s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}

@keyframes flip {
  0% {
    margin-top: calc(#{$flip}* 2 *#{$height}* -1);
  }
  5% {
    margin-top: calc(#{$flip}* 2 *#{$height}* -0.75);
  }
  25% {
    margin-top: calc(#{$flip}* 2 *#{$height}* -0.75);
  }
  30% {
    margin-top: calc(#{$flip}* 2 *#{$height}* -0.5);
  }
  50% {
    margin-top: calc(#{$flip}* 2 *#{$height}* -0.5);
  }
  55% {
    margin-top: calc(#{$flip}* 2 *#{$height}* -0.25);
  }
  75% {
    margin-top: calc(#{$flip}* 2 *#{$height}* -0.25);
  }
  80% {
    margin-top: calc(#{$flip}* 2 *#{$height}* -0);
  }
  99.99% {
    margin-top: calc(#{$flip}* 2 *#{$height}* -0);
  }
  100% {
    margin-top: calc(#{$flip}* 2 *#{$height}* -1);
  }
}
</style>