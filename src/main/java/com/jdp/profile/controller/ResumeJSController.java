package com.jdp.profile.controller;

import com.jdp.profile.model.EduDTO;
import com.jdp.profile.model.MbrDTO;
import com.jdp.profile.model.ReturnDTO;
import com.jdp.profile.service.ResumeJSService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;

@Controller
public class ResumeJSController {

    @Resource(name="resumeJSService")
    ResumeJSService resumeJSService;

    @GetMapping("/resume")
    public String resume(ModelMap model, HttpServletRequest req, HttpServletResponse res, @RequestParam HashMap<String, Object> param) {
        String mbrNo = (String) param.get("mbrNo");

        return "resume/resume";
    }

    @GetMapping("/resumeForm")
    public String resumeEditJS(ModelMap model, MbrDTO mbrDTO) {
        ArrayList<EduDTO> eduList;
        eduList = resumeJSService.getEduList(mbrDTO);
        System.out.println("size : " + eduList.size());
        for (EduDTO eduDTO: eduList) {
            if(eduDTO == null) {
                System.out.println("eduDTO is null");
            } else {
                System.out.println("eduDTO is not null");
            }
            if(StringUtils.isEmpty(eduDTO.getEduNm())) {
                System.out.println("eduNo is null");
            } else {
                System.out.println("eduNo is not null");
            }
        }
        model.addAttribute("eduList", eduList);
        model.addAttribute("mbrNo", mbrDTO.getMbrNo());
        return "resume/resumeForm";
    }

    @RequestMapping("/resumeSave")
    public @ResponseBody ReturnDTO resumeSave(EduDTO eduDTO) throws Exception {

        ReturnDTO returnDTO;
        returnDTO = resumeJSService.mergeResume(eduDTO);

        return returnDTO;
    }

}
