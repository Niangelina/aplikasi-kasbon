package com.artivisi.kasbon.service;

import java.util.List;

import com.artivisi.kasbon.domain.Karyawan;

public interface KasbonService {
	// service yang berkaitan dengan karyawan
	public void save(Karyawan k);
	public Karyawan findById(Long id);
	public List<Karyawan> findAllKaryawan(Integer start, Integer rows);
	public Long countAllKaryawan();
	public List<Karyawan> findKaryawanByNama(String nama);
	public Karyawan findKaryawanByNip(String nip);
}
