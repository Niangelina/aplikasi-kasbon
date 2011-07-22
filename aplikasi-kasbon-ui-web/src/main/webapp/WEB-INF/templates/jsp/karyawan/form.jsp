<%--

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

--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Form Entri Karyawan</title>
</head>
<body>
	<h1>Form Entri Karyawan</h1>
	
	<form:form modelAttribute="karyawan">
	
	<table>
		<tr>
			<td>NIP</td>
			<td><form:input path="nip"/></td>
			<td><form:errors path="nip"></form:errors></td>
		</tr>
		<tr>
			<td>Nama</td>
			<td><form:input path="nama"></form:input></td>
			<td><form:errors path="nama"></form:errors></td>
		</tr>
		<tr>
			<td>Plafon</td>
			<td><form:input path="plafon"></form:input></td>
			<td><form:errors path="plafon"></form:errors></td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td><input type="submit" value="Simpan"/></td>
			<td></td>
		</tr>
	</table>
	
	</form:form>
	
	
</body>
</html>