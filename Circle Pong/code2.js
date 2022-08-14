gdjs.Pong4Code = {};
gdjs.Pong4Code.GDLeftArrowRoundButtonObjects2_1final = [];

gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3_3final = [];

gdjs.Pong4Code.GDRightArrowRoundButtonObjects2_1final = [];

gdjs.Pong4Code.GDRightArrowRoundButtonObjects3_3final = [];

gdjs.Pong4Code.GDPaddleObjects1= [];
gdjs.Pong4Code.GDPaddleObjects2= [];
gdjs.Pong4Code.GDPaddleObjects3= [];
gdjs.Pong4Code.GDPaddleObjects4= [];
gdjs.Pong4Code.GDCircleGuideObjects1= [];
gdjs.Pong4Code.GDCircleGuideObjects2= [];
gdjs.Pong4Code.GDCircleGuideObjects3= [];
gdjs.Pong4Code.GDCircleGuideObjects4= [];
gdjs.Pong4Code.GDBallObjects1= [];
gdjs.Pong4Code.GDBallObjects2= [];
gdjs.Pong4Code.GDBallObjects3= [];
gdjs.Pong4Code.GDBallObjects4= [];
gdjs.Pong4Code.GDControlHelpObjects1= [];
gdjs.Pong4Code.GDControlHelpObjects2= [];
gdjs.Pong4Code.GDControlHelpObjects3= [];
gdjs.Pong4Code.GDControlHelpObjects4= [];
gdjs.Pong4Code.GDBeginTextObjects1= [];
gdjs.Pong4Code.GDBeginTextObjects2= [];
gdjs.Pong4Code.GDBeginTextObjects3= [];
gdjs.Pong4Code.GDBeginTextObjects4= [];
gdjs.Pong4Code.GDbackObjects1= [];
gdjs.Pong4Code.GDbackObjects2= [];
gdjs.Pong4Code.GDbackObjects3= [];
gdjs.Pong4Code.GDbackObjects4= [];
gdjs.Pong4Code.GDScoreTextObjects1= [];
gdjs.Pong4Code.GDScoreTextObjects2= [];
gdjs.Pong4Code.GDScoreTextObjects3= [];
gdjs.Pong4Code.GDScoreTextObjects4= [];
gdjs.Pong4Code.GDHighScoreTextObjects1= [];
gdjs.Pong4Code.GDHighScoreTextObjects2= [];
gdjs.Pong4Code.GDHighScoreTextObjects3= [];
gdjs.Pong4Code.GDHighScoreTextObjects4= [];
gdjs.Pong4Code.GDLeftArrowRoundButtonObjects1= [];
gdjs.Pong4Code.GDLeftArrowRoundButtonObjects2= [];
gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3= [];
gdjs.Pong4Code.GDLeftArrowRoundButtonObjects4= [];
gdjs.Pong4Code.GDRightArrowRoundButtonObjects1= [];
gdjs.Pong4Code.GDRightArrowRoundButtonObjects2= [];
gdjs.Pong4Code.GDRightArrowRoundButtonObjects3= [];
gdjs.Pong4Code.GDRightArrowRoundButtonObjects4= [];

