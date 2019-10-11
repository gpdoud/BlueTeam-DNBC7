$().ready(()=>{
    
    $("#btnSave").click(( )=>{
        let vendor = {
            id: 0,
            code : $("#pcode").val(),
            name : $("#pname").val(),
            address : $("#paddress").val(),
            city : $("#pcity").val(),
            state : $("#pstate").val(),
            zip : $("#pzip").val(),
            phone : $("#pphone").prop("checked"),
            email :$("#pemail").prop("checked"),
            active : $("#pactive").prop("checked"),
        }
        console.log("Vendor:", vendor);
        VendorService.insert(vendor)
        .done((res)=>{
            console.log("Insert rc: ", res);
        });
    });
});