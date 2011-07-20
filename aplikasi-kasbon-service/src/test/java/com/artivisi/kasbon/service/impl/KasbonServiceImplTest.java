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
package com.artivisi.kasbon.service.impl;

import java.math.BigDecimal;
import java.sql.Connection;

import javax.sql.DataSource;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.artivisi.kasbon.domain.Karyawan;
import com.artivisi.kasbon.service.KasbonService;

public class KasbonServiceImplTest {

	private static KasbonService kasbonService;
	private static DataSource dataSource;
	
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		ApplicationContext ctx = 
				new ClassPathXmlApplicationContext("classpath*:com/artivisi/**/applicationContext.xml");
		kasbonService = (KasbonService) ctx.getBean("kasbonService");
		dataSource = (DataSource) ctx.getBean("dataSource");
	}

	@Before
	public void setUp() throws Exception {
		String sql = "delete from m_karyawan";
		Connection conn = dataSource.getConnection();
		conn.createStatement().executeUpdate(sql);
		conn.close();
	}

	@Test
	public void testSave() {
		Karyawan k = new Karyawan();
		k.setNip("123");
		k.setNama("Endy Muhardin");
		k.setPlafon(new BigDecimal(10000000));
		
		kasbonService.save(k);
		assertNotNull(k.getId());
		
		Karyawan k1 = kasbonService.findById(k.getId());
		assertNotNull(k1);
		assertEquals("123", k1.getNip());
	}

}
