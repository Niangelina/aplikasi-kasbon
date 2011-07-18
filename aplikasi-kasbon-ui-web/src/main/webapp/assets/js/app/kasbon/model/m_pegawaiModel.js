/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

 Ext.define('kasbon.model.m_pegawaiModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'Int'},
        {name: 'nip', type: 'String'},
        {name: 'nama', type: 'String'},
        {name: 'jabatan', type: 'String'},
        {name: 'no_hp1', type: 'String'},
        {name: 'no_hp2', type: 'String'}
    ]
   });


