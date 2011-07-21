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


Ext.define('kasbon.form.UserManagementForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.kasbon.form.UserManagementForm',
    id : 'kasbon.form.UserManagementForm',
    title: 'Input User',
    region: 'north',
    height: 300,
    width: 500  ,
    titleCollapse: true,
    collapsible: true,
    initComponent: function() {
        Ext.define('model', {
            extend: 'Ext.data.Model',
            fields: [
            {
                type: 'string',
                name: 'name'
            }
            ]
        });
        //strore 
        
        var roleData = [
        {
            "name":"Administrator"
        },

        {
            "name":"User"
        }
        ];
        
                
        //function Data store
        var roleStore= new Ext.data.Store({
            model: 'model',
            id : 'roleStore',
            data : roleData,
            autoLoad: true
        });
        
        this.items = [
        {
            xtype: 'textfield',
            fieldLabel: 'Username',
            anchor: '55%',
            margin: '0 0 0 15',
            padding: '20 0 0 0'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Password',
            inputType: 'password',
            anchor: '55%',
            margin: '0 0 0 15',
            padding: '20 0 0 0'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Retry Password',
            inputType: 'password',
            anchor: '55%',
            margin: '0 0 0 15',
            padding: '20 0 20 0'
        },
        {
            xtype: 'combo',
            fieldLabel: 'Role Option',
            anchor: '55%',
            displayField:'name',
            store: 'roleStore',
            queryMode:'local',
            emptyText: '--Role Option--',
            margin: '0 0 0 15',
            padding: '20 0 0 0'    
        }
        ];
        kasbon.form.UserManagementForm.superclass.initComponent.call(this);
        this.disableUserManagementForm();
    },
    enableUserManagementForm: function(){
        this
        .getForm()
        .getFields()
        .each(function(item){
            item.setReadOnly(false);
        });
    },
    disableUserManagementForm: function(){
        this
        .getForm()
        .getFields()
        .each(function(item){
            item.setReadOnly(true);
        });
    },
    onSave: function(){
        Ext.getBody().mask('Saving User', 'x-mask-loading');
        Ext.getCmp('kasbon.form.UserManagementForm').getForm().submit({
            method: 'POST',
            url     : 'user_management/save',
            scope   : this,
            success : this.onSaveSuccess,
            failure : this.onSaveFailure
        });
    },
    onSaveSuccess: function(){
        Ext.getBody().unmask();
        Ext.getCmp('kasbon.form.UserManagementForm').getForm().reset();
        this.disableUserManagementForm();
        this.fireEvent('onUserManagementSaveSuccess', this);
    }, 
    onSaveFailure: function(){
        Ext.getCmp('kasbon.form.UserManagementForm').getForm().reset();
        this.disableUserManagementForm();
        Ext.getBody().unmask();
        this.fireEvent('onUserManagementSaveFailure', this);
    }
});