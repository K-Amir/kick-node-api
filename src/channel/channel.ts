import { ChannelType } from "../types/channel.types";
import { makeHttpRequest } from "../utils/puppeteer.js";
import { kickv2 } from "../config/endpoints.js";

export const getChannelData = async (
  channelName: string
): Promise<ChannelType> => {
  const channel = await makeHttpRequest<ChannelType>(
    `${kickv2}/channels/${channelName}`
  );

  return channel;
};
