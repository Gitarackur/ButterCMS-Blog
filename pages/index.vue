<template>
  <div>
    <div class="flex items-center justify-between py-10 md:py-14 md:mb-14">
      <div>
        <h1 class="heading-text">ButterCMS Blog 1</h1>
      </div>

      <div>
        <NuxtLink to="/" class="route-link py-5 px-3"> create new post </NuxtLink>
      </div>
    </div>

    <div>
      <div>
        <div class="md:flex md:flex-wrap md:items-stretch md:-mx-4 -my-8 md:-my-8">
          <div v-for="(curr, i) in posts" :key="i" class="md:w-3/12 md:px-4 py-8 md:py-8">
            <NuxtLink :to="'/' + curr.slug" class="relative inline-block w-full">
              <img :src="curr.featured_image" class="w-full blog-thumbnail h-20 border" />
              <div class="mt-4">
                <h1 class="heading-text">
                  {{ curr.title }}
                </h1>
                <p class="mt-8">
                  {{ curr.summary }}
                </p>
                <p class="mt-2" style="color: #ccc">
                  {{ new Date(curr.created).toLocaleString("en-US")}}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>


        <div class="flex items-center justify-center pt-20">
          <div>
            <button class="py-5 px-3"> Next Page </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { $api } = useNuxtApp()

  const posts = ref<any>([])
  
  onMounted(async () => {
    try {
      const res = await $api.getPosts();
      posts.value = res.data;
      console.log('response', res);
    } catch(err: any) {
      throw new Error(`api error--- ${err?.response?.data}`)
    } finally {
      console.log('------working-------');
    }
  });
</script>

<style>

</style>