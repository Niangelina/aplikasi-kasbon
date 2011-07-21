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
package com.artivisi.kasbon.service;

import java.util.Date;
import java.util.List;

import com.artivisi.kasbon.domain.Karyawan;
import com.artivisi.kasbon.domain.Pembayaran;
import com.artivisi.kasbon.domain.Pencairan;
import com.artivisi.kasbon.domain.Pengajuan;
import com.artivisi.kasbon.domain.Persetujuan;
import com.artivisi.kasbon.domain.Pinjaman;
import com.artivisi.kasbon.domain.StatusPinjaman;

public interface KasbonService {
	// service yang berkaitan dengan karyawan
	public void save(Karyawan k);
	public Karyawan findById(Long id);
	public List<Karyawan> findAllKaryawan(Integer start, Integer rows);
	public Long countAllKaryawan();
	public List<Karyawan> findKaryawanByNama(String nama);
	public Karyawan findKaryawanByNip(String nip);
	
	// service yang berkaitan dengan pengajuan
	public void save(Pengajuan p);
	public List<Pengajuan> findPengajuanByKaryawan(Karyawan k, Integer start, Integer rows);
	public Long countPengajuanByKaryawan(Karyawan k);
	
	public List<Pengajuan> findPengajuanByPeriode(Date mulai, Date sampai, Integer start, Integer rows);
	public Long countPengajuanByPeriode(Date mulai, Date sampai);
	
	public List<Pengajuan> findPengajuanByKaryawanAndPeriode(Karyawan k, Date mulai, Date sampai, Integer start, Integer rows);
	public Long countPengajuanByKaryawanAndPeriode(Karyawan k, Date mulai, Date sampai);
	
	public List<Pengajuan> findPengajuanByStatus(StatusPinjaman s, Integer start, Integer rows);
	public Long countPengajuanByStatus(StatusPinjaman s);
	
	// service yang berkaitan dengan persetujuan
	public void save(Persetujuan p);
	
	// service yang berkaitan dengan pinjaman
	public void save(Pinjaman p);
	
	// service yang berkaitan dengan pencairan
	public void save(Pencairan p);
	
	// service yang berkaitan dengan pembayaran
	public void save(Pembayaran p);
}
