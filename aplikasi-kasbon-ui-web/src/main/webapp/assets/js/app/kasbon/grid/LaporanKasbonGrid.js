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


Ext.define('kasbon.grid.LaporanKasbonGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.kasbon.grid.LaporanKasbonGrid',
    id: 'kasbon.grid.LaporanKasbonGrid',
    title: 'Grid Panel',
        height: 350,
    width: 650,
    padding: 10,
    collapsible: true, 
    initComponent: function() {
        this.columns = [
        {
          
            dataIndex: 'tanggal',
            header: 'Tanggal',
            sortable: true,
            width: 100
        },
        {
            
            dataIndex: 'uraian',
            header: 'Uraian',
            sortable: true,
            width: 100,
            align: 'right'
        },
        {
            
            dataIndex: 'nilai',
            header: 'Nilai',
            sortable: true,
            width: 100
        },
        {
           
            dataIndex: 'saldo',
            header: 'Saldo Akhir',
            sortable: true,
            width: 100
        }
        ];
        
         this.store = new Ext.data.Store({
            model: 'kasbon.model.LaporanKasbonModel',
            data: [
            {
                tanggal: '1-Jul-2011',
                uraian: 'didi',
                nilai: '2000',
                saldo: '120000'
            },
            {
                tanggal: '5-Jul-2011',
                uraian: 'didi',
                nilai: '2000',
                saldo: '3000000'
            },
            {
                tanggal: '8-Jul-2011',
                uraian: 'didi',
                nilai: '2000',
                saldo: '6000000'
            },
                    
            ]
                
        })
        
       kasbon.grid.LaporanKasbonGrid.superclass.initComponent.call(this);
    }
});
