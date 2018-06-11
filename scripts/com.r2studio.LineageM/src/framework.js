function Context() {};
Context.prototype.delay = function(){};
Context.prototype.sleep = function(){};
Context.prototype.getScreen = function(){};
Context.prototype.refreshScreen = function(){};
Context.prototype.getIntentByTask = function(){};
Context.prototype.getIntent = function(){};
Context.prototype.setIntent = function(){};
Context.prototype.doNextTask = function(){};
Context.prototype.waitForChange = function(){};
Context.prototype.exitPage = function(){};
Context.prototype.findImage = function(){};

function Robotmon() {};
Robotmon.prototype.addPage = function(){};
Robotmon.prototype.addTask = function(){};
Robotmon.prototype.addImage = function(){};
Robotmon.prototype.onInit = function(){};
Robotmon.prototype.start = function(){};
Robotmon.prototype.pause = function(){};
Robotmon.prototype.stop = function(){};
Robotmon.prototype.sendMessage = function(){};

function Rect() {};
function Point() {};
function FeaturePoint() {};
function Features() {};
function Image() {};

function Page() {};
Page.prototype.isPage = function(){};
Page.prototype.screenshot = function(){}
Page.prototype.onInit = function(){};
Page.prototype.onEnter = function(){};
Page.prototype.onExit = function(){};
Page.prototype.onStart = function(){};
Page.prototype.onPause = function(){};
Page.prototype.onStop = function(){};
Page.prototype.unknownTask = function(){};

function Task() {};
Task.prototype.isTask = function(){};
Task.prototype.onInit = function(){};
Task.prototype.onEnter = function(){};
Task.prototype.run = function(){};
Task.prototype.onExit = function(){};
