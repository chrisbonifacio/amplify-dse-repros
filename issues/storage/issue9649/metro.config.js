// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

const exclusionList = require("metro-config/src/defaults/exclusionList"); // on top

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.blacklistRE = exclusionList([
  /amplify\/#current-cloud-backend\/.*/,
]);

module.exports = defaultConfig;
