<template>

    <div class="container">
    
        <Header />

        <div class="content">

            <div class="row-superior">

                <TitlePage />

            </div>

            <div class="row-inferior">

                <div class="card-info">
                    <div>
                        <p class="card-title">Meio Ambiente</p>
                    </div>
                    <div>
                        <p class="card-subject">Requisitos de Meio Ambiente de acordo com o equipamento:​​</p>
                    </div>
                </div>

                <div class="formulario">
                    
                    <div class="line-question">

                        <input type="checkbox" class="checkbox" id="um"/>
                        <label class="p-question" for="um">1 - Isento de vazamento de óleo</label>
                        
                    </div>

                </div>

                <div class="align-items-center">
            
                    <button class="btn btn-sucess" v-on:click="showModal()">Finalizar</button>
                    <button class="btn btn-alert">Cancelar</button>
            
                </div>

                <div>
                    <ModalLock/>
                </div>
                <div>
                    <ModalReleased/>
                </div>
            
            </div>

        </div>
    
    </div>

</template>

<script>

export default {
    name: 'screen_cvMeioAmbiente',
    data() {
        return {
        showDialogV: false,
        intTest: 0
        }
    },
    methods:{
        showModal(intTest){
            this.showDialogV = true;
        }
    }
}

</script>

<style lang="scss" scoped>

    @import "@/layouts/_normal_pages/Screen_CvMeioAmbiente.scss";
    @import "@/layouts/_responsividade/responsividade_grid.scss";


</style>