/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('kasbon.panel.UserManagementPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.kasbon.panel.UserManagementPanel',
    id : 'kasbon.panel.UserManagementPanel', //id=xtype supaya bisa display screen
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
            xtype: 'kasbon.toolbar.CrudToolbar'
          
        };
        kasbon.panel.UserManagementPanel.superclass.initComponent.call(this);
    }
});