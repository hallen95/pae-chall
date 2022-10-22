<template>
  <div class="">
    <img
      class="mew__image"
      alt="Mew image"
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${src}.png`"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: Number,
      // required: true,
    },
  },
};
</script>

<style>
.mew__image {
  height: 180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
