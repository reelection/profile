<%--
  Created by IntelliJ IDEA.
  User: jaesu
  Date: 2022-07-06
  Time: 오후 10:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>sample</title>
</head>
<body>
  sample(브랜치 변경2)
  <ul>
      <c:forEach items="${sampleDataList}" var="data" varStatus="status">
        <li>${data.sn} / ${data.nm}</li>
      </c:forEach>
  </ul>

</body>
</html>
