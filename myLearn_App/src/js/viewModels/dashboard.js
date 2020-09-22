/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['accUtils','knockout','ojs/ojarraydataprovider','ojs/ojselectsingle','ojs/ojchart'],
 function(accUtils,ko,ArrayDataProvider) {

    function DashboardViewModel() {
      var self = this;
      this.selectVal=ko.observable('pie');
      console.log(this.selectVal);

       var browsers =[
      {value: 'pie', label: 'pie'},
      {value: 'bar',  label: 'bar'},
      {value: 'line',   label: 'line'},
      {value: 'Vijay1',   label: 'Vijay1'}
      ];
      this.browsersDP =new ArrayDataProvider(browsers,{keyAttributes:'value'});

      this.stackValue = ko.observable('off');
          this.orientationValue = ko.observable('vertical');
         this.dataProvider = new ArrayDataProvider(  [
    {
      "id": 0,
      "series": "IND",
      "group": "Group A",
      "value": 60
    },
    {
      "id": 1,
      "series": "AUS",
      "group": "Group A",
      "value": 55
    },
    {
      "id": 3,
      "series": "ENG",
      "group": "Group A",
      "value": 22
    }
    
  ], {keyAttributes: 'id'});
      
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function() {
        accUtils.announce('Dashboard page loaded.', 'assertive');
        document.title = "Dashboard";
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
    return DashboardViewModel;
  }
);
