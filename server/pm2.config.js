module.exports = {
    apps: [
        {
            name: 'BACKEND_API',
            script: './server.js',
            instances: 1,
            autorestart: true,
            watch: false,
        },
    ],
};