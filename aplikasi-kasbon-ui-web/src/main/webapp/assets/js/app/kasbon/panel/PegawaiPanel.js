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


Ext.define('kasbon.panel.PegawaiPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.kasbon.panel.PegawaiPanel',
    id : 'kasbon.panel.PegawaiPanel', //id=xtype supaya bisa display screen
    title: 'Master Pegawa Panel',
    width: 200,
    initComponent: function() {
        this.items = [
        {
            xtype: 'kasbon.form.m_pegawaiForm'
        },

        {
            xtype: 'kasbon.grid.pegawai_grid', 
            region: 'center'
        }
        ];
        this.tbar = {
            xtype: 'kasbon.toolbar.CrudToolbar'
           
        };
        kasbon.panel.PegawaiPanel.superclass.initComponent.call(this);
    }
});

