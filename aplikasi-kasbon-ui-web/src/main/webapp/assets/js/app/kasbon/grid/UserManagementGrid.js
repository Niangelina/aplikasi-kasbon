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
    initComponent: function(){
        this.columns = [
        {
            text     : 'Name', 
            width	 : 100,
            sortable : false,
            dataIndex: 'name'
        },
        {
            text     : 'Description',
            flex    : 1,
            sortable : true,
            dataIndex: 'description'
        }
        ];
        this.store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            model: 'kasbon.model.UserManagementModel',
            proxy: {
                type: 'ajax',
                url: 'http://localhost/aplikasi-billing/m_tariff_group/jsonlist', 
                reader: {
                    type: 'json', 
                    root: 'data'
                }
            }
        });
        kasbon.grid.UserManagementGrid.superclass.initComponent.call(this);
    }
});