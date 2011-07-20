package com.artivisi.kasbon.domain;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.GenericGenerator;

@Entity 
@Table(name="t_persetujuan")
public class Persetujuan {
	@Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
	private String id;
	
	@Column(name="waktu_persetujuan", nullable=false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date waktuPersetujuan = new Date();
	
	@ManyToOne
	@JoinColumn(name="id_petugas", nullable=false)
	private Karyawan petugas;
	
	@OneToOne
	@JoinColumn(name="id_pengajuan", nullable=false)
	private Pengajuan pengajuan;
	
	@Column(nullable=false)
	private BigDecimal nilai;
}
