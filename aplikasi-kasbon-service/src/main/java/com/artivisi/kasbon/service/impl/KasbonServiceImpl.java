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
package com.artivisi.kasbon.service.impl;

import java.util.Date;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.artivisi.kasbon.domain.Karyawan;
import com.artivisi.kasbon.domain.Pembayaran;
import com.artivisi.kasbon.domain.Pencairan;
import com.artivisi.kasbon.domain.Pengajuan;
import com.artivisi.kasbon.domain.Persetujuan;
import com.artivisi.kasbon.domain.Pinjaman;
import com.artivisi.kasbon.domain.StatusPinjaman;
import com.artivisi.kasbon.service.KasbonService;


@Service("kasbonService")
@Transactional
public class KasbonServiceImpl implements KasbonService {

	@Autowired private SessionFactory sessionFactory;
	
	@Override
	public void save(Karyawan k) {
		sessionFactory.getCurrentSession().saveOrUpdate(k);
	}

	@Override
	public Karyawan findById(Long id) {
		return (Karyawan) sessionFactory.getCurrentSession()
				.get(Karyawan.class, id);
	}

	@SuppressWarnings("unchecked")
	@Override
	@Transactional(readOnly=true)
	public List<Karyawan> findAllKaryawan(Integer start, Integer rows) {
		if(start == null || start < 0) start = 0;
		if(rows == null || rows < 0) rows = 20;
		return sessionFactory.getCurrentSession()
				.createQuery("select k from Karyawan k order by k.nip")
				.setFirstResult(start)
				.setMaxResults(rows)
				.list();
	}

	@Override
	@Transactional(readOnly=true)
	public Long countAllKaryawan() {
		return (Long) sessionFactory.getCurrentSession()
				.createQuery("select count(k) from Karyawan k")
				.uniqueResult();
	}

	@SuppressWarnings("unchecked")
	@Override
	@Transactional(readOnly=true)
	public List<Karyawan> findKaryawanByNama(String nama) {
		return sessionFactory.getCurrentSession()
				.createQuery("select k from Karyawan k " +
						"where k.nama = :nama " +
						"order by k.nip")
				.setString("nama", "%"+nama+"%")
				.list();
	}

	@Override
	@Transactional(readOnly=true)
	public Karyawan findKaryawanByNip(String nip) {
		return (Karyawan) sessionFactory.getCurrentSession()
				.createQuery("select k from Karyawan k " +
						"where k.nip = :nip " +
						"order by k.nip")
				.setString("nip", "%"+nip+"%")
				.uniqueResult();
	}

	@Override
	public void save(Pengajuan p) {
		sessionFactory.getCurrentSession().saveOrUpdate(p);
	}

	@SuppressWarnings("unchecked")
	@Override
	@Transactional(readOnly=false)
	public List<Pengajuan> findPengajuanByKaryawan(Karyawan k, Integer start,
			Integer rows) {
		String hql = "select p from Pengajuan p " +
				"where p.karyawan.id = :idKaryawan " +
				"order by p.waktuPengajuan ";
		
		if(start == null || start < 0) start = 0;
		if(rows == null || rows < 0) rows = 20;
		
		return sessionFactory.getCurrentSession()
				.createQuery(hql)
				.setParameter("idKaryawan", k.getId())
				.setFirstResult(start)
				.setMaxResults(rows)
				.list();
	}

	@Override
	public Long countPengajuanByKaryawan(Karyawan k) {
		String hql = "select count(p) from Pengajuan p " +
				"where p.karyawan.id = :idKaryawan ";
		return (Long) sessionFactory.getCurrentSession()
				.createQuery(hql)
				.setParameter("idKaryawan", k.getId())
				.uniqueResult();
	}

	@SuppressWarnings("unchecked")
	@Override
	@Transactional(readOnly=true)
	public List<Pengajuan> findPengajuanByPeriode(Date mulai, Date sampai,
			Integer start, Integer rows) {
		String hql = "select p from Pengajuan p " +
				"where p.waktuPengajuan between :mulai and :sampai " +
				"order by p.waktuPengajuan ";
		
		if(start == null || start < 0) start = 0;
		if(rows == null || rows < 0) rows = 20;
		
		return sessionFactory.getCurrentSession()
				.createQuery(hql)
				.setParameter("mulai", mulai)
				.setParameter("sampai", sampai)
				.setFirstResult(start)
				.setMaxResults(rows)
				.list();
	}

	@Override
	@Transactional(readOnly=true)
	public Long countPengajuanByPeriode(Date mulai, Date sampai) {
		String hql = "select count(p) from Pengajuan p " +
				"where p.waktuPengajuan between :mulai and :sampai ";
		
		return (Long) sessionFactory.getCurrentSession()
				.createQuery(hql)
				.setParameter("mulai", mulai)
				.setParameter("sampai", sampai)
				.uniqueResult();
	}

	@SuppressWarnings("unchecked")
	@Override
	@Transactional(readOnly=true)
	public List<Pengajuan> findPengajuanByKaryawanAndPeriode(Karyawan k,
			Date mulai, Date sampai, Integer start, Integer rows) {
		String hql = "select p from Pengajuan p " +
				"where p.waktuPengajuan between :mulai and :sampai " +
				"and p.karyawan.id = :idKaryawan " +
				"order by p.waktuPengajuan ";
		
		if(start == null || start < 0) start = 0;
		if(rows == null || rows < 0) rows = 20;
		
		return sessionFactory.getCurrentSession()
				.createQuery(hql)
				.setParameter("mulai", mulai)
				.setParameter("sampai", sampai)
				.setParameter("idKaryawan", k.getId())
				.setFirstResult(start)
				.setMaxResults(rows)
				.list();
	}

	@Override
	@Transactional(readOnly=false)
	public Long countPengajuanByKaryawanAndPeriode(Karyawan k, Date mulai,
			Date sampai) {
		String hql = "select count(p) from Pengajuan p " +
				"where p.waktuPengajuan between :mulai and :sampai " +
				"and p.karyawan.id = :idKaryawan ";
		
		return (Long) sessionFactory.getCurrentSession()
				.createQuery(hql)
				.setParameter("mulai", mulai)
				.setParameter("sampai", sampai)
				.setParameter("idKaryawan", k.getId())
				.uniqueResult();
	}

	@SuppressWarnings("unchecked")
	@Override
	@Transactional(readOnly=true)
	public List<Pengajuan> findPengajuanByStatus(StatusPinjaman s,
			Integer start, Integer rows) {
		String hql = "select p from Pengajuan p " +
				"where p.status = :status " +
				"order by p.waktuPengajuan ";
		
		if(start == null || start < 0) start = 0;
		if(rows == null || rows < 0) rows = 20;
		
		return sessionFactory.getCurrentSession()
				.createQuery(hql)
				.setParameter("status", s)
				.setFirstResult(start)
				.setMaxResults(rows)
				.list();
	}

	@Override
	public Long countPengajuanByStatus(StatusPinjaman s) {
		String hql = "select count(p) from Pengajuan p " +
				"where p.status = :status ";
		
		return (Long) sessionFactory.getCurrentSession()
				.createQuery(hql)
				.setParameter("status", s)
				.uniqueResult();
	}

	@Override
	public void save(Persetujuan p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void save(Pinjaman p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void save(Pencairan p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void save(Pembayaran p) {
		// TODO Auto-generated method stub
		
	}

}
