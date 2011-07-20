package com.artivisi.kasbon.domain;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="t_pencairan")
public class Pencairan {
	@Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
	private String id;
	
	@ManyToOne 
	@JoinColumn(name="id_pinjaman", nullable=false)
	private Pinjaman pinjaman;
	
	@ManyToOne
	@JoinColumn(name="id_kasir", nullable=false)
	private Karyawan kasir;
	
	@Column(name="waktu_pencairan", nullable=false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date waktuPencairan = new Date();
	
	@Column(nullable=false)
	private BigDecimal nilai;
}
