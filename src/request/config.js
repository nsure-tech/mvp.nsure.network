const DOMAIN_CONFIG = {
    // 开发
    dev: {
        common: 'https://api.nsure.network', // https://test.goomtu.com
    },
    // 测试
    test: {
        common: 'https://api.nsure.network',
    },
    // 正式
    prod: {
        common: 'https://api.nsure.network',
    }
};

let domain = DOMAIN_CONFIG.dev;
console.log('VUE_APP_CURRENTMODE', process.env.VUE_APP_CURRENTMODE)

if (process.env.VUE_APP_CURRENTMODE === 'test') {
    domain = DOMAIN_CONFIG.test;
}

if (process.env.VUE_APP_CURRENTMODE === 'prod') {
    domain = DOMAIN_CONFIG.prod;
}

export const baseURL = domain.common;