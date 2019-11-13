const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch(env) {
        case 'dev':
        return {
            bd_string: 'mongodb+srv://admin:CB1G9H2uA5nbFVLn@busontime-avdnj.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass:  'hackerTrouxa2019',
            jwt_expires_in: '7d'

         }

        case 'homolog':
         return {
            bd_string: 'mongodb+srv://admin:CB1G9H2uA5nbFVLn@busontime-avdnj.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass:  'hackerTrouxaSóseFerRa2019',
            jwt_expires_in: '7d'


        }

        case 'prod':
        return {
            bd_string: 'mongodb+srv://admin:CB1G9H2uA5nbFVLn@busontime-avdnj.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass:  'dsjhfcvgnonjucfv9untyvq809wrt54v398r7B&*T*&R$T5856867v*V%&V%*9',
            jwt_expires_in: '7d'


        }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();