<template>
  <div>
    <section id="nav" class="width fixed left-0 top-0 h-screen bg-bluebg z-10 font-sans transition duration-500">
      <div class="pt-4 pl-8 pb-10 mb-4 text-white">
        <h2 class="text-2xl font-bold">
          <i class="icon-facebook pr-4" /><span>Consignment System</span>
        </h2>
      </div>
      <nav class="mt-4 ml-4">
        <ul>
          <li v-for="item in items" :key="item.name">
            <nuxt-link :to="item.to" :class="item.class">
              <i :class="item.icon" />
              <span>{{ item.name }}</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </section>
    <section class="margin-left">
      <header class="bg-white flex justify-between items-center py-4 px-6 fixed top-0 header-width z-10 shadow-lg">
        <h2 class="text-2xl text-truegray-800 font-bold">
          <i class="icon-menu mr-4 cursor-pointer bg-bluebg rounded-full p-1.5 text-white md:bg-white md:p-0 md:text-truegray-800" @click="handelNav()" />
          <nuxt-link v-for="item in items" :key="item.name" :to="item.to" :class="item.class2" />
          <span class="sm:hidden">Darse System</span>
        </h2>
        <div class="hidden border border-solid border-gray-300 py-2 px-4 rounded-full text-sm sm:flex items-center">
          <form @submit.prevent="search()">
            <button type="submit">
              <i class="icon-search text-truegray-800 text-2xl pr-4" />
            </button>
            <input v-model="searchs" type="search" placeholder="Buscar aqui..." class="outline-none">
          </form>
        </div>
        <div class="hidden sm:flex items-center">
          <img src="~/assets/img/user.png" alt="" class="rounded-full w-14 h-14 mr-4">
          <div>
            <h4 class="font-bold">
              Randy Davila
            </h4>
            <span class="text-sm text-bluetextsmall">Super Admin</span>
          </div>
        </div>
      </header>
      <main class="mt-24 p-4">
        <Nuxt />
      </main>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchs: '',
      items: [
        {
          name: 'Inicio',
          class: 'pl-4 text-white text-lg hover:text-bluebg py-4 hover:bg-white block rounded-l-full flex items-center',
          to: '/',
          icon: 'icon-home pr-4 text-2xl',
          class2: 'dashboard hidden sm:inline-block'
        },
        {
          name: 'Remesa',
          class: 'pl-4 text-white text-lg hover:text-bluebg py-4 hover:bg-white block rounded-l-full flex items-center',
          to: '/consignment',
          icon: 'icon-mail pr-4 text-2xl',
          class2: 'articles hidden sm:inline-block'
        },
        {
          class2: 'create hidden sm:inline-block',
          to: '/consignment/create'
        },
        {
          class2: 'view hidden sm:inline-block',
          to: '/consignment/view/?'
        },
        {
          class2: 'edit hidden sm:inline-block',
          to: '/consignment/edit/?'
        },
        {
          class2: 'search hidden sm:inline-block',
          to: '/consignment/search/?'
        }
      ]
    }
  },
  methods: {
    handelNav () {
      const main = document.querySelector('.margin-left')
      const nav = document.querySelector('.width')
      const width = document.querySelector('.header-width')
      main.classList.toggle('margin-left2')
      nav.classList.toggle('width2')
      width.classList.toggle('header-width2')
    },
    search () {
      this.$router.push('/consignment/search/' + this.searchs)
    }
  }
}
</script>
<style>
.width {
  left: -100%;
  transition: left .5s ease;
}
.width2 {
  left: 0;
  width: 360px;
}
.header-width {
  width: 100%;
}
li .nuxt-link-exact-active{
  background: #fff !important;
  color: #000430 !important;
  margin: 1rem 0rem 1rem 0rem;
}
@media (min-width: 768px){
  .width {
    width: 5rem;
    left: 0;
    transition: width .5s ease;
  }
  .width2 {
    width: 25% !important;
  }
  .margin-left{
    margin-left: 5rem;
  }
  .width span {
    visibility: hidden;
  }
  .width2 span {
    visibility: visible;
  }
  .header-width {
    width: calc(100% - 5rem);
  }
}
@media (min-width: 1024px) {
  .margin-left{
  margin-left: 25%;
  transition: margin-left .5s ease;
  }
  .margin-left2{
    margin-left: 5rem !important;
  }
  .width {
    width: 25%;
    transition: width .5s ease;
  }
  .width span {
    visibility: visible;
  }
  .width2 {
    width: 5rem !important;
  }
  .width2 span {
    visibility: hidden;
  }
  .header-width {
    width: 75%;
    transition: width .5s ease;
  }
  .header-width2 {
    width: calc(100% - 5rem) !important;
  }
}
</style>
