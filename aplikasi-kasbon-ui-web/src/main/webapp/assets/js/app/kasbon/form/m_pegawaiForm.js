/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('kasbon.form.m_pegawaiForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.kasbon.form.m_pegawaiForm',
    id: 'kasbon.form.m_pegawaiForm',
    title: 'Input Pegawai',
    region: 'north',
    height: 350,
    width: 500  ,
    padding: 10,
    titleCollapse: true,
    collapsible: true,
    initComponent: function() {
        this.items = [
        {
            xtype: 'hidden',
            name: 'id',
            width: 100,
            anchor: '100%' 
                
        },
        {
            xtype: 'textfield',
            fieldLabel: 'NIP',
            anchor: '55%',
            name: 'nip', 
            margin: '0 0 0 15',
            padding: '20 0 0 0'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Nama Pegawai',
            anchor: '55%',
            name: 'nama', 
            margin: '0 0 0 15',
            padding: '20 0 0 0'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Jabatan',
            anchor: '55%',
            name: 'jabatan', 
            margin: '0 0 0 15',
            padding: '20 0 0 0'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'No HP 1',
            anchor: '55%',
            name: 'no_hp1', 
            margin: '0 0 0 15',
            padding: '20 0 0 0'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'No HP 2',
            anchor: '55%',
            name: 'no_hp2', 
            margin: '0 0 0 15',
            padding: '20 0 0 0'
        }
        ];
        kasbon.form.m_pegawaiForm.superclass.initComponent.call(this);
        this.disablePegawaiForm();
    },
    
     
    saveForm: function(){
        Ext.getBody().mask('Saving Pegawai', 'x-mask-loading');	
        Ext.getCmp('kasbon.form.m_pegawaiForm').getForm().submit({
	
            method: 'POST',
            url     : 'pegawai_ci_controllers/save',
            scope   : this,
            success : this.onSaveSuccess,
            failure : this.onSaveFailure
	
        });
    },
    onSaveSuccess: function(){
        Ext.getBody().unmask();	
        Ext.getCmp('kasbon.form.m_pegawaiForm').getForm().reset();
        this.disablePegawaiForm();	
        this.fireEvent('onPegawaiSaved', this);
    },
    onSaveFailure: function(){
        Ext.getCmp('kasbon.form.m_pegawaiForm').getForm().reset();
        this.disablePegawaiForm();
        Ext.getBody().unmask();
        this.fireEvent('onPegawaiSavedFailed', this);
    },
    /* onCancel: function(){
       Ext.getCmp('kasbon.form.m_pegawaiForm').getForm().reset();
    },
    resetForm: function(){
        Ext.MessageBox.alert('Success!', 'Reset Form');
    },
    enableForm: function(){
        Ext.MessageBox.alert('Success!', 'Save Form');
    }*/
    enablePegawaiForm: function(){
        var formItems = this.items['items'];
        for(i=0; i<formItems.length; i++){
            element = formItems[i];
            element.enable();
        }
    },
    disablePegawaiForm: function(){
        var formItems = this.items['items'];
        for(i=0; i<formItems.length; i++){
            element = formItems[i];	
            element.disable();	
        }	
    },
    loadData: function(data){
        if(data){
            this.getForm().setValues(data);
        }
    }
    
});
