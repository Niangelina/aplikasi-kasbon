<?php

if (!defined('BASEPATH'))
exit('No direct script access allowed');

/**
 * Master Pegwai
 *
 * @author Fanani M. Ihsan
 */
class Sec_user extends Oborci_Model {

    protected $db_table = 'sec_user';
    protected $db_fields = array(
        'username' => 'username',
        'password' => 'password',
        'nip' => 'nip',
        'id_role' => 'id_role'
    );
    protected $db_primary_key = 'username';

}

/* End of file pegawai.php */
/* Location: ./application/models/pegawai.php 