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
    console.log(`\n\n\n [System] - Server is running at http://${ipAddress}:3001\n\n\n`);
  } else {
    console.error('Unable to find the IP address of the container.');
  }
});

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

function isContainerInterface(interfaceInfo: any) {
  return !interfaceInfo.internal && interfaceInfo.family === 'IPv4';
}
