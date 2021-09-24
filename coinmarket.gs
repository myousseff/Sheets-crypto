function getCryptoprice() {
  var sh1=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LIVE");
  var sh2=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Feuille13");
  var d = new Date();
  var currentTime = d.toLocaleTimeString();
  //Make sure that you got the API key from Coinmarketcap API dashboard and paste it in sheet_1 on cell B1
  var apiKey="XXXXXXXXXXXXXXXXXXXXXX"
  
  var url="https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ADA,DOGE,XRP,LTC,CHZ,XLM,VET,RVN,BNB,OMI,WAXP,ETC,HOT,SC,SHIB,SAFEMOON,HNT,ETH,AKT,MATIC,BabyDoge,FREE,DGB,IOTX,CRO&convert=EUR"
  var requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    start: 1,
    limit: 5000,

  },
  headers: {
    'X-CMC_PRO_API_KEY': apiKey
  },
  json: true,
  gzip: true
};
  
  var httpRequest= UrlFetchApp.fetch(url, requestOptions);
  var getContext= httpRequest.getContentText();
  
  var parseData=JSON.parse(getContext);
  sh1.getRange(1,2).setValue("Timestamp");
  sh1.getRange(1,3).setValue("BTC");
  sh1.getRange(1,4).setValue("ADA");
  sh1.getRange(1,5).setValue("DOGE");
  sh1.getRange(1,6).setValue("XRP");
  sh1.getRange(1,7).setValue("LTC");
  sh1.getRange(1,8).setValue("CHZ");
  sh1.getRange(1,9).setValue("XLM");
  sh1.getRange(1,10).setValue("VET");
  sh1.getRange(1,11).setValue("RVN");
  sh1.getRange(1,12).setValue("BNB");
  sh1.getRange(1,13).setValue("OMI");
  sh1.getRange(1,14).setValue("WAX");
  sh1.getRange(1,15).setValue("ETC");
  sh1.getRange(1,16).setValue("HOT");
  sh1.getRange(1,17).setValue("SC");
  sh1.getRange(1,18).setValue("SHIBA");
  sh1.getRange(1,19).setValue("SAFEMOON");
  sh1.getRange(1,20).setValue("HNT");
  sh1.getRange(1,21).setValue("AKT");
  sh1.getRange(1,22).setValue("MATIC");
  sh1.getRange(1,23).setValue("BABYDOGE");
  sh1.getRange(1,24).setValue("FREE COIN");
  sh1.getRange(1,25).setValue("ETH");
  sh1.getRange(1,26).setValue("DIGIBYTE");
  sh1.getRange(1,27).setValue("IOTEX");
  sh1.getRange(1,28).setValue("CRO");

  sh1.getRange(2,2).setValue(currentTime);
  sh1.getRange(2,3).setValue(parseData.data['BTC'].quote.EUR.price);
  sh1.getRange(2,4).setValue(parseData.data['ADA'].quote.EUR.price);
  sh1.getRange(2,5).setValue(parseData.data['DOGE'].quote.EUR.price);
  sh1.getRange(2,6).setValue(parseData.data['XRP'].quote.EUR.price);
  sh1.getRange(2,7).setValue(parseData.data['LTC'].quote.EUR.price);
  sh1.getRange(2,8).setValue(parseData.data['CHZ'].quote.EUR.price);
  sh1.getRange(2,9).setValue(parseData.data['XLM'].quote.EUR.price);
  sh1.getRange(2,10).setValue(parseData.data['VET'].quote.EUR.price);
  sh1.getRange(2,11).setValue(parseData.data['RVN'].quote.EUR.price);
  sh1.getRange(2,12).setValue(parseData.data['BNB'].quote.EUR.price);
  sh1.getRange(2,13).setValue(parseData.data['OMI'].quote.EUR.price);
  sh1.getRange(2,14).setValue(parseData.data['WAXP'].quote.EUR.price);
  sh1.getRange(2,15).setValue(parseData.data['ETC'].quote.EUR.price);
  sh1.getRange(2,16).setValue(parseData.data['HOT'].quote.EUR.price);
  sh1.getRange(2,17).setValue(parseData.data['SC'].quote.EUR.price);
  sh1.getRange(2,18).setValue(parseData.data['SHIB'].quote.EUR.price);
  sh1.getRange(2,19).setValue(parseData.data['SAFEMOON'].quote.EUR.price);
  sh1.getRange(2,20).setValue(parseData.data['HNT'].quote.EUR.price);
  sh1.getRange(2,21).setValue(parseData.data['AKT'].quote.EUR.price);
  sh1.getRange(2,22).setValue(parseData.data['MATIC'].quote.EUR.price);
  sh1.getRange(2,23).setValue(parseData.data['BabyDoge'].quote.EUR.price);
  sh1.getRange(2,24).setValue(parseData.data['FREE'].quote.EUR.price);
  sh1.getRange(2,25).setValue(parseData.data['ETH'].quote.EUR.price);
  sh1.getRange(2,26).setValue(parseData.data['DGB'].quote.EUR.price);
  sh1.getRange(2,27).setValue(parseData.data['IOTX'].quote.EUR.price);
  sh1.getRange(2,28).setValue(parseData.data['CRO'].quote.EUR.price);




}
