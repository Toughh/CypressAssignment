## Identified a problem or inefficiency in a process related to quality or development, and implemented a change to improve it
- Problem:
	- The manual regression testing process was inefficient and time-consuming. Testers had to spend a significant amount of 
	time executing repetitive test cases, which could have been automated. This manual effort also resulted in inconsistencies 
	in test coverage and missed defects, leading to poor product quality and customer dissatisfaction.
- Solution:
	- To address this problem, we as a QA team proposed implementing test automation for regression testing. We have identified the 
	most critical and business value test cases that were executed during each release cycle and prioritized them for automation. 
	Using tools like Selenium for web applications or Appium for mobile applications or nodejs for api, we have automated these 
	test cases to run automatically as part of the continuous integration (CI) pipeline.

## Recognised a pattern of bugs repeating and implemented a change to stop the pattern from recurring
- Problem:
	- The repeated crashes on specific devices and OS versions were causing frustration among users and impacting the app's ratings 
	and reviews on app stores.
- Solution: 
	- To address this problem, we as a QA team proposed implementing test automation using lamdatest that helps us to run our 
	automated scripts across multiple devices and platform.

## Attempted to convince someone to change the way they were working, even though they didn’t want to
- Problem:
	- One of the QA Automation engineer has made the test data file static and running regression in every sprint stating no time 
	for fixing the same.
- Solution: 
	- To address this problem, we had one-to-one meeting assisting on time management and leakage of defects if not using dynamic 
	data.

## Installation
1. Download and install nodejs and vscode editor:

    - NodeJs (Ver: Latest)
    - VSCode Editor (Ver: Latest)
	
## Pre-requisite
	- Go to Terminal and type this coomand:
		* ```cd path/to/your/project```
		* ```npm init -y``` (This is required only if you don't see package.json file in your directory)
		* ```npm install cypress --save-dev``` 
			- Once Cypress is installed, try to run: 
				* ```npx cypress open``` - If you see Cypress window, Cypress is successfully installed. You can close the window.
		* ```npm install chance --save-dev```
		* ```npm install --save-dev mochawesome``` - For reporting purpose. For Failed cases, it will capture the screenshot
		
## Execution
- ### Execute UI automation scripts in Windows OS
   - Go to Terminal and type this coomand: 
		* ```npx cypress run --spec "cypress/e2e/Testspec.cy.js"```
		
- ### Execute API automation scripts in Windows OS
   - Go to Terminal and type this coomand: 
		* ```npx cypress run --spec "cypress/e2e/apiTest/BookingTest.cy.js"```