import Pusher, { Options } from "pusher-js";

export const pusherClient = (channelId: number) => {
  const options: Options = {
    cluster: "us2",
    httpPath: "",
  };

  const pusher = new Pusher("eb1d5f283081a78b932c", options);

  pusher.subscribe(`chatrooms.${channelId}.v2`);

  return pusher;
};

export default pusherClient;
