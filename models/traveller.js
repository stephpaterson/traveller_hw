const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter(journey => journey.transport == transport);
  return journeysByTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysByMinDistance = this.journeys.filter(journey => journey.distance > minDistance);
  return journeysByMinDistance
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const distances = this.journeys.map(journey => journey.distance);
  const totalDistance = distances.reduce(
    (previousDistance, currentDistance) => previousDistance + currentDistance
  );
  return totalDistance
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const modesOfTransport = this.journeys.map(journey => journey.transport);
  // Then I need to make a new array with only unique values using set
  const uniqueModesTransport = new Set()
  modesOfTransport.forEach(mode => uniqueModesTransport.add(mode) )
  // I return an array created from my set
  return Array.from(uniqueModesTransport)
};


module.exports = Traveller;
