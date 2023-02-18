//necessario instalar o axios (npm instal axios, para node)

const axios = require("axios")

async function getCep( Cep ){
    try {
        const response = await axios.get('https://viacep.com.br/ws/'+ Cep +'/json/')
        console.log( response.data )
    } catch (error) {
        console.log(error)
    }
}

getCep('01001000')