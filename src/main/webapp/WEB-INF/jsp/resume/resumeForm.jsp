<%--
  Created by IntelliJ IDEA.
  User: dhkim
  Date: 2022-08-06
  Time: 오후 2:02
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<html>
  <head>
      <title>이력서</title>
      <link rel="stylesheet" type="text/css" href="/css/jquery-ui.min.css">
      <script src="/js/jquery/jquery-3.6.0.js"></script>
      <script src="/js/jquery/jquery-ui.min.js"></script>
</head>
<body>
    <div class="">
        <div class="">
        <form id="resumeForm" class="" method="post">
            <input type="hidden" id="mbrNo" name="mbrNo" value="${mbrNo}" />
            <div class="">
                <h2 class="">교육</h2>
                <div class="">
                    <c:forEach items="${eduList}" var="list" varStatus="i">
                    <div class="">
                        <input type="hidden" id="eduNo" name="eduNo" value="${list.eduNo}" />
                        <label for="eduNm">교육명</label>
                        <input type="text" id="eduNm" name="eduNm" value="${list.eduNm}"><br/>
                        <label for="eduOrgNm">교육기관명</label>
                        <input type="text" id="eduOrgNm" name="eduOrgNm" value="${list.eduOrgNm}"><br/>
                        <label for="eduStDd">교육시작일</label>
                        <input type="text" id="eduStDd" name="eduStDd" class="monthPicker" value="${list.eduStDd}"><br/>
                        <label for="eduEndDd">교육종료일</label>
                        <input type="text" id="eduEndDd" name="eduEndDd" class="monthPicker" value="${list.eduEndDd}"><br/>
                        <label for="eduCn">교육내용</label>
                        <textarea id="eduCn" name="eduCn" rows="5" cols="100">${list.eduCn}</textarea>
                    </div>
                    </c:forEach>
                </div>
            </div>
            <div class="">
                <button type="button" id="btnSave">저장</button>
            </div>
        </form>
        </div>
    </div>

    <script>
        $(document).ready(function(){
            $(".monthpicker").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: "yy-mm",
                showButtonPanel: true,
                currentText: "This Month",
                prevText: '이전 달',	// 마우스 오버시 이전달 텍스트
                nextText: '다음 달',	// 마우스 오버시 다음달 텍스트
                monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더중 월 표시를 위한 부분
                monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더 중 월 표시를 위한 부분
                dayNames: ['일', '월', '화', '수', '목', '금', '토'],	//한글 캘린더 요일 표시 부분
                dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],	//한글 요일 표시 부분
                dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],	// 한글 요일 표시 부분
                showMonthAfterYear: true,	// true : 년 월  false : 월 년 순으로 보여줌
                yearSuffix: '년',	//
                onChangeMonthYear: function (year, month, inst) {
                    $(this).val($.datepicker.formatDate('yy-mm', new Date(year, month - 1, 1)));
                },
                onClose: function(dateText, inst) {
                    var month = $(".ui-datepicker-month :selected").val();
                    var year = $(".ui-datepicker-year :selected").val();
                    $(this).val($.datepicker.formatDate('yy-mm', new Date(year, month, 1)));
                }
            }).focus(function () {
                $(".ui-datepicker-calendar").hide();
            });

            $("#btnSave").click(function(){
                if($("#eduNm").val() == "") {
                    alert("교육명은 필수 입력값입니다.");
                    $("#eduNm").focus();
                    return false;
                }
                if($("#eduOrgNm").val() == "") {
                    alert("교육기관명은 필수 입력값입니다.");
                    $("#eduOrgNm").focus();
                    return false;
                }
                if($("#eduStDd").val() == "") {
                    alert("교육 시작일은 필수 입력값입니다.");
                    $("#eduStDd").focus();
                    return false;
                }
                if($("#eduEndDd").val() == "") {
                    alert("교육 종료일은 필수 입력값입니다.");
                    $("#eduEndDd").focus();
                    return false;
                }
                if($("#eduCn").val() == "") {
                    alert("교육 내용은 필수 입력값입니다.");
                    $("#eduCn").focus();
                    return false;
                }

                if(confirm("저장 하시겠습니까?")) {
                    let formData = $("#resumeForm").serialize();
                    $.post('/resumeSave', formData).done(function(data) {
                       console.log(data);
                    });


                }

            });


        });
    </script>
</body>
</html>
