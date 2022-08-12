package com.jdp.profile.controller;

import com.jdp.profile.service.SampleService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;

@Controller
public class ProfileController {

    @Resource(name="sampleService")
    SampleService sampleService;

    @GetMapping("/")
    public String main() {
        return "index";
    }

    @GetMapping("/getSample")
    public String sample(ModelMap model) {
        ArrayList<HashMap<String, Object>> sampleDataList = new ArrayList<HashMap<String, Object>>();
        sampleDataList = sampleService.getSampleDataList();
        System.out.println("size : " + sampleDataList.size());

        model.addAttribute("sampleDataList", sampleDataList);

        return "sample/sample";
    }
}
