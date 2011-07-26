/**
 * Copyright (C) 2011 ArtiVisi Intermedia <info@artivisi.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.artivisi.kasbon.ui.springmvc.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class InfoController {
	
	@RequestMapping("/info/user")
	@ResponseBody
	public Map<String, Object> infoUser(){
		Map<String, Object> info = new HashMap<String, Object>();
		info.put("currentUser", 
				SecurityContextHolder.getContext()
				.getAuthentication().getName());
		
		SimpleDateFormat formatTanggal = new SimpleDateFormat("dd MMM yyyy");
		info.put("jamLogin", formatTanggal.format(new Date()));
		
		return info;
	}
}
