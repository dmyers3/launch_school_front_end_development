// When checkbox is selected/unselected, update game list to show/not show 
// games from that platform

// on checkbox change
//   filter json object to only objects with category same as value of checked box
//   then map that array to game's ID call it idArray
  
//   iterate through all li items
//     if data-id is contained in idArray then toggle that list item

$(function() {
  var games = [{
      "title": "The Legend of Zelda: Majora's Mask 3D",
      "id": 1,
      "category": "Nintendo 3DS"
    }, {
      "title": "Super Smash Bros.",
      "id": 2,
      "category": "Nintendo 3DS"
    }, {
      "title": "Super Smash Bros.",
      "id": 3,
      "category": "Nintendo WiiU"
    }, {
      "title": "LEGO Batman 3: Beyond Gotham",
      "id": 4,
      "category": "Nintendo WiiU"
    }, {
      "title": "LEGO Batman 3: Beyond Gotham",
      "id": 5,
      "category": "Xbox One"
    }, {
      "title": "LEGO Batman 3: Beyond Gotham",
      "id": 6,
      "category": "PlayStation 4"
    }, {
      "title": "Far Cry 4",
      "id": 7,
      "category": "PlayStation 4"
    }, {
      "title": "Far Cry 4",
      "id": 8,
      "category": "Xbox One"
    }, {
      "title": "Call of Duty: Advanced Warfare",
      "id": 9,
      "category": "PlayStation 4"
    }, {
      "title": "Call of Duty: Advanced Warfare",
      "id": 10,
      "category": "Xbox One"
  }];
  
  var $li = $('main li');  
    
  $("[type='checkbox']").on('change', function(e) {
    var self = this;
    var checkChangeGameIds = games.filter(function(game) {
      return game.category === self.value;
    }).map(function(game) {
      return game.id;
    });
    
    $li.each(function(i) {
      if (checkChangeGameIds.indexOf($li.eq(i).data('id')) >= 0) {
        $li.eq(i).toggle();
      }
    })
  });
  
});