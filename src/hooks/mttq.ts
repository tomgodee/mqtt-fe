import { useState, useEffect } from "react";
import mqtt from "mqtt";

export function useMttqClient(topic: string) {
  const connect_to_mqtt_broker = (host: string) => {
    setClient(mqtt.connect(host));
  };
  const [client, setClient] = useState<any>(null);

  useEffect(() => {
    if (client) {
      client.on("connect", function () {
        client.subscribe(topic);
      });
    } else {
      connect_to_mqtt_broker("ws://localhost:8080");
    }

    return () => {
      client?.end();
    };
  }, [client]);

  return client;
}
