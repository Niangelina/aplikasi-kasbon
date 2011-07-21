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
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="t_pembayaran")
public class Pembayaran {
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
	
	@Column(name="waktu_pembayaran", nullable=false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date waktuPembayaran = new Date();
	
	@Column(nullable=false)
	private BigDecimal nilai;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Pinjaman getPinjaman() {
		return pinjaman;
	}

	public void setPinjaman(Pinjaman pinjaman) {
		this.pinjaman = pinjaman;
	}

	public Karyawan getKasir() {
		return kasir;
	}

	public void setKasir(Karyawan kasir) {
		this.kasir = kasir;
	}

	public Date getWaktuPembayaran() {
		return waktuPembayaran;
	}

	public void setWaktuPembayaran(Date waktuPembayaran) {
		this.waktuPembayaran = waktuPembayaran;
	}

	public BigDecimal getNilai() {
		return nilai;
	}

	public void setNilai(BigDecimal nilai) {
		this.nilai = nilai;
	}
	
	
}
