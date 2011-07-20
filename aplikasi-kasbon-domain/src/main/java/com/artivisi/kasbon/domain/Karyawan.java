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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNip() {
		return nip;
	}

	public void setNip(String nip) {
		this.nip = nip;
	}

	public String getNama() {
		return nama;
	}

	public void setNama(String nama) {
		this.nama = nama;
	}

	public BigDecimal getPlafon() {
		return plafon;
	}

	public void setPlafon(BigDecimal plafon) {
		this.plafon = plafon;
	}
	
	
}
