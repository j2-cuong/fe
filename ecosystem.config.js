module.exports = {
  apps: [
    {
      name: "cuongnh",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000", // c?ng m?c d?nh 3000
      instances: 1,          // ch? ch?y 1 process
      exec_mode: "fork",     // không dùng cluster
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
