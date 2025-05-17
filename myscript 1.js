var rollV, nameV, genderV, addressV, zipcodeV, nationalityV;

function readFom() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  zipcodeV = document.getElementById("zipcode").value;
  nationalityV = document.getElementById("nationality").value;
  console.log(rollV, nameV, addressV, genderV, zipcodeV, nationalityV);
}

document.getElementById("insert").onclick = function () {
  readFom();
  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
      zipcode: zipcodeV,
      nationality: nationalityV,
    });

  alert("Data Inserted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("zipcode").value = "";
  document.getElementById("nationality").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();
  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("zipcode").value = snap.val().zipcode;
      document.getElementById("nationality").value = snap.val().nationality;
    });

};

document.getElementById("update").onclick = function () {
  readFom();
  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
      zipcode: zipcodeV,
      nationality: nationalityV,

    });

  alert("Data Update");

  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("zipcode").value = "";
  document.getElementById("nationality").value = "";

};

document.getElementById("delete").onclick = function () {

  readFom();

  firebase

    .database()

    .ref("student/" + rollV)

    .remove();

  alert("Data Deleted");

  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("zipcode").value = "";
  document.getElementById("nationality").value = "";

}; 