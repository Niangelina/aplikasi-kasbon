/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('kasbon.form.UserManagementForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.kasbon.form.UserManagementForm',
    title: 'Input Pegawai',
    region: 'north',
    height: 300,
    width: 500  ,
    titleCollapse: true,
    collapsible: true,
    initComponent: function() {
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
        ];
        kasbon.form.UserManagementForm.superclass.initComponent.call(this);
    }
});
