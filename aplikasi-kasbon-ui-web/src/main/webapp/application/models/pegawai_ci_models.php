<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Pegawai_ci_models extends Oborci_Model {

    protected $db_table = 'm_pegawai';
    protected $db_fields = array(
        'id' => 'id',
        'nip' => 'nip',
        'nama' => 'nama',
        'jabatan' => 'jabatan',
        'no_hp1' => 'no_hp1',
        'no_hp2' => 'no_hp2'
    );
    protected $db_primary_key = 'id';

}
