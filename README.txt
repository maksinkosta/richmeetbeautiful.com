# https://www.richmeetbeautiful.com/
Interview project - Automation testing in JS with Testcafe tool

Hello, this is a demo for the purpose of showing small test of website https://www.richmeetbeautiful.com/ with Testcafe tool.

# Important: Known bug!
After debugging problems of Safari browser, it is found that safari cannot establish secure connection to https://www.richmeetbeautiful.com/ website and therefore blocks this test.
Due to short amount of time available, this is noted and will be debugged asap.


# Steps to get going:
1. Install Node.js from https://nodejs.org/en/download/.
2. Install Testcafe: Open power shell by pressing shift + right mouse click anywhere, then choose Open power shell window here. Type npm install -g testcafe.
3. Download project from github or received email.
4. Extract zip file in a folder.
5. In folder where you unziped project open power shell by pressing shift + right mouse click, then choose Open power shell window here.
6. If Testcafe was installed correctly, type: testcafe 'browser name' test.js.

    Example: 
    1. testcafe chrome test.js
    2. testcafe edge test.js
    3. testcafe firefox test.js
	etc..