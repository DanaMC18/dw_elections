$(document).ready(function(){

  $('#search-elections').submit(function(e){
    e.preventDefault();
    
    getElections();
  })

  function getElections() {
    // var data = { 'district-divisions': 'ocd-division/country:us/state:ok/place:pryor_creek' }
    
    $.ajax({
      contentType: 'application/json',
      url: 'https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:ok/place:pryor_creek',
      type: 'GET',
      // data: data,
      processData: false,
      dataType: 'jsonp',
      crossDomain: true,
      success: function() {console.log('success')},
      error: function(err) {console.log(err)}
    }).done(function(data){
      console.log(data);
    })
  }

}); //end document.ready