<template>
  <section class="w-full md:w-10/12 lg:w-9/12 xl:w-7/12 px-4 mx-auto flex justify-center items-center">
    <form class="border-solid border border-gray-300 p-4 rounded-2xl w-full" @submit.prevent="update()">
      <div class="flex flex-wrap items-center justify-between pb-7 border-solid border-b border-gray-300 mb-5">
        <h2 class="text-2xl md:text-xl font-bold mb-3 w-full text-truegray-700">
          <i class="icon-name" />
          Datos del Cliente:
        </h2>
        <div class="w-full sm:w-1/2 flex flex-wrap items-center">
          <i class="icon-ci mr-2 text-gray-400 text-lg sm:text-base" />
          <input v-model="consignment.ci" type="text" placeholder="Cedula, DNI, Pasaporte:" class="w-10/12 sm:w-auto p-1 font-medium border-solid border-b border-gray-300 text-lg sm:text-base text-truegray-600">
        </div>
        <div class="w-full sm:w-1/2 flex flex-wrap items-center">
          <i class="icon-name mr-2 text-gray-400 text-lg sm:text-base" />
          <input v-model="consignment.name" type="text" placeholder="Nombre del Cliente:" class="w-10/12 sm:w-auto p-1 font-medium border-solid border-b border-gray-300 text-lg sm:text-base text-truegray-600">
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-between mb-5">
        <h2 class="text-2xl md:text-xl font-bold mb-3 w-full text-truegray-700">
          <i class="icon-namebank" />
          Datos del Destinatario:
        </h2>
        <div class="w-full sm:w-1/2 flex flex-wrap items-center mb-5">
          <i class="icon-cibank mr-2 text-gray-400 text-lg sm:text-base" />
          <input v-model="consignment.cibank" type="text" placeholder="Cedula del Destinatario:" class="w-10/12 sm:w-auto p-1 font-medium border-solid border-b border-gray-300 text-lg sm:text-base text-truegray-600">
        </div>
        <div class="w-full sm:w-1/2 flex flex-wrap items-center mb-5">
          <i class="icon-namebank mr-2 text-gray-400 text-lg sm:text-base" />
          <input v-model="consignment.namebank" type="text" placeholder="Nombre del Destinatario:" class="w-10/12 sm:w-auto p-1 font-medium border-solid border-b border-gray-300 text-lg sm:text-base text-truegray-600">
        </div>
        <div class="w-full sm:w-1/2 flex flex-wrap items-center mb-5">
          <i class="icon-bank mr-2 text-gray-400 text-lg sm:text-base" />
          <input v-model="consignment.bank" type="text" placeholder="Nombre del Banco:" class="w-10/12 sm:w-autop-1 font-medium border-solid border-b border-gray-300 text-lg sm:text-base text-truegray-600">
        </div>
        <div class="w-full sm:w-1/2 flex flex-wrap items-center mb-5">
          <i class="icon-typebank mr-2 text-gray-400 text-lg sm:text-base" />
          <input v-model="consignment.typebank" type="text" placeholder="Tipo de Cuenta:" class="w-10/12 sm:w-auto p-1 font-medium border-solid border-b border-gray-300 text-lg sm:text-base text-truegray-600">
        </div>
        <div class="w-full flex flex-wrap items-center">
          <i class="icon-numberbank mr-2 text-gray-400 text-lg sm:text-base" />
          <input v-model="consignment.numberbank" type="text" placeholder="Numero de Cuenta:" class="w-11/12 p-1 font-medium border-solid border-b border-gray-300 text-lg sm:text-base text-truegray-600">
        </div>
      </div>
      <div class="flex justify-end items-center">
        <button v-if="!progress" type="submit" class="bg-bluetextsmall text-white px-4 py-2 rounded-full w-1/3 text-lg font-bold hover:bg-white hover:text-bluetextsmall transition duration-500">
          Enviar
        </button>
        <button v-else disabled class="bg-bluetextsmall text-white px-4 py-2 rounded-full w-1/3 text-lg font-bold hover:bg-white hover:text-bluetextsmall transition duration-500">
          <i class="icon-spin" />
        </button>
      </div>
    </form>
    <div v-if="alert" class="z-30 absolute flex items-center justify-center w-full h-full bg-black bg-opacity-25 top-0 left-0">
      <div class="w-72 border-solid border border-gray-300 bg-white px-6 pt-6 rounded-lg shadow-2xl">
        <div v-if="!error" class="flex flex-wrap justify-center items-center pb-4">
          <i class="icon-ok text-8xl text-lime-500" />
          <h2 class="w-full text-center mt-2 text-2xl font-bold text-truegray-700">
            Editado Exitoso
          </h2>
        </div>
        <div v-else class="flex flex-wrap justify-center items-center pb-4">
          <i class="icon-cancel text-8xl text-yellow-500" />
          <h2 class="w-full text-center mt-2 text-2xl font-bold text-truegray-700">
            Creacion Fallida
          </h2>
        </div>
        <p v-if="!error" class="text-sm text-truegray-600 font-normal leading-6 tracking-wide pb-5">
          La informacion se a guardado de manera Correcta.
        </p>
        <p v-else class="text-sm text-truegray-600 font-normal leading-6 tracking-wide pb-5">
          La informacion no se a guardado de manera correcta por favor verifique los datos.
        </p>
        <div v-if="!error" class="flex justify-end pb-2">
          <button class="text-lg hover:bg-lime-500 hover:bg-opacity-5 p-2 rounded text-lime-500 font-medium transition duration-500" @click="regresar()">
            Aceptar
          </button>
        </div>
        <div v-else class="flex justify-end pb-2">
          <button class="text-lg hover:bg-yellow-500 hover:bg-opacity-5 p-2 rounded text-yellow-500 font-medium transition duration-500" @click="alert = false, error = false">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
import Global from '~/Global'
import Consignment from '~/components/models/consignment'
export default {
  data () {
    return {
      url: Global.url,
      consignment: new Consignment(),
      alert: false,
      error: false,
      progress: false
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getConsignment(this.id)
  },
  methods: {
    getConsignment (id) {
      axios.get(this.url + 'api/article/' + id).then((response) => {
        this.consignment = response.data.article
      })
    },
    update () {
      this.progress = true
      axios
        .put(this.url + 'api/article/' + this.id, this.consignment)
        .then((response) => {
          if (response.data.status === 'success') {
            this.alert = true
          } else {
            this.error = true
            this.alert = true
            this.progress = false
          }
        })
        .catch(() => {
          this.error = true
          this.alert = true
          this.progress = false
        })
    },
    regresar () {
      this.$router.push('/consignment')
    }
  }
}
</script>
<style>
h2 .nuxt-link-active.edit::before {
  content: "Editar Remesa";
}
</style>
