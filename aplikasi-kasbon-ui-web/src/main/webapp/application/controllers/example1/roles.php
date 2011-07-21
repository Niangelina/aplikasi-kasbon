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

/**
 * Roles controller
 *
 * @property auth $auth
 * @property crud $crud
 * @property themes $themes
 *
 * @author Anton Raharja
 *
 */
class Roles extends CI_Controller {

	function __construct() {
		parent::__construct();
                $this->load->model(array('example1/themes'));
                $this->load->library(array('oborci/Auth', 'oborci/Crud'));
		$this->auth->validate();
	}

	/**
	 * Helper function which creates grid for CRUD service on index page
	 * @return string HTML of CRUD grid
	 */
	private function _get_crud_for_index() {		
		$data = array(
			'insert' => array(
				array ('name' => 'name', 'label' => t('Role name'), 'type' => 'input',
					'rules' => array('unique', 'required', array('max_length' => 30, 'min_length' => 3), 'trim'),),
			),
			'select' => array(
				array('name' => 'id', 'label' => 'ID', 'rules' => array('key', 'hidden', 'trim'),),
				array('name' => 'name',	'label' => t('Role name'), 'link' => 'example1/acl/screens/{id}', 
					'rules' => array('trim', 'htmlspecialchars'),),
			),
			'update' => array(
				array('name' => 'name',	'label' => t('Role name'), 'type' => 'input', 
					'rules' => array('unique', 'required', array('max_length' => 30, 'min_length' => 3), 'trim'),),
			),
			'delete' => array(
				array('name' => 'name', 'label' => t('Role name'),),
			),
                        'search' => array('name' => t('Role name')),
			'datasource' => array(
				'table' => 'oci_roles',
			),
			'properties' => array(
				'name' => 'roles',
				'uri' => 'example1/roles/index',
				'index_column' => TRUE,
				'index_column_start' => 1,
                                'pagination' => TRUE,
				'pagination_per_page' => 5,
				'insert' => TRUE,
				'update' => TRUE,
				'delete' => TRUE,
				'crud_title' => NULL,
				'crud_form_title' => '<h2>'.t('List of Roles').'</h2>',
				'insert_form_title' => '<h2>'.t('Insert Data').'</h2>',
				'update_form_title' => '<h2>'.t('Update Data').'</h2>',
				'delete_form_title' => '<h2>'.t('Delete Data').'</h2>',
			),
		);
		$this->crud->set_data($data);
		return $this->crud->render();
	}

	/**
	 * Helper function which creates grid for CRUD service on members page
	 * @return string HTML of CRUD grid
	 */
	private function _get_crud_for_members($role_id=NULL) {
		$data = array(
			'select' => array(
				array('name' => 'id', 'label' => 'ID', 
					'rules' => array('key', 'hidden', 'trim'),),
				array('name' => 'username', 'label' => 'Username', 'link' => 'example1/preference/show/{id}',
					'rules' => array('trim',  'htmlspecialchars'),),
			),
                        'search' => array('id', 'username'),
			'datasource' => array(
				'table' => 'oci_users',
				'where' => array('role_id' => $role_id),
			),
			'properties' => array(
				'name' => 'roles_members',
				'uri' => 'example1/roles/members/'.$role_id,
				'index_column' => TRUE,
				'index_column_start' => 1,
                                'pagination' => FALSE,
				'pagination_per_page' => 5,
				'crud_title' => NULL,
				'crud_form_title' => '<h2>'.t('List of Members').'</h2>',
				'insert_form_title' => '<h2>'.t('Insert Data').'</h2>',
				'update_form_title' => '<h2>'.t('Update Data').'</h2>',
				'delete_form_title' => '<h2>'.t('Delete Data').'</h2>',
			),
		);
		$this->crud->set_data($data);
		return $this->crud->render();
	}
	
	/**
	 * Index page
	 * @param array $param Parameters
	 */
	public function index($param=NULL) {
		if ($this->auth->get_access()) {
			$data['menu']['box'] = $this->themes->menu_box();
			$data['login'] = $this->themes->get_login();
			$data['crud'] = $this->_get_crud_for_index();
			$this->load->view('example1/roles_view', $data);
		} else {
			redirect('example1/process/unauthorized');
		}
	}
	
	/**
         * Members page
         * @param array $param Parameters 
         */
        public function members($param=NULL) {
		if ($this->auth->get_access()) {
			$data['menu']['box'] = $this->themes->menu_box();
			$data['login'] = $this->themes->get_login();
			$data['crud'] = $this->_get_crud_for_members($param);
			$this->load->view('example1/roles_members_view', $data);
		} else {
			redirect('example1/process/unauthorized');
		}
	}

}

/* End of file roles.php */
/* Location: ./application/controllers/roles.php */
