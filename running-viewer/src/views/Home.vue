<template>
  <div class="home">
    <RunningHistory/>
  </div>
</template>

<script>
// @ is an alias to /src
import RunningHistory from "@/components/RunningHistory.vue";

export default {
  name: "home",
  components: {
    RunningHistory
  }
};
</script>
