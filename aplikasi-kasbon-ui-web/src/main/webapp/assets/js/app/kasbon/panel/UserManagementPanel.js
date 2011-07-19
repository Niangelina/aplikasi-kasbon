/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('kasbon.panel.UserManagementPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.kasbon.panel.UserManagementPanel',
    id : 'kasbon.panel.UserManagementPanel', //id=xtype supaya bisa display screen
    title: 'User Management',
    width: 200,
    initComponent:function(){
        this.items = [
            {
                html: 'kasbon.form.m_pegawaiForm'
            }
        ]
        kasbon.panel.UserManagementPanel.superclass.initComponent.call(this);
    }
});