gdjs.Pong4Code.conditionTrue_0 = {val:false};
gdjs.Pong4Code.condition0IsTrue_0 = {val:false};
gdjs.Pong4Code.condition1IsTrue_0 = {val:false};
gdjs.Pong4Code.condition2IsTrue_0 = {val:false};
gdjs.Pong4Code.condition3IsTrue_0 = {val:false};
gdjs.Pong4Code.condition4IsTrue_0 = {val:false};
gdjs.Pong4Code.condition5IsTrue_0 = {val:false};
gdjs.Pong4Code.conditionTrue_1 = {val:false};
gdjs.Pong4Code.condition0IsTrue_1 = {val:false};
gdjs.Pong4Code.condition1IsTrue_1 = {val:false};
gdjs.Pong4Code.condition2IsTrue_1 = {val:false};
gdjs.Pong4Code.condition3IsTrue_1 = {val:false};
gdjs.Pong4Code.condition4IsTrue_1 = {val:false};
gdjs.Pong4Code.condition5IsTrue_1 = {val:false};
gdjs.Pong4Code.conditionTrue_2 = {val:false};
gdjs.Pong4Code.condition0IsTrue_2 = {val:false};
gdjs.Pong4Code.condition1IsTrue_2 = {val:false};
gdjs.Pong4Code.condition2IsTrue_2 = {val:false};
gdjs.Pong4Code.condition3IsTrue_2 = {val:false};
gdjs.Pong4Code.condition4IsTrue_2 = {val:false};
gdjs.Pong4Code.condition5IsTrue_2 = {val:false};
gdjs.Pong4Code.conditionTrue_3 = {val:false};
gdjs.Pong4Code.condition0IsTrue_3 = {val:false};
gdjs.Pong4Code.condition1IsTrue_3 = {val:false};
gdjs.Pong4Code.condition2IsTrue_3 = {val:false};
gdjs.Pong4Code.condition3IsTrue_3 = {val:false};
gdjs.Pong4Code.condition4IsTrue_3 = {val:false};
gdjs.Pong4Code.condition5IsTrue_3 = {val:false};


