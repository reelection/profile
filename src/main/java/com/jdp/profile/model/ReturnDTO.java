package com.jdp.profile.model;

import lombok.Data;

@Data
public class ReturnDTO {
    private String ErrorChk;
    private String successTitle;
    private String successMsg;
    private String errorTitle;
    private String errorMsg;
}
