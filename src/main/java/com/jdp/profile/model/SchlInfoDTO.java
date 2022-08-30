package com.jdp.profile.model;

import lombok.Data;

@Data
public class  SchlInfoDTO{
    private String[] schlType; //학교구분
    private String[] schlName; //학교명
    private String[] entcYM; // 입학년도
    private String[] gradYear; //졸업년도
    private String[] schlGradType; //졸업상태
    private String[] gedStat; // 대입검정고시 여부
    private String[] trnfstat; //편입여부
    private String[] majorName; //전공명
    private String[] schlGrade; // 학점
    private String[] schlGradePrftScr; // 학점 총점
    private String[] schlMstrDctr; // 학위
}
