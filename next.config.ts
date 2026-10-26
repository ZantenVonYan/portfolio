import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow both loopback hostnames so HMR works from 127.0.0.1 and localhost
  // (Cursor desktop preview often opens 127.0.0.1).
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
