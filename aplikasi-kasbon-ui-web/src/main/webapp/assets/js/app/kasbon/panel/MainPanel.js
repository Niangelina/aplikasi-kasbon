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
Ext.define('kasbon.panel.MainPanel', {
    extend : 'Ext.panel.Panel',
    alias : 'widget.kasbon.panel.MainPanel',
    width : 400,
    layout : 'border',	
    initComponent : function() {
        this.items = [ {
            xtype : 'toolbar',
            region : 'north',
            height : 30,
            items : [ {
                text : 'System',
                menu : {
                    xtype : 'menu',
                    plain : true,
                    items : [ {
                        text : 'Change Password'
                    }, {
                        text : 'Logout',
                        handler: function(){
                            window.location = 'process/logout';
                        }
                    } ]
                }
            }, {
                text : 'Master',
                menu : {
                    xtype : 'menu',
                    plain : true,
                    items : [ {
                            
                        text : 'User Management',
                        scope:this,
                        handler : function(item){
                            Ext.getCmp('centerpanel')
                            .displayScreen(item.screenType);
                        },
                        screenType : 'kasbon.panel.UserManagementPanel'
                    }
                    ,{
                        text : 'Master Pegawai', 
                        scope : this,
                        handler : function(item){
                            Ext.getCmp('centerpanel')
                            .displayScreen(item.screenType);
                        },
                        screenType : 'kasbon.panel.PegawaiPanel'
                    }]
                }
            }, {
                text : 'Transaction',
                menu : {
                    xtype : 'menu',
                    plain : true,
                    items : [ {
                        xtype : 'menuitem',
                        text : 'Pengajuan Kasbon',
                   
                        screenType: 'kasbon.panel.pengajuanKasbonPanel',
                        handler : function(item){
                            Ext.getCmp('centerpanel')
                            .displayScreen(item.screenType);
                        }
                                   
                    },
                    {
                        xtype : 'menuitem',
                        text : 'Approval Kasbon',
                        screenType: 'kasbon.panel.ApprovalPanel',
                        handler : function(item){
                            Ext.getCmp('centerpanel')
                            .displayScreen(item.screenType);
                        }
                        
                    
                    },
                    {
                        xtype : 'menuitem',
                        text : 'Pencairan Kasbon',
                        screenType: 'kasbon.panel.pencairanKasbonPanel',
                        handler : function(item){
                            Ext.getCmp('centerpanel')
                            .displayScreen(item.screenType);
                        }
                    //
                    }
                    , {
                        xtype : 'menuitem',
                        text : 'Pelunasan Kasbon',
                        screenType: 'kasbon.panel.pelunasanKasbonPanel',
                        handler : function(item){
                            Ext.getCmp('centerpanel')
                            .displayScreen(item.screenType);
                        }
                                   
                    }]
                }
                
                
                
            }, {
                text : 'Report',
                menu : {
                    xtype : 'menu',
                    plain : true,
                    items : [ {
                        text : 'Rekap Pengajuan Kasbon'
                        
                    },{
                        xtype : 'menuitem',
                        text : 'Rekap Kasbon Per Pegawai',
                        screenType: 'kasbon.panel.LaporanKasbonPanel',
                        handler : function(item){
                            Ext.getCmp('centerpanel')
                            .displayScreen(item.screenType);
                        }
                    },{
                        text : 'Rekap Kasbon Semua Pegawai'                  
                    
                    }]
                }
                
                
                
                
            } ]
        }, {
            xtype : 'panel',
            title : 'Information',
            collapsible : true,
            region : 'east',
            width : 300
        }, {
            xtype : 'toolbar',
            region : 'south',
            height : 20,
            items : [ {
                text : 'current user : endy',
                xtype : 'label'
            } ]
        }, {
            id : 'centerpanel',
            xtype : 'kasbon.panel.CenterPanel',
            region : 'center'
        } ] ; 
		
        kasbon.panel.MainPanel.superclass.initComponent.call(this);
    }

	
});
