$(document).on("change",".schoolType",function(){
    let attribute = $(this).parents("div")[2].getAttribute("class").split(" ");
    attribute = attribute[1];
    console.log(attribute);
    let reusult = $(this).val();
    let string = '';
    if(reusult==='0'){
        string = '<div class="input input-education-name search is-label is-ellipsis is-value" id="highSchoolAutocomplete_c1">'+
                 '       <label for="HighSchool_Schl_Name_Search">학교명 <span class="star">*</span> : </label>'+
                 '       <input type="text" id="HighSchool_Schl_Name_Search" data-type="School_Name" value="" autocomplete="off" maxlength="50">'+
                 '       <input type="hidden" name="HighSchool.Schl_Name" data-type="School_Name" value="">'+
                 '       <input type="hidden" name="HighSchool.School_Code" data-type="School_Code" value="">'+
                 '       <input type="hidden" name="HighSchool.Area_Code" data-type="GG_Area_Code" value="">'+
                 '   </div>'+
                 '   <div class="input input-education-enddate is-label is-value">'+
                 '       <label for="HighSchool_Grad_Year">졸업년도 <span class="star">*</span> : </label>'+
                 '       <input type="text" name="HighSchool.Grad_Year" id="HighSchool_Grad_Year" placeholder="2016" data-format-type="year" value="2010" autocomplete="off">'+
                 '      <div class="validation hidden" aria-hidden="true"></div>'+
                 '   </div>'+
                 '   <div class="dropdown dropdown-edcation-state is-label selected">'+
                 '       <div class="label" aria-hidden="false">졸업상태 : </div>'+
                 '       <select id="HighSchool_Grad_Type_Code_Select">'+
                 '         <option value="10">졸업</option>'+
                 '         <option value="5">졸업예정</option>'+
                 '         <option value="4">재학중</option>'+
                 '       </select>'+
                 '       <input type="hidden" name="HighSchool.Grad_Type_Code" id="HighSchool_Grad_Type_Code" value="10">'+
                 '   </div>'+
                 '   <div class="dropdown dropdown-edcation-highschool-category is-label selected">'+
                 '       <div class="label" aria-hidden="false">전공계열 : </div>'+
                 '       <select id="HighSchool_Major_Aftn_Code_Select">'+
                 '         <option value="1">문과</option>'+
                 '         <option value="2">이과</option>'+
                 '         <option value="3">전문(실업)</option>'+
                 '         <option value="4">예체능</option>'+
                 '       </select>'+
                 '       <input type="hidden" name="HighSchool.Major_Aftn_Code" id="HighSchool_Major_Aftn_Code" value="2">'+
                 '   </div>'+
                 '  <div class="checkbox checkbox-education-ged devGedCheck" style="display: inline-block;">'+
                 '      <input type="checkbox" id="Ged_Stat" data-checked-value="1" data-non-checked-value="0">'+
                 '      <label for="Ged_Stat">대입검정고시</label>'+
                 '      <input type="hidden" name="HighSchool.Ged_Stat" value="0">'+
                 '  </div>';
    }else if(reusult==='1'){
        string =  '<div class="input input-education-name is-label is-ellipsis  is-value" id="UnivSchoolautoComplete_c2" data-comp_type="jkAc">'+
                  '  <label for="UnivSchool_Schl_Name_c2">학교명 <span class="star">*</span> : </label>'+
                  '  <input type="text" id="UnivSchool_Schl_Name_c2" data-type="School_Name" data-comp_type="jkAcInput" value="서영대학교" autocomplete="off" maxlength="50">'+
                  '  <div class="validation hidden" aria-hidden="true">학교명을 입력해주세요</div>'+
                  '  <div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '  <input type="hidden" name="UnivSchool[c2].Schl_Name" data-type="School_Name" value="서영대학교">'+
                  '  <input type="hidden" name="UnivSchool[c2].School_Code" data-type="School_Code" value="C0076001">'+
                  '  <input type="hidden" name="UnivSchool[c2].Area_Code" data-type="GG_Area_Code" value="8">'+
                  '  <i class="icon icon-search" aria-hidden="true"></i>'+
                  '</div>'+
                  '<input type="hidden" name="UnivSchool[c2].Schl_Type_Code" value="1">'+
                  '<div class="input input-education-startdate is-label is-value">'+
                  '  <label for="UnivSchool_Entc_YM_c2">입학년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="UnivSchool[c2].Entc_YM" id="UnivSchool_Entc_YM_c2" data-format-type="month" value="201003" placeholder="2012.03">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<div class="input input-education-enddate is-label is-value">'+
                  '  <label for="UnivSchool_Grad_YM_c2">졸업년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="UnivSchool[c2].Grad_YM" id="UnivSchool_Grad_YM_c2" data-format-type="month" value="201502" placeholder="2016.02">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<input type="hidden" name="UnivSchool[c2].Mstr_Dctr_Type_Code">'+
                  '<div class="dropdown dropdown-edcation-state is-label selected">'+
                  '  <div class="label" aria-hidden="false">졸업상태 : </div>'+
                  '  <select id="UnivSchool_Grad_Type_Code_c2_Select">'+
                  '      <option value="10>졸업</option>'+
                  '      <option value="5">졸업예정</option>'+
                  '      <option value="4">재학중</option>'+
                  '      <option value="2">중퇴</option>'+
                  '      <option value="9">수료</option>'+
                  '      <option value="3">휴학</option>'+
                  '   </select>'+
                  '   <input type="hidden" name="UnivSchool[c2].Grad_Type_Code" value="10" id="UnivSchool_Grad_Type_Code_c2">'+
                  '   </div>'+
                  '    <div class="checkbox devTrnfCheck" style="display:inline-block;">'+
                  '        <input type="checkbox" id="univschool_trnfstat_c2" data-checked-value="1" data-non-checked-value="0">'+
                  '        <label for="univschool_trnfstat_c2">편입</label>'+
                  '        <input type="hidden" name="UnivSchool[c2].Trnf_Stat" id="UnivSchool_Trnf_Stat_c2" value="0">'+
                  '    </div>'+
                  '   </div>'+
                  '  <div class="row">'+
                  '    <span class="devMainMajorTemplateArea">'+
                  ' <div class="input input-education-major-name search is-label is-value" id="UnivMajorAutoComplete_1_0" data-comp_type="jkAc">'+
                  '<label for="univmajor_0_0">전공명 : </label>'+
                  '<input type="text" id="univmajor_0_0" data-type="Major_Name" data-comp_type="jkAcInput" value="컴퓨터정보" autocomplete="off" maxlength="50">'+
                  '<div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '<input type="hidden" name="UnivSchool[c2].UnivMajor[0].Major_Name" data-type="Major_Name" value="컴퓨터정보">'+
                  '<input type="hidden" name="UnivSchool[c2].UnivMajor[0].Major_Code" data-type="Major_Code" value="1000156">'+
                  '<input type="hidden" name="UnivSchool[c2].UnivMajor[0].Major_Aftn_Code" data-type="Major_Aftn_Code" value="5">'+
                  '<i class="icon icon-search" aria-hidden="true"></i>'+
                  '<input type="hidden" name="UnivSchool[c2].UnivMajor[0].Major_Type_Code" value="1" id="UnivMajor_Major_Type_Code_c2_0">'+
                  '<input type="hidden" name="UnivSchool[c2].UnivMajor[0].Index_Name" value="0">'+
                '</div>'+
                '</span>'+
                '   <div class="input input-education-grades is-label is-value">'+
                '       <label for="UnivSchool_Grade_c2">학점</label>'+
                '        <input type="text" name="UnivSchool[c2].Grade" id="UnivSchool_Grade_c2" value="4.11" maxlength="4" data-format-type="score">'+
                '       <div class="validation hidden" aria-hidden="true"></div>'+
                '   </div>'+
                '   <div class="dropdown dropdown-education-total is-label selected">'+
                '      <div class="label" aria-hidden="false">총점 : </div>'+
                '      <select id="UnivSchool_Grade_Prft_Scr_c2_Select">'+
                '       <option value="4.5">4.5</option>'+
                '       <option value="4.3">4.3</option>'+
                '       <option value="4.0">4.0</option>'+
                '       <option value="100">100</option>'+
                '      <select>'+
                '      <input type="hidden" name="UnivSchool[c2].Grade_Prft_Scr" id="UnivSchool_Grade_Prft_Scr_c2" value="4.5">'+
                '   </div>'+
                '</div>'+
                '<span class="devOtherUnivMajorTemplateArea">'
    }else if(reusult==='2'){
        string =  '<div class="input input-education-name is-label is-ellipsis  is-value" id="UnivSchoolautoComplete_c2" data-comp_type="jkAc">'+
                  '  <label for="UnivSchool_Schl_Name_c2">학교명 <span class="star">*</span> : </label>'+
                  '  <input type="text" id="UnivSchool_Schl_Name_c2" data-type="School_Name" data-comp_type="jkAcInput" value="" autocomplete="off" maxlength="50">'+
                  '  <div class="validation hidden" aria-hidden="true">학교명을 입력해주세요</div>'+
                  '  <div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '  <input type="hidden" name="UnivSchool[c2].Schl_Name" data-type="School_Name" value="">'+
                  '  <input type="hidden" name="UnivSchool[c2].School_Code" data-type="School_Code" value="">'+
                  '  <input type="hidden" name="UnivSchool[c2].Area_Code" data-type="GG_Area_Code" value="">'+
                  '  <i class="icon icon-search" aria-hidden="true"></i>'+
                  '</div>'+
                  '<input type="hidden" name="UnivSchool[c2].Schl_Type_Code" value="1">'+
                  '<div class="input input-education-startdate is-label is-value">'+
                  '  <label for="UnivSchool_Entc_YM_c2">입학년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="UnivSchool[c2].Entc_YM" id="UnivSchool_Entc_YM_c2" data-format-type="month" value="" placeholder="2012.03">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<div class="input input-education-enddate is-label is-value">'+
                  '  <label for="UnivSchool_Grad_YM_c2">졸업년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="UnivSchool[c2].Grad_YM" id="UnivSchool_Grad_YM_c2" data-format-type="month" value="" placeholder="2016.02">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<input type="hidden" name="UnivSchool[c2].Mstr_Dctr_Type_Code">'+
                  '<div class="dropdown dropdown-edcation-state is-label selected">'+
                  '  <div class="label" aria-hidden="false">졸업상태 : </div>'+
                  '  <select id="UnivSchool_Grad_Type_Code_c2_Select">'+
                  '      <option value="10>졸업</option>'+
                  '      <option value="5">졸업예정</option>'+
                  '      <option value="4">재학중</option>'+
                  '      <option value="2">중퇴</option>'+
                  '      <option value="9">수료</option>'+
                  '      <option value="3">휴학</option>'+
                  '   </select>'+
                  '   <input type="hidden" name="UnivSchool[c2].Grad_Type_Code" value="10" id="UnivSchool_Grad_Type_Code_c2">'+
                  '   </div>'+
                  '    <div class="checkbox devTrnfCheck" style="display:inline-block;">'+
                  '        <input type="checkbox" id="univschool_trnfstat_c2" data-checked-value="1" data-non-checked-value="0">'+
                  '        <label for="univschool_trnfstat_c2">편입</label>'+
                  '        <input type="hidden" name="UnivSchool[c2].Trnf_Stat" id="UnivSchool_Trnf_Stat_c2" value="0">'+
                  '    </div>'+
                  '   </div>'+
                  '  <div class="row">'+
                  '    <span class="devMainMajorTemplateArea">'+
                  ' <div class="input input-education-major-name search is-label is-value" id="UnivMajorAutoComplete_1_0" data-comp_type="jkAc">'+
                  '<label for="univmajor_0_0">전공명 : </label>'+
                  '<input type="text" id="univmajor_0_0" data-type="Major_Name" data-comp_type="jkAcInput" value="컴퓨터정보" autocomplete="off" maxlength="50">'+
                  '<div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '<input type="hidden" name="UnivSchool[c2].UnivMajor[0].Major_Name" data-type="Major_Name" value="컴퓨터정보">'+
                  '<input type="hidden" name="UnivSchool[c2].UnivMajor[0].Major_Code" data-type="Major_Code" value="1000156">'+
                  '<input type="hidden" name="UnivSchool[c2].UnivMajor[0].Major_Aftn_Code" data-type="Major_Aftn_Code" value="5">'+
                  '<i class="icon icon-search" aria-hidden="true"></i>'+
                  '<input type="hidden" name="UnivSchool[c2].UnivMajor[0].Major_Type_Code" value="1" id="UnivMajor_Major_Type_Code_c2_0">'+
                  '<input type="hidden" name="UnivSchool[c2].UnivMajor[0].Index_Name" value="0">'+
                '</div>'+
                '</span>'+
                '   <div class="input input-education-grades is-label is-value">'+
                '       <label for="UnivSchool_Grade_c2">학점</label>'+
                '        <input type="text" name="UnivSchool[c2].Grade" id="UnivSchool_Grade_c2" value="4.11" maxlength="4" data-format-type="score">'+
                '       <div class="validation hidden" aria-hidden="true"></div>'+
                '   </div>'+
                '   <div class="dropdown dropdown-education-total is-label selected">'+
                '      <div class="label" aria-hidden="false">총점 : </div>'+
                '      <select id="UnivSchool_Grade_Prft_Scr_c2_Select">'+
                '       <option value="4.5">4.5</option>'+
                '       <option value="4.3">4.3</option>'+
                '       <option value="4.0">4.0</option>'+
                '       <option value="100">100</option>'+
                '      <select>'+
                '      <input type="hidden" name="UnivSchool[c2].Grade_Prft_Scr" id="UnivSchool_Grade_Prft_Scr_c2" value="4.5">'+
                '   </div>'+
                '</div>'+
                '<span class="devOtherUnivMajorTemplateArea">'
    }else if(reusult==='3'){
        string =  '<div class="input input-education-name is-label is-ellipsis  is-value" id="UnivSchoolautoComplete_c2" data-comp_type="jkAc">'+
                  '  <label for="UnivSchool_Schl_Name_c2">학교명 <span class="star">*</span> : </label>'+
                  '  <input type="text" id="UnivSchool_Schl_Name_c2" data-type="School_Name" data-comp_type="jkAcInput" value="" autocomplete="off" maxlength="50">'+
                  '  <div class="validation hidden" aria-hidden="true">학교명을 입력해주세요</div>'+
                  '  <div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '  <input type="hidden" name="UnivSchool[c2].Schl_Name" data-type="School_Name" value="">'+
                  '  <input type="hidden" name="UnivSchool[c2].School_Code" data-type="School_Code" value="">'+
                  '  <input type="hidden" name="UnivSchool[c2].Area_Code" data-type="GG_Area_Code" value="">'+
                  '  <i class="icon icon-search" aria-hidden="true"></i>'+
                  '</div>'+
                  '<div class="dropdown dropdown-edcation-degree is-label">'+
                  '<div class="label hidden" aria-hidden="false">학위</div>'+
                  '  <select id="UnivSchool_Mstr_Dctr_Type_Code_c654_Select">'+
                  '     <option value="2">석사</option>'+
                  '     <option type="button" value="3">박사</option>'+
                  '     <option type="button" value="1">석박사</option>'+
                  '  </select>'+
                  '  <input type="hidden" name="UnivSchool[c654].Mstr_Dctr_Type_Code" id="UnivSchool_Mstr_Dctr_Type_Code_c654" value="">'+
                  '</div>'+
                  '<input type="hidden" name="UnivSchool[c2].Schl_Type_Code" value="1">'+
                  '<div class="input input-education-startdate is-label is-value">'+
                  '  <label for="UnivSchool_Entc_YM_c2">입학년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="UnivSchool[c2].Entc_YM" id="UnivSchool_Entc_YM_c2" data-format-type="month" value="" placeholder="2012.03">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<div class="input input-education-enddate is-label is-value">'+
                  '  <label for="UnivSchool_Grad_YM_c2">졸업년월 <span class="star">*</span> : </label>'+
                  '  <input type="text" name="UnivSchool[c2].Grad_YM" id="UnivSchool_Grad_YM_c2" data-format-type="month" value="" placeholder="2016.02">'+
                  '  <div class="validation hidden" aria-hidden="true"></div>'+
                  '</div>'+
                  '<input type="hidden" name="UnivSchool[c2].Mstr_Dctr_Type_Code">'+
                  '<div class="dropdown dropdown-edcation-state is-label selected">'+
                  '  <div class="label" aria-hidden="false">졸업상태 : </div>'+
                  '  <select id="UnivSchool_Grad_Type_Code_c2_Select">'+
                  '      <option value="10>졸업</option>'+
                  '      <option value="5">졸업예정</option>'+
                  '      <option value="4">재학중</option>'+
                  '      <option value="2">중퇴</option>'+
                  '      <option value="9">수료</option>'+
                  '      <option value="3">휴학</option>'+
                  '   </select>'+
                  '   <input type="hidden" name="UnivSchool[c2].Grad_Type_Code" value="10" id="UnivSchool_Grad_Type_Code_c2">'+
                  '   </div>'+
                  '    <div class="checkbox devTrnfCheck" style="display:inline-block;">'+
                  '        <input type="checkbox" id="univschool_trnfstat_c2" data-checked-value="1" data-non-checked-value="0">'+
                  '        <label for="univschool_trnfstat_c2">편입</label>'+
                  '        <input type="hidden" name="UnivSchool[c2].Trnf_Stat" id="UnivSchool_Trnf_Stat_c2" value="0">'+
                  '    </div>'+
                  '   </div>'+
                  '  <div class="row">'+
                  '    <span class="devMainMajorTemplateArea">'+
                  ' <div class="input input-education-major-name search is-label is-value" id="UnivMajorAutoComplete_1_0" data-comp_type="jkAc">'+
                  '<label for="univmajor_0_0">전공명 : </label>'+
                  '<input type="text" id="univmajor_0_0" data-type="Major_Name" data-comp_type="jkAcInput" value="컴퓨터정보" autocomplete="off" maxlength="50">'+
                  '<div class="autocomplete hidden" aria-hidden="true" data-comp_type="jkAcResultWrap"></div>'+
                  '<input type="hidden" name="UnivSchool[c2].UnivMajor[0].Major_Name" data-type="Major_Name" value="컴퓨터정보">'+
                  '<input type="hidden" name="UnivSchool[c2].UnivMajor[0].Major_Code" data-type="Major_Code" value="1000156">'+
                  '<input type="hidden" name="UnivSchool[c2].UnivMajor[0].Major_Aftn_Code" data-type="Major_Aftn_Code" value="5">'+
                  '<i class="icon icon-search" aria-hidden="true"></i>'+
                  '<input type="hidden" name="UnivSchool[c2].UnivMajor[0].Major_Type_Code" value="1" id="UnivMajor_Major_Type_Code_c2_0">'+
                  '<input type="hidden" name="UnivSchool[c2].UnivMajor[0].Index_Name" value="0">'+
                '</div>'+
                '</span>'+
                '   <div class="input input-education-grades is-label is-value">'+
                '       <label for="UnivSchool_Grade_c2">학점</label>'+
                '        <input type="text" name="UnivSchool[c2].Grade" id="UnivSchool_Grade_c2" value="4.11" maxlength="4" data-format-type="score">'+
                '       <div class="validation hidden" aria-hidden="true"></div>'+
                '   </div>'+
                '   <div class="dropdown dropdown-education-total is-label selected">'+
                '      <div class="label" aria-hidden="false">총점 : </div>'+
                '      <select id="UnivSchool_Grade_Prft_Scr_c2_Select">'+
                '       <option value="4.5">4.5</option>'+
                '       <option value="4.3">4.3</option>'+
                '       <option value="4.0">4.0</option>'+
                '       <option value="100">100</option>'+
                '      <select>'+
                '      <input type="hidden" name="UnivSchool[c2].Grade_Prft_Scr" id="UnivSchool_Grade_Prft_Scr_c2" value="4.5">'+
                '   </div>'+
                '</div>'+
                '<span class="devOtherUnivMajorTemplateArea">'
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
        let string = '<div class="row">'+
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
                    '</div>'+
                    '<button type="button" class="button buttonDeleteField"><span>삭제</span></button><br>';
        $(".container"+value).append(string);
    });
    $(document).on("click",".buttonDeleteField",function(){
        let containers =  $(this).parent()[0];
        let containersName = containers.className.split(" ")[1];
        let parent = $(this).parent().parent()[0];

        parent.querySelector("."+containersName).remove();
    })
  });
