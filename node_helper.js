/* Magic Mirror
 * Module: MMM-Blank
 *
 * By YOUR NAME
 * MIT Licensed.
 */
var NodeHelper = require('node_helper');
var request = require('request');
var moment = require('moment'); 
var fs = require('fs'); 

module.exports = NodeHelper.create({

    start: function() {
        console.log("Getting module: " + this.name); 
		 
    }, 

	getYOURDATA: function(url) {
		
	 this.sendSocketNotification("YOUR_DATA", result); 	 
    }, 
	
	   socketNotificationReceived: function(notification) {
        if (notification === 'GET_YOURDATA') { 
                this.getYOURDATA(); 
         }  
	},
	
});	
	
