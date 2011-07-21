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
    'kasbon.panel.LoginPanel'
]);

// Application's initialization
Ext.onReady(function() {
    var win = Ext.create('Ext.Window', {
        id: 'loginScreen',
        layout: 'fit',
        plain: true,
        closable: false,
        items: [
            {xtype : 'kasbon.panel.LoginPanel'}
        ]
    });
    win.show();
});

