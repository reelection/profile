package com.jdp.profile.service.impl;

import com.jdp.profile.service.SampleService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;

@Service("sampleService")
public class SampleServiceImpl implements SampleService {

    @Resource(name="sampleMapper")
    SampleMapper sampleMapper;

    @Override
    public ArrayList<HashMap<String, Object>> getSampleDataList() {
        return sampleMapper.getSampleDataList();
    }
}
