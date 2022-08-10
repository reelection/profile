<%--
  Created by IntelliJ IDEA.
  User: dhkim
  Date: 2022-08-06
  Time: 오후 2:02
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>이력서</title>
    <link rel="stylesheet" type="text/css" href="/css/resume_editDh.css">
    <script src="/js/jquery/jquery-3.6.0.js"></script>
    <script src="/js/schoolAction.js"></script>
    <script language="javascript">

      function goPopup(){
          var pop = window.open("/popup/jusoPopup.jsp","pop","width=570,height=420, scrollbars=yes, resizable=yes"); 
      }
      /** API 서비스 제공항목 확대 (2017.02) **/
      function jusoCallBack(roadFullAddr,roadAddrPart1,addrDetail,roadAddrPart2,engAddr, jibunAddr, zipNo, admCd, rnMgtSn, bdMgtSn
                  , detBdNmList, bdNm, bdKdcd, siNm, sggNm, emdNm, liNm, rn, udrtYn, buldMnnm, buldSlno, mtYn, lnbrMnnm, lnbrSlno, emdNo){
        // 팝업페이지에서 주소입력한 정보를 받아서, 현 페이지에 정보를 등록합니다.
        document.getElementById("UserInfo_M_Zipcode").value = zipNo;
        document.getElementById("UserInfo_M_AddAddr").value = roadAddrPart1 + " " + addrDetail;
        document.getElementById("UserInfo_M_JibunAddr").value = jibunAddr;
        document.getElementById("temp_M_Addr_Text").value = siNm + " " + sggNm + " " + emdNm;
      }
    </script>
