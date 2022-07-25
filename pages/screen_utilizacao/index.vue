<template>

    <div class="container">

      <Header />

      <div class="content">

        <div class="row-superior">

            <TitlePage />

        </div>

        <div class="row-inferior">

            <p class="subtitle">VOCÊ JÁ SABE UTILIZAR ESTA INTERFACE?</p>

            <div class="align-items-center">
            
              <button class="btn btn-sucess">SIM</button>
              <button class="btn btn-alert">NÃO</button>
            
            </div>

        </div>
      
      </div>
    
    </div>

</template>


<script>

export default {
  name: 'screen_utilizacao'
}


</script>


<style lang="scss" scoped>

    @import "@/layouts/_normal_pages/Screen_Utilizacao.scss";
    @import "@/layouts/_responsividade/responsividade_grid.scss";

</style>