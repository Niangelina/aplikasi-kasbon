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
Ext.define('kasbon.panel.pelunasanKasbonPanel', {
    extend : 'Ext.panel.Panel',
    alias : 'widget.kasbon.panel.pelunasanKasbonPanel',
    id : 'kasbon.panel.pelunasanKasbonPanel',
    title: 'Entry  Pelunasan',
    width: 500,
    height: 300,
    titleCollapse: true,
    collapsible: true,
    padding: 10,
    initComponent : function() {
        this.items = 
        {
            xtype: 'kasbon.form.pelunasanKasbonForm'
            
        };
        this.tbar = {
            xtype: 'kasbon.toolbar.CrudToolbar'
           
        };
        kasbon.panel.pelunasanKasbonPanel.superclass.initComponent.call(this);
    }
});