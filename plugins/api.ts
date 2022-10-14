import api from "~~/api"
export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  api.setApiUrl(config.API_BASE_URL, config.API_READ_TOKEN)
  nuxtApp.provide('api', api)
})