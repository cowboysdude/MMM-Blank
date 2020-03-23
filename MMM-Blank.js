/* Magic Mirror
 * Module: The-Forecast
 *
 * By Cowboysdude
 * MIT Licensed.
 */
Module.register("The-Forecast", {

    // Module config defaults.
    defaults: {
        updateInterval: 30 * 60 * 1000,
        initialLoadDelay: 3450 
    }, 
     
    getScripts: function() {
        return ["moment.js"];
    },
	
    getStyles: function() {
        return ["YOUR.css"];
    },

    start: function() {
        Log.info("Starting module: " + this.name); 
        this.today = ""; 
    },


   getDom: function() {  
		 
        var wrapper = document.createElement("div");       
	 
        return wrapper;
		  
    },
 
     	 scheduleUpdate: function() {
        setInterval(() => {
		this.getYOURDATA();
        }, this.config.updateInterval);
    }, 
	
    processData: function(data) {
        this.YOURDATA = data; 		
    }, 
     
    getYOURDATA: function() {
        Log.log("requesting Your Data");
        this.sendSocketNotification('GET_YOURDATA');
    },
	
	 socketNotificationReceived: function(notification, payload) {
        
		if (notification === "YOURDATA_RESULT") {
           this.processData(payload); 		   
        } 
        this.updateDom(this.config.initialLoadDelay);
	 	 
    }, 
});