package com.jdp.profile.service.impl;

import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("ResumeDHService")
public class ResumeDHServiceImpl {

    @Resource(name="resumeDHMapper")
    ResumeDHMapper resumeDHMapper;


}
