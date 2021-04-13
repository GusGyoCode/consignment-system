<template>
  <section class="w-11/12 px-4 mx-auto">
    <h2 class="text-2xl font-bold text-truegray-600 mb-4">
      Datos de Cliente:
    </h2>
    <div v-if="!progress" class="flex justify-center items-center">
      <i class="icon-spin text-9xl text-bluetextsmall" />
    </div>
    <div v-else class="border border-solid border-gray-300 p-4 rounded-xl">
      <h3 class="text-lg text-semibold text-truegray-600 mb-3">
        <i class="icon-ci" /> Cedula, Pasaporte, DNI: <span class="text-base text-medium text-black">{{ consignment.ci }}</span>
      </h3>
      <h3 class="text-lg text-semibold text-truegray-600 mb-3">
        <i class="icon-name" /> Nombre y Apellido: <span class="text-base text-medium text-black">{{ consignment.name }}</span>
      </h3>
      <h3 class="text-lg text-semibold text-truegray-600 mb-3">
        <i class="icon-cibank" /> Cedula del Destinatario: <span class="text-base text-medium text-black">{{ consignment.cibank }}</span>
      </h3>
      <h3 class="text-lg text-semibold text-truegray-600 mb-3">
        <i class="icon-namebank" /> Nombre del Destinatario: <span class="text-base text-medium text-black">{{ consignment.namebank }}</span>
      </h3>
      <h3 class="text-lg text-semibold text-truegray-600 mb-3">
        <i class="icon-bank" /> Banco: <span class="text-base text-medium text-black">{{ consignment.bank }}</span>
      </h3>
      <h3 class="text-lg text-semibold text-truegray-600 mb-3">
        <i class="icon-typebank" /> Tipo de Cuenta: <span class="text-base text-medium text-black">{{ consignment.typebank }}</span>
      </h3>
      <h3 class="text-lg text-semibold text-truegray-600 mb-3">
        <i class="icon-numberbank" /> Numero de Cuenta: <span class="text-base text-medium text-black">{{ consignment.numberbank }}</span>
      </h3>
      <div class="flex justify-end items-center">
        <NuxtLink to="/consignment" class="text-lg hover:bg-orange-500 hover:bg-opacity-5 p-2 rounded text-yellow-500 font-medium transition duration-500">
          Regresar
        </NuxtLink>
        <NuxtLink :to="'/consignment/edit/' + id" class="text-lg hover:bg-bluebg hover:bg-opacity-5 p-2 rounded text-bluetextsmall font-medium transition duration-500">
          Editar
        </NuxtLink>
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
      id: '',
      url: Global.url,
      consignment: new Consignment(),
      progress: null
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
        this.progress = true
      })
    }
  }

}
</script>
<style>
h2 .nuxt-link-active.view::before {
  content: "Ver Datos";
}
</style>
