// Copyright (c) 2022, Ayat Hicham and contributors
// For license information, please see license.txt

frappe.ui.form.on('Facture', {
	// refresh: function(frm) {

	// }
}),
frappe.ui.form.on('Produit Facture',{

  pu:function(frm,cdt,cdn){
    var d=locals[cdt][cdn];
    var montant_t =0;
    var montant_ht =0;

    frm.doc.items.forEach(function(d) { d.mnt_ht = d.qte_recu * d.pu ;});
    frm.doc.items.forEach(function(d) { d.mnt_ttc = (d.mnt_ht *d.tva)/100 ;});
    frm.doc.items.forEach(function(d) {montant_ht += d.mnt_ht });
    frm.doc.items.forEach(function(d) {montant_t += d.mnt_ttc});

    var total_ttc = montant_ht + montant_t ;

    frm.set_value('total_ht',montant_ht);
    frm.set_value('total_ht_1',montant_ht * (-1));
    frm.set_value('tva', montant_t);
    frm.set_value('tva_1', montant_t * (-1));
    frm.set_value('total_ttc',total_ttc);
    frm.set_value('total_ttc_1',total_ttc * (-1));

    refresh_field('total_ttc');
    refresh_field('total_ht');
    refresh_field('tva');
    refresh_field('total_ttc1');
    refresh_field('total_ht_1');
    refresh_field('tva1');

    console.log(frm);
  },

  items_remove :function(frm,cdt,cdn){

    var d=locals[cdt][cdn];
    var montant_t =0;
    var montant_ht =0;

    frm.doc.items.forEach(function(d) { d.mnt_ht = d.qte * d.pu ;});
    frm.doc.items.forEach(function(d) { d.mnt_ttc = (d.mnt_ht *d.tva)/100 ;});
    frm.doc.items.forEach(function(d) {montant_ht += d.mnt_ht });
    frm.doc.items.forEach(function(d) {montant_t += d.mnt_ttc});

    var total_ttc = montant_ht + montant_t ;

    frm.set_value('total_ht',montant_ht);
    frm.set_value('total_ht_1',montant_ht);
    frm.set_value('tva', montant_t);
    frm.set_value('tva_1', montant_t);
    frm.set_value('total_ttc',total_ttc);
    frm.set_value('total_ttc_1',total_ttc);

    refresh_field('total_ttc');
    refresh_field('total_ht');
    refresh_field('tva');
    refresh_field('total_ttc1');
    refresh_field('total_ht_1');
    refresh_field('tva1');

  }
});
