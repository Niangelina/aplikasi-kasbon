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
        //        Ext.getCmp('billing.form.UserManagementForm').getForm().reset();
        //        Ext.getCmp('billing.form.UserManagementForm').enableUserManagementForm();
        Ext.MessageBox.alert(
        'Error!',
        'Implement button add'
    )
    },
    editUser: function(){
        //        Ext.getCmp('billing.form.UserManagementForm').getForm().reset();
        //        Ext.getCmp('billing.form.UserManagementForm').enableUserManagementForm();
        Ext.MessageBox.alert(
        'Error!',
        'Implement button Edit'
    )
    },
    deleteUser: function(){
        //        Ext.getCmp('billing.form.UserManagementForm').getForm().reset();
        //        Ext.getCmp('billing.form.UserManagementForm').enableUserManagementForm();
        Ext.MessageBox.alert(
        'Error!',
        'Implement button delete'
    )
    },
    saveUser: function(){
        //        Ext.getCmp('billing.form.UserManagementForm').getForm().reset();
        //        Ext.getCmp('billing.form.UserManagementForm').enableUserManagementForm();
        Ext.MessageBox.alert(
        'Error!',
        'Implement button save'
    )
    },
    cancelUser: function(){
        //        Ext.getCmp('billing.form.UserManagementForm').getForm().reset();
        //        Ext.getCmp('billing.form.UserManagementForm').enableUserManagementForm();
        Ext.MessageBox.alert(
        'Error!',
        'Implement button cancel'
    )
    }
});