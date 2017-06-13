/**
 * Created by acunningham on 12/06/17.
 */


function populate_table(data) {
  console.log("populate_table "+data);
}
function clearTable() {
  document.getElementById('tablebody').innerHTML = '';
}

function populateTableRow(data) {
  clearTable();
  data = JSON.stringify(data);
  //for (var i = 0; i < data.data.length; i++) {
    $('.tablebody ').append('<tr><td><b>' + data + '</b> </td><\/tr>');
  //}
};