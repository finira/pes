package com.cn.pes.user.service;

import com.cn.pes.user.entity.User;

import java.util.List;

/**
 * Created by NGi58 on 2015/9/20.
 */
public interface IUserService {
    public User getUserById(int userId);

    public List selectList(User record);
}
