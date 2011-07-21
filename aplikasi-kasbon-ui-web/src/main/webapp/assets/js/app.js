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
// Register namespaces and their corresponding paths to Ext.Loader
Ext.Loader.setPath({
    'kasbon': 'assets/js/app/kasbon'
});

// Specify a list of classes your application your application needs
Ext.require([
    'Ext.container.Viewport',
    'Ext.layout.container.Border',
    'Ext.menu.Menu',
    'Ext.form.Label',
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.state.*',
    'kasbon.grid.pegawai_grid',
    'kasbon.grid.ApprovalGrid',
    'kasbon.grid.LaporanKasbonGrid',
    'kasbon.grid.UserManagementGrid',
    'kasbon.form.pengajuanKasbonForm',
    'kasbon.form.UserManagementForm',
    'kasbon.form.m_pegawaiForm',
    'kasbon.form.pelunasanKasbonForm',
    'kasbon.form.pencairanKasbonForm',
    'kasbon.toolbar.CrudToolbar',
    'kasbon.model.ApprovalModel',
    'kasbon.model.pengajuanKasbon',
    'kasbon.model.m_pegawaiModel',
    'kasbon.model.LaporanKasbonModel',
    'kasbon.panel.ApprovalPanel',
    'kasbon.panel.LaporanKasbonPanel',
    'kasbon.panel.pengajuanKasbonPanel',
    'kasbon.panel.pencairanKasbonPanel',
    'kasbon.panel.CenterPanel',
    'kasbon.panel.PegawaiPanel',
    'kasbon.panel.UserManagementPanel',
    'kasbon.panel.MainPanel',
    'kasbon.panel.pelunasanKasbonPanel',
    ]);

// Application's initialization
Ext.onReady(function() {
    var win = Ext.create('Ext.container.Viewport', {
        id: 'mainScreen',
        layout: 'fit',
        plain: true,
        closable: false,
        items: [
        {
            xtype : 'kasbon.panel.MainPanel'
        }
        ]
    });
    win.show();
});
