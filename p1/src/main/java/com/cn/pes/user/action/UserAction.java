package com.cn.pes.user.action;

import com.cn.pes.user.entity.User;
import com.cn.pes.user.service.IUserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * Created by NGi58 on 2015/9/20.
 */
@Controller
@RequestMapping("/user")
public class UserAction {
    @Resource
    private IUserService userService;

    @RequestMapping("/showUser")
    public String toIndex(HttpServletRequest request,Model model){
//        int userId = Integer.parseInt(request.getParameter("id"));
        int userId = 1;
        User user = this.userService.getUserById(userId);
        model.addAttribute("user", user);
        return "showUser";
    }
}
