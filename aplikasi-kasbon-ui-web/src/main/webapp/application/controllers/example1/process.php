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
 * Process controller
 *
 * @property auth $auth
 * @property themes $themes
 *
 * @author Anton Raharja
 *
 */
class Process extends CI_Controller {

	function __construct() {
		parent::__construct();
                $this->load->model(array('example1/themes'));
                $this->load->library(array('oborci/Auth', 'uri'));
	}

	/**
	 * Index Page for this controller.
	 *
	 */
	public function index() {
		if ($this->session->userdata('login_state')) {
			redirect('example1/welcome');
		} else {
			$data['menu']['box'] = $this->themes->menu_box();
			$data['login']['form'] = $this->themes->login_form();
			$this->load->view('example1/process/unauthorized', $data);
		}
	}

	/**
	 * Process login
	 */
	public function login() {
		$ok = FALSE;
		$username = $this->input->post('username');
		$password = $this->input->post('password');
                if (! (empty($username) && empty($password))) {
                        if ($this->auth->authenticate($username, $password)) {
                                if ($this->auth->login()) {
                                        redirect('example1/welcome');
                                }
                        }
                        $data['login']['message'] = t('Invalid login');
                }
		$data['menu']['box'] = $this->themes->menu_box();
		$data['login']['form'] = $this->themes->login_form();
		$this->load->view('example1/process/login_view', $data);
	}

	/**
	 * Process logout
	 */
	public function logout() {
		$this->auth->logout();
		$data['menu']['box'] = $this->themes->menu_box();
		$this->load->view('example1/process/logout_view', $data);
	}

	/**
	 * Process unauthorized
	 */
	public function unauthorized() {
		$data['menu']['box'] = $this->themes->menu_box();
		$data['login']['form'] = $this->themes->login_form();
		$this->load->view('example1/process/unauthorized', $data);
	}

}

/* End of file process.php */
/* Location: ./application/controllers/process.php */
