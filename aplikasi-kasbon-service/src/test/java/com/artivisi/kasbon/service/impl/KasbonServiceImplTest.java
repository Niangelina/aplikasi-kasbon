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
		String sql = "truncate m_karyawan";
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
