gdjs.Pong3Code = {};
gdjs.Pong3Code.GDLeftArrowRoundButtonObjects2_1final = [];

gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3_3final = [];

gdjs.Pong3Code.GDRightArrowRoundButtonObjects2_1final = [];

gdjs.Pong3Code.GDRightArrowRoundButtonObjects3_3final = [];

gdjs.Pong3Code.GDPaddleObjects1= [];
gdjs.Pong3Code.GDPaddleObjects2= [];
gdjs.Pong3Code.GDPaddleObjects3= [];
gdjs.Pong3Code.GDPaddleObjects4= [];
gdjs.Pong3Code.GDCircleGuideObjects1= [];
gdjs.Pong3Code.GDCircleGuideObjects2= [];
gdjs.Pong3Code.GDCircleGuideObjects3= [];
gdjs.Pong3Code.GDCircleGuideObjects4= [];
gdjs.Pong3Code.GDBallObjects1= [];
gdjs.Pong3Code.GDBallObjects2= [];
gdjs.Pong3Code.GDBallObjects3= [];
gdjs.Pong3Code.GDBallObjects4= [];
gdjs.Pong3Code.GDControlHelpObjects1= [];
gdjs.Pong3Code.GDControlHelpObjects2= [];
gdjs.Pong3Code.GDControlHelpObjects3= [];
gdjs.Pong3Code.GDControlHelpObjects4= [];
gdjs.Pong3Code.GDBeginTextObjects1= [];
gdjs.Pong3Code.GDBeginTextObjects2= [];
gdjs.Pong3Code.GDBeginTextObjects3= [];
gdjs.Pong3Code.GDBeginTextObjects4= [];
gdjs.Pong3Code.GDbackObjects1= [];
gdjs.Pong3Code.GDbackObjects2= [];
gdjs.Pong3Code.GDbackObjects3= [];
gdjs.Pong3Code.GDbackObjects4= [];
gdjs.Pong3Code.GDScoreTextObjects1= [];
gdjs.Pong3Code.GDScoreTextObjects2= [];
gdjs.Pong3Code.GDScoreTextObjects3= [];
gdjs.Pong3Code.GDScoreTextObjects4= [];
gdjs.Pong3Code.GDHighScoreTextObjects1= [];
gdjs.Pong3Code.GDHighScoreTextObjects2= [];
gdjs.Pong3Code.GDHighScoreTextObjects3= [];
gdjs.Pong3Code.GDHighScoreTextObjects4= [];
gdjs.Pong3Code.GDLeftArrowRoundButtonObjects1= [];
gdjs.Pong3Code.GDLeftArrowRoundButtonObjects2= [];
gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3= [];
gdjs.Pong3Code.GDLeftArrowRoundButtonObjects4= [];
gdjs.Pong3Code.GDRightArrowRoundButtonObjects1= [];
gdjs.Pong3Code.GDRightArrowRoundButtonObjects2= [];
gdjs.Pong3Code.GDRightArrowRoundButtonObjects3= [];
gdjs.Pong3Code.GDRightArrowRoundButtonObjects4= [];

