"use client";

import { useEffect } from "react";
import { boot, loadScript, shutdown } from "@channel.io/channel-web-sdk-loader";

import { getChannelTalkPublicConfig } from "@/components/integrations/channel-talk/config";

let activePluginKey: string | null = null;

export function ChannelTalkLoader() {
  useEffect(() => {
    const { enabled, pluginKey } = getChannelTalkPublicConfig();

    if (!enabled || !pluginKey) {
      return;
    }

    loadScript();

    if (activePluginKey !== pluginKey) {
      if (activePluginKey) {
        shutdown();
      }

      boot({ pluginKey });
      activePluginKey = pluginKey;
    }

    return () => {
      if (activePluginKey === pluginKey) {
        shutdown();
        activePluginKey = null;
      }
    };
  }, []);

  return null;
}
