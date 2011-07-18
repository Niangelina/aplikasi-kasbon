/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('kasbon.panel.PegawaiPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.kasbon.panel.PegawaiPanel',
    id : 'kasbon.panel.PegawaiPanel', //id=xtype supaya bisa display screen
    title: 'User Management',
    width: 200,
    
     msgs : {
    	deletePegawaiConfirm : 'Are you sure you want to delete pegawai {0} - {1} ?'
    },
    
    initComponent: function() {
        this.items = [
        {
            xtype: 'kasbon.form.m_pegawaiForm',
            listeners: {
                scope: this,
                onPegawaiSaved: this.onPegawaiSaved,
                onPegawaiSavedFailed: this.onPegawaiSavedFailed
                
            }
        },

        {
            xtype: 'kasbon.grid.pegawai_grid', 
            region: 'center',
            listeners:{
                scope: this,
                selectionChange: this.onPegawaiRowClick
            }
        }
        ];
        this.tbar = {
            xtype: 'kasbon.toolbar.CrudToolbar',
            listeners: {
                scope: this,
                onCrudToolbarAdd: this.onCrudToolbarAdd,
                onCrudToolbarEdit: this.onCrudToolbarEdit,
                onCrudToolbarDelete: this.onCrudToolbarDelete,
                onCrudToolbarSave: this.onCrudToolbarSave,
                onCrudToolbarCancel: this.onCrudToolbarCancel
                
                
            }
           
        };
        kasbon.panel.PegawaiPanel.superclass.initComponent.call(this);
    },
    
    /* onCrudToolbarAdd: function(){
        Ext.getCmp('kasbon.form.m_pegawaiForm').enableForm();
        
    },
    onCrudToolbarEdit: function(){
        Ext.MessageBox.alert('Edit Record');
        
    },
    onCrudToolbarDelete: function(){
        Ext.MessageBox.alert('Delete Record');
        
    },*/
    onCrudToolbarSave: function(){
        Ext.getCmp('kasbon.form.m_pegawaiForm').saveForm();
        
    },
    
    onPegawaiSaved: function(){
        Ext.getCmp('kasbon.grid.pegawai_grid').store.load();
        Ext.MessageBox.alert('Success!', 'pegawai has been saved');
        
        
    },
    onPegawaiSavedFailed: function(){
        Ext.getCmp('kasbon.grid.pegawai_grid').store.load();
        Ext.MessageBox.alert('Error!', 'Error saving pegawai');
        
        
    },
    onCrudToolbarAdd: function(){
    	Ext.getCmp('kasbon.form.m_pegawaiForm').getForm().reset();
    	Ext.getCmp('kasbon.form.m_pegawaiForm').enablePegawaiForm();
    },
    onCrudToolbarEdit: function(){
    	var selectedPegawai = Ext.getCmp('kasbon.grid.pegawai_grid').getSelectionModel().selected.first();
    	if(selectedPegawai) {
    		Ext.getCmp('kasbon.form.m_pegawaiForm').enablePegawaiForm();
    	} else {
    		Ext.MessageBox.alert('Error!', 'No row selected');
    	}
    },
    onCrudToolbarDelete: function(){
    	var selectedPegawai = Ext.getCmp('kasbon.grid.pegawai_grid').getSelectionModel().selected.first();
    	if(selectedPegawai) {
			Ext.Msg.confirm(
					'Delete Pegawai', 
					Ext.String.format(this.msgs.deletePegawaiConfirm, selectedPegawai.get('nama'), selectedPegawai.get('jabatan')),
					this.deletePegawaiConfirm, 
					this);
    	} else {
    		Ext.MessageBox.alert('Error!', 'No row selected');
    	}
    },
    
    deletePegawaiConfirm: function(button){
    	if(button == 'yes'){
    		var selectedPegawai = Ext.getCmp('kasbon.grid.pegawai_grid').getSelectionModel().selected.first();
        	if(selectedPegawai) {
	    		Ext.Ajax.request({
	    			url: 'pegawai_ci_controllers/delete', 
	    			params: {
	    				id: selectedPegawai.get('id')
	    			}, 
	    			success: function(){
	    				Ext.getCmp('kasbon.grid.pegawai_grid').store.load();
	    				Ext.MessageBox.alert('Success!', 'Row deleted');
	    			}, 
	    			failure: function(){
	    				Ext.getCmp('kasbon.grid.pegawai_grid').store.load();
	    				Ext.MessageBox.alert('Failure!', 'Error deleting row');
	    			}
	    		});
        	} else {
        		Ext.MessageBox.alert('Error!', 'No row selected');
        	}
    	}
    },
    
    onCrudToolbarCancel: function(){
        Ext.getCmp('kasbon.form.m_pegawaiForm').getForm().reset();
        Ext.getCmp('kasbon.form.m_pegawaiForm').disablePegawaiForm();
        
    },
  
    onPegawaiRowClick: function(model, records){
    	var selectedPegawai = records[0];
    	if(selectedPegawai){
    		Ext.getCmp('kasbon.form.m_pegawaiForm').loadRecord(selectedPegawai);
    	}
    }
    
   
});

