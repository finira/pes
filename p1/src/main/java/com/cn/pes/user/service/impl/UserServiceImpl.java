package com.cn.pes.user.service.impl;

import javax.annotation.Resource;

import com.cn.pes.user.dao.UserMapper;
import com.cn.pes.user.entity.User;
import com.cn.pes.user.service.IUserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by NGi58 on 2015/9/20.
 */
@Service("userService")
@Transactional
public class UserServiceImpl implements IUserService{

    @Resource
    private UserMapper userMapper;

    @Override
    public User getUserById(int userId) {
        return this.userMapper.selectByPrimaryKey(userId);
    }

    @Override
    public List selectList(User record) {
        return this.userMapper.selectList(record);
    }

}
