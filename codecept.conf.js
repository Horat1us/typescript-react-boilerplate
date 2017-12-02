const config = {
    "tests": "./tests/acceptance/*.js",
    "timeout": 10000,
    "output": "./tests/output",
    "helpers": {
        "WebDriverIO": {
            "url": "/",
            "browser": "chrome",
            "windowSize": "1600x1000",
            "host": "0.0.0.0"
        },
    },
    "include": {},
    "bootstrap": false,
    "reporterOptions": {
        "reportDir": "output"
    },
    "name": "wearesho-frontend",
    "translation": "ru-RU",
    "mocha": {
        "reporterOptions": {
            "reportDir": env === 'scrutinizer' ? '/home/scrutinizer/artifacts' : "./tests/output",
        }
    }
};

exports.config = config;