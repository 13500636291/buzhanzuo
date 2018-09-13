<template>
    <div class="home">
        <el-container class="el-container">
            <el-aside class="el-aside">
                <h3>不占座后台管理系统</h3>
                <el-menu
                    default-active="2"
                    class="el-menu-admin"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#0E1935"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    :router="true"
                    :unique-opened="true"
                    >
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span slot="title">概况</span>
                        </template>
                        <el-menu-item index="overview" class="elHover">
                            <span>概况</span>
                        </el-menu-item>
                    </el-submenu>
                   
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>学校管理</span>
                        </template>
                        <el-menu-item index="manageAdd" class="elHover">增加学校</el-menu-item>
                        <el-menu-item index="manageSchool" class="elHover">管理学校</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-edit"></i>
                            <span>学校账号</span>
                        </template>
                        <el-menu-item index="account" class="elHover">账号管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>用户投诉</span>
                        </template>
                        <el-menu-item index="complaint" class="elHover">用户投诉</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>权限管理</span>
                        </template>
                        <el-menu-item index="permission" class="elHover">权限管理</el-menu-item>
                    </el-submenu>
                </el-menu>
                <el-button type="primary" class="layout">退出</el-button>
            </el-aside>
            <el-main class="elMain"><router-view></router-view></el-main>
            <div class="right">
                <div class="helpTitle">
                    <p>帮助中心</p>
                </div>
                <div class="helpText">
                    <p>客服电话:</p>
                    <p>13851863098</p>
                    <p>工作时间：</p>
                    <p>9.30~18.30</p>
                </div>
            </div>
        </el-container>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isCollapse: false,
        }
    },
    mounted () {
        
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    background-color:#F5F5F5;
    .el-container {
        width: 100%;
        height: 100%;
        .el-aside {
            width: 112pt!important;
            width: 100%;
            height: 100%;
            background-color: #0E1935;
            h3{
            margin: 16pt 0 0 9pt;
            font-size: 10pt;
            margin-bottom: 10pt;
            color: white;
            }
            .el-menu-admin{
                width: 100%;
                font-size: 8pt;
                border-right: 0;
                .el-menu-item {
                    min-width: 0;
                    padding: 0;
                    position: relative;
                    &:hover {
                        &:after{
                            position: absolute;
                            left: 0;
                            top: 0;
                            content: "";
                            width: 3pt;
                            height: 31pt;
                            background-color: #409EFF;
                        }
                    }
                }
            }
            .layout {
                position: absolute;
                left: 9pt;
                bottom: 21pt;
                width: 94pt;
                text-align: center;
            }
        }
        // .el-submenu__title:hover{
        //     background-color: #122043!important;
        // }
    }
    .elMain {
        background-color: white;
        margin: 7pt 108pt 5pt 6pt;
    }
    .right {
        position: fixed;
        top: 7pt;
        right: 0;
        background-color: #F5F5F5;
        width: 96pt;
        .helpTitle {
            width: 94pt;
            height: 24pt;
            background-color: #ECECEC;
            p{
                font-size: 9pt;
                line-height: 24pt;
                font-weight: bold;
                text-align: center;
            }
        }
        .helpText {
            height: 56pt;
            background-color: white;
            padding-top: 8pt;
            padding-left: 11pt;
            box-sizing: border-box;
            p {
                font-size: 6pt;
                font-weight: bold;
                margin-bottom: 6pt;
            }
        }
    }
}

</style>