!<template>
    <div class="container">

        <Header />

        <div class="content">

            <div class="row-superior">

                <TitlePage />

            </div>

        <div class="buttons">
            <div class="button-content">
                <button class="button-function">
                    <p class="tipo">Liberar Máquina</p>
                    <i class="pi pi-lock"></i>
                </button>
                <button class="button-function">
                    <p class="tipo">Interface Didática</p>
                <font-awesome-icon icon="fa-regular fa-address-book" />
                </button>
            </div>
            <div class="button-content">
                <button class="button-function">
                    <p class="tipo">Documentos</p>
                    <i class="pi pi-folder-open" id="pi-doc"></i>
                </button>
                <button class="button-function">
                    <p class="tipo">Registros</p>
                    <i class="pi pi-list" id="pi-reg"><i class="pi pi-pencil" id="pi-list"></i></i>
                </button>
            </div>
            
        </div>
        
       
        </div>
    </div>
</template>

<script>
export default {
    name: 'screen_home'
}
</script>

<style lang="scss" scoped>

    @import "@/layouts/_normal_pages/Screen_Home.scss";
    @import "@/layouts/_responsividade/responsividade_grid.scss";

</style>