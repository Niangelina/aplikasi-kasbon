package com.artivisi.kasbon.service.impl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.artivisi.kasbon.domain.Karyawan;
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

}