</head>
<body>
  <div class="resumeWrapper">
    <div class="resumeContainer">
      <div class="formWrap formWrapProfile">
        <h2 class="header">인적사항<div class="description"><span class="star">*</span> 필수 입력 정보입니다.</div></h2>
        <div class="form formProfile">
            <div class="row">
                    <div class="input is-label input-profile-name is-value">
                        <label for="UserInfo_M_Name">이름<span class="star">*</span> : </label>
                        <input type="text" name="UserInfo.M_Name" id="UserInfo_M_Name" value="">
                    </div>
                    <div class="input is-label input-profile-birth is-value">
                        <label for="UserInfo_M_Born">생년월일<span class="star">*</span> : </label>
                        <input data-format-type="birth" data-max-date="2007.08.09" data-val="true" data-val-date="생년월일 필드는 날짜여야 합니다." id="UserInfo_M_Born" name="UserInfo.M_Born" placeholder="1991.03.01" type="text" value="">
                    </div>
            <div class="dropdown dropdown-profile-sex is-label selected">
            <div class="label " aria-hidden="true" style="display: inline-block;">성별 <span class="star">*</span> : </div>       
            <div class="list hidden sexDiv" aria-hidden="true">
              <select id="sexSelect" >
                <option value="1">남자</option>
                <option value="2">여자</option>
              </select>
            </div>
            <input id="UserInfo_M_Gender" name="UserInfo.M_Gender" type="hidden" value="False">
        </div>
                <div class="input input-profile-email is-label is-value">
                    <label for="UserInfo_M_Email">이메일 : </label>
                    <input type="email" name="UserInfo.M_Email" id="UserInfo_M_Email" data-format-type="email" value="kdh6335@naver.com" autocomplete="off" spellcheck="false">
                        <div class="list"><ul></ul></div>
                    </div>
                    <div class="validation hidden" aria-hidden="true"></div>
                    <div class="backdrop">
                        <div class="highlights"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="input is-label input-profile-tel">
                    <label for="UserInfo_M_Home_Phone">전화번호 : </label>
                    <input type="text" name="UserInfo.M_Home_Phone" id="UserInfo_M_Home_Phone" placeholder="02-1234-1234" maxlength="30" autocomplete="off" data-format-type="tel">
                </div>
                <div class="input is-label input-profile-hp is-value">
                    <label for="UserInfo_M_Hand_Phone">휴대폰번호<span class="star">*</span> : </label>
                    <input type="text" name="UserInfo.M_Hand_Phone" id="UserInfo_M_Hand_Phone" placeholder="010-1234-1234" value="" maxlength="30" autocomplete="off" data-format-type="hp">
                </div>
                <input id="UserInfo_M_Zipcode" name="UserInfo.M_Zipcode" type="hidden" value=""/>
                <input id="UserInfo_M_AddAddr" name="UserInfo.M_AddAddr" type="hidden" value=""/>
                <input id="UserInfo_M_JibunAddr" name="UserInfo.M_JibunAddr" type="hidden" value=""/>
                <label for="temp_M_Addr_Text">주소 : </label>
                <input type="text" id="temp_M_Addr_Text" readonly="" value=""/>
                <input type="button" class="icon icon-search"  aria-hidden="true" onclick="goPopup();" value="검색"/>
            </div>
            <div class="picture dropped" style="display: inline-block;">
                    <div class="guide" style="display: none;">사진추가</div>
                    <a href="javascript:;" class="buttonAddFile" style="display: none;">
                        사진등록
                    </a>
                    <div class="image" aria-hidden="true">
                        <img src="https://imgs.jobkorea.co.kr/img1/user_photo/photo/2014\9\15\2614v007Pp_0V3m2a3425p0dvMzV3_9zvp.jpg">
                    </div>
                    <button type="button" class="button buttonChangePicture" aria-hidden="false"><span>사진변경</span></button>
                    <button type="button" class="button buttonDelete" aria-hidden="false">삭제</button>
    
            </div>
        </div>
        <div class="formWrap formWrapEducation" id="formEducation">
          <h2 class="header">학력</h2>
          <div class="form formEducation">
            <div id="school_containers">
              <div class="container container1">
                <div class="row">
                  <div class="dropdown dropdown-education-category selected is-label">
                      <div class="label" aria-hidden="false">학교구분 : </div>
                      <select class="schoolType"> 
                        <option value="0"><span>고등학교</span></button>
                        <option value="1"><span>대학(2,3년)</span></button>
                        <option value="2"><span>대학교(4년)</span></button>
                        <option value="3"><span>대학원</span></button>
                      </select>
                  </div>
                  <div class="schoolTypeContainer">
                    <div class="input input-education-name search is-label is-ellipsis is-value" id="highSchoolAutocomplete_c1">
                        <label for="HighSchool_Schl_Name_Search">학교명 <span class="star">*</span> : </label>
                        <input type="text" id="HighSchool_Schl_Name_Search" data-type="School_Name" value="" autocomplete="off" maxlength="50">
                        <input type="hidden" name="HighSchool.Schl_Name" data-type="School_Name" value="">
                        <input type="hidden" name="HighSchool.School_Code" data-type="School_Code" value="">
                        <input type="hidden" name="HighSchool.Area_Code" data-type="GG_Area_Code" value="">
                    </div>
                    <div class="input input-education-enddate is-label is-value">
                        <label for="HighSchool_Grad_Year">졸업년도 <span class="star">*</span> : </label>
                        <input type="text" name="HighSchool.Grad_Year" id="HighSchool_Grad_Year" placeholder="2016" data-format-type="year" value="2010" autocomplete="off">
                        <div class="validation hidden" aria-hidden="true"></div>
                    </div>
                    <div class="dropdown dropdown-edcation-state is-label selected">
                        <div class="label" aria-hidden="false">졸업상태 : </div>
                        <select id="HighSchool_Grad_Type_Code_Select">
                          <option value="10">졸업</option>
                          <option value="5">졸업예정</option>
                          <option value="4">재학중</option>
                        </select>
                        <input type="hidden" name="HighSchool.Grad_Type_Code" id="HighSchool_Grad_Type_Code" value="10">
                    </div>
                    
                    <div class="dropdown dropdown-edcation-highschool-category is-label selected">
                        <div class="label" aria-hidden="false">전공계열 : </div>
                        <select id="HighSchool_Major_Aftn_Code_Select">
                          <option value="1">문과</option>
                          <option value="2">이과</option>
                          <option value="3">전문(실업)</option>
                          <option value="4">예체능</option>
                        </select>
                        <input type="hidden" name="HighSchool.Major_Aftn_Code" id="HighSchool_Major_Aftn_Code" value="2">
                    </div>
                    
                    
                    <div class="checkbox checkbox-education-ged devGedCheck" style="display: inline-block;">
                        
                        <input type="checkbox" id="Ged_Stat" data-checked-value="1" data-non-checked-value="0">
                        
                        <label for="Ged_Stat">대입검정고시</label>
                        <input type="hidden" name="HighSchool.Ged_Stat" value="0">
                    </div>
                </div>
                <button type="button" class="button buttonDeleteField"><span>삭제</span></button>
              </div><br>
              
          </div>
      
        
      </div>
              <button type="button" class="button buttonAddField" id="school_addbutton"><span>추가</span></button>
      
           
      
      
          </div>
      </div>
      </div>
    </div>
  </div>
  
</body>
</html>
