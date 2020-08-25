const { config } = require("./wdio.shared.conf.ts");

exports.config = {
  /**
   * base config
   */
  ...config,
  /**
   * config for local testing
   */
  services: ["chrome-driver"],
  capabilities: [
    {
      browserName: "chrome",
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        args: process.argv.includes("--headless")
          ? ["--headless", "--disable-gpu"]
          : [],
      },
    },
  ],
};
