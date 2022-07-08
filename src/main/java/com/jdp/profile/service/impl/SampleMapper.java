package com.jdp.profile.service.impl;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;

@Mapper
@Repository
public interface SampleMapper {
    ArrayList<HashMap<String, Object>> getSampleDataList();
}