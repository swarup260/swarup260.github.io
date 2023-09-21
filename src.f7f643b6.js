parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"soBT":[function(require,module,exports) {
module.exports={
	projects: [{
		name: "Sultan-Center",
		description: "Online grocery shop",
		url: "https://www.sultan-center.com/",
		keyPoints: ["Implemented Elastic search integration resulting in a 30% reduction in load time", " Developed and designed RESTful APIs for various applications", " Developed a cronjob that automatically updates products on a regular basis, resulting in a 95% accurate and up-to-date product information display, reducing the processing time from 1 hour to under 10 minutes"],
		technologyUsed: "Magento 2, JavaScript and MySQL.",
		order: "4"
	}, {
		name: "OPS",
		description: "Order Management System ",
		url: "#",
		keyPoints: ["Implemented middleware interceptor to enhance security and improve application performance, resulting in a 25% reduction in security breaches.", " Built a report management system that increased the efficiency of data analysis by 30% and provided better insights for business decisions."],
		technologyUsed: "Laravel 5.4,Slim 3,JavaScript,MySQL and MongoDB",
		order: "3"
	}, {
		name: "Alessa Online",
		description: "Health Care website",
		url: "https://www.alessaonline.com/",
		keyPoints: ["Implemented middleware interceptor to enhance security and improve application performance.",
		"Consistently performed maintenance and upgrades on the application to ensure optimal performance and fix identified bugs."],
		technologyUsed: "Magento 2, JavaScript and MySQL.",
		order: "6"
	}, {
		name: "Seniority",
		description: "Health care website for senior citizens",
		url: "https://www.seniority.in/",
		keyPoints: [ "Successfully integrated Google Tag Manager (GTM) and Adobe Tag Manager (DTM) for enhanced tracking and analytics, resulting in a 20% increase in website conversions", "Implemented Social Login integration for user convenience and streamlined registration process, resulting in a 15% increase in user retention."],
		technologyUsed: "Magento 2, JavaScript and MySQL.",
		order: "5"
	}, {
		name: "Rscoder",
		description: "Tech Blogging Website",
		url: "https://www.rscoder.com/",
		keyPoints: ["WordPress installation and maintenance", "Google Analytics integration"],
		technologyUsed: "Wordpress",
		order: "3"
	}, {
		name: "ShareBuddyApp",
		description: "App, where you can get the information about local commuter (auto/taxi) sharing points.",
		url: "https://play.google.com/store/apps/details?id=com.sharebuddyapp.sharebuddyapp",
		keyPoints: ["Developed and implemented RESTful APIs using JSON Web Tokens (JWT) for secure user authentication and authorization.", "Built a hybrid mobile application, resulting in a seamless user experience across multiple platforms."],
		technologyUsed: "NodeJS(ExpressJS), Flutter, MongoDB and PHP.",
		order: "2"
	}, {
		name: "Airpay Vyaapaar",
		description: "All Banking and Payment Services under one roof!",
		url: "https://vyaapaar.airpay.co.in/",
		keyPoints: ["Successfully developed and implemented GraphQL APIs for both mobile and web applications.","Implemented AWS SQS for a-synchronization tasks, resulting in a streamlined DMT process and a 25% reduction in load time."],
		technologyUsed: "NodeJS, GraphQL ,MYSQL, AWS Lambda",
		order: "1"
	},
	{
		name: "PDFsimpli",
		description: "PDFSimpli is an online software that allows users to convert multiple documents into PDFs and PDFs into multiple document types",
		url: "https://www.pdffiller.com/",
		keyPoints: [ "Successfully executed the upgrade and maintenance of a React.js application, resulting in a 20% increase in load time and improved performance.",
		"Implemented React Hooks, resulting in a 15% increase in code reusability and maintainability.",
		"Implemented best practices and standards in React.js development to ensure optimal performance and scalability."
		],
		technologyUsed: " ReactJS and JavaScript",
		order: "7"
	}
]
};
},{}],"Focm":[function(require,module,exports) {
"use strict";var n=e(require("./projects.json"));function e(n){return n&&n.__esModule?n:{default:n}}$(document).ready(function(){$(".sidenav").sidenav(),$(".carousel").carousel({fullWidth:!0,indicators:!0}),$(".tooltipped").tooltip()});for(var o=n.default.projects.sort(function(n,e){return n.order-e.order}),t=document.querySelector("#work"),a=' <h2 class="section-title">My Work</h2>',c=0;c<o.length;c++){var r=o[c],i=o[c].keyPoints.map(function(n){return"<li> <strong> ".concat(n," </strong> </li>")}).join(" ");a+='\n  <div class="card horizontal" data-aos="fade-up"\n  data-aos-anchor-placement="center-bottom">\n      <div class="card-image hide-on-small-only">\n      </div>\n      <div class="card-stacked">\n          <div class="card-content">\n              <h5>'.concat(r.name,"</h5>\n              <p>").concat(r.description,"</p>\n              <blockquote>\n                <ul>\n                  ").concat(i,'\n                </ul>\n              </blockquote>\n              <h6 class="">Technology used: - <em>').concat(r.technologyUsed,'</em></h6>\n          </div>\n          <div class="card-action">\n              <a href="').concat(r.url,'" target="blank">View Project</a>\n          </div>\n      </div>\n  </div>\n\n  ')}t.innerHTML=a;var s=document.querySelector("#copyright"),d=new Date;s.innerHTML="Copyright &#169; ".concat(d.getFullYear()," <span>Swarup Das</span>");
},{"./projects.json":"soBT"}]},{},["Focm"], null)
