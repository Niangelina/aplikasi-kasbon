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

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Date getWaktuPersetujuan() {
		return waktuPersetujuan;
	}

	public void setWaktuPersetujuan(Date waktuPersetujuan) {
		this.waktuPersetujuan = waktuPersetujuan;
	}

	public Karyawan getPetugas() {
		return petugas;
	}

	public void setPetugas(Karyawan petugas) {
		this.petugas = petugas;
	}

	public Pengajuan getPengajuan() {
		return pengajuan;
	}

	public void setPengajuan(Pengajuan pengajuan) {
		this.pengajuan = pengajuan;
	}

	public BigDecimal getNilai() {
		return nilai;
	}

	public void setNilai(BigDecimal nilai) {
		this.nilai = nilai;
	}
	
	
}
