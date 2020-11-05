var modalEdit = document.getElementById("modalEdit");
var modalAddSuccess = document.getElementById("modalAddSuccess");
var modalUpdateSuccess = document.getElementById("modalUpdateSuccess");
var modalDeleteSuccess = document.getElementById("modalDeleteSuccess");
var modalAddFailed = document.getElementById("modalAddFailed");

var closeForm = document.getElementsByClassName("closeForm")[0];
var closeAddSuccess = document.getElementsByClassName("closeAddSuccess")[0];
var closeUpdateSuccess = document.getElementsByClassName("closeUpdateSuccess")[0];
var closeDeleteSuccess = document.getElementsByClassName("closeDeleteSuccess")[0];
var closeAddFailed = document.getElementsByClassName("closeAddFailed")[0];

var app = new function() {
  this.loadPage = function(){
    var visitor = window.prompt('What is your name?');
    document.getElementById("greeting").innerHTML = 'Hello, ' + visitor + '!';

  }

  this.el = document.getElementById('mhs');

  this.mhs = [
    ['Laki-Laki','Andhika Wira Nugraha','Jalan Salak'],
    ['Laki-Laki','Indira Hafiz Alfarrel','Jalan Semangka'],
    ['Laki-Laki','Jesse Evans','Jalan Jambu'],
	['Perempuan','Cinthya','Jalan Mangga'],
    ];

  
  this.Populate = function() {
    var data = '';

    if (this.mhs.length > 0) {
      for (i = 0; i < this.mhs.length; i++) {
        data += '<tr>';
        data += '<td>'+this.mhs[i][0]+'</td>';
        data += '<td>'+this.mhs[i][1]+'</td>';
        data += '<td>'+this.mhs[i][2]+'</td>';
        data += '<td><button class="button1" onclick="app.Edit(' + i + ')">Edit</button> <button class="button2" onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }

      document.getElementById("counter").innerHTML = "Total Data : "+this.mhs.length;

    }

    return this.el.innerHTML = data;
  };

   this.Add = function () {
    nim = document.getElementById('nim').value;
    nama = document.getElementById('nama').value;
    alamat = document.getElementById('alamat').value;

    if(nim=="" || nama=="" || alamat==""){
      // alert("All field must not empty");
      modalAddFailed.style.display="block";
      return false;
    }

    if (nim  && nama && alamat) {
      var _mhs = [nim,nama,alamat];
      this.mhs.push(_mhs);
      this.ResetForm();
      this.Populate();
      modalAddSuccess.style.display = "block";
    }
  };

  this.Update = function(){
    var id = document.getElementById('edit-id').value;
    var nim = document.getElementById('edit-nim').value;
    var nama = document.getElementById('edit-nama').value;
    var alamat = document.getElementById('edit-alamat').value;

    if(nim=="" || nama=="" || alamat==""){
      alert("Cannot add data");
      return false;
    }

    if (nim  && nama && alamat) {
    var _mhs = [nim,nama,alamat];
    this.mhs.splice(id, 1, _mhs);
        this.Populate();
        modalEdit.style.display = "none";
        modalUpdateSuccess.style.display = "block";

    }


  }

  this.Edit = function (item) {
    document.getElementById('edit-id').value = item;
    document.getElementById('edit-nim').value = this.mhs[item][0];
    document.getElementById('edit-nama').value = this.mhs[item][1];
    document.getElementById('edit-alamat').value = this.mhs[item][2];
    modalEdit.style.display = "block";


  };

  this.Delete = function (item) {
    if(confirm('Are you sure?')){
      this.mhs.splice(item, 1);
      this.Populate();
      modalDeleteSuccess.style.display = "block";
    }
  };

  this.ResetForm = function(){
    document.getElementById('nim').value = "";
    document.getElementById('nama').value = "";
    document.getElementById('alamat').value = "";

  }
  
}

app.Populate();


closeForm.onclick = function() {
  modalEdit.style.display = "none";
}

closeAddSuccess.onclick = function(){
  modalAddSuccess.style.display = "none";
}

closeUpdateSuccess.onclick = function(){
  modalUpdateSuccess.style.display = "none";
}

closeDeleteSuccess.onclick = function(){
  modalDeleteSuccess.style.display = "none";
}
closeAddFailed.onclick = function(){
  modalAddFailed.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalEdit) {
    modalEdit.style.display = "none";
  }
  if (event.target == modalAddSuccess) {
    modalAddSuccess.style.display = "none";
  }
  if (event.target == modalUpdateSuccess) {
    modalUpdateSuccess.style.display = "none";
  }
  if (event.target == modalDeleteSuccess) {
    modalDeleteSuccess.style.display = "none";
  }
    if (event.target == modalAddFailed) {
    modalAddFailed.style.display = "none";
  }
}
