package com.jdp.profile.controller;

import com.jdp.profile.model.UserInfoDTO;
import com.jdp.profile.service.impl.ResumeDHMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

import javax.annotation.Resource;

@Controller
public class ResumeDHController {

    @Resource(name="resumeDHMapper")
    ResumeDHMapper resumeDHMapper;

    @GetMapping( "/resumeEdit")
    public String resumeEditMain() {
       // System.out.println("테스트!!22222");

        return "resume/resumeEditDH";
    }

    @PostMapping( "/userInfoSave")
    public void userInfoSave(UserInfoDTO userInfo) {
       // System.out.println("테스트!!22222");
       System.out.println(userInfo.getUserName());
       System.out.println(userInfo.getUserBorn());
       System.out.println(userInfo.getUserEmail());
       System.out.println(userInfo.getUserGender());
       System.out.println(userInfo.getUserJibunAddr());
       System.out.println(userInfo.getUserHomePhone());
       System.out.println(userInfo.getUserZipcode());
       System.out.println(userInfo.getUserPhone());
       //System.out.println(Arrays.toString(userInfo.getTest()));
       //return "resume/resumeEditDH";
    }

}
