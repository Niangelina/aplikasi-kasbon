<?php

class Pegawai_ci_controllers extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model(array('pegawai_ci_models'));
        $this->load->library(array('oborci/Auth', 'oborci/Crud'));
        $this->auth->validate();
    }

    private function _get_data() {
        // USE THIS:
        // https://github.com/antonraharja/oborci/wiki/Oborci-Extended-CI-Model
        $data['data'] = $this->pegawai_ci_models->find_all();
        return $data;
    }

    public function jsonlist() {
        $data['output'] = $this->_get_data();
        $this->load->view('json_view', $data);
    }

    public function save() {
        $j_nip = $this->input->post('nip'); //check id for existing record
        $j_id = $this->input->post('id');
        $j_nama = $this->input->post('nama');
        $j_jabatan = $this->input->post('jabatan');
        $j_no_hp1 = $this->input->post('no_hp1');
        $j_no_hp2 = $this->input->post('no_hp2');
        $results = FALSE;


        if ($j_id) { // existing record, update
            if ($j_nip && $j_nama && $j_jabatan && $j_no_hp1 && $j_no_hp2) {
                $inputs = array(
                    'nip' => $j_nip,
                    'nama' => $j_nama,
                    'jabatan' => $j_jabatan,
                    'no_hp1' => $j_no_hp1,
                    'no_hp2' => $j_no_hp2
                );
                $results = $this->pegawai_ci_models->update($j_id, $inputs);
            }
        } else { // new record, insert
            if ($j_nip && $j_nama && $j_jabatan && $j_no_hp1 && $j_no_hp2) {
                $inputs = array(
                    'nip' => $j_nip,
                    'nama' => $j_nama,
                    'jabatan' => $j_jabatan,
                    'no_hp1' => $j_no_hp1,
                    'no_hp2' => $j_no_hp2
                );
                $results = $this->pegawai_ci_models->insert($inputs);
            }
        }


        if ($results) {
            $data['output'] = array('success' => TRUE);
        } else {
            $data['output'] = array('success' => FALSE);
        }
        $this->load->view('json_view', $data);
    }

    public function delete() {
        $j_id = $this->input->post('id');

        if (!$j_id) {
            $this->load->view('json_view', array('output' => array('success' => FALSE)));
            return;
        }

        $results = $this->pegawai_ci_models->delete($j_id);
        if ($results) {
            $data['output'] = array('success' => TRUE);
        } else {
            $data['output'] = array('success' => FALSE);
        }
        $this->load->view('json_view', $data);
    }

}

?>