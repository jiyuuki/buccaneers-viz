<template>
  <NavBar />
  <div class="h-screen">
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'defaultLayout',
  components: {
    NavBar,
  }
}
</script>
