/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
/*
 * Your about ViewModel code goes here
 */
define(['accUtils','knockout', 'ojs/ojbootstrap',  'ojs/ojarraydataprovider', 'ojs/ojknockout', 'ojs/ojchart'],
 function(accUtils,ko, Bootstrap,  ArrayDataProvider) {

    function AboutViewModel(ko, Bootstrap, data, ArrayDataProvider) {
      var self = this;
      function ChartModel() {
          
  
          /* chart data */
          this.dataProvider = new ArrayDataProvider([
    
    {
      "id": 4,
      "series": "Series 5",
      "group": "Group A",
      "value": 22
    }
  ], {keyAttributes: 'id'});
      }
  
      var chartModel = new ChartModel();
  
      Bootstrap.whenDocumentReady().then(
      function()
      {
          ko.applyBindings(chartModel, document.getElementById('chart-container'));
      });

      self.connected = function() {
        accUtils.announce('About page loaded.', 'assertive');
        document.title = "About";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return AboutViewModel;
  }
);
