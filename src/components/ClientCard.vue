<template>
  <div class="w-full max-w-sm bg-white rounded-md shadow-md 800" style="box-shadow: 0px 0px 0px 1px #E0E0E0;">
    <div class="px-5 py-5" style="border-bottom: solid 1px #E0E0E0">

     <div class="flex items-center justify-between">
        <img
          alt="company logo"
          class="logo"
          :src="logoPath"
        >
      </div>

      <div class="mt-2">
        <p class="text-xl font-bold text-black-800" style="text-align:left" tabindex="0">{{client.name}}</p>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="px-2 py-2 text-xs grid grid-cols-3">
        <div>Recommandations <b>{{client.nbRecommendations}}</b>
        </div>
        <div>&nbsp;</div>
        <div
            style="text-align:right">
          <router-link
              :to="{
          name: 'ClientDetail',
          params: { id: client.id }
        }"
              class="text-blue-600 400 hover:underline"
          >
            Details
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ClientCard",
  props: {
    client: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    let logoPath = require(`../assets/${props.client.logo}`);
    return {
      logoPath
    }
  }
}
</script>

<style>
 .logo {
    width: 56px;
    height: 56px;
   box-shadow: 0px 0px 0px 1px #E0E0E0;
    border-radius: 3px;
  }

 .client-container {
    height: 80px;
  }

 .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

 .link {
    color: #5521B5;
    display: flex;
    flex-direction: row;
    justify-content: start;
  }

 .tendency-icon {
    transform: translate(5px, 3px);
  }

</style>
