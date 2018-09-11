const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();


  const informationDiv = document.querySelector('div#instrument-information')
  console.log(informationDiv);
  const instrumentInfoView = new InstrumentInfoView(informationDiv);
  instrumentInfoView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();




});
