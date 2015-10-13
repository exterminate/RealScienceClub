function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet5");
   
  for (var i = 1; i < 13; ++i) { 
    var sheetName = sheet.getRange(i,1).getValue();
    ss.insertSheet(sheetName);
    
  }
}
