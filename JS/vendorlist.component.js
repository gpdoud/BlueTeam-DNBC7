console.log("Connected!");

function refresh(vendors){
    var tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML ="";
    for(var vendor of vendors){
        //if(!user.isAdmin){
        //    continue;
        //}
        var tr ="<tr>";
        tr += `<td>${vendor.id}</td>`
        tr += `<td>${vendor.code}</td>`
        tr += `<td>${vendor.name}</td>`
        tr += `<td>${vendor.address}</td>`
        tr += `<td>${vendor.city}</td>`
        tr += `<td>${vendor.state}</td>`
        tr += `<td>${vendor.zip}</td>`
        tr += `<td>${vendor.phone}</td>`
        tr += `<td>${vendor.email}</td>`
        tr += `<td>${user.isActive ? "Yes" : "No"}</td>`
        tr +="</tr>";
        tbodyCtrl.innerHTML += tr;
    }
}

const getVendors = () => {
    //let jqXHR = UserService.list()
    //jqXHR.done((res) => refresh(res));
    VendorService.list()
    .done((res) => refresh(res))
}