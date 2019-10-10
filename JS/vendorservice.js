const url = "http://localhost:52245/api/vendors";

let VendorService = {}

VendorService.list = () => {
    return $.getJSON(url);
};

VendorService.get = (id) => {
    return $.getJSON(`${url}/${id}`);
};

VendorService.insert = (vendor) => {
    return $.ajax ({
        method: "POST",
        url: url,
        data: JSON.stringify(vendor),
        dataType: "json",
        crossOrigin: true,
        contentType: "application/json"
    });
}

VendorService.update = (vendor) => {
    return $.ajax ({
        method: "PUT",
        url: `${url}/${vendor.id}`,
        data: JSON.stringify(vendor),
        dataType: "json",
        crossOrigin: true,
        contentType: "application/json"
    });
}

VendorService.delete = (id) => {
    return $.ajax ({
        method: "DELETE",
        url: `${url}/${vendor.id}`,
        data: JSON.stringify(user),
        dataType: "json",
        crossOrigin: true,
        contentType: "application/json"
    });
}

//const userlist = () => {
  //  $.getJSON(url)
    //.done((res) => {
      //  console.log(res);
        //refresh(res);
    //});
//};

//const userdetail = (id) => {
  //  $.getJSON(`${url}/${id}`)
    //.done((res) => {
      //  console.log(res);
        //refresh(res);
    //});
//};