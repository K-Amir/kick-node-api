import { MessageType } from "../types/message.types.js";
import pusherClient from "./pusher/pusher.js";

export const getChatroomMessagesByChannelId = (
  chatroom: number,
  callback: (ev: MessageType) => void
) => {
  pusherClient(chatroom).bind(
    "App\\Events\\ChatMessageEvent",
    (ev: MessageType) => {
      callback(ev);
    }
  );
};
