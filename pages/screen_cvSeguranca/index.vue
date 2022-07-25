<template>

    <div class="container">
    
        <Header />

        <div class="content">

            <div class="row-superior">

                <TitlePage />

            </div>

            <div class="row-inferior">

                <div class="card-info">
                
                    <p class="card-title">Segurança</p>
                    <p class="card-subject">Requisitos de Segurança de acordo com o equipamento:​</p>


                </div> 

                <div class="formulario">
                    
                    <div class="line-question">

                        <input type="checkbox" class="checkbox" id="um"/>
                        <label class="p-question" for="um">1 - Proteções</label>
                        

                    </div>

                    <div class="line-question">

                        <input type="checkbox" class="checkbox" id="dois"/>
                        <label class="p-question" for="dois">2 - Parafusos de Fixação</label>
                        

                    </div>

                    <div class="line-question">

                        <input type="checkbox" class="checkbox" id="tres"/>
                        <label class="p-question" for="tres">3 - Fiação</label>
                        

                    </div>

                    <div class="line-question">

                        <input type="checkbox" class="checkbox" id="quatro"/>
                        <label class="p-question" for="quatro">4 - Mangueiras</label>
                        

                    </div>

                    <div class="line-question">

                        <input type="checkbox" class="checkbox" id="cinco"/>
                        <label class="p-question" for="cinco">5 - Botão de Emergência</label>
                        

                    </div>


                    <div class="line-question">

                        <input type="checkbox" class="checkbox" id="seis"/>
                        <label class="p-question" for="seis">6 - Botões de Comando</label>
                        

                    </div>


                    <div class="line-question">

                        <input type="checkbox" class="checkbox" id="sete"/>
                        <label class="p-question" for="sete">7 - Chave Geral</label>
                        

                    </div>


                    <div class="line-question">

                        <input type="checkbox" class="checkbox" id="oito"/>
                        <label class="p-question" for="oito">8 - Painel elétrico fechado</label>
                        

                    </div>

                    <div class="line-question">

                        <input type="checkbox" class="checkbox" id="nove"/>
                        <label class="p-question" for="nove">9 - Fixação de Ferramenta</label>

                    </div>


                </div>

                <div class="align-items-center">
            
                    <button class="btn btn-sucess">Continuar</button>
                    <button class="btn btn-alert">Cancelar</button>
            
                </div>
            
            </div>

        </div>
    
    </div>

</template>

<script>

export default {
    name: 'screen_cvSeguranca'
}

</script>

<style lang="scss" scoped>

    @import "@/layouts/_normal_pages/Screen_CvSeguranca.scss";
    @import "@/layouts/_responsividade/responsividade_grid.scss";


</style>