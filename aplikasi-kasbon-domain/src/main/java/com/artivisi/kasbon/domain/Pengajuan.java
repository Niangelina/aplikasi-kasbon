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
@Table(name="t_pengajuan")
public class Pengajuan {
	@Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
	private String id;
	
	@Column(name="waktu_pengajuan", nullable=false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date waktuPengajuan = new Date();
	
	@ManyToOne
	@JoinColumn(name="id_pemohon", nullable=false)
	private Karyawan pemohon;
	
	@Column(nullable=false)
	private BigDecimal nilai;
}
