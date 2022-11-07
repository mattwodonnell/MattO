import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const { glob } = require("glob");
const path = require("path");

const compileTimestamp = new Date().toLocaleString();

// This method returns an object of service aliases so that we can just import from
// something like 'game-service' and not need to worry which environment (mock or real) we're in
const resolveServices = (useMock) => {
  const serviceAliases = {};
  const ext = useMock ? "mock.js" : "js";
  const serviceFiles = glob.sync(`src/services/**/*.service.${ext}`);

  serviceFiles.forEach((serviceFile) => {
    // Parse service name from 'src/services/<service-to-extract>/*.js'
    const service = serviceFile.replace(/.*\/([^/]+)\/[^/]*$/g, "$1");
    serviceAliases[`${service}-service`] = path.resolve(__dirname, serviceFile);
  });

  console.log(serviceAliases);
  return serviceAliases;
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],
    define: {
      COMPILE_TIME: JSON.stringify(compileTimestamp),
      API_URL: JSON.stringify(process.env.API_URL || "https://localhost:3000"),
    },
    test: {
      globals: true,
      environment: "happy-dom",
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
    resolve: {
      alias: Object.assign(
        {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
        resolveServices(mode === "mock")
      ),
    },
  };
});
