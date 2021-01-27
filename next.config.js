const withPWA = require("next-pwa");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    images: {
      loader: "imgix",
      path: "/",
    },
    env: {
      API_URL: isDev ? "http://localhost:3000" : "https://egriboz.com",
    },
    pwa: {
      dest: "public",
      disable: isDev,
    },
  };
};

module.exports = (phase) => withPWA(nextConfig(phase));
