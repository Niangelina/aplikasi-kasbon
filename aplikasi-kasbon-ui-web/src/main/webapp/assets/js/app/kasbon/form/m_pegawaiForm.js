/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('kasbon.form.m_pegawaiForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.kasbon.form.m_pegawaiForm',
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
            fieldLabel: 'Kode Pegawai',
            anchor: '55%',
            margin: '0 0 0 15',
            padding: '20 0 0 0'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Nama Pegawai',
            anchor: '55%',
            margin: '0 0 0 15',
            padding: '20 0 0 0'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Jabatan',
            anchor: '55%',
            margin: '0 0 0 15',
            padding: '20 0 20 0'
        }
        ];
        kasbon.form.m_pegawaiForm.superclass.initComponent.call(this);
    }
});
