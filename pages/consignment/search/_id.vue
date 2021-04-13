<template>
  <section class="w-full mx-auto mt-4 md:w-11/12 md:px-4">
    <div class="mb-4 flex justify-end items-center">
      <NuxtLink to="/consignment/create" class="text-bluetextsmall text-lg px-4 py-2 hover:bg-bluebg hover:text-white rounded-full transition duration-500">
        Crear Remesa
      </NuxtLink>
    </div>
    <table class="w-full">
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
    <div v-if="alert" class="z-30 absolute flex items-center justify-center w-full h-full bg-black bg-opacity-25 top-0 left-0">
      <div class="w-72 border-solid border border-gray-300 bg-white px-6 pt-6 rounded-lg shadow-2xl">
        <div class="flex flex-wrap justify-center items-center pb-4">
          <i class="icon-facebook text-8xl text-yellow-500" />
          <h2 class="w-full text-center mt-2 text-2xl font-bold text-truegray-700">
            Error valor no encontrado
          </h2>
        </div>
        <p class="text-sm text-truegray-600 font-normal leading-6 tracking-wide pb-5">
          Por favor verifique que los datos son correctos o no se encuentra coincidencia.
        </p>
        <div class="flex justify-end pb-2">
          <button class="text-lg hover:bg-yellow-500 hover:bg-opacity-5 p-2 rounded text-yellow-500 font-medium transition duration-500" @click="alert = false">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
import Global from '~/Global.js'
export default {
  data () {
    return {
      url: Global.url,
      consignments: null,
      id: '',
      alert: false
    }
  },
  mounted () {
    this.id = this.$route.params.id
    console.log(this.id)
    this.getconsignment(this.id)
  },
  methods: {
    getconsignment (id) {
      axios.get(this.url + 'api/search/' + id)
        .then((response) => {
          this.consignments = response.data.articles
        }).catch((error) => {
          if (error) {
            this.alert = true
          }
        })
    }
  }
}
</script>
<style>
h2 .nuxt-link-active.search::before {
  content: "Buscar Datos";
}
</style>
