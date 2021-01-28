<template>
  <v-card class="hoverCard">
    <div>something</div>
    <div>something</div>
    <div>something</div>
    <div>something</div>

    <div class="middle">
      <v-btn class="text" style="z-index: 10000">John Doe</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.image-item {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.hoverCard:hover {
  opacity: 0.5;
}

.hoverCard:hover .middle {
  opacity: 1;
}

.text {
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
.hoverCard {
  position: relative;
  width: 400px;
}
</style>