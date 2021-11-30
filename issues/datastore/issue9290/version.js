const { exec } = require("child_process");

exec("npm list -g | grep amplify", (error, stdout, stderr) => {
  const version = stdout.split("@")[2];
  console.log(version);
});
