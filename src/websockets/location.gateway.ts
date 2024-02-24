import { ConnectedSocket, MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { LocationService } from 'src/service/location/location.service';


@WebSocketGateway(3001, { namespace: '/location', cors: true })
export class LocationGateway implements OnGatewayConnection {
  @WebSocketServer() server: Server;
  private port;
  constructor(private service: LocationService) {
    this.port = process.env.PORT || 3001;
   }

  handleConnection(client: any, ...args: any[]) {
    console.log(`Cliente conectado ${client.id}`)
  }

  @SubscribeMessage('location')
  handleLocation(@MessageBody() data: any, @ConnectedSocket() client: Socket): void {
    console.log(`Localização recebida de ${client.id}: ${JSON.stringify(data)}`);

    // tomar ação com a localização recebida
    client.broadcast.emit('Location', data);
  }

  @SubscribeMessage('Position Update')
  handleLocationUpdate(@MessageBody() data: any) {
    console.log('Nova atualização de localização:', data);

    // Envie a atualização de localização para outros clientes WebSocket, se necessário
    this.service.updateLocation(data.userId, data.latitude, data.longitude)
    this.server.emit('locationUpdate', data);
  }

}
