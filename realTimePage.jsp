<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
String extPath = request.getContextPath();
String extBasePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+extPath+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>ExtTop - Desktop Sample App</title>
<!-- CSS -->
<!-- Extjs 核心样式库 -->
<link rel="stylesheet" type="text/css" href="<%=extPath %>/ext/resources/css/ext-all.css" />

<!-- JavaScript -->
<!-- 定义Extjs常量 -->
<script type="text/javascript">
	//域路径
	var extPath = '<%=extPath%>';
	//域名访问路径
	var extBasePath = '<%=extBasePath%>';

	
</script>
<!-- Extjs 核心脚本 -->
<script type="text/javascript" src="<%=extPath %>/ext/ext-all.js"></script>
<!-- Extjs 中文脚本 
<script type="text/javascript" src="<%=extPath %>/ext/locale/ext-lang-zh_CN.js"></script>
-->

<!-- app -->
<script type="text/javascript" src="<%=extPath %>/ext/system/realTimeApp.js"></script>



</head>
<body>

</body>
</html>
