
/* const http = require('http');

const server = http.createServer((req, res) => {

res.end('hola mundo cruel')

}); arriba sin uso de modulos ni express */
/*                     ****************************************+
                    token para github
                    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

                    video
                    https://www.youtube.com/watch?v=hlYkxZrdeBI
                    ***************************************** */


const express = require('express');

const app = express();

app.get('/',(req, res) => res.send('hola mundo cruel ahora usando express') 

);

/* server.listen(3000); */
  app.listen(3000);
console.log('servicio en puerto 3000 ok');