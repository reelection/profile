package com.jdp.profile.service.impl;

import com.jdp.profile.model.EduDTO;
import com.jdp.profile.model.MbrDTO;
import com.jdp.profile.model.ReturnDTO;
import com.jdp.profile.service.ResumeJSService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;

@Service("resumeJSService")
public class ResumeJSServiceImpl implements ResumeJSService {

    @Resource(name="resumeJSMapper")
    ResumeJSMapper resumeJSMapper;

    @Override
    public ReturnDTO mergeResume(EduDTO eduDTO) throws Exception {
        ReturnDTO returnDTO = new ReturnDTO();
        eduDTO.setEduStDd(eduDTO.getEduStDd().replaceAll("-", ""));
        eduDTO.setEduEndDd(eduDTO.getEduEndDd().replaceAll("-", ""));
        int nResult = resumeJSMapper.mergeResume(eduDTO);
        if(nResult > 0) {
            returnDTO.setErrorChk("N");
            returnDTO.setSuccessTitle("Success");
            returnDTO.setSuccessMsg("성공적으로 처리 되었습니다.");
        } else {
            returnDTO.setErrorChk("Y");
            returnDTO.setErrorTitle("Error");
            returnDTO.setErrorMsg("저장 중 오류가 발생했습니다.");
        }
        return returnDTO;
    }

    @Override
    public ArrayList<EduDTO> getEduList(MbrDTO mbrDTO) {
        return resumeJSMapper.getEduList(mbrDTO);
    }

}
