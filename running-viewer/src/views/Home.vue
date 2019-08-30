<template>
  <div class="home">
  <div class="destinationMenu">
    <destination-menu />
    </div>
<div class="runningHistory">
    <RunningHistory />
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RunningHistory from "@/components/RunningHistory.vue";
import DestinationMenu from "@/components/DestinationMenu.vue";
export default {
  name: "home",
  components: {
    RunningHistory,
    DestinationMenu
  }
};
</script>

<style lang="scss">
.home {
  position: relative;

  .destinationMenu {
    
  margin: 0 auto;
  }

  .runningHistory {
    padding-top: 80px;
  }
}
</style>

