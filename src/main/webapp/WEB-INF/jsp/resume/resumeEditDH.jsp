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
    <script language="javascript">

      function goPopup(){
        // 호출된 페이지(jusopopup.jsp)에서 실제 주소검색URL(https://www.juso.go.kr/addrlink/addrLinkUrl.do)를 호출하게 됩니다.
          var pop = window.open("/popup/jusoPopup.jsp","pop","width=570,height=420, scrollbars=yes, resizable=yes"); 
          
        // 모바일 웹인 경우, 호출된 페이지(jusopopup.jsp)에서 실제 주소검색URL(https://www.juso.go.kr/addrlink/addrMobileLinkUrl.do)를 호출하게 됩니다.
          //var pop = window.open("/popup/jusoPopup.jsp","pop","scrollbars=yes, resizable=yes"); 
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
                    <div class="autocomplete hidden" aria-hidden="true">
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
                    <div class="validation hidden" aria-hidden="true"></div>
                </div>
                <div class="input is-label input-profile-hp is-value">
                    <label for="UserInfo_M_Hand_Phone">휴대폰번호<span class="star">*</span> : </label>
                    <input type="text" name="UserInfo.M_Hand_Phone" id="UserInfo_M_Hand_Phone" placeholder="010-1234-1234" value="010-9964-8700" maxlength="30" autocomplete="off" data-format-type="hp">
                    <div class="validation hidden" aria-hidden="true"></div>
                </div>
                <input id="UserInfo_M_Zipcode" name="UserInfo.M_Zipcode" type="hidden" value=""/>
                <input id="UserInfo_M_AddAddr" name="UserInfo.M_AddAddr" type="hidden" value=""/>
                <input id="UserInfo_M_JibunAddr" name="UserInfo.M_JibunAddr" type="hidden" value=""/>
                <label for="temp_M_Addr_Text">주소 : </label>
                <input type="text" id="temp_M_Addr_Text" readonly="" value=""/>
                <input type="button" class="icon icon-search"  aria-hidden="true" onclick="goPopup();" value="검색"/>
            </div>
            
            
            <div class="picture dropped" style="">
                
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
      </div>
    </div>
  </div>
  
</body>
</html>
