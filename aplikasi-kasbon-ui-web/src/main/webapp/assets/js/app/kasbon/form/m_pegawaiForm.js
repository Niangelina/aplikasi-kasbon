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
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('kasbon.form.m_pegawaiForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.kasbon.form.m_pegawaiForm',
    title: 'Input Pegawai',
    region: 'north',
    height: 300,
    width: 500  ,
    titleCollapse: true,
    collapsible: true,
    initComponent: function() {
        this.items = [
        {
            xtype: 'textfield',
            fieldLabel: 'Kode Pegawai',
            anchor: '55%',
            margin: '0 0 0 15',
            padding: '20 0 0 0'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Nama Pegawai',
            anchor: '55%',
            margin: '0 0 0 15',
            padding: '20 0 0 0'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Jabatan',
            anchor: '55%',
            margin: '0 0 0 15',
            padding: '20 0 20 0'
        }
        ];
        kasbon.form.m_pegawaiForm.superclass.initComponent.call(this);
    }
});
