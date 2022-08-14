gdjs.MenuCode = {};
gdjs.MenuCode.GDtittleObjects1= [];
gdjs.MenuCode.GDtittleObjects2= [];
gdjs.MenuCode.GDhObjects1= [];
gdjs.MenuCode.GDhObjects2= [];
gdjs.MenuCode.GDmObjects1= [];
gdjs.MenuCode.GDmObjects2= [];
gdjs.MenuCode.GDeObjects1= [];
gdjs.MenuCode.GDeObjects2= [];
gdjs.MenuCode.GDiObjects1= [];
gdjs.MenuCode.GDiObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDeObjects1Objects = Hashtable.newFrom({"e": gdjs.MenuCode.GDeObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDmObjects1Objects = Hashtable.newFrom({"m": gdjs.MenuCode.GDmObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDhObjects1Objects = Hashtable.newFrom({"h": gdjs.MenuCode.GDhObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDiObjects1Objects = Hashtable.newFrom({"i": gdjs.MenuCode.GDiObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("e"), gdjs.MenuCode.GDeObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pong", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("m"), gdjs.MenuCode.GDmObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDmObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pong3", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("h"), gdjs.MenuCode.GDhObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDhObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pong2", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("i"), gdjs.MenuCode.GDiObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDiObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pong4", true);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDtittleObjects1.length = 0;
gdjs.MenuCode.GDtittleObjects2.length = 0;
gdjs.MenuCode.GDhObjects1.length = 0;
gdjs.MenuCode.GDhObjects2.length = 0;
gdjs.MenuCode.GDmObjects1.length = 0;
gdjs.MenuCode.GDmObjects2.length = 0;
gdjs.MenuCode.GDeObjects1.length = 0;
gdjs.MenuCode.GDeObjects2.length = 0;
gdjs.MenuCode.GDiObjects1.length = 0;
gdjs.MenuCode.GDiObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
