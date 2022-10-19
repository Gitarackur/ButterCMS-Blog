<template>
  <div>
    <div class="md:w-6/12 mx-auto">
      <div class="flex items-center justify-between py-10 md:py-6">
        <div class='py-10 md:py-20'>
          <div class=''>
            <a class='cursor-pointer' @click="()=> router.go(-1)"> BACK </a>
          </div>
        </div>

        <div class=''>
          <NuxtLink to="/" class='heading-text'>ButterCMS Blog</NuxtLink>
        </div>
      </div>



      <div class=''>
        <div class=''>
          <div class='relative inline-block w-full'>
            <img :src="post?.featured_image" class='blog-thumbnail h-20' />
            <p class='mt-8' style="color: #ccc">
              created at: {{ new Date(post?.created).toLocaleString('en-US')}}
            </p>
            <div class='mt-20'>
              <h1 class='heading-text'>
                {{ post?.title }}
              </h1>
              <div class='mt-8'>
                <div v-html="post?.body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const router = useRouter()
  const route = useRoute()

  const { $api } = useNuxtApp()

  const post = ref<any>(null)
  
  onMounted(async () => {
    try {
      const res = await $api.getPost(route.params.id);
      post.value = res.data;
      console.log('response', res);
    } catch(err: any) {
      throw new Error(`api error for single post--- ${err?.response?.data}`)
    } finally {
      console.log('------working-------');
    }
  });
</script>

<style>

</style>