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
 * Menus management model
 *
 * @author Anton Raharja
 */
class oci_menus extends Oborci_Model {

	protected $db_table = 'oci_menus';
        
        protected $db_fields = array(
            'id' => 'id',
            'module' => 'module_id',
            'parent' => 'parent',
            'index' => 'index',
            'uri' => 'uri',
            'text' => 'text',
            'title' => 'title',
            'id_css' => 'id_css'
        );

        protected $db_primary_key = 'id';

        protected $db_relations = array(
            'oci_roles' => array(
                'relation' => 'has_and_belongs_to_many',
                'join_table' => 'oci_roles_screens',
                'join_key' => 'menu_id',
                'key' => 'role_id',
            )
        );
        
}

/* End of file oci_menus.php */
/* Location: ./application/models/oci_menus.php */