gdjs.Pong3Code.conditionTrue_0 = {val:false};
gdjs.Pong3Code.condition0IsTrue_0 = {val:false};
gdjs.Pong3Code.condition1IsTrue_0 = {val:false};
gdjs.Pong3Code.condition2IsTrue_0 = {val:false};
gdjs.Pong3Code.condition3IsTrue_0 = {val:false};
gdjs.Pong3Code.condition4IsTrue_0 = {val:false};
gdjs.Pong3Code.condition5IsTrue_0 = {val:false};
gdjs.Pong3Code.conditionTrue_1 = {val:false};
gdjs.Pong3Code.condition0IsTrue_1 = {val:false};
gdjs.Pong3Code.condition1IsTrue_1 = {val:false};
gdjs.Pong3Code.condition2IsTrue_1 = {val:false};
gdjs.Pong3Code.condition3IsTrue_1 = {val:false};
gdjs.Pong3Code.condition4IsTrue_1 = {val:false};
gdjs.Pong3Code.condition5IsTrue_1 = {val:false};
gdjs.Pong3Code.conditionTrue_2 = {val:false};
gdjs.Pong3Code.condition0IsTrue_2 = {val:false};
gdjs.Pong3Code.condition1IsTrue_2 = {val:false};
gdjs.Pong3Code.condition2IsTrue_2 = {val:false};
gdjs.Pong3Code.condition3IsTrue_2 = {val:false};
gdjs.Pong3Code.condition4IsTrue_2 = {val:false};
gdjs.Pong3Code.condition5IsTrue_2 = {val:false};
gdjs.Pong3Code.conditionTrue_3 = {val:false};
gdjs.Pong3Code.condition0IsTrue_3 = {val:false};
gdjs.Pong3Code.condition1IsTrue_3 = {val:false};
gdjs.Pong3Code.condition2IsTrue_3 = {val:false};
gdjs.Pong3Code.condition3IsTrue_3 = {val:false};
gdjs.Pong3Code.condition4IsTrue_3 = {val:false};
gdjs.Pong3Code.condition5IsTrue_3 = {val:false};


