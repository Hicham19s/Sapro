// Copyright (c) 2022, Ayat Hicham and contributors
// For license information, please see license.txt

frappe.ui.form.on('Bon Commande',"onload", function(frm, cdt, cdn) {

  // var df = frappe.meta.get_docfield("Produit Commande","remise", cur_frm.doc.name);
  // console.log(df);
  // df.read_only = 1;

  // refresh: function(frm) {

	// }
}),
frappe.ui.form.on('Produit Commande', {
  prix_unit_ht : function(frm,cdt,cdn){

    var d= locals[cdt][cdn];
    var total_montant =0;
    var total_tva =0;
    // var total_remise =0;
    console.log(frm);

    frm.doc.produit_commande.forEach(function(d){d.montant = d.qte_demande * d.prix_unit_ht ; });
    frm.doc.produit_commande.forEach(function(d){d.montant_t = (d.montant *d.tva)/100 ; });
    // frm.doc.produit_commande.forEach(function(d){d.montant_r = (d.remise * d.montant)/100; });
    // frm.doc.produit_commande.forEach(function(d) { d.montant_r = d.montant_r + d.remise_m});
    // frm.doc.produit_commande.forEach(function(d) {total_remise += d.montant_r;});
    frm.doc.produit_commande.forEach(function(d){ total_tva += d.montant_t;});
    frm.doc.produit_commande.forEach(function(d) { total_montant +=d.montant; });

    // frm.set_value('montant_total_remise', total_remise);

    frm.set_value('montant_ht',total_montant);

    refresh_field('montant_ht');
    // refresh_field('montant_total_remise');

    // refresh_field('remise');

    var montant_total = total_tva + total_montant;

    frm.set_value('montant_ttc',montant_total);
    frm.set_value('montant_tva',total_tva);
    refresh_field('montant_tva');
    // refresh_field('montant_tht_r');
    refresh_field('montant_ttc');

  }
  ,
  produit_commande_remove: function(frm,cdt,cdn){

    var d= locals[cdt][cdn];
    var total_montant =0;
    var total_tva =0;
    // var total_remise =0;
    console.log(frm);

    frm.doc.produit_commande.forEach(function(d){d.montant = d.qte_demande * d.prix_unit_ht ; });
    frm.doc.produit_commande.forEach(function(d){d.montant_t = (d.montant *d.tva)/100 ; });
    // frm.doc.produit_commande.forEach(function(d){d.montant_r = (d.remise * d.montant)/100; });
    // frm.doc.produit_commande.forEach(function(d) { d.montant_r = d.montant_r + d.remise_m});
    // frm.doc.produit_commande.forEach(function(d) {total_remise += d.montant_r;});
    frm.doc.produit_commande.forEach(function(d){ total_tva += d.montant_t;});
    frm.doc.produit_commande.forEach(function(d) { total_montant +=d.montant; });

    // frm.set_value('montant_total_remise', total_remise);

    frm.set_value('montant_ht',total_montant);

    refresh_field('montant_ht');
    // refresh_field('montant_total_remise');

    // refresh_field('remise');

    var montant_total = total_tva + total_montant;

    frm.set_value('montant_ttc',montant_total);
    frm.set_value('montant_tva',total_tva);
    refresh_field('montant_tva');
    // refresh_field('montant_tht_r');
    refresh_field('montant_ttc');
      }
});
