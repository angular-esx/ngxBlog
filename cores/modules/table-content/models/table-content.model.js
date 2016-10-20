export function xblogTableContentBuilder() {
  var _indexes = { list: [] };

  this.addHeadings = function(headings) {
    headings.forEach(function(heading){
      if(!_indexes.hasOwnProperty(heading.id)) {
        if(!heading.subHeadings){ heading.subHeadings = []; }

        _indexes.list.push(heading);
        _indexes[heading.id] = heading;
      }
    }, this);

    return this;
  };

  this.addSubHeadings = function(subHeadings) {
    subHeadings.forEach(function(subHeading){
      if(_indexes.hasOwnProperty(subHeading.headingId)) {
        _indexes[subHeading.headingId].subHeadings.push(subHeading);
      }
    }, this);

    return this;
  };

  this.build = function() {
    return _indexes.list;
  };
}