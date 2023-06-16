import Link from "next/link";
import { useEffect, useState } from "react";

import { useMttqClient } from "@/hooks/mttq";
import { Flex, Text } from "@chakra-ui/react";

import type { Device as DeviceType } from "@/types";
const device_topic = "/device/6f9ea7c7-6297-4283-b72d-7d673d3473fd";

export default function Device() {
  const client = useMttqClient(device_topic);
  const [device, set_device] = useState<DeviceType>({
    device_id: "",
    device_name: "",
    status: false,
  });

  useEffect(() => {
    client?.on("message", function (topic: string, message: string) {
      if (topic === device_topic) {
        set_device(JSON.parse(message));
      }
    });
  }, [client]);

  return (
    <Flex flexDirection="column">
      <Text textAlign="center" mt={20}>
        Device ID:{device.device_id}
      </Text>
      <Text textAlign="center" mt={4}>
        Device name: {device.device_name}
      </Text>
      <Text textAlign="center" mt={4} color={device.status ? "green" : "red"}>
        Device's status: {device.status ? "Active" : "Inactive"}
      </Text>

      <Flex mt={20} justifyContent="center">
        <Link href="/dashboard">To Dashboard page</Link>
      </Flex>
    </Flex>
  );
}
