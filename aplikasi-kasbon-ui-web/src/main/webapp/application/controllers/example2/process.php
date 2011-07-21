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
                $this->load->library(array('oborci/Auth', 'uri'));
	}

	/**
	 * Index Page for this controller.
         * @param string $param Is 'ajax' or NULL
	 *
	 */
	public function index($param=NULL) {
		redirect('example2/welcome');
	}

	/**
	 * Process login
         * @param string $param Is 'ajax' or NULL
	 */
	public function login($param=NULL) {
		$username = $this->input->post('username');
		$password = $this->input->post('password');
                if (! (empty($username) && empty($password))) {
                        if ($this->auth->authenticate($username, $password)) {
                                if ($this->auth->login()) {
                                        $data['output']['success'] = TRUE;
                                        $data['output']['message'] = t('Login successful');
                                } else {
                                        $data['output']['success'] = FALSE;
                                        $data['output']['message'] = t('Login successful but an error has occured');
                                }
                        } else {
                                $data['output']['success'] = FALSE;
                                $data['output']['message'] = t('Invalid login');
                        }
                } else {
                        $data['output']['success'] = FALSE;
                        $data['output']['message'] = t('Please input username and password');
                }
                // log_message('debug', "username:$username password:$password data:".print_r($data, TRUE));
                $this->load->view('example2/json_view', $data);
	}

	/**
	 * Process logout
         * @param string $param Is 'ajax' or NULL
	 */
	public function logout($param=NULL) {
		$this->auth->logout();
                redirect('example2/welcome');
	}

	/**
	 * Process unauthorized
         * @param string $param Is 'ajax' or NULL
	 */
	public function unauthorized($param=NULL) {
                $this->auth->logout();
                redirect('example2/welcome');
	}

}

/* End of file process.php */
/* Location: ./application/controllers/example2/process.php */
