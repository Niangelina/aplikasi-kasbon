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

Ext.define('kasbon.grid.ApprovalGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.kasbon.grid.ApprovalGrid',
    id: 'kasbon.grid.ApprovalGrid',
    title: 'Approval',
    height: 350,
    width: 750,
    padding: 10,
    collapsible: true, 
   
    initComponent: function() {
        this.items = {
            xtype: 'label',
            text: 'Approval Kasbon',
            region: 'north',
            width: 50,
            style: 'font-size: 30px;\n\
text-decoration: underline;',
            height: 30,
            margin: '0 0 0 25',
            padding: '70 0 0 0'
       
          
        };
        this.columns = [
             
        {
           
            dataIndex: 'tanggal',
            header: 'Tanggal',
            width: 150,
            sortable: true,
            editor :{
                xtype: 'datefield'
            }
               
        },
        {
           
            dataIndex: 'pegawai',
            header: 'Pegawai',
            width: 150,
            sortable: true,
            editor :{
                xtype: 'textfield'
            }
        },
        {
           
            dataIndex: 'nilai',
            header: 'Nilai',
            width: 150,
            sortable: true,
            editor :{
                xtype: 'numberfield'
            }
        },
        {
            
            dataIndex: 'approval',
            header: 'Approval',
            width: 150,
            sortable: true,
            editor :{
                xtype: 'checkbox',
                text: 'Ya'
            }
        }
            
        ];
            
        this.store = new Ext.data.Store({
            model: 'kasbon.model.ApprovalModel',
            data: [
            {
                tanggal: '02021993',
                pegawai: 'didi',
                nilai: '2000',
                approval: true
            },
            {
                tanggal: '02021993',
                pegawai: 'didi',
                nilai: '2000',
                approval: true
            },
            {
                
                tanggal: 'feldy',
                pegawai: 'didi',
                nilai: '2000',
                approval: false
            }
                    
            ]
                
        })
            
     
        kasbon.grid.ApprovalGrid.superclass.initComponent.call(this);
    }
    
   
});




