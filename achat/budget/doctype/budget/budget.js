// Copyright (c) 2022, Ayat Hicham and contributors
// For license information, please see license.txt

frappe.ui.form.on('Budget',"refresh", function(frm, cdt, cdn) {
  // console.log(frm);
  //
  // var d = locals[cdt][cdn];
  // var subject ;
  // console.log(frm);
  // var subject =0;
  // var n =0;
  //
  // frm.doc.produits_budget_demande.forEach(function(d) {
  //   var df = frappe.meta.get_docfield("Produit Demande","qte_revise", cur_frm.doc.name);
  //   subject= d.qte_produit;

  //   console.log(df);
  //   console.log(subject);
  // });
  // // var tr = true;
  // frm.doc.produits_budget_demande.forEach(function(d) { subject= d.qte_produit;});
  //
  // $.each(frm.doc.produits_budget_demande,function(i,d) {
  //   var df = frappe.meta.get_docfield("Produit Demande","qte_revise", cur_frm.doc.name);
  //   var dp = frappe.meta.get_docfield("Produit Demande","qte_produit", cur_frm.doc.name);
  //   console.log(d.qte_produit);
  //   while ((n < frm.doc.produits_budget_demande.length) && (d.qte_produit = "0")) {
  //     df.read_only =1 ;
  //     n++;
  //   };
  //   refresh_field("qte_revise");
  //   refresh_field("qte_produit");
  //   console.log(df);
  //
  // });
  // if (dpf.value != "0") {
  //   tr= false;
  //
  // }
  // var d= frm.doc.produits_budget_demande.length;
  //
  // console.log(tr);
  // var n =0;
  // while (n < d && tr) {
  //   df.read_only = 1;
  //   n++;
  //
  // };
  // if (dp.default = "0") {
  //   df.read_only = 1;
  //
  // } else {
  //   df.read_only = 0;
  //
  // }

	// refresh: function(frm) {

	// }
}),
frappe.ui.form.on('Produit Demande',{
  pu_estime:function(frm,cdt,cdn){
    var d = locals[cdt][cdn];
    var total_ht =0;
    var total_t =0;
    var total_ht_r =0;
    var total_t_r =0;

    frm.doc.produits_budget_demande.forEach(function(d) { d.montan_ht = d.pu_estime * d.qte_produit;});
    frm.doc.produits_budget_demande.forEach(function(d) { d.montant_t = (d.montan_ht *d.tva)/100 ;});
    frm.doc.produits_budget_demande.forEach(function(d) { total_ht +=d.montan_ht;});
    frm.doc.produits_budget_demande.forEach(function(d) { total_t +=d.montant_t;});

    frm.doc.produits_budget_demande.forEach(function(d) { d.montan_ht_r = d.pu_estime * d.qte_revise;});
    frm.doc.produits_budget_demande.forEach(function(d) { d.montant_t_r = (d.montan_ht_r *d.tva)/100 ;});
    frm.doc.produits_budget_demande.forEach(function(d) { total_ht_r +=d.montan_ht_r;});
    frm.doc.produits_budget_demande.forEach(function(d) { total_t_r +=d.montant_t_r;});

    console.log(frm);
    frm.set_value('totale', total_ht);
    frm.set_value('tva', total_t);


    var montant_ttc = total_ht + total_t ;

    frm.set_value('montant_ttc',montant_ttc);

    refresh_field('totale');
    refresh_field('tva');
    refresh_field('total_ttc');

    frm.set_value('totale_r', total_ht_r);
    frm.set_value('tva_r', total_t_r);


    var montant_ttc_r = total_ht_r + total_t_r ;

    frm.set_value('montant_ttc_r',montant_ttc_r);

    refresh_field('totale_r');
    refresh_field('tva_r');
    refresh_field('total_ttc_r');
  },
  produits_budget_demande_remove:function(frm,cdt,cdn){
    var d = locals[cdt][cdn];
    var total_ht =0;
    var total_t = 0;
    frm.doc.produits_budget_demande.forEach(function(d) { d.montan_ht = d.pu_estime * d.qte_produit;});
    frm.doc.produits_budget_demande.forEach(function(d) { d.montant_t = (d.montan_ht * d.tva) / 100; });
    frm.doc.produits_budget_demande.forEach(function(d) { total_ht +=d.montan_ht;});
    frm.doc.produits_budget_demande.forEach(function(d) { total_t +=d.montan_t;});

    frm.set_value('totale', total_ht);
    frm.set_value('tva', total_t);


    var montant_ttc = total_ht + total_t ;

    frm.set_value('montant_ttc',montant_ttc);

    refresh_field('totale');
    refresh_field('montant_ttc');
    refresh_field('tva');
  }


});
