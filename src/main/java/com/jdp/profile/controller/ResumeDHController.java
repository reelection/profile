package com.jdp.profile.controller;

import com.jdp.profile.model.LicenseDTO;
import com.jdp.profile.model.SchlInfoDTO;
import com.jdp.profile.model.SchlInfoListDTO;
import com.jdp.profile.model.SocialDTO;
import com.jdp.profile.model.UserInfoDTO;
import com.jdp.profile.service.impl.ResumeDHMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
    public void userInfoSave(UserInfoDTO userInfo , SchlInfoDTO schlInfo, SocialDTO social, LicenseDTO license) {
       // System.out.println("테스트!!22222");
        System.out.println(userInfo.getUserName());
        System.out.println(userInfo.getUserBorn());
        System.out.println(userInfo.getUserEmail());
        System.out.println(userInfo.getUserGender());
        System.out.println(userInfo.getUserJibunAddr());
        System.out.println(userInfo.getUserHomePhone());
        System.out.println(userInfo.getUserZipcode());
        System.out.println(userInfo.getUserPhone());
       
        System.out.println("asdasddas = "+schlInfo.getSchlInfoList());
       
        for (int i = 0; i < schlInfo.getSchlInfoList().size(); i++) {
            System.out.println(schlInfo.getSchlInfoList().get(i).getEntcYM());
        }
    //    System.out.println("학교구분 : "+Arrays.toString(schlInfo.getSchlType()));
    //    System.out.println("학교명 : "+Arrays.toString(schlInfo.getSchlName()));
    //    System.out.println("입학년도 : "+Arrays.toString(schlInfo.getEntcYM()));
    //    System.out.println("졸업년도 : "+Arrays.toString(schlInfo.getGradYear()));
    //    System.out.println("졸업상태 : "+Arrays.toString(schlInfo.getSchlGradType()));
    //    System.out.println("대입검정고시 : "+Arrays.toString(schlInfo.getGedStat()));
    //    System.out.println("편입여부 : "+Arrays.toString(schlInfo.getTrnfstat()));
    //    System.out.println("전공명 : "+Arrays.toString(schlInfo.getMajorName()));
    //    System.out.println("학점 : "+Arrays.toString(schlInfo.getSchlGrade()));
    //    System.out.println("학점 총점 : "+Arrays.toString(schlInfo.getSchlGradePrftScr()));
    //    System.out.println("학위 : "+Arrays.toString(schlInfo.getSchlMstrDctr()));
       //return "resume/resumeEditDH";

        System.out.println("활동구분 : "+Arrays.toString(social.getSocialActType()));
        System.out.println("회사/기관명 : "+Arrays.toString(social.getSocialInstNm()));
        System.out.println("시작년월 : "+Arrays.toString(social.getSocialActSrtYM()));
        System.out.println("종료년월 : "+Arrays.toString(social.getSocialActEndYM()));
        System.out.println("활동내용 : "+Arrays.toString(social.getSocialActCntnt()));
    }

}
