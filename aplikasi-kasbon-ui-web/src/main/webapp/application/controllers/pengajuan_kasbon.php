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

class Pengajuan_kasbon extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model(array('PengajuanKasbon'));
        $this->load->library(array('oborci/Auth', 'oborci/Crud'));
        $this->auth->validate();
    }

	private function _get_data(){
    	// USE THIS:
    	// https://github.com/antonraharja/oborci/wiki/Oborci-Extended-CI-Model
    	$data['data'] = $this->PengajuanKasbon->find_all();
    	return $data;
    }

    private function _get_crud_for_index() {
        $data = array(
            'select' => array(
                array('name' => 'id', 'rules' => array('key', 'hidden')),
                array('name' => 'name', 'label' => t('Nama')),
                array('name' => 'description', 'label' => t('Deksripsi')),
            ),
            'insert' => array(
                array('name' => 'name', 'label' => t('name'), 'type' => 'input', 'rules' => array('required')),
                array('name' => 'description', 'label' => t('Deskripsi'), 'type' => 'input', 'rules' => array('required')),
            ),
            'delete' => array(
                array('name' => 'name', 'label' => t('name'), 'type' => 'input'),
                array('name' => 'description', 'label' => t('Deskripsi'), 'type' => 'input'),
            ),
            'update' => array(
                array('name' => 'name', 'label' => t('name'), 'type' => 'input', 'rules' => array('required')),
                array('name' => 'description', 'label' => t('Deskripsi'), 'type' => 'input', 'rules' => array('required')),
            ),
            'datasource' => array(
                'table' => 'm_tariff_group'
            ),
            'properties' => array(
                'name' => 'm_tariff_group',
                'uri' => 'm_tariff_group/index',
                'index_column' => TRUE,
                'index_column_start' => 1,
                'pagination_per_page' => 5,
                'pagination' => FALSE,
                'insert' => TRUE,
                'update' => TRUE,
                'delete' => TRUE,
                'crud_form_title' => '<h2>' . t('List of Tariff Group') . '</h2>',
                'insert_form_title' => '<h2>' . t('Insert Data') . '</h2>',
                'update_form_title' => '<h2>' . t('Update Data') . '</h2>',
                'delete_form_title' => '<h2>' . t('Delete Data') . '</h2>',
            )
        );
        $this->crud->set_data($data);
        $crud = $this->crud->render();
        return $crud;
    }

    public function index() {
        $data['crud'] = $this->_get_crud_for_index();
        $this->load->view('m_tariff_group_view', $data);
    }
    
	public function save(){
    	$j_id = $this->input->post('id'); //check id for existing record
    	$j_name = $this->input->post('name');
    	$j_description = $this->input->post('description');
    	$results = FALSE;
    	

    	if($j_id) { // existing record, update
    		if ($j_name && $j_description) {
	    		$inputs = array(
	    			'name' => $j_name,
	    			'description' => $j_description
	    		);
	    		$results = $this->PengajuanKasbon->update($j_id, $inputs);
	    	}
    	} else { // new record, insert
	    	if ($j_name && $j_description) {
	    		$inputs = array(
	    			'name' => $j_name,
	    			'description' => $j_description
	    		);
	    		$results = $this->PengajuanKasbon->insert($inputs);
	    	}
    	}
    	
    	
    	if ($results) {
    		$data['output'] = array('success' => TRUE);
    	} else {
    		$data['output'] = array('success' => FALSE);
    	}
    	$this->load->view('json_view', $data);
    }
    
	public function delete(){
    	$j_id = $this->input->post('id'); 
    	
    	if(!$j_id) {
    		$this->load->view('json_view', array('output' => array('success' => FALSE)));
    		return;
    	}
    	
    	$results = $this->PengajuanKasbon->delete($j_id);
    	if ($results) {
    		$data['output'] = array('success' => TRUE);
    	} else {
    		$data['output'] = array('success' => FALSE);
    	}
    	$this->load->view('json_view', $data);
    }

    public function jsonlist() {
        $data['output'] = $this->_get_data();
        $this->load->view('json_view', $data);
    }

}

?>