gdjs.Pong4Code.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.Pong4Code.condition0IsTrue_0.val = false;
{
gdjs.Pong4Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Pong4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.Pong4Code.GDLeftArrowRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.Pong4Code.GDRightArrowRoundButtonObjects1);
{for(var i = 0, len = gdjs.Pong4Code.GDLeftArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Pong4Code.GDLeftArrowRoundButtonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Pong4Code.GDRightArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Pong4Code.GDRightArrowRoundButtonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Pong4Code.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Pong4Code.condition0IsTrue_0.val = false;
{
gdjs.Pong4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Pong4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Pong4Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("CircleGuide"), gdjs.Pong4Code.GDCircleGuideObjects1);
gdjs.copyArray(runtimeScene.getObjects("HighScoreText"), gdjs.Pong4Code.GDHighScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.Pong4Code.GDPaddleObjects1);
{for(var i = 0, len = gdjs.Pong4Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Pong4Code.GDBallObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Pong4Code.GDCircleGuideObjects1.length ;i < len;++i) {
    gdjs.Pong4Code.GDCircleGuideObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Pong4Code.GDPaddleObjects1.length ;i < len;++i) {
    gdjs.Pong4Code.GDPaddleObjects1[i].returnVariable(gdjs.Pong4Code.GDPaddleObjects1[i].getVariables().get("PaddleAngle")).setNumber(90);
}
}{for(var i = 0, len = gdjs.Pong4Code.GDCircleGuideObjects1.length ;i < len;++i) {
    gdjs.Pong4Code.GDCircleGuideObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.Pong4Code.GDHighScoreTextObjects1.length ;i < len;++i) {
    gdjs.Pong4Code.GDHighScoreTextObjects1[i].setString("High Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
{ //Subevents
gdjs.Pong4Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDBeginTextObjects2Objects = Hashtable.newFrom({"BeginText": gdjs.Pong4Code.GDBeginTextObjects2});
gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDLeftArrowRoundButtonObjects4Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.Pong4Code.GDLeftArrowRoundButtonObjects4});
gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDRightArrowRoundButtonObjects4Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.Pong4Code.GDRightArrowRoundButtonObjects4});
gdjs.Pong4Code.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BeginText"), gdjs.Pong4Code.GDBeginTextObjects2);
gdjs.Pong4Code.GDLeftArrowRoundButtonObjects2.length = 0;

gdjs.Pong4Code.GDRightArrowRoundButtonObjects2.length = 0;


gdjs.Pong4Code.condition0IsTrue_0.val = false;
gdjs.Pong4Code.condition1IsTrue_0.val = false;
{
gdjs.Pong4Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDBeginTextObjects2Objects) > 0;
}if ( gdjs.Pong4Code.condition0IsTrue_0.val ) {
{
{gdjs.Pong4Code.conditionTrue_1 = gdjs.Pong4Code.condition1IsTrue_0;
gdjs.Pong4Code.GDLeftArrowRoundButtonObjects2_1final.length = 0;gdjs.Pong4Code.GDRightArrowRoundButtonObjects2_1final.length = 0;gdjs.Pong4Code.condition0IsTrue_1.val = false;
gdjs.Pong4Code.condition1IsTrue_1.val = false;
gdjs.Pong4Code.condition2IsTrue_1.val = false;
{
gdjs.Pong4Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Pong4Code.condition0IsTrue_1.val ) {
    gdjs.Pong4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Pong4Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Pong4Code.condition1IsTrue_1.val ) {
    gdjs.Pong4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3.length = 0;

gdjs.Pong4Code.GDRightArrowRoundButtonObjects3.length = 0;

{gdjs.Pong4Code.conditionTrue_2 = gdjs.Pong4Code.condition2IsTrue_1;
gdjs.Pong4Code.condition0IsTrue_2.val = false;
gdjs.Pong4Code.condition1IsTrue_2.val = false;
gdjs.Pong4Code.condition2IsTrue_2.val = false;
{
gdjs.Pong4Code.condition0IsTrue_2.val = gdjs.evtTools.systemInfo.isMobile();
}if ( gdjs.Pong4Code.condition0IsTrue_2.val ) {
{
gdjs.Pong4Code.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Pong4Code.condition1IsTrue_2.val ) {
{
{gdjs.Pong4Code.conditionTrue_3 = gdjs.Pong4Code.condition2IsTrue_2;
gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3_3final.length = 0;gdjs.Pong4Code.GDRightArrowRoundButtonObjects3_3final.length = 0;gdjs.Pong4Code.condition0IsTrue_3.val = false;
gdjs.Pong4Code.condition1IsTrue_3.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.Pong4Code.GDLeftArrowRoundButtonObjects4);
gdjs.Pong4Code.condition0IsTrue_3.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDLeftArrowRoundButtonObjects4Objects, runtimeScene, true, false);
if( gdjs.Pong4Code.condition0IsTrue_3.val ) {
    gdjs.Pong4Code.conditionTrue_3.val = true;
    for(var j = 0, jLen = gdjs.Pong4Code.GDLeftArrowRoundButtonObjects4.length;j<jLen;++j) {
        if ( gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3_3final.indexOf(gdjs.Pong4Code.GDLeftArrowRoundButtonObjects4[j]) === -1 )
            gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3_3final.push(gdjs.Pong4Code.GDLeftArrowRoundButtonObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.Pong4Code.GDRightArrowRoundButtonObjects4);
gdjs.Pong4Code.condition1IsTrue_3.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDRightArrowRoundButtonObjects4Objects, runtimeScene, true, false);
if( gdjs.Pong4Code.condition1IsTrue_3.val ) {
    gdjs.Pong4Code.conditionTrue_3.val = true;
    for(var j = 0, jLen = gdjs.Pong4Code.GDRightArrowRoundButtonObjects4.length;j<jLen;++j) {
        if ( gdjs.Pong4Code.GDRightArrowRoundButtonObjects3_3final.indexOf(gdjs.Pong4Code.GDRightArrowRoundButtonObjects4[j]) === -1 )
            gdjs.Pong4Code.GDRightArrowRoundButtonObjects3_3final.push(gdjs.Pong4Code.GDRightArrowRoundButtonObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3_3final, gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3);
gdjs.copyArray(gdjs.Pong4Code.GDRightArrowRoundButtonObjects3_3final, gdjs.Pong4Code.GDRightArrowRoundButtonObjects3);
}
}
}}
}
gdjs.Pong4Code.conditionTrue_2.val = true && gdjs.Pong4Code.condition0IsTrue_2.val && gdjs.Pong4Code.condition1IsTrue_2.val && gdjs.Pong4Code.condition2IsTrue_2.val;
}
if( gdjs.Pong4Code.condition2IsTrue_1.val ) {
    gdjs.Pong4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.Pong4Code.GDLeftArrowRoundButtonObjects2_1final.indexOf(gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3[j]) === -1 )
            gdjs.Pong4Code.GDLeftArrowRoundButtonObjects2_1final.push(gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.Pong4Code.GDRightArrowRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.Pong4Code.GDRightArrowRoundButtonObjects2_1final.indexOf(gdjs.Pong4Code.GDRightArrowRoundButtonObjects3[j]) === -1 )
            gdjs.Pong4Code.GDRightArrowRoundButtonObjects2_1final.push(gdjs.Pong4Code.GDRightArrowRoundButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Pong4Code.GDLeftArrowRoundButtonObjects2_1final, gdjs.Pong4Code.GDLeftArrowRoundButtonObjects2);
gdjs.copyArray(gdjs.Pong4Code.GDRightArrowRoundButtonObjects2_1final, gdjs.Pong4Code.GDRightArrowRoundButtonObjects2);
}
}
}}
if (gdjs.Pong4Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Pong4Code.GDBallObjects2);
/* Reuse gdjs.Pong4Code.GDBeginTextObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.Pong4Code.GDPaddleObjects2);
{for(var i = 0, len = gdjs.Pong4Code.GDBallObjects2.length ;i < len;++i) {
    gdjs.Pong4Code.GDBallObjects2[i].addForceTowardObject((gdjs.Pong4Code.GDPaddleObjects2.length !== 0 ? gdjs.Pong4Code.GDPaddleObjects2[0] : null), 750, 1);
}
}{for(var i = 0, len = gdjs.Pong4Code.GDBeginTextObjects2.length ;i < len;++i) {
    gdjs.Pong4Code.GDBeginTextObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDLeftArrowRoundButtonObjects3Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3});
gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDRightArrowRoundButtonObjects3Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.Pong4Code.GDRightArrowRoundButtonObjects3});
gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Pong4Code.GDBallObjects1});
gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDPaddleObjects1Objects = Hashtable.newFrom({"Paddle": gdjs.Pong4Code.GDPaddleObjects1});
gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDPaddleObjects1Objects = Hashtable.newFrom({"Paddle": gdjs.Pong4Code.GDPaddleObjects1});
gdjs.Pong4Code.eventsList3 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("CircleGuide"), gdjs.Pong4Code.GDCircleGuideObjects2);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.Pong4Code.GDPaddleObjects2);
{for(var i = 0, len = gdjs.Pong4Code.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.Pong4Code.GDPaddleObjects2[i].putAroundObject((gdjs.Pong4Code.GDCircleGuideObjects2.length !== 0 ? gdjs.Pong4Code.GDCircleGuideObjects2[0] : null), (( gdjs.Pong4Code.GDCircleGuideObjects2.length === 0 ) ? 0 :gdjs.Pong4Code.GDCircleGuideObjects2[0].getWidth()) / 2, (gdjs.RuntimeObject.getVariableNumber(gdjs.Pong4Code.GDPaddleObjects2[i].getVariables().get("PaddleAngle"))));
}
}{for(var i = 0, len = gdjs.Pong4Code.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.Pong4Code.GDPaddleObjects2[i].setAngle((gdjs.Pong4Code.GDPaddleObjects2[i].getAngleToPosition((( gdjs.Pong4Code.GDCircleGuideObjects2.length === 0 ) ? 0 :gdjs.Pong4Code.GDCircleGuideObjects2[0].getCenterXInScene()), (( gdjs.Pong4Code.GDCircleGuideObjects2.length === 0 ) ? 0 :gdjs.Pong4Code.GDCircleGuideObjects2[0].getCenterYInScene()))) + 90);
}
}}

}


{



}


{

gdjs.Pong4Code.GDLeftArrowRoundButtonObjects2.length = 0;


gdjs.Pong4Code.condition0IsTrue_0.val = false;
{
{gdjs.Pong4Code.conditionTrue_1 = gdjs.Pong4Code.condition0IsTrue_0;
gdjs.Pong4Code.GDLeftArrowRoundButtonObjects2_1final.length = 0;gdjs.Pong4Code.condition0IsTrue_1.val = false;
gdjs.Pong4Code.condition1IsTrue_1.val = false;
gdjs.Pong4Code.condition2IsTrue_1.val = false;
gdjs.Pong4Code.condition3IsTrue_1.val = false;
gdjs.Pong4Code.condition4IsTrue_1.val = false;
{
gdjs.Pong4Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Pong4Code.condition0IsTrue_1.val ) {
    gdjs.Pong4Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3);
{gdjs.Pong4Code.conditionTrue_2 = gdjs.Pong4Code.condition1IsTrue_1;
gdjs.Pong4Code.condition0IsTrue_2.val = false;
gdjs.Pong4Code.condition1IsTrue_2.val = false;
{
gdjs.Pong4Code.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDLeftArrowRoundButtonObjects3Objects, runtimeScene, true, false);
}if ( gdjs.Pong4Code.condition0IsTrue_2.val ) {
{
gdjs.Pong4Code.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.Pong4Code.conditionTrue_2.val = true && gdjs.Pong4Code.condition0IsTrue_2.val && gdjs.Pong4Code.condition1IsTrue_2.val;
}
if( gdjs.Pong4Code.condition1IsTrue_1.val ) {
    gdjs.Pong4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.Pong4Code.GDLeftArrowRoundButtonObjects2_1final.indexOf(gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3[j]) === -1 )
            gdjs.Pong4Code.GDLeftArrowRoundButtonObjects2_1final.push(gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3[j]);
    }
}
}
{
gdjs.Pong4Code.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.Pong4Code.condition2IsTrue_1.val ) {
    gdjs.Pong4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Pong4Code.condition3IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "CLICK_STICK_LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.Pong4Code.condition3IsTrue_1.val ) {
    gdjs.Pong4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Pong4Code.condition4IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "CLICK_STICK_LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.Pong4Code.condition4IsTrue_1.val ) {
    gdjs.Pong4Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.Pong4Code.GDLeftArrowRoundButtonObjects2_1final, gdjs.Pong4Code.GDLeftArrowRoundButtonObjects2);
}
}
}if (gdjs.Pong4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.Pong4Code.GDPaddleObjects2);
{for(var i = 0, len = gdjs.Pong4Code.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.Pong4Code.GDPaddleObjects2[i].returnVariable(gdjs.Pong4Code.GDPaddleObjects2[i].getVariables().get("PaddleAngle")).add(7);
}
}}

}


{

gdjs.Pong4Code.GDRightArrowRoundButtonObjects2.length = 0;


gdjs.Pong4Code.condition0IsTrue_0.val = false;
{
{gdjs.Pong4Code.conditionTrue_1 = gdjs.Pong4Code.condition0IsTrue_0;
gdjs.Pong4Code.GDRightArrowRoundButtonObjects2_1final.length = 0;gdjs.Pong4Code.condition0IsTrue_1.val = false;
gdjs.Pong4Code.condition1IsTrue_1.val = false;
gdjs.Pong4Code.condition2IsTrue_1.val = false;
gdjs.Pong4Code.condition3IsTrue_1.val = false;
gdjs.Pong4Code.condition4IsTrue_1.val = false;
{
gdjs.Pong4Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Pong4Code.condition0IsTrue_1.val ) {
    gdjs.Pong4Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.Pong4Code.GDRightArrowRoundButtonObjects3);
{gdjs.Pong4Code.conditionTrue_2 = gdjs.Pong4Code.condition1IsTrue_1;
gdjs.Pong4Code.condition0IsTrue_2.val = false;
gdjs.Pong4Code.condition1IsTrue_2.val = false;
{
gdjs.Pong4Code.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDRightArrowRoundButtonObjects3Objects, runtimeScene, true, false);
}if ( gdjs.Pong4Code.condition0IsTrue_2.val ) {
{
gdjs.Pong4Code.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.Pong4Code.conditionTrue_2.val = true && gdjs.Pong4Code.condition0IsTrue_2.val && gdjs.Pong4Code.condition1IsTrue_2.val;
}
if( gdjs.Pong4Code.condition1IsTrue_1.val ) {
    gdjs.Pong4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Pong4Code.GDRightArrowRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.Pong4Code.GDRightArrowRoundButtonObjects2_1final.indexOf(gdjs.Pong4Code.GDRightArrowRoundButtonObjects3[j]) === -1 )
            gdjs.Pong4Code.GDRightArrowRoundButtonObjects2_1final.push(gdjs.Pong4Code.GDRightArrowRoundButtonObjects3[j]);
    }
}
}
{
gdjs.Pong4Code.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "RIGHT", "RIGHT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.Pong4Code.condition2IsTrue_1.val ) {
    gdjs.Pong4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Pong4Code.condition3IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "CLICK_STICK_RIGHT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.Pong4Code.condition3IsTrue_1.val ) {
    gdjs.Pong4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Pong4Code.condition4IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "CLICK_STICK_RIGHT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.Pong4Code.condition4IsTrue_1.val ) {
    gdjs.Pong4Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.Pong4Code.GDRightArrowRoundButtonObjects2_1final, gdjs.Pong4Code.GDRightArrowRoundButtonObjects2);
}
}
}if (gdjs.Pong4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.Pong4Code.GDPaddleObjects2);
{for(var i = 0, len = gdjs.Pong4Code.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.Pong4Code.GDPaddleObjects2[i].returnVariable(gdjs.Pong4Code.GDPaddleObjects2[i].getVariables().get("PaddleAngle")).sub(7);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Pong4Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.Pong4Code.GDPaddleObjects1);

gdjs.Pong4Code.condition0IsTrue_0.val = false;
gdjs.Pong4Code.condition1IsTrue_0.val = false;
{
gdjs.Pong4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDBallObjects1Objects, gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDPaddleObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Pong4Code.condition0IsTrue_0.val ) {
{
{gdjs.Pong4Code.conditionTrue_1 = gdjs.Pong4Code.condition1IsTrue_0;
gdjs.Pong4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9055972);
}
}}
if (gdjs.Pong4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Pong4Code.GDBallObjects1 */
/* Reuse gdjs.Pong4Code.GDPaddleObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Pong4Code.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.Pong4Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Pong4Code.GDBallObjects1[i].getBehavior("Bounce").BounceOff(gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDPaddleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Bounce.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Pong4Code.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Pong4Code.GDScoreTextObjects1[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};gdjs.Pong4Code.eventsList4 = function(runtimeScene) {

{


gdjs.Pong4Code.eventsList2(runtimeScene);
}


{


gdjs.Pong4Code.eventsList3(runtimeScene);
}


};gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Pong4Code.GDBallObjects1});
gdjs.Pong4Code.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.Pong4Code.condition0IsTrue_0.val = false;
{
gdjs.Pong4Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0));
}if (gdjs.Pong4Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}}

}


};gdjs.Pong4Code.eventsList6 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Pong4Code.GDBallObjects1);

gdjs.Pong4Code.condition0IsTrue_0.val = false;
gdjs.Pong4Code.condition1IsTrue_0.val = false;
{
gdjs.Pong4Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDBallObjects1Objects) <= 0;
}if ( gdjs.Pong4Code.condition0IsTrue_0.val ) {
{
{gdjs.Pong4Code.conditionTrue_1 = gdjs.Pong4Code.condition1IsTrue_0;
gdjs.Pong4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9060108);
}
}}
if (gdjs.Pong4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "lose.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), true);
}
{ //Subevents
gdjs.Pong4Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.Pong4Code.GDbackObjects1});
gdjs.Pong4Code.eventsList7 = function(runtimeScene) {

{



}


{


gdjs.Pong4Code.eventsList1(runtimeScene);
}


{


gdjs.Pong4Code.eventsList4(runtimeScene);
}


{


gdjs.Pong4Code.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.Pong4Code.GDbackObjects1);

gdjs.Pong4Code.condition0IsTrue_0.val = false;
gdjs.Pong4Code.condition1IsTrue_0.val = false;
{
gdjs.Pong4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pong4Code.mapOfGDgdjs_46Pong4Code_46GDbackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Pong4Code.condition0IsTrue_0.val ) {
{
gdjs.Pong4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Pong4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};

gdjs.Pong4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pong4Code.GDPaddleObjects1.length = 0;
gdjs.Pong4Code.GDPaddleObjects2.length = 0;
gdjs.Pong4Code.GDPaddleObjects3.length = 0;
gdjs.Pong4Code.GDPaddleObjects4.length = 0;
gdjs.Pong4Code.GDCircleGuideObjects1.length = 0;
gdjs.Pong4Code.GDCircleGuideObjects2.length = 0;
gdjs.Pong4Code.GDCircleGuideObjects3.length = 0;
gdjs.Pong4Code.GDCircleGuideObjects4.length = 0;
gdjs.Pong4Code.GDBallObjects1.length = 0;
gdjs.Pong4Code.GDBallObjects2.length = 0;
gdjs.Pong4Code.GDBallObjects3.length = 0;
gdjs.Pong4Code.GDBallObjects4.length = 0;
gdjs.Pong4Code.GDControlHelpObjects1.length = 0;
gdjs.Pong4Code.GDControlHelpObjects2.length = 0;
gdjs.Pong4Code.GDControlHelpObjects3.length = 0;
gdjs.Pong4Code.GDControlHelpObjects4.length = 0;
gdjs.Pong4Code.GDBeginTextObjects1.length = 0;
gdjs.Pong4Code.GDBeginTextObjects2.length = 0;
gdjs.Pong4Code.GDBeginTextObjects3.length = 0;
gdjs.Pong4Code.GDBeginTextObjects4.length = 0;
gdjs.Pong4Code.GDbackObjects1.length = 0;
gdjs.Pong4Code.GDbackObjects2.length = 0;
gdjs.Pong4Code.GDbackObjects3.length = 0;
gdjs.Pong4Code.GDbackObjects4.length = 0;
gdjs.Pong4Code.GDScoreTextObjects1.length = 0;
gdjs.Pong4Code.GDScoreTextObjects2.length = 0;
gdjs.Pong4Code.GDScoreTextObjects3.length = 0;
gdjs.Pong4Code.GDScoreTextObjects4.length = 0;
gdjs.Pong4Code.GDHighScoreTextObjects1.length = 0;
gdjs.Pong4Code.GDHighScoreTextObjects2.length = 0;
gdjs.Pong4Code.GDHighScoreTextObjects3.length = 0;
gdjs.Pong4Code.GDHighScoreTextObjects4.length = 0;
gdjs.Pong4Code.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.Pong4Code.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.Pong4Code.GDLeftArrowRoundButtonObjects3.length = 0;
gdjs.Pong4Code.GDLeftArrowRoundButtonObjects4.length = 0;
gdjs.Pong4Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.Pong4Code.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.Pong4Code.GDRightArrowRoundButtonObjects3.length = 0;
gdjs.Pong4Code.GDRightArrowRoundButtonObjects4.length = 0;

gdjs.Pong4Code.eventsList7(runtimeScene);
return;

}

gdjs['Pong4Code'] = gdjs.Pong4Code;
