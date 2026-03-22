const ENABLED_VALUE = "true";

export type ChannelTalkPublicConfig = {
  enabled: boolean;
  pluginKey: string | null;
};

export function getChannelTalkPublicConfig(): ChannelTalkPublicConfig {
  const enabled = process.env.NEXT_PUBLIC_CHANNEL_TALK_ENABLED === ENABLED_VALUE;
  const pluginKey = process.env.NEXT_PUBLIC_CHANNEL_TALK_PLUGIN_KEY?.trim() || null;

  return {
    enabled,
    pluginKey
  };
}
