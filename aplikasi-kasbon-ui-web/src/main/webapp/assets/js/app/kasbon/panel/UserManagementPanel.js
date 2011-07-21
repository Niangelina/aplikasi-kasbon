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


Ext.define('kasbon.panel.UserManagementPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.kasbon.panel.UserManagementPanel',
    id : 'kasbon.panel.UserManagementPanel',
    title: 'User Management',
    layot: 'center',
    width: 200,
    initComponent:function(){
        this.items = [
        {
            xtype: 'kasbon.form.UserManagementForm'
        },
        {
            xtype: 'kasbon.grid.UserManagementGrid', 
            region: 'center'
        }
        ];
        
        this.tbar = {
            xtype: 'kasbon.toolbar.CrudToolbar',
            listeners: {
                scope: this, 
                onCrudToolbarAdd: this.newUser,
                onCrudToolbarEdit: this.editUser,
                onCrudToolbarDelete: this.deleteUser,
                onCrudToolbarSave: this.saveUser, 
                onCrudToolbarCancel: this.cancelUser
            }
          
        };
        kasbon.panel.UserManagementPanel.superclass.initComponent.call(this);
    },
    newUser: function(){
        Ext.getCmp('kasbon.form.UserManagementForm').getForm().reset();
        Ext.getCmp('kasbon.form.UserManagementForm').enableUserManagementForm();

    },
    editUser: function(){
        Ext.MessageBox.alert(
            'Error!',
            'Implement button Edit'
            )
    },
    deleteUser: function(){
        Ext.MessageBox.alert(
            'Error!',
            'Implement button delete'
            )
    },
    saveUser: function(){
        Ext.getCmp('kasbon.form.UserManagementForm').onSave();
    },
    cancelUser: function(){
        Ext.getCmp('kasbon.form.UserManagementForm').getForm().reset();
        Ext.getCmp('kasbon.form.UserManagementForm').disableUserManagementForm();
    },
    onUserManagementSaveSuccess: function(){
        //Ext.getCmp('billing.grid.TariffGroupGrid').store.load();
        Ext.MessageBox.alert('Success!', 'User has been saved');
    },
    
    onUserManagementSaveFailure: function(){
        //Ext.getCmp('billing.grid.TariffGroupGrid').store.load();
        Ext.MessageBox.alert('Error!', 'Error saving user !');
    }
});