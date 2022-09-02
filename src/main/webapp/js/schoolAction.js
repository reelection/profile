$(document).on("change",".schoolTypeSelect",function(){
    let attribute = $(this).parents("div")[2].getAttribute("class").split(" ");
    attribute = attribute[1];
    console.log(attribute);
    let reusult = $(this).val();
    let string = '';
    let value = '';
    let className = $(this).parents('.container')[0];
    className = className.classList[1];
    className = className.split('container')[1];
    value = Number(className);
    if(reusult==='0'){
        string = '<div class="input input-education-name search is-label is-ellipsis is-value" id="highSchoolAutocomplete_c1">'+
                 '       <label for="schlNm">학교명 <span class="star">*</span> : </label>'+
                 '       <input type="text" class="schlName" name="SchlInfoList['+(value-1)+'].schlName" value="" autocomplete="off" maxlength="50">'+
                 '       <input type="hidden" name="schoolCode" class="schoolCode" data-type="School_Code" value="">'+
                 '       <input type="hidden" name="areaCode" class="areaCode" data-type="GG_Area_Code" value="">'+
                 '   </div>'+
                 '   <div class="input input-education-enddate is-label is-value">'+
                 '       <label for="gradYear">졸업년도 <span class="star">*</span> : </label>'+
                 '       <input type="text" name="SchlInfoList['+(value-1)+'].gradYear" class="gradYear" placeholder="2016" data-format-type="year" value="2010" autocomplete="off">'+
                 '      <div class="validation hidden" aria-hidden="true"></div>'+
                 '   </div>'+
                 '   <div class="dropdown dropdown-edcation-state is-label selected">'+
                 '       <div class="label" aria-hidden="false">졸업상태 : </div>'+
                 '       <select class="gradTypeCodeSelect">'+
                 '         <option value="10">졸업</option>'+
                 '         <option value="5">졸업예정</option>'+
                 '         <option value="4">재학중</option>'+
                 '       </select>'+
                 '       <input type="hidden" name="schlGradType" class="SchlInfoList['+(value-1)+'].schlGradType" value="10">'+
                 '   </div>'+
                 '   <div class="dropdown dropdown-edcation-highschool-category is-label selected">'+
                 '       <div class="label" aria-hidden="false">전공계열 : </div>'+
                 '       <select class="majorAftnCodeSelect">'+
                 '         <option value="문과">문과</option>'+
                 '         <option value="이과">이과</option>'+
                 '         <option value="전문(실업)>전문(실업)</option>'+
                 '         <option value="예체능">예체능</option>'+
                 '       </select>'+
                 '       <input type="hidden" name="majorName" class="SchlInfoList['+(value-1)+'].majorName" value="2">'+
                 '   </div>'+
                 '  <div class="checkbox checkbox-education-ged devGedCheck" style="display: inline-block;">'+
                 '      <input type="checkbox" class="gedStat" name="SchlInfoList['+(value-1)+'].gedStat" value="1">'+
                 '      <label for="gedStat">대입검정고시</label>'+
                 '      <input type="hidden" name="SchlInfoList['+(value-1)+'].schlGradePrftScr" class="schlGradePrftScr" value="0">'+
                 '      <input type="hidden" name="SchlInfoList['+(value-1)+'].schlGrade" class="schlGrade" value="0">'+
                 '      <input type="hidden" name="SchlInfoList['+(value-1)+'].schlMstrDctr" class="schlMstrDctr" value="0">'+
                 '      <input type="text" name="SchlInfoList['+(value-1)+'].entcYM" class="entcYM" data-format-type="month" value="0" placeholder="2012.03">'+
                 '  </div>';
    }else if(reusult==='1'){
        string =  '<div class="input input-education-name is-label is-ellipsis  is-value" id="UnivSchoolautoComplete_c2" data-comp_type="jkAc">'+
                  '  <label for="schlNm">학교명 <span class="star">*</span> : </label>'+
                  '  <input type="text" class="schlName" name="SchlInfoList['+(value-1)+'].schlName" value="" autocomplete="off" maxlength="50">'+
                  '  <div class="validation hidden" aria-hidden="true">학교명을 입력해주세요</div>'+
                  '  <div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '  <input type="hidden" name="schoolCode" id="schoolCode" data-type="School_Code" value="">'+
                  '  <input type="hidden" name="areaCode" id="areaCode" data-type="GG_Area_Code" value="">'+
                  '  <i class="icon icon-search" aria-hidden="true"></i>'+
                  '</div>'+
                  '<input type="hidden" name="UnivSchool[c2].Schl_Type_Code" value="1">'+
                  '<div class="input input-education-startdate is-label is-value">'+
                  '  <label for="entcYM">입학년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="SchlInfoList['+(value-1)+'].entcYM" class="entcYM" data-format-type="month" value="" placeholder="2012.03">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<div class="input input-education-enddate is-label is-value">'+
                  '  <label for="gradYear">졸업년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="SchlInfoList['+(value-1)+'].gradYear" class="gradYear" data-format-type="month" value="" placeholder="2016.02">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<div class="dropdown dropdown-edcation-state is-label selected">'+
                  '  <div class="label" aria-hidden="false">졸업상태 : </div>'+
                  '  <select class="gradTypeCodeSelect">'+
                  '      <option value="10">졸업</option>'+
                  '      <option value="5">졸업예정</option>'+
                  '      <option value="4">재학중</option>'+
                  '      <option value="2">중퇴</option>'+
                  '      <option value="9">수료</option>'+
                  '      <option value="3">휴학</option>'+
                  '   </select>'+
                  '   <input type="hidden" name="SchlInfoList['+(value-1)+'].schlGradType" value="10" class="schlGradType">'+
                  '   </div>'+
                  '    <div class="checkbox devTrnfCheck" style="display:inline-block;">'+
                  '        <input type="checkbox" class="trnfstat" name="trnfstat" value="1">'+
                  '        <label for="trnfstat">편입</label>'+
                  '    </div>'+
                  '   </div>'+
                  '  <div class="row">'+
                  '    <span class="devMainMajorTemplateArea">'+
                  ' <div class="input input-education-major-name search is-label is-value" id="UnivMajorAutoComplete_1_0" data-comp_type="jkAc">'+
                  '  <label for="majorName">전공명 : </label>'+
                  '  <input type="text" class="majorName" name="SchlInfoList['+(value-1)+'].majorName" value="" autocomplete="off" maxlength="50">'+
                  '  <div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '  <input type="hidden" class="majorNm" name="majorNm" value="">'+
                  '  <input type="hidden" class="mjorCode" name="mjorCode" value="">'+
                  '  <input type="hidden" class="majorAftn" name="majorAftn" value="">'+
                '</div>'+
                '</span>'+
                '   <div class="input input-education-grades is-label is-value">'+
                '       <label for="schlGrade">학점</label>'+
                '        <input type="text" name="SchlInfoList['+(value-1)+'].schlGrade" class="schlGrade" value="" maxlength="4" data-format-type="score">'+
                '       <div class="validation hidden" aria-hidden="true"></div>'+
                '   </div>'+
                '   <div class="dropdown dropdown-education-total is-label selected">'+
                '      <div class="label" aria-hidden="false">총점 : </div>'+
                '      <select class="uniSchoolGradePrftScrSelect">'+
                '       <option value="4.5">4.5</option>'+
                '       <option value="4.3">4.3</option>'+
                '       <option value="4.0">4.0</option>'+
                '       <option value="100">100</option>'+
                '      <select>'+
                '      <input type="hidden" name="SchlInfoList['+(value-1)+'].schlGradePrftScr" class="schlGradePrftScr" value="4.5">'+
                '      <input type="hidden" name="SchlInfoList['+(value-1)+'].schlMstrDctr" class="schlMstrDctr" value="0">'+
                '   </div>'+
                '</div>'+
                '<span class="devOtherUnivMajorTemplateArea">';
    }else if(reusult==='2'){
        string =  '<div class="input input-education-name is-label is-ellipsis  is-value" id="UnivSchoolautoComplete_c2" data-comp_type="jkAc">'+
                  '  <label for="schlNm">학교명 <span class="star">*</span> : </label>'+
                  '  <input type="text" class="schlName" name="SchlInfoList['+(value-1)+'].schlName" value="" autocomplete="off" maxlength="50">'+
                  '  <div class="validation hidden" aria-hidden="true">학교명을 입력해주세요</div>'+
                  '  <div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '  <input type="hidden" name="schoolCode" class="schoolCode" data-type="School_Code" value="">'+
                  '  <input type="hidden" name="areaCode" class="areaCode" data-type="GG_Area_Code" value="">'+
                  '  <i class="icon icon-search" aria-hidden="true"></i>'+
                  '</div>'+
                  '<div class="input input-education-startdate is-label is-value">'+
                  '  <label for="entcYM">입학년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="SchlInfoList['+(value-1)+'].entcYM" class="entcYM" data-format-type="month" value="201003" placeholder="2012.03">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<div class="input input-education-enddate is-label is-value">'+
                  '  <label for="gradYear">졸업년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="SchlInfoList['+(value-1)+'].gradYear" class="gradYear" data-format-type="month" value="201502" placeholder="2016.02">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<input type="hidden" name="UnivSchool[c2].Mstr_Dctr_Type_Code">'+
                  '<div class="dropdown dropdown-edcation-state is-label selected">'+
                  '  <div class="label" aria-hidden="false">졸업상태 : </div>'+
                  '  <select class="gradTypeCodeSelect">'+
                  '      <option value="10">졸업</option>'+
                  '      <option value="5">졸업예정</option>'+
                  '      <option value="4">재학중</option>'+
                  '      <option value="2">중퇴</option>'+
                  '      <option value="9">수료</option>'+
                  '      <option value="3">휴학</option>'+
                  '   </select>'+
                  '   <input type="hidden" name="SchlInfoList['+(value-1)+'].schlGradType" value="10" class="schlGradType">'+
                  '   </div>'+
                  '    <div class="checkbox devTrnfCheck" style="display:inline-block;">'+
                  '        <input type="checkbox" class="trnfstat" name="SchlInfoList['+(value-1)+'].trnfstat" value="1">'+
                  '        <label for="trnfstat">편입</label>'+
                  '    </div>'+
                  '   </div>'+
                  '  <div class="row">'+
                  '  <span class="devMainMajorTemplateArea">'+
                  '  <div class="input input-education-major-name search is-label is-value" id="UnivMajorAutoComplete_1_0" data-comp_type="jkAc">'+
                  '  <label for="majorName">전공명 : </label>'+
                  '  <input type="text" class="majorName" name="SchlInfoList['+(value-1)+'].majorName" value="" autocomplete="off" maxlength="50">'+
                  '  <div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '  <input type="hidden" class="UnivMajorMajorNm" name="UnivMajorMajorNm" value="">'+
                  '  <input type="hidden" class="UnivMajorMajorCode" name="UnivMajorMajorCode" value="">'+
                  '  <input type="hidden" class="UnivMajorMajorAftnCode" name="UnivMajorMajorAftnCode" value="">'+
                  '</div>'+
                  '</span>'+
                  '   <div class="input input-education-grades is-label is-value">'+
                  '      <label for="schlGrade">학점</label>'+
                  '      <input type="text" name="SchlInfoList['+(value-1)+'].schlGrade" class="schlGrade" value="" maxlength="4" data-format-type="score">'+
                  '      <div class="validation hidden" aria-hidden="true"></div>'+
                  '   </div>'+
                  '   <div class="dropdown dropdown-education-total is-label selected">'+
                  '      <div class="label" aria-hidden="false">총점 : </div>'+
                  '      <select class="uniSchoolGradePrftScrSelect">'+
                  '       <option value="4.5">4.5</option>'+
                  '       <option value="4.3">4.3</option>'+
                  '       <option value="4.0">4.0</option>'+
                  '       <option value="100">100</option>'+
                  '      <select>'+
                  '      <input type="hidden" name="SchlInfoList['+(value-1)+'].schlGradePrftScr" class="schlGradePrftScr" value="4.5">'+
                  '      <input type="hidden" name="SchlInfoList['+(value-1)+'].schlMstrDctr" class="schlMstrDctr" value="0">'+
                  '   </div>'+
                  '</div>'+
                  '<span class="devOtherUnivMajorTemplateArea">';
    }else if(reusult==='3'){
        string =  '<div class="input input-education-name is-label is-ellipsis  is-value" id="UnivSchoolautoComplete_c2" data-comp_type="jkAc">'+
                  '  <label for="schlNm">학교명 <span class="star">*</span> : </label>'+
                  '  <input type="text" class="schlName" name="SchlInfoList['+(value-1)+'].schlName" value="" autocomplete="off" maxlength="50">'+
                  '  <div class="validation hidden" aria-hidden="true">학교명을 입력해주세요</div>'+
                  '  <div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '  <input type="hidden" name="schoolCode" class="schoolCode" data-type="School_Code" value="">'+
                  '  <input type="hidden" name="areaCode" class="areaCode" data-type="GG_Area_Code" value="">'+
                  '  <i class="icon icon-search" aria-hidden="true"></i>'+
                  '</div>'+
                  '<div class="dropdown dropdown-edcation-degree is-label">'+
                  '  <div class="label hidden" aria-hidden="false">학위</div>'+
                  '  <select class="uniSchoolMstrDctrTypeSelect">'+
                  '     <option value="2">석사</option>'+
                  '     <option type="button" value="3">박사</option>'+
                  '     <option type="button" value="1">석박사</option>'+
                  '  </select>'+
                  '  <input type="hidden" name="SchlInfoList['+(value-1)+'].schlMstrDctr" class="schlMstrDctr" value="0">'+
                  '</div>'+
                  '<div class="input input-education-startdate is-label is-value">'+
                  '  <label for="entcYM">입학년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="SchlInfoList['+(value-1)+'].entcYM" class="entcYM" value="201003" placeholder="2012.03">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<div class="input input-education-enddate is-label is-value">'+
                  '  <label for="gradYear">졸업년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="SchlInfoList['+(value-1)+'].gradYear" class="gradYear" data-format-type="month" value="" placeholder="2016.02">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<div class="dropdown dropdown-edcation-state is-label selected">'+
                  '  <div class="label" aria-hidden="false">졸업상태 : </div>'+
                  '  <select class="gradTypeCodeSelect">'+
                  '      <option value="10">졸업</option>'+
                  '      <option value="5">졸업예정</option>'+
                  '      <option value="4">재학중</option>'+
                  '      <option value="2">중퇴</option>'+
                  '      <option value="9">수료</option>'+
                  '      <option value="3">휴학</option>'+
                  '   </select>'+
                  '   <input type="hidden" name="schlGradType" value="10" class="schlGradType">'+
                  '   </div>'+
                  '    <div class="checkbox devTrnfCheck" style="display:inline-block;">'+
                  '        <input type="checkbox" class="trnfstat" name="SchlInfoList['+(value-1)+'].trnfstat" value="1">'+
                  '        <label for="trnfstat">편입</label>'+
                  '    </div>'+
                  '   </div>'+
                  '  <div class="row">'+
                  '   <span class="devMainMajorTemplateArea">'+
                  '     <div class="input input-education-major-name search is-label is-value" id="UnivMajorAutoComplete_1_0" data-comp_type="jkAc">'+
                  '<label for="UnivMajorMajorName">전공명 : </label>'+
                  '<input type="text" class="majorName" name="SchlInfoList['+(value-1)+'].majorName" value="" autocomplete="off" maxlength="50">'+
                  '<div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '<input type="hidden" class="UnivMajorMajorNm" name="UnivMajorMajorNm" value="">'+
                  '<input type="hidden" class="UnivMajorMajorCode" name="UnivMajorMajorCode" value="">'+
                  '<input type="hidden" class="UnivMajorMajorAftnCode" name="UnivMajorMajorAftnCode" value="">'+
                '</div>'+
                '</span>'+
                '   <div class="input input-education-grades is-label is-value">'+
                '       <label for="schlGrade">학점</label>'+
                '        <input type="text" name="SchlInfoList['+(value-1)+'].schlGrade" class="schlGrade" value="" maxlength="4" data-format-type="score">'+
                '       <div class="validation hidden" aria-hidden="true"></div>'+
                '   </div>'+
                '   <div class="dropdown dropdown-education-total is-label selected">'+
                '      <div class="label" aria-hidden="false">총점 : </div>'+
                '      <select class="uniSchoolGradePrftScrSelect">'+
                '       <option value="4.5">4.5</option>'+
                '       <option value="4.3">4.3</option>'+
                '       <option value="4.0">4.0</option>'+
                '       <option value="100">100</option>'+
                '      <select>'+
                '      <input type="hidden" name="SchlInfoList['+(value-1)+'].schlGradePrftScr" class="schlGradePrftScr" value="4.5">'+
                '   </div>'+
                '</div>'+
                '<span class="devOtherUnivMajorTemplateArea">';
    }
    let row = $(this).parents("div")[1];
    row.childNodes[3].innerHTML = string;
    if(reusult!=='0'){
        row.childNodes[3].parentNode.parentNode.style.height = '120px';
    }else{
        row.childNodes[3].parentNode.parentNode.style.height = '';
    }
    

});


