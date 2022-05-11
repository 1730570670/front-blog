<template>
  <div class="particlesContainer">
      <vue-particles class="particles"
        color="#0293dd"
        :particleOpacity="0.8"
        :particlesNumber="200"
        shapeType="circle"
        :particleSize="5"
        linesColor="#0293dd"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="1"
        :linesDistance="60"
        :moveSpeed="0.9"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
/>
  </div>
</template>

<script>
export default {
    name:'Particle'
}
</script>

<style lang="less" scoped>
.particlesContainer{
    width: 100%;
    height: 100%;
    .particles{
        width: 100%;
        height: 100%;
    }
}

</style>

