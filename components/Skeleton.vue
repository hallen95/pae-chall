<template>
  <div>
    <v-skeleton-loader
      class="mx-auto my-2"
      type="card-heading, list-item-three-line"
    ></v-skeleton-loader>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("ui", {
      skeletonLoading: (state) => state.skeletonLoading,
    }),
  },
  created() {
    this.$store.commit("ui/changeSkeletonLoading", {
      skeletonLoading: false,
    });
  },
};
</script>
