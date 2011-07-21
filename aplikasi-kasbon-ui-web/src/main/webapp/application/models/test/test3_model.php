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
 * Test3 model
 *
 * @author Anton Raharja
 */
class Test3_model extends Oborci_Model {

	protected $db_table = 'oci_preferences';

        protected $db_relations = array(
            // with oci_users we have belongs_to relation on (their) key 'preference_id'
            // belongs_to: each of us belongs_to one of them
            'oci_users' => array(
                'relation' => 'has_one',
                'key' => 'preferences',
            ),
        );

}

/* End of file test3_model.php */
/* Location: ./application/models/test3_model.php */

