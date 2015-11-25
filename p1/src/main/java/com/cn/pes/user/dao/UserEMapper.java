package com.cn.pes.user.dao;

import com.cn.pes.user.entity.UserE;
import com.cn.pes.user.entity.UserEExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface UserEMapper {
    int countByExample(UserEExample example);

    int deleteByExample(UserEExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(UserE record);

    int insertSelective(UserE record);

    List<UserE> selectByExample(UserEExample example);

    UserE selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") UserE record, @Param("example") UserEExample example);

    int updateByExample(@Param("record") UserE record, @Param("example") UserEExample example);

    int updateByPrimaryKeySelective(UserE record);

    int updateByPrimaryKey(UserE record);
}