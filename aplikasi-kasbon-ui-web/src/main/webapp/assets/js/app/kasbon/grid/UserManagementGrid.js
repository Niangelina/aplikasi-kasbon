/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('kasbon.grid.UserManagementGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.kasbon.grid.UserManagementGrid',
    title: 'User List',
    height: 200,
    width: 500,
    collapsible: true,           
    initComponent: function() {
        this.columns = [
        {
            dataIndex: 'kode',
            header: 'Username',
            width: 150,
            sortable: true      
        },
        {
            dataIndex: 'nama',
            header: 'Role',
            width: 150,
            sortable: true
        },
        {       
            dataIndex: 'jabatan',
            header: 'Email',
            width: 150,
            sortable: true
        }
            
        ];
        this.store = new Ext.data.Store({
            model: 'kasbon.model.m_pegawaiModel',
            data: [
            {
                kode: 'Fanani M. Ihsan',
                nama: 'Administrator',
                jabatan: 'fanani@artivisi.com'
            },
            {
                kode: 'Ira',
                nama: 'Administrator',
                jabatan: 'ira@artivisi.com'
            },
            {
                kode: 'Dadang',
                nama: 'User',
                jabatan: 'dadang@artivisi.com'
            }
                    
            ]
                
        })
        kasbon.grid.UserManagementGrid.superclass.initComponent.call(this);
    }
});