import express, { Request, Response } from 'express';
import os from 'os';

const app = express();

app.get('/', (req: Request, res: Response) => {
  return res.json({
    message: 'Hello World'
  });
});

app.listen(3001, () => {
  const ipAddress = getContainerIPAddress();

  if (ipAddress) {
    console.log(`\n\n\nServer is running at http://${ipAddress}:3001\n\n\n`);
  } else {
    console.error('Unable to find the IP address of the container.');
  }
});

/**
 * Função que retorna o endereço IP do contêiner, se encontrado.
 * @returns {string|null} O endereço IP do contêiner, ou null se não encontrado.
 */
function getContainerIPAddress() {
  const networkInterfaces = os.networkInterfaces();

  for (const interfaceName in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceName];
    const containerInterface = interfaces?.find(isContainerInterface);

    if (containerInterface) {
      return containerInterface.address;
    }
  }

  return null;
}

/**
 * Função auxiliar para verificar se uma interface de rede é a do contêiner.
 *
 * @param {Object} interfaceInfo - Informações da interface de rede. Veja a descrição abaixo para os detalhes das propriedades.
 * @returns {boolean} Retorna true se a interface não é interna (do tipo loopback) e pertence à família de endereços IPv4, caso contrário retorna false.
 *
 * @description
 * Informações da interface de rede:
 * - `internal` (boolean): Indica se a interface é interna (do tipo loopback) ou não.
 * - `family` (string): A família de endereços IP da interface de rede. No contexto deste código, representa o tipo de protocolo IP utilizado (por exemplo, "IPv4" ou "IPv6").
 */
function isContainerInterface(interfaceInfo: { internal: boolean, family: string }) {
  return !interfaceInfo.internal && interfaceInfo.family === 'IPv4';
}
