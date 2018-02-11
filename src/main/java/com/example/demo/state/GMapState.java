package com.example.demo.state;

/**
 * 高德地图
 * Created by Administrator on 2017-09-21.
 */
public class GMapState {
    //高德Key
    public static String aKey = "65aa61936f59b81555bf8d2b86ff8a32";
    //高德地图URL
    public static String aBaseUri = "http://restapi.amap.com/v4";
    //创建围栏
    /**
     * post 创建，get 查询围栏
     */
    public static String cFence = "geofence/meta?key=%s";
    /**
     * 更新围栏
     */
    public static String uFence = "geofence/meta?key=%s&gid=%s";
}
