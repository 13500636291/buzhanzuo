<template>
    <div class="overview">
        <div class="top">
            <div class="numTotal">
                <p>50</p>
                <p>学校总数</p>
                <i class="el-icon-document school"></i>
            </div>
            <div class="numTotal">
                <p>50</p>
                <p>学校总数</p>
                <i class="el-icon-document seat"></i>
            </div>
            <div class="numTotal">
                <p>50</p>
                <p>学校总数</p>
                <i class="el-icon-document account"></i>
            </div>
        </div>
        <div id="dataImg">
            <div style="width:100%;" class="page-line-chart">
                <h4>趋势图</h4>
                <ve-line :data="chartData" :settings="chartSettings" :height="height"></ve-line>
            </div>
        </div>
        <div class="dataList">
            <h3>数据列表</h3>
            <table>
                <tr>
                    <th>#</th>
                    <th>学校名称</th>
                    <th>座位使用数</th>
                    <th>使用人数</th>
                    <th>使用率</th>
                </tr>
                <tr>
                    <td>01</td>
                    <td>北京大学</td>
                    <td>112</td>
                    <td>123</td>
                    <td>23%</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>中国政法大学</td>
                    <td>112</td>
                    <td>123</td>
                    <td>23%</td>
                </tr>
                
            </table>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            height:'190pt',
            chartData: {
                columns: ["日期", "访问用户", "下单用户", "下单率"],
                rows: [
                { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
                { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
                { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
                { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
                { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
                { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
                ]
            },
            chartSettings: {
                metrics:['访问用户','下单用户'],
                dimension: ['日期']
            }
        }
    },
    mounted(){
     
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
.overview {
    width: 100%;
    height: 100%;
    .top {
        width: 100%;
        height: 51pt;
        font-size: 9pt;
        font-weight: bold;
        .numTotal {
            width: 148pt;
            padding: 16pt 12pt; 
            border-radius:3pt;
            -webkit-box-sizing: border-box;
            background-color: white;
            position: relative;
            float: left;
            margin-right: 7pt;
            &:last-of-type {
                margin: 0;
            }
            i {
                position: absolute;
                top: 18pt;
                right: 16pt;
                font-size: 16pt;
            }
            .school {
                color: #FF2161;
            }
            .seat {
                color: #5C2089;
            }
            .account {
                color: #00ABDE;
            }
        }
    }
    #dataImg {
        width: 458pt;
        height: 214pt;
        margin-top: 6pt;
        background-color: white;
    }
    .dataList {
        width: 458pt;
        height: 102pt;
        margin-top: 6pt;
        padding-left: 12pt;
        padding-top: 10pt;
        box-sizing: border-box;
        background-color: white;
        h3 {
            font-size: 8pt;
            font-weight: bold;
        }
        table {
            width: 100%;
            text-align: center;
            margin-top: 10pt;
            font-size: 6pt;
            tr {
                height: 20pt;
                th{
                    font-size: 6pt;
                    font-weight: bold;
                    margin-bottom: 5pt;
                }
                td{
                    border-bottom: 1pt solid #ccc;
            vertical-align: bottom;

                }
            }
        }
    }
}
</style>


