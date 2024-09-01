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
  replyToId?: string;
}

export type IMockMessage = Omit<IMessage, "name" | "avatar">;
