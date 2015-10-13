function ConditionalHideRow() {
  SpreadsheetApp.getActiveSheet().getRange('Assignments!B4').setValue('Working...');
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // call sheet
  var sheet = ss.getSheetByName("Assignments");
  
  // hide all AEs to start
  sheet.hideRows(8,252); 
  
  // get category and keyword to fetch the list of names in the category spreadsheet
  var category = sheet.getRange(2,1).getValue();
  var keyword  = sheet.getRange('A4').getValue();
  var sheetToSearch = ss.getSheetByName(category);
  Logger.log(sheetToSearch);
  
  var assocEdNames = new Array();  
  Logger.log("Max columns "+sheetToSearch.getMaxColumns());
  for( var i = 1; i <= 18; ++i) { 
    if(sheetToSearch.getRange(1,i).getValue() == "") {
      break;
    }
    if(sheetToSearch.getRange(1,i).getValue() == keyword) {
      Logger.log("keyword is "+keyword);
      //create list of AEs
      for(var j = 2; j <= 51; ++j){ // ! Might need to change value if a sub-category has more thank 50 names ! 
        if(sheetToSearch.getRange(j,i).getValue() == "") {
          break;
        }
        // add names to array
        assocEdNames.push(sheetToSearch.getRange(j,i).getValue());
        Logger.log("AE is "+sheetToSearch.getRange(j,i).getValue());
      }
    }
  }
  
  function isInArray(value, array) {
    return array.indexOf(value) > -1;
  }
    
  // then iterate through the AEs and show those in the right category column
  for( var i = 8; i < 260; ++i) { // 260 is the number of rows to check. Might need to be changed 
    // check if name in the cell is in the assocEdNames array
    if(isInArray(sheet.getRange(i,1).getValue(),assocEdNames)) {
       sheet.showRows(i,1);
    }
  }
  
  
  SpreadsheetApp.getActiveSheet().getRange('Assignments!B4').setValue('Done');
}