$(document).ready(function () {
    //학력 추가 이벤트
    $("#school_addbutton").click(function(){
        let value = 0;
        let containers =  $("#school_containers").children();
        for (let name of containers) {
            value = Number(name.className.split(" ")[1].replace("container",""));
        }
        value = value+1;
        $("#school_containers").append('<div class="container container'+value+'"></div');
        let string ='<div class="row">'+
                    '   <div class="dropdown dropdown-education-category selected is-label">'+
                    '        <div class="label" aria-hidden="false">학교구분 : </div>'+
                    '        <select class="schoolTypeSelect"> '+
                    '            <option ><span>학교구분</span></button>'+
                    '            <option value="0"><span>고등학교</span></button>'+
                    '            <option value="1"><span>대학(2,3년)</span></button>'+
                    '            <option value="2"><span>대학교(4년)</span></button>'+
                    '            <option value="3"><span>대학원</span></button>'+
                    '        </select>'+
                    '    <input type="hidden" class="schlType" name="schlType" value="0"></input>'+
                    '    </div>'+
                    '    <div class="schoolTypeContainer"></div>'+
                    '    <input type="hidden" class="schlType" name="SchlInfoList['+(value-1)+'].schlType" value=""></input>'+
                    '   <button type="button" class="button buttonDeleteField"><span>삭제</span></button>'+
                    '</div>'+
                    '<br>';
        $("#school_containers .container"+value).append(string);
    });

    //학력 삭제 이벤트
    $(document).on("click",".buttonDeleteField",function(){
        let containers =  $(this).parent().parent()[0];
        let containersName = containers.className.split(" ")[1];
        let parent = $(this).parent().parent().parent()[0];

        parent.querySelector("."+containersName).remove();
    })


    //인턴 추가 이벤트
    $("#SocialActAdd").click(function(){
        let value = 0;
        let containers =  $("#social_containers").children();
        for (let name of containers) {
            value = Number(name.className.split(" ")[1].replace("container",""));
        }
        value = value+1;
        $("#social_containers").append('<div class="container container'+value+'"></div');
        let string ='<div class="row">'+
                    '    <div class="dropdown dropdown-intern-category is-label">'+
                    '        <div class="label hidden" aria-hidden="true">활동구분<span class="star">*</span> : </div>'+
                    '        <select class="socialActTypeCodeSelect">'+
                    '        <option value="1">인턴</option>'+
                    '        <option value="2">아르바이트</option>'+
                    '        <option value="3">동아리</option>'+
                    '        <option value="4">자원봉사</option>'+
                    '        <option value="5">사회활동</option>'+
                    '        <option value="6">교내활동</option>'+
                    '       </select>'+
                    '       <input type="hidden" name="socialActType" class="socialActType" value="1">'+
                    '    </div>'+
                    '    <div class="input input-intern-name is-label">'+
                    '        <label for="SocialInstNm">회사/기관/단체명 <span class="star">*</span> : </label>'+
                    '        <input type="text" name="SocialInstNm" class="SocialInstNm" value="" maxlength="50">'+
                    '        <div class="validation hidden" aria-hidden="true"></div>'+
                    '    </div>'+
                    '    <div class="input input-intern-startdate is-label">'+
                    '        <label for="SocialActSrtYM">시작년월 :</label>'+
                    '       <input type="text" name="SocialActSrtYM" id="SocialActSrtYM" value="" data-format-type="month" placeholder="2016.03">'+
                    '        <div class="validation hidden" aria-hidden="true"></div>'+
                    '    </div>'+
                    '   <div class="input input-intern-enddate is-label">'+
                    '       <label for="SocialActEndYM">종료년월 : </label>'+
                    '        <input type="text" name="SocialActEndYM" class="SocialActEndYM" value="" data-format-type="month" placeholder="2016.06">'+
                    '        <div class="validation hidden" aria-hidden="true"></div>'+
                    '    </div>'+
                    '</div>'+
                    '<div class="row" style="height: 85px;">'+
                    '    <div class="textarea is-label">'+
                    '        <label for="SocialActCntnt">활동내용</label>'+
                    '        <textarea name="SocialActCntnt" cols="30" rows="10" class="SocialActCntnt" placeholder="직무와 관련된 경험에 대해 (상황 - 노력 - 결과)순으로 작성하는것이 좋습니다."></textarea>'+
                    '    </div>'+
                    '</div>'+
                    '<button type="button" class="button fieldDel"><span>인턴·대외활동 삭제</span></button>';
        $("#social_containers .container"+value).append(string);
    });
    //인턴, 자격증 삭제 이벤트
    $(document).on("click",".fieldDel",function(){
        let containers =  $(this).parent()[0];
        let containersName = containers.className.split(" ")[1];
        let parent = $(this).parent().parent()[0];

        parent.querySelector("."+containersName).remove();
    });

    //자격증 추가 이벤트
    $("#licenseActAdd").click(function(){
        let value = 0;
        let containers =  $("#license_containers").children();
        for (let name of containers) {
            value = Number(name.className.split(" ")[1].replace("container",""));
        }
        value = value+1;
        $("#license_containers").append('<div class="container container'+value+'"></div');
        let string ='<div class="row licenseRow">'+
                    '    <div class="input input-certificate-name is-label  is-value" data-comp_type="jkAc">'+
                    '        <input type="hidden" name="License[c14].Lc_Code" data-type="Lc_Code" value="">'+
                    '        <label for="licenseName">자격증 명 <span class="star">*</span> : </label>'+
                    '        <input type="text" class="licenseName" name="licenseName" value="" maxlength="50">'+
                    '    </div>'+
                    '    <div class="input input-certificate-agency is-label  is-value">'+
                    '        <label for="licenseLcPub">발행처 : </label>'+
                    '        <input type="text" name="licenseLcPub" class="licenseLcPub" value="" data-type="Lc_Pub" maxlength="50">'+
                    '        <div class="validation hidden" aria-hidden="true"></div>'+
                    '    </div>'+
                    '    <div class="input input-certificate-term is-label  is-value">'+
                    '       <label for="licenseLcYYMM">취득월 : </label>'+
                    '       <input type="text" name="licenseLcYYMM" class="licenseLcYYMM" value="" data-format-type="month" placeholder="2017.10">'+
                    '   </div>'+
                    '</div>'+
                    '<button type="button" class="button fieldDel"><span>자격증 삭제</span></button>'+
                    '<br>';
        $("#license_containers .container"+value).append(string);
    });
  });
