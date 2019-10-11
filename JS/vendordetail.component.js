// let urlparms = {};

//  $().ready(() => {
//      let urlparms = Utilities.parseUrlParameter(document.url);
//      $(".heading").css("fontWeight", "bold");
//      $("button").click(() => {
//          getUser();
//      });
// }); 

$().ready(() => {
    $("button").click(() => {
        getVendor();
    });
});





const refresh = (vendor) => {
    $("#pid").text(vendor.id);
    $("#pcode").text(vendor.code);
    $("#pname").text(vendor.name);
    $("#paddress").text(vendor.address);
    $("#pcity").text(vendor.city);
    $("#pstate").text(vendor.state);
    $("#pzip").text(vendor.zip);
    $("#pphone").text(vendor.phone);
    $("#pphone").text(vendor.email);
    $("#pactive").text(vendor.active ? "Yes" : "No");
};

const getVendor = () => {
    let id = $("#xid").val(); //get the id to display
    VendorService.get(id)
    .done( (res) => {
        console.log("Vendor:", res);
        refresh(res);
    });
};