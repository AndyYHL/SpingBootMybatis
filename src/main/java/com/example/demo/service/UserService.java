package com.example.demo.service;
import com.example.demo.entity.User;
import com.example.demo.util.json.JsonUtil;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2018/2/9.
 */
public interface UserService {
    JsonUtil getUserById(Map map, JsonUtil jsonUtil);
}
