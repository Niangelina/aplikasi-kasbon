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

<link type="text/css" href="<%=request.getContextPath()%>/resources/css/ui-lightness/jquery-ui-1.8.14.custom.css" rel="stylesheet" />	
<script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/jquery-1.5.1.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/jquery-ui-1.8.14.custom.min.js"></script>

<script type="text/javascript">
	$(function(){

		// Datepicker
		$('input[name=waktuPengajuan]').datepicker({
			format: 'yyyy-mm-dd'
		});
		
	});
</script>

<title>Form Pengajuan Pinjaman</title>
</head>
<body>
	<h1>Form Pengajuan Pinjaman</h1>
	
	<form:form modelAttribute="pengajuan">
	
		<table>
			<tr>
				<td>Karyawan</td>
				<td>
				<form:select path="pemohon">
						<form:option value="-" label="--Please Select" />
						<form:options items="${karyawanList}" 
							itemValue="id"
							itemLabel="nama" />
					</form:select></td>
				<td><form:errors path="pemohon"></form:errors></td>
			</tr>
			<tr>
				<td>Tanggal Pengajuan</td>
				<td><form:input path="waktuPengajuan"></form:input></td>
				<td><form:errors path="waktuPengajuan"></form:errors></td>
			</tr>
			<tr>
				<td>Nilai Pinjaman</td>
				<td><form:input path="nilai"></form:input></td>
				<td><form:errors path="nilai"></form:errors></td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td><input type="submit" value="Simpan" /></td>
				<td>&nbsp;</td>
			</tr>
		</table>
	
	</form:form>
	
</body>
</html>