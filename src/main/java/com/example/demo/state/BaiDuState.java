package com.example.demo.state;

/**
 * Created by Administrator on 2017-09-08.
 */
public class BaiDuState {

    public static String serivceID ="150086";

    //百度鹰眼总URL
    public static String bBaseUrl = "http://yingyan.baidu.com/api/v3/";
    ///终端管理
    //创建entity，并赋属性信息
    public static String eadd = "entity/add";
    //删除entity
    public static String edel = "entity/delete";
    //更新entity属性信息
    public static String eupt = "entity/update";
    //检索符合条件的entity，返回entity属性信息和最新位置。可用于列出entity，也可用于批量查询多个entitiy的位置
    public static String elist = "entity/list";
    //根据关键字搜索entity
    public static String esearch = "entity/search";
    //根据矩形范围搜索entity
    public static String eboundsearch = "entity/boundsearch";
    //周边搜索，根据圆心和半径搜索 entity
    public static String earoundsearch = "entity/aroundsearch";
    //行政区搜索，根据行政区名称搜索行政区内的entity，支持中国范围内的国家、省、市、区/县
    public static String edistrictsearch = "entity/districtsearch";

    ///轨迹上传
    //上传单个轨迹点
    public static String addpoint = "track/addpoint";
    //批量上传多个 entity 的多个轨迹点
    public static String addpoints = "track/addpoints";
    ///轨迹纠偏和里程
    //查询某 entity 的实时位置，支持纠偏
    public static String getlatestpoint = "track/getlatestpoint";
    //查询某 entity 一段时间内的轨迹里程，支持纠偏和里程补偿
    public static String getdistance = "track/getdistance";
    //查询某 entity 一段时间内的轨迹点以及相关信息，支持纠偏和里程补偿
    public static String gettrack = "track/gettrack";

    //轨迹分析
    //停留点分析
    public static String staypoint = "analysis/staypoint";
    //驾驶行为分析
    public static String drivingbehavior = "analysis/drivingbehavior";

    ///地理围栏管理
    //百度总接口
    public static String baduV3= "http://yingyan.baidu.com/api/v3";
    //百度电子围栏管理 fence 模块
    //创建圆形围栏
    public static String circl = "fence/createcirclefence";
    //创建多边形围栏
    public static String polygon = "fence/createpolygonfence";
    //创建线型围栏
    public static String polyline = "fence/createpolylinefence";
    //创建行政区划围栏
    public static String district = "fence/createdistrictfence";
    //更新圆形围栏
    public static String ucircle = "fence/updatecirclefence";
    //更新多边形围栏
    public static String upolygon = "fence/updatepolygonfence";
    //更新线型围栏
    public static String upolyline = "fence/updatepolylinefence";
    //更新行政区划围栏
    public static String udistrict = "fence/updatedistrictfence";
    //删除围栏
    public static String del= "fence/delete";
    //查询围栏信息
    public static String lists = "fence/list";

    ///地理围栏报警
    //查询监控对象在围栏内或外
    public static String querystatus = "querystatus";
    //查询某监控对象的历史报警信息
    public static String historyalarm = "historyalarm";
    //批量查询某 service 下时间段以内的所有报警信息，用于服务端报警同步
    public static String batchhistoryalarm = "batchhistoryalarm";

    //批量导出轨迹
    //创建一个任务，该任务完成后将返回文件下载地址，供开发者下载
    public static String createjob = "createjob";
    //删除任务
    public static String deletejob = "deletejob";
    //查询任务，将返回任务状态和文件下载地址
    public static String getjob = "getjob";

    public enum BaiDuCode{
        B_OK(0,"成功"),B_ERROE(1,"服务器内部错误,该服务响应超时或系统内部错误");
        private int bCode;
        private String bStr;

        public int getbCode() {
            return bCode;
        }

        public void setbCode(int bCode) {
            this.bCode = bCode;
        }

        public String getbStr() {
            return bStr;
        }

        public void setbStr(String bStr) {
            this.bStr = bStr;
        }

        BaiDuCode(int bCode,String bStr){
            this.bCode = bCode;
            this.bStr = bStr;
        }
    }

}
