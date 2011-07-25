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
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Daftar Karyawan</title>
</head>
<body>
	<div class="post">
		<h2 class="title">Welcome to our website </h2>
		<p class="byline"><small>Posted by FreeCssTemplates</small></p>
		<div class="entry">
	<h1>Daftar Karyawan</h1>

	<form method="get">

		Nama : <input type="text" name="nama" /> <input type="submit" value="Cari" />

	</form>

	<table>
		<thead>
			<tr>
				<th>NIP</th>
				<th>Nama</th>
				<th>Plafon</th>
				<th>&nbsp;</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="k" items="${karyawanList}">
				<tr>
					<td>${k.nip}</td>
					<td>${k.nama}</td>
					<td>${k.plafon}</td>
					<td>
						<a href="form?id=${k.id}">edit</a> | 
						<a href="delete?id=${k.id}">delete</a>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table></div></div>

</body>
</html>
