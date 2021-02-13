import axios from 'axios';
import SECRETS from '../token.js'
export default async () => {

  
    console.log('Run APIcalls script',SECRETS.TOKEN)
    return axios.post('https://dynalist.io/api/v1/doc/read', 
       {
       token: SECRETS.TOKEN,
       file_id: 'TLDWe8a5xrdvptlhqnkWQMUY'
     })
     .then(async response => response.data.title)
} 

