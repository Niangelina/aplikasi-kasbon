<?php
/*
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