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

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.artivisi.kasbon.domain.Pengajuan;
import com.artivisi.kasbon.service.KasbonService;


@Controller
public class PengajuanController {
	@Autowired private KasbonService kasbonService;
	
	@RequestMapping(value="/pengajuan/form", method=RequestMethod.GET)
	public ModelMap displayForm(){
		ModelMap mm = new ModelMap();
		
		mm.addAttribute(kasbonService.findAllKaryawan(0, 10));
		mm.addAttribute(new Pengajuan());
		
		return mm;
	}
}
