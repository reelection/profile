package com.jdp.profile.controller;

import com.jdp.profile.service.impl.ResumeDHMapper;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;

@Controller
public class ResumeDHController {

    @Resource(name="resumeDHMapper")
    ResumeDHMapper resumeDHMapper;

    @GetMapping( "/resumeEdit")
    public String resumeEditMain() {
        System.out.println("테스트!!22222");

        return "resume/resumeEditDH";
    }

}
