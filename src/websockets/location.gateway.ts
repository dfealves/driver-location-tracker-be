import { ConnectedSocket, MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';


@WebSocketGateway(3001, { namespace: '/location', cors: true})
export class LocationGateway implements OnGatewayConnection {
  @WebSocketServer() server: Server;
  constructor() { }

  handleConnection(client: any, ...args: any[]) {
    console.log(`Cliente conectado ${client.id}`)
  }

  @SubscribeMessage('location')
  handleLocation(@MessageBody() data: any, @ConnectedSocket() client: Socket): void {
    console.log(`Localização recebida de ${client.id}: ${JSON.stringify(data)}`);

    // tomar ação com a localização recebida
    client.broadcast.emit('Location', data);
  }

}
