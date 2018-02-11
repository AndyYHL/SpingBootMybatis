package com.example.demo.state;

import com.google.common.collect.Lists;

import java.util.List;

/**
 * Created by Administrator on 2017-09-08.
 */
public class DeviceState {

    public static final String DEVICE_ID ="id";       //设备ID
    public static final String DEVICE_RFID ="rfid";   //设备类型-RFID阅读器
    public static final String DEVICE_DZY = "dzy";    //设备类型-电子眼
    public static final String DEVICE_TW = "tw";      //设备类型-天网
    public static final String DEVICE_TYPE = "type";  //设备类型
    public static final List<String> DEVICE_TYPE_GROUP = Lists.newArrayList("rfid","dzy","tw"); //设备类型组


}
