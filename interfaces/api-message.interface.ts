import { IncomingApiMessageType } from '@shared/enums/api-message-type.enum';
import { ApiCallMethod } from '@shared/interfaces/api/api-call-directory.interface';
import { ApiEventDirectory } from '@shared/interfaces/api/api-event-directory.interface';
import { ApiJobMethod } from '@shared/interfaces/api/api-job-directory.interface';
import { WebSocketError } from '@shared/interfaces/websocket-error.interface';

export interface PongMessage {
  id: string;
  msg: IncomingApiMessageType.Pong;
}

export interface SubscriptionReadyMessage {
  msg: IncomingApiMessageType.Ready;
  subs: string[];
}

export interface ResultMessage<T = unknown> {
  id: string;
  msg: IncomingApiMessageType.Result;
  result?: T;
  error?: WebSocketError;
}

export interface ConnectedMessage {
  msg: IncomingApiMessageType.Connected;
  session: string;
}

export interface ApiEvent<T = unknown> {
  collection: ApiCallMethod | ApiJobMethod | keyof ApiEventDirectory;
  fields: T;
  id: number | string;
  msg: IncomingApiMessageType.Changed
  | IncomingApiMessageType.Added
  | IncomingApiMessageType.Removed
  | IncomingApiMessageType.NoSub;
}

export type IncomingWebSocketMessage =
  | PongMessage
  | SubscriptionReadyMessage
  | ResultMessage
  | ConnectedMessage
  | ApiEvent;
