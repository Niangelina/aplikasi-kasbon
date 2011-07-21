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
 * Home controller for billing application
 *
 * @property auth $auth
 *
 * @author Anton Raharja
 *
 */
class Welcome extends CI_Controller {

	function __construct() {
		parent::__construct();
                $this->load->library(array('oborci/Auth'));
		$this->auth->validate();
	}

	/**
	 * Index Page for this controller.
         * @param string $param Is 'ajax' or NULL
	 *
	 */
	public function index($param=NULL) {
                if ($this->auth->get_access()) {
                        $this->load->view('dashboard_view');
                } else {
                        $this->load->view('login_view');
                }
	}
                
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
