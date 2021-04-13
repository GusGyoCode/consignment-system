<template>
  <section class="w-full mx-auto mt-4 md:w-11/12 md:px-4">
    <div class="mb-4 flex justify-end items-center">
      <NuxtLink to="/consignment/create" class="text-bluetextsmall text-lg px-4 py-2 hover:bg-bluebg hover:text-white rounded-full transition duration-500">
        Crear Remesa
      </NuxtLink>
    </div>
    <div v-if="!consignments" class="flex justify-center items-center">
      <i class="icon-spin text-9xl text-bluetextsmall" />
    </div>
    <table v-else class="w-full">
      <thead class="bg-gray-100 text-xl font-bold text-truegray-500">
        <tr class="border-solid border-b border-gray-300">
          <td class="text-center py-2">
            Cedula, Pasaporte, DNI:
          </td>
          <td class="text-center py-2">
            Nombre:
          </td>
          <td class="text-center py-2">
            Accion:
          </td>
        </tr>
      </thead>
      <tbody class="font-semibold">
        <tr v-for="consignment in consignments" :key="consignment._id" class="border-solid border-b border-gray-300">
          <td class="text-center py-2 hover:bg-gray-50 transition duration-500">
            <NuxtLink :to="'/consignment/view/'+consignment._id" alt="edit" class="hover:text-bluetextsmall transition duration-500">
              CI-V{{ consignment.ci }}
            </NuxtLink>
          </td>
          <td class="text-center py-2 hover:bg-gray-50 transition duration-500">
            <NuxtLink :to="'/consignment/view/'+consignment._id" alt="edit" class="hover:text-bluetextsmall transition duration-500">
              {{ consignment.name }}
            </NuxtLink>
          </td>
          <td class="text-center py-2 hover:bg-gray-50 transition duration-500">
            <NuxtLink :to="'/consignment/edit/'+consignment._id" alt="edit" class="hover:text-bluetextsmall transition duration-500">
              <i class="icon-edit" />
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import axios from 'axios'
import Global from '~/Global.js'
export default {
  data () {
    return {
      url: Global.url,
      consignments: null
    }
  },
  mounted () {
    this.getconsignment()
  },
  methods: {
    getconsignment () {
      axios.get(this.url + 'api/articles')
        .then((response) => {
          this.consignments = response.data.articles
        })
    }
  }
}
</script>
<style>
h2 .nuxt-link-exact-active.articles::before {
  content: "Remesa";
}
</style>
