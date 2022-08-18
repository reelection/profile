package com.jdp.profile.service;

import com.jdp.profile.model.EduDTO;
import com.jdp.profile.model.MbrDTO;
import com.jdp.profile.model.ReturnDTO;

import java.util.ArrayList;

public interface ResumeJSService {
    ReturnDTO mergeResume(EduDTO eduDTO) throws Exception;

    ArrayList<EduDTO> getEduList(MbrDTO mbrDTO);
}
