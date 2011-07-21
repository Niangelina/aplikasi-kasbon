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

Ext.define('kasbon.panel.pengajuanKasbonPanel', {
    extend : 'Ext.panel.Panel',
    alias : 'widget.kasbon.panel.pengajuanKasbonPanel',
    id : 'kasbon.panel.pengajuanKasbonPanel',
    title: 'Pengajuan Kasbon',
    width: 500,
    height: 200,
    
    
    initComponent: function() {
        this.items = 
        {
            xtype: 'kasbon.form.pengajuanKasbonForm'
            
        };
        this.tbar = {
            xtype: 'kasbon.toolbar.CrudToolbar'
           
        };
       
        kasbon.panel.pengajuanKasbonPanel.superclass.initComponent.call(this);
    }
    
    
       
});
