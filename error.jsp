<%--
 * FileName: error.jsp
 *
 * Copyright (c) 2007 iASPEC, Inc. All Rights Reserved.
 * 
 * @Author: Alex Zhang
 * @Version: 1.0.0
 * @DateTime: 2007-5-8
--%>


<%@ page contentType="text/html; charset=UTF-8" %>

<%@ taglib uri="/struts-tags" prefix="s"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" type="text/css" href="<s:url value="/styles/loadAndError.css"/>" />
</head>

<body>
	<div id="loadingImg"><img src="<s:url value='/images/common/error_cn.gif'/>"></div>
	<div id="errorMsg"><b><font color="red"><s:property value="%{getText(errorMessage)}"/></font></b></div>
	<div id="chooseFunc"><b><s:text name="global.errors.chooseFunc"/><s:text name='global.colon'/></b></div>
	<div id="back2home"><a href="<s:url value='/pages/homePage.jsp'/>"><b>&gt;
     				       <s:text name="global.errors.back2home"/>&nbsp;</b></font></a>
    </div>
	<div id="back2front"><a href="<s:url value='/pages/global/loading.jsp'/>"><b>&gt;
     				       <s:text name="global.errors.back2front"/>&nbsp;</b></font></a>
    </div>
    <div id="mailAdmin"><a href="#"><b>&gt;
     				       <s:text name="global.errors.mailAdmin"/>&nbsp;</b></font></a>
    </div>
</body>
	
</html>

