package com.jdp.profile.service.impl;

import com.jdp.profile.model.EduDTO;
import com.jdp.profile.model.MbrDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Mapper
@Repository
public interface ResumeJSMapper {
    int mergeResume(EduDTO eduDTO) throws Exception;

    ArrayList<EduDTO> getEduList(MbrDTO mbrDTO);
}
