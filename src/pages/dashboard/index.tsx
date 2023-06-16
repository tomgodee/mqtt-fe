import Link from "next/link";
import { useEffect, useState } from "react";

import { useMttqClient } from "@/hooks/mttq";
import { Flex, Text } from "@chakra-ui/react";

import type { DeviceTemperature } from "@/types";
const device_temperature_topic =
  "/device/6f9ea7c7-6297-4283-b72d-7d673d3473fd/Temperature";

export default function Dashboard() {
  const client = useMttqClient(device_temperature_topic);
  const [device_temperature, set_device_temperature] =
    useState<DeviceTemperature>({
      device_id: "",
      sensor_name: "",
      value: 0,
      unit: "",
    });

  useEffect(() => {
    client?.on("message", function (topic: string, message: string) {
      if (topic === device_temperature_topic) {
        set_device_temperature(JSON.parse(message));
      }
    });
  }, [client]);

  return (
    <Flex flexDirection="column">
      <Text textAlign="center" mt={20}>
        Device ID:{device_temperature.device_id}
      </Text>
      <Text textAlign="center" mt={4}>
        Sensor name: {device_temperature.sensor_name}
      </Text>
      <Text textAlign="center" mt={4}>
        Value: {device_temperature.value}
      </Text>
      <Text textAlign="center" mt={4}>
        Unit: {device_temperature.unit}
      </Text>

      <Flex mt={20} justifyContent="center">
        <Link href="/">To Device page</Link>
      </Flex>
    </Flex>
  );
}
