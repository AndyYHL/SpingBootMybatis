package com.example.demo.service.impl;

import com.example.demo.dao.UserDao;
import com.example.demo.service.UserService;

import com.example.demo.util.json.JsonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * Created by Administrator on 2018/2/9.
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Override
    public JsonUtil getUserById(Map map, JsonUtil jsonUtil) {
        Map params = userDao.getUserById(map);
        jsonUtil.setData(params);
        return jsonUtil;
    }
}
