<template>
    <div class="header">
        <div class="pages-wrapper header-wrapper">
            <div class="logon-wrapper">
                <a href="https://nsure.network/#/">
                    <img src="@/assets/images/logo@2x.png" width="40" alt="">
                    <span>Nsure.Network</span>
                </a>
            </div>
            <div class="right-wrapper">
                <ul class="nav-list">
                    <li>
                        <router-link to="/insure">Insure</router-link>
                    </li>
                    <li>
                        <router-link to="/withdraw">Withdraw</router-link>
                    </li>
                    <li>
                        <router-link to="/liquidity-mining">Liquidity Mining</router-link>
                    </li>
                    <li>
                        <router-link to="/stake-pool">Staking Dashboard</router-link>
                    </li>
                    <li>
                        <a href="https://github.com/nsure-tech/" target="_blank" rel="">Github</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuList: [{
                path: '/home',
                name: 'Home'
            },{
                path: '/insure',
                name: 'Insure'
            },{
                path: '/liquidity-mining',
                name: 'Liquidity Mining'
            },{
                path: '/stake-pool',
                name: 'Stake Pool'
            }]
        }
    },
    methods: {
        handle(item) {
            if (item.name === this.$route.name) {
                return
            }
            this.$router.push(item.path)
        },
        home() {
            this.$router.push('/')
        },
        goInsure() {
            this.$router.push('/insure')
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    height: 80px;
    font-weight: bold;
    background-color: #fff;

    .header-wrapper {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logon-wrapper {
        a {
            display: flex;
            align-items: center;
            cursor: pointer;
            text-decoration: none;
            color: #000;
    
            img {
                margin-right: 20px;
            }
        }
    }

    .right-list {
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        &-item {
            margin-left: 40px;
            font-size: 16px;

            a {
                color: #fff;
                cursor: pointer;
                text-decoration: none;
            }

            .last-item {
                display: block;
                cursor: pointer;
                width: 148px;
                height: 48px;
                line-height: 48px;
                text-align: center;
                background: url('../assets/images/button@2x.png') center center no-repeat;
                background-size: contain;
            }
        }
    }

    .nav-list {
        display: flex;

        li {
            font-size: 14px;
            margin-left: 30px;

            a {
                color: #000;
                text-decoration: none;

                &.router-link-active {
                    color: #00b984;
                }
            }
        }
    }
}
</style>