gdjs.Pong3Code.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.Pong3Code.condition0IsTrue_0.val = false;
{
gdjs.Pong3Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Pong3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.Pong3Code.GDLeftArrowRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.Pong3Code.GDRightArrowRoundButtonObjects1);
{for(var i = 0, len = gdjs.Pong3Code.GDLeftArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Pong3Code.GDLeftArrowRoundButtonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Pong3Code.GDRightArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Pong3Code.GDRightArrowRoundButtonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Pong3Code.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Pong3Code.condition0IsTrue_0.val = false;
{
gdjs.Pong3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Pong3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Pong3Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("CircleGuide"), gdjs.Pong3Code.GDCircleGuideObjects1);
gdjs.copyArray(runtimeScene.getObjects("HighScoreText"), gdjs.Pong3Code.GDHighScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.Pong3Code.GDPaddleObjects1);
{for(var i = 0, len = gdjs.Pong3Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Pong3Code.GDBallObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Pong3Code.GDCircleGuideObjects1.length ;i < len;++i) {
    gdjs.Pong3Code.GDCircleGuideObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Pong3Code.GDPaddleObjects1.length ;i < len;++i) {
    gdjs.Pong3Code.GDPaddleObjects1[i].returnVariable(gdjs.Pong3Code.GDPaddleObjects1[i].getVariables().get("PaddleAngle")).setNumber(90);
}
}{for(var i = 0, len = gdjs.Pong3Code.GDCircleGuideObjects1.length ;i < len;++i) {
    gdjs.Pong3Code.GDCircleGuideObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.Pong3Code.GDHighScoreTextObjects1.length ;i < len;++i) {
    gdjs.Pong3Code.GDHighScoreTextObjects1[i].setString("High Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
{ //Subevents
gdjs.Pong3Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDBeginTextObjects2Objects = Hashtable.newFrom({"BeginText": gdjs.Pong3Code.GDBeginTextObjects2});
gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDLeftArrowRoundButtonObjects4Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.Pong3Code.GDLeftArrowRoundButtonObjects4});
gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDRightArrowRoundButtonObjects4Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.Pong3Code.GDRightArrowRoundButtonObjects4});
gdjs.Pong3Code.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BeginText"), gdjs.Pong3Code.GDBeginTextObjects2);
gdjs.Pong3Code.GDLeftArrowRoundButtonObjects2.length = 0;

gdjs.Pong3Code.GDRightArrowRoundButtonObjects2.length = 0;


gdjs.Pong3Code.condition0IsTrue_0.val = false;
gdjs.Pong3Code.condition1IsTrue_0.val = false;
{
gdjs.Pong3Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDBeginTextObjects2Objects) > 0;
}if ( gdjs.Pong3Code.condition0IsTrue_0.val ) {
{
{gdjs.Pong3Code.conditionTrue_1 = gdjs.Pong3Code.condition1IsTrue_0;
gdjs.Pong3Code.GDLeftArrowRoundButtonObjects2_1final.length = 0;gdjs.Pong3Code.GDRightArrowRoundButtonObjects2_1final.length = 0;gdjs.Pong3Code.condition0IsTrue_1.val = false;
gdjs.Pong3Code.condition1IsTrue_1.val = false;
gdjs.Pong3Code.condition2IsTrue_1.val = false;
{
gdjs.Pong3Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Pong3Code.condition0IsTrue_1.val ) {
    gdjs.Pong3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Pong3Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Pong3Code.condition1IsTrue_1.val ) {
    gdjs.Pong3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3.length = 0;

gdjs.Pong3Code.GDRightArrowRoundButtonObjects3.length = 0;

{gdjs.Pong3Code.conditionTrue_2 = gdjs.Pong3Code.condition2IsTrue_1;
gdjs.Pong3Code.condition0IsTrue_2.val = false;
gdjs.Pong3Code.condition1IsTrue_2.val = false;
gdjs.Pong3Code.condition2IsTrue_2.val = false;
{
gdjs.Pong3Code.condition0IsTrue_2.val = gdjs.evtTools.systemInfo.isMobile();
}if ( gdjs.Pong3Code.condition0IsTrue_2.val ) {
{
gdjs.Pong3Code.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Pong3Code.condition1IsTrue_2.val ) {
{
{gdjs.Pong3Code.conditionTrue_3 = gdjs.Pong3Code.condition2IsTrue_2;
gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3_3final.length = 0;gdjs.Pong3Code.GDRightArrowRoundButtonObjects3_3final.length = 0;gdjs.Pong3Code.condition0IsTrue_3.val = false;
gdjs.Pong3Code.condition1IsTrue_3.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.Pong3Code.GDLeftArrowRoundButtonObjects4);
gdjs.Pong3Code.condition0IsTrue_3.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDLeftArrowRoundButtonObjects4Objects, runtimeScene, true, false);
if( gdjs.Pong3Code.condition0IsTrue_3.val ) {
    gdjs.Pong3Code.conditionTrue_3.val = true;
    for(var j = 0, jLen = gdjs.Pong3Code.GDLeftArrowRoundButtonObjects4.length;j<jLen;++j) {
        if ( gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3_3final.indexOf(gdjs.Pong3Code.GDLeftArrowRoundButtonObjects4[j]) === -1 )
            gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3_3final.push(gdjs.Pong3Code.GDLeftArrowRoundButtonObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.Pong3Code.GDRightArrowRoundButtonObjects4);
gdjs.Pong3Code.condition1IsTrue_3.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDRightArrowRoundButtonObjects4Objects, runtimeScene, true, false);
if( gdjs.Pong3Code.condition1IsTrue_3.val ) {
    gdjs.Pong3Code.conditionTrue_3.val = true;
    for(var j = 0, jLen = gdjs.Pong3Code.GDRightArrowRoundButtonObjects4.length;j<jLen;++j) {
        if ( gdjs.Pong3Code.GDRightArrowRoundButtonObjects3_3final.indexOf(gdjs.Pong3Code.GDRightArrowRoundButtonObjects4[j]) === -1 )
            gdjs.Pong3Code.GDRightArrowRoundButtonObjects3_3final.push(gdjs.Pong3Code.GDRightArrowRoundButtonObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3_3final, gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3);
gdjs.copyArray(gdjs.Pong3Code.GDRightArrowRoundButtonObjects3_3final, gdjs.Pong3Code.GDRightArrowRoundButtonObjects3);
}
}
}}
}
gdjs.Pong3Code.conditionTrue_2.val = true && gdjs.Pong3Code.condition0IsTrue_2.val && gdjs.Pong3Code.condition1IsTrue_2.val && gdjs.Pong3Code.condition2IsTrue_2.val;
}
if( gdjs.Pong3Code.condition2IsTrue_1.val ) {
    gdjs.Pong3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.Pong3Code.GDLeftArrowRoundButtonObjects2_1final.indexOf(gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3[j]) === -1 )
            gdjs.Pong3Code.GDLeftArrowRoundButtonObjects2_1final.push(gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.Pong3Code.GDRightArrowRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.Pong3Code.GDRightArrowRoundButtonObjects2_1final.indexOf(gdjs.Pong3Code.GDRightArrowRoundButtonObjects3[j]) === -1 )
            gdjs.Pong3Code.GDRightArrowRoundButtonObjects2_1final.push(gdjs.Pong3Code.GDRightArrowRoundButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Pong3Code.GDLeftArrowRoundButtonObjects2_1final, gdjs.Pong3Code.GDLeftArrowRoundButtonObjects2);
gdjs.copyArray(gdjs.Pong3Code.GDRightArrowRoundButtonObjects2_1final, gdjs.Pong3Code.GDRightArrowRoundButtonObjects2);
}
}
}}
if (gdjs.Pong3Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Pong3Code.GDBallObjects2);
/* Reuse gdjs.Pong3Code.GDBeginTextObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.Pong3Code.GDPaddleObjects2);
{for(var i = 0, len = gdjs.Pong3Code.GDBallObjects2.length ;i < len;++i) {
    gdjs.Pong3Code.GDBallObjects2[i].addForceTowardObject((gdjs.Pong3Code.GDPaddleObjects2.length !== 0 ? gdjs.Pong3Code.GDPaddleObjects2[0] : null), 375, 1);
}
}{for(var i = 0, len = gdjs.Pong3Code.GDBeginTextObjects2.length ;i < len;++i) {
    gdjs.Pong3Code.GDBeginTextObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDLeftArrowRoundButtonObjects3Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3});
gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDRightArrowRoundButtonObjects3Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.Pong3Code.GDRightArrowRoundButtonObjects3});
gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Pong3Code.GDBallObjects1});
gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDPaddleObjects1Objects = Hashtable.newFrom({"Paddle": gdjs.Pong3Code.GDPaddleObjects1});
gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDPaddleObjects1Objects = Hashtable.newFrom({"Paddle": gdjs.Pong3Code.GDPaddleObjects1});
gdjs.Pong3Code.eventsList3 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("CircleGuide"), gdjs.Pong3Code.GDCircleGuideObjects2);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.Pong3Code.GDPaddleObjects2);
{for(var i = 0, len = gdjs.Pong3Code.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.Pong3Code.GDPaddleObjects2[i].putAroundObject((gdjs.Pong3Code.GDCircleGuideObjects2.length !== 0 ? gdjs.Pong3Code.GDCircleGuideObjects2[0] : null), (( gdjs.Pong3Code.GDCircleGuideObjects2.length === 0 ) ? 0 :gdjs.Pong3Code.GDCircleGuideObjects2[0].getWidth()) / 2, (gdjs.RuntimeObject.getVariableNumber(gdjs.Pong3Code.GDPaddleObjects2[i].getVariables().get("PaddleAngle"))));
}
}{for(var i = 0, len = gdjs.Pong3Code.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.Pong3Code.GDPaddleObjects2[i].setAngle((gdjs.Pong3Code.GDPaddleObjects2[i].getAngleToPosition((( gdjs.Pong3Code.GDCircleGuideObjects2.length === 0 ) ? 0 :gdjs.Pong3Code.GDCircleGuideObjects2[0].getCenterXInScene()), (( gdjs.Pong3Code.GDCircleGuideObjects2.length === 0 ) ? 0 :gdjs.Pong3Code.GDCircleGuideObjects2[0].getCenterYInScene()))) + 90);
}
}}

}


{



}


{

gdjs.Pong3Code.GDLeftArrowRoundButtonObjects2.length = 0;


gdjs.Pong3Code.condition0IsTrue_0.val = false;
{
{gdjs.Pong3Code.conditionTrue_1 = gdjs.Pong3Code.condition0IsTrue_0;
gdjs.Pong3Code.GDLeftArrowRoundButtonObjects2_1final.length = 0;gdjs.Pong3Code.condition0IsTrue_1.val = false;
gdjs.Pong3Code.condition1IsTrue_1.val = false;
gdjs.Pong3Code.condition2IsTrue_1.val = false;
gdjs.Pong3Code.condition3IsTrue_1.val = false;
gdjs.Pong3Code.condition4IsTrue_1.val = false;
{
gdjs.Pong3Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Pong3Code.condition0IsTrue_1.val ) {
    gdjs.Pong3Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3);
{gdjs.Pong3Code.conditionTrue_2 = gdjs.Pong3Code.condition1IsTrue_1;
gdjs.Pong3Code.condition0IsTrue_2.val = false;
gdjs.Pong3Code.condition1IsTrue_2.val = false;
{
gdjs.Pong3Code.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDLeftArrowRoundButtonObjects3Objects, runtimeScene, true, false);
}if ( gdjs.Pong3Code.condition0IsTrue_2.val ) {
{
gdjs.Pong3Code.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.Pong3Code.conditionTrue_2.val = true && gdjs.Pong3Code.condition0IsTrue_2.val && gdjs.Pong3Code.condition1IsTrue_2.val;
}
if( gdjs.Pong3Code.condition1IsTrue_1.val ) {
    gdjs.Pong3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.Pong3Code.GDLeftArrowRoundButtonObjects2_1final.indexOf(gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3[j]) === -1 )
            gdjs.Pong3Code.GDLeftArrowRoundButtonObjects2_1final.push(gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3[j]);
    }
}
}
{
gdjs.Pong3Code.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.Pong3Code.condition2IsTrue_1.val ) {
    gdjs.Pong3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Pong3Code.condition3IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "CLICK_STICK_LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.Pong3Code.condition3IsTrue_1.val ) {
    gdjs.Pong3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Pong3Code.condition4IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "CLICK_STICK_LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.Pong3Code.condition4IsTrue_1.val ) {
    gdjs.Pong3Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.Pong3Code.GDLeftArrowRoundButtonObjects2_1final, gdjs.Pong3Code.GDLeftArrowRoundButtonObjects2);
}
}
}if (gdjs.Pong3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.Pong3Code.GDPaddleObjects2);
{for(var i = 0, len = gdjs.Pong3Code.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.Pong3Code.GDPaddleObjects2[i].returnVariable(gdjs.Pong3Code.GDPaddleObjects2[i].getVariables().get("PaddleAngle")).add(3);
}
}}

}


{

gdjs.Pong3Code.GDRightArrowRoundButtonObjects2.length = 0;


gdjs.Pong3Code.condition0IsTrue_0.val = false;
{
{gdjs.Pong3Code.conditionTrue_1 = gdjs.Pong3Code.condition0IsTrue_0;
gdjs.Pong3Code.GDRightArrowRoundButtonObjects2_1final.length = 0;gdjs.Pong3Code.condition0IsTrue_1.val = false;
gdjs.Pong3Code.condition1IsTrue_1.val = false;
gdjs.Pong3Code.condition2IsTrue_1.val = false;
gdjs.Pong3Code.condition3IsTrue_1.val = false;
gdjs.Pong3Code.condition4IsTrue_1.val = false;
{
gdjs.Pong3Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Pong3Code.condition0IsTrue_1.val ) {
    gdjs.Pong3Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.Pong3Code.GDRightArrowRoundButtonObjects3);
{gdjs.Pong3Code.conditionTrue_2 = gdjs.Pong3Code.condition1IsTrue_1;
gdjs.Pong3Code.condition0IsTrue_2.val = false;
gdjs.Pong3Code.condition1IsTrue_2.val = false;
{
gdjs.Pong3Code.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDRightArrowRoundButtonObjects3Objects, runtimeScene, true, false);
}if ( gdjs.Pong3Code.condition0IsTrue_2.val ) {
{
gdjs.Pong3Code.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.Pong3Code.conditionTrue_2.val = true && gdjs.Pong3Code.condition0IsTrue_2.val && gdjs.Pong3Code.condition1IsTrue_2.val;
}
if( gdjs.Pong3Code.condition1IsTrue_1.val ) {
    gdjs.Pong3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Pong3Code.GDRightArrowRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.Pong3Code.GDRightArrowRoundButtonObjects2_1final.indexOf(gdjs.Pong3Code.GDRightArrowRoundButtonObjects3[j]) === -1 )
            gdjs.Pong3Code.GDRightArrowRoundButtonObjects2_1final.push(gdjs.Pong3Code.GDRightArrowRoundButtonObjects3[j]);
    }
}
}
{
gdjs.Pong3Code.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "RIGHT", "RIGHT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.Pong3Code.condition2IsTrue_1.val ) {
    gdjs.Pong3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Pong3Code.condition3IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "CLICK_STICK_RIGHT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.Pong3Code.condition3IsTrue_1.val ) {
    gdjs.Pong3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Pong3Code.condition4IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "CLICK_STICK_RIGHT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.Pong3Code.condition4IsTrue_1.val ) {
    gdjs.Pong3Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.Pong3Code.GDRightArrowRoundButtonObjects2_1final, gdjs.Pong3Code.GDRightArrowRoundButtonObjects2);
}
}
}if (gdjs.Pong3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.Pong3Code.GDPaddleObjects2);
{for(var i = 0, len = gdjs.Pong3Code.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.Pong3Code.GDPaddleObjects2[i].returnVariable(gdjs.Pong3Code.GDPaddleObjects2[i].getVariables().get("PaddleAngle")).sub(3);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Pong3Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.Pong3Code.GDPaddleObjects1);

gdjs.Pong3Code.condition0IsTrue_0.val = false;
gdjs.Pong3Code.condition1IsTrue_0.val = false;
{
gdjs.Pong3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDBallObjects1Objects, gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDPaddleObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Pong3Code.condition0IsTrue_0.val ) {
{
{gdjs.Pong3Code.conditionTrue_1 = gdjs.Pong3Code.condition1IsTrue_0;
gdjs.Pong3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8864572);
}
}}
if (gdjs.Pong3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Pong3Code.GDBallObjects1 */
/* Reuse gdjs.Pong3Code.GDPaddleObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Pong3Code.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.Pong3Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Pong3Code.GDBallObjects1[i].getBehavior("Bounce").BounceOff(gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDPaddleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Bounce.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Pong3Code.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Pong3Code.GDScoreTextObjects1[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};gdjs.Pong3Code.eventsList4 = function(runtimeScene) {

{


gdjs.Pong3Code.eventsList2(runtimeScene);
}


{


gdjs.Pong3Code.eventsList3(runtimeScene);
}


};gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Pong3Code.GDBallObjects1});
gdjs.Pong3Code.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.Pong3Code.condition0IsTrue_0.val = false;
{
gdjs.Pong3Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0));
}if (gdjs.Pong3Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}}

}


};gdjs.Pong3Code.eventsList6 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Pong3Code.GDBallObjects1);

gdjs.Pong3Code.condition0IsTrue_0.val = false;
gdjs.Pong3Code.condition1IsTrue_0.val = false;
{
gdjs.Pong3Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDBallObjects1Objects) <= 0;
}if ( gdjs.Pong3Code.condition0IsTrue_0.val ) {
{
{gdjs.Pong3Code.conditionTrue_1 = gdjs.Pong3Code.condition1IsTrue_0;
gdjs.Pong3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8866812);
}
}}
if (gdjs.Pong3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "lose.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), true);
}
{ //Subevents
gdjs.Pong3Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.Pong3Code.GDbackObjects1});
gdjs.Pong3Code.eventsList7 = function(runtimeScene) {

{



}


{


gdjs.Pong3Code.eventsList1(runtimeScene);
}


{


gdjs.Pong3Code.eventsList4(runtimeScene);
}


{


gdjs.Pong3Code.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.Pong3Code.GDbackObjects1);

gdjs.Pong3Code.condition0IsTrue_0.val = false;
gdjs.Pong3Code.condition1IsTrue_0.val = false;
{
gdjs.Pong3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pong3Code.mapOfGDgdjs_46Pong3Code_46GDbackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Pong3Code.condition0IsTrue_0.val ) {
{
gdjs.Pong3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Pong3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};

gdjs.Pong3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pong3Code.GDPaddleObjects1.length = 0;
gdjs.Pong3Code.GDPaddleObjects2.length = 0;
gdjs.Pong3Code.GDPaddleObjects3.length = 0;
gdjs.Pong3Code.GDPaddleObjects4.length = 0;
gdjs.Pong3Code.GDCircleGuideObjects1.length = 0;
gdjs.Pong3Code.GDCircleGuideObjects2.length = 0;
gdjs.Pong3Code.GDCircleGuideObjects3.length = 0;
gdjs.Pong3Code.GDCircleGuideObjects4.length = 0;
gdjs.Pong3Code.GDBallObjects1.length = 0;
gdjs.Pong3Code.GDBallObjects2.length = 0;
gdjs.Pong3Code.GDBallObjects3.length = 0;
gdjs.Pong3Code.GDBallObjects4.length = 0;
gdjs.Pong3Code.GDControlHelpObjects1.length = 0;
gdjs.Pong3Code.GDControlHelpObjects2.length = 0;
gdjs.Pong3Code.GDControlHelpObjects3.length = 0;
gdjs.Pong3Code.GDControlHelpObjects4.length = 0;
gdjs.Pong3Code.GDBeginTextObjects1.length = 0;
gdjs.Pong3Code.GDBeginTextObjects2.length = 0;
gdjs.Pong3Code.GDBeginTextObjects3.length = 0;
gdjs.Pong3Code.GDBeginTextObjects4.length = 0;
gdjs.Pong3Code.GDbackObjects1.length = 0;
gdjs.Pong3Code.GDbackObjects2.length = 0;
gdjs.Pong3Code.GDbackObjects3.length = 0;
gdjs.Pong3Code.GDbackObjects4.length = 0;
gdjs.Pong3Code.GDScoreTextObjects1.length = 0;
gdjs.Pong3Code.GDScoreTextObjects2.length = 0;
gdjs.Pong3Code.GDScoreTextObjects3.length = 0;
gdjs.Pong3Code.GDScoreTextObjects4.length = 0;
gdjs.Pong3Code.GDHighScoreTextObjects1.length = 0;
gdjs.Pong3Code.GDHighScoreTextObjects2.length = 0;
gdjs.Pong3Code.GDHighScoreTextObjects3.length = 0;
gdjs.Pong3Code.GDHighScoreTextObjects4.length = 0;
gdjs.Pong3Code.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.Pong3Code.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.Pong3Code.GDLeftArrowRoundButtonObjects3.length = 0;
gdjs.Pong3Code.GDLeftArrowRoundButtonObjects4.length = 0;
gdjs.Pong3Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.Pong3Code.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.Pong3Code.GDRightArrowRoundButtonObjects3.length = 0;
gdjs.Pong3Code.GDRightArrowRoundButtonObjects4.length = 0;

gdjs.Pong3Code.eventsList7(runtimeScene);
return;

}

gdjs['Pong3Code'] = gdjs.Pong3Code;
