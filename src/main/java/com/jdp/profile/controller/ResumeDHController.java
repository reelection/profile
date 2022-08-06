package com.jdp.profile.controller;

import com.jdp.profile.service.impl.ResumeDHMapper;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;

@Controller
public class ResumeDHController {

    @Resource(name="resumeDHMapper")
    ResumeDHMapper resumeDHMapper;



}
