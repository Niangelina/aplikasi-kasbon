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
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
@Table(name="t_pengajuan")
public class Pengajuan {
	@Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
	private String id;
	
	@Column(name="waktu_pengajuan", nullable=false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date waktuPengajuan;
	
	@ManyToOne
	@JoinColumn(name="id_pemohon", nullable=false)
	private Karyawan pemohon;
	
	@Column(nullable=false)
	private BigDecimal nilai;
	
	@OneToOne(mappedBy="pengajuan")
	private Persetujuan persetujuan;
	
	@Enumerated(EnumType.STRING)
	@Column(nullable=false)
	private StatusPinjaman status = StatusPinjaman.DIAJUKAN;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Date getWaktuPengajuan() {
		return waktuPengajuan;
	}

	public void setWaktuPengajuan(Date waktuPengajuan) {
		this.waktuPengajuan = waktuPengajuan;
	}

	public Karyawan getPemohon() {
		return pemohon;
	}

	public void setPemohon(Karyawan pemohon) {
		this.pemohon = pemohon;
	}

	public BigDecimal getNilai() {
		return nilai;
	}

	public void setNilai(BigDecimal nilai) {
		this.nilai = nilai;
	}

	public Persetujuan getPersetujuan() {
		return persetujuan;
	}

	public void setPersetujuan(Persetujuan persetujuan) {
		this.persetujuan = persetujuan;
	}

	public StatusPinjaman getStatus() {
		return status;
	}

	public void setStatus(StatusPinjaman status) {
		this.status = status;
	}
	
	
	
}
