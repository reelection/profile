$(document).on("change",".schoolType",function(){
    let attribute = $(this).parents("div")[2].getAttribute("class").split(" ");
    attribute = attribute[1];
    console.log(attribute);
    let reusult = $(this).val();
    let string = '';
    if(reusult==='0'){
        string = '<div class="input input-education-name search is-label is-ellipsis is-value" id="highSchoolAutocomplete_c1">'+
                 '       <label for="SchlNameSearch">학교명 <span class="star">*</span> : </label>'+
                 '       <input type="text" class="SchlNameSearch" data-type="School_Name" value="" autocomplete="off" maxlength="50">'+
                 '       <input type="hidden" name="schlName" class="schlName" data-type="School_Name" value="">'+
                 '       <input type="hidden" name="schoolCode" class="schoolCode" data-type="School_Code" value="">'+
                 '       <input type="hidden" name="areaCode" class="areaCode" data-type="GG_Area_Code" value="">'+
                 '   </div>'+
                 '   <div class="input input-education-enddate is-label is-value">'+
                 '       <label for="gradYear">졸업년도 <span class="star">*</span> : </label>'+
                 '       <input type="text" name="gradYear" class="gradYear" placeholder="2016" data-format-type="year" value="2010" autocomplete="off">'+
                 '      <div class="validation hidden" aria-hidden="true"></div>'+
                 '   </div>'+
                 '   <div class="dropdown dropdown-edcation-state is-label selected">'+
                 '       <div class="label" aria-hidden="false">졸업상태 : </div>'+
                 '       <select class="gradTypeCodeSelect">'+
                 '         <option value="10">졸업</option>'+
                 '         <option value="5">졸업예정</option>'+
                 '         <option value="4">재학중</option>'+
                 '       </select>'+
                 '       <input type="hidden" name="gradTypeCode" class="gradTypeCode" value="10">'+
                 '   </div>'+
                 '   <div class="dropdown dropdown-edcation-highschool-category is-label selected">'+
                 '       <div class="label" aria-hidden="false">전공계열 : </div>'+
                 '       <select class="majorAftnCodeSelect">'+
                 '         <option value="1">문과</option>'+
                 '         <option value="2">이과</option>'+
                 '         <option value="3">전문(실업)</option>'+
                 '         <option value="4">예체능</option>'+
                 '       </select>'+
                 '       <input type="hidden" name="majorAftnCode" class="majorAftnCode" value="2">'+
                 '   </div>'+
                 '  <div class="checkbox checkbox-education-ged devGedCheck" style="display: inline-block;">'+
                 '      <input type="checkbox" class="gedStat" name="gedStat" value="1">'+
                 '      <label for="gedStat">대입검정고시</label>'+
                 '  </div>';
    }else if(reusult==='1'){
        string =  '<div class="input input-education-name is-label is-ellipsis  is-value" id="UnivSchoolautoComplete_c2" data-comp_type="jkAc">'+
                  '  <label for="SchlNameSearch">학교명 <span class="star">*</span> : </label>'+
                  '  <input type="text" class="SchlNameSearch" name="SchlNameSearch" value="" autocomplete="off" maxlength="50">'+
                  '  <div class="validation hidden" aria-hidden="true">학교명을 입력해주세요</div>'+
                  '  <div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '  <input type="hidden" name="schlName" id="schlName" data-type="School_Name" value="">'+
                  '  <input type="hidden" name="schoolCode" id="schoolCode" data-type="School_Code" value="">'+
                  '  <input type="hidden" name="areaCode" id="areaCode" data-type="GG_Area_Code" value="">'+
                  '  <i class="icon icon-search" aria-hidden="true"></i>'+
                  '</div>'+
                  '<input type="hidden" name="UnivSchool[c2].Schl_Type_Code" value="1">'+
                  '<div class="input input-education-startdate is-label is-value">'+
                  '  <label for="entcYM">입학년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="entcYM" class="entcYM" data-format-type="month" value="" placeholder="2012.03">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<div class="input input-education-enddate is-label is-value">'+
                  '  <label for="gradYear">졸업년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="gradYear" class="gradYear" data-format-type="month" value="" placeholder="2016.02">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<div class="dropdown dropdown-edcation-state is-label selected">'+
                  '  <div class="label" aria-hidden="false">졸업상태 : </div>'+
                  '  <select class="gradTypeCodeSelect">'+
                  '      <option value="10>졸업</option>'+
                  '      <option value="5">졸업예정</option>'+
                  '      <option value="4">재학중</option>'+
                  '      <option value="2">중퇴</option>'+
                  '      <option value="9">수료</option>'+
                  '      <option value="3">휴학</option>'+
                  '   </select>'+
                  '   <input type="hidden" name="gradTypeCode" value="10" class="gradTypeCode">'+
                  '   </div>'+
                  '    <div class="checkbox devTrnfCheck" style="display:inline-block;">'+
                  '        <input type="checkbox" class="trnfstat" name="trnfstat" value="1">'+
                  '        <label for="trnfstat">편입</label>'+
                  '    </div>'+
                  '   </div>'+
                  '  <div class="row">'+
                  '    <span class="devMainMajorTemplateArea">'+
                  ' <div class="input input-education-major-name search is-label is-value" id="UnivMajorAutoComplete_1_0" data-comp_type="jkAc">'+
                  '  <label for="UnivMajorMajorName">전공명 : </label>'+
                  '  <input type="text" class="UnivMajorMajorName" name="UnivMajorMajorName" value="" autocomplete="off" maxlength="50">'+
                  '  <div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '  <input type="hidden" class="UnivMajorMajorNm" name="UnivMajorMajorNm" value="">'+
                  '  <input type="hidden" class="UnivMajorMajorCode" name="UnivMajorMajorCode" value="">'+
                  '  <input type="hidden" class="UnivMajorMajorAftnCode" name="UnivMajorMajorAftnCode" value="">'+
                '</div>'+
                '</span>'+
                '   <div class="input input-education-grades is-label is-value">'+
                '       <label for="uniSchoolGrade">학점</label>'+
                '        <input type="text" name="uniSchoolGrade" class="uniSchoolGrade" value="" maxlength="4" data-format-type="score">'+
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
                '      <input type="hidden" name="uniSchoolGradePrftScr" class="uniSchoolGradePrftScr" value="4.5">'+
                '   </div>'+
                '</div>'+
                '<span class="devOtherUnivMajorTemplateArea">';
    }else if(reusult==='2'){
        string =  '<div class="input input-education-name is-label is-ellipsis  is-value" id="UnivSchoolautoComplete_c2" data-comp_type="jkAc">'+
                  '  <label for="SchlNameSearch">학교명 <span class="star">*</span> : </label>'+
                  '  <input type="text" class="SchlNameSearch" name="SchlNameSearch" value="" autocomplete="off" maxlength="50">'+
                  '  <div class="validation hidden" aria-hidden="true">학교명을 입력해주세요</div>'+
                  '  <div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '  <input type="hidden" name="schlName" class="schlName" data-type="School_Name" value="">'+
                  '  <input type="hidden" name="schoolCode" class="schoolCode" data-type="School_Code" value="">'+
                  '  <input type="hidden" name="areaCode" class="areaCode" data-type="GG_Area_Code" value="">'+
                  '  <i class="icon icon-search" aria-hidden="true"></i>'+
                  '</div>'+
                  '<div class="input input-education-startdate is-label is-value">'+
                  '  <label for="entcYM">입학년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="entcYM" class="entcYM" data-format-type="month" value="201003" placeholder="2012.03">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<div class="input input-education-enddate is-label is-value">'+
                  '  <label for="gradYear">졸업년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="gradYear" class="gradYear" data-format-type="month" value="201502" placeholder="2016.02">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<input type="hidden" name="UnivSchool[c2].Mstr_Dctr_Type_Code">'+
                  '<div class="dropdown dropdown-edcation-state is-label selected">'+
                  '  <div class="label" aria-hidden="false">졸업상태 : </div>'+
                  '  <select class="gradTypeCodeSelect">'+
                  '      <option value="10>졸업</option>'+
                  '      <option value="5">졸업예정</option>'+
                  '      <option value="4">재학중</option>'+
                  '      <option value="2">중퇴</option>'+
                  '      <option value="9">수료</option>'+
                  '      <option value="3">휴학</option>'+
                  '   </select>'+
                  '   <input type="hidden" name="gradTypeCode" value="10" class="gradTypeCode">'+
                  '   </div>'+
                  '    <div class="checkbox devTrnfCheck" style="display:inline-block;">'+
                  '        <input type="checkbox" class="trnfstat" niame="trnfstat" value="1">'+
                  '        <label for="trnfstat">편입</label>'+
                  '    </div>'+
                  '   </div>'+
                  '  <div class="row">'+
                  '  <span class="devMainMajorTemplateArea">'+
                  '  <div class="input input-education-major-name search is-label is-value" id="UnivMajorAutoComplete_1_0" data-comp_type="jkAc">'+
                  '  <label for="UnivMajorMajorName">전공명 : </label>'+
                  '  <input type="text" class="UnivMajorMajorName" name="UnivMajorMajorName" value="" autocomplete="off" maxlength="50">'+
                  '  <div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '  <input type="hidden" class="UnivMajorMajorNm" name="UnivMajorMajorNm" value="">'+
                  '  <input type="hidden" class="UnivMajorMajorCode" name="UnivMajorMajorCode" value="">'+
                  '  <input type="hidden" class="UnivMajorMajorAftnCode" name="UnivMajorMajorAftnCode" value="">'+
                  '</div>'+
                  '</span>'+
                  '   <div class="input input-education-grades is-label is-value">'+
                  '      <label for="uniSchoolGrade">학점</label>'+
                  '      <input type="text" name="uniSchoolGrade" class="uniSchoolGrade" value="" maxlength="4" data-format-type="score">'+
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
                  '      <input type="hidden" name="uniSchoolGradePrftScr" class="uniSchoolGradePrftScr" value="4.5">'+
                  '   </div>'+
                  '</div>'+
                  '<span class="devOtherUnivMajorTemplateArea">';
    }else if(reusult==='3'){
        string =  '<div class="input input-education-name is-label is-ellipsis  is-value" id="UnivSchoolautoComplete_c2" data-comp_type="jkAc">'+
                  '  <label for="SchlNameSearch">학교명 <span class="star">*</span> : </label>'+
                  '  <input type="text" class="SchlNameSearch" name="SchlNameSearch" value="" autocomplete="off" maxlength="50">'+
                  '  <div class="validation hidden" aria-hidden="true">학교명을 입력해주세요</div>'+
                  '  <div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '  <input type="hidden" name="schlName" class="schlName" data-type="School_Name" value="">'+
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
                  '  <input type="hidden" name="uniSchoolMstrDctrType" class="uniSchoolMstrDctrType" value="">'+
                  '</div>'+
                  '<div class="input input-education-startdate is-label is-value">'+
                  '  <label for="entcYM">입학년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="entcYM" class="entcYM" value="201003" placeholder="2012.03">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<div class="input input-education-enddate is-label is-value">'+
                  '  <label for="gradYear">졸업년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="gradYear" class="gradYear" data-format-type="month" value="" placeholder="2016.02">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<div class="dropdown dropdown-edcation-state is-label selected">'+
                  '  <div class="label" aria-hidden="false">졸업상태 : </div>'+
                  '  <select class="gradTypeCodeSelect">'+
                  '      <option value="10>졸업</option>'+
                  '      <option value="5">졸업예정</option>'+
                  '      <option value="4">재학중</option>'+
                  '      <option value="2">중퇴</option>'+
                  '      <option value="9">수료</option>'+
                  '      <option value="3">휴학</option>'+
                  '   </select>'+
                  '   <input type="hidden" name="gradTypeCode" value="10" class="gradTypeCode">'+
                  '   </div>'+
                  '    <div class="checkbox devTrnfCheck" style="display:inline-block;">'+
                  '        <input type="checkbox" class="trnfstat" name="trnfstat" value="1">'+
                  '        <label for="trnfstat">편입</label>'+
                  '    </div>'+
                  '   </div>'+
                  '  <div class="row">'+
                  '   <span class="devMainMajorTemplateArea">'+
                  '     <div class="input input-education-major-name search is-label is-value" id="UnivMajorAutoComplete_1_0" data-comp_type="jkAc">'+
                  '<label for="UnivMajorMajorName">전공명 : </label>'+
                  '<input type="text" class="UnivMajorMajorName" name="UnivMajorMajorName" value="" autocomplete="off" maxlength="50">'+
                  '<div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '<input type="hidden" class="UnivMajorMajorNm" name="UnivMajorMajorNm" value="">'+
                  '<input type="hidden" class="UnivMajorMajorCode" name="UnivMajorMajorCode" value="">'+
                  '<input type="hidden" class="UnivMajorMajorAftnCode" name="UnivMajorMajorAftnCode" value="">'+
                '</div>'+
                '</span>'+
                '   <div class="input input-education-grades is-label is-value">'+
                '       <label for="uniSchoolGrade">학점</label>'+
                '        <input type="text" name="uniSchoolGrade" class="uniSchoolGrade" value="" maxlength="4" data-format-type="score">'+
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
                '      <input type="hidden" name="uniSchoolGradePrftScr" class="uniSchoolGradePrftScr" value="4.5">'+
                '   </div>'+
                '</div>'+
                '<span class="devOtherUnivMajorTemplateArea">';
    }
    let row = $(this).parents("div")[1];
    row.childNodes[3].innerHTML = string;
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
                    '        <select class="schoolType"> '+
                    '            <option ><span>학교구분</span></button>'+
                    '            <option value="0"><span>고등학교</span></button>'+
                    '            <option value="1"><span>대학(2,3년)</span></button>'+
                    '            <option value="2"><span>대학교(4년)</span></button>'+
                    '            <option value="3"><span>대학원</span></button>'+
                    '        </select>'+
                    '    </div>'+
                    '    <div class="schoolTypeContainer"></div>'+
                    '   <button type="button" class="button buttonDeleteField"><span>삭제</span></button>'+
                    '</div>'+
                    '<br>';
        $(".container"+value).append(string);
    });

    //학력 삭제 이벤트
    $(document).on("click",".buttonDeleteField",function(){
        let containers =  $(this).parent()[0];
        let containersName = containers.className.split(" ")[1];
        let parent = $(this).parent().parent()[0];

        parent.querySelector("."+containersName).remove();
    })
  });
