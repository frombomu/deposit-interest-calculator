function myFunction() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var deposit = sheet.getRange("F5").getValue();
  let result = 0;

  if (deposit > 100000) {
    result = deposit * 7 / 100;
  } else if (deposit > 50000 && deposit <= 100000) {
    result = deposit * 5 / 100;
  } else if (deposit > 30000 && deposit <= 50000) {
    result = deposit * 3 / 100;
  } else if (deposit >= 10000 && deposit <= 30000) {
    result = deposit * 2 / 100;
  } else if (deposit < 10000) {
    result = deposit * 0.5 / 100;
  }

  sheet.getRange("F6").setValue(result);
}
