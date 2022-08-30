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
          document.getElementById("userZipcode").value = zipNo;
          document.getElementById("userAddAddr").value = roadAddrPart1 + " " + addrDetail;
          document.getElementById("userJibunAddr").value = jibunAddr;
          document.getElementById("temp_M_Addr_Text").value = siNm + " " + sggNm + " " + emdNm;
        }

        //셀렉트 박스에서 값 선택 하면 값 넣어 줌
        document.addEventListener('change',function(e){
          if(e.target && e.target.id=== 'sexSelect'){
            let sexVelue = e.path[0].value;
            document.getElementById("userGender").value = sexVelue;
          }else if(e.target && e.target.classList[0]=== 'schoolTypeSelect'){
            let value = e.path[0].value;
            //document.getElementById("schoolType").value = velue;
            e.target.nextElementSibling.value = value;
          }else if(e.target && e.target.classList[0]=== 'gradTypeCodeSelect'){
            let value = e.path[0].value;
            //document.getElementById("gradTypeCode").value = velue;
            e.target.nextElementSibling.value = value;
          }else if(e.target && e.target.classList[0]=== 'majorAftnCodeSelect'){
            let value = e.path[0].value;
            //document.getElementById("majorAftnCode").value = velue;
            e.target.nextElementSibling.value = value;
          }else if(e.target && e.target.classList[0]=== 'uniSchoolGradePrftScrSelect'){
            let value = e.path[0].value;
            //document.getElementById("uniSchoolGradePrftScr").value = velue;
            e.target.nextElementSibling.value = value;
          }else if(e.target && e.target.classList[0]=== 'uniSchoolMstrDctrTypeSelect'){
            let value = e.path[0].value;
            //document.getElementById("uniSchoolGradePrftScr").value = velue;
            e.target.nextElementSibling.value = value;
          }else if(e.target && e.target.classList[0]=== 'socialActTypeCodeSelect'){
            let value = e.path[0].value;
            //document.getElementById("uniSchoolGradePrftScr").value = velue;
            e.target.nextElementSibling.value = value;
          }
        });
      </script>
  </head>
  <body>
    <div class="resumeWrapper">
      <div class="resumeContainer">
        <form class="container" action="/userInfoSave" method="post">
          <div class="formWrap formWrapProfile">
            <h2 class="header">인적사항<div class="description"><span class="star">*</span> 필수 입력 정보입니다.</div></h2>
            <div class="form formProfile">
                <div class="row">
                        <div class="input is-label input-profile-name is-value">
                            <label for="userName">이름<span class="star">*</span> : </label>
                            <input type="text" name="userName" id="userName" value="">
                        </div>
                        <div class="input is-label input-profile-birth is-value">
                            <label for="userBorn">생년월일<span class="star">*</span> : </label>
                            <input data-format-type="birth" data-max-date="2007.08.09" data-val="true" data-val-date="생년월일 필드는 날짜여야 합니다." id="userBorn" name="userBorn" placeholder="1991.03.01" type="text" value="">
                        </div>
                <div class="dropdown dropdown-profile-sex is-label selected">
                <div class="label " aria-hidden="true" style="display: inline-block;">성별 <span class="star">*</span> : </div>       
                <div class="list hidden sexDiv" aria-hidden="true">
                  <select id="sexSelect">
                    <option value="1">남자</option>
                    <option value="2">여자</option>
                  </select>
                </div>
                <input id="userGender" name="userGender" type="hidden" value="1">
            </div>
                    <div class="input input-profile-email is-label is-value">
                        <label for="userEmail">이메일 : </label>
                        <input type="email" name="userEmail" id="userEmail" data-format-type="email" value="kdh6335@naver.com" autocomplete="off" spellcheck="false">
                            <div class="list"><ul></ul></div>
                        </div>
                        <div class="validation hidden" aria-hidden="true"></div>
                        <div class="backdrop">
                            <div class="highlights"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input is-label input-profile-tel">
                            <label for="userHomePhone">전화번호 : </label>
                            <input type="text" name="userHomePhone" id="userHomePhone" placeholder="02-1234-1234" maxlength="30" autocomplete="off" data-format-type="tel">
                        </div>
                        <div class="input is-label input-profile-hp is-value">
                            <label for="userPhone">휴대폰번호<span class="star">*</span> : </label>
                            <input type="text" name="userPhone" id="userPhone" placeholder="010-1234-1234" value="" maxlength="30" autocomplete="off" data-format-type="hp">
                        </div>
                        <input id="userZipcode" name="userZipcode" type="hidden" value=""/>
                        <input id="userAddAddr" name="userAddAddr" type="hidden" value=""/>
                        <input id="userJibunAddr" name="userJibunAddr" type="hidden" value=""/>
                        <label for="temp_M_Addr_Text">주소 : </label>
                        <input type="text" id="temp_M_Addr_Text" readonly="" value=""/>
                        <input type="button" class="icon icon-search"  aria-hidden="true" onclick="goPopup();" value="검색"/>
                    </div>
                    <div class="picture dropped" style="display: inline-block;">
                            <div class="0." style="display: none;">사진추가</div>
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
          <div class="formWrap formWrapEducation" id="formEducation">
            <h2 class="header">학력</h2>
            <div class="form formEducation">
              <div id="school_containers">
                <div class="container container1">
                  <div class="row">
                    <div class="dropdown dropdown-education-category selected is-label">
                        <div class="label" aria-hidden="false">학교구분 : </div>
                        <select class="schoolTypeSelect"> 
                          <option value="0"><span>고등학교</span></button>
                          <option value="1"><span>대학(2,3년)</span></button>
                          <option value="2"><span>대학교(4년)</span></button>
                          <option value="3"><span>대학원</span></button>
                        </select>
                        <input type="hidden" class="schlType" name="schlType" value="0">
                    </div>
                    <div class="schoolTypeContainer">
                      <div class="input input-education-name search is-label is-ellipsis is-value" id="highSchoolAutocomplete_c1">
                          <label for="SchlNameSearch">학교명 <span class="star">*</span> : </label>
                          <input type="text" class="schlName" name="schlName" data-type="SchlNameSearch" value="" autocomplete="off" maxlength="50">
                          <input type="hidden" name="schoolCode" class="schoolCode" data-type="School_Code" value="">
                          <input type="hidden" name="areaCode" class="areaCode" data-type="GG_Area_Code" value="">
                      </div>
                      <div class="input input-education-enddate is-label is-value">
                          <label for="gradYear">졸업년도 <span class="star">*</span> : </label>
                          <input type="text" name="gradYear" class="gradYear" placeholder="2016" data-format-type="year" value="2010" autocomplete="off">
                          <div class="validation hidden" aria-hidden="true"></div>
                      </div>
                      <div class="dropdown dropdown-edcation-state is-label selected">
                          <div class="label" aria-hidden="false">졸업상태 : </div>
                          <select class="gradTypeCodeSelect">
                            <option value="10">졸업</option>
                            <option value="5">졸업예정</option>
                            <option value="4">재학중</option>
                          </select>
                          <input type="hidden" name="schlGradType" class="schlGradType" value="10">
                      </div>
                      <div class="dropdown dropdown-edcation-highschool-category is-label selected">
                          <div class="label" aria-hidden="false">전공계열 : </div>
                          <select class="majorAftnCodeSelect">
                            <option value="문과">문과</option>
                            <option value="이과">이과</option>
                            <option value="전문(실업)">전문(실업)</option>
                            <option value="예체능">예체능</option>
                          </select>
                          <input type="hidden" name="majorName" class="majorName" value="문과">
                      </div>
                      <div class="checkbox checkbox-education-ged devGedCheck" style="display: inline-block;">
                          <input type="checkbox" class="gedStat" name='gedStat' value="1">
                          <label for="gedStat">대입검정고시</label>
                          <input type="hidden" name="schlGradePrftScr" class="schlGradePrftScr" value="0">
                          <input type="hidden" name="schlGrade" class="schlGrade" value="0">
                          <input type="hidden" name="schlMstrDctr" class="schlMstrDctr" value="0">
                          <input type="hidden" name="entcYM" class="entcYM" value="0" placeholder="2012.03">
                      </div>
                    </div>
                    <button type="button" class="button buttonDeleteField"><span>삭제</span></button>
                  </div><br>
                </div>
              </div>
              <button type="button" class="button buttonAddField" id="school_addbutton"><span>추가</span></button>
            </div>
          </div>
          <div class="formWrap formWrapIntern" id="formIntern" >
            <h2 class="header">인턴·대외활동</h2>
            <div class="form formIntern">
              <div id="social_containers">
                <div class="container container1">
                  <input type="hidden" name="Social.Index" value="1_1660888587289">
                  <input type="hidden" name="Social[1_1660888587289].Index_Name" value="1_1660888587289">
                  <div class="row">
                      <div class="dropdown dropdown-intern-category is-label">
                          <div class="label hidden" aria-hidden="true">활동구분<span class="star">*</span> : </div>
                          <select class="socialActTypeCodeSelect">
                            <option value="1">인턴</option>
                            <option value="2">아르바이트</option>
                            <option value="3">동아리</option>
                            <option value="4">자원봉사</option>
                            <option value="5">사회활동</option>
                            <option value="6">교내활동</option>
                          </select>
                          <input type="hidden" name="socialActTypeCode" class="socialActTypeCode" value="">
                      </div>
                      <div class="input input-intern-name is-label">
                          <label for="SocialInstName">회사/기관/단체명 <span class="star">*</span> : </label>
                          <input type="text" name="SocialInstName" class="SocialInstName" value="" maxlength="50">
                          <div class="validation hidden" aria-hidden="true"></div>
                      </div>
                      <div class="input input-intern-startdate is-label">
                          <label for="SocialActStartYM">시작년월 :</label>
                          <input type="text" name="SocialActStartYM" id="SocialActStartYM" value="" data-format-type="month" placeholder="2016.03">
                          <div class="validation hidden" aria-hidden="true"></div>
                      </div>
                      <div class="input input-intern-enddate is-label">
                          <label for="SocialActEndYM">종료년월 : </label>
                          <input type="text" name="SocialActEndYM" class="SocialActEndYM" value="" data-format-type="month" placeholder="2016.06">
                          <div class="validation hidden" aria-hidden="true"></div>
                      </div>
                  </div>
                  <div class="row" style="height: 85px;">
                      <div class="textarea is-label">
                          <label for="SocialActCntnt">활동내용</label>
                          <textarea name="SocialActCntnt" cols="30" rows="10" class="SocialActCntnt" placeholder="직무와 관련된 경험에 대해 (상황 - 노력 - 결과)순으로 작성하는것이 좋습니다."></textarea>
                      </div>
                  </div>
                  <button type="button" class="button fieldDel"><span>인턴·대외활동 삭제</span></button>
                </div>
              </div>
              <button type="button" class="button buttonAddField" id="SocialActAdd"><span>인턴·대외활동 추가</span></button>
            </div>
          </div>

          <div class="formWrap formWrapCertificate" id="formLicense">
            <div class="header devNaverElement">
                <h2 class="header">자격증</h2>
            </div>
            <div class="form formCertificate">
                <div id="license_containers">
                <div class="container container1" data-cid="c14">
                    <div class="row licenseRow">
                        <div class="input input-certificate-name is-label  is-value" data-comp_type="jkAc">
                            <input type="hidden" name="License[c14].Lc_Code" data-type="Lc_Code" value="">
                            <label for="licenseName">자격증 명 <span class="star">*</span> : </label>
                            <input type="text" class="licenseName" name="licenseName" value="" maxlength="50">
                        </div>
                        <div class="input input-certificate-agency is-label  is-value">
                            <label for="licenseLcPub">발행처 : </label>
                            <input type="text" name="licenseLcPub" class="licenseLcPub" value="" data-type="Lc_Pub" maxlength="50">
                            <div class="validation hidden" aria-hidden="true"></div>
                        </div>
                        <div class="input input-certificate-term is-label  is-value">
                            <label for="licenseLcYYMM">취득월 : </label>
                            <input type="text" name="licenseLcYYMM" class="licenseLcYYMM" value="" data-format-type="month" placeholder="2017.10">
                        </div>
                    </div>
                    <button type="button" class="button fieldDel"><span>자격증 삭제</span></button>
                </div>
            </div>
                <button type="button" class="button buttonAddField" id="licenseActAdd"><span>자격증 추가</span></button>
            </div>
        </div>
        </form>
      </div>
    </div>
  </body>
</html>
