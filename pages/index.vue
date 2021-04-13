<template>
  <section class="w-11/12 px-4 mx-auto">
    <img src="~/assets/img/user.png" alt="" class="w-28 mx-auto mb-6">
    <div class="w-1/2 p-4 mx-auto mt-4 border-gray-300 border border-solid rounded-lg">
      <h3 class="text-2xl font-semibold text-truegray-600 mb-6">
        Bienvenido a System Consignment
      </h3>
      <p class="text-lg text-gray-800 font-medium text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At rerum dolor et aliquid dolore ducimus voluptatem? Repudiandae illo expedita corrupti neque consequatur, quidem id ad quisquam deserunt odio sed provident?
      </p>
      <div class="flex justify-between items-center mt-4">
        <NuxtLink to="/consignment" class="text-bluetextsmall cursor-pointer hover:text-white hover:bg-bluebg transition duration-500 py-2 px-2.5 rounded-full">
          Ir a Remesa
        </NuxtLink>
      </div>
    </div>
    <!-- <div class="grid gap-8 grid-cols-2 mt-4">
      <div class="flex flex-wrap p-4 justify-center items-center border-gray-300 border-solid border rounded-full">
        <div class="mr-16">
          <h4 class="text-4xl font-bold">
            15
          </h4>
          <span class="text-2xl text-bluetextsmall">Articles</span>
        </div>
        <i class="icon-facebook text-6xl font-bold text-bluebg" />
      </div>
      <div class="flex flex-wrap p-4 justify-center items-center bg-bluebg rounded-full">
        <div class="mr-16">
          <h4 class="text-4xl font-bold text-white">
            15
          </h4>
          <span class="text-2xl text-white">Events</span>
        </div>
        <i class="icon-facebook text-6xl font-bold text-white" />
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
}
</script>
<style>
h2 .nuxt-link-exact-active.dashboard::before {
  content: "Inicio";
}
</style>
