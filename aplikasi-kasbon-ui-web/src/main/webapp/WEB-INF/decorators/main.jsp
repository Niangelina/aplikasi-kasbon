<!--

    Copyright (C) 2011 ArtiVisi Intermedia <info@artivisi.com>

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

            http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

-->

<%@ taglib uri="http://www.opensymphony.com/sitemesh/decorator" prefix="decorator" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title> <decorator:title></decorator:title> </title>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/style.css" media="screen" />
</head>
<body>
<div id="header">
	<div id="logo">
		<h1><a href="#">Aplikasi Kasbon</a></h1>
		<p>Template Design by <a href="http://www.freecsstemplates.org/"> CSS Templates</a></p>
	</div>
	<!-- end #logo -->
	<div id="menu">
		<ul>
			<li class="first"><a href="<%=request.getContextPath()%>">Home</a></li>
			<li><a href="<%=request.getContextPath()%>/j_spring_security_logout">Logout</a></li>
		</ul>
	</div>
	<!-- end #menu -->
</div>
<!-- end #header -->
<div id="page">
	<div id="content">
			<decorator:body></decorator:body>
			<div style="clear: both;">&nbsp;</div>
		
	</div>
	
	<!-- end #content -->
	<div id="sidebar">
			<ul>
				<li>
					<h2>Menu</h2>
					<ul>
						<li><a href="<%=request.getContextPath()%>/karyawan/list">Karyawan</a></li>
					</ul>
				</li>
			</ul>
	</div>
	<!-- end #sidebar -->
	<div style="clear: both;">&nbsp;</div>
</div>
<!-- end #page -->
<div id="footer">
	<p>&copy; 2008. All Rights Reserved. Design by <a href="http://www.freecsstemplates.org/">CSS Templates</a>.</p>
</div>
<!-- end #footer -->
</body>
</html>
