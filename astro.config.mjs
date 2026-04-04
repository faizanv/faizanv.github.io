// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://faizanv.com",
  server: {
    allowedHosts: [
      "vjdqg-2600-1700-a1d0-3af0-c020-7d9c-cf15-d2fd.a.free.pinggy.link",
    ],
  },
  redirects: {
    "/resume": "/FaizanViraniResume.pdf",
  },
});
