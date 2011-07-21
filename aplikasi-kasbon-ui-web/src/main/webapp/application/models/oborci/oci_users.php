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
 * Users management model
 *
 * @author Anton Raharja
 */
class oci_users extends Oborci_Model {

	protected $db_table = 'oci_users';
        
        protected $db_fields = array(
            'id' => 'id',
            'role' => 'role_id',
            'preferences' => 'preference_id',
            'username' => 'username',
            'password' => 'password',
            'salt' => 'salt',
        );
        
        protected $db_primary_key = 'id';
        
        protected $db_relations = array(
            'oci_roles' => array(
                'relation' => 'belongs_to',
                'foreign_key' => 'role',
            ),
            'oci_preferences' => array(
                'relation' => 'belongs_to',
                'foreign_key' => 'preferences'
            ),
        );

}

/* End of file oci_users.php */
/* Location: ./application/models/oci_users.php */
