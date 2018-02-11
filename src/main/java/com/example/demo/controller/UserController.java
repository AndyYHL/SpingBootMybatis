package com.example.demo.controller;

import com.alibaba.fastjson.JSON;
import com.example.demo.service.UserService;
import com.example.demo.util.json.JsonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * Created by Administrator on 2018/2/9.
 */
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    /**
     * 根据ID查询用户
     * @param
     * @return
     */
    @RequestMapping(value="/user/id",method = RequestMethod.POST,produces = {"application/json;charset=UTF-8"})
    public @ResponseBody
    JsonUtil getUserById(@RequestBody JsonUtil jsonUtil) throws Exception {
        Map<String,Object> map = JSON.parseObject(JSON.toJSONString(jsonUtil),Map.class);
        JsonUtil params = userService.getUserById(map,jsonUtil);
        return params;
    }
}
