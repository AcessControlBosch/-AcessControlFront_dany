<template>

  <div class="container">

    <Header />

    <div class="content">

        <div class="formulario">

          <TitlePage />

          <label for="nome" class="label-form">Nome:</label>
          <input type="text" placeholder="Digite o seu nome..." id="nome" class="input-form"/>

          <label for="edv" class="label-form">EDV:</label>
          <input type="number" placeholder="Digite o seu EDV..." id="edv" class="input-form"/>

          <label for="edv" class="label-form">Área:</label>
          <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Selecione a área..." />

          <div class="align-items-center">

            <button class="btn-send-approved">Enviar</button>

          </div>
        
        </div>
    
    </div>

  </div>

</template>

<script>

export default {

  name: 'screen_criarConta',

  data() {

	return {

		selectedCity: null,
            cities: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ]
	    }

    }

}

</script>

<style lang="scss" scoped>

   @import "@/layouts/_normal_pages/Screen_CriarConta.scss";
   @import "@/layouts/_responsividade/responsividade_formularios.scss";

</style>
