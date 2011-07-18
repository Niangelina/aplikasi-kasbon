/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('kasbon.grid.pegawai_grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.kasbon.grid.pegawai_grid',
    id: 'kasbon.grid.pegawai_grid',
    title: 'Pegawai List',
    height: 200,
    width: 800,
    padding: 10,
    collapsible: true,           
    initComponent: function() {
        
        this.columns = [
             
        {
            xtype: 'gridcolumn',
            dataIndex: 'String',
            dataIndex: 'nip',
            header: 'NIP',
            width: 150,
            sortable: true
               
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'String',
            dataIndex: 'nama',
            header: 'Nama Pegawai',
            width: 150,
            sortable: true
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'String',
            dataIndex: 'jabatan',
            header: 'Jabatan',
            width: 150,
            sortable: true
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'String',
            dataIndex: 'no_hp1',
            header: 'No HP 1',
            width: 150,
            sortable: true
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'String',
            dataIndex: 'no_hp2',
            header: 'No Hp 2',
            width: 150,
            sortable: true
        }
            
        ];
            
        this.store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            model: 'kasbon.model.m_pegawaiModel',
            proxy:{
                type: 'ajax',
                url: 'pegawai_ci_controllers/jsonlist',
                reader: {
                    type:'json',
                    root:'data'
                }
                
            }
                    
            
                
        });
            
     
        kasbon.grid.pegawai_grid.superclass.initComponent.call(this);
    }
    
   
});




