package com.artivisi.kasbon.domain;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(
		name="m_karyawan",
		uniqueConstraints=@UniqueConstraint(columnNames={"nip"})
)
public class Karyawan {
	@Id @GeneratedValue
	private Long id;
	
	@Column(nullable=false, length=100)
	private String nip;
	
	@Column(nullable=false)
	private String nama;
	
	@Column(nullable=false)
	private BigDecimal plafon;
}
