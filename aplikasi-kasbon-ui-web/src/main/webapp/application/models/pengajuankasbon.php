<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class PengajuanKasbon extends Oborci_Model {

    protected $db_table = 't_pengajuan_kasbon';
    protected $db_fields = array(
        'id_pengajuan_kasbon' => 'id_pengajuan_kasbon',
        'tgl_pengajuan' => 'tgl_pengajuan',
        'nip' => 'nip',
        'nilai' => 'nilai',
        'keterangan' => 'keterangan',
        'is_approve' => 'is_approve',
        'approve_date' => 'approve_date',
        'approved_by' => 'approved_by',
        'created_by' => 'created_by'
    );
    protected $db_primary_key = 'id_pengajuan_kasbon';
    protected $db_relations = array(
        'Sec_user' => array(
            'relation' => 'has_and_belongs_to_many',
            'join_table' => 'm_tariff_group_option',
            'join_key' => 'id_n_tariff_group',
            'key' => 'id_m_tariff_plan'
        )
    );

}