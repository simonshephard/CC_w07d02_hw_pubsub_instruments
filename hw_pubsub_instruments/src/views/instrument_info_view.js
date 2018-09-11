const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:selected', (event) => {
    const instrument = event.detail;
    this.render(instrument);
  });
};

InstrumentInfoView.prototype.render = function(instrument){

  this.handleDelete(this.container);

  this.addElement('h2', 'name', instrument.name, this.container);
  this.addElement('p', 'description', instrument.description, this.container);
  this.addElement('h3', 'inter', "Instruments include:", this.container);
  const instrumentList = this.addElement('ul', 'list', "", this.container);

  this.handleDelete(instrumentList);
  instrument.instruments.forEach((instrument) => {
    this.addElement('li', 'list', instrument, instrumentList);
  });

};

InstrumentInfoView.prototype.handleDelete = function(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

InstrumentInfoView.prototype.addElement = function(elementType, classToAdd, textContent, addTo) {
  const newElement = document.createElement(elementType);
  newElement.classList.add(classToAdd);
  newElement.textContent = textContent;
  addTo.appendChild(newElement);
  return newElement;
};

module.exports = InstrumentInfoView;
