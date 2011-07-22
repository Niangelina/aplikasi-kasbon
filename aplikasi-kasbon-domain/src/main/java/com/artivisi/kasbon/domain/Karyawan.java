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

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

@Entity
@Table(
		name="m_karyawan",
		uniqueConstraints=@UniqueConstraint(columnNames={"nip"})
)
public class Karyawan {
	@Id @GeneratedValue
	private Long id;
	
	@NotNull
	@NotEmpty
	@Size(max=100)
	@Column(nullable=false, length=100)
	private String nip;
	
	@NotNull
	@NotEmpty
	@Size(max=255)
	@Column(nullable=false)
	private String nama;
	
	@NotNull
	@Min(1)
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
