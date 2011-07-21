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

Ext.define('kasbon.grid.pegawai_grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.kasbon.grid.pegawai_grid',
    title: 'Pegawai List',
    height: 200,
    width: 500,
    collapsible: true,           
    initComponent: function() {
        
        this.columns = [
             
        {
                
            dataIndex: 'kode',
            header: 'Kode Pegawai',
            width: 150,
            sortable: true
               
        },
        {
                
            dataIndex: 'nama',
            header: 'Nama Pegawai',
            width: 150,
            sortable: true
        },
        {
                
            dataIndex: 'jabatan',
            header: 'Jabatan',
            width: 150,
            sortable: true
        }
            
        ];
            
        this.store = new Ext.data.Store({
            model: 'kasbon.model.m_pegawaiModel',
            data: [
            {
                kode: 'feldy',
                nama: 'didi',
                jabatan: 'f3ldy10rpl@gmail.com'
            },
            {
                kode: 'feldy',
                nama: 'didi',
                jabatan: 'f3ldy10rpl@gmail.com'
            },
            {
                kode: 'feldy',
                nama: 'didi',
                jabatan: 'f3ldy10rpl@gmail.com'
            }
                    
            ]
                
        })
        kasbon.grid.pegawai_grid.superclass.initComponent.call(this);
    }
    
   
});




