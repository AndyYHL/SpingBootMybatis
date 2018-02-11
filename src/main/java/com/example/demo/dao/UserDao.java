package com.example.demo.dao;

import org.springframework.stereotype.Repository;
import java.util.Map;

/**
 * Created by Administrator on 2018/2/9.
 */
// @Mapper 这里可以使用@Mapper注解，但是每个mapper都加注解比较麻烦，所以统一配置@MapperScan在扫描路径在application类中
@Repository
public interface UserDao {
    Map getUserById(Map map);
}
