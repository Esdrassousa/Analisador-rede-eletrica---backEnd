
const app = require('../src/app')
const http = require('http')
const debug = require('debug')('nodestr:serve')




const port = normalizePorte(process.env.PORT || '3003');


const server = http.createServer(app)



server.listen(port)
server.on('error', onError)
server.on('listening', onLitening)




function normalizePorte(val){
    const port = parseInt(val, 10);
    if (isNaN(port)){
        return val
    }
    if (port >=0){
        return port;
    }
    
    
    return false
}

function onError(error){
    if (error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string'?
        'Pipe' + port:
        'Port' + port;
    switch(error.code){
        case 'EACCES':
            console.error(bind + 'requer elevadas privilegios de usuario')
            process.exit(1)
            break;
        
        case 'EADDRINUSE':
            console.error(bind + 'Já em uso')
            process.exit(1)
            break;
        default:
            throw error;
    }
}

function onLitening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe' + addr
        : 'port' + addr.port;
    debug('Listening on' + bind);
}

console.log('API rodadndo na port ' + port)