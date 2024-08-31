export interface IMessageBlock {
  message: IMessage;
}

export interface IMeta {
  emoji?: string;
  edited?: boolean;
  replies?: IMessage[];
}

export interface IMessage {
  id: string;
  avatar: string;
  name: string;
  timestamp: Date;
  text: string;
  meta?: IMeta;
  isFirstMessage?: boolean;
  senderId: number;
}

export type IMockMessage = Omit<IMessage, "name" | "avatar">;
