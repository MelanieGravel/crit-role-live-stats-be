import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
  OnGatewayConnection, OnGatewayDisconnect
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
    cors: {
      origin: '*',
    },
    allowEIO3: true,
  }
)
export class EventsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  afterInit() {
    console.log('WebSocket Gateway initialized');
  }

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }

  // @SubscribeMessage('message')
  // handleMessage(@MessageBody() data: string, client: Socket): void {
  //   console.log('Message received:', data);
  //   console.log(client)
  //   // client.emit('message', `Server response: ${data}`);
  // }

  @SubscribeMessage('message')
  handleMessage(...args: any[]): void {
    // console.log('Arguments:', args);
    // console.log('Client:', args[0]);
    const client: Socket = args[0]
    const data = args[1];
    client.emit('notification', data);
  }
}
