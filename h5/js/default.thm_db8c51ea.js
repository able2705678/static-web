window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = {"popupTitle":{"fontFamily":"SimHei","size":48,"textColor":"0xfffef1","stroke":2,"strokeColor":"0x8a5a0f"},"subTitle":{"fontFamily":"SimHei","size":23,"textColor":"0xe1a85e"},"yellowBtnLable":{"fontFamily":"SimHei","size":24,"textColor":"0xFFF3E4","stroke":2,"strokeColor":"0x583717"},"blueBtnLable":{"fontFamily":"SimHei","size":24,"textColor":"0xe5f4ff","stroke":2,"strokeColor":"0x22375b"},"grayeBtnLable":{"fontFamily":"SimHei","size":24,"textColor":"0xffffff","stroke":2,"strokeColor":"0x353535"},"navigationbarBtn":{"fontFamily":"SimHei","size":24,"textColor":"0xd1ad80"},"navigationbarBtnSelected":{"fontFamily":"SimHei","size":24,"textColor":"0xfffef1","stroke":2,"strokeColor":"0x90631b"},"chineseLightOrange":{"fontFamily":"SimHei","textColor":"0xb48d64"},"chineseGreyWhite":{"fontFamily":"SimHei","textColor":"0xd5cdb9"},"chineseBlue":{"fontFamily":"SimHei","textColor":"0x76b0b5"},"chineseJacinth":{"fontFamily":"SimHei","textColor":"0xbf5d3a"},"chinesWhiteStroke":{"fontFamily":"SimHei","textColor":"0xf3e4cd","stroke":2,"strokeColor":"0x2f1c15"},"chinesYellowStroke":{"fontFamily":"SimHei","textColor":"0xebe29d","stroke":2,"strokeColor":"0x211a00"},"figureLightOrange":{"fontFamily":"Arial","textColor":"0xb48d64","bold":true},"figureGreyWhite":{"fontFamily":"Arial","textColor":"0xd5cdb9","bold":true},"figureBlue":{"fontFamily":"Arial","textColor":"0x76b0b5","bold":true},"figureJacinth":{"fontFamily":"Arial","textColor":"0xbf5d3a","bold":true},"figureWhiteStroke":{"fontFamily":"Arial","textColor":"0xf3e4cd","stroke":2,"strokeColor":"0x2f1c15","bold":true},"figureYellowStroke":{"fontFamily":"Arial","textColor":"0xebe29d","stroke":2,"strokeColor":"0x211a00","bold":true},"chineseLightWhite":{"fontFamily":"Microsoft YaHei","textColor":"0xf3e4cd","stroke":2,"strokeColor":"0x2d242d","bold":"ture"},"chineseWhite":{"fontFamily":"Microsoft YaHei","textColor":"0xffffff","stroke":2,"strokeColor":"0x2d242d","bold":"ture"},"chineseGray":{"fontFamily":"Microsoft YaHei","textColor":"0x7F8993","stroke":2,"strokeColor":"0x2d242d","bold":"ture"},"chineseBeige":{"fontFamily":"Microsoft YaHei","textColor":"0xF0C78C","stroke":2,"strokeColor":"0x2d242d","bold":"ture"},"chineseOrange":{"fontFamily":"Microsoft YaHei","textColor":"0xff7e00","stroke":2,"strokeColor":"0x2d242d","bold":"ture"},"chineseGreen":{"fontFamily":"Microsoft YaHei","textColor":"0x86cb0e","stroke":2,"strokeColor":"0x2d242d","bold":"ture"},"chineseYellow":{"fontFamily":"Microsoft YaHei","textColor":"0xffBC2D","stroke":2,"strokeColor":"0x2d242d","bold":"ture"},"figureLightWhite":{"fontFamily":"Arial","textColor":"0xf3e4cd","stroke":2,"strokeColor":"0x2d242d","bold":"ture"},"figureWhite":{"fontFamily":"Arial","textColor":"0xffffff","stroke":2,"strokeColor":"0x2d242d","bold":"ture"},"figureGray":{"fontFamily":"Arial","textColor":"0x7F8993","stroke":2,"strokeColor":"0x2d242d","bold":"ture"},"figureBeige":{"fontFamily":"Arial","textColor":"0xF0C78C","stroke":2,"strokeColor":"0x2d242d","bold":"ture"},"figureYellow":{"fontFamily":"Arial","textColor":"0xffbc2d","stroke":2,"strokeColor":"0x2d242d","bold":"ture"},"figureGreen":{"fontFamily":"Arial","textColor":"0x84fc06","stroke":2,"strokeColor":"0x2d242d","bold":"ture"}};
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x2A2E34)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0x3B3F46;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3AA655)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Rect1","fillColor",0x2E8B4F)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Rect1","fillColor",0xA0A0A0)
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Rect1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0xFFFFFF;
		t.height = 22;
		t.strokeColor = 0x707070;
		t.strokeWeight = 2;
		t.width = 22;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 8;
		this.minWidth = 20;
	}
	var _proto = HScrollBarSkin.prototype;

	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.width = 200;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Rect();
		this.track = t;
		t.fillColor = 0xCCCCCC;
		t.height = 6;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Rect();
		this.thumb = t;
		t.ellipseHeight = 16;
		t.ellipseWidth = 16;
		t.fillColor = 0x3AA655;
		t.height = 16;
		t.verticalCenter = 0;
		t.width = 16;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Rect1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xFFFFFF;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0x333333;
		t.strokeWeight = 1;
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x3B3F46;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Rect1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xCCCCCC;
		t.percentHeight = 100;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Rect();
		this.thumb = t;
		t.fillColor = 0x3AA655;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3AA655)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Rect1","fillColor",0x2E8B4F)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Rect1","fillColor",0xA0A0A0)
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Rect1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 22;
		t.ellipseWidth = 22;
		t.fillColor = 0xFFFFFF;
		t.height = 22;
		t.strokeColor = 0x707070;
		t.strokeWeight = 2;
		t.width = 22;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeColor = 0xCCCCCC;
		t.strokeWeight = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Rect1_i(),this._Rect2_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Rect1","fillColor",0x3AA655),
					new eui.SetProperty("_Rect2","horizontalCenter",12)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Rect1","fillColor",0x2E8B4F),
					new eui.SetProperty("_Rect2","horizontalCenter",12)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Rect1","fillColor",0xA0A0A0),
					new eui.SetProperty("_Rect2","horizontalCenter",12)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 24;
		t.ellipseWidth = 24;
		t.fillColor = 0xAAAAAA;
		t.height = 24;
		t.width = 50;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		this._Rect2 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 20;
		t.horizontalCenter = -12;
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 20;
		this.minWidth = 8;
	}
	var _proto = VScrollBarSkin.prototype;

	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Rect();
		this.track = t;
		t.fillColor = 0xCCCCCC;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.width = 6;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Rect();
		this.thumb = t;
		t.ellipseHeight = 16;
		t.ellipseWidth = 16;
		t.fillColor = 0x3AA655;
		t.height = 16;
		t.horizontalCenter = 0;
		t.width = 16;
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/ui/adventure/AdventureItemSkin.exml'] = window.cookAdventureItemSkin = (function (_super) {
	__extends(cookAdventureItemSkin, _super);
	var cookAdventureItemSkin$Skin1 = 	(function (_super) {
		__extends(cookAdventureItemSkin$Skin1, _super);
		function cookAdventureItemSkin$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookAdventureItemSkin$Skin1.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.height = 81;
			t.scale9Grid = new egret.Rectangle(32,13,196,85);
			t.source = "greenBtn_bg_png";
			t.width = 170;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "adventure_btn_png";
			t.verticalCenter = -6;
			return t;
		};
		return cookAdventureItemSkin$Skin1;
	})(eui.Skin);

	function cookAdventureItemSkin() {
		_super.call(this);
		this.skinParts = ["adventureBtn","_rewardList"];
		
		this.elementsContent = [this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.banner"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.title"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.time"],[0],this._Label1,"text");
	}
	var _proto = cookAdventureItemSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 680;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Image1_i(),this._Image2_i(),this.adventureBtn_i(),this._Group1_i(),this._rewardList_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf6f6e6;
		t.height = 146;
		t.width = 680;
		t.y = 65;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xe8e8d3;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 680;
		t.y = 211;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.x = 32;
		t.y = 14;
		return t;
	};
	_proto.adventureBtn_i = function () {
		var t = new cookMyButton();
		this.adventureBtn = t;
		t.anchorOffsetX = 85;
		t.anchorOffsetY = 40.5;
		t.x = 565;
		t.y = 263.5;
		t.skinName = cookAdventureItemSkin$Skin1;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 1;
		t.top = 14;
		t.elementsContent = [this._Rect3_i(),this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 40;
		t.fillColor = 0x5f5552;
		t.height = 40;
		t.left = 25;
		t.right = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 49;
		t.source = "time_icon_png";
		t.width = 47;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.left = 52;
		t.right = 10;
		t.size = 28;
		t.verticalCenter = 0;
		return t;
	};
	_proto._rewardList_i = function () {
		var t = new eui.List();
		this._rewardList = t;
		t.height = 114;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = cookAdventurePropListItem;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.verticalCenter = -17.5;
		t.width = 630;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnWidth = 110;
		t.horizontalGap = 20;
		t.requestedColumnCount = 5;
		t.requestedRowCount = 1;
		t.rowHeight = 114;
		return t;
	};
	return cookAdventureItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/adventure/AdventurePropList.exml'] = window.cookAdventurePropListSkin = (function (_super) {
	__extends(cookAdventurePropListSkin, _super);
	function cookAdventurePropListSkin() {
		_super.call(this);
		this.skinParts = ["_list"];
		
		this.elementsContent = [this._list_i()];
	}
	var _proto = cookAdventurePropListSkin.prototype;

	_proto._list_i = function () {
		var t = new eui.List();
		this._list = t;
		t.percentHeight = 100;
		t.itemRendererSkinName = cookAdventurePropListItem;
		t.percentWidth = 100;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnWidth = 110;
		t.horizontalGap = 20;
		t.requestedColumnCount = 5;
		t.requestedRowCount = 1;
		t.rowHeight = 114;
		return t;
	};
	return cookAdventurePropListSkin;
})(eui.Skin);generateEUI.paths['resource/ui/adventure/AdventurePropListItem.exml'] = window.cookAdventurePropListItem = (function (_super) {
	__extends(cookAdventurePropListItem, _super);
	function cookAdventurePropListItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 114;
		this.width = 110;
		this.elementsContent = [this._Image1_i()];
		this._Image2_i();
		
		this._Image3_i();
		
		this._Label1_i();
		
		this._Image4_i();
		
		this.states = [
			new eui.State ("unknown",
				[
					new eui.AddItems("_Image3","",1,"")
				])
			,
			new eui.State ("known",
				[
					new eui.AddItems("_Label1","",1,""),
					new eui.AddItems("_Image4","",1,"")
				])
			,
			new eui.State ("vague",
				[
					new eui.AddItems("_Image2","",1,"")
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.curState"],[0],this,"currentState");
		eui.Binding.$bindProperties(this, ["hostComponent.data.vague_sc"],[0],this._Image2,"scaleX");
		eui.Binding.$bindProperties(this, ["hostComponent.data.vague_sc"],[0],this._Image2,"scaleY");
		eui.Binding.$bindProperties(this, ["hostComponent.data.vague_img"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.prop_img"],[0],this._Image4,"source");
	}
	var _proto = cookAdventurePropListItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "item_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.horizontalCenter = 0;
		t.source = "wenhao_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bottom = 6;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.textColor = 0x715527;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.verticalCenter = -13;
		return t;
	};
	return cookAdventurePropListItem;
})(eui.Skin);generateEUI.paths['resource/ui/adventure/AdventureSkin.exml'] = window.cookAdventureSkin = (function (_super) {
	__extends(cookAdventureSkin, _super);
	var cookAdventureSkin$Skin2 = 	(function (_super) {
		__extends(cookAdventureSkin$Skin2, _super);
		function cookAdventureSkin$Skin2() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookAdventureSkin$Skin2.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scale9Grid = new egret.Rectangle(32,13,196,85);
			t.source = "greenBtn_bg_png";
			t.width = 400;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "open_btn_text_png";
			t.verticalCenter = -6;
			return t;
		};
		return cookAdventureSkin$Skin2;
	})(eui.Skin);

	var cookAdventureSkin$Skin3 = 	(function (_super) {
		__extends(cookAdventureSkin$Skin3, _super);
		function cookAdventureSkin$Skin3() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookAdventureSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		return cookAdventureSkin$Skin3;
	})(eui.Skin);

	var cookAdventureSkin$Skin4 = 	(function (_super) {
		__extends(cookAdventureSkin$Skin4, _super);
		function cookAdventureSkin$Skin4() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookAdventureSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		return cookAdventureSkin$Skin4;
	})(eui.Skin);

	var cookAdventureSkin$Skin5 = 	(function (_super) {
		__extends(cookAdventureSkin$Skin5, _super);
		function cookAdventureSkin$Skin5() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookAdventureSkin$Skin5.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scale9Grid = new egret.Rectangle(32,13,196,85);
			t.source = "greenBtn_bg_png";
			t.width = 400;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "adventure_share_text_png";
			t.verticalCenter = -6;
			return t;
		};
		return cookAdventureSkin$Skin5;
	})(eui.Skin);

	var cookAdventureSkin$Skin6 = 	(function (_super) {
		__extends(cookAdventureSkin$Skin6, _super);
		function cookAdventureSkin$Skin6() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookAdventureSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(82,32,2,2);
			t.source = "yellow_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 30;
			t.source = "half_time_text2_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.left = 30;
			t.source = "shareIcon_png";
			t.verticalCenter = 0;
			return t;
		};
		return cookAdventureSkin$Skin6;
	})(eui.Skin);

	var cookAdventureSkin$Skin7 = 	(function (_super) {
		__extends(cookAdventureSkin$Skin7, _super);
		function cookAdventureSkin$Skin7() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookAdventureSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(82,32,2,2);
			t.source = "yellow_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 30;
			t.source = "half_time_text2_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.left = 30;
			t.source = "playIcon2_png";
			t.verticalCenter = 0;
			return t;
		};
		return cookAdventureSkin$Skin7;
	})(eui.Skin);

	var cookAdventureSkin$Skin8 = 	(function (_super) {
		__extends(cookAdventureSkin$Skin8, _super);
		function cookAdventureSkin$Skin8() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("adventure",
					[
						new eui.SetProperty("_Image1","source","grey_btn_png"),
						new eui.SetProperty("_Image2","source","adventure_ing_png")
					])
				,
				new eui.State ("receive",
					[
						new eui.SetProperty("_Image2","source","adventure_get_png")
					])
				,
				new eui.State ("doubleReceive",
					[
						new eui.SetProperty("_Image2","source","double_text_png")
					])
			];
		}
		var _proto = cookAdventureSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(82,32,2,2);
			t.source = "red_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookAdventureSkin$Skin8;
	})(eui.Skin);

	var cookAdventureSkin$Skin9 = 	(function (_super) {
		__extends(cookAdventureSkin$Skin9, _super);
		function cookAdventureSkin$Skin9() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("select",
					[
						new eui.SetProperty("_Image1","source","merge_select_png")
					])
				,
				new eui.State ("unselect",
					[
						new eui.SetProperty("_Image1","source","merge_unselect_png")
					])
			];
		}
		var _proto = cookAdventureSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 42;
			t.left = 0;
			t.verticalCenter = 0;
			t.width = 42;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.fontFamily = "Microsoft YaHei";
			t.left = 54;
			t.size = 26;
			t.text = "本次双倍";
			t.textColor = 0x715527;
			t.verticalCenter = 0;
			return t;
		};
		return cookAdventureSkin$Skin9;
	})(eui.Skin);

	function cookAdventureSkin() {
		_super.call(this);
		this.skinParts = ["openChoose","closeBtn","dbGroup","mainGroup","closeChoose","changeBtn","chooseAll","chooseGroup","avatarMask","inviteBtn","videoBtn","receiveBtn","adventureList","doubleBtn","adventureIngGroup","broadcastGroup","container"];
		
		this.elementsContent = [this.container_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.adv_banner"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.userName"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.avatar"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.time"],[0],this._Label3,"text");
	}
	var _proto = cookAdventureSkin.prototype;

	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.mainGroup_i(),this.chooseGroup_i(),this.adventureIngGroup_i(),this.broadcastGroup_i()];
		return t;
	};
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this.openChoose_i(),this.closeBtn_i(),this.dbGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "adventure_bg_jpg";
		t.top = 0;
		t.x = 0;
		return t;
	};
	_proto.openChoose_i = function () {
		var t = new cookMyButton();
		this.openChoose = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 55.5;
		t.horizontalCenter = 0;
		t.y = 1139.5;
		t.skinName = cookAdventureSkin$Skin2;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 27.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 34;
		t.x = 50.5;
		t.skinName = cookAdventureSkin$Skin3;
		return t;
	};
	_proto.dbGroup_i = function () {
		var t = new eui.Group();
		this.dbGroup = t;
		t.height = 0;
		t.horizontalCenter = 30;
		t.top = 958;
		t.width = 0;
		return t;
	};
	_proto.chooseGroup_i = function () {
		var t = new eui.Group();
		this.chooseGroup = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect1_i(),this.chooseAll_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.chooseAll_i = function () {
		var t = new eui.Group();
		this.chooseAll = t;
		t.height = 1334;
		t.width = 750;
		t.x = 0;
		t.elementsContent = [this._Label1_i(),this.closeChoose_i(),this._Group1_i(),this.changeBtn_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "请选择冒险";
		t.x = 285;
		t.y = 76;
		return t;
	};
	_proto.closeChoose_i = function () {
		var t = new cookMyButton();
		this.closeChoose = t;
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 27.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 50.5;
		t.y = 88.5;
		t.skinName = cookAdventureSkin$Skin4;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 148;
		return t;
	};
	_proto.changeBtn_i = function () {
		var t = new cookMyButton();
		this.changeBtn = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 55.5;
		t.bottom = 40;
		t.horizontalCenter = 0;
		t.skinName = cookAdventureSkin$Skin5;
		return t;
	};
	_proto.adventureIngGroup_i = function () {
		var t = new eui.Group();
		this.adventureIngGroup = t;
		t.bottom = 0;
		t.height = 454;
		t.horizontalCenter = 0;
		t.width = 750;
		t.elementsContent = [this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Image2_i(),this._Label2_i(),this.avatarMask_i(),this._Image3_i(),this.inviteBtn_i(),this.videoBtn_i(),this.receiveBtn_i(),this._Group2_i(),this.adventureList_i(),this.doubleBtn_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 12;
		t.ellipseWidth = 12;
		t.fillAlpha = 0.6;
		t.fillColor = 0x444444;
		t.height = 20;
		t.horizontalCenter = 0;
		t.width = 680;
		t.y = 408;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 12;
		t.ellipseWidth = 12;
		t.fillColor = 0xe8e8d3;
		t.height = 202;
		t.horizontalCenter = 0;
		t.width = 680;
		t.y = 218;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf6f6e6;
		t.height = 166;
		t.horizontalCenter = 0;
		t.width = 680;
		t.y = 65;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 109;
		t.size = 32;
		t.top = 22;
		return t;
	};
	_proto.avatarMask_i = function () {
		var t = new eui.Rect();
		this.avatarMask = t;
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.height = 60;
		t.width = 60;
		t.x = 32;
		t.y = 8;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.height = 60;
		t.mask = this.avatarMask;
		t.width = 60;
		t.x = 32;
		t.y = 8;
		return t;
	};
	_proto.inviteBtn_i = function () {
		var t = new cookMyButton();
		this.inviteBtn = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 48;
		t.height = 100;
		t.verticalCenter = 70;
		t.width = 320;
		t.x = 225;
		t.skinName = cookAdventureSkin$Skin6;
		return t;
	};
	_proto.videoBtn_i = function () {
		var t = new cookMyButton();
		this.videoBtn = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 48;
		t.height = 100;
		t.verticalCenter = 70;
		t.visible = false;
		t.width = 320;
		t.x = 225;
		t.skinName = cookAdventureSkin$Skin7;
		return t;
	};
	_proto.receiveBtn_i = function () {
		var t = new cookMyButton();
		this.receiveBtn = t;
		t.anchorOffsetX = 130;
		t.anchorOffsetY = 48;
		t.currentState = "adventure";
		t.height = 100;
		t.right = 65;
		t.verticalCenter = 70;
		t.width = 260;
		t.skinName = cookAdventureSkin$Skin8;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 36;
		t.top = 14;
		t.elementsContent = [this._Rect5_i(),this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 30;
		t.fillColor = 0x5f5552;
		t.height = 40;
		t.left = 25;
		t.right = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 49;
		t.source = "time_icon_png";
		t.width = 47;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.left = 52;
		t.right = 10;
		t.size = 28;
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto.adventureList_i = function () {
		var t = new eui.List();
		this.adventureList = t;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = cookAdventurePropListItem;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.verticalCenter = -76;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnWidth = 110;
		t.horizontalGap = 20;
		t.requestedColumnCount = 5;
		t.requestedRowCount = 1;
		t.rowHeight = 114;
		return t;
	};
	_proto.doubleBtn_i = function () {
		var t = new cookMyButton();
		this.doubleBtn = t;
		t.bottom = 45;
		t.currentState = "select";
		t.height = 60;
		t.right = 123;
		t.skinName = cookAdventureSkin$Skin9;
		return t;
	};
	_proto.broadcastGroup_i = function () {
		var t = new eui.Group();
		this.broadcastGroup = t;
		t.alpha = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.y = 169;
		t.elementsContent = [this._Rect6_i(),this._Image5_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 12;
		t.fillAlpha = 0.7;
		t.fillColor = 0x000000;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "broadcast_icon_png";
		t.verticalCenter = 0;
		t.x = 21;
		return t;
	};
	return cookAdventureSkin;
})(eui.Skin);generateEUI.paths['resource/ui/bag/BagItemSkin.exml'] = window.cookBagItemSkin = (function (_super) {
	__extends(cookBagItemSkin, _super);
	var cookBagItemSkin$Skin10 = 	(function (_super) {
		__extends(cookBagItemSkin$Skin10, _super);
		function cookBagItemSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookBagItemSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "props_use_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookBagItemSkin$Skin10;
	})(eui.Skin);

	var cookBagItemSkin$Skin11 = 	(function (_super) {
		__extends(cookBagItemSkin$Skin11, _super);
		function cookBagItemSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookBagItemSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "props_open_shop_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookBagItemSkin$Skin11;
	})(eui.Skin);

	function cookBagItemSkin() {
		_super.call(this);
		this.skinParts = ["prop_group","shop_group"];
		
		this.elementsContent = [this.prop_group_i(),this.shop_group_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.prop_img"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.timeText"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.numText"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.prop_id"],[0],this._cookMyButton1,"name");
	}
	var _proto = cookBagItemSkin.prototype;

	_proto.prop_group_i = function () {
		var t = new eui.Group();
		this.prop_group = t;
		t.height = 263;
		t.width = 185;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._cookMyButton1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 240;
		t.scale9Grid = new egret.Rectangle(64,40,183,137);
		t.source = "shop_item_bg_png";
		t.width = 185;
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.verticalCenter = -22;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 34;
		t.textColor = 0xdbbd8e;
		t.y = 16;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.textColor = 0x715527;
		t.y = 166;
		return t;
	};
	_proto._cookMyButton1_i = function () {
		var t = new cookMyButton();
		this._cookMyButton1 = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 34;
		t.horizontalCenter = 0;
		t.y = 233;
		t.skinName = cookBagItemSkin$Skin10;
		return t;
	};
	_proto.shop_group_i = function () {
		var t = new eui.Group();
		this.shop_group = t;
		t.visible = false;
		t.width = 185;
		t.elementsContent = [this._Image3_i(),this._Rect1_i(),this._Label3_i(),this._Image4_i(),this._cookMyButton2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 240;
		t.scale9Grid = new egret.Rectangle(64,40,183,137);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_item_bg_png";
		t.width = 185;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 3;
		t.fillColor = 0xded8b8;
		t.height = 45;
		t.horizontalCenter = 0;
		t.width = 166;
		t.y = 10;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "商店";
		t.textColor = 0xaf5600;
		t.y = 13;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "props_png";
		t.y = 72;
		return t;
	};
	_proto._cookMyButton2_i = function () {
		var t = new cookMyButton();
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 35.5;
		t.horizontalCenter = 0.5;
		t.name = "shop";
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 233;
		t.skinName = cookBagItemSkin$Skin11;
		return t;
	};
	return cookBagItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/MyButton.exml'] = window.cookMyButtonSkin = (function (_super) {
	__extends(cookMyButtonSkin, _super);
	function cookMyButtonSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetStateProperty(this, ["hostComponent.icon.up"],[0],this._Image1,"source")
				])
			,
			new eui.State ("down",
				[
					new eui.SetStateProperty(this, ["hostComponent.icon.down"],[0],this._Image1,"source")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = cookMyButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		return t;
	};
	return cookMyButtonSkin;
})(eui.Skin);generateEUI.paths['resource/ui/bag/BagSkin.exml'] = window.cookBagSkin = (function (_super) {
	__extends(cookBagSkin, _super);
	var cookBagSkin$Skin12 = 	(function (_super) {
		__extends(cookBagSkin$Skin12, _super);
		function cookBagSkin$Skin12() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookBagSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		return cookBagSkin$Skin12;
	})(eui.Skin);

	function cookBagSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","none_tips","item1_goup","item2_goup","item3_goup","effect_goup","item_group","prop_container","Scroller","double_close","double_open"];
		
		this.elementsContent = [this._Group6_i()];
	}
	var _proto = cookBagSkin.prototype;

	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Group5_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 1067;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 652;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Label1_i(),this._Image2_i(),this.closeBtn_i(),this.item_group_i(),this._Group1_i(),this._Group4_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 25;
		t.fillColor = 0xf6f6e6;
		t.height = 1067;
		t.horizontalCenter = 0;
		t.verticalCenter = -1;
		t.width = 652;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "popup_header_png";
		t.y = -14;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 46;
		t.text = "加倍效果";
		t.x = 204;
		t.y = 22;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bag_title_png";
		t.y = 420;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 27.5;
		t.skinName = "cookMyButtonSkin";
		t.x = 593.5;
		t.y = 43.5;
		t.skinName = cookBagSkin$Skin12;
		return t;
	};
	_proto.item_group_i = function () {
		var t = new eui.Group();
		this.item_group = t;
		t.height = 240;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 152;
		t.elementsContent = [this._Rect2_i(),this.none_tips_i(),this.item1_goup_i(),this.item2_goup_i(),this.item3_goup_i(),this.effect_goup_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 40;
		t.fillColor = 0xe5dfce;
		t.height = 240;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.none_tips_i = function () {
		var t = new eui.Label();
		this.none_tips = t;
		t.horizontalCenter = 0;
		t.text = "还没启用的道具效果";
		t.textColor = 0xa99677;
		t.verticalCenter = 0;
		return t;
	};
	_proto.item1_goup_i = function () {
		var t = new eui.Group();
		this.item1_goup = t;
		t.left = 35;
		t.visible = false;
		t.width = 160;
		t.y = 10;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 180;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(64,0,183,0);
		t.source = "shop_item_bg_png";
		t.verticalCenter = 0;
		t.width = 160;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.49;
		t.scaleY = 0.49;
		t.source = "";
		t.verticalCenter = -22;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.source = "time_icon_png";
		t.width = 33;
		t.x = 18;
		t.y = 132;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "00分05秒";
		t.textColor = 0x57596d;
		t.x = 57;
		t.y = 138;
		return t;
	};
	_proto.item2_goup_i = function () {
		var t = new eui.Group();
		this.item2_goup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 160;
		t.y = 10;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Label3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 180;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(64,0,183,0);
		t.source = "shop_item_bg_png";
		t.verticalCenter = 0;
		t.width = 160;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.49;
		t.scaleY = 0.49;
		t.source = "";
		t.verticalCenter = -22;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.source = "time_icon_png";
		t.width = 33;
		t.x = 18;
		t.y = 132;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "00分05秒";
		t.textColor = 0x57596d;
		t.x = 57;
		t.y = 138;
		return t;
	};
	_proto.item3_goup_i = function () {
		var t = new eui.Group();
		this.item3_goup = t;
		t.right = 35;
		t.visible = false;
		t.width = 160;
		t.y = 10;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Label4_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 180;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(64,0,183,0);
		t.source = "shop_item_bg_png";
		t.verticalCenter = 0;
		t.width = 160;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.49;
		t.scaleY = 0.49;
		t.source = "";
		t.verticalCenter = -22;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.source = "time_icon_png";
		t.width = 33;
		t.x = 18;
		t.y = 132;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "00分05秒";
		t.textColor = 0x57596d;
		t.x = 57;
		t.y = 138;
		return t;
	};
	_proto.effect_goup_i = function () {
		var t = new eui.Group();
		this.effect_goup = t;
		t.bottom = 5;
		t.right = -4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.elementsContent = [this._Image12_i(),this._Label5_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bag_mul_red_png";
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "最终收益×12倍";
		t.verticalCenter = 2;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 40;
		t.left = 30;
		t.right = 30;
		t.top = 532;
		t.elementsContent = [this.Scroller_i()];
		return t;
	};
	_proto.Scroller_i = function () {
		var t = new eui.Scroller();
		this.Scroller = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.viewport = this.prop_container_i();
		return t;
	};
	_proto.prop_container_i = function () {
		var t = new eui.Group();
		this.prop_container = t;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 18.5;
		t.orientation = "rows";
		t.requestedColumnCount = 3;
		t.verticalGap = 17;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 106;
		t.elementsContent = [this._Rect3_i(),this._Group3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 16;
		t.fillColor = 0xbbb493;
		t.height = 35;
		t.width = 235;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label6_i(),this._Group2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.left = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "收益提升×2";
		t.verticalCenter = 0;
		t.x = 12;
		t.y = 6;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 130;
		t.y = 0;
		t.elementsContent = [this.double_close_i(),this.double_open_i()];
		return t;
	};
	_proto.double_close_i = function () {
		var t = new eui.Label();
		this.double_close = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "(未开启)";
		t.textColor = 0xff0000;
		return t;
	};
	_proto.double_open_i = function () {
		var t = new eui.Label();
		this.double_open = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "(已开启)";
		t.textColor = 0xfffc00;
		return t;
	};
	return cookBagSkin;
})(eui.Skin);generateEUI.paths['resource/ui/bag/ConfirmItemSkin.exml'] = window.cookConfirmItemSkin = (function (_super) {
	__extends(cookConfirmItemSkin, _super);
	var cookConfirmItemSkin$Skin13 = 	(function (_super) {
		__extends(cookConfirmItemSkin$Skin13, _super);
		function cookConfirmItemSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookConfirmItemSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookConfirmItemSkin$Skin13;
	})(eui.Skin);

	var cookConfirmItemSkin$Skin14 = 	(function (_super) {
		__extends(cookConfirmItemSkin$Skin14, _super);
		function cookConfirmItemSkin$Skin14() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookConfirmItemSkin$Skin14.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 110;
			t.horizontalCenter = 0;
			t.source = "greenBtn_bg_png";
			t.width = 320;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "sure_text_png";
			t.verticalCenter = 0;
			return t;
		};
		return cookConfirmItemSkin$Skin14;
	})(eui.Skin);

	function cookConfirmItemSkin() {
		_super.call(this);
		this.skinParts = ["prop_img","prop_desc","closeBtn","confrimBtn"];
		
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = cookConfirmItemSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Group2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this.prop_img_i(),this._Group1_i(),this.closeBtn_i(),this.confrimBtn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillColor = 0xF6F6E6;
		t.height = 722;
		t.width = 538;
		t.x = 18;
		t.y = 13;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "popup_header_png";
		t.width = 574;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "confirm_prop_text_png";
		t.y = 36;
		return t;
	};
	_proto.prop_img_i = function () {
		var t = new eui.Image();
		this.prop_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 92;
		t.horizontalCenter = 0;
		t.width = 538;
		t.y = 137;
		t.elementsContent = [this.prop_desc_i()];
		return t;
	};
	_proto.prop_desc_i = function () {
		var t = new eui.Label();
		this.prop_desc = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x8e7142;
		t.verticalCenter = 0;
		t.width = 380;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 27.5;
		t.label = "";
		t.right = 19;
		t.top = 27;
		t.skinName = cookConfirmItemSkin$Skin13;
		return t;
	};
	_proto.confrimBtn_i = function () {
		var t = new cookMyButton();
		this.confrimBtn = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 55;
		t.horizontalCenter = 0;
		t.y = 606;
		t.skinName = cookConfirmItemSkin$Skin14;
		return t;
	};
	return cookConfirmItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/bag/UsePropSkin.exml'] = window.cookUsePropSkin = (function (_super) {
	__extends(cookUsePropSkin, _super);
	var cookUsePropSkin$Skin15 = 	(function (_super) {
		__extends(cookUsePropSkin$Skin15, _super);
		function cookUsePropSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookUsePropSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "bg_white_btn_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 36;
			t.textColor = 0x956f33;
			t.verticalCenter = 0;
			return t;
		};
		return cookUsePropSkin$Skin15;
	})(eui.Skin);

	function cookUsePropSkin() {
		_super.call(this);
		this.skinParts = ["effect_group","closeBtn"];
		
		this.elementsContent = [this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.img"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.value"],[0],this.closeBtn,"label");
	}
	var _proto = cookUsePropSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1334;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.effect_group_i(),this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Image3_i(),this.closeBtn_i()];
		return t;
	};
	_proto.effect_group_i = function () {
		var t = new eui.Group();
		this.effect_group = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "share_head_bg_png";
		t.verticalCenter = -335;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.7;
		t.scaleY = 1.7;
		t.verticalCenter = -30;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "您已使用";
		t.y = 293;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "icon_two_times_png";
		t.visible = false;
		t.x = 473;
		t.y = 458;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.height = 99;
		t.horizontalCenter = 0;
		t.verticalCenter = 298;
		t.skinName = cookUsePropSkin$Skin15;
		return t;
	};
	return cookUsePropSkin;
})(eui.Skin);generateEUI.paths['resource/ui/bank/BankItemSkin.exml'] = window.cookBankItemSkin = (function (_super) {
	__extends(cookBankItemSkin, _super);
	var cookBankItemSkin$Skin16 = 	(function (_super) {
		__extends(cookBankItemSkin$Skin16, _super);
		function cookBankItemSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookBankItemSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "exchange_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookBankItemSkin$Skin16;
	})(eui.Skin);

	function cookBankItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","nameText","coinText","exchangeBtn","coinGroup","lockGroup"];
		
		this.elementsContent = [this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this.nameText,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.img"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.img"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.img2"],[0],this._Image4,"source");
	}
	var _proto = cookBankItemSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.coinGroup_i(),this.lockGroup_i()];
		return t;
	};
	_proto.coinGroup_i = function () {
		var t = new eui.Group();
		this.coinGroup = t;
		t.height = 368;
		t.elementsContent = [this.bg_i(),this.nameText_i(),this._Group1_i(),this._Image2_i(),this.exchangeBtn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 345;
		t.scale9Grid = new egret.Rectangle(27,65,42,14);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bank_item_bg_png";
		t.width = 216;
		return t;
	};
	_proto.nameText_i = function () {
		var t = new eui.Label();
		this.nameText = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 34;
		t.textColor = 0xa37c3e;
		t.y = 12;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.horizontalCenter = 0;
		t.width = 180;
		t.y = 73;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Label1_i(),this.coinText_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 20;
		t.fillColor = 0xede6c4;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 49;
		t.verticalCenter = 0;
		t.width = 46;
		t.x = -3;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "";
		t.textColor = 0x887e63;
		t.verticalCenter = 0;
		return t;
	};
	_proto.coinText_i = function () {
		var t = new eui.BitmapLabel();
		this.coinText = t;
		t.font = "bankText_fnt";
		t.horizontalCenter = 13;
		t.letterSpacing = 2;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "32点8aa";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.y = 130;
		return t;
	};
	_proto.exchangeBtn_i = function () {
		var t = new cookMyButton();
		this.exchangeBtn = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 35;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 148.5;
		t.skinName = cookBankItemSkin$Skin16;
		return t;
	};
	_proto.lockGroup_i = function () {
		var t = new eui.Group();
		this.lockGroup = t;
		t.visible = false;
		t.elementsContent = [this._Image3_i(),this._Label2_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 345;
		t.scale9Grid = new egret.Rectangle(27,65,42,14);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bank_item_bg_png";
		t.width = 216;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.textColor = 0xa37c3e;
		t.x = 74;
		t.y = 12;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.height = 144;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 137;
		t.y = 131;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.source = "bank_item_lock_png";
		t.y = 150;
		return t;
	};
	return cookBankItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/bank/BankRule.exml'] = window.cookBankRule = (function (_super) {
	__extends(cookBankRule, _super);
	var cookBankRule$Skin17 = 	(function (_super) {
		__extends(cookBankRule$Skin17, _super);
		function cookBankRule$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookBankRule$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookBankRule$Skin17;
	})(eui.Skin);

	function cookBankRule() {
		_super.call(this);
		this.skinParts = ["closeBtn"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookBankRule.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bank_rule_png";
		t.verticalCenter = 8;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 27.5;
		t.horizontalCenter = -275;
		t.label = "";
		t.verticalCenter = -537;
		t.skinName = cookBankRule$Skin17;
		return t;
	};
	return cookBankRule;
})(eui.Skin);generateEUI.paths['resource/ui/bank/BankSkin.exml'] = window.cookBankSkin = (function (_super) {
	__extends(cookBankSkin, _super);
	var cookBankSkin$Skin18 = 	(function (_super) {
		__extends(cookBankSkin$Skin18, _super);
		function cookBankSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookBankSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_research_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookBankSkin$Skin18;
	})(eui.Skin);

	var cookBankSkin$Skin19 = 	(function (_super) {
		__extends(cookBankSkin$Skin19, _super);
		function cookBankSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookBankSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "white_ex_mark_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookBankSkin$Skin19;
	})(eui.Skin);

	function cookBankSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","openRule","item_group","all"];
		
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = cookBankSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect1_i(),this.all_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x2bacf0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.all_i = function () {
		var t = new eui.Group();
		this.all = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 750;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.closeBtn_i(),this.openRule_i(),this._Group1_i(),this.item_group_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(93,1,564,2);
		t.source = "stripe_bg_jpg";
		t.top = 422;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "bank_bg_1_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bank1_png";
		t.y = 29;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 37.5;
		t.anchorOffsetY = 40;
		t.label = "";
		t.x = 70.5;
		t.y = 86;
		t.skinName = cookBankSkin$Skin18;
		return t;
	};
	_proto.openRule_i = function () {
		var t = new cookMyButton();
		this.openRule = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 41;
		t.label = "";
		t.x = 71;
		t.y = 197;
		t.skinName = cookBankSkin$Skin19;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.percentWidth = 100;
		t.y = 350;
		t.elementsContent = [this._Rect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xfac845;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.item_group_i = function () {
		var t = new eui.Group();
		this.item_group = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 467;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 26;
		t.requestedColumnCount = 3;
		t.verticalGap = 48;
		return t;
	};
	return cookBankSkin;
})(eui.Skin);generateEUI.paths['resource/ui/loading/BankProgress.exml'] = window.cookBankProgress = (function (_super) {
	__extends(cookBankProgress, _super);
	function cookBankProgress() {
		_super.call(this);
		this.skinParts = ["action","thumb","lbPacent"];
		
		this.action_i();
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.lbPacent_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.imgBuilding"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [25],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [-25],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, ["hostComponent.imgRemove"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [25],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, [-25],[],this._Object5,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"rotation");
	}
	var _proto = cookBankProgress.prototype;

	_proto.action_i = function () {
		var t = new egret.tween.TweenGroup();
		this.action = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.ease = "quartInOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.ease = "quartInOut";
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 72;
		t.scale9Grid = new egret.Rectangle(14,14,26,25);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "exchangeProgressBar_bg_png";
		t.width = 434;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 64;
		t.scale9Grid = new egret.Rectangle(13,12,22,21);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "exchangeProgressBar_png";
		t.width = 426;
		t.x = 4;
		t.y = 4;
		return t;
	};
	_proto.lbPacent_i = function () {
		var t = new eui.Label();
		this.lbPacent = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "100%";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 165;
		t.y = 19;
		return t;
	};
	return cookBankProgress;
})(eui.Skin);generateEUI.paths['resource/ui/bank/ExchangeSkin.exml'] = window.cookExchangeSkin = (function (_super) {
	__extends(cookExchangeSkin, _super);
	var cookExchangeSkin$Skin20 = 	(function (_super) {
		__extends(cookExchangeSkin$Skin20, _super);
		function cookExchangeSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","source","exchange_add_btn_a_png")
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","exchange_add_btn_png")
					])
			];
		}
		var _proto = cookExchangeSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookExchangeSkin$Skin20;
	})(eui.Skin);

	var cookExchangeSkin$Skin21 = 	(function (_super) {
		__extends(cookExchangeSkin$Skin21, _super);
		function cookExchangeSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","source","exchange_sub_btn_a_png")
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","exchange_sub_btn_png")
					])
			];
		}
		var _proto = cookExchangeSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookExchangeSkin$Skin21;
	})(eui.Skin);

	var cookExchangeSkin$Skin22 = 	(function (_super) {
		__extends(cookExchangeSkin$Skin22, _super);
		function cookExchangeSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookExchangeSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookExchangeSkin$Skin22;
	})(eui.Skin);

	var cookExchangeSkin$Skin23 = 	(function (_super) {
		__extends(cookExchangeSkin$Skin23, _super);
		function cookExchangeSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookExchangeSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "exchange_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookExchangeSkin$Skin23;
	})(eui.Skin);

	function cookExchangeSkin() {
		_super.call(this);
		this.skinParts = ["pgTouch","useWenhao","useRate","useImg","scrollerBg","scrollerGroup","coinScroller","openChoose","useNum","use_result_text","resultWenhao","resultRate","resultImg","resultNum","add_result_text","addBtn","subBtn","closeBtn","exchangeBtn"];
		
		this.elementsContent = [this._Group10_i()];
	}
	var _proto = cookExchangeSkin.prototype;

	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 1067;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 652;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Label1_i(),this.pgTouch_i(),this._Group1_i(),this._Group5_i(),this._Group9_i(),this.addBtn_i(),this.subBtn_i(),this.closeBtn_i(),this.exchangeBtn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf6f6e6;
		t.height = 1067;
		t.width = 652;
		t.y = 1;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "popup_header_png";
		t.y = -14;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "货币兑换";
		t.y = 15;
		return t;
	};
	_proto.pgTouch_i = function () {
		var t = new eui.ProgressBar();
		this.pgTouch = t;
		t.horizontalCenter = 0;
		t.skinName = "cookBankProgress";
		t.touchEnabled = true;
		t.value = 100;
		t.y = 616.29;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 240;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 121;
		t.elementsContent = [this._Rect2_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xe5dfce;
		t.percentHeight = 100;
		t.scaleX = 40;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "可以通过货币兑换获得资金";
		t.textColor = 0xa37c3e;
		t.y = 81;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "帮助你的餐厅提高收益";
		t.textColor = 0xA37C3E;
		t.y = 125;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 395;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.elementsContent = [this._Image2_i(),this.useWenhao_i(),this.useRate_i(),this._Label4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 153;
		t.scale9Grid = new egret.Rectangle(25,65,43,13);
		t.source = "bank_item_bg_png";
		t.width = 162;
		return t;
	};
	_proto.useWenhao_i = function () {
		var t = new eui.Image();
		this.useWenhao = t;
		t.horizontalCenter = 0;
		t.source = "wenhao_png";
		t.y = 67;
		return t;
	};
	_proto.useRate_i = function () {
		var t = new eui.BitmapLabel();
		this.useRate = t;
		t.font = "bankText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = 2;
		t.text = "0";
		t.visible = false;
		t.y = 86;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "兑换比率";
		t.textColor = 0xa37c3e;
		t.y = 12;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 153;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image3_i(),this.useImg_i(),this._Label5_i(),this.scrollerBg_i(),this.coinScroller_i(),this._Image4_i(),this.openChoose_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 153;
		t.scale9Grid = new egret.Rectangle(25,65,43,13);
		t.source = "bank_item_bg_png";
		t.width = 212;
		return t;
	};
	_proto.useImg_i = function () {
		var t = new eui.Image();
		this.useImg = t;
		t.horizontalCenter = 0;
		t.source = "wenhao_png";
		t.y = 67;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "消耗货币";
		t.textColor = 0xA37C3E;
		t.x = 59;
		t.y = 12;
		return t;
	};
	_proto.scrollerBg_i = function () {
		var t = new eui.Rect();
		this.scrollerBg = t;
		t.ellipseHeight = 32;
		t.ellipseWidth = 32;
		t.fillColor = 0xffffee;
		t.height = 184;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xb1905a;
		t.strokeWeight = 4;
		t.visible = false;
		t.percentWidth = 100;
		t.y = 153;
		return t;
	};
	_proto.coinScroller_i = function () {
		var t = new eui.Scroller();
		this.coinScroller = t;
		t.height = 176;
		t.touchChildren = true;
		t.visible = false;
		t.percentWidth = 100;
		t.y = 157;
		t.viewport = this.scrollerGroup_i();
		return t;
	};
	_proto.scrollerGroup_i = function () {
		var t = new eui.Group();
		this.scrollerGroup = t;
		t.touchChildren = true;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 16;
		t.horizontalAlign = "center";
		t.paddingBottom = 15;
		t.paddingLeft = 0;
		t.paddingRight = 0;
		t.paddingTop = 15;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "exchange_open_choose_png";
		t.x = 154;
		t.y = 87;
		return t;
	};
	_proto.openChoose_i = function () {
		var t = new eui.Group();
		this.openChoose = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.horizontalCenter = 0;
		t.width = 191;
		t.y = 58;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.right = 0;
		t.elementsContent = [this._Image5_i(),this._Label6_i(),this.useNum_i(),this.use_result_text_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 153;
		t.scale9Grid = new egret.Rectangle(25,65,43,13);
		t.source = "bank_item_bg_png";
		t.width = 162;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "数量";
		t.textColor = 0xA37C3E;
		t.x = -185;
		t.y = 12;
		return t;
	};
	_proto.useNum_i = function () {
		var t = new eui.BitmapLabel();
		this.useNum = t;
		t.font = "bankText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = 2;
		t.text = "0";
		t.y = 86;
		return t;
	};
	_proto.use_result_text_i = function () {
		var t = new eui.Label();
		this.use_result_text = t;
		t.bottom = 9;
		t.right = 13;
		t.size = 22;
		t.text = "";
		t.textColor = 0xff0000;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 754;
		t.elementsContent = [this._Group6_i(),this._Group7_i(),this._Group8_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.elementsContent = [this._Image6_i(),this.resultWenhao_i(),this._Label7_i(),this.resultRate_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 153;
		t.scale9Grid = new egret.Rectangle(25,65,43,13);
		t.source = "bank_item_bg_png";
		t.width = 162;
		return t;
	};
	_proto.resultWenhao_i = function () {
		var t = new eui.Image();
		this.resultWenhao = t;
		t.horizontalCenter = 0;
		t.source = "wenhao_png";
		t.y = 67;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "兑换比率";
		t.textColor = 0xA37C3E;
		t.y = 12;
		return t;
	};
	_proto.resultRate_i = function () {
		var t = new eui.BitmapLabel();
		this.resultRate = t;
		t.font = "bankText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = 2;
		t.text = "0";
		t.visible = false;
		t.y = 86;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image7_i(),this._Label8_i(),this.resultImg_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 153;
		t.scale9Grid = new egret.Rectangle(25,65,43,13);
		t.source = "bank_item_bg_png";
		t.width = 212;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "兑换货币";
		t.textColor = 0xA37C3E;
		t.x = 59;
		t.y = 12;
		return t;
	};
	_proto.resultImg_i = function () {
		var t = new eui.Image();
		this.resultImg = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "coin_i_png";
		t.y = 66;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.right = 0;
		t.elementsContent = [this._Image8_i(),this._Label9_i(),this.resultNum_i(),this.add_result_text_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 153;
		t.scale9Grid = new egret.Rectangle(25,65,43,13);
		t.source = "bank_item_bg_png";
		t.width = 162;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "数量";
		t.textColor = 0xA37C3E;
		t.x = -185;
		t.y = 12;
		return t;
	};
	_proto.resultNum_i = function () {
		var t = new eui.BitmapLabel();
		this.resultNum = t;
		t.font = "bankText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = 2;
		t.text = "0";
		t.y = 86;
		return t;
	};
	_proto.add_result_text_i = function () {
		var t = new eui.Label();
		this.add_result_text = t;
		t.bottom = 9;
		t.right = 13;
		t.size = 22;
		t.text = "";
		t.textColor = 0x54d100;
		return t;
	};
	_proto.addBtn_i = function () {
		var t = new cookMyButton();
		this.addBtn = t;
		t.anchorOffsetX = 35;
		t.anchorOffsetY = 37.5;
		t.label = "";
		t.x = 585;
		t.y = 652.5;
		t.skinName = cookExchangeSkin$Skin20;
		return t;
	};
	_proto.subBtn_i = function () {
		var t = new cookMyButton();
		this.subBtn = t;
		t.anchorOffsetX = 35;
		t.anchorOffsetY = 37.5;
		t.label = "";
		t.x = 67;
		t.y = 652.5;
		t.skinName = cookExchangeSkin$Skin21;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 27.5;
		t.label = "";
		t.x = 593.5;
		t.y = 39.5;
		t.skinName = cookExchangeSkin$Skin22;
		return t;
	};
	_proto.exchangeBtn_i = function () {
		var t = new cookMyButton();
		this.exchangeBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 968;
		t.skinName = cookExchangeSkin$Skin23;
		return t;
	};
	return cookExchangeSkin;
})(eui.Skin);generateEUI.paths['resource/ui/bigmap/AddItemSkin.exml'] = window.cookAddItemSkin = (function (_super) {
	__extends(cookAddItemSkin, _super);
	var cookAddItemSkin$Skin24 = 	(function (_super) {
		__extends(cookAddItemSkin$Skin24, _super);
		function cookAddItemSkin$Skin24() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookAddItemSkin$Skin24.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Label1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 67;
			t.scale9Grid = new egret.Rectangle(32,13,196,85);
			t.source = "greenBtn_bg_png";
			t.width = 151;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.horizontalCenter = 0;
			t.text = "增收";
			t.verticalCenter = -6;
			return t;
		};
		return cookAddItemSkin$Skin24;
	})(eui.Skin);

	function cookAddItemSkin() {
		_super.call(this);
		this.skinParts = ["store_img","addtime","coin_img","income","moneyGroup","currentShopText","mul_text","addBtn"];
		
		this.height = 240;
		this.width = 520;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookAddItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 220;
		t.horizontalCenter = 0;
		t.width = 480;
		t.elementsContent = [this._Rect1_i(),this.store_img_i(),this._Image1_i(),this._Image2_i(),this.addtime_i(),this.moneyGroup_i(),this.currentShopText_i(),this.mul_text_i(),this._Label2_i(),this.addBtn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xe8e8d3;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.store_img_i = function () {
		var t = new eui.Image();
		this.store_img = t;
		t.height = 95;
		t.source = "";
		t.width = 126;
		t.x = 22;
		t.y = 21;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "void_line_png";
		t.y = 140;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.source = "icon_home_diamond_png";
		t.width = 35;
		t.x = 171;
		t.y = 17;
		return t;
	};
	_proto.addtime_i = function () {
		var t = new eui.Label();
		this.addtime = t;
		t.size = 26;
		t.text = "";
		t.textColor = 0x97989c;
		t.x = 24;
		t.y = 167;
		return t;
	};
	_proto.moneyGroup_i = function () {
		var t = new eui.Group();
		this.moneyGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 171;
		t.y = 70;
		t.elementsContent = [this.coin_img_i(),this.income_i(),this._Label1_i()];
		return t;
	};
	_proto.coin_img_i = function () {
		var t = new eui.Image();
		this.coin_img = t;
		t.height = 39;
		t.source = "coin1_png";
		t.verticalCenter = 0;
		t.width = 37;
		return t;
	};
	_proto.income_i = function () {
		var t = new eui.Label();
		this.income = t;
		t.size = 22;
		t.text = "0";
		t.textColor = 0x38383b;
		t.verticalCenter = 0;
		t.x = 48;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "闲置现金";
		t.textColor = 0x00C384;
		t.verticalCenter = 0.5;
		t.x = 130;
		return t;
	};
	_proto.currentShopText_i = function () {
		var t = new eui.Label();
		this.currentShopText = t;
		t.size = 22;
		t.text = "当前餐厅";
		t.textColor = 0x38383b;
		t.visible = false;
		t.x = 173;
		t.y = 81;
		return t;
	};
	_proto.mul_text_i = function () {
		var t = new eui.Label();
		this.mul_text = t;
		t.size = 28;
		t.text = "1X";
		t.textColor = 0x38383b;
		t.x = 217;
		t.y = 24;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "收入倍数";
		t.textColor = 0x0088db;
		t.x = 302;
		t.y = 27;
		return t;
	};
	_proto.addBtn_i = function () {
		var t = new cookMyButton();
		this.addBtn = t;
		t.anchorOffsetX = 75.5;
		t.anchorOffsetY = 33.5;
		t.x = 394.5;
		t.y = 183.5;
		t.skinName = cookAddItemSkin$Skin24;
		return t;
	};
	return cookAddItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/bigmap/AddPopSkin.exml'] = window.cookAddPopSkin = (function (_super) {
	__extends(cookAddPopSkin, _super);
	var cookAddPopSkin$Skin25 = 	(function (_super) {
		__extends(cookAddPopSkin$Skin25, _super);
		function cookAddPopSkin$Skin25() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookAddPopSkin$Skin25.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 99;
			t.source = "pop_btn1_png";
			t.width = 245;
			return t;
		};
		return cookAddPopSkin$Skin25;
	})(eui.Skin);

	var cookAddPopSkin$Skin26 = 	(function (_super) {
		__extends(cookAddPopSkin$Skin26, _super);
		function cookAddPopSkin$Skin26() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookAddPopSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		return cookAddPopSkin$Skin26;
	})(eui.Skin);

	var cookAddPopSkin$Skin27 = 	(function (_super) {
		__extends(cookAddPopSkin$Skin27, _super);
		function cookAddPopSkin$Skin27() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookAddPopSkin$Skin27.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 110;
			t.scale9Grid = new egret.Rectangle(50,13,300,85);
			t.source = "bg_white_btn_png";
			t.width = 400;
			return t;
		};
		return cookAddPopSkin$Skin27;
	})(eui.Skin);

	function cookAddPopSkin() {
		_super.call(this);
		this.skinParts = ["upgrade_btn0","coin_img0","lbCost","addBtn","gift_cash","closeBtn","mainGroup","closeBtn1","successGroup"];
		
		this.elementsContent = [this._Group4_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.ownMoney"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.value1"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.value2"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.img"],[0],this._Image11,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label8,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.reward"],[0],this._Label9,"text");
	}
	var _proto = cookAddPopSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.mainGroup_i(),this.successGroup_i()];
		return t;
	};
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.height = 967;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 652;
		t.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Group2_i(),this._Group3_i(),this._Image9_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 20;
		t.fillColor = 0xf6f6e6;
		t.height = 967;
		t.width = 652;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 122;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 60;
		t.fillColor = 0xe5dfce;
		t.height = 140;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "重置餐厅提升收入![超值]";
		t.textColor = 0x715527;
		t.verticalCenter = 0;
		t.x = 147;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "popup_header_png";
		t.y = -11;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "add_portrait_png";
		t.x = 110;
		t.y = 283;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bigmap_add_text_png";
		t.y = 24;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "white_ex_mark_png";
		t.x = 58;
		t.y = 156;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 130;
		t.width = 652;
		t.elementsContent = [this._Rect3_i(),this._Rect4_i(),this.addBtn_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 20;
		t.fillColor = 0xfac845;
		t.height = 130;
		t.width = 652;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xfac845;
		t.height = 20;
		t.width = 652;
		return t;
	};
	_proto.addBtn_i = function () {
		var t = new eui.Group();
		this.addBtn = t;
		t.anchorOffsetY = 0;
		t.right = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.y = 18;
		t.elementsContent = [this.upgrade_btn0_i(),this.coin_img0_i(),this.lbCost_i()];
		return t;
	};
	_proto.upgrade_btn0_i = function () {
		var t = new cookMyButton();
		this.upgrade_btn0 = t;
		t.anchorOffsetX = 122.5;
		t.anchorOffsetY = 49.5;
		t.label = "";
		t.x = 122.5;
		t.y = 49.5;
		t.skinName = cookAddPopSkin$Skin25;
		return t;
	};
	_proto.coin_img0_i = function () {
		var t = new eui.Image();
		this.coin_img0 = t;
		t.height = 49;
		t.source = "coin_i_png";
		t.touchEnabled = false;
		t.width = 45;
		t.x = 32;
		t.y = 21;
		return t;
	};
	_proto.lbCost_i = function () {
		var t = new eui.Label();
		this.lbCost = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 35;
		t.stroke = 2;
		t.strokeColor = 0x298000;
		t.text = "";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalCenter = -4.5;
		t.width = 163;
		t.x = 74;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.size = 32;
		t.x = 92;
		t.y = 46;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 586;
		t.elementsContent = [this._Rect5_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this.gift_cash_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 60;
		t.fillColor = 0xe5dfce;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.size = 42;
		t.textColor = 0x38383b;
		t.x = 99;
		t.y = 46;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.size = 42;
		t.textColor = 0x38383b;
		t.x = 369;
		t.y = 46;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "收入";
		t.textColor = 0x0088db;
		t.x = 119;
		t.y = 98;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "收入";
		t.textColor = 0x0088db;
		t.x = 393;
		t.y = 98;
		return t;
	};
	_proto.gift_cash_i = function () {
		var t = new eui.Label();
		this.gift_cash = t;
		t.size = 26;
		t.text = "赠送50超级钞票";
		t.textColor = 0x6c6d70;
		t.x = 393;
		t.y = 158;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "allow_yellow_png";
		t.x = 235;
		t.y = 68;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cash_png";
		t.x = 331;
		t.y = 145;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_home_diamond_png";
		t.width = 30;
		t.x = 81;
		t.y = 97;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_home_diamond_png";
		t.width = 30;
		t.x = 355;
		t.y = 97;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 57;
		t.source = "coin_i_png";
		t.width = 53;
		t.x = 27;
		t.y = 871;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 27.5;
		t.label = "";
		t.x = 590.5;
		t.y = 43.5;
		t.skinName = cookAddPopSkin$Skin26;
		return t;
	};
	_proto.successGroup_i = function () {
		var t = new eui.Group();
		this.successGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Label7_i(),this._Label8_i(),this.closeBtn1_i(),this._Label9_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "share_head_bg_png";
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		this._Image11 = t;
		t.horizontalCenter = 0;
		t.top = 184;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(54,8,147,54);
		t.source = "popup_bg_png";
		t.width = 240;
		t.y = 453;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "增收成功";
		t.y = 32;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		this._Label8 = t;
		t.horizontalCenter = 0;
		t.y = 468;
		return t;
	};
	_proto.closeBtn1_i = function () {
		var t = new cookMyButton();
		this.closeBtn1 = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 55;
		t.horizontalCenter = 0;
		t.y = 652;
		t.skinName = cookAddPopSkin$Skin27;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		this._Label9 = t;
		t.horizontalCenter = 0;
		t.size = 38;
		t.textColor = 0x956f33;
		t.touchEnabled = false;
		t.y = 627;
		return t;
	};
	return cookAddPopSkin;
})(eui.Skin);generateEUI.paths['resource/ui/bigmap/AddSuccessSkin.exml'] = window.cookAddSuccessSkin = (function (_super) {
	__extends(cookAddSuccessSkin, _super);
	function cookAddSuccessSkin() {
		_super.call(this);
		this.skinParts = ["effect_group","mul1","mul2","reward","reward_group","closeBtn"];
		
		this.elementsContent = [this._Group6_i(),this.closeBtn_i()];
	}
	var _proto = cookAddSuccessSkin.prototype;

	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.effect_group_i(),this._Group1_i(),this._Image2_i(),this._Group5_i(),this.reward_group_i()];
		return t;
	};
	_proto.effect_group_i = function () {
		var t = new eui.Group();
		this.effect_group = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "share_head_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "增收成功";
		t.y = 30.67;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 343;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "add_portrait_png";
		t.width = 528;
		t.y = 218;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 638;
		t.elementsContent = [this._Image3_i(),this._Group4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 107;
		t.scale9Grid = new egret.Rectangle(50,24,300,53);
		t.source = "bg_white_btn_png";
		t.width = 640;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = -3;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label2_i(),this._Group2_i(),this._Image5_i(),this._Group3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 38;
		t.text = "收入：";
		t.textColor = 0x956F33;
		t.x = 44;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = -32;
		t.elementsContent = [this._Image4_i(),this.mul1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_home_diamond_png";
		t.x = 36;
		return t;
	};
	_proto.mul1_i = function () {
		var t = new eui.Label();
		this.mul1 = t;
		t.bold = true;
		t.left = 86;
		t.right = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 38;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x956F33;
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "allow_yellow_png";
		t.x = 351;
		t.y = -3;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 10;
		t.y = -22;
		t.elementsContent = [this._Image6_i(),this.mul2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_home_diamond_png";
		t.x = 36;
		return t;
	};
	_proto.mul2_i = function () {
		var t = new eui.Label();
		this.mul2 = t;
		t.bold = true;
		t.left = 86;
		t.right = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 38;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x956F33;
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.reward_group_i = function () {
		var t = new eui.Group();
		this.reward_group = t;
		t.anchorOffsetX = 140;
		t.anchorOffsetY = 43.5;
		t.horizontalCenter = 0;
		t.y = 808.5;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.reward_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 87;
		t.scale9Grid = new egret.Rectangle(50,24,300,53);
		t.source = "bg_white_btn_png";
		t.width = 280;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 55;
		t.source = "cash_png";
		t.width = 72;
		t.x = 48;
		t.y = 11;
		return t;
	};
	_proto.reward_i = function () {
		var t = new eui.Label();
		this.reward = t;
		t.bold = true;
		t.size = 38;
		t.text = "0";
		t.textColor = 0x956f33;
		t.x = 143;
		t.y = 20;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Group();
		this.closeBtn = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return cookAddSuccessSkin;
})(eui.Skin);generateEUI.paths['resource/ui/bigmap/BigMapSkin.exml'] = window.cookBigMapSkin = (function (_super) {
	__extends(cookBigMapSkin, _super);
	var cookBigMapSkin$Skin28 = 	(function (_super) {
		__extends(cookBigMapSkin$Skin28, _super);
		function cookBigMapSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookBigMapSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookBigMapSkin$Skin28;
	})(eui.Skin);

	var cookBigMapSkin$Skin29 = 	(function (_super) {
		__extends(cookBigMapSkin$Skin29, _super);
		function cookBigMapSkin$Skin29() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookBigMapSkin$Skin29.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "bigmap_slide_bg_png";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "bigmap_add_png";
			t.x = 16;
			t.y = 20;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.source = "bigmap_add_text_png";
			t.x = 19;
			t.y = 101;
			return t;
		};
		return cookBigMapSkin$Skin29;
	})(eui.Skin);

	var cookBigMapSkin$Skin30 = 	(function (_super) {
		__extends(cookBigMapSkin$Skin30, _super);
		function cookBigMapSkin$Skin30() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookBigMapSkin$Skin30.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.right = 0;
			t.scaleX = -1;
			t.source = "bigmap_slide_bg_png";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "bigmap_coin_png";
			t.x = 16;
			t.y = 20;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.source = "bigmap_collect_text_png";
			t.x = 19;
			t.y = 101;
			return t;
		};
		return cookBigMapSkin$Skin30;
	})(eui.Skin);

	var cookBigMapSkin$Skin31 = 	(function (_super) {
		__extends(cookBigMapSkin$Skin31, _super);
		function cookBigMapSkin$Skin31() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookBigMapSkin$Skin31.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Label1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scale9Grid = new egret.Rectangle(39,11,234,69);
			t.source = "pop_btn2_png";
			t.width = 320;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.horizontalCenter = 0;
			t.text = "收集X2";
			t.y = 24;
			return t;
		};
		return cookBigMapSkin$Skin31;
	})(eui.Skin);

	var cookBigMapSkin$Skin32 = 	(function (_super) {
		__extends(cookBigMapSkin$Skin32, _super);
		function cookBigMapSkin$Skin32() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookBigMapSkin$Skin32.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Label1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 91;
			t.scale9Grid = new egret.Rectangle(39,11,184,69);
			t.source = "greenBtn_bg_png";
			t.width = 320;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.horizontalCenter = 0;
			t.text = "提升所有X2";
			t.y = 24;
			return t;
		};
		return cookBigMapSkin$Skin32;
	})(eui.Skin);

	function cookBigMapSkin() {
		_super.call(this);
		this.skinParts = ["imgadventure","imgresearch","imgsuite","imgbank","imgGroup","scrollerGroup","scroller","closeAdd","closeCollect","closeBtn","user_coin","openBank","add_list","add_scroller","openAdd","addGroup","collect_list","collect_scroller","all_collect","openCollect","collectShareBtn","upShareBtn","collectGroup"];
		
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = cookBigMapSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.width = 750;
		t.elementsContent = [this._Rect1_i(),this.scroller_i(),this.closeAdd_i(),this.closeCollect_i(),this._Group1_i(),this.addGroup_i(),this.collectGroup_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x2176b4;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "on";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.viewport = this.scrollerGroup_i();
		return t;
	};
	_proto.scrollerGroup_i = function () {
		var t = new eui.Group();
		this.scrollerGroup = t;
		t.elementsContent = [this.imgGroup_i()];
		return t;
	};
	_proto.imgGroup_i = function () {
		var t = new eui.Group();
		this.imgGroup = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.imgadventure_i(),this.imgresearch_i(),this.imgsuite_i(),this.imgbank_i()];
		return t;
	};
	_proto.imgadventure_i = function () {
		var t = new eui.Image();
		this.imgadventure = t;
		t.height = 150;
		t.width = 240;
		return t;
	};
	_proto.imgresearch_i = function () {
		var t = new eui.Image();
		this.imgresearch = t;
		t.height = 145;
		t.width = 234;
		return t;
	};
	_proto.imgsuite_i = function () {
		var t = new eui.Image();
		this.imgsuite = t;
		t.height = 131;
		t.width = 234;
		return t;
	};
	_proto.imgbank_i = function () {
		var t = new eui.Image();
		this.imgbank = t;
		t.height = 180;
		t.width = 234;
		return t;
	};
	_proto.closeAdd_i = function () {
		var t = new eui.Rect();
		this.closeAdd = t;
		t.fillAlpha = 0.7;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.closeCollect_i = function () {
		var t = new eui.Rect();
		this.closeCollect = t;
		t.fillAlpha = 0.7;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.elementsContent = [this._Rect2_i(),this.closeBtn_i(),this.openBank_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffd133;
		t.height = 152;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xe39600;
		t.strokeWeight = 6;
		t.top = -6;
		t.width = 762;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.label = "";
		t.x = 50;
		t.y = 88;
		t.skinName = cookBigMapSkin$Skin28;
		return t;
	};
	_proto.openBank_i = function () {
		var t = new eui.Group();
		this.openBank = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 349;
		t.y = 76;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.user_coin_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "coin_png";
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 33;
		t.source = "open_outerring_png";
		t.width = 32;
		t.x = 33;
		t.y = 29;
		return t;
	};
	_proto.user_coin_i = function () {
		var t = new eui.BitmapLabel();
		this.user_coin = t;
		t.font = "coinText_fnt";
		t.left = 63;
		t.text = "0";
		t.verticalCenter = 0;
		return t;
	};
	_proto.addGroup_i = function () {
		var t = new eui.Group();
		this.addGroup = t;
		t.percentHeight = 100;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 634;
		t.x = -520;
		t.elementsContent = [this._Rect3_i(),this._Image3_i(),this._Image4_i(),this.add_scroller_i(),this.openAdd_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf6f6e6;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 520;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "banner2_png";
		t.x = 76;
		t.y = 104;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "island_1_name_png";
		t.x = 202;
		t.y = 117;
		return t;
	};
	_proto.add_scroller_i = function () {
		var t = new eui.Scroller();
		this.add_scroller = t;
		t.anchorOffsetX = 0;
		t.bottom = 114;
		t.left = 0;
		t.top = 209;
		t.width = 520;
		t.viewport = this.add_list_i();
		return t;
	};
	_proto.add_list_i = function () {
		var t = new eui.Group();
		this.add_list = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 6;
		return t;
	};
	_proto.openAdd_i = function () {
		var t = new cookMyButton();
		this.openAdd = t;
		t.anchorOffsetX = 57;
		t.anchorOffsetY = 81.5;
		t.bottom = 127;
		t.right = 0;
		t.skinName = cookBigMapSkin$Skin29;
		return t;
	};
	_proto.collectGroup_i = function () {
		var t = new eui.Group();
		this.collectGroup = t;
		t.percentHeight = 100;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 634;
		t.x = 636;
		t.elementsContent = [this._Rect4_i(),this._Image5_i(),this._Image6_i(),this.collect_scroller_i(),this._Group2_i(),this.openCollect_i(),this.collectShareBtn_i(),this.upShareBtn_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xF6F6E6;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 520;
		t.x = 114;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "banner2_png";
		t.x = 190;
		t.y = 104;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "island_1_name_png";
		t.x = 316;
		t.y = 117;
		return t;
	};
	_proto.collect_scroller_i = function () {
		var t = new eui.Scroller();
		this.collect_scroller = t;
		t.anchorOffsetX = 0;
		t.height = 485;
		t.right = 0;
		t.width = 520;
		t.y = 209;
		t.viewport = this.collect_list_i();
		return t;
	};
	_proto.collect_list_i = function () {
		var t = new eui.Group();
		this.collect_list = t;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 6;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.right = 34;
		t.y = 724;
		t.elementsContent = [this.all_collect_i()];
		return t;
	};
	_proto.all_collect_i = function () {
		var t = new eui.BitmapLabel();
		this.all_collect = t;
		t.font = "coinText_fnt";
		t.right = 0;
		t.text = "= 0";
		return t;
	};
	_proto.openCollect_i = function () {
		var t = new cookMyButton();
		this.openCollect = t;
		t.anchorOffsetX = 57;
		t.anchorOffsetY = 81.5;
		t.bottom = 127;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = cookBigMapSkin$Skin30;
		return t;
	};
	_proto.collectShareBtn_i = function () {
		var t = new cookMyButton();
		this.collectShareBtn = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 45.5;
		t.horizontalCenter = 57;
		t.y = 848.5;
		t.skinName = cookBigMapSkin$Skin31;
		return t;
	};
	_proto.upShareBtn_i = function () {
		var t = new cookMyButton();
		this.upShareBtn = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 45.5;
		t.horizontalCenter = 57;
		t.visible = false;
		t.y = 977.5;
		t.skinName = cookBigMapSkin$Skin32;
		return t;
	};
	return cookBigMapSkin;
})(eui.Skin);generateEUI.paths['resource/ui/bigmap/BigMapStore.exml'] = window.cookBigMapStore = (function (_super) {
	__extends(cookBigMapStore, _super);
	var cookBigMapStore$Skin33 = 	(function (_super) {
		__extends(cookBigMapStore$Skin33, _super);
		function cookBigMapStore$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookBigMapStore$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bigmap_store_enter_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookBigMapStore$Skin33;
	})(eui.Skin);

	function cookBigMapStore() {
		_super.call(this);
		this.skinParts = ["lock_img","unknown","store_name","banner","store_img","current","offlineLb","offline","enter","tipLb","tip","unlocked","cost_label","unlock_tip","unlock","store","all_group"];
		
		this.elementsContent = [this.all_group_i()];
	}
	var _proto = cookBigMapStore.prototype;

	_proto.all_group_i = function () {
		var t = new eui.Group();
		this.all_group = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.unknown_i(),this.store_i()];
		return t;
	};
	_proto.unknown_i = function () {
		var t = new eui.Group();
		this.unknown = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this.lock_img_i()];
		return t;
	};
	_proto.lock_img_i = function () {
		var t = new eui.Image();
		this.lock_img = t;
		t.source = "bigmap_lock_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.store_i = function () {
		var t = new eui.Group();
		this.store = t;
		t.height = 156;
		t.width = 135;
		t.elementsContent = [this.banner_i(),this.unlocked_i(),this.unlock_i()];
		return t;
	};
	_proto.banner_i = function () {
		var t = new eui.Group();
		this.banner = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -50;
		t.elementsContent = [this._Image1_i(),this.store_name_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "blue_banner_png";
		return t;
	};
	_proto.store_name_i = function () {
		var t = new eui.Label();
		this.store_name = t;
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "港式早餐店";
		t.y = 2;
		return t;
	};
	_proto.unlocked_i = function () {
		var t = new eui.Group();
		this.unlocked = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.store_img_i(),this.current_i(),this.offline_i(),this.enter_i(),this.tip_i()];
		return t;
	};
	_proto.store_img_i = function () {
		var t = new eui.Image();
		this.store_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.23;
		t.scaleY = 0.23;
		t.source = "store_icon_2_png";
		t.verticalCenter = 0;
		t.x = 16;
		t.y = 37;
		return t;
	};
	_proto.current_i = function () {
		var t = new eui.Group();
		this.current = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 65;
		t.x = 17;
		t.y = 130;
		t.elementsContent = [this._Rect1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.35;
		t.height = 26;
		t.width = 101;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "当前场景";
		t.verticalCenter = 0;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Group();
		this.offline = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 65;
		t.x = 17;
		t.y = 130;
		t.elementsContent = [this._Rect2_i(),this._Image2_i(),this.offlineLb_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 35;
		t.ellipseWidth = 35;
		t.fillAlpha = 0.35;
		t.height = 26;
		t.width = 101;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 17;
		t.source = "coin1_png";
		t.verticalCenter = -1;
		t.width = 16;
		t.x = 14;
		return t;
	};
	_proto.offlineLb_i = function () {
		var t = new eui.Label();
		this.offlineLb = t;
		t.size = 22;
		t.text = "0";
		t.verticalCenter = 0;
		t.x = 34;
		return t;
	};
	_proto.enter_i = function () {
		var t = new cookMyButton();
		this.enter = t;
		t.anchorOffsetX = 61;
		t.anchorOffsetY = 23;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 7;
		t.y = 124;
		t.skinName = cookBigMapStore$Skin33;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Group();
		this.tip = t;
		t.anchorOffsetX = 108;
		t.anchorOffsetY = 14;
		t.height = 29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 202;
		t.y = 53;
		t.elementsContent = [this._Image3_i(),this.tipLb_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "bigmap_store_tip_bg_png";
		t.x = 9;
		return t;
	};
	_proto.tipLb_i = function () {
		var t = new eui.Label();
		this.tipLb = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "新厨房可解锁";
		t.verticalCenter = 0;
		t.x = 33;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bigmap_store_tip_png";
		t.x = 0;
		t.y = 3.2;
		return t;
	};
	_proto.unlock_i = function () {
		var t = new eui.Group();
		this.unlock = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 28;
		t.height = 80;
		t.horizontalCenter = 0;
		t.width = 131;
		t.elementsContent = [this._Image5_i(),this._Rect3_i(),this._Image6_i(),this._Label2_i(),this.cost_label_i(),this.unlock_tip_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "bigmap_store_lock_png";
		t.x = 41;
		t.y = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.35;
		t.height = 26;
		t.width = 131;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 4;
		t.height = 19;
		t.source = "coin_png";
		t.width = 18;
		t.x = 51;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 4;
		t.size = 20;
		t.text = "消耗:";
		t.x = 4;
		return t;
	};
	_proto.cost_label_i = function () {
		var t = new eui.Label();
		this.cost_label = t;
		t.bottom = 3;
		t.size = 22;
		t.text = "0";
		t.x = 73;
		return t;
	};
	_proto.unlock_tip_i = function () {
		var t = new eui.Group();
		this.unlock_tip = t;
		t.anchorOffsetX = 108;
		t.anchorOffsetY = 14;
		t.height = 29;
		t.visible = false;
		t.x = 189;
		t.y = 14;
		t.elementsContent = [this._Image7_i(),this._Label3_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "bigmap_store_tip_bg_png";
		t.x = 9;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "兑换美食币解锁";
		t.verticalCenter = 0;
		t.x = 33;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bigmap_store_tip_png";
		t.x = 0;
		t.y = 3;
		return t;
	};
	return cookBigMapStore;
})(eui.Skin);generateEUI.paths['resource/ui/bigmap/BigMapUnlockStoreSkin.exml'] = window.cookBigMapUnlockStoreSkin = (function (_super) {
	__extends(cookBigMapUnlockStoreSkin, _super);
	var cookBigMapUnlockStoreSkin$Skin34 = 	(function (_super) {
		__extends(cookBigMapUnlockStoreSkin$Skin34, _super);
		function cookBigMapUnlockStoreSkin$Skin34() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookBigMapUnlockStoreSkin$Skin34.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Label1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 110;
			t.scale9Grid = new egret.Rectangle(50,13,300,85);
			t.source = "bg_white_btn_png";
			t.width = 400;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Arial";
			t.horizontalCenter = 0;
			t.size = 38;
			t.text = "知道了!";
			t.textColor = 0x956f33;
			t.verticalCenter = -6;
			return t;
		};
		return cookBigMapUnlockStoreSkin$Skin34;
	})(eui.Skin);

	function cookBigMapUnlockStoreSkin() {
		_super.call(this);
		this.skinParts = ["effect_group","img","nameLb","closeBtn","successGroup"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookBigMapUnlockStoreSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.successGroup_i()];
		return t;
	};
	_proto.successGroup_i = function () {
		var t = new eui.Group();
		this.successGroup = t;
		t.height = 707;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 586;
		t.elementsContent = [this.effect_group_i(),this._Image1_i(),this.img_i(),this._Image2_i(),this._Label1_i(),this.nameLb_i(),this.closeBtn_i()];
		return t;
	};
	_proto.effect_group_i = function () {
		var t = new eui.Group();
		this.effect_group = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "share_head_bg_png";
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.top = 184;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(54,30,147,8);
		t.source = "popup_bg_png";
		t.width = 240;
		t.y = 453;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "解锁成功";
		t.y = 22;
		return t;
	};
	_proto.nameLb_i = function () {
		var t = new eui.Label();
		this.nameLb = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "";
		t.y = 466;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 55;
		t.horizontalCenter = 0;
		t.y = 652;
		t.skinName = cookBigMapUnlockStoreSkin$Skin34;
		return t;
	};
	return cookBigMapUnlockStoreSkin;
})(eui.Skin);generateEUI.paths['resource/ui/bigmap/CollectItemSkin.exml'] = window.cookCollectItemSkin = (function (_super) {
	__extends(cookCollectItemSkin, _super);
	function cookCollectItemSkin() {
		_super.call(this);
		this.skinParts = ["store_img","coin_img","income","moneyGroup","currentShopText","isBoostText","isntBoostText"];
		
		this.height = 160;
		this.width = 520;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookCollectItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.horizontalCenter = 0;
		t.width = 480;
		t.elementsContent = [this._Rect1_i(),this.store_img_i(),this.moneyGroup_i(),this.currentShopText_i(),this.isBoostText_i(),this.isntBoostText_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 40;
		t.fillColor = 0xe8e8d3;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 1.67;
		return t;
	};
	_proto.store_img_i = function () {
		var t = new eui.Image();
		this.store_img = t;
		t.height = 95;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 126;
		t.x = 16;
		return t;
	};
	_proto.moneyGroup_i = function () {
		var t = new eui.Group();
		this.moneyGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 164;
		t.y = 30;
		t.elementsContent = [this.coin_img_i(),this.income_i(),this._Label1_i()];
		return t;
	};
	_proto.coin_img_i = function () {
		var t = new eui.Image();
		this.coin_img = t;
		t.height = 39;
		t.source = "coin1_png";
		t.verticalCenter = 0;
		t.width = 37;
		return t;
	};
	_proto.income_i = function () {
		var t = new eui.Label();
		this.income = t;
		t.size = 28;
		t.text = "0";
		t.textColor = 0x38383b;
		t.verticalCenter = 0;
		t.x = 48;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "闲置现金";
		t.textColor = 0x00c384;
		t.verticalCenter = 0;
		t.x = 130;
		return t;
	};
	_proto.currentShopText_i = function () {
		var t = new eui.Label();
		this.currentShopText = t;
		t.size = 22;
		t.text = "当前餐厅";
		t.textColor = 0x38383b;
		t.visible = false;
		t.x = 166;
		t.y = 40;
		return t;
	};
	_proto.isBoostText_i = function () {
		var t = new eui.Label();
		this.isBoostText = t;
		t.size = 26;
		t.text = "提升X2";
		t.textColor = 0xff0000;
		t.x = 166;
		t.y = 85;
		return t;
	};
	_proto.isntBoostText_i = function () {
		var t = new eui.Label();
		this.isntBoostText = t;
		t.size = 26;
		t.text = "无广告提升！";
		t.textColor = 0x0088db;
		t.visible = false;
		t.x = 166;
		t.y = 85;
		return t;
	};
	return cookCollectItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/bigmap/temp.exml'] = window.cooktemp = (function (_super) {
	__extends(cooktemp, _super);
	function cooktemp() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group7_i()];
	}
	var _proto = cooktemp.prototype;

	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "island_1_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 144;
		t.y = 113;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_1_1_png";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "store_icon_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 307;
		t.y = 249;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Group2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_1_2_png";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 50;
		t.source = "food_tips_lock_png";
		t.verticalCenter = 30;
		t.x = 196;
		t.y = 194;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 32;
		t.horizontalCenter = 50;
		t.verticalCenter = 81;
		t.width = 100;
		t.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Image6_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 30;
		t.fillAlpha = 0.7;
		t.height = 32;
		t.width = 100;
		t.y = 1;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 13;
		t.size = 22;
		t.text = "2.88ab";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "coin_png";
		t.width = 20;
		t.x = 6;
		t.y = 6;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 588;
		t.y = 212;
		t.elementsContent = [this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_1_3_png";
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 30;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "store_icon_png";
		t.verticalCenter = 0;
		t.x = -85;
		t.y = 230.99999999999997;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 99;
		t.y = 410;
		t.elementsContent = [this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_1_4_png";
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 30;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "store_icon_png";
		t.verticalCenter = -10;
		t.x = -85;
		t.y = 230.99999999999997;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 419;
		t.y = 481;
		t.elementsContent = [this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_1_5_png";
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -50;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "store_icon_png";
		t.verticalCenter = 0;
		t.x = -85;
		t.y = 230.99999999999997;
		return t;
	};
	return cooktemp;
})(eui.Skin);generateEUI.paths['resource/ui/bigmap/UnlockStoreSkin.exml'] = window.cookUnlockStoreSkin = (function (_super) {
	__extends(cookUnlockStoreSkin, _super);
	var cookUnlockStoreSkin$Skin35 = 	(function (_super) {
		__extends(cookUnlockStoreSkin$Skin35, _super);
		function cookUnlockStoreSkin$Skin35() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookUnlockStoreSkin$Skin35.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Label1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 110;
			t.scale9Grid = new egret.Rectangle(50,13,300,85);
			t.source = "bg_white_btn_png";
			t.width = 400;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Arial";
			t.horizontalCenter = 0;
			t.size = 38;
			t.text = "知道了!";
			t.textColor = 0x956f33;
			t.verticalCenter = -6;
			return t;
		};
		return cookUnlockStoreSkin$Skin35;
	})(eui.Skin);

	var cookUnlockStoreSkin$Skin36 = 	(function (_super) {
		__extends(cookUnlockStoreSkin$Skin36, _super);
		function cookUnlockStoreSkin$Skin36() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookUnlockStoreSkin$Skin36.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 110;
			t.scale9Grid = new egret.Rectangle(50,13,156,85);
			t.source = "greenBtn_bg_png";
			t.width = 400;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "unlock_btn_text_png";
			t.verticalCenter = -6;
			return t;
		};
		return cookUnlockStoreSkin$Skin36;
	})(eui.Skin);

	function cookUnlockStoreSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","effect_group","nameLb2","closeBtn1","successGroup","nameLb","unlockBtn","mainGroup"];
		
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.img"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.img"],[0],this._Image5,"source");
	}
	var _proto = cookUnlockStoreSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.closeBtn_i(),this.successGroup_i(),this.mainGroup_i()];
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Group();
		this.closeBtn = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.successGroup_i = function () {
		var t = new eui.Group();
		this.successGroup = t;
		t.height = 707;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 586;
		t.elementsContent = [this.effect_group_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i(),this.nameLb2_i(),this.closeBtn1_i()];
		return t;
	};
	_proto.effect_group_i = function () {
		var t = new eui.Group();
		this.effect_group = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "share_head_bg_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.top = 184;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(54,30,147,8);
		t.source = "popup_bg_png";
		t.width = 240;
		t.y = 453;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "解锁成功";
		t.y = 22;
		return t;
	};
	_proto.nameLb2_i = function () {
		var t = new eui.Label();
		this.nameLb2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "";
		t.y = 466;
		return t;
	};
	_proto.closeBtn1_i = function () {
		var t = new cookMyButton();
		this.closeBtn1 = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 55;
		t.horizontalCenter = 0;
		t.y = 652;
		t.skinName = cookUnlockStoreSkin$Skin35;
		return t;
	};
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.height = 707;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 586;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Label2_i(),this.nameLb_i(),this.unlockBtn_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "share_head_bg_png";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.horizontalCenter = 0;
		t.top = 184;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(54,30,147,8);
		t.source = "popup_bg_png";
		t.width = 240;
		t.y = 453;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "解锁新店";
		t.y = 23;
		return t;
	};
	_proto.nameLb_i = function () {
		var t = new eui.Label();
		this.nameLb = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "";
		t.y = 468;
		return t;
	};
	_proto.unlockBtn_i = function () {
		var t = new cookMyButton();
		this.unlockBtn = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 55;
		t.horizontalCenter = 0;
		t.y = 652;
		t.skinName = cookUnlockStoreSkin$Skin36;
		return t;
	};
	return cookUnlockStoreSkin;
})(eui.Skin);generateEUI.paths['resource/ui/clothing/bossShowIntroduceSkin.exml'] = window.cookbossShowIntroduceSkin = (function (_super) {
	__extends(cookbossShowIntroduceSkin, _super);
	function cookbossShowIntroduceSkin() {
		_super.call(this);
		this.skinParts = ["imgState","imgBg","lbTitle","imIcon","gp01","gp02","gp03","gp04"];
		
		this.elementsContent = [this._Group4_i()];
	}
	var _proto = cookbossShowIntroduceSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 376;
		t.scale9Grid = new egret.Rectangle(28,29,243,151);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_item_bg_png";
		t.width = 310;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.elementsContent = [this.imgState_i()];
		return t;
	};
	_proto.imgState_i = function () {
		var t = new eui.Image();
		this.imgState = t;
		t.horizontalCenter = 0;
		t.source = "boss_current_png";
		t.top = 33;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.y = 97.95;
		t.elementsContent = [this.imgBg_i(),this.lbTitle_i(),this.imIcon_i()];
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.horizontalCenter = 0;
		t.source = "title_c1_png";
		return t;
	};
	_proto.lbTitle_i = function () {
		var t = new eui.Label();
		this.lbTitle = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x5A4118;
		t.text = "广州市小跟班";
		t.textColor = 0xfff118;
		t.verticalCenter = 0;
		t.x = 127;
		return t;
	};
	_proto.imIcon_i = function () {
		var t = new eui.Image();
		this.imIcon = t;
		t.left = -1;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "title_i4_png";
		t.y = 6;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.left = 32;
		t.y = 175;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.gp01_i(),this.gp02_i(),this.gp03_i(),this.gp04_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		return t;
	};
	_proto.gp01_i = function () {
		var t = new eui.Group();
		this.gp01 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.strokeColor = 0x5A4118;
		t.text = "1.店铺规模";
		t.textColor = 0xa37c3e;
		t.verticalCenter = 0;
		t.x = 127;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x0f4600;
		t.text = "微型";
		t.textColor = 0x94f016;
		t.verticalCenter = 0;
		t.x = 137;
		t.y = 10;
		return t;
	};
	_proto.gp02_i = function () {
		var t = new eui.Group();
		this.gp02 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.strokeColor = 0x5A4118;
		t.text = "1.店铺规模";
		t.textColor = 0xA37C3E;
		t.verticalCenter = 0;
		t.x = 127;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x0F4600;
		t.text = "微型";
		t.textColor = 0x94F016;
		t.verticalCenter = 0;
		t.x = 137;
		t.y = 10;
		return t;
	};
	_proto.gp03_i = function () {
		var t = new eui.Group();
		this.gp03 = t;
		t.x = 10;
		t.y = 10;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.strokeColor = 0x5A4118;
		t.text = "1.店铺规模";
		t.textColor = 0xA37C3E;
		t.verticalCenter = 0;
		t.x = 127;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x0F4600;
		t.text = "微型";
		t.textColor = 0x94F016;
		t.verticalCenter = 0;
		t.x = 137;
		t.y = 10;
		return t;
	};
	_proto.gp04_i = function () {
		var t = new eui.Group();
		this.gp04 = t;
		t.x = 10;
		t.y = 10;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.strokeColor = 0x5A4118;
		t.text = "1.店铺规模";
		t.textColor = 0xA37C3E;
		t.verticalCenter = 0;
		t.x = 127;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x0F4600;
		t.text = "微型";
		t.textColor = 0x94F016;
		t.verticalCenter = 0;
		t.x = 137;
		t.y = 10;
		return t;
	};
	return cookbossShowIntroduceSkin;
})(eui.Skin);generateEUI.paths['resource/ui/clothing/BossTip.exml'] = window.cookBossTip = (function (_super) {
	__extends(cookBossTip, _super);
	var cookBossTip$Skin37 = 	(function (_super) {
		__extends(cookBossTip$Skin37, _super);
		function cookBossTip$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookBossTip$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookBossTip$Skin37;
	})(eui.Skin);

	function cookBossTip() {
		_super.call(this);
		this.skinParts = ["closeBtn"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookBossTip.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.ellipseHeight = 12;
		t.ellipseWidth = 12;
		t.fillColor = 0xf6f6e6;
		t.height = 942.33;
		t.horizontalCenter = 0.5;
		t.width = 652;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "popup_header_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "boss_secret_title_png";
		t.top = 36;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "boss_secret_png";
		t.top = 132;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 609;
		t.y = 53;
		t.skinName = cookBossTip$Skin37;
		return t;
	};
	return cookBossTip;
})(eui.Skin);generateEUI.paths['resource/ui/clothing/BossUpgrade.exml'] = window.cookBossUpgrade = (function (_super) {
	__extends(cookBossUpgrade, _super);
	var cookBossUpgrade$Skin38 = 	(function (_super) {
		__extends(cookBossUpgrade$Skin38, _super);
		function cookBossUpgrade$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookBossUpgrade$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookBossUpgrade$Skin38;
	})(eui.Skin);

	function cookBossUpgrade() {
		_super.call(this);
		this.skinParts = ["effect_group","imgBg","lbTitle","imIcon","gp01","gp02","gp03","gp04","closeBtn"];
		
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = cookBossUpgrade.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 794;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 586;
		t.elementsContent = [this.effect_group_i(),this._Image1_i(),this._Image2_i(),this._Group1_i(),this._Group2_i(),this._Label9_i(),this.closeBtn_i()];
		return t;
	};
	_proto.effect_group_i = function () {
		var t = new eui.Group();
		this.effect_group = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "share_head_bg_png";
		t.verticalCenter = -335;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "boss_upgrade_img_png";
		t.y = 138;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 273;
		t.y = 536.95;
		t.elementsContent = [this.imgBg_i(),this.lbTitle_i(),this.imIcon_i()];
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.horizontalCenter = 0;
		t.source = "title_c1_png";
		return t;
	};
	_proto.lbTitle_i = function () {
		var t = new eui.Label();
		this.lbTitle = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x5A4118;
		t.text = "广州市小跟班";
		t.textColor = 0xFFF118;
		t.verticalCenter = 0;
		t.x = 127;
		return t;
	};
	_proto.imIcon_i = function () {
		var t = new eui.Image();
		this.imIcon = t;
		t.left = -19;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "title_i4_png";
		t.y = 6;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 616;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.gp01_i(),this.gp02_i(),this.gp03_i(),this.gp04_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		return t;
	};
	_proto.gp01_i = function () {
		var t = new eui.Group();
		this.gp01 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.strokeColor = 0x5A4118;
		t.text = "1.店铺规模";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.x = 127;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "微型";
		t.textColor = 0x94F016;
		t.verticalCenter = 0;
		t.x = 137;
		t.y = 10;
		return t;
	};
	_proto.gp02_i = function () {
		var t = new eui.Group();
		this.gp02 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.strokeColor = 0x5A4118;
		t.text = "1.店铺规模";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.x = 127;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "微型";
		t.textColor = 0x94F016;
		t.verticalCenter = 0;
		t.x = 137;
		t.y = 10;
		return t;
	};
	_proto.gp03_i = function () {
		var t = new eui.Group();
		this.gp03 = t;
		t.x = 10;
		t.y = 10;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.strokeColor = 0x5A4118;
		t.text = "1.店铺规模";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.x = 127;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "微型";
		t.textColor = 0x94F016;
		t.verticalCenter = 0;
		t.x = 137;
		t.y = 10;
		return t;
	};
	_proto.gp04_i = function () {
		var t = new eui.Group();
		this.gp04 = t;
		t.x = 10;
		t.y = 10;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.strokeColor = 0x5A4118;
		t.text = "1.店铺规模";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.x = 127;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "微型";
		t.textColor = 0x94F016;
		t.verticalCenter = 0;
		t.x = 137;
		t.y = 10;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "身份倍增";
		t.y = 28;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.label = "";
		t.x = 507;
		t.y = 48;
		t.skinName = cookBossUpgrade$Skin38;
		return t;
	};
	return cookBossUpgrade;
})(eui.Skin);generateEUI.paths['resource/ui/clothing/chestsItemSkin.exml'] = window.cookchestsItemSkin = (function (_super) {
	__extends(cookchestsItemSkin, _super);
	function cookchestsItemSkin() {
		_super.call(this);
		this.skinParts = ["gpAll","lbCount"];
		
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = cookchestsItemSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 184;
		t.anchorOffsetY = 154;
		t.height = 308;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 368;
		t.x = 184;
		t.y = 154;
		t.elementsContent = [this.gpAll_i(),this._Group1_i()];
		return t;
	};
	_proto.gpAll_i = function () {
		var t = new eui.Group();
		this.gpAll = t;
		t.x = 184;
		t.y = 154;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 294;
		t.y = 20;
		t.elementsContent = [this._Image1_i(),this.lbCount_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 2.5;
		t.scaleY = 2.5;
		t.source = "red_dot_png";
		return t;
	};
	_proto.lbCount_i = function () {
		var t = new eui.Label();
		this.lbCount = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "10";
		t.verticalCenter = 0;
		return t;
	};
	return cookchestsItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/loading/ClothingNunberProgress.exml'] = window.cookClothingNunberProgress = (function (_super) {
	__extends(cookClothingNunberProgress, _super);
	function cookClothingNunberProgress() {
		_super.call(this);
		this.skinParts = ["action","thumb","lbPacent"];
		
		this.action_i();
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.lbPacent_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.imgBuilding"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [25],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [-25],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, ["hostComponent.imgRemove"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [25],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, [-25],[],this._Object5,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"rotation");
	}
	var _proto = cookClothingNunberProgress.prototype;

	_proto.action_i = function () {
		var t = new egret.tween.TweenGroup();
		this.action = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.ease = "quartInOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.ease = "quartInOut";
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 42;
		t.scale9Grid = new egret.Rectangle(14,14,26,25);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "suite_level_bar_bg_png";
		t.width = 174;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 36;
		t.scale9Grid = new egret.Rectangle(13,12,22,21);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "suite_level_bar_png";
		t.width = 168;
		t.x = 3;
		t.y = 3;
		return t;
	};
	_proto.lbPacent_i = function () {
		var t = new eui.Label();
		this.lbPacent = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "5/14";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 60;
		t.y = 7;
		return t;
	};
	return cookClothingNunberProgress;
})(eui.Skin);generateEUI.paths['resource/ui/clothing/chestsShowAllItemSkin.exml'] = window.cookchestsShowAllItemSkin = (function (_super) {
	__extends(cookchestsShowAllItemSkin, _super);
	function cookchestsShowAllItemSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","imgIcon","lbCount","lbLevel","pgNeedNumber","imgHasUpgrade"];
		
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = cookchestsShowAllItemSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 73;
		t.anchorOffsetY = 128;
		t.x = 73;
		t.y = 128;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.imgBg_i(),this.imgIcon_i(),this.lbCount_i(),this._Rect1_i(),this.lbLevel_i(),this.pgNeedNumber_i(),this.imgHasUpgrade_i()];
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.source = "suite_card_1_png";
		t.y = 35;
		return t;
	};
	_proto.imgIcon_i = function () {
		var t = new eui.Image();
		this.imgIcon = t;
		t.horizontalCenter = -4.5;
		t.scaleX = 0.61;
		t.scaleY = 0.61;
		t.source = "suite2_png";
		t.top = 51;
		return t;
	};
	_proto.lbCount_i = function () {
		var t = new eui.Label();
		this.lbCount = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "+4";
		t.x = 111;
		t.y = 12.5;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 24;
		t.ellipseWidth = 24;
		t.fillAlpha = 0.34;
		t.height = 23;
		t.width = 93;
		t.x = 24;
		t.y = 177;
		return t;
	};
	_proto.lbLevel_i = function () {
		var t = new eui.Label();
		this.lbLevel = t;
		t.bold = true;
		t.horizontalCenter = -1.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "LV.2";
		t.y = 180;
		return t;
	};
	_proto.pgNeedNumber_i = function () {
		var t = new eui.ProgressBar();
		this.pgNeedNumber = t;
		t.height = 20;
		t.left = 15;
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.skinName = "cookClothingNunberProgress";
		t.width = 20;
		t.y = 203;
		return t;
	};
	_proto.imgHasUpgrade_i = function () {
		var t = new eui.Image();
		this.imgHasUpgrade = t;
		t.horizontalCenter = 43;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "suite_level_arrow_png";
		t.top = 205;
		return t;
	};
	return cookchestsShowAllItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/clothing/chestsSkin.exml'] = window.cookchestsSkin = (function (_super) {
	__extends(cookchestsSkin, _super);
	var cookchestsSkin$Skin39 = 	(function (_super) {
		__extends(cookchestsSkin$Skin39, _super);
		function cookchestsSkin$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookchestsSkin$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookchestsSkin$Skin39;
	})(eui.Skin);

	function cookchestsSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","gpCur","gpFront","gpLater","imgChestName","imgArrowsLeft","imgArrowsRight","imgBg","imgIcon","lbNumber","gpCard","lbName","lbQuanlity","lblevel","pgNeedNumber","imgHasUpgrade","gpDes","gpShowInfo","gpAllWardItem"];
		
		this._TweenGroup1_i();
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["gpCard"],[0],this._TweenItem1,"target");
	}
	var _proto = cookchestsSkin.prototype;

	_proto._TweenGroup1_i = function () {
		var t = new egret.tween.TweenGroup();
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.width = 750;
		t.elementsContent = [this._Image1_i(),this.closeBtn_i(),this.gpCur_i(),this.gpFront_i(),this.gpLater_i(),this.imgChestName_i(),this.imgArrowsLeft_i(),this.imgArrowsRight_i(),this.gpShowInfo_i(),this.gpAllWardItem_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "cookbook_main_bg_jpg";
		t.visible = false;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.label = "";
		t.x = 45;
		t.y = 86;
		t.skinName = cookchestsSkin$Skin39;
		return t;
	};
	_proto.gpCur_i = function () {
		var t = new eui.Group();
		this.gpCur = t;
		t.bottom = 333;
		t.x = 380;
		return t;
	};
	_proto.gpFront_i = function () {
		var t = new eui.Group();
		this.gpFront = t;
		t.bottom = 389;
		t.x = -20;
		return t;
	};
	_proto.gpLater_i = function () {
		var t = new eui.Group();
		this.gpLater = t;
		t.bottom = 389;
		t.x = 780;
		return t;
	};
	_proto.imgChestName_i = function () {
		var t = new eui.Image();
		this.imgChestName = t;
		t.bottom = 28;
		t.horizontalCenter = 0;
		t.source = "chest_banner_1_png";
		return t;
	};
	_proto.imgArrowsLeft_i = function () {
		var t = new eui.Image();
		this.imgArrowsLeft = t;
		t.bottom = 36;
		t.horizontalCenter = -228;
		t.source = "suite_left_arrow_png";
		t.touchEnabled = true;
		return t;
	};
	_proto.imgArrowsRight_i = function () {
		var t = new eui.Image();
		this.imgArrowsRight = t;
		t.bottom = 38;
		t.horizontalCenter = 232;
		t.scaleX = -1;
		t.source = "suite_left_arrow_png";
		t.touchEnabled = true;
		return t;
	};
	_proto.gpShowInfo_i = function () {
		var t = new eui.Group();
		this.gpShowInfo = t;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 91;
		t.y = 164;
		t.elementsContent = [this.gpCard_i(),this.gpDes_i()];
		return t;
	};
	_proto.gpCard_i = function () {
		var t = new eui.Group();
		this.gpCard = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 135;
		t.x = 115;
		t.y = 135;
		t.elementsContent = [this.imgBg_i(),this.imgIcon_i(),this.lbNumber_i()];
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.height = 270;
		t.scale9Grid = new egret.Rectangle(28,29,174,177);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "suite_bg_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgIcon_i = function () {
		var t = new eui.Image();
		this.imgIcon = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "suite1_png";
		t.top = 1;
		return t;
	};
	_proto.lbNumber_i = function () {
		var t = new eui.Label();
		this.lbNumber = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "X4";
		t.textColor = 0xafa391;
		t.y = 221.3;
		return t;
	};
	_proto.gpDes_i = function () {
		var t = new eui.Group();
		this.gpDes = t;
		t.x = 327.33;
		t.y = 0.69;
		t.elementsContent = [this.lbName_i(),this.lbQuanlity_i(),this.lblevel_i(),this.pgNeedNumber_i(),this.imgHasUpgrade_i()];
		return t;
	};
	_proto.lbName_i = function () {
		var t = new eui.Label();
		this.lbName = t;
		t.bold = true;
		t.left = 0;
		t.size = 44;
		t.text = "冒险家衣服";
		t.textColor = 0xffffff;
		t.y = 5.3;
		return t;
	};
	_proto.lbQuanlity_i = function () {
		var t = new eui.Label();
		this.lbQuanlity = t;
		t.bold = true;
		t.left = 0;
		t.size = 40;
		t.text = "普通";
		t.textColor = 0xfff1a1;
		t.x = 10;
		t.y = 68.85;
		return t;
	};
	_proto.lblevel_i = function () {
		var t = new eui.Label();
		this.lblevel = t;
		t.bold = true;
		t.left = 0;
		t.size = 30;
		t.text = "等级5";
		t.textColor = 0xffffff;
		t.x = 20;
		t.y = 174.89;
		return t;
	};
	_proto.pgNeedNumber_i = function () {
		var t = new eui.ProgressBar();
		this.pgNeedNumber = t;
		t.height = 20;
		t.left = 0;
		t.skinName = "cookClothingNunberProgress";
		t.slideDuration = 0;
		t.width = 20;
		t.y = 221.84;
		return t;
	};
	_proto.imgHasUpgrade_i = function () {
		var t = new eui.Image();
		this.imgHasUpgrade = t;
		t.horizontalCenter = 45.5;
		t.source = "suite_level_arrow_png";
		t.top = 228;
		return t;
	};
	_proto.gpAllWardItem_i = function () {
		var t = new eui.Group();
		this.gpAllWardItem = t;
		t.bottom = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.percentWidth = 100;
		return t;
	};
	return cookchestsSkin;
})(eui.Skin);generateEUI.paths['resource/ui/clothing/clothingInfoSkin.exml'] = window.cookClothingInfoSkin = (function (_super) {
	__extends(cookClothingInfoSkin, _super);
	var cookClothingInfoSkin$Skin40 = 	(function (_super) {
		__extends(cookClothingInfoSkin$Skin40, _super);
		function cookClothingInfoSkin$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookClothingInfoSkin$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookClothingInfoSkin$Skin40;
	})(eui.Skin);

	var cookClothingInfoSkin$Skin41 = 	(function (_super) {
		__extends(cookClothingInfoSkin$Skin41, _super);
		function cookClothingInfoSkin$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookClothingInfoSkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "undress_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookClothingInfoSkin$Skin41;
	})(eui.Skin);

	var cookClothingInfoSkin$Skin42 = 	(function (_super) {
		__extends(cookClothingInfoSkin$Skin42, _super);
		function cookClothingInfoSkin$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookClothingInfoSkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "changeclothes_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookClothingInfoSkin$Skin42;
	})(eui.Skin);

	var cookClothingInfoSkin$Skin43 = 	(function (_super) {
		__extends(cookClothingInfoSkin$Skin43, _super);
		function cookClothingInfoSkin$Skin43() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookClothingInfoSkin$Skin43.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 110;
			t.horizontalCenter = 0;
			t.source = "greenBtn_bg_png";
			t.width = 320;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "sure_text_png";
			t.verticalCenter = 0;
			return t;
		};
		return cookClothingInfoSkin$Skin43;
	})(eui.Skin);

	function cookClothingInfoSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","imgIcon","lbName","lbQuanlity","lbDes01","lbDes02","lbDes03","lbDes04","closeBtn","lbLevel","pgNeedNumber","mbUpLoad","mbExchange","gpState02","mbEquip","gpState01"];
		
		this.elementsContent = [this._Group4_i()];
	}
	var _proto = cookClothingInfoSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Group3_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this.imgBg_i(),this.imgIcon_i(),this.lbName_i(),this.lbQuanlity_i(),this.lbDes01_i(),this.lbDes02_i(),this.lbDes03_i(),this.lbDes04_i(),this.closeBtn_i(),this.lbLevel_i(),this.pgNeedNumber_i(),this.gpState02_i(),this.gpState01_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillColor = 0xF6F6E6;
		t.height = 857;
		t.width = 652;
		t.x = 18;
		t.y = 13;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(86,48,523,12);
		t.source = "popup_header_png";
		t.width = 684;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "confirm_prop_text_png";
		t.y = 36;
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.horizontalCenter = 0;
		t.source = "suite_bg_2_png";
		t.y = 233;
		return t;
	};
	_proto.imgIcon_i = function () {
		var t = new eui.Image();
		this.imgIcon = t;
		t.horizontalCenter = 0.5;
		t.source = "trousers1_png";
		t.y = 219;
		return t;
	};
	_proto.lbName_i = function () {
		var t = new eui.Label();
		this.lbName = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "冒险家衣服";
		t.textColor = 0xa37c3e;
		t.y = 161;
		return t;
	};
	_proto.lbQuanlity_i = function () {
		var t = new eui.Label();
		this.lbQuanlity = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "普通";
		t.textColor = 0xafa391;
		t.y = 409;
		return t;
	};
	_proto.lbDes01_i = function () {
		var t = new eui.Label();
		this.lbDes01 = t;
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 36;
		t.text = "X1.3 美食岛的店铺收益  ";
		t.textColor = 0xec8100;
		t.y = 591;
		return t;
	};
	_proto.lbDes02_i = function () {
		var t = new eui.Label();
		this.lbDes02 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "[与其他衣服加成叠加]";
		t.textColor = 0xEC8100;
		t.y = 641;
		return t;
	};
	_proto.lbDes03_i = function () {
		var t = new eui.Label();
		this.lbDes03 = t;
		t.bold = true;
		t.horizontalCenter = 1;
		t.size = 32;
		t.text = "0/3件经理套装的部件被穿上";
		t.textColor = 0xEC8100;
		t.y = 891;
		return t;
	};
	_proto.lbDes04_i = function () {
		var t = new eui.Label();
		this.lbDes04 = t;
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 32;
		t.text = " x2服装所有部件的效果";
		t.textColor = 0xEC8100;
		t.y = 941;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 27.5;
		t.label = "";
		t.right = 19;
		t.top = 27;
		t.skinName = cookClothingInfoSkin$Skin40;
		return t;
	};
	_proto.lbLevel_i = function () {
		var t = new eui.Label();
		this.lbLevel = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "LV.2";
		t.textColor = 0x897f63;
		t.x = 208;
		t.y = 511;
		return t;
	};
	_proto.pgNeedNumber_i = function () {
		var t = new eui.ProgressBar();
		this.pgNeedNumber = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "cookClothingNunberProgress";
		t.slideDuration = 0;
		t.x = 301;
		t.y = 507;
		return t;
	};
	_proto.gpState02_i = function () {
		var t = new eui.Group();
		this.gpState02 = t;
		t.height = 45;
		t.horizontalCenter = 70.5;
		t.width = 345;
		t.y = 760;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 230;
		t.elementsContent = [this.mbUpLoad_i()];
		return t;
	};
	_proto.mbUpLoad_i = function () {
		var t = new cookMyButton();
		this.mbUpLoad = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 55;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = cookClothingInfoSkin$Skin41;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 230;
		t.x = 270;
		t.elementsContent = [this.mbExchange_i()];
		return t;
	};
	_proto.mbExchange_i = function () {
		var t = new cookMyButton();
		this.mbExchange = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 55;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = cookClothingInfoSkin$Skin42;
		return t;
	};
	_proto.gpState01_i = function () {
		var t = new eui.Group();
		this.gpState01 = t;
		t.left = 346;
		t.visible = false;
		t.y = 760;
		t.elementsContent = [this.mbEquip_i()];
		return t;
	};
	_proto.mbEquip_i = function () {
		var t = new cookMyButton();
		this.mbEquip = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 55;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = cookClothingInfoSkin$Skin43;
		return t;
	};
	return cookClothingInfoSkin;
})(eui.Skin);generateEUI.paths['resource/ui/clothing/clothingItemSkin.exml'] = window.cookclothingItemSkin = (function (_super) {
	__extends(cookclothingItemSkin, _super);
	var cookclothingItemSkin$Skin44 = 	(function (_super) {
		__extends(cookclothingItemSkin$Skin44, _super);
		function cookclothingItemSkin$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookclothingItemSkin$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dressup_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookclothingItemSkin$Skin44;
	})(eui.Skin);

	function cookclothingItemSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","imgIcon","imgAddition","imgGet","gpTouch","lbLevel","pgNeedNumber","gpState01","mbWearable","gpState02","lbAddition","imgHasUpgrade"];
		
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = cookclothingItemSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.imgBg_i(),this.imgIcon_i(),this.imgAddition_i(),this.imgGet_i(),this._Image1_i(),this.gpTouch_i(),this.gpState01_i(),this.gpState02_i(),this.lbAddition_i(),this.imgHasUpgrade_i()];
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.height = 295;
		t.scale9Grid = new egret.Rectangle(28,29,174,177);
		t.source = "suite_bg_2_png";
		t.width = 210;
		t.x = 10;
		t.y = 35;
		return t;
	};
	_proto.imgIcon_i = function () {
		var t = new eui.Image();
		this.imgIcon = t;
		t.horizontalCenter = 0;
		t.source = "suite2_png";
		t.top = 30;
		return t;
	};
	_proto.imgAddition_i = function () {
		var t = new eui.Image();
		this.imgAddition = t;
		t.horizontalCenter = -60.5;
		t.source = "suite_coin_bg_png";
		t.top = 14;
		return t;
	};
	_proto.imgGet_i = function () {
		var t = new eui.Image();
		this.imgGet = t;
		t.horizontalCenter = 78.5;
		t.source = "suite_get_png";
		t.top = 6;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -74.5;
		t.source = "suite_level_arrow_png";
		t.top = 6;
		return t;
	};
	_proto.gpTouch_i = function () {
		var t = new eui.Group();
		this.gpTouch = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.gpState01_i = function () {
		var t = new eui.Group();
		this.gpState01 = t;
		t.x = 13;
		t.y = 218;
		t.elementsContent = [this._Rect1_i(),this.lbLevel_i(),this.pgNeedNumber_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 24;
		t.ellipseWidth = 24;
		t.fillAlpha = 0.34;
		t.height = 36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 43;
		t.y = 13;
		return t;
	};
	_proto.lbLevel_i = function () {
		var t = new eui.Label();
		this.lbLevel = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "LV.2";
		t.x = 72;
		t.y = 17;
		return t;
	};
	_proto.pgNeedNumber_i = function () {
		var t = new eui.ProgressBar();
		this.pgNeedNumber = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "cookClothingNunberProgress";
		t.slideDuration = 0;
		t.x = 15;
		t.y = 53;
		return t;
	};
	_proto.gpState02_i = function () {
		var t = new eui.Group();
		this.gpState02 = t;
		t.visible = false;
		t.x = 37;
		t.y = 240;
		t.elementsContent = [this.mbWearable_i()];
		return t;
	};
	_proto.mbWearable_i = function () {
		var t = new cookMyButton();
		this.mbWearable = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 36;
		t.label = "";
		t.x = 80;
		t.y = 36;
		t.skinName = cookclothingItemSkin$Skin44;
		return t;
	};
	_proto.lbAddition_i = function () {
		var t = new eui.Label();
		this.lbAddition = t;
		t.bold = true;
		t.height = 24;
		t.horizontalCenter = -37;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "x1.5";
		t.textColor = 0x897f63;
		t.y = 33.5;
		return t;
	};
	_proto.imgHasUpgrade_i = function () {
		var t = new eui.Image();
		this.imgHasUpgrade = t;
		t.horizontalCenter = 68.5;
		t.source = "suite_level_arrow_png";
		t.top = 277;
		return t;
	};
	return cookclothingItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/loading/SuiteProgress.exml'] = window.cookSuiteProgress = (function (_super) {
	__extends(cookSuiteProgress, _super);
	function cookSuiteProgress() {
		_super.call(this);
		this.skinParts = ["action","thumb","lbPacent"];
		
		this.action_i();
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.lbPacent_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.imgBuilding"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [25],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [-25],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, ["hostComponent.imgRemove"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [25],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, [-25],[],this._Object5,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"rotation");
	}
	var _proto = cookSuiteProgress.prototype;

	_proto.action_i = function () {
		var t = new egret.tween.TweenGroup();
		this.action = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.ease = "quartInOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.ease = "quartInOut";
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 42;
		t.scale9Grid = new egret.Rectangle(14,14,26,25);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "suite_level_bar_bg_png";
		t.width = 384;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 36;
		t.scale9Grid = new egret.Rectangle(13,12,22,21);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "suite_level_bar_png";
		t.width = 378;
		t.x = 3;
		t.y = 3;
		return t;
	};
	_proto.lbPacent_i = function () {
		var t = new eui.Label();
		this.lbPacent = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "1001000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 137;
		t.y = 5;
		return t;
	};
	return cookSuiteProgress;
})(eui.Skin);generateEUI.paths['resource/ui/clothing/clothingSkin.exml'] = window.cookclothingSkin = (function (_super) {
	__extends(cookclothingSkin, _super);
	var cookclothingSkin$Skin45 = 	(function (_super) {
		__extends(cookclothingSkin$Skin45, _super);
		function cookclothingSkin$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","figure_selected_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookclothingSkin$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "figure_select_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookclothingSkin$Skin45;
	})(eui.Skin);

	var cookclothingSkin$Skin46 = 	(function (_super) {
		__extends(cookclothingSkin$Skin46, _super);
		function cookclothingSkin$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","suite_selected_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookclothingSkin$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "suite_select_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookclothingSkin$Skin46;
	})(eui.Skin);

	var cookclothingSkin$Skin47 = 	(function (_super) {
		__extends(cookclothingSkin$Skin47, _super);
		function cookclothingSkin$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","boss_selected_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookclothingSkin$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "boss_select_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookclothingSkin$Skin47;
	})(eui.Skin);

	var cookclothingSkin$Skin48 = 	(function (_super) {
		__extends(cookclothingSkin$Skin48, _super);
		function cookclothingSkin$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","rank_selected_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookclothingSkin$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "rank_select_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookclothingSkin$Skin48;
	})(eui.Skin);

	var cookclothingSkin$Skin49 = 	(function (_super) {
		__extends(cookclothingSkin$Skin49, _super);
		function cookclothingSkin$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookclothingSkin$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "boss_secret_upgrade_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookclothingSkin$Skin49;
	})(eui.Skin);

	var cookclothingSkin$Skin50 = 	(function (_super) {
		__extends(cookclothingSkin$Skin50, _super);
		function cookclothingSkin$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookclothingSkin$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "boss_secret_get_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookclothingSkin$Skin50;
	})(eui.Skin);

	var cookclothingSkin$Skin51 = 	(function (_super) {
		__extends(cookclothingSkin$Skin51, _super);
		function cookclothingSkin$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookclothingSkin$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookclothingSkin$Skin51;
	})(eui.Skin);

	function cookclothingSkin() {
		_super.call(this);
		this.skinParts = ["radio01","radio02","radio03","radio04","imgBtn01","imgBtn02","imgBtn03","imgPart03","imgPart02","imgPart01","gpNoSuit","lbSuitEffect","gpHasSuit","vs01_01","imgBg","gpVs_01_02Add","gpVs01_list","vs01_02","vs01","gpAddItem","gpVs02_list01","gpVs02_list02","vs02","mbUp","pgSuite","gpIntroduce","mbGet","lbGetCash","vs03","gpAddRank","lbEaring","lbName","vs04","closeBtn"];
		
		this.elementsContent = [this._Group9_i()];
	}
	var _proto = cookclothingSkin.prototype;

	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Group8_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffe0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "stripe_bg_jpg";
		t.width = 750;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 1334;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this._Group1_i(),this._Rect2_i(),this._Group2_i(),this.vs01_i(),this.vs02_i(),this.vs03_i(),this.vs04_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 34;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 99;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "share_head_bg_png";
		t.width = 549;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "老板";
		t.y = 15;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xfac943;
		t.height = 190;
		t.width = 750;
		t.x = 0;
		t.y = 168;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 198;
		t.y = 204;
		t.elementsContent = [this.radio01_i(),this.radio02_i(),this.radio03_i(),this.radio04_i()];
		return t;
	};
	_proto.radio01_i = function () {
		var t = new eui.RadioButton();
		this.radio01 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -121;
		t.y = -4;
		t.skinName = cookclothingSkin$Skin45;
		return t;
	};
	_proto.radio02_i = function () {
		var t = new eui.RadioButton();
		this.radio02 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 49;
		t.y = -4;
		t.skinName = cookclothingSkin$Skin46;
		return t;
	};
	_proto.radio03_i = function () {
		var t = new eui.RadioButton();
		this.radio03 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 218;
		t.y = -4;
		t.skinName = cookclothingSkin$Skin47;
		return t;
	};
	_proto.radio04_i = function () {
		var t = new eui.RadioButton();
		this.radio04 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 387;
		t.y = -4;
		t.skinName = cookclothingSkin$Skin48;
		return t;
	};
	_proto.vs01_i = function () {
		var t = new eui.Group();
		this.vs01 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 385;
		t.elementsContent = [this.vs01_01_i(),this.vs01_02_i()];
		return t;
	};
	_proto.vs01_01_i = function () {
		var t = new eui.Group();
		this.vs01_01 = t;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.elementsContent = [this._Image3_i(),this.imgBtn01_i(),this.imgBtn02_i(),this.imgBtn03_i(),this._Rect3_i(),this._Group3_i(),this.gpNoSuit_i(),this.gpHasSuit_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "suite_bg_png";
		t.x = 32;
		t.y = -0.910000000000025;
		return t;
	};
	_proto.imgBtn01_i = function () {
		var t = new eui.Image();
		this.imgBtn01 = t;
		t.height = 303;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hat_bg_png";
		t.touchEnabled = true;
		t.width = 218;
		t.x = 32;
		t.y = 608;
		return t;
	};
	_proto.imgBtn02_i = function () {
		var t = new eui.Image();
		this.imgBtn02 = t;
		t.height = 303;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "clothes_bg_png";
		t.touchEnabled = true;
		t.width = 218;
		t.x = 272;
		t.y = 608;
		return t;
	};
	_proto.imgBtn03_i = function () {
		var t = new eui.Image();
		this.imgBtn03 = t;
		t.height = 303;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pants_bg_png";
		t.touchEnabled = true;
		t.width = 218;
		t.x = 515;
		t.y = 608;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 67;
		t.ellipseWidth = 241;
		t.fillColor = 0xdcc293;
		t.height = 67;
		t.horizontalCenter = -2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 234;
		t.y = 443.33;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -80.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 115;
		t.elementsContent = [this.imgPart03_i(),this.imgPart02_i(),this.imgPart01_i()];
		return t;
	};
	_proto.imgPart03_i = function () {
		var t = new eui.Image();
		this.imgPart03 = t;
		t.horizontalCenter = 98;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lower3_png";
		t.y = 178;
		return t;
	};
	_proto.imgPart02_i = function () {
		var t = new eui.Image();
		this.imgPart02 = t;
		t.horizontalCenter = 94;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "body3_png";
		t.y = 58;
		return t;
	};
	_proto.imgPart01_i = function () {
		var t = new eui.Image();
		this.imgPart01 = t;
		t.horizontalCenter = 108;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "head3_png";
		t.y = -152;
		return t;
	};
	_proto.gpNoSuit_i = function () {
		var t = new eui.Group();
		this.gpNoSuit = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 213;
		t.y = 523.97;
		t.elementsContent = [this._Rect4_i(),this._Image4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 16;
		t.ellipseWidth = 16;
		t.fillColor = 0xcfbdaa;
		t.height = 64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 326;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "suite_effect_none_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gpHasSuit_i = function () {
		var t = new eui.Group();
		this.gpHasSuit = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 213;
		t.y = 523.97;
		t.elementsContent = [this._Rect5_i(),this._Image5_i(),this._Image6_i(),this.lbSuitEffect_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 16;
		t.ellipseWidth = 16;
		t.fillColor = 0xCFBDAA;
		t.height = 64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 326;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.left = 18;
		t.source = "suite_effect_text_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.left = 198;
		t.source = "suite_effect_icon_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbSuitEffect_i = function () {
		var t = new eui.Label();
		this.lbSuitEffect = t;
		t.bold = true;
		t.left = 245;
		t.size = 34;
		t.text = "x1.5";
		t.verticalCenter = 0;
		return t;
	};
	_proto.vs01_02_i = function () {
		var t = new eui.Group();
		this.vs01_02 = t;
		t.width = 750;
		t.elementsContent = [this.imgBg_i(),this._Scroller1_i(),this.gpVs01_list_i()];
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "suite_back_png";
		t.x = 33;
		t.y = -1;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 843;
		t.horizontalCenter = 0;
		t.y = 106;
		t.viewport = this.gpVs_01_02Add_i();
		return t;
	};
	_proto.gpVs_01_02Add_i = function () {
		var t = new eui.Group();
		this.gpVs_01_02Add = t;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.requestedColumnCount = 3;
		return t;
	};
	_proto.gpVs01_list_i = function () {
		var t = new eui.Group();
		this.gpVs01_list = t;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.x = 162.15;
		t.y = 0;
		return t;
	};
	_proto.vs02_i = function () {
		var t = new eui.Group();
		this.vs02 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 750;
		t.y = 385;
		t.elementsContent = [this._Scroller2_i(),this.gpVs02_list01_i(),this.gpVs02_list02_i()];
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 822;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.y = 96.91;
		t.viewport = this.gpAddItem_i();
		return t;
	};
	_proto.gpAddItem_i = function () {
		var t = new eui.Group();
		this.gpAddItem = t;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.requestedColumnCount = 3;
		return t;
	};
	_proto.gpVs02_list01_i = function () {
		var t = new eui.Group();
		this.gpVs02_list01 = t;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.x = 47;
		t.y = 0;
		return t;
	};
	_proto.gpVs02_list02_i = function () {
		var t = new eui.Group();
		this.gpVs02_list02 = t;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.x = 394;
		t.y = 0;
		return t;
	};
	_proto.vs03_i = function () {
		var t = new eui.Group();
		this.vs03 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 750;
		t.y = 385;
		t.elementsContent = [this._Group4_i(),this.gpIntroduce_i(),this._Group6_i(),this._Rect8_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.elementsContent = [this._Rect6_i(),this._Label2_i(),this.mbUp_i(),this.pgSuite_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xe2ddc3;
		t.height = 104;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 666;
		t.x = 42;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.stroke = 2;
		t.strokeColor = 0x6c4302;
		t.text = "赚钱速度";
		t.x = 28;
		t.y = 13;
		return t;
	};
	_proto.mbUp_i = function () {
		var t = new cookMyButton();
		this.mbUp = t;
		t.anchorOffsetX = 95;
		t.anchorOffsetY = 38;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 549;
		t.y = 52;
		t.skinName = cookclothingSkin$Skin49;
		return t;
	};
	_proto.pgSuite_i = function () {
		var t = new eui.ProgressBar();
		this.pgSuite = t;
		t.height = 20;
		t.skinName = "cookSuiteProgress";
		t.slideDuration = 0;
		t.width = 20;
		t.x = 28;
		t.y = 48.36;
		return t;
	};
	_proto.gpIntroduce_i = function () {
		var t = new eui.Group();
		this.gpIntroduce = t;
		t.horizontalCenter = 0;
		t.y = 148;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 38;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 554.55;
		t.elementsContent = [this._Rect7_i(),this.mbGet_i(),this._Group5_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xE2DDC3;
		t.height = 104;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 666;
		t.x = 42;
		t.y = 0;
		return t;
	};
	_proto.mbGet_i = function () {
		var t = new cookMyButton();
		this.mbGet = t;
		t.anchorOffsetX = 95;
		t.anchorOffsetY = 39;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 549;
		t.y = 52;
		t.skinName = cookclothingSkin$Skin50;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.left = 36;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Label3_i(),this.lbGetCash_i(),this._Image7_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 12;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.stroke = 3;
		t.strokeColor = 0x835000;
		t.text = "每日可领取";
		t.x = 28;
		t.y = 0;
		return t;
	};
	_proto.lbGetCash_i = function () {
		var t = new eui.Label();
		this.lbGetCash = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.stroke = 3;
		t.strokeColor = 0x835000;
		t.text = "50";
		t.x = 38;
		t.y = 10;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 23;
		t.source = "cash_png";
		t.x = 306;
		t.y = 62;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xE2DDC3;
		t.height = 104;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 666;
		return t;
	};
	_proto.vs04_i = function () {
		var t = new eui.Group();
		this.vs04 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = 0;
		t.y = 385;
		t.elementsContent = [this._Scroller3_i(),this._Group7_i()];
		return t;
	};
	_proto._Scroller3_i = function () {
		var t = new eui.Scroller();
		t.height = 754.54;
		t.horizontalCenter = 0;
		t.viewport = this.gpAddRank_i();
		return t;
	};
	_proto.gpAddRank_i = function () {
		var t = new eui.Group();
		this.gpAddRank = t;
		t.anchorOffsetY = 0;
		t.height = 763.63;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 793.94;
		t.elementsContent = [this._Image8_i(),this._Label4_i(),this.lbEaring_i(),this.lbName_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(18,25,22,39);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "NO_mine_bg_png";
		t.width = 690;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.left = 30;
		t.size = 24;
		t.text = "未上榜";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbEaring_i = function () {
		var t = new eui.Label();
		this.lbEaring = t;
		t.right = 30;
		t.size = 34;
		t.text = "未上榜";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbName_i = function () {
		var t = new eui.Label();
		this.lbName = t;
		t.bold = true;
		t.left = 130;
		t.size = 34;
		t.text = "微信名字";
		t.verticalCenter = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.label = "";
		t.x = 41;
		t.y = 90;
		t.skinName = cookclothingSkin$Skin51;
		return t;
	};
	return cookclothingSkin;
})(eui.Skin);generateEUI.paths['resource/ui/clothing/listSelectSkin.exml'] = window.cooklistSelectSkin = (function (_super) {
	__extends(cooklistSelectSkin, _super);
	function cooklistSelectSkin() {
		_super.call(this);
		this.skinParts = ["lbTitile","lbItem","gpUp","imgBg","rectSelect","id01","id02","id03","id04","id05","id06","gpAll","gpDown"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cooklistSelectSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.touchChildren = true;
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.gpUp_i(),this.gpDown_i()];
		return t;
	};
	_proto.gpUp_i = function () {
		var t = new eui.Group();
		this.gpUp = t;
		t.width = 580;
		t.elementsContent = [this._Image1_i(),this.lbTitile_i(),this.lbItem_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 76;
		t.scale9Grid = new egret.Rectangle(28,29,243,151);
		t.source = "shop_item_bg_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.lbTitile_i = function () {
		var t = new eui.Label();
		this.lbTitile = t;
		t.size = 32;
		t.text = "排序:";
		t.textColor = 0xd0ad75;
		t.x = 27;
		t.y = 23;
		return t;
	};
	_proto.lbItem_i = function () {
		var t = new eui.Label();
		this.lbItem = t;
		t.size = 32;
		t.text = "所有";
		t.textColor = 0xa37c3e;
		t.x = 123;
		t.y = 23;
		return t;
	};
	_proto.gpDown_i = function () {
		var t = new eui.Group();
		this.gpDown = t;
		t.y = 78;
		t.elementsContent = [this.imgBg_i(),this.rectSelect_i(),this.gpAll_i()];
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.height = 242;
		t.scale9Grid = new egret.Rectangle(28,29,243,151);
		t.source = "shop_item_bg_png";
		t.width = 580;
		return t;
	};
	_proto.rectSelect_i = function () {
		var t = new eui.Rect();
		this.rectSelect = t;
		t.fillColor = 0xf4cc66;
		t.height = 35;
		t.horizontalCenter = 0;
		t.width = 100;
		t.y = 9.68;
		return t;
	};
	_proto.gpAll_i = function () {
		var t = new eui.Group();
		this.gpAll = t;
		t.horizontalCenter = 0;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.id01_i(),this.id02_i(),this.id03_i(),this.id04_i(),this.id05_i(),this.id06_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.paddingTop = 10;
		return t;
	};
	_proto.id01_i = function () {
		var t = new eui.Label();
		this.id01 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "所有";
		t.textColor = 0xA37C3E;
		t.x = 0;
		t.y = 1.33;
		return t;
	};
	_proto.id02_i = function () {
		var t = new eui.Label();
		this.id02 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "所有";
		t.textColor = 0xA37C3E;
		t.x = 0;
		t.y = 39.33;
		return t;
	};
	_proto.id03_i = function () {
		var t = new eui.Label();
		this.id03 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "所有";
		t.textColor = 0xA37C3E;
		t.x = 0;
		t.y = 77.33;
		return t;
	};
	_proto.id04_i = function () {
		var t = new eui.Label();
		this.id04 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "所有";
		t.textColor = 0xA37C3E;
		t.x = 0;
		t.y = 115.33;
		return t;
	};
	_proto.id05_i = function () {
		var t = new eui.Label();
		this.id05 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "所有";
		t.textColor = 0xA37C3E;
		t.x = 0;
		t.y = 153.33;
		return t;
	};
	_proto.id06_i = function () {
		var t = new eui.Label();
		this.id06 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "所有";
		t.textColor = 0xA37C3E;
		t.x = 0;
		t.y = 191.33;
		return t;
	};
	return cooklistSelectSkin;
})(eui.Skin);generateEUI.paths['resource/ui/clothing/miniChest.exml'] = window.cookminiChest = (function (_super) {
	__extends(cookminiChest, _super);
	function cookminiChest() {
		_super.call(this);
		this.skinParts = ["img","num"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookminiChest.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.img_i(),this.num_i()];
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chest_1_png";
		t.width = 50;
		return t;
	};
	_proto.num_i = function () {
		var t = new eui.Label();
		this.num = t;
		t.bold = true;
		t.size = 24;
		t.text = "";
		t.textColor = 0x755f43;
		t.verticalCenter = 0;
		t.x = 64;
		return t;
	};
	return cookminiChest;
})(eui.Skin);generateEUI.paths['resource/ui/clothing/rankItemSkin.exml'] = window.cookrankItemSkin = (function (_super) {
	__extends(cookrankItemSkin, _super);
	function cookrankItemSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","lbName","lbRegionName","lbRegionOnly","lbEaring","rHead","imgHead","imgRank","lbIndex"];
		
		this.elementsContent = [this._Group4_i()];
	}
	var _proto = cookrankItemSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group3_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.imgBg_i(),this._Image1_i(),this.lbName_i(),this.lbRegionName_i(),this.lbRegionOnly_i(),this._Label1_i(),this.lbEaring_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.height = 137;
		t.scale9Grid = new egret.Rectangle(21,42,16,52);
		t.source = "NO1_bg_png";
		t.width = 700;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "loc_icon_png";
		t.x = 197;
		t.y = 91;
		return t;
	};
	_proto.lbName_i = function () {
		var t = new eui.Label();
		this.lbName = t;
		t.bold = true;
		t.size = 28;
		t.text = "微信昵称";
		t.textColor = 0x7d4e00;
		t.x = 198;
		t.y = 20;
		return t;
	};
	_proto.lbRegionName_i = function () {
		var t = new eui.Label();
		this.lbRegionName = t;
		t.size = 24;
		t.text = "[广州市大老板]";
		t.textColor = 0x7e7568;
		t.x = 199;
		t.y = 50;
		return t;
	};
	_proto.lbRegionOnly_i = function () {
		var t = new eui.Label();
		this.lbRegionOnly = t;
		t.size = 24;
		t.text = "广州市";
		t.textColor = 0xb6833a;
		t.x = 218;
		t.y = 90;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.right = 19;
		t.size = 22;
		t.text = "总收益:";
		t.textColor = 0xa37c3e;
		t.y = 22;
		return t;
	};
	_proto.lbEaring_i = function () {
		var t = new eui.Label();
		this.lbEaring = t;
		t.bold = true;
		t.right = 19;
		t.size = 28;
		t.text = "155B/秒";
		t.textColor = 0x7d4e00;
		t.y = 50;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 80;
		t.y = 20;
		t.elementsContent = [this.rHead_i(),this.imgHead_i()];
		return t;
	};
	_proto.rHead_i = function () {
		var t = new eui.Rect();
		this.rHead = t;
		t.ellipseWidth = 104;
		t.height = 104;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 104;
		return t;
	};
	_proto.imgHead_i = function () {
		var t = new eui.Image();
		this.imgHead = t;
		t.height = 104;
		t.mask = this.rHead;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "boss_i_02_png";
		t.width = 104;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -311.5;
		t.verticalCenter = -0.5;
		t.elementsContent = [this.imgRank_i(),this.lbIndex_i()];
		return t;
	};
	_proto.imgRank_i = function () {
		var t = new eui.Image();
		this.imgRank = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "NO1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbIndex_i = function () {
		var t = new eui.Label();
		this.lbIndex = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "99";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	return cookrankItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/CloudSkin.exml'] = window.cookCloudSkin = (function (_super) {
	__extends(cookCloudSkin, _super);
	function cookCloudSkin() {
		_super.call(this);
		this.skinParts = ["imgDown","imgUp","gpRoot"];
		
		this.width = 750;
		this.elementsContent = [this.gpRoot_i()];
	}
	var _proto = cookCloudSkin.prototype;

	_proto.gpRoot_i = function () {
		var t = new eui.Group();
		this.gpRoot = t;
		t.height = 1624;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.scrollEnabled = false;
		t.top = 0;
		t.touchEnabled = false;
		t.elementsContent = [this.imgDown_i(),this.imgUp_i()];
		return t;
	};
	_proto.imgDown_i = function () {
		var t = new eui.Image();
		this.imgDown = t;
		t.percentHeight = 100;
		t.scaleX = 7.5;
		t.source = "up_cloud_png";
		t.touchEnabled = false;
		t.x = 750;
		t.y = 0;
		return t;
	};
	_proto.imgUp_i = function () {
		var t = new eui.Image();
		this.imgUp = t;
		t.percentHeight = 100;
		t.scaleX = 7.5;
		t.source = "down_cloud_png";
		t.touchEnabled = false;
		t.x = -750;
		t.y = 0;
		return t;
	};
	return cookCloudSkin;
})(eui.Skin);generateEUI.paths['resource/ui/cookbook/cookbookMainSkin.exml'] = window.cookbookMainSkin = (function (_super) {
	__extends(cookbookMainSkin, _super);
	var cookbookMainSkin$Skin52 = 	(function (_super) {
		__extends(cookbookMainSkin$Skin52, _super);
		function cookbookMainSkin$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookbookMainSkin$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookbookMainSkin$Skin52;
	})(eui.Skin);

	function cookbookMainSkin() {
		_super.call(this);
		this.skinParts = ["food_name","food_img","star_group","food_group","next_group","pre_group","material_group","havent_group","materials","step_group","scroller_group","have_group","closeBtn"];
		
		this.elementsContent = [this._Group6_i()];
	}
	var _proto = cookbookMainSkin.prototype;

	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this._Group5_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "cookbook_main_bg_jpg";
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.food_group_i(),this.next_group_i(),this.pre_group_i(),this.material_group_i(),this._Group2_i(),this.havent_group_i(),this.have_group_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cookbook_main_bg1_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 75;
		t.y = 98;
		t.elementsContent = [this._Image3_i(),this.food_name_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 99;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "share_head_bg_png";
		t.verticalCenter = 0;
		t.width = 549;
		return t;
	};
	_proto.food_name_i = function () {
		var t = new eui.Label();
		this.food_name = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "？？？";
		t.y = 17;
		return t;
	};
	_proto.food_group_i = function () {
		var t = new eui.Group();
		this.food_group = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.width = 200;
		t.y = 198;
		t.elementsContent = [this._Rect1_i(),this.food_img_i(),this.star_group_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 32;
		t.ellipseWidth = 32;
		t.fillColor = 0xfeffe3;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.food_img_i = function () {
		var t = new eui.Image();
		this.food_img = t;
		t.horizontalCenter = 0;
		t.source = "wenhao_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.star_group_i = function () {
		var t = new eui.Group();
		this.star_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 180;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 2;
		return t;
	};
	_proto.next_group_i = function () {
		var t = new eui.Group();
		this.next_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.visible = false;
		t.width = 100;
		t.x = 448;
		t.y = 198;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cookbook_next_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.pre_group_i = function () {
		var t = new eui.Group();
		this.pre_group = t;
		t.anchorOffsetX = 0;
		t.height = 200;
		t.visible = false;
		t.width = 100;
		t.x = 150;
		t.y = 198;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = -1;
		t.source = "cookbook_next_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.material_group_i = function () {
		var t = new eui.Group();
		this.material_group = t;
		t.height = 122;
		t.horizontalCenter = 0;
		t.y = 421;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 85;
		t.y = 556;
		t.elementsContent = [this._Image6_i(),this._Label1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 99;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "share_head_bg_png";
		t.verticalCenter = 0;
		t.width = 549;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "食谱";
		t.y = 16;
		return t;
	};
	_proto.havent_group_i = function () {
		var t = new eui.Group();
		this.havent_group = t;
		t.height = 440;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 580;
		t.y = 685;
		t.elementsContent = [this._Rect2_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 12;
		t.ellipseWidth = 12;
		t.fillColor = 0xfdffe2;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.53;
		t.scaleY = 0.53;
		t.source = "cookbook_main_img_png";
		t.y = 75;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cookbook_main_text_png";
		t.y = 271;
		return t;
	};
	_proto.have_group_i = function () {
		var t = new eui.Group();
		this.have_group = t;
		t.height = 440;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = 685;
		t.elementsContent = [this._Scroller1_i()];
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.viewport = this.scroller_group_i();
		return t;
	};
	_proto.scroller_group_i = function () {
		var t = new eui.Group();
		this.scroller_group = t;
		t.layout = this._VerticalLayout3_i();
		t.elementsContent = [this._Group3_i(),this.materials_i(),this._Group4_i(),this.step_group_i()];
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.paddingLeft = 34;
		t.paddingRight = 34;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 52;
		t.y = 10;
		t.elementsContent = [this._Image9_i(),this._Label2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "cookbook_step_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 38;
		t.text = "材料";
		t.textColor = 0xff8727;
		t.verticalCenter = 0;
		t.x = 26;
		return t;
	};
	_proto.materials_i = function () {
		var t = new eui.Group();
		this.materials = t;
		t.x = 62;
		t.y = 20;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 49;
		t.x = 62;
		t.y = 20;
		t.elementsContent = [this._Image10_i(),this._Label3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "cookbook_step_png";
		t.verticalCenter = 5;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.bottom = 0;
		t.size = 38;
		t.text = "烹饪步骤";
		t.textColor = 0xFF8727;
		t.x = 26;
		return t;
	};
	_proto.step_group_i = function () {
		var t = new eui.Group();
		this.step_group = t;
		t.x = 72;
		t.y = 30;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.label = "";
		t.x = 45;
		t.y = 86;
		t.skinName = cookbookMainSkin$Skin52;
		return t;
	};
	return cookbookMainSkin;
})(eui.Skin);generateEUI.paths['resource/ui/cookbook/cookbookMaterialDes.exml'] = window.cookbookMaterialDes = (function (_super) {
	__extends(cookbookMaterialDes, _super);
	function cookbookMaterialDes() {
		_super.call(this);
		this.skinParts = ["material","value"];
		
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = cookbookMaterialDes.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 56;
		t.width = 306;
		t.elementsContent = [this._Rect1_i(),this.material_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 8;
		t.ellipseWidth = 8;
		t.fillColor = 0xfeffe2;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.material_i = function () {
		var t = new eui.Label();
		this.material = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "";
		t.textColor = 0xa27b65;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 56;
		t.width = 306;
		t.x = 324;
		t.elementsContent = [this._Rect2_i(),this.value_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 8;
		t.ellipseWidth = 8;
		t.fillColor = 0xFEFFE2;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.value_i = function () {
		var t = new eui.Label();
		this.value = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "";
		t.textColor = 0xA27B65;
		t.verticalCenter = 0;
		return t;
	};
	return cookbookMaterialDes;
})(eui.Skin);generateEUI.paths['resource/ui/cookbook/cookbookMaterialItem.exml'] = window.cookCookbookMaterialItem = (function (_super) {
	__extends(cookCookbookMaterialItem, _super);
	function cookCookbookMaterialItem() {
		_super.call(this);
		this.skinParts = ["food_img"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookCookbookMaterialItem.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image1_i(),this.food_img_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "cookbook_material_bg_png";
		return t;
	};
	_proto.food_img_i = function () {
		var t = new eui.Image();
		this.food_img = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	return cookCookbookMaterialItem;
})(eui.Skin);generateEUI.paths['resource/ui/cookbook/cookbookMenuItem.exml'] = window.cookbookMenuItem = (function (_super) {
	__extends(cookbookMenuItem, _super);
	function cookbookMenuItem() {
		_super.call(this);
		this.skinParts = ["get_img","food_img","star_group","all"];
		
		this.elementsContent = [this.all_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.id"],[0],this.all,"name");
	}
	var _proto = cookbookMenuItem.prototype;

	_proto.all_i = function () {
		var t = new eui.Group();
		this.all = t;
		t.height = 122;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.width = 122;
		t.elementsContent = [this._Rect1_i(),this.get_img_i(),this.food_img_i(),this.star_group_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 32;
		t.ellipseWidth = 32;
		t.fillColor = 0xfff9ec;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.get_img_i = function () {
		var t = new eui.Image();
		this.get_img = t;
		t.right = 0;
		t.source = "cookbook_item_get_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.food_img_i = function () {
		var t = new eui.Image();
		this.food_img = t;
		t.horizontalCenter = 0;
		t.source = "wenhao_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.star_group_i = function () {
		var t = new eui.Group();
		this.star_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 85;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 2;
		return t;
	};
	return cookbookMenuItem;
})(eui.Skin);generateEUI.paths['resource/ui/cookbook/cookbookMenuSkin.exml'] = window.cookbookMenuSkin = (function (_super) {
	__extends(cookbookMenuSkin, _super);
	function cookbookMenuSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","triangle","item_container","menu_group"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookbookMenuSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.closeBtn_i(),this.triangle_i(),this.menu_group_i()];
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.triangle_i = function () {
		var t = new eui.Rect();
		this.triangle = t;
		t.ellipseHeight = 116;
		t.fillColor = 0xffe1a3;
		t.height = 40;
		t.rotation = 45;
		t.width = 40;
		t.x = 182;
		t.y = 200;
		return t;
	};
	_proto.menu_group_i = function () {
		var t = new eui.Group();
		this.menu_group = t;
		t.height = 446;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 690;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.item_container_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 45;
		t.ellipseWidth = 45;
		t.fillColor = 0xffe1a3;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.item_container_i = function () {
		var t = new eui.Group();
		this.item_container = t;
		t.bottom = 20;
		t.left = 20;
		t.right = 20;
		t.top = 20;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 10;
		t.requestedColumnCount = 5;
		t.verticalGap = 20;
		return t;
	};
	return cookbookMenuSkin;
})(eui.Skin);generateEUI.paths['resource/ui/cookbook/cookbookSelectItem.exml'] = window.cookbookSelectItem = (function (_super) {
	__extends(cookbookSelectItem, _super);
	function cookbookSelectItem() {
		_super.call(this);
		this.skinParts = ["bg","lock_img","store","num_text","all"];
		
		this.elementsContent = [this.all_i()];
	}
	var _proto = cookbookSelectItem.prototype;

	_proto.all_i = function () {
		var t = new eui.Group();
		this.all = t;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.elementsContent = [this.bg_i(),this.lock_img_i(),this.store_i(),this.num_text_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "cookbook_select_item_png";
		return t;
	};
	_proto.lock_img_i = function () {
		var t = new eui.Image();
		this.lock_img = t;
		t.bottom = 10;
		t.horizontalCenter = 0;
		t.source = "cookbook_lock_text_png";
		t.visible = false;
		return t;
	};
	_proto.store_i = function () {
		var t = new eui.Image();
		this.store = t;
		t.bottom = 57;
		t.horizontalCenter = 0;
		t.source = "";
		return t;
	};
	_proto.num_text_i = function () {
		var t = new eui.Label();
		this.num_text = t;
		t.bold = true;
		t.bottom = 10;
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "10/15";
		t.textColor = 0xc87f22;
		t.visible = false;
		return t;
	};
	return cookbookSelectItem;
})(eui.Skin);generateEUI.paths['resource/ui/cookbook/cookbookSelectSkin.exml'] = window.cookbookSelectSkin = (function (_super) {
	__extends(cookbookSelectSkin, _super);
	var cookbookSelectSkin$Skin53 = 	(function (_super) {
		__extends(cookbookSelectSkin$Skin53, _super);
		function cookbookSelectSkin$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookbookSelectSkin$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookbookSelectSkin$Skin53;
	})(eui.Skin);

	function cookbookSelectSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","header","banner1","island1","banner2","island2","banner3","island3","mainGroup"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookbookSelectSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect1_i(),this.mainGroup_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffe0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.header_i(),this.banner1_i(),this.island1_i(),this.banner2_i(),this.island2_i(),this.banner3_i(),this.island3_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 16;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.header_i = function () {
		var t = new eui.Group();
		this.header = t;
		t.height = 178;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(0,0,750,105);
		t.source = "cookbook_select_header_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 54;
		t.horizontalCenter = 0;
		t.source = "cookbook_select_name_png";
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.label = "";
		t.x = 41;
		t.y = 90;
		t.skinName = cookbookSelectSkin$Skin53;
		return t;
	};
	_proto.banner1_i = function () {
		var t = new eui.Group();
		this.banner1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 99;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "share_head_bg_png";
		t.width = 549;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "美食岛";
		t.y = 18;
		return t;
	};
	_proto.island1_i = function () {
		var t = new eui.Group();
		this.island1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 304;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 14;
		t.paddingBottom = 28;
		t.paddingLeft = 39;
		t.paddingRight = 39;
		t.paddingTop = 0;
		t.requestedColumnCount = 5;
		t.verticalGap = 14;
		return t;
	};
	_proto.banner2_i = function () {
		var t = new eui.Group();
		this.banner2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 20;
		t.y = 20;
		t.elementsContent = [this._Image4_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 99;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cookbook_lock_banner_png";
		t.width = 549;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "美食岛";
		t.visible = false;
		t.y = 18;
		return t;
	};
	_proto.island2_i = function () {
		var t = new eui.Group();
		this.island2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 10;
		t.y = 314;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 14;
		t.paddingBottom = 28;
		t.paddingLeft = 39;
		t.paddingRight = 39;
		t.paddingTop = 0;
		t.requestedColumnCount = 5;
		t.verticalGap = 14;
		return t;
	};
	_proto.banner3_i = function () {
		var t = new eui.Group();
		this.banner3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this._Image5_i(),this._Label3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 99;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cookbook_lock_banner_png";
		t.width = 549;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "美食岛";
		t.visible = false;
		t.y = 18;
		return t;
	};
	_proto.island3_i = function () {
		var t = new eui.Group();
		this.island3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 20;
		t.y = 324;
		t.layout = this._TileLayout3_i();
		return t;
	};
	_proto._TileLayout3_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 14;
		t.paddingBottom = 28;
		t.paddingLeft = 39;
		t.paddingRight = 39;
		t.paddingTop = 0;
		t.requestedColumnCount = 5;
		t.verticalGap = 14;
		return t;
	};
	return cookbookSelectSkin;
})(eui.Skin);generateEUI.paths['resource/ui/cookbook/cookbookSteps.exml'] = window.cookbookSteps = (function (_super) {
	__extends(cookbookSteps, _super);
	function cookbookSteps() {
		_super.call(this);
		this.skinParts = ["step_text","step_index"];
		
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = cookbookSteps.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 630;
		t.y = 10;
		t.elementsContent = [this._Rect1_i(),this.step_text_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 8;
		t.ellipseWidth = 8;
		t.fillColor = 0xfeffe2;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.step_text_i = function () {
		var t = new eui.Label();
		this.step_text = t;
		t.bold = true;
		t.bottom = 29;
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.size = 32;
		t.text = "";
		t.textColor = 0xa27b65;
		t.top = 57;
		t.width = 590;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 54;
		t.width = 160;
		t.x = 27;
		t.elementsContent = [this._Rect2_i(),this.step_index_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xff9939;
		t.height = 54;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		return t;
	};
	_proto.step_index_i = function () {
		var t = new eui.Label();
		this.step_index = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "步骤1";
		t.verticalCenter = 0;
		return t;
	};
	return cookbookSteps;
})(eui.Skin);generateEUI.paths['resource/ui/cookbook/getCookbookSkin.exml'] = window.cookgetCookbookSkin = (function (_super) {
	__extends(cookgetCookbookSkin, _super);
	var cookgetCookbookSkin$Skin54 = 	(function (_super) {
		__extends(cookgetCookbookSkin$Skin54, _super);
		function cookgetCookbookSkin$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookgetCookbookSkin$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookgetCookbookSkin$Skin54;
	})(eui.Skin);

	function cookgetCookbookSkin() {
		_super.call(this);
		this.skinParts = ["effect_group","closeBtn","get_text","openBtn"];
		
		this.elementsContent = [this._Group1_i(),this.closeBtn_i(),this.openBtn_i()];
	}
	var _proto = cookgetCookbookSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 586;
		t.elementsContent = [this.effect_group_i(),this._Image1_i(),this._Image2_i(),this._Label1_i(),this._cookMyButton1_i()];
		return t;
	};
	_proto.effect_group_i = function () {
		var t = new eui.Group();
		this.effect_group = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 124;
		t.horizontalCenter = 0;
		t.source = "research_restaurant_bg_png";
		t.width = 586;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cookbook_main_img_png";
		t.y = 232;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "你已获得";
		t.y = 25;
		return t;
	};
	_proto._cookMyButton1_i = function () {
		var t = new cookMyButton();
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 562;
		t.y = -28;
		t.skinName = cookgetCookbookSkin$Skin54;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Group();
		this.closeBtn = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.openBtn_i = function () {
		var t = new eui.Group();
		this.openBtn = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 320;
		t.elementsContent = [this._Image3_i(),this.get_text_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "bg_white_btn_png";
		return t;
	};
	_proto.get_text_i = function () {
		var t = new eui.Label();
		this.get_text = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 38;
		t.text = "菜谱X1 ";
		t.textColor = 0x996f39;
		t.y = 33;
		return t;
	};
	return cookgetCookbookSkin;
})(eui.Skin);generateEUI.paths['resource/ui/FlyingGift/FlyingGiftSkin.exml'] = window.cookFlyingGiftSkin = (function (_super) {
	__extends(cookFlyingGiftSkin, _super);
	var cookFlyingGiftSkin$Skin55 = 	(function (_super) {
		__extends(cookFlyingGiftSkin$Skin55, _super);
		function cookFlyingGiftSkin$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookFlyingGiftSkin$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookFlyingGiftSkin$Skin55;
	})(eui.Skin);

	var cookFlyingGiftSkin$Skin56 = 	(function (_super) {
		__extends(cookFlyingGiftSkin$Skin56, _super);
		function cookFlyingGiftSkin$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookFlyingGiftSkin$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 121;
			t.scale9Grid = new egret.Rectangle(32,32,196,36);
			t.source = "greenBtn_bg_png";
			t.width = 354;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookFlyingGiftSkin$Skin56;
	})(eui.Skin);

	var cookFlyingGiftSkin$Skin57 = 	(function (_super) {
		__extends(cookFlyingGiftSkin$Skin57, _super);
		function cookFlyingGiftSkin$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookFlyingGiftSkin$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 121;
			t.scale9Grid = new egret.Rectangle(32,32,196,36);
			t.source = "greenBtn_bg_png";
			t.width = 354;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookFlyingGiftSkin$Skin57;
	})(eui.Skin);

	var cookFlyingGiftSkin$Skin58 = 	(function (_super) {
		__extends(cookFlyingGiftSkin$Skin58, _super);
		function cookFlyingGiftSkin$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookFlyingGiftSkin$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 111;
			t.scale9Grid = new egret.Rectangle(32,32,196,36);
			t.source = "greenBtn_bg_png";
			t.width = 264;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookFlyingGiftSkin$Skin58;
	})(eui.Skin);

	var cookFlyingGiftSkin$Skin59 = 	(function (_super) {
		__extends(cookFlyingGiftSkin$Skin59, _super);
		function cookFlyingGiftSkin$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookFlyingGiftSkin$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 105;
			t.scale9Grid = new egret.Rectangle(20,24,120,21);
			t.source = "yellow_btn_png";
			t.width = 215;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookFlyingGiftSkin$Skin59;
	})(eui.Skin);

	function cookFlyingGiftSkin() {
		_super.call(this);
		this.skinParts = ["banner","title","tip","type_img","type_text","closeBtn","coinBtn","coin_img","coin_text","coin_group","cashBtn","cash_type","cash_group","other_freeBtn","other_type","other_free","other_cashBtn","other_text","other_cash","other_group"];
		
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = cookFlyingGiftSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.banner_i(),this.title_i(),this.tip_i(),this._Group1_i(),this.closeBtn_i(),this.coin_group_i(),this.cash_group_i(),this.other_group_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 788;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(70,285,420,11);
		t.source = "flyinggift_bg_png";
		t.y = 124;
		return t;
	};
	_proto.banner_i = function () {
		var t = new eui.Image();
		this.banner = t;
		t.source = "flyinggift_prop1_png";
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 56;
		t.stroke = 2;
		t.strokeColor = 0xaa0000;
		t.text = "5倍奖励!";
		t.textColor = 0xfff027;
		t.y = 370;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Label();
		this.tip = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "观看视频或花费超级现金获得";
		t.textColor = 0x9e7d47;
		t.y = 477;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 152;
		t.horizontalCenter = 0;
		t.width = 476;
		t.y = 518;
		t.elementsContent = [this._Rect1_i(),this.type_img_i(),this.type_text_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 24;
		t.ellipseWidth = 24;
		t.fillColor = 0xeae3ce;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.type_img_i = function () {
		var t = new eui.Image();
		this.type_img = t;
		t.right = 356;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "chest_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.type_text_i = function () {
		var t = new eui.Label();
		this.type_text = t;
		t.bold = true;
		t.size = 40;
		t.text = "5分钟4倍收入";
		t.textColor = 0x8f7f62;
		t.verticalCenter = 0;
		t.width = 309;
		t.x = 134;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.label = "";
		t.x = 607;
		t.y = 128;
		t.skinName = cookFlyingGiftSkin$Skin55;
		return t;
	};
	_proto.coin_group_i = function () {
		var t = new eui.Group();
		this.coin_group = t;
		t.anchorOffsetX = 177;
		t.anchorOffsetY = 60;
		t.height = 121;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 354;
		t.x = 356;
		t.y = 798;
		t.elementsContent = [this.coinBtn_i(),this.coin_img_i(),this.coin_text_i()];
		return t;
	};
	_proto.coinBtn_i = function () {
		var t = new cookMyButton();
		this.coinBtn = t;
		t.anchorOffsetX = 177;
		t.anchorOffsetY = 60;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = cookFlyingGiftSkin$Skin56;
		return t;
	};
	_proto.coin_img_i = function () {
		var t = new eui.Image();
		this.coin_img = t;
		t.height = 88;
		t.source = "coin1_png";
		t.touchEnabled = false;
		t.width = 83;
		t.x = 43;
		t.y = 12;
		return t;
	};
	_proto.coin_text_i = function () {
		var t = new eui.Label();
		this.coin_text = t;
		t.size = 44;
		t.stroke = 3;
		t.strokeColor = 0x508a02;
		t.text = "";
		t.x = 149;
		t.y = 31;
		return t;
	};
	_proto.cash_group_i = function () {
		var t = new eui.Group();
		this.cash_group = t;
		t.anchorOffsetX = 177;
		t.anchorOffsetY = 60;
		t.height = 121;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 354;
		t.x = 356;
		t.y = 798;
		t.elementsContent = [this.cashBtn_i(),this._Image2_i(),this.cash_type_i()];
		return t;
	};
	_proto.cashBtn_i = function () {
		var t = new cookMyButton();
		this.cashBtn = t;
		t.anchorOffsetX = 177;
		t.anchorOffsetY = 60;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = cookFlyingGiftSkin$Skin57;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "free_text_png";
		t.touchEnabled = false;
		t.x = 170;
		t.y = 30;
		return t;
	};
	_proto.cash_type_i = function () {
		var t = new eui.Image();
		this.cash_type = t;
		t.source = "shareIcon1_png";
		t.touchEnabled = false;
		t.x = 85;
		t.y = 32;
		return t;
	};
	_proto.other_group_i = function () {
		var t = new eui.Group();
		this.other_group = t;
		t.height = 111;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 499;
		t.y = 738;
		t.elementsContent = [this.other_free_i(),this.other_cash_i()];
		return t;
	};
	_proto.other_free_i = function () {
		var t = new eui.Group();
		this.other_free = t;
		t.height = 111;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 264;
		t.elementsContent = [this.other_freeBtn_i(),this._Image3_i(),this.other_type_i()];
		return t;
	};
	_proto.other_freeBtn_i = function () {
		var t = new cookMyButton();
		this.other_freeBtn = t;
		t.anchorOffsetX = 132;
		t.anchorOffsetY = 55;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = cookFlyingGiftSkin$Skin58;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "free_text_png";
		t.touchEnabled = false;
		t.x = 120;
		t.y = 28;
		return t;
	};
	_proto.other_type_i = function () {
		var t = new eui.Image();
		this.other_type = t;
		t.source = "shareIcon1_png";
		t.touchEnabled = false;
		t.x = 49;
		t.y = 28;
		return t;
	};
	_proto.other_cash_i = function () {
		var t = new eui.Group();
		this.other_cash = t;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 215;
		t.x = 284;
		t.elementsContent = [this.other_cashBtn_i(),this._Image4_i(),this.other_text_i()];
		return t;
	};
	_proto.other_cashBtn_i = function () {
		var t = new cookMyButton();
		this.other_cashBtn = t;
		t.anchorOffsetX = 107;
		t.anchorOffsetY = 52;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = cookFlyingGiftSkin$Skin59;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "cash_png";
		t.touchEnabled = false;
		t.x = 31;
		t.y = 24;
		return t;
	};
	_proto.other_text_i = function () {
		var t = new eui.Label();
		this.other_text = t;
		t.size = 44;
		t.stroke = 2;
		t.strokeColor = 0xbc8000;
		t.text = "20";
		t.touchEnabled = false;
		t.x = 116;
		t.y = 25;
		return t;
	};
	return cookFlyingGiftSkin;
})(eui.Skin);generateEUI.paths['resource/ui/FreeUpgradeSkin.exml'] = window.cookFreeUpgradeSkin = (function (_super) {
	__extends(cookFreeUpgradeSkin, _super);
	var cookFreeUpgradeSkin$Skin60 = 	(function (_super) {
		__extends(cookFreeUpgradeSkin$Skin60, _super);
		function cookFreeUpgradeSkin$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookFreeUpgradeSkin$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookFreeUpgradeSkin$Skin60;
	})(eui.Skin);

	var cookFreeUpgradeSkin$Skin61 = 	(function (_super) {
		__extends(cookFreeUpgradeSkin$Skin61, _super);
		function cookFreeUpgradeSkin$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookFreeUpgradeSkin$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 111;
			t.scale9Grid = new egret.Rectangle(32,32,196,36);
			t.source = "greenBtn_bg_png";
			t.width = 264;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookFreeUpgradeSkin$Skin61;
	})(eui.Skin);

	var cookFreeUpgradeSkin$Skin62 = 	(function (_super) {
		__extends(cookFreeUpgradeSkin$Skin62, _super);
		function cookFreeUpgradeSkin$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookFreeUpgradeSkin$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 105;
			t.scale9Grid = new egret.Rectangle(20,24,120,21);
			t.source = "yellow_btn_png";
			t.width = 215;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookFreeUpgradeSkin$Skin62;
	})(eui.Skin);

	function cookFreeUpgradeSkin() {
		_super.call(this);
		this.skinParts = ["banner","tip","imgIconBefore","imgIconAfter","type_img0","type_img2","lbLevelBenfore","lbLevelAfter","closeBtn","other_freeBtn","other_type","other_free","other_cashBtn","other_text","other_cash","other_group"];
		
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = cookFreeUpgradeSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.banner_i(),this.tip_i(),this._Group1_i(),this.closeBtn_i(),this.other_group_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 788;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(70,285,420,11);
		t.source = "flyinggift_bg_png";
		t.y = 124;
		return t;
	};
	_proto.banner_i = function () {
		var t = new eui.Image();
		this.banner = t;
		t.source = "free_upgrade_banner_png";
		t.y = 137;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Label();
		this.tip = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "观看视频或花费超级现金获得";
		t.textColor = 0x9e7d47;
		t.y = 477;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 152;
		t.horizontalCenter = 0;
		t.width = 476;
		t.y = 518;
		t.elementsContent = [this._Rect1_i(),this.imgIconBefore_i(),this.imgIconAfter_i(),this.type_img0_i(),this.type_img2_i(),this.lbLevelBenfore_i(),this.lbLevelAfter_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 24;
		t.ellipseWidth = 24;
		t.fillColor = 0xeae3ce;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.imgIconBefore_i = function () {
		var t = new eui.Image();
		this.imgIconBefore = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "waiter_head_png";
		t.top = 6;
		t.x = 45;
		return t;
	};
	_proto.imgIconAfter_i = function () {
		var t = new eui.Image();
		this.imgIconAfter = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "waiter_head_png";
		t.top = 1;
		t.x = 311.99;
		return t;
	};
	_proto.type_img0_i = function () {
		var t = new eui.Image();
		this.type_img0 = t;
		t.right = 203;
		t.source = "free_upgrade_icon_png";
		t.verticalCenter = -14;
		return t;
	};
	_proto.type_img2_i = function () {
		var t = new eui.Image();
		this.type_img2 = t;
		t.right = 41;
		t.source = "free_upgrade_lv_png";
		t.verticalCenter = 54;
		return t;
	};
	_proto.lbLevelBenfore_i = function () {
		var t = new eui.Label();
		this.lbLevelBenfore = t;
		t.bold = true;
		t.horizontalCenter = -144.5;
		t.size = 30;
		t.text = "等级64";
		t.textColor = 0x8f7f62;
		t.verticalCenter = 52;
		return t;
	};
	_proto.lbLevelAfter_i = function () {
		var t = new eui.Label();
		this.lbLevelAfter = t;
		t.bold = true;
		t.horizontalCenter = 128;
		t.size = 28;
		t.text = "64121122";
		t.textColor = 0xffffff;
		t.verticalCenter = 52;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.label = "";
		t.x = 607;
		t.y = 128;
		t.skinName = cookFreeUpgradeSkin$Skin60;
		return t;
	};
	_proto.other_group_i = function () {
		var t = new eui.Group();
		this.other_group = t;
		t.horizontalCenter = 0;
		t.y = 738;
		t.elementsContent = [this.other_free_i(),this.other_cash_i()];
		return t;
	};
	_proto.other_free_i = function () {
		var t = new eui.Group();
		this.other_free = t;
		t.height = 111;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 264;
		t.elementsContent = [this.other_freeBtn_i(),this._Image2_i(),this.other_type_i()];
		return t;
	};
	_proto.other_freeBtn_i = function () {
		var t = new cookMyButton();
		this.other_freeBtn = t;
		t.anchorOffsetX = 132;
		t.anchorOffsetY = 55;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = cookFreeUpgradeSkin$Skin61;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "free_text_png";
		t.touchEnabled = false;
		t.x = 120;
		t.y = 28;
		return t;
	};
	_proto.other_type_i = function () {
		var t = new eui.Image();
		this.other_type = t;
		t.source = "shareIcon1_png";
		t.touchEnabled = false;
		t.x = 49;
		t.y = 28;
		return t;
	};
	_proto.other_cash_i = function () {
		var t = new eui.Group();
		this.other_cash = t;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 215;
		t.x = 284;
		t.elementsContent = [this.other_cashBtn_i(),this._Image3_i(),this.other_text_i()];
		return t;
	};
	_proto.other_cashBtn_i = function () {
		var t = new cookMyButton();
		this.other_cashBtn = t;
		t.anchorOffsetX = 107;
		t.anchorOffsetY = 52;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = cookFreeUpgradeSkin$Skin62;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "cash_png";
		t.touchEnabled = false;
		t.x = 31;
		t.y = 24;
		return t;
	};
	_proto.other_text_i = function () {
		var t = new eui.Label();
		this.other_text = t;
		t.size = 44;
		t.stroke = 2;
		t.strokeColor = 0xbc8000;
		t.text = "20";
		t.touchEnabled = false;
		t.x = 116;
		t.y = 25;
		return t;
	};
	return cookFreeUpgradeSkin;
})(eui.Skin);generateEUI.paths['resource/ui/guide/GuideMainUIIdleSkin.exml'] = window.cookGuideMainUISkin = (function (_super) {
	__extends(cookGuideMainUISkin, _super);
	function cookGuideMainUISkin() {
		_super.call(this);
		this.skinParts = ["gpMask","gpRoot"];
		
		this.height = 1344;
		this.width = 750;
		this.elementsContent = [this.gpMask_i(),this.gpRoot_i()];
	}
	var _proto = cookGuideMainUISkin.prototype;

	_proto.gpMask_i = function () {
		var t = new eui.Group();
		this.gpMask = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		t.visible = false;
		return t;
	};
	_proto.gpRoot_i = function () {
		var t = new eui.Group();
		this.gpRoot = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scrollEnabled = false;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		return t;
	};
	return cookGuideMainUISkin;
})(eui.Skin);generateEUI.paths['resource/ui/guide/GuideMainUISkin.exml'] = window.cookGuideMainUISkin = (function (_super) {
	__extends(cookGuideMainUISkin, _super);
	function cookGuideMainUISkin() {
		_super.call(this);
		this.skinParts = ["imgHeading","gpMask","gpHollow","rUp","gpUpper","gpDown","gpLeft","gpRight","imgFrame","imgPeople","imgText","gpNoTip","imgBtn","gpOneStep","finger","imgSkip","gpRoot"];
		
		this.height = 1344;
		this.width = 750;
		this.elementsContent = [this.gpMask_i(),this.gpRoot_i()];
	}
	var _proto = cookGuideMainUISkin.prototype;

	_proto.gpMask_i = function () {
		var t = new eui.Group();
		this.gpMask = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		t.elementsContent = [this.imgHeading_i()];
		return t;
	};
	_proto.imgHeading_i = function () {
		var t = new eui.Image();
		this.imgHeading = t;
		t.bottom = 200;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "guide_4_head_png";
		return t;
	};
	_proto.gpRoot_i = function () {
		var t = new eui.Group();
		this.gpRoot = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scrollEnabled = false;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.elementsContent = [this.gpHollow_i(),this.gpUpper_i(),this.gpDown_i(),this.gpLeft_i(),this.gpRight_i(),this.gpNoTip_i(),this.gpOneStep_i(),this.finger_i(),this.imgSkip_i()];
		return t;
	};
	_proto.gpHollow_i = function () {
		var t = new eui.Group();
		this.gpHollow = t;
		t.touchEnabled = false;
		return t;
	};
	_proto.gpUpper_i = function () {
		var t = new eui.Group();
		this.gpUpper = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scrollEnabled = false;
		t.top = 0;
		t.touchEnabled = true;
		t.elementsContent = [this.rUp_i()];
		return t;
	};
	_proto.rUp_i = function () {
		var t = new eui.Rect();
		this.rUp = t;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gpDown_i = function () {
		var t = new eui.Group();
		this.gpDown = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scrollEnabled = false;
		t.top = 1311;
		t.touchEnabled = true;
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.x = 0;
		return t;
	};
	_proto.gpLeft_i = function () {
		var t = new eui.Group();
		this.gpLeft = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 500;
		t.scrollEnabled = false;
		t.top = 0;
		t.touchEnabled = true;
		t.elementsContent = [this._Rect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gpRight_i = function () {
		var t = new eui.Group();
		this.gpRight = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 587;
		t.right = 0;
		t.scrollEnabled = false;
		t.top = 0;
		t.touchEnabled = true;
		t.elementsContent = [this._Rect3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.gpNoTip_i = function () {
		var t = new eui.Group();
		this.gpNoTip = t;
		t.anchorOffsetX = 0;
		t.touchEnabled = false;
		t.width = 607;
		t.x = 2;
		t.elementsContent = [this.imgFrame_i(),this.imgPeople_i(),this.imgText_i()];
		return t;
	};
	_proto.imgFrame_i = function () {
		var t = new eui.Image();
		this.imgFrame = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "s_bg_png";
		t.touchEnabled = false;
		t.x = -16;
		t.y = -24;
		return t;
	};
	_proto.imgPeople_i = function () {
		var t = new eui.Image();
		this.imgPeople = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "s_boss_png";
		t.touchEnabled = false;
		t.x = 502;
		t.y = -222;
		return t;
	};
	_proto.imgText_i = function () {
		var t = new eui.Image();
		this.imgText = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guide_1_s_png";
		t.touchEnabled = false;
		return t;
	};
	_proto.gpOneStep_i = function () {
		var t = new eui.Group();
		this.gpOneStep = t;
		t.anchorOffsetX = 312;
		t.anchorOffsetY = 455;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		t.visible = false;
		t.elementsContent = [this._Image1_i(),this.imgBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "testament_png";
		t.touchEnabled = false;
		t.y = 217;
		return t;
	};
	_proto.imgBtn_i = function () {
		var t = new eui.Image();
		this.imgBtn = t;
		t.anchorOffsetX = 162;
		t.anchorOffsetY = 55;
		t.horizontalCenter = -2.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "testament_btn_png";
		t.touchEnabled = true;
		t.y = 1005.38;
		return t;
	};
	_proto.finger_i = function () {
		var t = new eui.Image();
		this.finger = t;
		t.anchorOffsetX = 42;
		t.anchorOffsetY = 56;
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.source = "finger_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 74;
		t.y = 266.61;
		return t;
	};
	_proto.imgSkip_i = function () {
		var t = new eui.Image();
		this.imgSkip = t;
		t.source = "skip_guide_png";
		t.touchEnabled = true;
		t.visible = false;
		t.x = 248.72;
		t.y = 74.76;
		return t;
	};
	return cookGuideMainUISkin;
})(eui.Skin);generateEUI.paths['resource/ui/HeadTopSkillSkin.exml'] = window.cookHeadTopSkillSkin = (function (_super) {
	__extends(cookHeadTopSkillSkin, _super);
	function cookHeadTopSkillSkin() {
		_super.call(this);
		this.skinParts = ["imgSkill","gpSkillBtn","lbSkillCd","gpSkillCd","lbSkilling","gpSkilling","gpAll"];
		
		this.elementsContent = [this.gpAll_i()];
	}
	var _proto = cookHeadTopSkillSkin.prototype;

	_proto.gpAll_i = function () {
		var t = new eui.Group();
		this.gpAll = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 31;
		t.height = 62;
		t.width = 108;
		t.x = 54;
		t.y = 31;
		t.elementsContent = [this.gpSkillBtn_i(),this.gpSkillCd_i(),this.gpSkilling_i()];
		return t;
	};
	_proto.gpSkillBtn_i = function () {
		var t = new eui.Group();
		this.gpSkillBtn = t;
		t.horizontalCenter = 0;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this.imgSkill_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 20;
		t.fillAlpha = 0.5;
		t.height = 62;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 62;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 49;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skill_bg_selected_png";
		t.verticalCenter = 0;
		t.width = 47;
		return t;
	};
	_proto.imgSkill_i = function () {
		var t = new eui.Image();
		this.imgSkill = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.58;
		t.scaleY = 0.58;
		t.source = "skill01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gpSkillCd_i = function () {
		var t = new eui.Group();
		this.gpSkillCd = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this.lbSkillCd_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "countdown_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbSkillCd_i = function () {
		var t = new eui.BitmapLabel();
		this.lbSkillCd = t;
		t.alpha = 0.7;
		t.font = "commonText_fnt";
		t.horizontalCenter = 0;
		t.text = "0分56秒";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gpSkilling_i = function () {
		var t = new eui.Group();
		this.gpSkilling = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image3_i(),this.lbSkilling_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "countdown_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbSkilling_i = function () {
		var t = new eui.BitmapLabel();
		this.lbSkilling = t;
		t.font = "commonText_fnt";
		t.horizontalCenter = 0;
		t.text = "0分56秒";
		t.verticalCenter = 0;
		return t;
	};
	return cookHeadTopSkillSkin;
})(eui.Skin);generateEUI.paths['resource/ui/hire/HireItemSkin.exml'] = window.cookHreItemSkin = (function (_super) {
	__extends(cookHreItemSkin, _super);
	var cookHreItemSkin$Skin63 = 	(function (_super) {
		__extends(cookHreItemSkin$Skin63, _super);
		function cookHreItemSkin$Skin63() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookHreItemSkin$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hire_assign_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookHreItemSkin$Skin63;
	})(eui.Skin);

	var cookHreItemSkin$Skin64 = 	(function (_super) {
		__extends(cookHreItemSkin$Skin64, _super);
		function cookHreItemSkin$Skin64() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookHreItemSkin$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hire_unassign_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookHreItemSkin$Skin64;
	})(eui.Skin);

	function cookHreItemSkin() {
		_super.call(this);
		this.skinParts = ["imgHead","imgSkillIcon","skill_group","lbName","lbLevel","lbTimer","lbDes","lbEffect","assign_btn","unassign_btn"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookHreItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 262;
		t.width = 690;
		t.elementsContent = [this.imgHead_i(),this._Rect1_i(),this.skill_group_i(),this.lbName_i(),this.lbLevel_i(),this.lbTimer_i(),this.lbDes_i(),this.lbEffect_i(),this.assign_btn_i(),this.unassign_btn_i()];
		return t;
	};
	_proto.imgHead_i = function () {
		var t = new eui.Image();
		this.imgHead = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cooker_m_02_png";
		t.verticalCenter = 0;
		t.x = 15;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 38;
		t.fillColor = 0xfb9425;
		t.height = 38;
		t.width = 128;
		t.x = 244;
		t.y = 86;
		return t;
	};
	_proto.skill_group_i = function () {
		var t = new eui.Group();
		this.skill_group = t;
		t.x = 240;
		t.y = 134;
		t.elementsContent = [this._Image1_i(),this.imgSkillIcon_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skill_bg_selected_png";
		return t;
	};
	_proto.imgSkillIcon_i = function () {
		var t = new eui.Image();
		this.imgSkillIcon = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.x = -75;
		t.y = -122;
		return t;
	};
	_proto.lbName_i = function () {
		var t = new eui.Label();
		this.lbName = t;
		t.size = 36;
		t.text = "经理名称";
		t.textColor = 0x673f00;
		t.x = 239;
		t.y = 36;
		return t;
	};
	_proto.lbLevel_i = function () {
		var t = new eui.Label();
		this.lbLevel = t;
		t.bold = true;
		t.height = 38;
		t.size = 28;
		t.text = "超级经理";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 128;
		t.x = 244;
		t.y = 86;
		return t;
	};
	_proto.lbTimer_i = function () {
		var t = new eui.Label();
		this.lbTimer = t;
		t.bottom = 39;
		t.size = 28;
		t.text = "00:00";
		t.textColor = 0xa56500;
		t.visible = false;
		t.x = 338;
		return t;
	};
	_proto.lbDes_i = function () {
		var t = new eui.Label();
		this.lbDes = t;
		t.bottom = 76;
		t.size = 28;
		t.text = "1分25秒";
		t.textColor = 0xa56500;
		t.x = 334;
		return t;
	};
	_proto.lbEffect_i = function () {
		var t = new eui.Label();
		this.lbEffect = t;
		t.bottom = 39;
		t.size = 28;
		t.text = "2.5移动速度";
		t.textColor = 0xa56500;
		t.x = 334;
		return t;
	};
	_proto.assign_btn_i = function () {
		var t = new cookMyButton();
		this.assign_btn = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 40.5;
		t.label = "";
		t.x = 571;
		t.y = 81.5;
		t.skinName = cookHreItemSkin$Skin63;
		return t;
	};
	_proto.unassign_btn_i = function () {
		var t = new cookMyButton();
		this.unassign_btn = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 40.5;
		t.label = "";
		t.visible = false;
		t.x = 571;
		t.y = 81.5;
		t.skinName = cookHreItemSkin$Skin64;
		return t;
	};
	return cookHreItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/hire/HireMainSkin.exml'] = window.cookHireMainSkin = (function (_super) {
	__extends(cookHireMainSkin, _super);
	var cookHireMainSkin$Skin65 = 	(function (_super) {
		__extends(cookHireMainSkin$Skin65, _super);
		function cookHireMainSkin$Skin65() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Image4_i()];
			this.states = [
				new eui.State ("Chef",
					[
						new eui.SetProperty("_Image3","source","free_hire_chef_text_png")
					])
				,
				new eui.State ("Waiter",
					[
						new eui.SetProperty("_Image3","source","free_hire_manager_text_png")
					])
				,
				new eui.State ("Courier",
					[
						new eui.SetProperty("_Image3","source","free_hire_manager_text_png")
					])
			];
		}
		var _proto = cookHireMainSkin$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.minHeight = 120;
			t.minWidth = 320;
			t.scale9Grid = new egret.Rectangle(129,54,2,2);
			t.source = "greenBtn_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.horizontalCenter = 0;
			t.verticalCenter = -5;
			t.layout = this._HorizontalLayout1_i();
			t.elementsContent = [this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._HorizontalLayout1_i = function () {
			var t = new eui.HorizontalLayout();
			t.gap = 8;
			t.verticalAlign = "middle";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.9;
			t.scaleY = 0.9;
			t.source = "playIcon1_png";
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			return t;
		};
		_proto._Image4_i = function () {
			var t = new eui.Image();
			t.right = 13;
			t.source = "auto_work_label_png";
			t.top = 0;
			return t;
		};
		return cookHireMainSkin$Skin65;
	})(eui.Skin);

	var cookHireMainSkin$Skin66 = 	(function (_super) {
		__extends(cookHireMainSkin$Skin66, _super);
		function cookHireMainSkin$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i()];
			this.states = [
				new eui.State ("Chef",
					[
						new eui.SetProperty("_Image2","source","hire_super_chef_text_png")
					])
				,
				new eui.State ("Waiter",
					[
						new eui.SetProperty("_Image2","source","hire_super_manager_text_png")
					])
				,
				new eui.State ("Courier",
					[
						new eui.SetProperty("_Image2","source","hire_super_manager_text_png")
					])
			];
		}
		var _proto = cookHireMainSkin$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.minHeight = 120;
			t.minWidth = 320;
			t.scale9Grid = new egret.Rectangle(83,33,1,1);
			t.source = "yellow_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.horizontalCenter = 0;
			t.scaleX = 0.85;
			t.scaleY = 0.85;
			t.top = 21;
			return t;
		};
		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.bottom = 25;
			t.horizontalCenter = 0;
			t.elementsContent = [this._Image3_i(),this.labelDisplay_i()];
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.left = 0;
			t.scaleX = 0.8;
			t.scaleY = 0.8;
			t.source = "cash_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.BitmapLabel();
			this.labelDisplay = t;
			t.font = "yellowBtnText_fnt";
			t.left = 52;
			t.letterSpacing = -9;
			t.text = "2,345";
			t.verticalCenter = 0;
			return t;
		};
		return cookHireMainSkin$Skin66;
	})(eui.Skin);

	var cookHireMainSkin$Skin67 = 	(function (_super) {
		__extends(cookHireMainSkin$Skin67, _super);
		function cookHireMainSkin$Skin67() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookHireMainSkin$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_research_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookHireMainSkin$Skin67;
	})(eui.Skin);

	function cookHireMainSkin() {
		_super.call(this);
		this.skinParts = ["gpAlreadyPos","lbName","lbAlready","lbNo","gp_waiterIn","list","btnHire","btnSuperHire","close_btn","ldGuideRect","gpAll"];
		
		this.elementsContent = [this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.coin"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.cost"],[0],this._Label3,"text");
	}
	var _proto = cookHireMainSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.gpAll_i()];
		return t;
	};
	_proto.gpAll_i = function () {
		var t = new eui.Group();
		this.gpAll = t;
		t.height = 1334;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this._Rect7_i(),this._Rect8_i(),this.gpAlreadyPos_i(),this.lbName_i(),this.lbAlready_i(),this.lbNo_i(),this.gp_waiterIn_i(),this._Scroller1_i(),this._Group1_i(),this.btnHire_i(),this.btnSuperHire_i(),this._Label3_i(),this.close_btn_i(),this.ldGuideRect_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 700;
		t.fillColor = 0xffc945;
		t.height = 700;
		t.horizontalCenter = 0;
		t.width = 700;
		t.y = 48;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.ellipseWidth = 40;
		t.fillColor = 0xffc945;
		t.height = 1029.18;
		t.horizontalCenter = 0;
		t.width = 750;
		t.y = 143;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 40;
		t.fillColor = 0xffedc1;
		t.height = 78;
		t.horizontalCenter = 0;
		t.width = 690;
		t.y = 196;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFEDC1;
		t.height = 38;
		t.horizontalCenter = 0;
		t.width = 690;
		t.y = 236;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf5f4e2;
		t.height = 262;
		t.horizontalCenter = 0;
		t.width = 690;
		t.y = 276;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffc945;
		t.height = 70;
		t.horizontalCenter = 0;
		t.width = 690;
		t.y = 538;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xF5F4E2;
		t.height = 262;
		t.horizontalCenter = 0;
		t.width = 690;
		t.y = 608;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xF5F4E2;
		t.height = 262;
		t.horizontalCenter = 0;
		t.width = 690;
		t.y = 870;
		return t;
	};
	_proto.gpAlreadyPos_i = function () {
		var t = new eui.Group();
		this.gpAlreadyPos = t;
		t.x = 375;
		t.y = 275;
		return t;
	};
	_proto.lbName_i = function () {
		var t = new eui.Label();
		this.lbName = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "厨师";
		t.textColor = 0x8b4800;
		t.y = 99;
		return t;
	};
	_proto.lbAlready_i = function () {
		var t = new eui.Label();
		this.lbAlready = t;
		t.bold = true;
		t.size = 40;
		t.text = "已经指派经理:";
		t.textColor = 0xb68100;
		t.x = 55;
		t.y = 216;
		return t;
	};
	_proto.lbNo_i = function () {
		var t = new eui.Label();
		this.lbNo = t;
		t.bold = true;
		t.size = 40;
		t.text = "未分配经理:";
		t.textColor = 0xab5900;
		t.x = 55;
		t.y = 559;
		return t;
	};
	_proto.gp_waiterIn_i = function () {
		var t = new eui.Group();
		this.gp_waiterIn = t;
		t.height = 0;
		t.width = 0;
		t.x = 68.77;
		t.y = 184.94;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 524.33;
		t.horizontalCenter = 1;
		t.width = 690;
		t.y = 608;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.Group();
		this.list = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.width = 369;
		t.x = 35;
		t.y = 1245;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Image1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x298000;
		t.text = "当前拥有:";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x298000;
		t.verticalCenter = 0;
		t.x = 222;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.source = "icon_home_coin_png";
		t.verticalCenter = 0.5;
		t.width = 35;
		t.x = 176.96;
		return t;
	};
	_proto.btnHire_i = function () {
		var t = new cookMyButton();
		this.btnHire = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 62;
		t.currentState = "Chef";
		t.height = 125;
		t.label = "";
		t.width = 320;
		t.x = 550;
		t.y = 1258;
		t.skinName = cookHireMainSkin$Skin65;
		return t;
	};
	_proto.btnSuperHire_i = function () {
		var t = new cookMyButton();
		this.btnSuperHire = t;
		t.bottom = 13;
		t.currentState = "Waiter";
		t.height = 125;
		t.label = "120";
		t.left = 40;
		t.width = 320;
		t.skinName = cookHireMainSkin$Skin66;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x298000;
		t.touchEnabled = false;
		t.visible = false;
		t.x = 600;
		t.y = 1234;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new cookMyButton();
		this.close_btn = t;
		t.anchorOffsetX = 36.5;
		t.anchorOffsetY = 40;
		t.label = "";
		t.x = 66.5;
		t.y = 142;
		t.skinName = cookHireMainSkin$Skin67;
		return t;
	};
	_proto.ldGuideRect_i = function () {
		var t = new eui.Rect();
		this.ldGuideRect = t;
		t.fillAlpha = 0;
		t.height = 133;
		t.touchEnabled = false;
		t.width = 319;
		t.x = 415;
		t.y = 1246.51;
		return t;
	};
	return cookHireMainSkin;
})(eui.Skin);generateEUI.paths['resource/ui/hire/HireRewardItemSkin.exml'] = window.cookHireRewardItemSkin = (function (_super) {
	__extends(cookHireRewardItemSkin, _super);
	function cookHireRewardItemSkin() {
		_super.call(this);
		this.skinParts = ["imgHead","imgSkillIcon","skill_group","lbName","lbLevel","lbTimer","lbDes","lbEffect"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookHireRewardItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 212;
		t.width = 496;
		t.elementsContent = [this.imgHead_i(),this._Rect1_i(),this.skill_group_i(),this.lbName_i(),this.lbLevel_i(),this.lbTimer_i(),this.lbDes_i(),this.lbEffect_i()];
		return t;
	};
	_proto.imgHead_i = function () {
		var t = new eui.Image();
		this.imgHead = t;
		t.left = 0;
		t.source = "cooker_m_02_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 38;
		t.fillColor = 0xfb9425;
		t.height = 38;
		t.left = 235;
		t.top = 56;
		t.width = 128;
		return t;
	};
	_proto.skill_group_i = function () {
		var t = new eui.Group();
		this.skill_group = t;
		t.left = 235;
		t.top = 104;
		t.elementsContent = [this._Image1_i(),this.imgSkillIcon_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skill_bg_selected_png";
		return t;
	};
	_proto.imgSkillIcon_i = function () {
		var t = new eui.Image();
		this.imgSkillIcon = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.x = -75;
		t.y = -122;
		return t;
	};
	_proto.lbName_i = function () {
		var t = new eui.Label();
		this.lbName = t;
		t.left = 235;
		t.size = 36;
		t.text = "经理名称";
		t.textColor = 0x673f00;
		t.top = 11;
		return t;
	};
	_proto.lbLevel_i = function () {
		var t = new eui.Label();
		this.lbLevel = t;
		t.bold = true;
		t.height = 38;
		t.left = 235;
		t.size = 28;
		t.text = "超级经理";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.top = 56;
		t.verticalAlign = "middle";
		t.width = 128;
		return t;
	};
	_proto.lbTimer_i = function () {
		var t = new eui.Label();
		this.lbTimer = t;
		t.bottom = 39;
		t.size = 28;
		t.text = "00:00";
		t.textColor = 0xa56500;
		t.visible = false;
		t.x = 338;
		return t;
	};
	_proto.lbDes_i = function () {
		var t = new eui.Label();
		this.lbDes = t;
		t.bottom = 76;
		t.size = 24;
		t.text = "1分25秒";
		t.textColor = 0xa56500;
		t.x = 334;
		return t;
	};
	_proto.lbEffect_i = function () {
		var t = new eui.Label();
		this.lbEffect = t;
		t.bottom = 39;
		t.size = 24;
		t.text = "2.5移动速度";
		t.textColor = 0xa56500;
		t.x = 334;
		return t;
	};
	return cookHireRewardItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/hire/HireRewardSkin.exml'] = window.cookHireRewardSkin = (function (_super) {
	__extends(cookHireRewardSkin, _super);
	var cookHireRewardSkin$Skin68 = 	(function (_super) {
		__extends(cookHireRewardSkin$Skin68, _super);
		function cookHireRewardSkin$Skin68() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("adventure",
					[
					])
			];
		}
		var _proto = cookHireRewardSkin$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(82,32,2,2);
			t.source = "grey_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "cancel_text_png";
			t.verticalCenter = 0;
			return t;
		};
		return cookHireRewardSkin$Skin68;
	})(eui.Skin);

	var cookHireRewardSkin$Skin69 = 	(function (_super) {
		__extends(cookHireRewardSkin$Skin69, _super);
		function cookHireRewardSkin$Skin69() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookHireRewardSkin$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(124,54,4,5);
			t.source = "greenBtn_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "sure_text_png";
			t.verticalCenter = 0;
			return t;
		};
		return cookHireRewardSkin$Skin69;
	})(eui.Skin);

	function cookHireRewardSkin() {
		_super.call(this);
		this.skinParts = ["tips","list","closeBtn","shareBtn","container","allGroup"];
		
		this.elementsContent = [this.allGroup_i()];
	}
	var _proto = cookHireRewardSkin.prototype;

	_proto.allGroup_i = function () {
		var t = new eui.Group();
		this.allGroup = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.container_i()];
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.height = 882;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 652;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Label1_i(),this.tips_i(),this._Scroller1_i(),this.closeBtn_i(),this.shareBtn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 39;
		t.ellipseWidth = 53;
		t.fillColor = 0xf6f6e6;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "share_success_head_png";
		t.y = -182;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "雇佣成功";
		t.top = -10;
		return t;
	};
	_proto.tips_i = function () {
		var t = new eui.Label();
		this.tips = t;
		t.bottom = 197;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "进群点群链接可获得一个经理";
		t.textColor = 0x715527;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 483;
		t.horizontalCenter = 0;
		t.top = 130;
		t.width = 496;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRenderer = view.cookHireRewardItem;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 55;
		t.height = 110;
		t.skinName = "cookMyButtonSkin";
		t.width = 240;
		t.x = 177;
		t.y = 772;
		t.skinName = cookHireRewardSkin$Skin68;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new cookMyButton();
		this.shareBtn = t;
		t.anchorOffsetX = 140;
		t.anchorOffsetY = 55;
		t.height = 110;
		t.width = 280;
		t.x = 455;
		t.y = 772;
		t.skinName = cookHireRewardSkin$Skin69;
		return t;
	};
	return cookHireRewardSkin;
})(eui.Skin);generateEUI.paths['resource/ui/loading.exml'] = window.cookHeadTopSkillSkin = (function (_super) {
	__extends(cookHeadTopSkillSkin, _super);
	function cookHeadTopSkillSkin() {
		_super.call(this);
		this.skinParts = ["gpAll"];
		
		this.elementsContent = [this.gpAll_i()];
	}
	var _proto = cookHeadTopSkillSkin.prototype;

	_proto.gpAll_i = function () {
		var t = new eui.Group();
		this.gpAll = t;
		t.height = 1334;
		t.touchEnabled = true;
		t.width = 750;
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return cookHeadTopSkillSkin;
})(eui.Skin);generateEUI.paths['resource/ui/loading/BigReadingTimeProgress.exml'] = window.cookBigReadingTimeProgressSkin = (function (_super) {
	__extends(cookBigReadingTimeProgressSkin, _super);
	function cookBigReadingTimeProgressSkin() {
		_super.call(this);
		this.skinParts = ["action","thumb","lbTime","lbReadying"];
		
		this.action_i();
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.lbTime_i(),this.lbReadying_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.imgBuilding"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [25],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [-25],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, ["hostComponent.imgRemove"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [25],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, [-25],[],this._Object5,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"rotation");
	}
	var _proto = cookBigReadingTimeProgressSkin.prototype;

	_proto.action_i = function () {
		var t = new egret.tween.TweenGroup();
		this.action = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.ease = "quartInOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.ease = "quartInOut";
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 72;
		t.scale9Grid = new egret.Rectangle(14,14,26,25);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_progress_down_png";
		t.width = 434;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 64;
		t.scale9Grid = new egret.Rectangle(13,12,22,21);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_progress_png";
		t.width = 426;
		t.x = 4;
		t.y = 4;
		return t;
	};
	_proto.lbTime_i = function () {
		var t = new eui.Label();
		this.lbTime = t;
		t.right = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "12:59:59";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbReadying_i = function () {
		var t = new eui.Label();
		this.lbReadying = t;
		t.bold = true;
		t.left = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "准备中";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return cookBigReadingTimeProgressSkin;
})(eui.Skin);generateEUI.paths['resource/ui/loading/DeliveredProgress.exml'] = window.cookDeliveredProgressSkin = (function (_super) {
	__extends(cookDeliveredProgressSkin, _super);
	function cookDeliveredProgressSkin() {
		_super.call(this);
		this.skinParts = ["action","thumb"];
		
		this.action_i();
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.imgBuilding"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [25],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [-25],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, ["hostComponent.imgRemove"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [25],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, [-25],[],this._Object5,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"rotation");
	}
	var _proto = cookDeliveredProgressSkin.prototype;

	_proto.action_i = function () {
		var t = new egret.tween.TweenGroup();
		this.action = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.ease = "quartInOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.ease = "quartInOut";
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(14,1,85,10);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loadingBg03_png";
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading03_png";
		return t;
	};
	return cookDeliveredProgressSkin;
})(eui.Skin);generateEUI.paths['resource/ui/loading/earningsProgress.exml'] = window.cookearningsProgressSkin = (function (_super) {
	__extends(cookearningsProgressSkin, _super);
	function cookearningsProgressSkin() {
		_super.call(this);
		this.skinParts = ["action","thumb","lbPgOneSecondEarning","coin_img"];
		
		this.action_i();
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.lbPgOneSecondEarning_i(),this.coin_img_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.imgBuilding"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [25],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [-25],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, ["hostComponent.imgRemove"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [25],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, [-25],[],this._Object5,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"rotation");
	}
	var _proto = cookearningsProgressSkin.prototype;

	_proto.action_i = function () {
		var t = new egret.tween.TweenGroup();
		this.action = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.ease = "quartInOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.ease = "quartInOut";
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loadingBg01_png";
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading01_png";
		return t;
	};
	_proto.lbPgOneSecondEarning_i = function () {
		var t = new eui.Label();
		this.lbPgOneSecondEarning = t;
		t.bold = true;
		t.left = 73;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "3.17k";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.coin_img_i = function () {
		var t = new eui.Image();
		this.coin_img = t;
		t.height = 35;
		t.source = "coin1_png";
		t.width = 33;
		t.x = 36;
		t.y = 12;
		return t;
	};
	return cookearningsProgressSkin;
})(eui.Skin);generateEUI.paths['resource/ui/loading/ReadingTimeProgress.exml'] = window.cookReadingTimeProgressSkin = (function (_super) {
	__extends(cookReadingTimeProgressSkin, _super);
	function cookReadingTimeProgressSkin() {
		_super.call(this);
		this.skinParts = ["action","thumb","lbTime","lbReadying"];
		
		this.action_i();
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.lbTime_i(),this.lbReadying_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.imgBuilding"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [25],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [-25],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, ["hostComponent.imgRemove"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [25],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, [-25],[],this._Object5,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"rotation");
	}
	var _proto = cookReadingTimeProgressSkin.prototype;

	_proto.action_i = function () {
		var t = new egret.tween.TweenGroup();
		this.action = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.ease = "quartInOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.ease = "quartInOut";
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 53;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loadingBg04_png";
		t.width = 307;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading04_png";
		t.width = 299;
		t.x = 4;
		t.y = 4;
		return t;
	};
	_proto.lbTime_i = function () {
		var t = new eui.Label();
		this.lbTime = t;
		t.right = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "12:59:59";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbReadying_i = function () {
		var t = new eui.Label();
		this.lbReadying = t;
		t.bold = true;
		t.left = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "准备中";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return cookReadingTimeProgressSkin;
})(eui.Skin);generateEUI.paths['resource/ui/loading/UpgradeProgress.exml'] = window.cookUpgradeProgressSkin = (function (_super) {
	__extends(cookUpgradeProgressSkin, _super);
	function cookUpgradeProgressSkin() {
		_super.call(this);
		this.skinParts = ["action","imgBudget","thumb","lbPgLevel","lbNeedDiamond"];
		
		this.action_i();
		this.elementsContent = [this._Image1_i(),this.imgBudget_i(),this.thumb_i(),this.lbPgLevel_i(),this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.imgBuilding"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [25],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [-25],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, ["hostComponent.imgRemove"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [25],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, [-25],[],this._Object5,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"rotation");
	}
	var _proto = cookUpgradeProgressSkin.prototype;

	_proto.action_i = function () {
		var t = new egret.tween.TweenGroup();
		this.action = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.ease = "quartInOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.ease = "quartInOut";
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loadingBg02_png";
		return t;
	};
	_proto.imgBudget_i = function () {
		var t = new eui.Image();
		this.imgBudget = t;
		t.alpha = 0.5;
		t.left = 4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading02_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading02_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbPgLevel_i = function () {
		var t = new eui.Label();
		this.lbPgLevel = t;
		t.bold = true;
		t.left = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "等级9";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.right = 6;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image2_i(),this.lbNeedDiamond_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "prop_cash_s_png";
		t.width = 40;
		t.x = 10;
		t.y = 8;
		return t;
	};
	_proto.lbNeedDiamond_i = function () {
		var t = new eui.Label();
		this.lbNeedDiamond = t;
		t.right = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "15";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 110;
		t.y = 4;
		return t;
	};
	return cookUpgradeProgressSkin;
})(eui.Skin);generateEUI.paths['resource/ui/loadingTemp.exml'] = window.cookloadingTemp = (function (_super) {
	__extends(cookloadingTemp, _super);
	function cookloadingTemp() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookloadingTemp.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1334;
		t.width = 750;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label1_i(),this._Label2_i(),this._Image6_i(),this._Label3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "loading_bg_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.source = "loading_bar_bg_png";
		t.y = 1102;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.source = "loading_bar_png";
		t.y = 1102;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "loading_bar_d_png";
		t.x = 594;
		t.y = 991;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 309.5;
		t.anchorOffsetY = 122.5;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading_logo_png";
		t.y = 145.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Trebuchet MS";
		t.horizontalCenter = 0.5;
		t.size = 28;
		t.strokeColor = 0x111111;
		t.text = "游戏加载中...75%";
		t.y = 1112;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "v1.0.3";
		t.textColor = 0x333333;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "loading_tip_png";
		t.y = 1224.02;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "网络清洁球";
		t.textColor = 0xb20e18;
		t.y = 1172;
		return t;
	};
	return cookloadingTemp;
})(eui.Skin);generateEUI.paths['resource/ui/main/mainCompoment.exml'] = window.cookmainCompoment = (function (_super) {
	__extends(cookmainCompoment, _super);
	function cookmainCompoment() {
		_super.call(this);
		this.skinParts = ["gp_A","gp_B","imgSource","gp_C","name","gp_D"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookmainCompoment.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.gp_A_i(),this.gp_B_i(),this.gp_C_i(),this.gp_D_i()];
		return t;
	};
	_proto.gp_A_i = function () {
		var t = new eui.Group();
		this.gp_A = t;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "unlock_bg_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 199;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "unlock_bg1_png";
		t.touchEnabled = false;
		t.x = 85;
		t.y = 113;
		return t;
	};
	_proto.gp_B_i = function () {
		var t = new eui.Group();
		this.gp_B = t;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "research_restaurant_bg_png";
		t.touchEnabled = false;
		t.width = 492;
		t.x = 129;
		t.y = 17;
		return t;
	};
	_proto.gp_C_i = function () {
		var t = new eui.Group();
		this.gp_C = t;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.elementsContent = [this.imgSource_i()];
		return t;
	};
	_proto.imgSource_i = function () {
		var t = new eui.Image();
		this.imgSource = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.touchEnabled = false;
		t.y = 146;
		return t;
	};
	_proto.gp_D_i = function () {
		var t = new eui.Group();
		this.gp_D = t;
		t.left = 0;
		t.right = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.elementsContent = [this.name_i()];
		return t;
	};
	_proto.name_i = function () {
		var t = new eui.Label();
		this.name = t;
		t.bold = true;
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "菜名";
		t.touchEnabled = false;
		t.y = 25;
		return t;
	};
	return cookmainCompoment;
})(eui.Skin);generateEUI.paths['resource/ui/main/mainFlopCoin.exml'] = window.cookmainFlopCoin = (function (_super) {
	__extends(cookmainFlopCoin, _super);
	function cookmainFlopCoin() {
		_super.call(this);
		this.skinParts = ["flop_img","flop_coin","flop_coin_group"];
		
		this.elementsContent = [this.flop_coin_group_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.coin_img"],[0],this.flop_img,"source");
	}
	var _proto = cookmainFlopCoin.prototype;

	_proto.flop_coin_group_i = function () {
		var t = new eui.Group();
		this.flop_coin_group = t;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.elementsContent = [this.flop_img_i(),this.flop_coin_i()];
		return t;
	};
	_proto.flop_img_i = function () {
		var t = new eui.Image();
		this.flop_img = t;
		t.height = 20;
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto.flop_coin_i = function () {
		var t = new eui.BitmapLabel();
		this.flop_coin = t;
		t.font = "coinText_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "";
		t.verticalCenter = 0;
		t.x = 22;
		return t;
	};
	return cookmainFlopCoin;
})(eui.Skin);generateEUI.paths['resource/ui/main/mainItemSkin.exml'] = window.cookmainItemSkin = (function (_super) {
	__extends(cookmainItemSkin, _super);
	var cookmainItemSkin$Skin70 = 	(function (_super) {
		__extends(cookmainItemSkin$Skin70, _super);
		function cookmainItemSkin$Skin70() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainItemSkin$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "unlock_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookmainItemSkin$Skin70;
	})(eui.Skin);

	var cookmainItemSkin$Skin71 = 	(function (_super) {
		__extends(cookmainItemSkin$Skin71, _super);
		function cookmainItemSkin$Skin71() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainItemSkin$Skin71.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 98;
			t.scaleX = 0.5;
			t.scaleY = 0.5;
			t.source = "pop_btn2_png";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 35;
			t.source = "cash_png";
			t.width = 43;
			t.x = 14;
			t.y = 4;
			return t;
		};
		return cookmainItemSkin$Skin71;
	})(eui.Skin);

	var cookmainItemSkin$Skin72 = 	(function (_super) {
		__extends(cookmainItemSkin$Skin72, _super);
		function cookmainItemSkin$Skin72() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainItemSkin$Skin72.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 99;
			t.scaleX = 0.5;
			t.scaleY = 0.5;
			t.source = "pop_btn1_png";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 37.5;
			t.source = "shareIcon1_png";
			t.width = 36;
			t.x = 17;
			t.y = 2;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.source = "main_item_time_text_png";
			t.x = 64;
			t.y = 5;
			return t;
		};
		return cookmainItemSkin$Skin72;
	})(eui.Skin);

	var cookmainItemSkin$Skin73 = 	(function (_super) {
		__extends(cookmainItemSkin$Skin73, _super);
		function cookmainItemSkin$Skin73() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainItemSkin$Skin73.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 99;
			t.scaleX = 0.5;
			t.scaleY = 0.5;
			t.source = "pop_btn1_png";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 37.5;
			t.source = "playIcon1_png";
			t.width = 36;
			t.x = 17;
			t.y = 2;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.source = "main_item_time_text_png";
			t.x = 64;
			t.y = 5;
			return t;
		};
		return cookmainItemSkin$Skin73;
	})(eui.Skin);

	var cookmainItemSkin$Skin74 = 	(function (_super) {
		__extends(cookmainItemSkin$Skin74, _super);
		function cookmainItemSkin$Skin74() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainItemSkin$Skin74.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "research_btn_png";
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.scaleX = 1.6;
			t.scaleY = 1.6;
			t.source = "item_research_text_png";
			t.y = 13;
			return t;
		};
		return cookmainItemSkin$Skin74;
	})(eui.Skin);

	var cookmainItemSkin$Skin75 = 	(function (_super) {
		__extends(cookmainItemSkin$Skin75, _super);
		function cookmainItemSkin$Skin75() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainItemSkin$Skin75.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "item_finish_text_png";
			t.verticalCenter = 0;
			return t;
		};
		return cookmainItemSkin$Skin75;
	})(eui.Skin);

	var cookmainItemSkin$Skin76 = 	(function (_super) {
		__extends(cookmainItemSkin$Skin76, _super);
		function cookmainItemSkin$Skin76() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainItemSkin$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "main_item_research_btn2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookmainItemSkin$Skin76;
	})(eui.Skin);

	var cookmainItemSkin$Skin77 = 	(function (_super) {
		__extends(cookmainItemSkin$Skin77, _super);
		function cookmainItemSkin$Skin77() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainItemSkin$Skin77.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 58;
			t.scale9Grid = new egret.Rectangle(22,13,134,29);
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "mainitem_btn_png";
			t.width = 167;
			return t;
		};
		return cookmainItemSkin$Skin77;
	})(eui.Skin);

	var cookmainItemSkin$Skin78 = 	(function (_super) {
		__extends(cookmainItemSkin$Skin78, _super);
		function cookmainItemSkin$Skin78() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainItemSkin$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "big_reward_lock_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookmainItemSkin$Skin78;
	})(eui.Skin);

	var cookmainItemSkin$Skin79 = 	(function (_super) {
		__extends(cookmainItemSkin$Skin79, _super);
		function cookmainItemSkin$Skin79() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainItemSkin$Skin79.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 73;
			t.scale9Grid = new egret.Rectangle(34,28,192,51);
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "greenBtn_bg_png";
			t.width = 208;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.scaleX = 0.7;
			t.scaleY = 0.7;
			t.source = "shareIcon1_png";
			t.x = 11;
			t.y = 15;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.source = "main_item_time_text_png";
			t.x = 64;
			t.y = 15;
			return t;
		};
		return cookmainItemSkin$Skin79;
	})(eui.Skin);

	var cookmainItemSkin$Skin80 = 	(function (_super) {
		__extends(cookmainItemSkin$Skin80, _super);
		function cookmainItemSkin$Skin80() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainItemSkin$Skin80.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 73;
			t.scale9Grid = new egret.Rectangle(34,28,192,51);
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "greenBtn_bg_png";
			t.width = 208;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.scaleX = 0.7;
			t.scaleY = 0.7;
			t.source = "playIcon1_png";
			t.x = 11;
			t.y = 15;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.source = "main_item_time_text_png";
			t.x = 64;
			t.y = 15;
			return t;
		};
		return cookmainItemSkin$Skin80;
	})(eui.Skin);

	var cookmainItemSkin$Skin81 = 	(function (_super) {
		__extends(cookmainItemSkin$Skin81, _super);
		function cookmainItemSkin$Skin81() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainItemSkin$Skin81.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.scale9Grid = new egret.Rectangle(35,22,82,22);
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "yellow_btn_png";
			t.width = 200;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "cash_png";
			t.x = 40;
			t.y = 8;
			return t;
		};
		return cookmainItemSkin$Skin81;
	})(eui.Skin);

	var cookmainItemSkin$Skin82 = 	(function (_super) {
		__extends(cookmainItemSkin$Skin82, _super);
		function cookmainItemSkin$Skin82() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("select",
					[
						new eui.SetProperty("_Image1","source","merge_select_png")
					])
				,
				new eui.State ("unselect",
					[
						new eui.SetProperty("_Image1","source","merge_unselect_png")
					])
			];
		}
		var _proto = cookmainItemSkin$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.left = 0;
			t.scaleX = 0.8;
			t.scaleY = 0.8;
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.left = 56;
			t.size = 26;
			t.verticalCenter = 0;
			return t;
		};
		return cookmainItemSkin$Skin82;
	})(eui.Skin);

	var cookmainItemSkin$Skin83 = 	(function (_super) {
		__extends(cookmainItemSkin$Skin83, _super);
		function cookmainItemSkin$Skin83() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("receive",
					[
						new eui.SetProperty("_Image2","source","btn_text_receive_png")
					])
				,
				new eui.State ("double",
					[
						new eui.SetProperty("_Image2","source","big_item_double_png")
					])
			];
		}
		var _proto = cookmainItemSkin$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(76,32,1,1);
			t.source = "yellow_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookmainItemSkin$Skin83;
	})(eui.Skin);

	var cookmainItemSkin$Skin84 = 	(function (_super) {
		__extends(cookmainItemSkin$Skin84, _super);
		function cookmainItemSkin$Skin84() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("receive",
					[
						new eui.SetProperty("_Image2","source","btn_text_receive_png")
					])
				,
				new eui.State ("double",
					[
						new eui.SetProperty("_Image2","source","big_item_double_png")
					])
			];
		}
		var _proto = cookmainItemSkin$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(76,32,1,1);
			t.source = "yellow_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.horizontalCenter = 0;
			t.verticalCenter = -2;
			return t;
		};
		return cookmainItemSkin$Skin84;
	})(eui.Skin);

	function cookmainItemSkin() {
		_super.call(this);
		this.skinParts = ["chushiRect","DDD","chushiRect0","gp_chushi","gp_waiter_in","gp_waiter_out","cp00","i01","cp01","lbUpLockTime","lbUpLockCoin","btnUnlock","gp_cp01_1","i02","cp02","imgUpLockingDiamond","lbUpLockingDiamond","imgUpLockingShare","imgUpLockingVideo","pbTime","gp_cp01_2","i03","cp03","btnStudy","gp_cp01_3","i04","cp04","btnFinish","gp_cp01_4","i05","item_bg_img","gp_down","gp_middle","imgFood","gp_shouyinji_pos","imgIcon","lbGainAll","imgStar6","imgStar0","imgStar1","imgStar2","imgStar3","imgStar4","imgStar5","gpStar","income_text","gp_up","pgEarnings","tip_click","gp_down_left","lbSpeedMultiple","pbUpgrade","btnStudyUpGrade","waiter_tips","btnUpgradeCoin","imgUpgradeIcon","lbBusinessUpgradeCoin","lbBusinessUpgradeCoin0","imgJiantou01","imgJiantou02","gpJiantou","gp_down_right","lbCeng","lbName","i06","b00","imgBigUpLock","lbBigNeedUpLock","gpBigNoPen0","gpBigNoPen1","gpBigNoPen2","b01","bigreadingTimeProgress","gpBigShareUnlock","gpBigVideoUnlock","gpBigShareUnlockGroup","gpBigCashUnlock","lbBigCashCost","b02","bigItemBgRotaion01","bigItemIcon01","lbBigItemNum01","gpBigReward01","bigItemBgRotaion02","bigItemIcon02","lbBigItemNum02","gpBigReward02","bigItemBgRotaion03","bigItemIcon03","lbBigItemNum03","gpBigReward03","imgGetSelect","imgGetDoubleOrOne","imgGetDoubleOrOneVideo","b03","viewStatck","rtKeedOut"];
		
		this.height = 374;
		this.elementsContent = [this._Group16_i(),this.rtKeedOut_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.coin_img.img"],[0],this._Image5,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.coin_img.img"],[0],this.imgIcon,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.coin_img.img"],[0],this.imgUpgradeIcon,"source");
	}
	var _proto = cookmainItemSkin.prototype;

	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.height = 374;
		t.width = 900;
		t.elementsContent = [this.gp_chushi_i(),this.gp_waiter_in_i(),this.gp_waiter_out_i(),this.viewStatck_i()];
		return t;
	};
	_proto.gp_chushi_i = function () {
		var t = new eui.Group();
		this.gp_chushi = t;
		t.anchorOffsetX = 242;
		t.anchorOffsetY = 236;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 238;
		t.y = 319;
		t.elementsContent = [this.chushiRect_i(),this.DDD_i(),this.chushiRect0_i()];
		return t;
	};
	_proto.chushiRect_i = function () {
		var t = new eui.Group();
		this.chushiRect = t;
		t.height = 191;
		t.touchEnabled = false;
		t.width = 130;
		t.x = 178;
		t.y = -39;
		return t;
	};
	_proto.DDD_i = function () {
		var t = new eui.Rect();
		this.DDD = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 191;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 130;
		t.x = 178;
		t.y = -39;
		return t;
	};
	_proto.chushiRect0_i = function () {
		var t = new eui.Rect();
		this.chushiRect0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 191;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 130;
		t.x = 188;
		t.y = -29;
		return t;
	};
	_proto.gp_waiter_in_i = function () {
		var t = new eui.Group();
		this.gp_waiter_in = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 450;
		t.y = 319;
		return t;
	};
	_proto.gp_waiter_out_i = function () {
		var t = new eui.Group();
		this.gp_waiter_out = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 900;
		t.y = 319;
		return t;
	};
	_proto.viewStatck_i = function () {
		var t = new eui.ViewStack();
		this.viewStatck = t;
		t.selectedIndex = 8;
		t.elementsContent = [this.i01_i(),this.i02_i(),this.i03_i(),this.i04_i(),this.i05_i(),this.i06_i(),this.b00_i(),this.b01_i(),this.b02_i(),this.b03_i()];
		return t;
	};
	_proto.i01_i = function () {
		var t = new eui.Group();
		this.i01 = t;
		t.percentHeight = 100;
		t.name = "Group";
		t.percentWidth = 100;
		t.elementsContent = [this.cp00_i()];
		return t;
	};
	_proto.cp00_i = function () {
		var t = new eui.Component();
		this.cp00 = t;
		t.skinName = "cookmainCompoment";
		return t;
	};
	_proto.i02_i = function () {
		var t = new eui.Group();
		this.i02 = t;
		t.name = "Group";
		t.percentWidth = 100;
		t.elementsContent = [this.cp01_i(),this.gp_cp01_1_i()];
		return t;
	};
	_proto.cp01_i = function () {
		var t = new eui.Component();
		this.cp01 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "cookmainCompoment";
		return t;
	};
	_proto.gp_cp01_1_i = function () {
		var t = new eui.Group();
		this.gp_cp01_1 = t;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Label1_i(),this.btnUnlock_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "unlock_bg2_png";
		t.x = 161;
		t.y = 217;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 435;
		t.y = 290;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.lbUpLockTime_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(16,13,102,17);
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "unlock_name_png";
		t.verticalCenter = 2;
		t.width = 156;
		t.x = 18;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 34.5;
		t.source = "time_icon_png";
		t.verticalCenter = 0;
		t.width = 33;
		return t;
	};
	_proto.lbUpLockTime_i = function () {
		var t = new eui.BitmapLabel();
		this.lbUpLockTime = t;
		t.font = "commonText_fnt";
		t.horizontalCenter = 15;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.text = "00分00秒";
		t.verticalCenter = 2;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 299;
		t.y = 289;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.lbUpLockCoin_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(16,13,102,17);
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "unlock_name_png";
		t.verticalCenter = 2;
		t.width = 156;
		t.x = 18;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.height = 34.5;
		t.verticalCenter = 0;
		t.width = 33;
		return t;
	};
	_proto.lbUpLockCoin_i = function () {
		var t = new eui.Label();
		this.lbUpLockCoin = t;
		t.horizontalCenter = 14;
		t.size = 20;
		t.text = "";
		t.verticalCenter = 2;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "解锁厨房";
		t.textColor = 0xCC7418;
		t.x = 306;
		t.y = 234;
		return t;
	};
	_proto.btnUnlock_i = function () {
		var t = new cookMyButton();
		this.btnUnlock = t;
		t.anchorOffsetX = 43.5;
		t.anchorOffsetY = 47;
		t.label = "";
		t.x = 231.5;
		t.y = 285;
		t.skinName = cookmainItemSkin$Skin70;
		return t;
	};
	_proto.i03_i = function () {
		var t = new eui.Group();
		this.i03 = t;
		t.name = "Group";
		t.percentWidth = 100;
		t.elementsContent = [this.cp02_i(),this.gp_cp01_2_i()];
		return t;
	};
	_proto.cp02_i = function () {
		var t = new eui.Component();
		this.cp02 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "cookmainCompoment";
		return t;
	};
	_proto.gp_cp01_2_i = function () {
		var t = new eui.Group();
		this.gp_cp01_2 = t;
		t.elementsContent = [this._Image6_i(),this._Group4_i(),this.imgUpLockingShare_i(),this.imgUpLockingVideo_i(),this.pbTime_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "unlock_bg2_png";
		t.x = 170;
		t.y = 214;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 403;
		t.y = 287;
		t.elementsContent = [this._Group3_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.elementsContent = [this.imgUpLockingDiamond_i(),this.lbUpLockingDiamond_i()];
		return t;
	};
	_proto.imgUpLockingDiamond_i = function () {
		var t = new cookMyButton();
		this.imgUpLockingDiamond = t;
		t.anchorOffsetX = 78;
		t.anchorOffsetY = 24.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 78;
		t.y = 24.5;
		t.skinName = cookmainItemSkin$Skin71;
		return t;
	};
	_proto.lbUpLockingDiamond_i = function () {
		var t = new eui.BitmapLabel();
		this.lbUpLockingDiamond = t;
		t.font = "greenText_fnt";
		t.letterSpacing = -7;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "2888";
		t.touchEnabled = false;
		t.x = 60;
		t.y = 10;
		return t;
	};
	_proto.imgUpLockingShare_i = function () {
		var t = new cookMyButton();
		this.imgUpLockingShare = t;
		t.anchorOffsetX = 94.5;
		t.anchorOffsetY = 24.5;
		t.width = 189;
		t.x = 288.5;
		t.y = 311.5;
		t.skinName = cookmainItemSkin$Skin72;
		return t;
	};
	_proto.imgUpLockingVideo_i = function () {
		var t = new cookMyButton();
		this.imgUpLockingVideo = t;
		t.anchorOffsetX = 94.5;
		t.anchorOffsetY = 24.5;
		t.width = 189;
		t.x = 288.5;
		t.y = 311.5;
		t.skinName = cookmainItemSkin$Skin73;
		return t;
	};
	_proto.pbTime_i = function () {
		var t = new eui.ProgressBar();
		this.pbTime = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "cookReadingTimeProgressSkin";
		t.x = 228;
		t.y = 226;
		return t;
	};
	_proto.i04_i = function () {
		var t = new eui.Group();
		this.i04 = t;
		t.name = "Group";
		t.percentWidth = 100;
		t.elementsContent = [this.cp03_i(),this.gp_cp01_3_i()];
		return t;
	};
	_proto.cp03_i = function () {
		var t = new eui.Component();
		this.cp03 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "cookmainCompoment";
		return t;
	};
	_proto.gp_cp01_3_i = function () {
		var t = new eui.Group();
		this.gp_cp01_3 = t;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.elementsContent = [this.btnStudy_i()];
		return t;
	};
	_proto.btnStudy_i = function () {
		var t = new cookMyButton();
		this.btnStudy = t;
		t.anchorOffsetX = 139;
		t.anchorOffsetY = 48;
		t.height = 96;
		t.width = 278;
		t.x = 380;
		t.y = 301;
		t.skinName = cookmainItemSkin$Skin74;
		return t;
	};
	_proto.i05_i = function () {
		var t = new eui.Group();
		this.i05 = t;
		t.name = "Group";
		t.percentWidth = 100;
		t.elementsContent = [this.cp04_i(),this.gp_cp01_4_i()];
		return t;
	};
	_proto.cp04_i = function () {
		var t = new eui.Component();
		this.cp04 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "cookmainCompoment";
		return t;
	};
	_proto.gp_cp01_4_i = function () {
		var t = new eui.Group();
		this.gp_cp01_4 = t;
		t.elementsContent = [this.btnFinish_i()];
		return t;
	};
	_proto.btnFinish_i = function () {
		var t = new cookMyButton();
		this.btnFinish = t;
		t.anchorOffsetX = 140.5;
		t.anchorOffsetY = 43;
		t.x = 379.5;
		t.y = 296;
		t.skinName = cookmainItemSkin$Skin75;
		return t;
	};
	_proto.i06_i = function () {
		var t = new eui.Group();
		this.i06 = t;
		t.percentHeight = 100;
		t.name = "Group";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.gp_down_i(),this.gp_middle_i(),this.gp_up_i(),this.gp_down_left_i(),this.gp_down_right_i(),this._Group12_i()];
		return t;
	};
	_proto.gp_down_i = function () {
		var t = new eui.Group();
		this.gp_down = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.item_bg_img_i()];
		return t;
	};
	_proto.item_bg_img_i = function () {
		var t = new eui.Image();
		this.item_bg_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "kitchen_01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gp_middle_i = function () {
		var t = new eui.Group();
		this.gp_middle = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gp_up_i = function () {
		var t = new eui.Group();
		this.gp_up = t;
		t.anchorOffsetX = 185;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.x = 185;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this._Group5_i(),this.gp_shouyinji_pos_i(),this.imgIcon_i(),this.lbGainAll_i(),this._Group6_i(),this.income_text_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_item_zuozi2_png";
		t.touchEnabled = false;
		t.x = 1;
		t.y = 213;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 40;
		t.width = 40;
		t.x = 254;
		t.y = 246;
		t.elementsContent = [this.imgFood_i()];
		return t;
	};
	_proto.imgFood_i = function () {
		var t = new eui.Image();
		this.imgFood = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "";
		t.touchEnabled = true;
		return t;
	};
	_proto.gp_shouyinji_pos_i = function () {
		var t = new eui.Group();
		this.gp_shouyinji_pos = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 78;
		t.y = 284;
		t.elementsContent = [this._Rect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.scaleX = 1;
		t.scaleY = 1;
		return t;
	};
	_proto.imgIcon_i = function () {
		var t = new eui.Image();
		this.imgIcon = t;
		t.height = 18;
		t.width = 18;
		t.x = 60;
		t.y = 133;
		return t;
	};
	_proto.lbGainAll_i = function () {
		var t = new eui.Label();
		this.lbGainAll = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1.1;
		t.size = 16;
		t.text = "88.5k";
		t.x = 79.96;
		t.y = 133;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 88;
		t.width = 0;
		t.y = 266;
		t.elementsContent = [this.gpStar_i()];
		return t;
	};
	_proto.gpStar_i = function () {
		var t = new eui.Group();
		this.gpStar = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.imgStar6_i(),this.imgStar0_i(),this.imgStar1_i(),this.imgStar2_i(),this.imgStar3_i(),this.imgStar4_i(),this.imgStar5_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 1;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.imgStar6_i = function () {
		var t = new eui.Image();
		this.imgStar6 = t;
		t.height = 28;
		t.source = "star2_png";
		t.width = 28;
		t.x = -0;
		t.y = -6;
		return t;
	};
	_proto.imgStar0_i = function () {
		var t = new eui.Image();
		this.imgStar0 = t;
		t.height = 28;
		t.source = "star2_png";
		t.width = 28;
		t.x = 10;
		t.y = 4;
		return t;
	};
	_proto.imgStar1_i = function () {
		var t = new eui.Image();
		this.imgStar1 = t;
		t.height = 28;
		t.source = "star2_png";
		t.width = 28;
		t.x = 20;
		t.y = 14;
		return t;
	};
	_proto.imgStar2_i = function () {
		var t = new eui.Image();
		this.imgStar2 = t;
		t.height = 28;
		t.source = "star2_png";
		t.width = 28;
		t.x = 28;
		t.y = 24;
		return t;
	};
	_proto.imgStar3_i = function () {
		var t = new eui.Image();
		this.imgStar3 = t;
		t.height = 28;
		t.source = "star2_png";
		t.width = 28;
		t.x = 40;
		t.y = 34;
		return t;
	};
	_proto.imgStar4_i = function () {
		var t = new eui.Image();
		this.imgStar4 = t;
		t.height = 28;
		t.source = "star2_png";
		t.width = 28;
		t.x = 50;
		t.y = 44;
		return t;
	};
	_proto.imgStar5_i = function () {
		var t = new eui.Image();
		this.imgStar5 = t;
		t.height = 28;
		t.source = "star2_png";
		t.width = 28;
		t.x = 60;
		t.y = 54;
		return t;
	};
	_proto.income_text_i = function () {
		var t = new eui.Image();
		this.income_text = t;
		t.alpha = 0;
		t.source = "income_text_png";
		t.x = 66;
		t.y = 129;
		return t;
	};
	_proto.gp_down_left_i = function () {
		var t = new eui.Group();
		this.gp_down_left = t;
		t.anchorOffsetX = 185;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.x = 189;
		t.y = 298;
		t.elementsContent = [this.pgEarnings_i(),this.tip_click_i()];
		return t;
	};
	_proto.pgEarnings_i = function () {
		var t = new eui.ProgressBar();
		this.pgEarnings = t;
		t.skinName = "cookearningsProgressSkin";
		t.slideDuration = 0;
		t.x = -1;
		t.y = -1;
		return t;
	};
	_proto.tip_click_i = function () {
		var t = new eui.Image();
		this.tip_click = t;
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 22;
		t.source = "yellow_wenhao_png";
		t.visible = false;
		t.x = 207;
		t.y = 31;
		return t;
	};
	_proto.gp_down_right_i = function () {
		var t = new eui.Group();
		this.gp_down_right = t;
		t.anchorOffsetX = 229;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.x = 518;
		t.y = 10;
		t.elementsContent = [this._Image8_i(),this._Group7_i(),this.pbUpgrade_i(),this._Group8_i(),this._Group9_i(),this.gpJiantou_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "batchBuy_png";
		t.touchEnabled = false;
		t.x = 89;
		t.y = 202;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 80;
		t.x = 387;
		t.y = 209;
		t.elementsContent = [this.lbSpeedMultiple_i()];
		return t;
	};
	_proto.lbSpeedMultiple_i = function () {
		var t = new eui.BitmapLabel();
		this.lbSpeedMultiple = t;
		t.font = "orangeText_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "x1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.pbUpgrade_i = function () {
		var t = new eui.ProgressBar();
		this.pbUpgrade = t;
		t.skinName = "cookUpgradeProgressSkin";
		t.slideDuration = 0;
		t.x = 107;
		t.y = 224;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 100;
		t.y = 278;
		t.elementsContent = [this.btnStudyUpGrade_i()];
		return t;
	};
	_proto.btnStudyUpGrade_i = function () {
		var t = new cookMyButton();
		this.btnStudyUpGrade = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 29;
		t.x = 70;
		t.y = 29;
		t.skinName = cookmainItemSkin$Skin76;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 58;
		t.width = 167;
		t.x = 270;
		t.y = 278;
		t.elementsContent = [this.waiter_tips_i(),this.btnUpgradeCoin_i(),this.imgUpgradeIcon_i(),this.lbBusinessUpgradeCoin_i(),this.lbBusinessUpgradeCoin0_i()];
		return t;
	};
	_proto.waiter_tips_i = function () {
		var t = new eui.Image();
		this.waiter_tips = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "waikuo1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnUpgradeCoin_i = function () {
		var t = new cookMyButton();
		this.btnUpgradeCoin = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 29;
		t.label = "";
		t.x = 83;
		t.y = 29;
		t.skinName = cookmainItemSkin$Skin77;
		return t;
	};
	_proto.imgUpgradeIcon_i = function () {
		var t = new eui.Image();
		this.imgUpgradeIcon = t;
		t.height = 40;
		t.touchEnabled = false;
		t.width = 38;
		t.x = 19;
		t.y = 7;
		return t;
	};
	_proto.lbBusinessUpgradeCoin_i = function () {
		var t = new eui.Label();
		this.lbBusinessUpgradeCoin = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.left = 63;
		t.size = 28;
		t.stroke = 2;
		t.strokeColor = 0xffffff;
		t.text = "9,99ab";
		t.textColor = 0xff0000;
		t.touchEnabled = false;
		t.y = 14;
		return t;
	};
	_proto.lbBusinessUpgradeCoin0_i = function () {
		var t = new eui.Label();
		this.lbBusinessUpgradeCoin0 = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 28;
		t.stroke = 2;
		t.strokeColor = 0xFFFFFF;
		t.text = "9,99ab";
		t.textColor = 0xFF0000;
		t.touchEnabled = false;
		t.visible = false;
		t.y = 14;
		return t;
	};
	_proto.gpJiantou_i = function () {
		var t = new eui.Group();
		this.gpJiantou = t;
		t.x = 415;
		t.y = 257;
		t.elementsContent = [this.imgJiantou01_i(),this.imgJiantou02_i()];
		return t;
	};
	_proto.imgJiantou01_i = function () {
		var t = new eui.Image();
		this.imgJiantou01 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pic_arrow_png";
		return t;
	};
	_proto.imgJiantou02_i = function () {
		var t = new eui.Image();
		this.imgJiantou02 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pic_arrow_png";
		t.y = 9.65;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.right = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.y = 10;
		t.elementsContent = [this._Image9_i(),this._Group11_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_floor_png";
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Group10_i(),this.lbName_i()];
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.elementsContent = [this._Rect3_i(),this.lbCeng_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 32;
		t.ellipseWidth = 32;
		t.fillColor = 0xf2f2f2;
		t.height = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 32;
		return t;
	};
	_proto.lbCeng_i = function () {
		var t = new eui.Label();
		this.lbCeng = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "1";
		t.textColor = 0x1e98e7;
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbName_i = function () {
		var t = new eui.Label();
		this.lbName = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "皮蛋瘦多的";
		t.verticalCenter = 0;
		t.x = 39;
		return t;
	};
	_proto.b00_i = function () {
		var t = new eui.Group();
		this.b00 = t;
		t.name = "Group";
		t.scaleX = 1;
		t.scaleY = 1;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_qiang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.b01_i = function () {
		var t = new eui.Group();
		this.b01 = t;
		t.anchorOffsetX = 375;
		t.anchorOffsetY = 106.5;
		t.name = "Group";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = 375;
		t.y = 106.5;
		t.elementsContent = [this._Image11_i(),this.imgBigUpLock_i(),this._Image12_i(),this._Image13_i(),this.lbBigNeedUpLock_i(),this._Group13_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_qiang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgBigUpLock_i = function () {
		var t = new cookMyButton();
		this.imgBigUpLock = t;
		t.anchorOffsetX = 61;
		t.anchorOffsetY = 62;
		t.label = "";
		t.x = 225;
		t.y = 110;
		t.skinName = cookmainItemSkin$Skin78;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.scale9Grid = new egret.Rectangle(17,19,17,19);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_png";
		t.width = 246;
		t.x = 310;
		t.y = 110.65;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_home_coin_png";
		t.x = 336;
		t.y = 118.65;
		return t;
	};
	_proto.lbBigNeedUpLock_i = function () {
		var t = new eui.Label();
		this.lbBigNeedUpLock = t;
		t.horizontalCenter = 78.5;
		t.size = 35;
		t.text = "996999";
		t.y = 126;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 65;
		t.y = 33.34;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.gpBigNoPen0_i(),this.gpBigNoPen1_i(),this.gpBigNoPen2_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		return t;
	};
	_proto.gpBigNoPen0_i = function () {
		var t = new eui.Group();
		this.gpBigNoPen0 = t;
		t.anchorOffsetX = 31;
		t.anchorOffsetY = 34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_linping_png";
		t.x = -2.66;
		t.y = 3.99;
		return t;
	};
	_proto.gpBigNoPen1_i = function () {
		var t = new eui.Group();
		this.gpBigNoPen1 = t;
		t.anchorOffsetX = 31;
		t.anchorOffsetY = 34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_linping_png";
		t.x = -2.66;
		t.y = 3.99;
		return t;
	};
	_proto.gpBigNoPen2_i = function () {
		var t = new eui.Group();
		this.gpBigNoPen2 = t;
		t.anchorOffsetX = 31;
		t.anchorOffsetY = 34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 20;
		t.y = 20;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_linping_png";
		t.x = -2.66;
		t.y = 3.99;
		return t;
	};
	_proto.b02_i = function () {
		var t = new eui.Group();
		this.b02 = t;
		t.name = "Group";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.elementsContent = [this._Image17_i(),this.bigreadingTimeProgress_i(),this.gpBigShareUnlock_i(),this.gpBigVideoUnlock_i(),this.gpBigShareUnlockGroup_i(),this._Group14_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_qiang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bigreadingTimeProgress_i = function () {
		var t = new eui.ProgressBar();
		this.bigreadingTimeProgress = t;
		t.skinName = "cookBigReadingTimeProgressSkin";
		t.x = 158;
		t.y = 32;
		return t;
	};
	_proto.gpBigShareUnlock_i = function () {
		var t = new cookMyButton();
		this.gpBigShareUnlock = t;
		t.anchorOffsetX = 104;
		t.anchorOffsetY = 36.5;
		t.label = "";
		t.x = 267;
		t.y = 152.5;
		t.skinName = cookmainItemSkin$Skin79;
		return t;
	};
	_proto.gpBigVideoUnlock_i = function () {
		var t = new cookMyButton();
		this.gpBigVideoUnlock = t;
		t.anchorOffsetX = 104;
		t.anchorOffsetY = 36.5;
		t.label = "";
		t.x = 267;
		t.y = 152.5;
		t.skinName = cookmainItemSkin$Skin80;
		return t;
	};
	_proto.gpBigShareUnlockGroup_i = function () {
		var t = new eui.Group();
		this.gpBigShareUnlockGroup = t;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.x = 163;
		t.y = 116;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.x = 390;
		t.y = 115.96;
		t.elementsContent = [this.gpBigCashUnlock_i(),this.lbBigCashCost_i()];
		return t;
	};
	_proto.gpBigCashUnlock_i = function () {
		var t = new cookMyButton();
		this.gpBigCashUnlock = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 34;
		t.label = "";
		t.x = 100;
		t.y = 34;
		t.skinName = cookmainItemSkin$Skin81;
		return t;
	};
	_proto.lbBigCashCost_i = function () {
		var t = new eui.Label();
		this.lbBigCashCost = t;
		t.horizontalCenter = 28;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "88";
		t.touchEnabled = false;
		t.y = 18;
		return t;
	};
	_proto.b03_i = function () {
		var t = new eui.Group();
		this.b03 = t;
		t.name = "Group";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image18_i(),this._Group15_i(),this.imgGetSelect_i(),this.imgGetDoubleOrOne_i(),this.imgGetDoubleOrOneVideo_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_qiang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.horizontalCenter = -147;
		t.width = 386;
		t.y = 42.4;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this.gpBigReward01_i(),this.gpBigReward02_i(),this.gpBigReward03_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -26;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.gpBigReward01_i = function () {
		var t = new eui.Group();
		this.gpBigReward01 = t;
		t.anchorOffsetX = 73;
		t.anchorOffsetY = 65;
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 146;
		t.elementsContent = [this.bigItemBgRotaion01_i(),this._Image19_i(),this.bigItemIcon01_i(),this.lbBigItemNum01_i()];
		return t;
	};
	_proto.bigItemBgRotaion01_i = function () {
		var t = new eui.Image();
		this.bigItemBgRotaion01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_guangxiao_png";
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 47;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_wpbg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.bigItemIcon01_i = function () {
		var t = new eui.Image();
		this.bigItemIcon01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.source = "prop_2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbBigItemNum01_i = function () {
		var t = new eui.Label();
		this.lbBigItemNum01 = t;
		t.bold = true;
		t.horizontalCenter = 23;
		t.size = 26;
		t.text = "x99";
		t.y = 89;
		return t;
	};
	_proto.gpBigReward02_i = function () {
		var t = new eui.Group();
		this.gpBigReward02 = t;
		t.anchorOffsetX = 73;
		t.anchorOffsetY = 65;
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 146;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this.bigItemBgRotaion02_i(),this._Image20_i(),this.bigItemIcon02_i(),this.lbBigItemNum02_i()];
		return t;
	};
	_proto.bigItemBgRotaion02_i = function () {
		var t = new eui.Image();
		this.bigItemBgRotaion02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_guangxiao_png";
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 47;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_wpbg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.bigItemIcon02_i = function () {
		var t = new eui.Image();
		this.bigItemIcon02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_wpbg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbBigItemNum02_i = function () {
		var t = new eui.Label();
		this.lbBigItemNum02 = t;
		t.bold = true;
		t.horizontalCenter = 23;
		t.size = 26;
		t.text = "x99";
		t.y = 89;
		return t;
	};
	_proto.gpBigReward03_i = function () {
		var t = new eui.Group();
		this.gpBigReward03 = t;
		t.anchorOffsetX = 73;
		t.anchorOffsetY = 65;
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 146;
		t.x = 20;
		t.y = 20;
		t.elementsContent = [this.bigItemBgRotaion03_i(),this._Image21_i(),this.bigItemIcon03_i(),this.lbBigItemNum03_i()];
		return t;
	};
	_proto.bigItemBgRotaion03_i = function () {
		var t = new eui.Image();
		this.bigItemBgRotaion03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_guangxiao_png";
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 47;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_wpbg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.bigItemIcon03_i = function () {
		var t = new eui.Image();
		this.bigItemIcon03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_big_wpbg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbBigItemNum03_i = function () {
		var t = new eui.Label();
		this.lbBigItemNum03 = t;
		t.bold = true;
		t.horizontalCenter = 23;
		t.size = 26;
		t.text = "x99";
		t.y = 89;
		return t;
	};
	_proto.imgGetSelect_i = function () {
		var t = new cookMyButton();
		this.imgGetSelect = t;
		t.currentState = "select";
		t.horizontalCenter = 206;
		t.label = "分享领取双倍";
		t.verticalCenter = 66.5;
		t.skinName = cookmainItemSkin$Skin82;
		return t;
	};
	_proto.imgGetDoubleOrOne_i = function () {
		var t = new cookMyButton();
		this.imgGetDoubleOrOne = t;
		t.anchorOffsetX = 123;
		t.anchorOffsetY = 37.5;
		t.currentState = "double";
		t.height = 75;
		t.horizontalCenter = 202;
		t.verticalCenter = 4;
		t.width = 246;
		t.skinName = cookmainItemSkin$Skin83;
		return t;
	};
	_proto.imgGetDoubleOrOneVideo_i = function () {
		var t = new cookMyButton();
		this.imgGetDoubleOrOneVideo = t;
		t.anchorOffsetX = 123;
		t.anchorOffsetY = 37.5;
		t.currentState = "double";
		t.height = 75;
		t.horizontalCenter = 202;
		t.verticalCenter = 4;
		t.width = 246;
		t.skinName = cookmainItemSkin$Skin84;
		return t;
	};
	_proto.rtKeedOut_i = function () {
		var t = new eui.Rect();
		this.rtKeedOut = t;
		t.fillAlpha = 0.3;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	return cookmainItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/main/mainPlayerHeadSkin.exml'] = window.cookmainPlayerHeadSkin = (function (_super) {
	__extends(cookmainPlayerHeadSkin, _super);
	function cookmainPlayerHeadSkin() {
		_super.call(this);
		this.skinParts = ["pgDelivered","coin_img","lbDelivered","gpLb","gpAll"];
		
		this.elementsContent = [this.gpAll_i()];
	}
	var _proto = cookmainPlayerHeadSkin.prototype;

	_proto.gpAll_i = function () {
		var t = new eui.Group();
		this.gpAll = t;
		t.bottom = 0;
		t.x = 0;
		t.elementsContent = [this.pgDelivered_i(),this.gpLb_i()];
		return t;
	};
	_proto.pgDelivered_i = function () {
		var t = new eui.ProgressBar();
		this.pgDelivered = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "cookDeliveredProgressSkin";
		t.slideDuration = 0;
		t.visible = false;
		t.x = 0;
		t.y = 30;
		return t;
	};
	_proto.gpLb_i = function () {
		var t = new eui.Group();
		this.gpLb = t;
		t.visible = false;
		t.x = 8;
		t.y = 22;
		t.elementsContent = [this.coin_img_i(),this._Label1_i(),this.lbDelivered_i()];
		return t;
	};
	_proto.coin_img_i = function () {
		var t = new eui.Image();
		this.coin_img = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "coin1_png";
		t.width = 30;
		t.x = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "488k";
		t.visible = false;
		t.x = 32;
		t.y = -1;
		return t;
	};
	_proto.lbDelivered_i = function () {
		var t = new eui.BitmapLabel();
		this.lbDelivered = t;
		t.font = "coinText_fnt";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "504";
		t.verticalCenter = 0;
		t.x = 35;
		return t;
	};
	return cookmainPlayerHeadSkin;
})(eui.Skin);generateEUI.paths['resource/ui/main/mainSpeedupToast.exml'] = window.cookmainSpeedupToast = (function (_super) {
	__extends(cookmainSpeedupToast, _super);
	function cookmainSpeedupToast() {
		_super.call(this);
		this.skinParts = ["old_income","add_income","all"];
		
		this.height = 114;
		this.width = 369;
		this.elementsContent = [this.all_i()];
	}
	var _proto = cookmainSpeedupToast.prototype;

	_proto.all_i = function () {
		var t = new eui.Group();
		this.all = t;
		t.anchorOffsetX = 184;
		t.anchorOffsetY = 57;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.y = 57;
		t.elementsContent = [this._Image1_i(),this.old_income_i(),this.add_income_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "main_speedup_bg_png";
		return t;
	};
	_proto.old_income_i = function () {
		var t = new eui.Label();
		this.old_income = t;
		t.bottom = 18;
		t.left = 105;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x3a1d07;
		t.text = "333K";
		t.textColor = 0xfffc00;
		return t;
	};
	_proto.add_income_i = function () {
		var t = new eui.Label();
		this.add_income = t;
		t.bottom = 18;
		t.left = 201;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x0d2a00;
		t.text = "+333K";
		t.textColor = 0x93ff00;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 34;
		t.stroke = 2;
		t.strokeColor = 0x3a1d07;
		t.text = "总赚钱速度";
		t.textColor = 0xffffff;
		t.x = 109;
		t.y = 27;
		return t;
	};
	return cookmainSpeedupToast;
})(eui.Skin);generateEUI.paths['resource/ui/main/mainUpBgSkin.exml'] = window.cookmainSkin = (function (_super) {
	__extends(cookmainSkin, _super);
	var cookmainSkin$Skin85 = 	(function (_super) {
		__extends(cookmainSkin$Skin85, _super);
		function cookmainSkin$Skin85() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainSkin$Skin85.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bg_upgrade_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookmainSkin$Skin85;
	})(eui.Skin);

	var cookmainSkin$Skin86 = 	(function (_super) {
		__extends(cookmainSkin$Skin86, _super);
		function cookmainSkin$Skin86() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainSkin$Skin86.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bg_upgrade_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookmainSkin$Skin86;
	})(eui.Skin);

	var cookmainSkin$Skin87 = 	(function (_super) {
		__extends(cookmainSkin$Skin87, _super);
		function cookmainSkin$Skin87() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainSkin$Skin87.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pic_play_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookmainSkin$Skin87;
	})(eui.Skin);

	function cookmainSkin() {
		_super.call(this);
		this.skinParts = ["main_gb_img","gp_waiterIn","gp_waiterOut","gp_courierIn","gp_courierOut","gp_waiterManager","gp_courierManager","gpBox","lbAllCoin","waiter_waikuo","upgrade_waiter","waiter_arrow","waiter_tips","gp_waiterUpgrade","courier_waikuo","upgrade_courier","courier_arrow","courier_tips","gp_courierUpgrade","pgUnLoad01","pgUnLoad02","pgUnLoad03","pgUnLoad04","pgUnLoad05","flop_coin_group","htp_btn","rectGuideWaiter","rectGuideWaiterJL","rectGuideCourierJL","rectGuideCourier","one_prop","mul_group","timer_group","all_prop_add","all_group","open_bag","gpAll"];
		
		this.elementsContent = [this.gpAll_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.coin_img"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.waiter"],[0],this._BitmapLabel1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.courier"],[0],this._BitmapLabel2,"text");
	}
	var _proto = cookmainSkin.prototype;

	_proto.gpAll_i = function () {
		var t = new eui.Group();
		this.gpAll = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.main_gb_img_i(),this._Group2_i()];
		return t;
	};
	_proto.main_gb_img_i = function () {
		var t = new eui.Image();
		this.main_gb_img = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sky_01_png";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.y = 161;
		t.elementsContent = [this.gp_waiterIn_i(),this.gp_waiterOut_i(),this.gp_courierIn_i(),this.gp_courierOut_i(),this.gp_waiterManager_i(),this.gp_courierManager_i(),this.gpBox_i(),this._Group1_i(),this.gp_waiterUpgrade_i(),this.gp_courierUpgrade_i(),this.pgUnLoad01_i(),this.pgUnLoad02_i(),this.pgUnLoad03_i(),this.pgUnLoad04_i(),this.pgUnLoad05_i(),this.flop_coin_group_i(),this.htp_btn_i(),this.rectGuideWaiter_i(),this.rectGuideWaiterJL_i(),this.rectGuideCourierJL_i(),this.rectGuideCourier_i(),this.open_bag_i()];
		return t;
	};
	_proto.gp_waiterIn_i = function () {
		var t = new eui.Group();
		this.gp_waiterIn = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 196;
		t.y = 582;
		return t;
	};
	_proto.gp_waiterOut_i = function () {
		var t = new eui.Group();
		this.gp_waiterOut = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = -101.96;
		t.y = 582;
		return t;
	};
	_proto.gp_courierIn_i = function () {
		var t = new eui.Group();
		this.gp_courierIn = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 358;
		t.y = 582;
		return t;
	};
	_proto.gp_courierOut_i = function () {
		var t = new eui.Group();
		this.gp_courierOut = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 908;
		t.y = 582;
		return t;
	};
	_proto.gp_waiterManager_i = function () {
		var t = new eui.Group();
		this.gp_waiterManager = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 60.46;
		t.y = 582;
		return t;
	};
	_proto.gp_courierManager_i = function () {
		var t = new eui.Group();
		this.gp_courierManager = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 697.76;
		t.y = 582;
		return t;
	};
	_proto.gpBox_i = function () {
		var t = new eui.Group();
		this.gpBox = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 227;
		t.y = 432;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "box_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 131;
		t.y = 335;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.lbAllCoin_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(21,13,67,14);
		t.scaleY = 1;
		t.source = "temp_coin_bg_png";
		t.width = 134;
		t.x = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 24;
		t.x = 11;
		return t;
	};
	_proto.lbAllCoin_i = function () {
		var t = new eui.Label();
		this.lbAllCoin = t;
		t.bold = true;
		t.left = 43;
		t.size = 28;
		t.text = "0";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gp_waiterUpgrade_i = function () {
		var t = new eui.Group();
		this.gp_waiterUpgrade = t;
		t.height = 74;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 68;
		t.x = 249;
		t.y = 241.51;
		t.elementsContent = [this.waiter_waikuo_i(),this.upgrade_waiter_i(),this.waiter_arrow_i(),this._Label1_i(),this._BitmapLabel1_i(),this._Image4_i(),this.waiter_tips_i()];
		return t;
	};
	_proto.waiter_waikuo_i = function () {
		var t = new eui.Image();
		this.waiter_waikuo = t;
		t.horizontalCenter = 0;
		t.source = "waikuo2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.upgrade_waiter_i = function () {
		var t = new cookMyButton();
		this.upgrade_waiter = t;
		t.anchorOffsetX = 35;
		t.anchorOffsetY = 36;
		t.height = 74;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 68;
		t.x = 35;
		t.y = 35.49;
		t.skinName = cookmainSkin$Skin85;
		return t;
	};
	_proto.waiter_arrow_i = function () {
		var t = new eui.Image();
		this.waiter_arrow = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pic_arrow_png";
		t.visible = false;
		t.x = -19;
		t.y = -18;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "等级";
		t.touchEnabled = false;
		t.visible = false;
		t.y = 10;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel1 = t;
		t.font = "greenText_fnt";
		t.horizontalCenter = 2;
		t.letterSpacing = -8;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.touchEnabled = false;
		t.verticalCenter = 12;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "level_text_png";
		t.touchEnabled = false;
		t.y = 9;
		return t;
	};
	_proto.waiter_tips_i = function () {
		var t = new eui.Image();
		this.waiter_tips = t;
		t.anchorOffsetX = 24;
		t.anchorOffsetY = 56;
		t.source = "upgrade_tips_png";
		t.visible = false;
		t.x = 34;
		t.y = -1;
		return t;
	};
	_proto.gp_courierUpgrade_i = function () {
		var t = new eui.Group();
		this.gp_courierUpgrade = t;
		t.height = 74;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 68;
		t.x = 670;
		t.y = 271.99;
		t.elementsContent = [this.courier_waikuo_i(),this.upgrade_courier_i(),this.courier_arrow_i(),this._Image5_i(),this._BitmapLabel2_i(),this.courier_tips_i()];
		return t;
	};
	_proto.courier_waikuo_i = function () {
		var t = new eui.Image();
		this.courier_waikuo = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "waikuo2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.upgrade_courier_i = function () {
		var t = new cookMyButton();
		this.upgrade_courier = t;
		t.anchorOffsetX = 34;
		t.anchorOffsetY = 38;
		t.label = "";
		t.x = 34;
		t.y = 38;
		t.skinName = cookmainSkin$Skin86;
		return t;
	};
	_proto.courier_arrow_i = function () {
		var t = new eui.Image();
		this.courier_arrow = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pic_arrow_png";
		t.visible = false;
		t.x = -19;
		t.y = -18;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "level_text_png";
		t.touchEnabled = false;
		t.y = 9;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel2 = t;
		t.font = "greenText_fnt";
		t.horizontalCenter = 2;
		t.letterSpacing = -8;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.touchEnabled = false;
		t.verticalCenter = 12;
		return t;
	};
	_proto.courier_tips_i = function () {
		var t = new eui.Image();
		this.courier_tips = t;
		t.anchorOffsetX = 24;
		t.anchorOffsetY = 56;
		t.source = "upgrade_tips_png";
		t.visible = false;
		t.x = 34;
		t.y = -1;
		return t;
	};
	_proto.pgUnLoad01_i = function () {
		var t = new eui.ProgressBar();
		this.pgUnLoad01 = t;
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "cookDeliveredProgressSkin";
		t.visible = false;
		t.width = 20;
		t.x = 347;
		t.y = 234.51;
		return t;
	};
	_proto.pgUnLoad02_i = function () {
		var t = new eui.ProgressBar();
		this.pgUnLoad02 = t;
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "cookDeliveredProgressSkin";
		t.visible = false;
		t.width = 20;
		t.x = 455;
		t.y = 214.51;
		return t;
	};
	_proto.pgUnLoad03_i = function () {
		var t = new eui.ProgressBar();
		this.pgUnLoad03 = t;
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "cookDeliveredProgressSkin";
		t.visible = false;
		t.width = 20;
		t.x = 484;
		t.y = 256.51;
		return t;
	};
	_proto.pgUnLoad04_i = function () {
		var t = new eui.ProgressBar();
		this.pgUnLoad04 = t;
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "cookDeliveredProgressSkin";
		t.visible = false;
		t.width = 20;
		t.x = 486;
		t.y = 176.51;
		return t;
	};
	_proto.pgUnLoad05_i = function () {
		var t = new eui.ProgressBar();
		this.pgUnLoad05 = t;
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "cookDeliveredProgressSkin";
		t.visible = false;
		t.width = 20;
		t.x = 387;
		t.y = 151.51;
		return t;
	};
	_proto.flop_coin_group_i = function () {
		var t = new eui.Group();
		this.flop_coin_group = t;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 347;
		t.y = 234;
		return t;
	};
	_proto.htp_btn_i = function () {
		var t = new cookMyButton();
		this.htp_btn = t;
		t.anchorOffsetX = 81.5;
		t.anchorOffsetY = 37;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 117.5;
		t.y = 150;
		t.skinName = cookmainSkin$Skin87;
		return t;
	};
	_proto.rectGuideWaiter_i = function () {
		var t = new eui.Rect();
		this.rectGuideWaiter = t;
		t.fillAlpha = 0;
		t.height = 126;
		t.horizontalCenter = -267;
		t.touchEnabled = false;
		t.verticalCenter = 224.5;
		t.width = 70;
		return t;
	};
	_proto.rectGuideWaiterJL_i = function () {
		var t = new eui.Rect();
		this.rectGuideWaiterJL = t;
		t.fillAlpha = 0;
		t.height = 126;
		t.horizontalCenter = -393;
		t.touchEnabled = false;
		t.verticalCenter = 225;
		t.width = 70;
		return t;
	};
	_proto.rectGuideCourierJL_i = function () {
		var t = new eui.Rect();
		this.rectGuideCourierJL = t;
		t.fillAlpha = 0;
		t.height = 126;
		t.horizontalCenter = 245;
		t.touchEnabled = false;
		t.verticalCenter = 225;
		t.width = 70;
		return t;
	};
	_proto.rectGuideCourier_i = function () {
		var t = new eui.Rect();
		this.rectGuideCourier = t;
		t.bottom = 5;
		t.fillAlpha = 0;
		t.height = 178;
		t.horizontalCenter = -103.5;
		t.touchEnabled = false;
		t.width = 109;
		return t;
	};
	_proto.open_bag_i = function () {
		var t = new eui.Group();
		this.open_bag = t;
		t.height = 126;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.width = 122;
		t.x = 60;
		t.y = 86;
		t.elementsContent = [this._Image6_i(),this.one_prop_i(),this.mul_group_i(),this.timer_group_i(),this.all_group_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "backpackage_default_png";
		return t;
	};
	_proto.one_prop_i = function () {
		var t = new eui.Image();
		this.one_prop = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "prop_50_png";
		t.verticalCenter = -9;
		t.visible = false;
		return t;
	};
	_proto.mul_group_i = function () {
		var t = new eui.Group();
		this.mul_group = t;
		t.height = 126;
		t.visible = false;
		t.width = 122;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -18;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "prop_50_png";
		t.verticalCenter = -7.5;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "prop_50_png";
		t.verticalCenter = -7.5;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 18;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "prop_50_png";
		t.verticalCenter = -7.5;
		return t;
	};
	_proto.timer_group_i = function () {
		var t = new eui.Group();
		this.timer_group = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.top = -28;
		t.width = 109;
		t.elementsContent = [this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "0分56秒";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "0分56秒";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "0分56秒";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.all_group_i = function () {
		var t = new eui.Group();
		this.all_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 6;
		t.height = 50;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 48;
		t.elementsContent = [this._Image10_i(),this.all_prop_add_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "backpackage_banner_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.all_prop_add_i = function () {
		var t = new eui.BitmapLabel();
		this.all_prop_add = t;
		t.font = "orangeText_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.text = "x00";
		t.verticalCenter = -2;
		return t;
	};
	return cookmainSkin;
})(eui.Skin);generateEUI.paths['resource/ui/main/noticeSkin.exml'] = window.cooknoticeSkin = (function (_super) {
	__extends(cooknoticeSkin, _super);
	function cooknoticeSkin() {
		_super.call(this);
		this.skinParts = ["avatar","local","num","unit","nameText","allGroup"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cooknoticeSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.elementsContent = [this.allGroup_i()];
		return t;
	};
	_proto.allGroup_i = function () {
		var t = new eui.Group();
		this.allGroup = t;
		t.height = 138;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 461;
		t.y = 272;
		t.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this.avatar_i(),this._Image3_i(),this.local_i(),this.num_i(),this.unit_i(),this.nameText_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "notice_bg_png";
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xc6941c;
		t.height = 88;
		t.width = 88;
		t.x = 21;
		t.y = 20;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.source = "boss_i_02_png";
		t.width = 80;
		t.x = 25;
		t.y = 24;
		return t;
	};
	_proto.avatar_i = function () {
		var t = new eui.Image();
		this.avatar = t;
		t.height = 80;
		t.source = "";
		t.width = 80;
		t.x = 25;
		t.y = 24;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 46;
		t.source = "pic_arrow_png";
		t.width = 44;
		t.x = -15;
		t.y = -14;
		return t;
	};
	_proto.local_i = function () {
		var t = new eui.Label();
		this.local = t;
		t.text = "广州市第";
		t.textColor = 0x5e3200;
		t.x = 123;
		t.y = 33;
		return t;
	};
	_proto.num_i = function () {
		var t = new eui.Label();
		this.num = t;
		t.text = "500000";
		t.textColor = 0xee3200;
		t.x = 248;
		t.y = 33;
		return t;
	};
	_proto.unit_i = function () {
		var t = new eui.Label();
		this.unit = t;
		t.text = "位";
		t.textColor = 0x5e3200;
		t.x = 354;
		t.y = 33;
		return t;
	};
	_proto.nameText_i = function () {
		var t = new eui.Label();
		this.nameText = t;
		t.text = "学会了“菜品XXX”制作";
		t.textColor = 0x5e3200;
		t.x = 123;
		t.y = 71;
		return t;
	};
	return cooknoticeSkin;
})(eui.Skin);generateEUI.paths['resource/ui/mainSkin.exml'] = window.cookmainSkin = (function (_super) {
	__extends(cookmainSkin, _super);
	var cookmainSkin$Skin88 = 	(function (_super) {
		__extends(cookmainSkin$Skin88, _super);
		function cookmainSkin$Skin88() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainSkin$Skin88.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "shop_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookmainSkin$Skin88;
	})(eui.Skin);

	var cookmainSkin$Skin89 = 	(function (_super) {
		__extends(cookmainSkin$Skin89, _super);
		function cookmainSkin$Skin89() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainSkin$Skin89.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "skill_icon_btn_png";
			t.percentWidth = 100;
			return t;
		};
		return cookmainSkin$Skin89;
	})(eui.Skin);

	var cookmainSkin$Skin90 = 	(function (_super) {
		__extends(cookmainSkin$Skin90, _super);
		function cookmainSkin$Skin90() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainSkin$Skin90.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_home_profit_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookmainSkin$Skin90;
	})(eui.Skin);

	var cookmainSkin$Skin91 = 	(function (_super) {
		__extends(cookmainSkin$Skin91, _super);
		function cookmainSkin$Skin91() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainSkin$Skin91.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cookbook_icon_btn_png";
			t.percentWidth = 100;
			return t;
		};
		return cookmainSkin$Skin91;
	})(eui.Skin);

	var cookmainSkin$Skin92 = 	(function (_super) {
		__extends(cookmainSkin$Skin92, _super);
		function cookmainSkin$Skin92() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainSkin$Skin92.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "map_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookmainSkin$Skin92;
	})(eui.Skin);

	var cookmainSkin$Skin93 = 	(function (_super) {
		__extends(cookmainSkin$Skin93, _super);
		function cookmainSkin$Skin93() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainSkin$Skin93.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "upgrade_icon_png";
			return t;
		};
		return cookmainSkin$Skin93;
	})(eui.Skin);

	var cookmainSkin$Skin94 = 	(function (_super) {
		__extends(cookmainSkin$Skin94, _super);
		function cookmainSkin$Skin94() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainSkin$Skin94.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "chest_icon_png";
			t.percentWidth = 100;
			return t;
		};
		return cookmainSkin$Skin94;
	})(eui.Skin);

	var cookmainSkin$Skin95 = 	(function (_super) {
		__extends(cookmainSkin$Skin95, _super);
		function cookmainSkin$Skin95() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainSkin$Skin95.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "rank_icon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookmainSkin$Skin95;
	})(eui.Skin);

	var cookmainSkin$Skin96 = 	(function (_super) {
		__extends(cookmainSkin$Skin96, _super);
		function cookmainSkin$Skin96() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainSkin$Skin96.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "skillpoint_icon_png";
			t.percentWidth = 100;
			return t;
		};
		return cookmainSkin$Skin96;
	})(eui.Skin);

	var cookmainSkin$Skin97 = 	(function (_super) {
		__extends(cookmainSkin$Skin97, _super);
		function cookmainSkin$Skin97() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainSkin$Skin97.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wheel_icon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookmainSkin$Skin97;
	})(eui.Skin);

	var cookmainSkin$Skin98 = 	(function (_super) {
		__extends(cookmainSkin$Skin98, _super);
		function cookmainSkin$Skin98() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookmainSkin$Skin98.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sign_icon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookmainSkin$Skin98;
	})(eui.Skin);

	function cookmainSkin() {
		_super.call(this);
		this.skinParts = ["gpUpScence","gpScroller","scLock","shop_btn","skill_btn","double_btn","cookbook_btn","map_btn","bigmap_dot","upgrade_tip","cookbook_dot","imgIconDown","imgIconUp","gpUpDown","changeRange","range_text","changeRangeGroup","gpHide","top_bg_group","imgCoin","doublea","imgMoney","test2","none_mul_income","all_mul_income","test1","all_mul_text","prop_boost_group","speedup_boost_text","speedup_boost_group","chest_glow","lbChestsNum","gpChestsNum","gpChest","rank_glow","openRank","gpRank","skill_glow","skill_point_btn","btnUpSkill","wheel_glow","openWheel","wheel_dot","gpWheel","sign_glow","openSign","sign_dot","gpSign","outerring_group","fd_btn","avatarMask","user_avatar","top_group","isFinishedImg","mission_img","mission_num","missionLb1","missionLb2","gpMission","openMission","rectLoading","imgBg","lbTitle","imIcon","imgRed","gpBoss"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i(),this.gpHide_i(),this.top_group_i(),this.gpMission_i(),this.openMission_i(),this.rectLoading_i(),this.gpBoss_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.coin"],[0],this._BitmapLabel1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.cash"],[0],this._BitmapLabel2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.income"],[0],this.none_mul_income,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.mul_income"],[0],this.all_mul_income,"text");
	}
	var _proto = cookmainSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.scLock_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.scLock_i = function () {
		var t = new eui.Scroller();
		this.scLock = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.bounces = false;
		t.scrollPolicyH = "off";
		t.throwSpeed = 0.5;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.viewport = this.gpScroller_i();
		return t;
	};
	_proto.gpScroller_i = function () {
		var t = new eui.Group();
		this.gpScroller = t;
		t.anchorOffsetY = 0;
		t.height = 1346;
		t.x = 0;
		t.y = 154.55;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this.gpUpScence_i(),this._Rect1_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.gpUpScence_i = function () {
		var t = new eui.Group();
		this.gpUpScence = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf79207;
		t.height = 106;
		t.percentWidth = 100;
		t.x = 268;
		t.y = 463;
		return t;
	};
	_proto.gpHide_i = function () {
		var t = new eui.Group();
		this.gpHide = t;
		t.bottom = 0;
		t.height = 139;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect2_i(),this._Rect3_i(),this.shop_btn_i(),this.skill_btn_i(),this.double_btn_i(),this.cookbook_btn_i(),this.map_btn_i(),this.bigmap_dot_i(),this.upgrade_tip_i(),this.cookbook_dot_i(),this.gpUpDown_i(),this.changeRangeGroup_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xc76824;
		t.height = 106;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xeb8724;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.shop_btn_i = function () {
		var t = new cookMyButton();
		this.shop_btn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 51.5;
		t.left = 35;
		t.y = 84.5;
		t.skinName = cookmainSkin$Skin88;
		return t;
	};
	_proto.skill_btn_i = function () {
		var t = new cookMyButton();
		this.skill_btn = t;
		t.anchorOffsetX = 43.5;
		t.anchorOffsetY = 52;
		t.label = "";
		t.left = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 87;
		t.y = 86;
		t.skinName = cookmainSkin$Skin89;
		return t;
	};
	_proto.double_btn_i = function () {
		var t = new cookMyButton();
		this.double_btn = t;
		t.anchorOffsetX = 109;
		t.anchorOffsetY = 69;
		t.x = 376;
		t.y = 78;
		t.skinName = cookmainSkin$Skin90;
		return t;
	};
	_proto.cookbook_btn_i = function () {
		var t = new cookMyButton();
		this.cookbook_btn = t;
		t.anchorOffsetX = 43.5;
		t.anchorOffsetY = 52;
		t.label = "";
		t.right = 159;
		t.y = 85;
		t.skinName = cookmainSkin$Skin91;
		return t;
	};
	_proto.map_btn_i = function () {
		var t = new cookMyButton();
		this.map_btn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 51.5;
		t.right = 35;
		t.y = 85.5;
		t.skinName = cookmainSkin$Skin92;
		return t;
	};
	_proto.bigmap_dot_i = function () {
		var t = new eui.Image();
		this.bigmap_dot = t;
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.source = "red_dot_png";
		t.visible = false;
		t.x = 703;
		t.y = 47;
		return t;
	};
	_proto.upgrade_tip_i = function () {
		var t = new eui.Image();
		this.upgrade_tip = t;
		t.anchorOffsetX = 24;
		t.anchorOffsetY = 56;
		t.rotation = 25;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "upgrade_tips_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 222;
		t.y = 65;
		return t;
	};
	_proto.cookbook_dot_i = function () {
		var t = new eui.Image();
		this.cookbook_dot = t;
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.source = "red_dot_png";
		t.visible = false;
		t.x = 578;
		t.y = 47;
		return t;
	};
	_proto.gpUpDown_i = function () {
		var t = new eui.Group();
		this.gpUpDown = t;
		t.bottom = 234;
		t.height = 66;
		t.width = 82;
		t.x = 26;
		t.elementsContent = [this.imgIconDown_i(),this.imgIconUp_i()];
		return t;
	};
	_proto.imgIconDown_i = function () {
		var t = new eui.Image();
		this.imgIconDown = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = -1;
		t.source = "gpUpDown_icon_png";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		return t;
	};
	_proto.imgIconUp_i = function () {
		var t = new eui.Image();
		this.imgIconUp = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gpUpDown_icon_png";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		return t;
	};
	_proto.changeRangeGroup_i = function () {
		var t = new eui.Group();
		this.changeRangeGroup = t;
		t.height = 84;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 151;
		t.x = 599;
		t.y = -435;
		t.elementsContent = [this.changeRange_i(),this.range_text_i()];
		return t;
	};
	_proto.changeRange_i = function () {
		var t = new cookMyButton();
		this.changeRange = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 42;
		t.horizontalCenter = 0;
		t.label = "Button";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = cookmainSkin$Skin93;
		return t;
	};
	_proto.range_text_i = function () {
		var t = new eui.Label();
		this.range_text = t;
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 38;
		t.stroke = 2;
		t.strokeColor = 0xa44103;
		t.text = "×1";
		t.touchEnabled = false;
		t.verticalCenter = 12;
		return t;
	};
	_proto.top_group_i = function () {
		var t = new eui.Group();
		this.top_group = t;
		t.anchorOffsetY = 0;
		t.height = 234;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this.top_bg_group_i(),this._Group2_i()];
		return t;
	};
	_proto.top_bg_group_i = function () {
		var t = new eui.Group();
		this.top_bg_group = t;
		t.height = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect4_i(),this._Rect5_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xc66210;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 750;
		t.x = 0;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.bottom = 4;
		t.fillColor = 0xeb9124;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 750;
		t.x = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 234;
		t.width = 750;
		t.elementsContent = [this.doublea_i(),this.test2_i(),this.test1_i(),this.prop_boost_group_i(),this.speedup_boost_group_i(),this.outerring_group_i(),this.fd_btn_i(),this._Rect11_i(),this.avatarMask_i(),this.user_avatar_i()];
		return t;
	};
	_proto.doublea_i = function () {
		var t = new eui.Group();
		this.doublea = t;
		t.anchorOffsetX = 128;
		t.anchorOffsetY = 21;
		t.height = 42;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 256;
		t.x = 284;
		t.y = 39;
		t.elementsContent = [this._Rect6_i(),this.imgCoin_i(),this._BitmapLabel1_i(),this._Image1_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xa85c07;
		t.height = 42;
		t.verticalCenter = 0;
		t.width = 256;
		return t;
	};
	_proto.imgCoin_i = function () {
		var t = new eui.Image();
		this.imgCoin = t;
		t.height = 45;
		t.source = "coin1_png";
		t.verticalCenter = 0;
		t.width = 42;
		t.x = -14;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel1 = t;
		t.font = "commonText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = 2;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 26;
		t.source = "open_outerring_png";
		t.width = 25;
		t.x = 12;
		t.y = 22;
		return t;
	};
	_proto.test2_i = function () {
		var t = new eui.Group();
		this.test2 = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 24;
		t.height = 42;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 256;
		t.x = 236;
		t.y = 96;
		t.elementsContent = [this._Rect7_i(),this.imgMoney_i(),this._BitmapLabel2_i(),this._Image2_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xA85C07;
		t.height = 42;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 256;
		return t;
	};
	_proto.imgMoney_i = function () {
		var t = new eui.Image();
		this.imgMoney = t;
		t.source = "cash_png";
		t.verticalCenter = 0;
		t.x = -16;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel2 = t;
		t.font = "commonText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = 2;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.right = 3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "add_btn_icon_png";
		t.verticalCenter = 0;
		t.y = 3;
		return t;
	};
	_proto.test1_i = function () {
		var t = new eui.Group();
		this.test1 = t;
		t.anchorOffsetY = 21;
		t.height = 42;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.width = 256;
		t.x = 463;
		t.y = 39;
		t.elementsContent = [this._Rect8_i(),this._Image3_i(),this.none_mul_income_i(),this.all_mul_income_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xA85C07;
		t.height = 42;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 256;
		t.y = 80;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "secincome_icon_png";
		t.verticalCenter = 0;
		t.x = -17;
		return t;
	};
	_proto.none_mul_income_i = function () {
		var t = new eui.BitmapLabel();
		this.none_mul_income = t;
		t.font = "commonText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = 2;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.all_mul_income_i = function () {
		var t = new eui.BitmapLabel();
		this.all_mul_income = t;
		t.font = "commonText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = 2;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.prop_boost_group_i = function () {
		var t = new eui.Group();
		this.prop_boost_group = t;
		t.anchorOffsetY = 21;
		t.height = 42;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.width = 116;
		t.x = 463;
		t.y = 93;
		t.elementsContent = [this._Rect9_i(),this._Image4_i(),this.all_mul_text_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xA85C07;
		t.height = 42;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 116;
		t.y = 80;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "prop_icon_png";
		t.verticalCenter = 0;
		t.x = -21;
		return t;
	};
	_proto.all_mul_text_i = function () {
		var t = new eui.Label();
		this.all_mul_text = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.horizontalCenter = 11;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "未启动";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.x = -157;
		t.y = 34;
		return t;
	};
	_proto.speedup_boost_group_i = function () {
		var t = new eui.Group();
		this.speedup_boost_group = t;
		t.anchorOffsetY = 21;
		t.height = 42;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.width = 114;
		t.x = 605;
		t.y = 93;
		t.elementsContent = [this._Rect10_i(),this._Image5_i(),this.speedup_boost_text_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xA85C07;
		t.height = 42;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 116;
		t.y = 80;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "speedup_icon_png";
		t.verticalCenter = 0;
		t.x = -21;
		return t;
	};
	_proto.speedup_boost_text_i = function () {
		var t = new eui.Label();
		this.speedup_boost_text = t;
		t.bold = true;
		t.horizontalCenter = 6;
		t.size = 24;
		t.text = "未启动";
		t.verticalCenter = 0;
		return t;
	};
	_proto.outerring_group_i = function () {
		var t = new eui.Group();
		this.outerring_group = t;
		t.height = 84;
		t.right = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 150;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.gpChest_i(),this.gpRank_i(),this.btnUpSkill_i(),this.gpWheel_i(),this.gpSign_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.horizontalAlign = "right";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.gpChest_i = function () {
		var t = new eui.Group();
		this.gpChest = t;
		t.height = 84;
		t.width = 84;
		t.y = -1;
		t.elementsContent = [this.chest_glow_i(),this._cookMyButton1_i(),this.gpChestsNum_i()];
		return t;
	};
	_proto.chest_glow_i = function () {
		var t = new eui.Image();
		this.chest_glow = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 44;
		t.horizontalCenter = 0;
		t.source = "glow_rotate_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto._cookMyButton1_i = function () {
		var t = new cookMyButton();
		t.anchorOffsetX = 32.5;
		t.anchorOffsetY = 40;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = cookmainSkin$Skin94;
		return t;
	};
	_proto.gpChestsNum_i = function () {
		var t = new eui.Group();
		this.gpChestsNum = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 55;
		t.y = -9.99;
		t.elementsContent = [this._Image6_i(),this.lbChestsNum_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 2.5;
		t.scaleY = 2.5;
		t.source = "red_dot_png";
		return t;
	};
	_proto.lbChestsNum_i = function () {
		var t = new eui.Label();
		this.lbChestsNum = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "10";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gpRank_i = function () {
		var t = new eui.Group();
		this.gpRank = t;
		t.height = 84;
		t.visible = false;
		t.width = 84;
		t.x = 40;
		t.y = 39;
		t.elementsContent = [this.rank_glow_i(),this.openRank_i()];
		return t;
	};
	_proto.rank_glow_i = function () {
		var t = new eui.Image();
		this.rank_glow = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 44;
		t.horizontalCenter = 0;
		t.source = "glow_rotate_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.openRank_i = function () {
		var t = new cookMyButton();
		this.openRank = t;
		t.anchorOffsetX = 32.5;
		t.anchorOffsetY = 40;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.visible = false;
		t.skinName = cookmainSkin$Skin95;
		return t;
	};
	_proto.btnUpSkill_i = function () {
		var t = new eui.Group();
		this.btnUpSkill = t;
		t.height = 84;
		t.width = 84;
		t.x = 10;
		t.y = 9;
		t.elementsContent = [this.skill_glow_i(),this.skill_point_btn_i()];
		return t;
	};
	_proto.skill_glow_i = function () {
		var t = new eui.Image();
		this.skill_glow = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 44;
		t.horizontalCenter = 0;
		t.source = "glow_rotate_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.skill_point_btn_i = function () {
		var t = new cookMyButton();
		this.skill_point_btn = t;
		t.anchorOffsetX = 32.5;
		t.anchorOffsetY = 40;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = cookmainSkin$Skin96;
		return t;
	};
	_proto.gpWheel_i = function () {
		var t = new eui.Group();
		this.gpWheel = t;
		t.height = 84;
		t.width = 84;
		t.x = 20;
		t.y = 19;
		t.elementsContent = [this.wheel_glow_i(),this.openWheel_i(),this.wheel_dot_i()];
		return t;
	};
	_proto.wheel_glow_i = function () {
		var t = new eui.Image();
		this.wheel_glow = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 44;
		t.horizontalCenter = 0;
		t.source = "glow_rotate_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.openWheel_i = function () {
		var t = new cookMyButton();
		this.openWheel = t;
		t.anchorOffsetX = 32.5;
		t.anchorOffsetY = 40;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = cookmainSkin$Skin97;
		return t;
	};
	_proto.wheel_dot_i = function () {
		var t = new eui.Image();
		this.wheel_dot = t;
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "red_dot_png";
		t.x = 74;
		t.y = 10;
		return t;
	};
	_proto.gpSign_i = function () {
		var t = new eui.Group();
		this.gpSign = t;
		t.height = 84;
		t.width = 84;
		t.x = 30;
		t.y = 29;
		t.elementsContent = [this.sign_glow_i(),this.openSign_i(),this.sign_dot_i()];
		return t;
	};
	_proto.sign_glow_i = function () {
		var t = new eui.Image();
		this.sign_glow = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 44;
		t.horizontalCenter = 0;
		t.source = "glow_rotate_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.openSign_i = function () {
		var t = new cookMyButton();
		this.openSign = t;
		t.anchorOffsetX = 32.5;
		t.anchorOffsetY = 40;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = cookmainSkin$Skin98;
		return t;
	};
	_proto.sign_dot_i = function () {
		var t = new eui.Image();
		this.sign_dot = t;
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "red_dot_png";
		t.x = 74;
		t.y = 10;
		return t;
	};
	_proto.fd_btn_i = function () {
		var t = new eui.Image();
		this.fd_btn = t;
		t.left = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "feedback_btn_png";
		t.width = 80;
		t.x = 10;
		t.y = 144;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 128;
		t.ellipseWidth = 128;
		t.fillColor = 0xa94c00;
		t.height = 128;
		t.width = 128;
		t.x = 6;
		t.y = 2;
		return t;
	};
	_proto.avatarMask_i = function () {
		var t = new eui.Rect();
		this.avatarMask = t;
		t.ellipseHeight = 120;
		t.ellipseWidth = 120;
		t.height = 120;
		t.width = 120;
		t.x = 10;
		t.y = 6;
		return t;
	};
	_proto.user_avatar_i = function () {
		var t = new eui.Image();
		this.user_avatar = t;
		t.height = 120;
		t.mask = this.avatarMask;
		t.source = "default_avatar_png";
		t.touchEnabled = true;
		t.width = 120;
		t.x = 10;
		t.y = 6;
		return t;
	};
	_proto.gpMission_i = function () {
		var t = new eui.Group();
		this.gpMission = t;
		t.anchorOffsetX = 158.5;
		t.anchorOffsetY = 38.5;
		t.bottom = 152;
		t.x = 158.5;
		t.elementsContent = [this.isFinishedImg_i(),this.mission_img_i(),this.mission_num_i(),this.missionLb1_i(),this.missionLb2_i()];
		return t;
	};
	_proto.isFinishedImg_i = function () {
		var t = new eui.Image();
		this.isFinishedImg = t;
		t.scale9Grid = new egret.Rectangle(39,10,239,62);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mission_finish_bg_png";
		t.width = 317;
		t.x = 0;
		return t;
	};
	_proto.mission_img_i = function () {
		var t = new eui.Image();
		this.mission_img = t;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.source = "coin1_png";
		t.top = 38;
		t.visible = false;
		t.x = 168;
		return t;
	};
	_proto.mission_num_i = function () {
		var t = new eui.Label();
		this.mission_num = t;
		t.size = 22;
		t.text = "×2";
		t.visible = false;
		t.x = 213;
		t.y = 41;
		return t;
	};
	_proto.missionLb1_i = function () {
		var t = new eui.Label();
		this.missionLb1 = t;
		t.horizontalCenter = 21;
		t.size = 24;
		t.text = "";
		t.y = 12;
		return t;
	};
	_proto.missionLb2_i = function () {
		var t = new eui.Label();
		this.missionLb2 = t;
		t.horizontalCenter = 21;
		t.size = 24;
		t.text = "";
		t.textColor = 0xff1414;
		t.y = 40;
		return t;
	};
	_proto.openMission_i = function () {
		var t = new eui.Group();
		this.openMission = t;
		t.bottom = 152;
		t.height = 77;
		t.touchEnabled = true;
		t.width = 86;
		return t;
	};
	_proto.rectLoading_i = function () {
		var t = new eui.Rect();
		this.rectLoading = t;
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		t.visible = false;
		return t;
	};
	_proto.gpBoss_i = function () {
		var t = new eui.Group();
		this.gpBoss = t;
		t.touchEnabled = true;
		t.x = 31;
		t.y = 914;
		t.elementsContent = [this.imgBg_i(),this.lbTitle_i(),this.imIcon_i(),this.imgRed_i()];
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.horizontalCenter = -5.5;
		t.source = "title_c1_png";
		return t;
	};
	_proto.lbTitle_i = function () {
		var t = new eui.Label();
		this.lbTitle = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x5A4118;
		t.text = "广州市小跟班";
		t.textColor = 0xFFF118;
		t.verticalCenter = 0;
		t.x = 127;
		return t;
	};
	_proto.imIcon_i = function () {
		var t = new eui.Image();
		this.imIcon = t;
		t.left = -26;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "title_i4_png";
		t.y = 4;
		return t;
	};
	_proto.imgRed_i = function () {
		var t = new eui.Image();
		this.imgRed = t;
		t.left = 258;
		t.source = "red_dot_png";
		t.y = -6;
		return t;
	};
	return cookmainSkin;
})(eui.Skin);generateEUI.paths['resource/ui/mission/MissionSkin.exml'] = window.cookMissionSkin = (function (_super) {
	__extends(cookMissionSkin, _super);
	var cookMissionSkin$Skin99 = 	(function (_super) {
		__extends(cookMissionSkin$Skin99, _super);
		function cookMissionSkin$Skin99() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookMissionSkin$Skin99.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookMissionSkin$Skin99;
	})(eui.Skin);

	var cookMissionSkin$Skin100 = 	(function (_super) {
		__extends(cookMissionSkin$Skin100, _super);
		function cookMissionSkin$Skin100() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookMissionSkin$Skin100.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 108;
			t.scale9Grid = new egret.Rectangle(42,21,90,24);
			t.source = "yellow_btn_png";
			t.width = 320;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "mission_go_png";
			t.y = 29;
			return t;
		};
		return cookMissionSkin$Skin100;
	})(eui.Skin);

	var cookMissionSkin$Skin101 = 	(function (_super) {
		__extends(cookMissionSkin$Skin101, _super);
		function cookMissionSkin$Skin101() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookMissionSkin$Skin101.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 108;
			t.scale9Grid = new egret.Rectangle(42,21,90,24);
			t.source = "red_btn_png";
			t.width = 320;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "mission_get_png";
			t.y = 29;
			return t;
		};
		return cookMissionSkin$Skin101;
	})(eui.Skin);

	function cookMissionSkin() {
		_super.call(this);
		this.skinParts = ["title","detail","target","reward_cash","reward_coin","reward_num","reward_group","closeBtn","getBtn","goBtn"];
		
		this.elementsContent = [this._Group6_i()];
	}
	var _proto = cookMissionSkin.prototype;

	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Group4_i(),this.closeBtn_i(),this._Group5_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 12;
		t.ellipseWidth = 12;
		t.fillColor = 0xf6f6e6;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.width = 652;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "popup_header_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "mission_banner_png";
		t.top = 36;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.bottom = 169;
		t.horizontalCenter = 0;
		t.top = 156;
		t.width = 551;
		t.elementsContent = [this._Image3_i(),this._Group3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(37,26,224,156);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_item_bg_png";
		t.width = 551;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.title_i(),this.detail_i(),this._Group1_i(),this._Label2_i(),this.reward_group_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 17;
		t.paddingBottom = 33;
		t.paddingLeft = 56;
		t.paddingRight = 56;
		t.paddingTop = 33;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.stroke = 2;
		t.strokeColor = 0x835000;
		t.text = "经营任务";
		t.x = 55;
		t.y = 33;
		return t;
	};
	_proto.detail_i = function () {
		var t = new eui.Label();
		this.detail = t;
		t.bold = true;
		t.left = 56;
		t.lineSpacing = 4;
		t.right = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "";
		t.textColor = 0xa37c3e;
		t.width = 440;
		t.x = 56;
		t.y = 86;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 56;
		t.y = 129;
		t.elementsContent = [this._Label1_i(),this.target_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.lineSpacing = 4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "目标：";
		t.textColor = 0xa37c3e;
		return t;
	};
	_proto.target_i = function () {
		var t = new eui.Label();
		this.target = t;
		t.bold = true;
		t.lineSpacing = 4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "0/1";
		t.textColor = 0xa37c3e;
		t.x = 87;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.left = 56;
		t.lineSpacing = 4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "奖励：";
		t.textColor = 0xA37C3E;
		t.x = 56;
		t.y = 202;
		return t;
	};
	_proto.reward_group_i = function () {
		var t = new eui.Group();
		this.reward_group = t;
		t.height = 104;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 440;
		t.x = 56;
		t.y = 241;
		t.elementsContent = [this._Rect2_i(),this.reward_cash_i(),this.reward_coin_i(),this._Group2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 8;
		t.ellipseWidth = 8;
		t.fillColor = 0xe5dfce;
		t.height = 104;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 440;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.reward_cash_i = function () {
		var t = new eui.Image();
		this.reward_cash = t;
		t.height = 82;
		t.source = "prop_cash_m_png";
		t.visible = false;
		t.width = 106;
		t.x = 13;
		t.y = 12;
		return t;
	};
	_proto.reward_coin_i = function () {
		var t = new eui.Image();
		this.reward_coin = t;
		t.height = 82;
		t.source = "coin1_png";
		t.width = 80;
		t.x = 25;
		t.y = 12;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 28;
		t.left = 130;
		t.verticalCenter = 0;
		t.elementsContent = [this.reward_num_i()];
		return t;
	};
	_proto.reward_num_i = function () {
		var t = new eui.Label();
		this.reward_num = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 45;
		t.text = "X1";
		t.textColor = 0xa37c3e;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 609;
		t.y = 53;
		t.skinName = cookMissionSkin$Skin99;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 28;
		t.height = 108;
		t.horizontalCenter = 0;
		t.width = 320;
		t.elementsContent = [this.getBtn_i(),this.goBtn_i()];
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new cookMyButton();
		this.getBtn = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 54;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = cookMissionSkin$Skin100;
		return t;
	};
	_proto.goBtn_i = function () {
		var t = new cookMyButton();
		this.goBtn = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 54;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = cookMissionSkin$Skin101;
		return t;
	};
	return cookMissionSkin;
})(eui.Skin);generateEUI.paths['resource/ui/NonsenseSkin.exml'] = window.cookNonsenseSkin = (function (_super) {
	__extends(cookNonsenseSkin, _super);
	function cookNonsenseSkin() {
		_super.call(this);
		this.skinParts = ["imgFrame","imgText","imgTip","gpActionL","imgPeople","gpActionR","gpNoTip","gpRoot"];
		
		this.height = 1344;
		this.width = 750;
		this.elementsContent = [this.gpRoot_i()];
	}
	var _proto = cookNonsenseSkin.prototype;

	_proto.gpRoot_i = function () {
		var t = new eui.Group();
		this.gpRoot = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scrollEnabled = false;
		t.top = 0;
		t.touchEnabled = true;
		t.elementsContent = [this.gpNoTip_i()];
		return t;
	};
	_proto.gpNoTip_i = function () {
		var t = new eui.Group();
		this.gpNoTip = t;
		t.anchorOffsetX = 0;
		t.bottom = 100;
		t.touchEnabled = false;
		t.width = 607;
		t.x = 65;
		t.elementsContent = [this.gpActionL_i(),this.gpActionR_i()];
		return t;
	};
	_proto.gpActionL_i = function () {
		var t = new eui.Group();
		this.gpActionL = t;
		t.elementsContent = [this.imgFrame_i(),this.imgText_i(),this.imgTip_i()];
		return t;
	};
	_proto.imgFrame_i = function () {
		var t = new eui.Image();
		this.imgFrame = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "s_bg_png";
		t.touchEnabled = false;
		t.x = -16.000000000000007;
		t.y = -24;
		return t;
	};
	_proto.imgText_i = function () {
		var t = new eui.Image();
		this.imgText = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tips03_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgTip_i = function () {
		var t = new eui.Image();
		this.imgTip = t;
		t.right = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "font01_png";
		t.touchEnabled = false;
		t.x = 212.00000000000006;
		t.y = 164;
		return t;
	};
	_proto.gpActionR_i = function () {
		var t = new eui.Group();
		this.gpActionR = t;
		t.elementsContent = [this.imgPeople_i()];
		return t;
	};
	_proto.imgPeople_i = function () {
		var t = new eui.Image();
		this.imgPeople = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "s_boss_png";
		t.touchEnabled = false;
		t.x = 502;
		t.y = -221.9999999999999;
		return t;
	};
	return cookNonsenseSkin;
})(eui.Skin);generateEUI.paths['resource/ui/popup/CurIdxDisPopSkin.exml'] = window.cookCurIdxDisPopSkin = (function (_super) {
	__extends(cookCurIdxDisPopSkin, _super);
	function cookCurIdxDisPopSkin() {
		_super.call(this);
		this.skinParts = ["food_img","food_group"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookCurIdxDisPopSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 750;
		t.elementsContent = [this.food_group_i()];
		return t;
	};
	_proto.food_group_i = function () {
		var t = new eui.Group();
		this.food_group = t;
		t.anchorOffsetX = 192;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 384;
		t.elementsContent = [this._Image1_i(),this.food_img_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "CurIdxDisPop_png";
		return t;
	};
	_proto.food_img_i = function () {
		var t = new eui.Image();
		this.food_img = t;
		t.bottom = 17;
		t.left = 23;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "f_img_10_png";
		return t;
	};
	return cookCurIdxDisPopSkin;
})(eui.Skin);generateEUI.paths['resource/ui/popup/DoubleIncomeSkin.exml'] = window.cookDoubleIncomeSkin = (function (_super) {
	__extends(cookDoubleIncomeSkin, _super);
	var cookDoubleIncomeSkin$Skin102 = 	(function (_super) {
		__extends(cookDoubleIncomeSkin$Skin102, _super);
		function cookDoubleIncomeSkin$Skin102() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookDoubleIncomeSkin$Skin102.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookDoubleIncomeSkin$Skin102;
	})(eui.Skin);

	var cookDoubleIncomeSkin$Skin103 = 	(function (_super) {
		__extends(cookDoubleIncomeSkin$Skin103, _super);
		function cookDoubleIncomeSkin$Skin103() {
			_super.call(this);
			this.skinParts = ["thumb"];
			
			this.elementsContent = [this._Image1_i(),this.thumb_i()];
		}
		var _proto = cookDoubleIncomeSkin$Skin103.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(25,25,1,1);
			t.source = "item_big_progress_down_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.thumb_i = function () {
			var t = new eui.Image();
			this.thumb = t;
			t.bottom = 4;
			t.left = 4;
			t.right = 4;
			t.scale9Grid = new egret.Rectangle(24,22,1,1);
			t.source = "item_big_progress_png";
			t.top = 4;
			return t;
		};
		return cookDoubleIncomeSkin$Skin103;
	})(eui.Skin);

	var cookDoubleIncomeSkin$Skin104 = 	(function (_super) {
		__extends(cookDoubleIncomeSkin$Skin104, _super);
		function cookDoubleIncomeSkin$Skin104() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookDoubleIncomeSkin$Skin104.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(124,54,4,5);
			t.source = "greenBtn_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.left = 30;
			t.source = "shareIcon1_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 30;
			t.source = "double_time_text_png";
			t.verticalCenter = 0;
			return t;
		};
		return cookDoubleIncomeSkin$Skin104;
	})(eui.Skin);

	var cookDoubleIncomeSkin$Skin105 = 	(function (_super) {
		__extends(cookDoubleIncomeSkin$Skin105, _super);
		function cookDoubleIncomeSkin$Skin105() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookDoubleIncomeSkin$Skin105.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(124,54,4,5);
			t.source = "greenBtn_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.left = 30;
			t.source = "playIcon1_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 30;
			t.source = "double_time_text_png";
			t.verticalCenter = 0;
			return t;
		};
		return cookDoubleIncomeSkin$Skin105;
	})(eui.Skin);

	function cookDoubleIncomeSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","time_group","timeBar","store_img","store_name_text","shareBtn","videoBtn","container","allGroup"];
		
		this.elementsContent = [this.allGroup_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.time"],[0],this._Label2,"text");
	}
	var _proto = cookDoubleIncomeSkin.prototype;

	_proto.allGroup_i = function () {
		var t = new eui.Group();
		this.allGroup = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.container_i()];
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.height = 836;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 652;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this.closeBtn_i(),this._Label1_i(),this._Group2_i(),this.shareBtn_i(),this.videoBtn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 39;
		t.ellipseWidth = 53;
		t.fillColor = 0xf6f6e6;
		t.percentHeight = 100;
		t.horizontalCenter = -1;
		t.percentWidth = 100;
		t.y = -1;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 124;
		t.horizontalCenter = 0;
		t.source = "research_restaurant_bg_png";
		t.width = 586;
		t.y = -28;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "double_img_png";
		t.y = 117;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.horizontalCenter = 213.5;
		t.skinName = "cookMyButtonSkin";
		t.top = -9;
		t.skinName = cookDoubleIncomeSkin$Skin102;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "双倍收益";
		t.top = -6;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 279;
		t.horizontalCenter = 0;
		t.width = 592;
		t.y = 402;
		t.elementsContent = [this.time_group_i(),this.timeBar_i(),this._Group1_i(),this.store_name_text_i(),this._Label3_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto.time_group_i = function () {
		var t = new eui.Group();
		this.time_group = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 219;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.source = "time_icon_png";
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.size = 32;
		t.textColor = 0x57596d;
		t.verticalCenter = 0;
		t.x = 57;
		return t;
	};
	_proto.timeBar_i = function () {
		var t = new eui.ProgressBar();
		this.timeBar = t;
		t.horizontalCenter = 0;
		t.maximum = 3600;
		t.scaleX = 1;
		t.scaleY = 1;
		t.value = 300;
		t.width = 440;
		t.x = 76;
		t.y = 152;
		t.skinName = cookDoubleIncomeSkin$Skin103;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 114;
		t.width = 114;
		t.x = 28;
		t.y = 17;
		t.elementsContent = [this._Rect2_i(),this.store_img_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 20;
		t.fillColor = 0xc4ba9f;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.store_img_i = function () {
		var t = new eui.Image();
		this.store_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.25;
		t.scaleY = 0.25;
		t.source = "store_icon_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.store_name_text_i = function () {
		var t = new eui.Label();
		this.store_name_text = t;
		t.size = 36;
		t.text = "在XX小时内，为XX餐厅";
		t.textColor = 0x755f43;
		t.x = 163;
		t.y = 35;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "增加";
		t.textColor = 0x755f43;
		t.x = 163;
		t.y = 85;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "2倍收入";
		t.textColor = 0xf65100;
		t.x = 238;
		t.y = 85;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "(包含道具)";
		t.textColor = 0x755f43;
		t.x = 369;
		t.y = 94;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new cookMyButton();
		this.shareBtn = t;
		t.anchorOffsetX = 205;
		t.anchorOffsetY = 55.5;
		t.height = 111;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 410;
		t.y = 756.5;
		t.skinName = cookDoubleIncomeSkin$Skin104;
		return t;
	};
	_proto.videoBtn_i = function () {
		var t = new cookMyButton();
		this.videoBtn = t;
		t.anchorOffsetX = 205;
		t.anchorOffsetY = 55.5;
		t.height = 111;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 410;
		t.y = 756.5;
		t.skinName = cookDoubleIncomeSkin$Skin105;
		return t;
	};
	return cookDoubleIncomeSkin;
})(eui.Skin);generateEUI.paths['resource/ui/popup/HtpSkin.exml'] = window.cookHtpSkin = (function (_super) {
	__extends(cookHtpSkin, _super);
	var cookHtpSkin$Skin106 = 	(function (_super) {
		__extends(cookHtpSkin$Skin106, _super);
		function cookHtpSkin$Skin106() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookHtpSkin$Skin106.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookHtpSkin$Skin106;
	})(eui.Skin);

	function cookHtpSkin() {
		_super.call(this);
		this.skinParts = ["close_btn"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookHtpSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -22;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.close_btn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_htp_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new cookMyButton();
		this.close_btn = t;
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 27.5;
		t.horizontalCenter = -308;
		t.label = "";
		t.verticalCenter = -611;
		t.skinName = cookHtpSkin$Skin106;
		return t;
	};
	return cookHtpSkin;
})(eui.Skin);generateEUI.paths['resource/ui/popup/NotEnoughSkin.exml'] = window.cookNotEnoughSkin = (function (_super) {
	__extends(cookNotEnoughSkin, _super);
	var cookNotEnoughSkin$Skin107 = 	(function (_super) {
		__extends(cookNotEnoughSkin$Skin107, _super);
		function cookNotEnoughSkin$Skin107() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookNotEnoughSkin$Skin107.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookNotEnoughSkin$Skin107;
	})(eui.Skin);

	function cookNotEnoughSkin() {
		_super.call(this);
		this.skinParts = ["shareBtn","closeBtn"];
		
		this.elementsContent = [this._Group4_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.type"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.image"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.value"],[0],this._Label1,"text");
	}
	var _proto = cookNotEnoughSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Group3_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 1334;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Group1_i(),this._Group2_i(),this.shareBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf6f6e6;
		t.height = 722;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 652;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "popup_header_png";
		t.verticalCenter = -335;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -345;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 414;
		t.elementsContent = [this._Rect2_i(),this._Image3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 300;
		t.fillColor = 0xe5dfce;
		t.height = 300;
		t.width = 300;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 685;
		t.elementsContent = [this._Rect3_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 60;
		t.fillColor = 0xab8952;
		t.height = 60;
		t.width = 240;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new eui.Group();
		this.shareBtn = t;
		t.height = 99;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.y = 800;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(32,13,196,85);
		t.source = "greenBtn_bg_png";
		t.width = 400;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "shareIcon1_png";
		t.x = 97;
		t.y = 19.35;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "shareBtn_text_png";
		t.x = 157;
		t.y = 24.02;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.right = 64;
		t.skinName = "cookMyButtonSkin";
		t.top = 292;
		t.skinName = cookNotEnoughSkin$Skin107;
		return t;
	};
	return cookNotEnoughSkin;
})(eui.Skin);generateEUI.paths['resource/ui/popup/OfflineSkin.exml'] = window.cookOfflineSkin = (function (_super) {
	__extends(cookOfflineSkin, _super);
	var cookOfflineSkin$Skin108 = 	(function (_super) {
		__extends(cookOfflineSkin$Skin108, _super);
		function cookOfflineSkin$Skin108() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookOfflineSkin$Skin108.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "greenBtn_bg_png";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "shareIcon1_png";
			t.x = 20;
			t.y = 29;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.source = "double_collecttext_png";
			t.x = 80;
			t.y = 33;
			return t;
		};
		return cookOfflineSkin$Skin108;
	})(eui.Skin);

	var cookOfflineSkin$Skin109 = 	(function (_super) {
		__extends(cookOfflineSkin$Skin109, _super);
		function cookOfflineSkin$Skin109() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookOfflineSkin$Skin109.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "greenBtn_bg_png";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "playIcon1_png";
			t.x = 20;
			t.y = 29;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.source = "double_collecttext_png";
			t.x = 80;
			t.y = 33;
			return t;
		};
		return cookOfflineSkin$Skin109;
	})(eui.Skin);

	var cookOfflineSkin$Skin110 = 	(function (_super) {
		__extends(cookOfflineSkin$Skin110, _super);
		function cookOfflineSkin$Skin110() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookOfflineSkin$Skin110.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 110;
			t.scale9Grid = new egret.Rectangle(20,8,120,52);
			t.source = "yellow_btn_png";
			t.width = 180;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "collect_text_png";
			t.verticalCenter = -4;
			t.x = 52;
			return t;
		};
		return cookOfflineSkin$Skin110;
	})(eui.Skin);

	var cookOfflineSkin$Skin111 = 	(function (_super) {
		__extends(cookOfflineSkin$Skin111, _super);
		function cookOfflineSkin$Skin111() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookOfflineSkin$Skin111.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookOfflineSkin$Skin111;
	})(eui.Skin);

	var cookOfflineSkin$Skin112 = 	(function (_super) {
		__extends(cookOfflineSkin$Skin112, _super);
		function cookOfflineSkin$Skin112() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookOfflineSkin$Skin112.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scale9Grid = new egret.Rectangle(32,13,196,85);
			t.source = "greenBtn_bg_png";
			t.width = 410;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "shareIcon1_png";
			t.x = 70;
			t.y = 29;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.horizontalCenter = 0;
			t.scaleX = 1;
			t.scaleY = 1;
			t.size = 46;
			t.stroke = 2;
			t.strokeColor = 0x298000;
			t.text = "收集X5";
			t.verticalCenter = -5;
			return t;
		};
		return cookOfflineSkin$Skin112;
	})(eui.Skin);

	var cookOfflineSkin$Skin113 = 	(function (_super) {
		__extends(cookOfflineSkin$Skin113, _super);
		function cookOfflineSkin$Skin113() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookOfflineSkin$Skin113.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scale9Grid = new egret.Rectangle(32,13,196,85);
			t.source = "greenBtn_bg_png";
			t.width = 410;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "playIcon1_png";
			t.x = 70;
			t.y = 29;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.horizontalCenter = 0;
			t.scaleX = 1;
			t.scaleY = 1;
			t.size = 46;
			t.stroke = 2;
			t.strokeColor = 0x298000;
			t.text = "收集X5";
			t.verticalCenter = -5;
			return t;
		};
		return cookOfflineSkin$Skin113;
	})(eui.Skin);

	var cookOfflineSkin$Skin114 = 	(function (_super) {
		__extends(cookOfflineSkin$Skin114, _super);
		function cookOfflineSkin$Skin114() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookOfflineSkin$Skin114.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		return cookOfflineSkin$Skin114;
	})(eui.Skin);

	function cookOfflineSkin() {
		_super.call(this);
		this.skinParts = ["time_group","chest_text","chest_list","chest_group","text_group","coin_img","store_img","shareBtn","videoBtn","collectBtn","closeBtn","allGroup","time_group0","text_group1","coin_img_again","store_img0","shareAgain","videoAgain","closeBtn0","againGroup"];
		
		this.elementsContent = [this._Group5_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.time"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.reward"],[0],this._BitmapLabel1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.time"],[0],this._Label6,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.reward_again"],[0],this._BitmapLabel2,"text");
	}
	var _proto = cookOfflineSkin.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.allGroup_i(),this.againGroup_i()];
		return t;
	};
	_proto.allGroup_i = function () {
		var t = new eui.Group();
		this.allGroup = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 722;
		t.horizontalCenter = 0;
		t.width = 592;
		t.y = 273;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Label1_i(),this._Label2_i(),this.time_group_i(),this.chest_group_i(),this.text_group_i(),this.coin_img_i(),this.store_img_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 39;
		t.ellipseWidth = 53;
		t.fillColor = 0xf6f6e6;
		t.height = 787;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0x57596d;
		t.top = 0;
		t.width = 592;
		t.x = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 124;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "research_restaurant_bg_png";
		t.width = 586;
		t.x = 3;
		t.y = -30;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 46;
		t.text = "离线提醒";
		t.x = 204;
		t.y = -5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 38;
		t.text = "厨师在你离开的时侯很努力工作";
		t.textColor = 0x755f43;
		t.x = 30;
		t.y = 409;
		return t;
	};
	_proto.time_group_i = function () {
		var t = new eui.Group();
		this.time_group = t;
		t.height = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 27;
		t.y = 467;
		t.elementsContent = [this._Rect2_i(),this._Image2_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 40;
		t.fillColor = 0xe5dfce;
		t.height = 40;
		t.left = 25;
		t.right = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.source = "time_icon_png";
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.left = 52;
		t.right = 10;
		t.size = 32;
		t.textColor = 0x57596d;
		t.verticalCenter = 0;
		return t;
	};
	_proto.chest_group_i = function () {
		var t = new eui.Group();
		this.chest_group = t;
		t.height = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 27;
		t.y = 537;
		t.elementsContent = [this.chest_text_i(),this.chest_list_i()];
		return t;
	};
	_proto.chest_text_i = function () {
		var t = new eui.Label();
		this.chest_text = t;
		t.bold = true;
		t.size = 24;
		t.text = "获得：";
		t.textColor = 0x755f43;
		return t;
	};
	_proto.chest_list_i = function () {
		var t = new eui.Group();
		this.chest_list = t;
		t.y = 35;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.text_group_i = function () {
		var t = new eui.Group();
		this.text_group = t;
		t.right = 55;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 178;
		t.y = 310;
		t.elementsContent = [this._Rect3_i(),this._BitmapLabel1_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 64;
		t.ellipseWidth = 64;
		t.fillColor = 0xAB8952;
		t.height = 54;
		t.percentWidth = 100;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel1 = t;
		t.font = "commonText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = 2;
		t.scaleX = 1.2;
		t.scaleY = 1.1;
		t.verticalCenter = 0;
		return t;
	};
	_proto.coin_img_i = function () {
		var t = new eui.Image();
		this.coin_img = t;
		t.height = 129;
		t.right = 85;
		t.source = "coin1_png";
		t.width = 123;
		t.y = 176;
		return t;
	};
	_proto.store_img_i = function () {
		var t = new eui.Image();
		this.store_img = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "store_icon_1_png";
		t.x = 56;
		t.y = 162;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 111;
		t.horizontalCenter = -1;
		t.width = 472;
		t.y = 923;
		t.elementsContent = [this.shareBtn_i(),this.videoBtn_i(),this.collectBtn_i()];
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new cookMyButton();
		this.shareBtn = t;
		t.anchorOffsetX = 130;
		t.anchorOffsetY = 53;
		t.visible = false;
		t.x = 128;
		t.y = 53;
		t.skinName = cookOfflineSkin$Skin108;
		return t;
	};
	_proto.videoBtn_i = function () {
		var t = new cookMyButton();
		this.videoBtn = t;
		t.anchorOffsetX = 130;
		t.anchorOffsetY = 53;
		t.visible = false;
		t.x = 128;
		t.y = 53;
		t.skinName = cookOfflineSkin$Skin109;
		return t;
	};
	_proto.collectBtn_i = function () {
		var t = new cookMyButton();
		this.collectBtn = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 53;
		t.x = 236;
		t.y = 53;
		t.skinName = cookOfflineSkin$Skin110;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.skinName = "cookMyButtonSkin";
		t.x = 591;
		t.y = 289;
		t.skinName = cookOfflineSkin$Skin111;
		return t;
	};
	_proto.againGroup_i = function () {
		var t = new eui.Group();
		this.againGroup = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 750;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this._Group3_i(),this._Group4_i(),this.closeBtn0_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 722;
		t.horizontalCenter = 0;
		t.width = 592;
		t.y = 273;
		t.elementsContent = [this._Rect4_i(),this._Image3_i(),this._Label4_i(),this._Label5_i(),this.time_group0_i(),this.text_group1_i(),this.coin_img_again_i(),this.store_img0_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 39;
		t.ellipseWidth = 53;
		t.fillColor = 0xF6F6E6;
		t.height = 722;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0x57596D;
		t.width = 592;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 124;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "research_restaurant_bg_png";
		t.width = 586;
		t.x = 3;
		t.y = -30;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 46;
		t.text = "离线提醒";
		t.x = 204;
		t.y = -5;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 38;
		t.text = "厨师在你离开的时侯很努力工作";
		t.textColor = 0x755F43;
		t.x = 30;
		t.y = 409;
		return t;
	};
	_proto.time_group0_i = function () {
		var t = new eui.Group();
		this.time_group0 = t;
		t.height = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 27;
		t.y = 467;
		t.elementsContent = [this._Rect5_i(),this._Image4_i(),this._Label6_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 40;
		t.fillColor = 0xE5DFCE;
		t.height = 40;
		t.left = 25;
		t.right = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.source = "time_icon_png";
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.left = 52;
		t.right = 10;
		t.size = 32;
		t.textColor = 0x57596D;
		t.verticalCenter = 0;
		return t;
	};
	_proto.text_group1_i = function () {
		var t = new eui.Group();
		this.text_group1 = t;
		t.right = 55;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 178;
		t.y = 310;
		t.elementsContent = [this._Rect6_i(),this._BitmapLabel2_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 60;
		t.fillColor = 0xAB8952;
		t.height = 54;
		t.percentWidth = 100;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel2 = t;
		t.font = "commonText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = 2;
		t.scaleX = 1.2;
		t.scaleY = 1.1;
		t.verticalCenter = 0;
		return t;
	};
	_proto.coin_img_again_i = function () {
		var t = new eui.Image();
		this.coin_img_again = t;
		t.height = 129;
		t.right = 85;
		t.source = "prop_coin_s_png";
		t.width = 123;
		t.y = 176;
		return t;
	};
	_proto.store_img0_i = function () {
		var t = new eui.Image();
		this.store_img0 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "store_icon_1_png";
		t.x = 56;
		t.y = 162;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 111;
		t.horizontalCenter = 0;
		t.width = 472;
		t.y = 844;
		t.elementsContent = [this.shareAgain_i(),this.videoAgain_i(),this._Image5_i()];
		return t;
	};
	_proto.shareAgain_i = function () {
		var t = new cookMyButton();
		this.shareAgain = t;
		t.anchorOffsetX = 205;
		t.anchorOffsetY = 55;
		t.horizontalCenter = 0;
		t.label = "收集X5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.skinName = cookOfflineSkin$Skin112;
		return t;
	};
	_proto.videoAgain_i = function () {
		var t = new cookMyButton();
		this.videoAgain = t;
		t.anchorOffsetX = 205;
		t.anchorOffsetY = 55;
		t.horizontalCenter = 0;
		t.label = "收集X5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.skinName = cookOfflineSkin$Skin113;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "offline_multiple_png";
		t.x = 364;
		t.y = -34;
		return t;
	};
	_proto.closeBtn0_i = function () {
		var t = new cookMyButton();
		this.closeBtn0 = t;
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 27.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 592;
		t.y = 290;
		t.skinName = cookOfflineSkin$Skin114;
		return t;
	};
	return cookOfflineSkin;
})(eui.Skin);generateEUI.paths['resource/ui/popup/PublicRewardSkin.exml'] = window.cookPublicRewardSkin = (function (_super) {
	__extends(cookPublicRewardSkin, _super);
	var cookPublicRewardSkin$Skin115 = 	(function (_super) {
		__extends(cookPublicRewardSkin$Skin115, _super);
		function cookPublicRewardSkin$Skin115() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookPublicRewardSkin$Skin115.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "bg_white_btn_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.horizontalCenter = 0;
			t.size = 38;
			t.textColor = 0x956f33;
			t.verticalCenter = 0;
			return t;
		};
		return cookPublicRewardSkin$Skin115;
	})(eui.Skin);

	function cookPublicRewardSkin() {
		_super.call(this);
		this.skinParts = ["effect_group","closeBtn"];
		
		this.elementsContent = [this._Group3_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.image"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.isDoubleReward"],[0],this._Image4,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.value"],[0],this.closeBtn,"label");
	}
	var _proto = cookPublicRewardSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Group2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 1334;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.effect_group_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Group1_i(),this.closeBtn_i()];
		return t;
	};
	_proto.effect_group_i = function () {
		var t = new eui.Group();
		this.effect_group = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "share_head_bg_png";
		t.verticalCenter = -335;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "already_get_png";
		t.verticalCenter = -349;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.7;
		t.scaleY = 1.7;
		t.verticalCenter = -30;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.source = "icon_two_times_png";
		t.x = 473;
		t.y = 458;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 778;
		t.elementsContent = [this._Image5_i(),this._Label1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(117,0,1,70);
		t.source = "popup_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 36;
		t.right = 36;
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.height = 99;
		t.horizontalCenter = 0;
		t.verticalCenter = 298;
		t.skinName = cookPublicRewardSkin$Skin115;
		return t;
	};
	return cookPublicRewardSkin;
})(eui.Skin);generateEUI.paths['resource/ui/popup/SignupSkin.exml'] = window.cookPopSkin = (function (_super) {
	__extends(cookPopSkin, _super);
	var cookPopSkin$Skin116 = 	(function (_super) {
		__extends(cookPopSkin$Skin116, _super);
		function cookPopSkin$Skin116() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","merge_unselect_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookPopSkin$Skin116.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "merge_select_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookPopSkin$Skin116;
	})(eui.Skin);

	var cookPopSkin$Skin117 = 	(function (_super) {
		__extends(cookPopSkin$Skin117, _super);
		function cookPopSkin$Skin117() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookPopSkin$Skin117.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		return cookPopSkin$Skin117;
	})(eui.Skin);

	var cookPopSkin$Skin118 = 	(function (_super) {
		__extends(cookPopSkin$Skin118, _super);
		function cookPopSkin$Skin118() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookPopSkin$Skin118.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 97;
			t.scale9Grid = new egret.Rectangle(32,25,318,30);
			t.source = "pop_btn1_png";
			t.width = 310;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.horizontalCenter = 0;
			t.size = 40;
			t.stroke = 3;
			t.strokeColor = 0x508a02;
			t.text = "双倍领取";
			t.verticalCenter = -8;
			return t;
		};
		return cookPopSkin$Skin118;
	})(eui.Skin);

	function cookPopSkin() {
		_super.call(this);
		this.skinParts = ["shareCheck","checkGroup","tip","bg_group","img1","value1","i1","img2","value2","i2","img3","value3","i3","img4","value4","i4","value5","i5","img6","value6","i6","img7","value7","i7","img8","value8","i8","img9","value9","i9","value10","i10","img11","value11","i11","img12","value12","i12","img13","value13","i13","img14","value14","i14","value15","i15","item_group","closeBtn","signBtn","allGroup"];
		
		this.elementsContent = [this._Group3_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.day5.img3"],[0],this._Image21,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.day5.img2"],[0],this._Image22,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.day5.img1"],[0],this._Image23,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.day10.img3"],[0],this._Image29,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.day10.img2"],[0],this._Image30,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.day10.img1"],[0],this._Image31,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.day15.img"],[0],this._Image37,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.day15.text"],[0],this._Label18,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.btn_text"],[0],this.signBtn,"label");
	}
	var _proto = cookPopSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.allGroup_i()];
		return t;
	};
	_proto.allGroup_i = function () {
		var t = new eui.Group();
		this.allGroup = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.checkGroup_i(),this._Group1_i(),this.closeBtn_i(),this._Group2_i()];
		return t;
	};
	_proto.checkGroup_i = function () {
		var t = new eui.Group();
		this.checkGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 1253;
		t.elementsContent = [this.shareCheck_i(),this._Label1_i()];
		return t;
	};
	_proto.shareCheck_i = function () {
		var t = new eui.CheckBox();
		this.shareCheck = t;
		t.height = 42;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 42;
		t.skinName = cookPopSkin$Skin116;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "今天领取两份";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.x = 50;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Image1_i(),this.tip_i(),this._Label2_i(),this.bg_group_i(),this.item_group_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf6f6e6;
		t.height = 1134;
		t.horizontalCenter = 0;
		t.width = 652;
		t.y = 4;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xe7decc;
		t.height = 835;
		t.horizontalCenter = 0;
		t.width = 652;
		t.y = 173;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "popup_header_png";
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Label();
		this.tip = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "每天回来领取你的奖励！";
		t.textColor = 0xae8a64;
		t.y = 124;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "日常奖励";
		t.y = 28;
		return t;
	};
	_proto.bg_group_i = function () {
		var t = new eui.Group();
		this.bg_group = t;
		t.height = 835;
		t.horizontalCenter = 0;
		t.width = 652;
		t.y = 173;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sign_item_png";
		t.x = 18;
		t.y = 16;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sign_item_png";
		t.x = 174;
		t.y = 16;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "sign_item_png";
		t.x = 330;
		t.y = 16;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "sign_item_png";
		t.x = 486;
		t.y = 16;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(30,42,87,88);
		t.source = "sign_item_5_png";
		t.width = 300;
		t.x = 19;
		t.y = 181;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "sign_item_png";
		t.x = 330;
		t.y = 181;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "sign_item_png";
		t.x = 486;
		t.y = 181;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "sign_item_png";
		t.x = 18;
		t.y = 344;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "sign_item_png";
		t.x = 174;
		t.y = 344;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(30,42,87,88);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sign_item_10_png";
		t.width = 300;
		t.x = 331;
		t.y = 345;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "sign_item_png";
		t.x = 18;
		t.y = 508;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "sign_item_png";
		t.x = 174;
		t.y = 508;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "sign_item_png";
		t.x = 331;
		t.y = 508;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "sign_item_png";
		t.x = 486;
		t.y = 508;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(30,42,87,88);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sign_item_15_png";
		t.width = 412;
		t.y = 673;
		return t;
	};
	_proto.item_group_i = function () {
		var t = new eui.Group();
		this.item_group = t;
		t.height = 835;
		t.horizontalCenter = 0;
		t.width = 652;
		t.y = 173;
		t.elementsContent = [this.i1_i(),this.i2_i(),this.i3_i(),this.i4_i(),this.i5_i(),this.i6_i(),this.i7_i(),this.i8_i(),this.i9_i(),this.i10_i(),this.i11_i(),this.i12_i(),this.i13_i(),this.i14_i(),this.i15_i()];
		return t;
	};
	_proto.i1_i = function () {
		var t = new eui.Group();
		this.i1 = t;
		t.height = 148;
		t.width = 146;
		t.x = 18;
		t.y = 16;
		t.elementsContent = [this.img1_i(),this._Rect3_i(),this._Label3_i(),this.value1_i(),this._Image17_i()];
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "cash_2_png";
		t.verticalCenter = 7;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.bottom = 25;
		t.fillAlpha = 0.4;
		t.fillColor = 0xffffee;
		t.left = 6;
		t.right = 6;
		t.top = 36;
		t.visible = false;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "第1天";
		t.textColor = 0xa2824e;
		t.top = 6;
		return t;
	};
	_proto.value1_i = function () {
		var t = new eui.Label();
		this.value1 = t;
		t.bold = true;
		t.bottom = 9;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "×1";
		t.textColor = 0xa2824e;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sign_get_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.i2_i = function () {
		var t = new eui.Group();
		this.i2 = t;
		t.height = 148;
		t.width = 146;
		t.x = 174;
		t.y = 16;
		t.elementsContent = [this.img2_i(),this._Rect4_i(),this._Label4_i(),this.value2_i(),this._Image18_i()];
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "cash_2_png";
		t.verticalCenter = 7;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.bottom = 25;
		t.fillAlpha = 0.4;
		t.fillColor = 0xffffee;
		t.left = 6;
		t.right = 6;
		t.top = 36;
		t.visible = false;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "第2天";
		t.textColor = 0xa2824e;
		t.top = 6;
		return t;
	};
	_proto.value2_i = function () {
		var t = new eui.Label();
		this.value2 = t;
		t.bold = true;
		t.bottom = 9;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "×1";
		t.textColor = 0xa2824e;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sign_get_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.i3_i = function () {
		var t = new eui.Group();
		this.i3 = t;
		t.height = 148;
		t.width = 146;
		t.x = 330;
		t.y = 16;
		t.elementsContent = [this.img3_i(),this._Rect5_i(),this._Label5_i(),this.value3_i(),this._Image19_i()];
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "cash_2_png";
		t.verticalCenter = 7;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.bottom = 25;
		t.fillAlpha = 0.4;
		t.fillColor = 0xffffee;
		t.left = 6;
		t.right = 6;
		t.top = 36;
		t.visible = false;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "第3天";
		t.textColor = 0xa2824e;
		t.top = 6;
		return t;
	};
	_proto.value3_i = function () {
		var t = new eui.Label();
		this.value3 = t;
		t.bold = true;
		t.bottom = 9;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "×1";
		t.textColor = 0xa2824e;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sign_get_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.i4_i = function () {
		var t = new eui.Group();
		this.i4 = t;
		t.height = 148;
		t.width = 146;
		t.x = 486;
		t.y = 16;
		t.elementsContent = [this.img4_i(),this._Rect6_i(),this._Label6_i(),this.value4_i(),this._Image20_i()];
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "cash_2_png";
		t.verticalCenter = 7;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.bottom = 25;
		t.fillAlpha = 0.4;
		t.fillColor = 0xffffee;
		t.left = 6;
		t.right = 6;
		t.top = 36;
		t.visible = false;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "第4天";
		t.textColor = 0xa2824e;
		t.top = 6;
		return t;
	};
	_proto.value4_i = function () {
		var t = new eui.Label();
		this.value4 = t;
		t.bold = true;
		t.bottom = 9;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "×1";
		t.textColor = 0xa2824e;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sign_get_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.i5_i = function () {
		var t = new eui.Group();
		this.i5 = t;
		t.height = 148;
		t.width = 300;
		t.x = 19;
		t.y = 181;
		t.elementsContent = [this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Label7_i(),this.value5_i(),this._Image24_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		this._Image21 = t;
		t.horizontalCenter = -38;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.verticalCenter = 17;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		this._Image22 = t;
		t.horizontalCenter = 38;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.verticalCenter = 17;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		this._Image23 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 14.5;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "第5天";
		t.textColor = 0xffffff;
		t.top = 6;
		return t;
	};
	_proto.value5_i = function () {
		var t = new eui.Label();
		this.value5 = t;
		t.bold = true;
		t.left = 22;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x37b6b7;
		t.text = "×1";
		t.textColor = 0xffffff;
		t.top = 43;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sign_get_png";
		t.verticalCenter = 13;
		t.visible = false;
		return t;
	};
	_proto.i6_i = function () {
		var t = new eui.Group();
		this.i6 = t;
		t.height = 148;
		t.width = 146;
		t.x = 330;
		t.y = 181;
		t.elementsContent = [this.img6_i(),this._Rect7_i(),this._Label8_i(),this.value6_i(),this._Image25_i()];
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "cash_2_png";
		t.verticalCenter = 7;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.bottom = 25;
		t.fillAlpha = 0.4;
		t.fillColor = 0xffffee;
		t.left = 6;
		t.right = 6;
		t.top = 36;
		t.visible = false;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "第6天";
		t.textColor = 0xa2824e;
		t.top = 6;
		return t;
	};
	_proto.value6_i = function () {
		var t = new eui.Label();
		this.value6 = t;
		t.bold = true;
		t.bottom = 9;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "×1";
		t.textColor = 0xa2824e;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sign_get_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.i7_i = function () {
		var t = new eui.Group();
		this.i7 = t;
		t.height = 148;
		t.width = 146;
		t.x = 486;
		t.y = 181;
		t.elementsContent = [this.img7_i(),this._Rect8_i(),this._Label9_i(),this.value7_i(),this._Image26_i()];
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "cash_2_png";
		t.verticalCenter = 7;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.bottom = 25;
		t.fillAlpha = 0.4;
		t.fillColor = 0xffffee;
		t.left = 6;
		t.right = 6;
		t.top = 36;
		t.visible = false;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "第7天";
		t.textColor = 0xa2824e;
		t.top = 6;
		return t;
	};
	_proto.value7_i = function () {
		var t = new eui.Label();
		this.value7 = t;
		t.bold = true;
		t.bottom = 9;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "×1";
		t.textColor = 0xa2824e;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sign_get_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.i8_i = function () {
		var t = new eui.Group();
		this.i8 = t;
		t.height = 148;
		t.width = 146;
		t.x = 18;
		t.y = 344;
		t.elementsContent = [this.img8_i(),this._Rect9_i(),this._Label10_i(),this.value8_i(),this._Image27_i()];
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "cash_2_png";
		t.verticalCenter = 7;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.bottom = 25;
		t.fillAlpha = 0.4;
		t.fillColor = 0xffffee;
		t.left = 6;
		t.right = 6;
		t.top = 36;
		t.visible = false;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "第8天";
		t.textColor = 0xa2824e;
		t.top = 6;
		return t;
	};
	_proto.value8_i = function () {
		var t = new eui.Label();
		this.value8 = t;
		t.bold = true;
		t.bottom = 9;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "×1";
		t.textColor = 0xa2824e;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sign_get_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.i9_i = function () {
		var t = new eui.Group();
		this.i9 = t;
		t.height = 148;
		t.width = 146;
		t.x = 174;
		t.y = 344;
		t.elementsContent = [this.img9_i(),this._Rect10_i(),this._Label11_i(),this.value9_i(),this._Image28_i()];
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "cash_2_png";
		t.verticalCenter = 7;
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.bottom = 25;
		t.fillAlpha = 0.4;
		t.fillColor = 0xffffee;
		t.left = 6;
		t.right = 6;
		t.top = 36;
		t.visible = false;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "第9天";
		t.textColor = 0xa2824e;
		t.top = 6;
		return t;
	};
	_proto.value9_i = function () {
		var t = new eui.Label();
		this.value9 = t;
		t.bold = true;
		t.bottom = 9;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "×1";
		t.textColor = 0xa2824e;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sign_get_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.i10_i = function () {
		var t = new eui.Group();
		this.i10 = t;
		t.height = 148;
		t.width = 300;
		t.x = 331;
		t.y = 345;
		t.elementsContent = [this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Label12_i(),this.value10_i(),this._Image32_i()];
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		this._Image29 = t;
		t.horizontalCenter = -38;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.verticalCenter = 17;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		this._Image30 = t;
		t.horizontalCenter = 38;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.verticalCenter = 17;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		this._Image31 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 14.5;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "第10天";
		t.textColor = 0xffffff;
		t.top = 6;
		return t;
	};
	_proto.value10_i = function () {
		var t = new eui.Label();
		this.value10 = t;
		t.bold = true;
		t.left = 22;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x9a58cd;
		t.text = "×1";
		t.textColor = 0xFFFFFF;
		t.top = 43;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sign_get_png";
		t.verticalCenter = 13;
		t.visible = false;
		return t;
	};
	_proto.i11_i = function () {
		var t = new eui.Group();
		this.i11 = t;
		t.height = 148;
		t.width = 146;
		t.x = 18;
		t.y = 508;
		t.elementsContent = [this.img11_i(),this._Rect11_i(),this._Label13_i(),this.value11_i(),this._Image33_i()];
		return t;
	};
	_proto.img11_i = function () {
		var t = new eui.Image();
		this.img11 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "cash_2_png";
		t.verticalCenter = 7;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.bottom = 25;
		t.fillAlpha = 0.4;
		t.fillColor = 0xffffee;
		t.left = 6;
		t.right = 6;
		t.top = 36;
		t.visible = false;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "第11天";
		t.textColor = 0xa2824e;
		t.top = 6;
		return t;
	};
	_proto.value11_i = function () {
		var t = new eui.Label();
		this.value11 = t;
		t.bold = true;
		t.bottom = 9;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "×1";
		t.textColor = 0xa2824e;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sign_get_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.i12_i = function () {
		var t = new eui.Group();
		this.i12 = t;
		t.height = 148;
		t.width = 146;
		t.x = 174;
		t.y = 508;
		t.elementsContent = [this.img12_i(),this._Rect12_i(),this._Label14_i(),this.value12_i(),this._Image34_i()];
		return t;
	};
	_proto.img12_i = function () {
		var t = new eui.Image();
		this.img12 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "cash_2_png";
		t.verticalCenter = 7;
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.bottom = 25;
		t.fillAlpha = 0.4;
		t.fillColor = 0xffffee;
		t.left = 6;
		t.right = 6;
		t.top = 36;
		t.visible = false;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "第12天";
		t.textColor = 0xa2824e;
		t.top = 6;
		return t;
	};
	_proto.value12_i = function () {
		var t = new eui.Label();
		this.value12 = t;
		t.bold = true;
		t.bottom = 9;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "×1";
		t.textColor = 0xa2824e;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sign_get_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.i13_i = function () {
		var t = new eui.Group();
		this.i13 = t;
		t.height = 148;
		t.width = 146;
		t.x = 331;
		t.y = 508;
		t.elementsContent = [this.img13_i(),this._Rect13_i(),this._Label15_i(),this.value13_i(),this._Image35_i()];
		return t;
	};
	_proto.img13_i = function () {
		var t = new eui.Image();
		this.img13 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "cash_2_png";
		t.verticalCenter = 7;
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.bottom = 25;
		t.fillAlpha = 0.4;
		t.fillColor = 0xffffee;
		t.left = 6;
		t.right = 6;
		t.top = 36;
		t.visible = false;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "第13天";
		t.textColor = 0xa2824e;
		t.top = 6;
		return t;
	};
	_proto.value13_i = function () {
		var t = new eui.Label();
		this.value13 = t;
		t.bold = true;
		t.bottom = 9;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "×1";
		t.textColor = 0xa2824e;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sign_get_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.i14_i = function () {
		var t = new eui.Group();
		this.i14 = t;
		t.height = 148;
		t.width = 146;
		t.x = 486;
		t.y = 508;
		t.elementsContent = [this.img14_i(),this._Rect14_i(),this._Label16_i(),this.value14_i(),this._Image36_i()];
		return t;
	};
	_proto.img14_i = function () {
		var t = new eui.Image();
		this.img14 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "cash_2_png";
		t.verticalCenter = 7;
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.bottom = 25;
		t.fillAlpha = 0.4;
		t.fillColor = 0xffffee;
		t.left = 6;
		t.right = 6;
		t.top = 36;
		t.visible = false;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "第14天";
		t.textColor = 0xa2824e;
		t.top = 6;
		return t;
	};
	_proto.value14_i = function () {
		var t = new eui.Label();
		this.value14 = t;
		t.bold = true;
		t.bottom = 9;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "×1";
		t.textColor = 0xa2824e;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sign_get_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.i15_i = function () {
		var t = new eui.Group();
		this.i15 = t;
		t.height = 148;
		t.horizontalCenter = 0;
		t.width = 412;
		t.y = 673;
		t.elementsContent = [this._Rect15_i(),this._Image37_i(),this._Label17_i(),this.value15_i(),this._Label18_i(),this._Image38_i()];
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.bottom = 6;
		t.ellipseWidth = 132;
		t.fillColor = 0x9c6a36;
		t.height = 51;
		t.right = 37;
		t.width = 132;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		this._Image37 = t;
		t.right = 39;
		t.scaleX = 0.68;
		t.scaleY = 0.68;
		t.y = 24;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "第15天";
		t.textColor = 0xffffff;
		t.top = 6;
		return t;
	};
	_proto.value15_i = function () {
		var t = new eui.Label();
		this.value15 = t;
		t.bold = true;
		t.left = 22;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0xe07010;
		t.text = "×1";
		t.textColor = 0xFFFFFF;
		t.top = 43;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		this._Label18 = t;
		t.bold = true;
		t.left = 80;
		t.stroke = 2;
		t.strokeColor = 0xe07010;
		t.top = 74;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sign_get_png";
		t.verticalCenter = 13;
		t.visible = false;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "cookMyButtonSkin";
		t.x = 644;
		t.y = 148;
		t.skinName = cookPopSkin$Skin117;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 1125;
		t.elementsContent = [this.signBtn_i()];
		return t;
	};
	_proto.signBtn_i = function () {
		var t = new cookMyButton();
		this.signBtn = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 310;
		t.skinName = cookPopSkin$Skin118;
		return t;
	};
	return cookPopSkin;
})(eui.Skin);generateEUI.paths['resource/ui/popup/TipItemSkin.exml'] = window.cookTipItemSkin = (function (_super) {
	__extends(cookTipItemSkin, _super);
	function cookTipItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i(),this._Group4_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.indexImg"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.lock"],[0],this._Group3,"visible");
	}
	var _proto = cookTipItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "food_tip_bg2_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.y = 121;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 114;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 110;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		this._Group3 = t;
		t.height = 114;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 110;
		t.elementsContent = [this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "food_tip_bg2_png";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "food_tips_lock_png";
		t.verticalCenter = 0;
		return t;
	};
	return cookTipItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/popup/TipSkin.exml'] = window.cookTipSkin = (function (_super) {
	__extends(cookTipSkin, _super);
	var cookTipSkin$Skin119 = 	(function (_super) {
		__extends(cookTipSkin$Skin119, _super);
		function cookTipSkin$Skin119() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookTipSkin$Skin119.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookTipSkin$Skin119;
	})(eui.Skin);

	var cookTipSkin$Skin120 = 	(function (_super) {
		__extends(cookTipSkin$Skin120, _super);
		function cookTipSkin$Skin120() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookTipSkin$Skin120.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(32,13,196,85);
			t.source = "greenBtn_bg_png";
			t.width = 400;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "shareIcon1_png";
			t.x = 117;
			t.y = 27;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.source = "tips_btn_text_png";
			t.x = 186;
			t.y = 32;
			return t;
		};
		return cookTipSkin$Skin120;
	})(eui.Skin);

	var cookTipSkin$Skin121 = 	(function (_super) {
		__extends(cookTipSkin$Skin121, _super);
		function cookTipSkin$Skin121() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookTipSkin$Skin121.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(32,13,196,85);
			t.source = "greenBtn_bg_png";
			t.width = 400;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "playIcon1_png";
			t.x = 117;
			t.y = 27;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.source = "tips_btn_text_png";
			t.x = 186;
			t.y = 32;
			return t;
		};
		return cookTipSkin$Skin121;
	})(eui.Skin);

	var cookTipSkin$Skin122 = 	(function (_super) {
		__extends(cookTipSkin$Skin122, _super);
		function cookTipSkin$Skin122() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookTipSkin$Skin122.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 100;
			t.width = 174;
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 100;
			t.scale9Grid = new egret.Rectangle(20,22,120,21);
			t.source = "yellow_btn_png";
			t.width = 174;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "cash_png";
			t.x = 8;
			t.y = 27;
			return t;
		};
		return cookTipSkin$Skin122;
	})(eui.Skin);

	function cookTipSkin() {
		_super.call(this);
		this.skinParts = ["tip_list","closeBtn","shareBtn","videoBtn","cashBtn","coin_text"];
		
		this.elementsContent = [this._Group4_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.food.icon"],[0],this._Image4,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.food.name"],[0],this._Label1,"text");
	}
	var _proto = cookTipSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Group3_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 1334;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Group1_i(),this._Group2_i(),this.closeBtn_i(),this.shareBtn_i(),this.videoBtn_i(),this._Label2_i(),this.cashBtn_i(),this.coin_text_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xf6f6e6;
		t.height = 882;
		t.horizontalCenter = 0;
		t.width = 652;
		t.y = 243;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -1;
		t.source = "popup_header_png";
		t.y = 196;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "food_tip_bg1_png";
		t.y = 321;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tips_title_text_png";
		t.y = 227;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.bottom = 755;
		t.horizontalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 590;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 60;
		t.ellipseWidth = 60;
		t.fillColor = 0xab8952;
		t.height = 60;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 240;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 700;
		t.elementsContent = [this.tip_list_i()];
		return t;
	};
	_proto.tip_list_i = function () {
		var t = new eui.List();
		this.tip_list = t;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = cookTipItemSkin;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 27.5;
		t.skinName = "cookMyButtonSkin";
		t.x = 638;
		t.y = 249;
		t.skinName = cookTipSkin$Skin119;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new cookMyButton();
		this.shareBtn = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 55.5;
		t.height = 111;
		t.label = "";
		t.verticalCenter = 364.5;
		t.width = 400;
		t.x = 278;
		t.skinName = cookTipSkin$Skin120;
		return t;
	};
	_proto.videoBtn_i = function () {
		var t = new cookMyButton();
		this.videoBtn = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 55.5;
		t.height = 111;
		t.label = "";
		t.verticalCenter = 364.5;
		t.visible = false;
		t.width = 400;
		t.x = 278;
		t.skinName = cookTipSkin$Skin121;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "使用“提示”，可获得食物提示";
		t.textColor = 0x715527;
		t.y = 915;
		return t;
	};
	_proto.cashBtn_i = function () {
		var t = new cookMyButton();
		this.cashBtn = t;
		t.anchorOffsetX = 87;
		t.anchorOffsetY = 50;
		t.label = "";
		t.x = 585;
		t.y = 1031;
		t.skinName = cookTipSkin$Skin122;
		return t;
	};
	_proto.coin_text_i = function () {
		var t = new eui.Label();
		this.coin_text = t;
		t.size = 44;
		t.stroke = 3;
		t.strokeColor = 0x508A02;
		t.text = "20";
		t.touchEnabled = false;
		t.x = 575.66;
		t.y = 1005.34;
		return t;
	};
	return cookTipSkin;
})(eui.Skin);generateEUI.paths['resource/ui/research/materialItemSkin.exml'] = window.cookmaterialItemSkin = (function (_super) {
	__extends(cookmaterialItemSkin, _super);
	function cookmaterialItemSkin() {
		_super.call(this);
		this.skinParts = ["btnImg"];
		
		this.elementsContent = [this._Group3_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.id"],[0],this._Group3,"name");
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
	}
	var _proto = cookmaterialItemSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		this._Group3 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.width = 140;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this.btnImg_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.horizontalCenter = 0;
		t.top = 10;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "m_bg_png";
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 109;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 25;
		t.textColor = 0xeb9124;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnImg_i = function () {
		var t = new eui.Group();
		this.btnImg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return cookmaterialItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/research/materialTypeSkin.exml'] = window.cookmaterialTypeSkin = (function (_super) {
	__extends(cookmaterialTypeSkin, _super);
	function cookmaterialTypeSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.id"],[0],this._Group1,"name");
		eui.Binding.$bindProperties(this, ["hostComponent.data.selected"],[0],this._Image1,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this._Image2,"source");
	}
	var _proto = cookmaterialTypeSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.height = 84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.verticalCenter = 0;
		t.width = 102;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "research_tap_selected_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		return t;
	};
	return cookmaterialTypeSkin;
})(eui.Skin);generateEUI.paths['resource/ui/research/researchHtpSkin.exml'] = window.cookresearchHtpSkin = (function (_super) {
	__extends(cookresearchHtpSkin, _super);
	var cookresearchHtpSkin$Skin123 = 	(function (_super) {
		__extends(cookresearchHtpSkin$Skin123, _super);
		function cookresearchHtpSkin$Skin123() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookresearchHtpSkin$Skin123.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookresearchHtpSkin$Skin123;
	})(eui.Skin);

	function cookresearchHtpSkin() {
		_super.call(this);
		this.skinParts = ["close_btn"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookresearchHtpSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1132;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this._Image1_i(),this.close_btn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "htp_img_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new cookMyButton();
		this.close_btn = t;
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 27.5;
		t.label = "";
		t.x = 2;
		t.y = 3.5;
		t.skinName = cookresearchHtpSkin$Skin123;
		return t;
	};
	return cookresearchHtpSkin;
})(eui.Skin);generateEUI.paths['resource/ui/research/researchSelectItemSkin.exml'] = window.cookResearchSelectItemSkin = (function (_super) {
	__extends(cookResearchSelectItemSkin, _super);
	function cookResearchSelectItemSkin() {
		_super.call(this);
		this.skinParts = ["icon_img","statusImg"];
		
		this.elementsContent = [this._Group3_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.id"],[0],this._Group3,"name");
		eui.Binding.$bindProperties(this, ["hostComponent.data.c_icon"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.show"],[0],this._Image2,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.data.status_bg"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.status"],[0],this._Image3,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this.icon_img,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.show"],[0],this.icon_img,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.data.status_img"],[0],this.statusImg,"source");
	}
	var _proto = cookResearchSelectItemSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		this._Group3 = t;
		t.height = 196;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.width = 124;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 125;
		t.width = 124;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.icon_img_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "cook_type_mask_png";
		t.verticalCenter = 0;
		t.x = 17;
		t.y = 24;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		return t;
	};
	_proto.icon_img_i = function () {
		var t = new eui.Image();
		this.icon_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 17;
		t.y = 24;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 60;
		t.y = 136;
		t.elementsContent = [this._Rect1_i(),this.statusImg_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 60;
		t.ellipseWidth = 60;
		t.fillColor = 0xebe5cd;
		t.height = 60;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	_proto.statusImg_i = function () {
		var t = new eui.Image();
		this.statusImg = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return cookResearchSelectItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/research/researchSkin.exml'] = window.cookresearchSkin = (function (_super) {
	__extends(cookresearchSkin, _super);
	var cookresearchSkin$Skin124 = 	(function (_super) {
		__extends(cookresearchSkin$Skin124, _super);
		function cookresearchSkin$Skin124() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookresearchSkin$Skin124.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "research_tip_icon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookresearchSkin$Skin124;
	})(eui.Skin);

	var cookresearchSkin$Skin125 = 	(function (_super) {
		__extends(cookresearchSkin$Skin125, _super);
		function cookresearchSkin$Skin125() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookresearchSkin$Skin125.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "research_htp_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookresearchSkin$Skin125;
	})(eui.Skin);

	var cookresearchSkin$Skin126 = 	(function (_super) {
		__extends(cookresearchSkin$Skin126, _super);
		function cookresearchSkin$Skin126() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookresearchSkin$Skin126.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "research_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "start_research_png";
			t.y = 22;
			return t;
		};
		return cookresearchSkin$Skin126;
	})(eui.Skin);

	function cookresearchSkin() {
		_super.call(this);
		this.skinParts = ["bg","restaurant_name","food_id","name_group","name_group2","imgStar6","imgStar0","imgStar1","imgStar2","imgStar3","imgStar4","imgStar5","gpStar","rate_group","openTip","openHtp","select_list","perfect_group","research_btn","research_cost","material_list","material_scroller","type_list","type_scroller","close_btn","lock_mask"];
		
		this.elementsContent = [this._Group9_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.food_name"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.food_img"],[0],this._Image4,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.rate"],[0],this._BitmapLabel1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.food_income"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.food_cost"],[0],this.research_cost,"text");
	}
	var _proto = cookresearchSkin.prototype;

	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this._Group8_i(),this.lock_mask_i()];
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.bg_i(),this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Group3_i(),this._Group5_i(),this.material_scroller_i(),this.type_scroller_i(),this.close_btn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(85,975,605,370);
		t.source = "research_bg_jpg";
		t.touchEnabled = false;
		t.width = 750;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "research_income_bg_png";
		t.y = 389;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "coin_png";
		t.width = 20;
		t.x = 599;
		t.y = 404;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "收入";
		t.x = 548;
		t.y = 401;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 447.64;
		t.horizontalCenter = 0;
		t.top = -1;
		t.percentWidth = 100;
		t.elementsContent = [this.name_group_i(),this.name_group2_i(),this._Group1_i(),this.openTip_i(),this.openHtp_i(),this._Group2_i()];
		return t;
	};
	_proto.name_group_i = function () {
		var t = new eui.Group();
		this.name_group = t;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 569;
		t.y = 39;
		t.elementsContent = [this._Image3_i(),this.restaurant_name_i(),this.food_id_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "research_restaurant_bg_png";
		t.touchEnabled = false;
		t.y = 0;
		return t;
	};
	_proto.restaurant_name_i = function () {
		var t = new eui.Label();
		this.restaurant_name = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "港式早茶";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.food_id_i = function () {
		var t = new eui.Label();
		this.food_id = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "[1/20]";
		t.textColor = 0xaa4242;
		t.touchEnabled = false;
		t.verticalAlign = "top";
		t.verticalCenter = 12;
		t.x = 445;
		t.y = 44;
		return t;
	};
	_proto.name_group2_i = function () {
		var t = new eui.Group();
		this.name_group2 = t;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 204;
		t.y = 153;
		t.elementsContent = [this._Rect1_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 16;
		t.fillColor = 0xb7864c;
		t.height = 48;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 204;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 200;
		t.y = 260;
		t.elementsContent = [this._Image4_i(),this.gpStar_i(),this.rate_group_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.gpStar_i = function () {
		var t = new eui.Group();
		this.gpStar = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.imgStar6_i(),this.imgStar0_i(),this.imgStar1_i(),this.imgStar2_i(),this.imgStar3_i(),this.imgStar4_i(),this.imgStar5_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.imgStar6_i = function () {
		var t = new eui.Image();
		this.imgStar6 = t;
		t.source = "star_png";
		return t;
	};
	_proto.imgStar0_i = function () {
		var t = new eui.Image();
		this.imgStar0 = t;
		t.source = "star_png";
		return t;
	};
	_proto.imgStar1_i = function () {
		var t = new eui.Image();
		this.imgStar1 = t;
		t.source = "star_png";
		return t;
	};
	_proto.imgStar2_i = function () {
		var t = new eui.Image();
		this.imgStar2 = t;
		t.source = "star_png";
		return t;
	};
	_proto.imgStar3_i = function () {
		var t = new eui.Image();
		this.imgStar3 = t;
		t.source = "star_png";
		return t;
	};
	_proto.imgStar4_i = function () {
		var t = new eui.Image();
		this.imgStar4 = t;
		t.source = "star_png";
		return t;
	};
	_proto.imgStar5_i = function () {
		var t = new eui.Image();
		this.imgStar5 = t;
		t.source = "star_png";
		return t;
	};
	_proto.rate_group_i = function () {
		var t = new eui.Group();
		this.rate_group = t;
		t.anchorOffsetX = 31;
		t.anchorOffsetY = 32.5;
		t.height = 65;
		t.width = 62;
		t.x = 182;
		t.y = 26.5;
		t.elementsContent = [this._Image5_i(),this._BitmapLabel1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "research_rate_bg_png";
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel1 = t;
		t.font = "orangeText_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.verticalCenter = -2;
		return t;
	};
	_proto.openTip_i = function () {
		var t = new cookMyButton();
		this.openTip = t;
		t.anchorOffsetX = 37;
		t.anchorOffsetY = 42.5;
		t.height = 85;
		t.label = "";
		t.width = 74;
		t.x = 74;
		t.y = 391;
		t.skinName = cookresearchSkin$Skin124;
		return t;
	};
	_proto.openHtp_i = function () {
		var t = new cookMyButton();
		this.openHtp = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 47;
		t.height = 94;
		t.label = "";
		t.width = 94;
		t.x = 687;
		t.y = 251;
		t.skinName = cookresearchSkin$Skin125;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 8.639999999999986;
		t.height = 50;
		t.right = 0;
		t.width = 123;
		t.elementsContent = [this._Label3_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.anchorOffsetX = 0;
		t.right = -79;
		t.size = 25;
		t.stroke = 1;
		t.strokeColor = 0xa07b00;
		t.verticalCenter = 0;
		t.width = 195;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 317;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = 481;
		t.elementsContent = [this._Group4_i(),this.perfect_group_i(),this.research_btn_i(),this.research_cost_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 10;
		t.elementsContent = [this.select_list_i()];
		return t;
	};
	_proto.select_list_i = function () {
		var t = new eui.List();
		this.select_list = t;
		t.horizontalCenter = 0;
		t.itemRenderer = view.cookResearchSelectItem;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.perfect_group_i = function () {
		var t = new eui.Group();
		this.perfect_group = t;
		t.bottom = 10;
		t.horizontalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "research_perfect_png";
		return t;
	};
	_proto.research_btn_i = function () {
		var t = new cookMyButton();
		this.research_btn = t;
		t.anchorOffsetX = 139;
		t.anchorOffsetY = 48;
		t.bottom = 10;
		t.horizontalCenter = 0;
		t.skinName = cookresearchSkin$Skin126;
		return t;
	};
	_proto.research_cost_i = function () {
		var t = new eui.Label();
		this.research_cost = t;
		t.horizontalCenter = 19.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.touchEnabled = false;
		t.visible = false;
		t.y = 260;
		return t;
	};
	_proto.material_scroller_i = function () {
		var t = new eui.Scroller();
		this.material_scroller = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.top = 896;
		t.viewport = this._Group6_i();
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.material_list_i()];
		return t;
	};
	_proto.material_list_i = function () {
		var t = new eui.List();
		this.material_list = t;
		t.horizontalCenter = 0;
		t.itemRenderer = view.cookResearchMaterialItem;
		t.scaleX = 1;
		t.scaleY = 1;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.requestedColumnCount = 5;
		return t;
	};
	_proto.type_scroller_i = function () {
		var t = new eui.Scroller();
		this.type_scroller = t;
		t.height = 84;
		t.percentWidth = 100;
		t.y = 806;
		t.viewport = this._Group7_i();
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.type_list_i()];
		return t;
	};
	_proto.type_list_i = function () {
		var t = new eui.List();
		this.type_list = t;
		t.itemRenderer = view.cookMaterialTypeItem;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout3_i();
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Image();
		this.close_btn = t;
		t.source = "close2_png";
		t.touchEnabled = true;
		t.x = 30;
		t.y = 60;
		return t;
	};
	_proto.lock_mask_i = function () {
		var t = new eui.Group();
		this.lock_mask = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = true;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	return cookresearchSkin;
})(eui.Skin);generateEUI.paths['resource/ui/research/starSkin.exml'] = window.cookstarSkin = (function (_super) {
	__extends(cookstarSkin, _super);
	function cookstarSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.unlock"],[0],this._Image2,"visible");
	}
	var _proto = cookstarSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "star_void_png";
		t.width = 53;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "star_png";
		return t;
	};
	return cookstarSkin;
})(eui.Skin);generateEUI.paths['resource/ui/research/unlockMaterial.exml'] = window.cookunlockMaterial = (function (_super) {
	__extends(cookunlockMaterial, _super);
	var cookunlockMaterial$Skin127 = 	(function (_super) {
		__extends(cookunlockMaterial$Skin127, _super);
		function cookunlockMaterial$Skin127() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookunlockMaterial$Skin127.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookunlockMaterial$Skin127;
	})(eui.Skin);

	var cookunlockMaterial$Skin128 = 	(function (_super) {
		__extends(cookunlockMaterial$Skin128, _super);
		function cookunlockMaterial$Skin128() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookunlockMaterial$Skin128.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 95;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(32,13,196,85);
			t.source = "greenBtn_bg_png";
			t.verticalCenter = 0;
			t.width = 470;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 46;
			t.source = "shareIcon1_png";
			t.width = 44;
			t.x = 38;
			t.y = 22;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.source = "unlock_half_text_png";
			t.x = 98;
			t.y = 24;
			return t;
		};
		_proto._Image4_i = function () {
			var t = new eui.Image();
			t.height = 39;
			t.source = "coin_png";
			t.width = 37;
			t.x = 279;
			t.y = 24;
			return t;
		};
		return cookunlockMaterial$Skin128;
	})(eui.Skin);

	var cookunlockMaterial$Skin129 = 	(function (_super) {
		__extends(cookunlockMaterial$Skin129, _super);
		function cookunlockMaterial$Skin129() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookunlockMaterial$Skin129.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 95;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(32,13,196,85);
			t.source = "greenBtn_bg_png";
			t.verticalCenter = 0;
			t.width = 470;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 46;
			t.source = "playIcon1_png";
			t.width = 44;
			t.x = 38;
			t.y = 22;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.source = "unlock_half_text_png";
			t.x = 98;
			t.y = 24;
			return t;
		};
		_proto._Image4_i = function () {
			var t = new eui.Image();
			t.height = 39;
			t.source = "coin_png";
			t.width = 37;
			t.x = 279;
			t.y = 24;
			return t;
		};
		return cookunlockMaterial$Skin129;
	})(eui.Skin);

	var cookunlockMaterial$Skin130 = 	(function (_super) {
		__extends(cookunlockMaterial$Skin130, _super);
		function cookunlockMaterial$Skin130() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookunlockMaterial$Skin130.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.width = 320;
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 85;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(32,24,98,15);
			t.source = "yellow_btn_png";
			t.verticalCenter = 0;
			t.width = 320;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 51;
			t.source = "coin_png";
			t.width = 49;
			t.x = 66;
			t.y = 17;
			return t;
		};
		return cookunlockMaterial$Skin130;
	})(eui.Skin);

	function cookunlockMaterial() {
		_super.call(this);
		this.skinParts = ["close_btn","m_img","share_btn","share_group","video_btn","video_group","unlock_btn"];
		
		this.elementsContent = [this._Group4_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this.m_img,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.half_cost"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.half_cost"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.cost"],[0],this._BitmapLabel1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.coin"],[0],this._Label5,"text");
	}
	var _proto = cookunlockMaterial.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Group3_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this.close_btn_i(),this._Label1_i(),this._Group1_i(),this.share_group_i(),this.video_group_i(),this.unlock_btn_i(),this._BitmapLabel1_i(),this._Group2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillColor = 0xf6f6e6;
		t.height = 842;
		t.width = 652;
		t.x = 22;
		t.y = 13;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "popup_header_png";
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new cookMyButton();
		this.close_btn = t;
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 27.5;
		t.label = "";
		t.x = 613;
		t.y = 50.5;
		t.skinName = cookunlockMaterial$Skin127;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "解锁食材";
		t.y = 30;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 277;
		t.horizontalCenter = 0;
		t.width = 277;
		t.y = 187;
		t.elementsContent = [this._Image2_i(),this.m_img_i(),this._Rect2_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "unlock_food_bg_png";
		t.top = 0;
		return t;
	};
	_proto.m_img_i = function () {
		var t = new eui.Image();
		this.m_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 60;
		t.ellipseWidth = 60;
		t.fillColor = 0xab8952;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 240;
		t.y = 266;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 45;
		t.y = 271;
		return t;
	};
	_proto.share_group_i = function () {
		var t = new eui.Group();
		this.share_group = t;
		t.height = 90;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.visible = false;
		t.width = 470;
		t.y = 610;
		t.elementsContent = [this.share_btn_i(),this._Label3_i()];
		return t;
	};
	_proto.share_btn_i = function () {
		var t = new cookMyButton();
		this.share_btn = t;
		t.anchorOffsetX = 235;
		t.anchorOffsetY = 45;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 470;
		t.x = 235;
		t.y = 45;
		t.skinName = cookunlockMaterial$Skin128;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.stroke = 2;
		t.strokeColor = 0x298000;
		t.touchEnabled = false;
		t.x = 324;
		t.y = 26;
		return t;
	};
	_proto.video_group_i = function () {
		var t = new eui.Group();
		this.video_group = t;
		t.height = 90;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.visible = false;
		t.width = 470;
		t.y = 610;
		t.elementsContent = [this.video_btn_i(),this._Label4_i()];
		return t;
	};
	_proto.video_btn_i = function () {
		var t = new cookMyButton();
		this.video_btn = t;
		t.anchorOffsetX = 235;
		t.anchorOffsetY = 45;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 470;
		t.x = 235;
		t.y = 45;
		t.skinName = cookunlockMaterial$Skin129;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.stroke = 2;
		t.strokeColor = 0x298000;
		t.touchEnabled = false;
		t.x = 324;
		t.y = 26;
		return t;
	};
	_proto.unlock_btn_i = function () {
		var t = new cookMyButton();
		this.unlock_btn = t;
		t.anchorOffsetX = 165;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 760;
		t.skinName = cookunlockMaterial$Skin130;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel1 = t;
		t.font = "coinText_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.touchEnabled = false;
		t.x = 307;
		t.y = 748;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.horizontalCenter = 0;
		t.width = 150;
		t.y = 528;
		t.elementsContent = [this._Label5_i(),this._Label6_i(),this._Image3_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		this._Label5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.textAlign = "center";
		t.textColor = 0xff5a00;
		t.verticalCenter = 0.5;
		t.x = 103;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "拥有:";
		t.textAlign = "right";
		t.textColor = 0xff5a00;
		t.verticalCenter = 0.5;
		t.y = -117;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "coin_png";
		t.verticalCenter = 0.5;
		return t;
	};
	return cookunlockMaterial;
})(eui.Skin);generateEUI.paths['resource/ui/shop/ShopBuyChestSkin.exml'] = window.cookShopBuyChestSkin = (function (_super) {
	__extends(cookShopBuyChestSkin, _super);
	var cookShopBuyChestSkin$Skin131 = 	(function (_super) {
		__extends(cookShopBuyChestSkin$Skin131, _super);
		function cookShopBuyChestSkin$Skin131() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookShopBuyChestSkin$Skin131.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookShopBuyChestSkin$Skin131;
	})(eui.Skin);

	var cookShopBuyChestSkin$Skin132 = 	(function (_super) {
		__extends(cookShopBuyChestSkin$Skin132, _super);
		function cookShopBuyChestSkin$Skin132() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookShopBuyChestSkin$Skin132.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 108;
			t.scale9Grid = new egret.Rectangle(20,24,120,16);
			t.source = "yellow_btn_png";
			t.width = 320;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "sure_text2_png";
			t.y = 25;
			return t;
		};
		return cookShopBuyChestSkin$Skin132;
	})(eui.Skin);

	function cookShopBuyChestSkin() {
		_super.call(this);
		this.skinParts = ["banner_img","chest_img","atleast","card","closeBtn","buyBtn"];
		
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.item0.visible"],[0],this._Rect2,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.item1.visible"],[0],this._Rect3,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.item2.visible"],[0],this._Rect4,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.item3.visible"],[0],this._Rect5,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.item0.visible"],[0],this._Image4,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.item1.visible"],[0],this._Image5,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.item2.visible"],[0],this._Image6,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.item3.visible"],[0],this._Image7,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.item0.text"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.item0.visible"],[0],this._Label1,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.item1.text"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.item1.visible"],[0],this._Label2,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.item2.text"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.item2.visible"],[0],this._Label3,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.item3.text"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.item3.visible"],[0],this._Label4,"visible");
	}
	var _proto = cookShopBuyChestSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.banner_img_i(),this.chest_img_i(),this.card_i(),this.closeBtn_i(),this.buyBtn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 12;
		t.ellipseWidth = 12;
		t.fillColor = 0xf6f6e6;
		t.height = 927;
		t.horizontalCenter = 0;
		t.width = 652;
		t.y = 14;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "chest_shadow_png";
		t.width = 276;
		t.y = 362;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "popup_header_png";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "confirm_buy_text_png";
		t.y = 35;
		return t;
	};
	_proto.banner_img_i = function () {
		var t = new eui.Image();
		this.banner_img = t;
		t.horizontalCenter = 0;
		t.source = "chest_banner_4_png";
		t.y = 128;
		return t;
	};
	_proto.chest_img_i = function () {
		var t = new eui.Image();
		this.chest_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "chest_4_png";
		t.y = 209;
		return t;
	};
	_proto.card_i = function () {
		var t = new eui.Group();
		this.card = t;
		t.horizontalCenter = 0;
		t.width = 652;
		t.y = 457;
		t.elementsContent = [this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.atleast_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		this._Rect2 = t;
		t.ellipseHeight = 12;
		t.ellipseWidth = 12;
		t.fillColor = 0xe5dfce;
		t.height = 54;
		t.width = 200;
		t.x = 239;
		t.y = 5;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		this._Rect3 = t;
		t.ellipseHeight = 12;
		t.ellipseWidth = 12;
		t.fillColor = 0xE5DFCE;
		t.height = 54;
		t.width = 440;
		t.x = 106;
		t.y = 69;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		this._Rect4 = t;
		t.ellipseHeight = 12;
		t.ellipseWidth = 12;
		t.fillColor = 0xE5DFCE;
		t.height = 54;
		t.width = 440;
		t.x = 106;
		t.y = 167;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		this._Rect5 = t;
		t.ellipseHeight = 12;
		t.ellipseWidth = 12;
		t.fillColor = 0xE5DFCE;
		t.height = 54;
		t.width = 440;
		t.x = 106;
		t.y = 231;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chest_card_1_png";
		t.x = 214;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chest_card_4_png";
		t.x = 128;
		t.y = 70;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chest_card_3_png";
		t.x = 128;
		t.y = 169;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		this._Image7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chest_card_2_png";
		t.x = 128;
		t.y = 233;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.size = 34;
		t.textColor = 0x9b8c72;
		t.x = 285;
		t.y = 13;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.size = 34;
		t.textColor = 0x9B8C72;
		t.x = 187;
		t.y = 78;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.bold = true;
		t.size = 34;
		t.textColor = 0x9B8C72;
		t.x = 187;
		t.y = 178;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.bold = true;
		t.size = 34;
		t.textColor = 0x9B8C72;
		t.x = 187;
		t.y = 242;
		return t;
	};
	_proto.atleast_i = function () {
		var t = new eui.Label();
		this.atleast = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "至少包含";
		t.textColor = 0xb8b3a5;
		t.y = 128;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.label = "";
		t.x = 629;
		t.y = 54;
		t.skinName = cookShopBuyChestSkin$Skin131;
		return t;
	};
	_proto.buyBtn_i = function () {
		var t = new cookMyButton();
		this.buyBtn = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 54;
		t.horizontalCenter = 0;
		t.y = 831;
		t.skinName = cookShopBuyChestSkin$Skin132;
		return t;
	};
	return cookShopBuyChestSkin;
})(eui.Skin);generateEUI.paths['resource/ui/shop/ShopChestSkin.exml'] = window.cookShopChestSkin = (function (_super) {
	__extends(cookShopChestSkin, _super);
	var cookShopChestSkin$Skin133 = 	(function (_super) {
		__extends(cookShopChestSkin$Skin133, _super);
		function cookShopChestSkin$Skin133() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookShopChestSkin$Skin133.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "yellow_btn_png";
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 42;
			t.source = "cash_png";
			t.verticalCenter = 0;
			t.width = 55;
			t.x = 18;
			return t;
		};
		return cookShopChestSkin$Skin133;
	})(eui.Skin);

	function cookShopChestSkin() {
		_super.call(this);
		this.skinParts = ["banner_img","chest_img","buyBtn","cost_text"];
		
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = cookShopChestSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image1_i(),this.banner_img_i(),this.chest_img_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 248;
		t.source = "shop_item_bg_png";
		t.width = 338;
		t.y = 34;
		return t;
	};
	_proto.banner_img_i = function () {
		var t = new eui.Image();
		this.banner_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.86;
		t.scaleY = 0.86;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.chest_img_i = function () {
		var t = new eui.Image();
		this.chest_img = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 78;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.horizontalCenter = 0;
		t.width = 160;
		t.y = 252;
		t.elementsContent = [this.buyBtn_i(),this.cost_text_i()];
		return t;
	};
	_proto.buyBtn_i = function () {
		var t = new cookMyButton();
		this.buyBtn = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 34;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.skinName = cookShopChestSkin$Skin133;
		return t;
	};
	_proto.cost_text_i = function () {
		var t = new eui.BitmapLabel();
		this.cost_text = t;
		t.font = "coinText_fnt";
		t.letterSpacing = -3;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 80;
		return t;
	};
	return cookShopChestSkin;
})(eui.Skin);generateEUI.paths['resource/ui/shop/ShopItemSkin.exml'] = window.cookShopItemSkin = (function (_super) {
	__extends(cookShopItemSkin, _super);
	var cookShopItemSkin$Skin134 = 	(function (_super) {
		__extends(cookShopItemSkin$Skin134, _super);
		function cookShopItemSkin$Skin134() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookShopItemSkin$Skin134.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "yellow_btn_png";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.9;
			t.scaleY = 0.9;
			t.source = "cash_png";
			t.verticalCenter = -4;
			t.x = 11;
			return t;
		};
		return cookShopItemSkin$Skin134;
	})(eui.Skin);

	function cookShopItemSkin() {
		_super.call(this);
		this.skinParts = ["tip"];
		
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.prop_img"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.prop_id"],[0],this._cookMyButton1,"name");
		eui.Binding.$bindProperties(this, ["hostComponent.data.prop_price"],[0],this._Label2,"text");
	}
	var _proto = cookShopItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 269;
		t.x = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.tip_i(),this._cookMyButton1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "shop_item_bg_png";
		t.top = 41;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.size = 34;
		t.textColor = 0xdbbd8e;
		t.top = 102;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Label();
		this.tip = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "";
		t.textColor = 0x715527;
		t.top = 157;
		return t;
	};
	_proto._cookMyButton1_i = function () {
		var t = new cookMyButton();
		this._cookMyButton1 = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 34;
		t.height = 68;
		t.top = 202;
		t.width = 160;
		t.x = 149;
		t.skinName = cookShopItemSkin$Skin134;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 20.5;
		t.size = 34;
		t.textAlign = "center";
		t.textColor = 0xaf5600;
		t.top = 215;
		t.touchEnabled = false;
		t.width = 105;
		return t;
	};
	return cookShopItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/shop/ShopSkillPointSkin.exml'] = window.cookShopSkillPointSkin = (function (_super) {
	__extends(cookShopSkillPointSkin, _super);
	var cookShopSkillPointSkin$Skin135 = 	(function (_super) {
		__extends(cookShopSkillPointSkin$Skin135, _super);
		function cookShopSkillPointSkin$Skin135() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookShopSkillPointSkin$Skin135.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 68;
			t.source = "greenBtn_bg_png";
			t.width = 160;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 39;
			t.source = "coin_png";
			t.verticalCenter = 0;
			t.width = 38;
			t.x = 16;
			return t;
		};
		return cookShopSkillPointSkin$Skin135;
	})(eui.Skin);

	var cookShopSkillPointSkin$Skin136 = 	(function (_super) {
		__extends(cookShopSkillPointSkin$Skin136, _super);
		function cookShopSkillPointSkin$Skin136() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookShopSkillPointSkin$Skin136.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "yellow_btn_png";
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 42;
			t.source = "cash_png";
			t.verticalCenter = 0;
			t.width = 55;
			t.x = 5;
			return t;
		};
		return cookShopSkillPointSkin$Skin136;
	})(eui.Skin);

	function cookShopSkillPointSkin() {
		_super.call(this);
		this.skinParts = ["user_sp","coinBtn","cashBtn","coin_text","cash_text","sp_group","lock_img","lock_group"];
		
		this.elementsContent = [this._Group4_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.num"],[0],this._BitmapLabel1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.show_data.num"],[0],this._BitmapLabel2,"text");
	}
	var _proto = cookShopSkillPointSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.sp_group_i(),this.lock_group_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 382;
		t.scale9Grid = new egret.Rectangle(23,64,46,15);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bank_item_bg_png";
		t.width = 210;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "技能点";
		t.textColor = 0xa2824e;
		t.y = 13;
		return t;
	};
	_proto.sp_group_i = function () {
		var t = new eui.Group();
		this.sp_group = t;
		t.height = 344;
		t.horizontalCenter = 0;
		t.width = 160;
		t.y = 71;
		t.elementsContent = [this._Group1_i(),this._Image3_i(),this.coinBtn_i(),this.cashBtn_i(),this._Group2_i(),this.coin_text_i(),this.cash_text_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 42;
		t.horizontalCenter = 8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 33;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.user_sp_i(),this._Image2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xdfdfcc;
		t.height = 42;
		t.width = 144;
		return t;
	};
	_proto.user_sp_i = function () {
		var t = new eui.BitmapLabel();
		this.user_sp = t;
		t.font = "bankText_fnt";
		t.right = 13;
		t.text = "0";
		t.y = 7;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 46;
		t.source = "skillpoint_coin_png";
		t.verticalCenter = 0;
		t.width = 39;
		t.x = -14;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skillpoint_coin_png";
		t.x = 25;
		t.y = 55;
		return t;
	};
	_proto.coinBtn_i = function () {
		var t = new cookMyButton();
		this.coinBtn = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 34;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 233;
		t.skinName = cookShopSkillPointSkin$Skin135;
		return t;
	};
	_proto.cashBtn_i = function () {
		var t = new cookMyButton();
		this.cashBtn = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 34;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 310;
		t.skinName = cookShopSkillPointSkin$Skin136;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.width = 50;
		t.x = 105;
		t.y = 47;
		t.elementsContent = [this._Image4_i(),this._BitmapLabel1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "research_rate_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel1 = t;
		t.font = "coinText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = -2;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.y = 10;
		return t;
	};
	_proto.coin_text_i = function () {
		var t = new eui.Label();
		this.coin_text = t;
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0x508a02;
		t.text = "";
		t.touchEnabled = false;
		t.x = 60;
		t.y = 216;
		return t;
	};
	_proto.cash_text_i = function () {
		var t = new eui.Label();
		this.cash_text = t;
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0x508A02;
		t.text = "";
		t.touchEnabled = false;
		t.x = 60;
		t.y = 291;
		return t;
	};
	_proto.lock_group_i = function () {
		var t = new eui.Group();
		this.lock_group = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 71;
		t.elementsContent = [this.lock_img_i(),this._Group3_i()];
		return t;
	};
	_proto.lock_img_i = function () {
		var t = new eui.Image();
		this.lock_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skillpoint_coin_grey_png";
		t.x = 25;
		t.y = 55;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.width = 50;
		t.x = 105;
		t.y = 47;
		t.elementsContent = [this._Image5_i(),this._BitmapLabel2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "research_rate_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel2 = t;
		t.font = "coinText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = -2;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.y = 10;
		return t;
	};
	return cookShopSkillPointSkin;
})(eui.Skin);generateEUI.paths['resource/ui/shop/ShopSkin.exml'] = window.cookShopSkin = (function (_super) {
	__extends(cookShopSkin, _super);
	var cookShopSkin$Skin137 = 	(function (_super) {
		__extends(cookShopSkin$Skin137, _super);
		function cookShopSkin$Skin137() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookShopSkin$Skin137.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookShopSkin$Skin137;
	})(eui.Skin);

	function cookShopSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","prop_list","speedup_scroller","speedup_tab","cash_tab","chest_tab","skillpoint_tab","user_money","cash_group","user_coin","coin_group","banner_group","cash_img","cash","speedup_img","speedup","skillpoint_img","skillpoint","chest_img","chest","tab_group"];
		
		this.elementsContent = [this._Group5_i()];
	}
	var _proto = cookShopSkin.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.closeBtn_i(),this._Group3_i(),this.cash_group_i(),this.coin_group_i(),this.banner_group_i(),this.tab_group_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.scale9Grid = new egret.Rectangle(93,1,564,2);
		t.source = "stripe_bg_jpg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "shop_divider_png";
		t.y = 440;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 27;
		t.label = "";
		t.x = 54;
		t.y = 84;
		t.skinName = cookShopSkin$Skin137;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.top = 445;
		t.width = 654;
		t.elementsContent = [this.speedup_tab_i(),this.cash_tab_i(),this.chest_tab_i(),this.skillpoint_tab_i()];
		return t;
	};
	_proto.speedup_tab_i = function () {
		var t = new eui.Group();
		this.speedup_tab = t;
		t.bottom = 10;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 10;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this.speedup_scroller_i()];
		return t;
	};
	_proto.speedup_scroller_i = function () {
		var t = new eui.Scroller();
		this.speedup_scroller = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.prop_list_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		return t;
	};
	_proto.prop_list_i = function () {
		var t = new eui.List();
		this.prop_list = t;
		t.horizontalCenter = 0;
		t.itemRenderer = view.cookShopItem;
		t.scaleX = 1;
		t.scaleY = 1;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 28;
		t.requestedColumnCount = 2;
		t.verticalGap = 28;
		return t;
	};
	_proto.cash_tab_i = function () {
		var t = new eui.Group();
		this.cash_tab = t;
		t.bottom = 10;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 10;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this._Group2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 159;
		t.elementsContent = [this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 298;
		t.scale9Grid = new egret.Rectangle(51,35,209,135);
		t.source = "shop_item_bg_png";
		t.width = 608;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "暂不支持充值功能~";
		t.textColor = 0xa8997e;
		t.verticalCenter = 0;
		return t;
	};
	_proto.chest_tab_i = function () {
		var t = new eui.Group();
		this.chest_tab = t;
		t.bottom = 10;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 10;
		t.visible = false;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 25;
		t.requestedColumnCount = 2;
		t.verticalGap = 60;
		return t;
	};
	_proto.skillpoint_tab_i = function () {
		var t = new eui.Group();
		this.skillpoint_tab = t;
		t.bottom = 10;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 10;
		t.visible = false;
		t.layout = this._TileLayout3_i();
		return t;
	};
	_proto._TileLayout3_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 25;
		t.verticalGap = 20;
		return t;
	};
	_proto.cash_group_i = function () {
		var t = new eui.Group();
		this.cash_group = t;
		t.height = 40;
		t.width = 140;
		t.x = 225;
		t.y = 382;
		t.elementsContent = [this._Rect1_i(),this._Image4_i(),this.user_money_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 24;
		t.ellipseWidth = 24;
		t.fillColor = 0xc58411;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.source = "cash_png";
		t.verticalCenter = 0;
		t.width = 65;
		t.x = -28;
		return t;
	};
	_proto.user_money_i = function () {
		var t = new eui.BitmapLabel();
		this.user_money = t;
		t.font = "commonText_fnt";
		t.right = 10;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "1点360ab";
		t.verticalCenter = 0;
		return t;
	};
	_proto.coin_group_i = function () {
		var t = new eui.Group();
		this.coin_group = t;
		t.height = 40;
		t.width = 150;
		t.x = 392;
		t.y = 382;
		t.elementsContent = [this._Rect2_i(),this._Image5_i(),this._Image6_i(),this.user_coin_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 25;
		t.fillColor = 0xc58411;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.source = "coin_png";
		t.verticalCenter = 0;
		t.width = 47;
		t.x = -5;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 26;
		t.source = "open_outerring_png";
		t.width = 25;
		t.x = 23;
		t.y = 24;
		return t;
	};
	_proto.user_coin_i = function () {
		var t = new eui.BitmapLabel();
		this.user_coin = t;
		t.font = "commonText_fnt";
		t.right = 10;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "1点360ab";
		t.verticalCenter = 0;
		return t;
	};
	_proto.banner_group_i = function () {
		var t = new eui.Group();
		this.banner_group = t;
		t.horizontalCenter = 0;
		t.y = 34;
		t.elementsContent = [this._Image7_i(),this._Label2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 124;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "research_restaurant_bg_png";
		t.touchEnabled = false;
		t.width = 586;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "商店";
		t.y = 28;
		return t;
	};
	_proto.tab_group_i = function () {
		var t = new eui.Group();
		this.tab_group = t;
		t.height = 195;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.y = 168;
		t.elementsContent = [this._Rect3_i(),this._Rect4_i(),this._Group4_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xfea100;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.bottom = 5;
		t.fillColor = 0xfac943;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.y = 32;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.cash_i(),this.speedup_i(),this.skillpoint_i(),this.chest_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 45;
		t.horizontalAlign = "contentJustify";
		return t;
	};
	_proto.cash_i = function () {
		var t = new eui.Group();
		this.cash = t;
		t.height = 141;
		t.name = "cash";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.width = 121;
		t.x = -339;
		t.y = 0;
		t.elementsContent = [this.cash_img_i(),this._Image8_i()];
		return t;
	};
	_proto.cash_img_i = function () {
		var t = new eui.Image();
		this.cash_img = t;
		t.horizontalCenter = 0;
		t.source = "shop_cash_select_png";
		t.verticalCenter = -16.5;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_cash_text_png";
		t.x = 279;
		t.y = 111;
		return t;
	};
	_proto.speedup_i = function () {
		var t = new eui.Group();
		this.speedup = t;
		t.height = 141;
		t.name = "speedup";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.width = 121;
		t.x = -339;
		t.y = 0;
		t.elementsContent = [this.speedup_img_i(),this._Image9_i()];
		return t;
	};
	_proto.speedup_img_i = function () {
		var t = new eui.Image();
		this.speedup_img = t;
		t.horizontalCenter = 0;
		t.source = "shop_speedup_select_png";
		t.verticalCenter = -16.5;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_speedup_text_png";
		t.x = 279;
		t.y = 111;
		return t;
	};
	_proto.skillpoint_i = function () {
		var t = new eui.Group();
		this.skillpoint = t;
		t.height = 141;
		t.name = "skillpoint";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.width = 121;
		t.x = -319;
		t.y = 20;
		t.elementsContent = [this.skillpoint_img_i(),this._Image10_i()];
		return t;
	};
	_proto.skillpoint_img_i = function () {
		var t = new eui.Image();
		this.skillpoint_img = t;
		t.horizontalCenter = 0;
		t.source = "shop_skillpoint_select_png";
		t.verticalCenter = -16.5;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_skillpoint_text_png";
		t.x = 279;
		t.y = 111;
		return t;
	};
	_proto.chest_i = function () {
		var t = new eui.Group();
		this.chest = t;
		t.height = 141;
		t.name = "chest";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.width = 121;
		t.x = -329;
		t.y = 10;
		t.elementsContent = [this.chest_img_i(),this._Image11_i()];
		return t;
	};
	_proto.chest_img_i = function () {
		var t = new eui.Image();
		this.chest_img = t;
		t.horizontalCenter = 0;
		t.source = "shop_chest_select_png";
		t.verticalCenter = -16.5;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_chest_text_png";
		t.x = 279;
		t.y = 111;
		return t;
	};
	return cookShopSkin;
})(eui.Skin);generateEUI.paths['resource/ui/skill/ActiveBannerSkin.exml'] = window.cookActiveBannerSkin = (function (_super) {
	__extends(cookActiveBannerSkin, _super);
	function cookActiveBannerSkin() {
		_super.call(this);
		this.skinParts = ["type_img","coin_img","type_text","face_img","face_text"];
		
		this.elementsContent = [this._Group4_i()];
	}
	var _proto = cookActiveBannerSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.width = 690;
		t.elementsContent = [this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 74;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this.type_img_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "orange_banner_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.type_img_i = function () {
		var t = new eui.Image();
		this.type_img = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "active_waiter_text_png";
		t.verticalCenter = 0;
		t.x = 21;
		t.y = 22;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.right = 25;
		t.rotation = 360;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 503;
		t.y = 19;
		t.elementsContent = [this.coin_img_i(),this.type_text_i()];
		return t;
	};
	_proto.coin_img_i = function () {
		var t = new eui.Image();
		this.coin_img = t;
		t.height = 36;
		t.source = "coin1_png";
		t.width = 36;
		return t;
	};
	_proto.type_text_i = function () {
		var t = new eui.Label();
		this.type_text = t;
		t.text = "1.29K/秒";
		t.textColor = 0x673F00;
		t.verticalCenter = 0;
		t.x = 45;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.y = 92;
		t.elementsContent = [this.face_img_i(),this.face_text_i()];
		return t;
	};
	_proto.face_img_i = function () {
		var t = new eui.Image();
		this.face_img = t;
		t.source = "face_happy_png";
		t.x = 25;
		return t;
	};
	_proto.face_text_i = function () {
		var t = new eui.Label();
		this.face_text = t;
		t.size = 28;
		t.text = "烹饪能力充足";
		t.textColor = 0xb98c86;
		t.verticalCenter = 0;
		t.x = 80;
		return t;
	};
	return cookActiveBannerSkin;
})(eui.Skin);generateEUI.paths['resource/ui/skill/ActiveSkillItemSkin.exml'] = window.cookActiveSkillItemSkin = (function (_super) {
	__extends(cookActiveSkillItemSkin, _super);
	function cookActiveSkillItemSkin() {
		_super.call(this);
		this.skinParts = ["imgHead","actived_text","cd_text","stateGroup","head_group","lbLevel","name_text","lbName","imgSkillIcon","skill_group","lbDes","lbEffect","lbTimer"];
		
		this.elementsContent = [this._Group4_i()];
	}
	var _proto = cookActiveSkillItemSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.elementsContent = [this._Group3_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 670;
		t.elementsContent = [this.head_group_i(),this._Group2_i()];
		return t;
	};
	_proto.head_group_i = function () {
		var t = new eui.Group();
		this.head_group = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.elementsContent = [this.imgHead_i(),this.stateGroup_i()];
		return t;
	};
	_proto.imgHead_i = function () {
		var t = new eui.Image();
		this.imgHead = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "manager_m_01_png";
		return t;
	};
	_proto.stateGroup_i = function () {
		var t = new eui.Group();
		this.stateGroup = t;
		t.height = 40;
		t.visible = false;
		t.width = 104;
		t.x = 48;
		t.y = 176;
		t.elementsContent = [this._Rect1_i(),this.actived_text_i(),this.cd_text_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 16;
		t.fillColor = 0x394658;
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 104;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.actived_text_i = function () {
		var t = new eui.Label();
		this.actived_text = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "生效中";
		t.textColor = 0x94f016;
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 8;
		return t;
	};
	_proto.cd_text_i = function () {
		var t = new eui.Label();
		this.cd_text = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "冷却中";
		t.textColor = 0xff0024;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 231;
		t.elementsContent = [this._Rect2_i(),this._Group1_i(),this.name_text_i(),this.lbName_i(),this.skill_group_i(),this.lbDes_i(),this.lbEffect_i(),this.lbTimer_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 32;
		t.fillColor = 0xebe5cb;
		t.height = 208;
		t.width = 439;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 149;
		t.y = 57;
		t.elementsContent = [this._Rect3_i(),this.lbLevel_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 38;
		t.fillColor = 0xFB9425;
		t.height = 38;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 128;
		return t;
	};
	_proto.lbLevel_i = function () {
		var t = new eui.Label();
		this.lbLevel = t;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "高级";
		t.verticalCenter = 0;
		return t;
	};
	_proto.name_text_i = function () {
		var t = new eui.Label();
		this.name_text = t;
		t.bold = true;
		t.size = 34;
		t.text = "外卖小哥 LV.03";
		t.textColor = 0x673f00;
		t.x = 19;
		t.y = 15;
		return t;
	};
	_proto.lbName_i = function () {
		var t = new eui.Label();
		this.lbName = t;
		t.text = "经理名称";
		t.textColor = 0x673f00;
		t.x = 19;
		t.y = 61;
		return t;
	};
	_proto.skill_group_i = function () {
		var t = new eui.Group();
		this.skill_group = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.x = 20;
		t.y = 105;
		t.elementsContent = [this._Image1_i(),this.imgSkillIcon_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skill_bg_selected_png";
		return t;
	};
	_proto.imgSkillIcon_i = function () {
		var t = new eui.Image();
		this.imgSkillIcon = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.x = -75;
		t.y = -122;
		return t;
	};
	_proto.lbDes_i = function () {
		var t = new eui.Label();
		this.lbDes = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "";
		t.textColor = 0xA56500;
		t.x = 113;
		t.y = 109;
		return t;
	};
	_proto.lbEffect_i = function () {
		var t = new eui.Label();
		this.lbEffect = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "";
		t.textColor = 0xA56500;
		t.x = 113;
		t.y = 150;
		return t;
	};
	_proto.lbTimer_i = function () {
		var t = new eui.Label();
		this.lbTimer = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "00:00";
		t.textColor = 0xA56500;
		t.visible = false;
		t.x = 113;
		t.y = 150;
		return t;
	};
	return cookActiveSkillItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/skill/ActiveSkillSkin.exml'] = window.cookActiveSkillSkin = (function (_super) {
	__extends(cookActiveSkillSkin, _super);
	var cookActiveSkillSkin$Skin138 = 	(function (_super) {
		__extends(cookActiveSkillSkin$Skin138, _super);
		function cookActiveSkillSkin$Skin138() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Image3_i()];
			this.states = [
				new eui.State ("Chef",
					[
					])
				,
				new eui.State ("Waiter",
					[
					])
				,
				new eui.State ("Courier",
					[
					])
			];
		}
		var _proto = cookActiveSkillSkin$Skin138.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.minHeight = 120;
			t.minWidth = 320;
			t.scale9Grid = new egret.Rectangle(129,54,2,2);
			t.source = "greenBtn_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.horizontalCenter = 0;
			t.verticalCenter = -5;
			t.layout = this._HorizontalLayout1_i();
			t.elementsContent = [this._Image2_i(),this._Label1_i()];
			return t;
		};
		_proto._HorizontalLayout1_i = function () {
			var t = new eui.HorizontalLayout();
			t.gap = 6;
			t.verticalAlign = "middle";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.85;
			t.scaleY = 0.85;
			t.source = "shareIcon1_png";
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.size = 34;
			t.stroke = 3;
			t.strokeColor = 0x2d7a00;
			t.text = "激活所有技能";
			t.textColor = 0xFFFFFF;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.right = 13;
			t.source = "active_skill_tips_png";
			t.top = 0;
			return t;
		};
		return cookActiveSkillSkin$Skin138;
	})(eui.Skin);

	var cookActiveSkillSkin$Skin139 = 	(function (_super) {
		__extends(cookActiveSkillSkin$Skin139, _super);
		function cookActiveSkillSkin$Skin139() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Image3_i()];
			this.states = [
				new eui.State ("Chef",
					[
					])
				,
				new eui.State ("Waiter",
					[
					])
				,
				new eui.State ("Courier",
					[
					])
			];
		}
		var _proto = cookActiveSkillSkin$Skin139.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.minHeight = 120;
			t.minWidth = 320;
			t.scale9Grid = new egret.Rectangle(129,54,2,2);
			t.source = "greenBtn_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.horizontalCenter = 0;
			t.verticalCenter = -5;
			t.layout = this._HorizontalLayout1_i();
			t.elementsContent = [this._Image2_i(),this._Label1_i()];
			return t;
		};
		_proto._HorizontalLayout1_i = function () {
			var t = new eui.HorizontalLayout();
			t.gap = 6;
			t.verticalAlign = "middle";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.85;
			t.scaleY = 0.85;
			t.source = "playIcon1_png";
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.size = 34;
			t.stroke = 3;
			t.strokeColor = 0x2d7a00;
			t.text = "激活所有技能";
			t.textColor = 0xFFFFFF;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.right = 13;
			t.source = "active_skill_tips_png";
			t.top = 0;
			return t;
		};
		return cookActiveSkillSkin$Skin139;
	})(eui.Skin);

	var cookActiveSkillSkin$Skin140 = 	(function (_super) {
		__extends(cookActiveSkillSkin$Skin140, _super);
		function cookActiveSkillSkin$Skin140() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Group1_i()];
			this.states = [
				new eui.State ("Chef",
					[
					])
				,
				new eui.State ("Waiter",
					[
					])
				,
				new eui.State ("Courier",
					[
					])
			];
		}
		var _proto = cookActiveSkillSkin$Skin140.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.minHeight = 120;
			t.minWidth = 320;
			t.scale9Grid = new egret.Rectangle(83,33,1,1);
			t.source = "yellow_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.horizontalCenter = 0;
			t.verticalCenter = -5;
			t.layout = this._HorizontalLayout1_i();
			t.elementsContent = [this._Image2_i(),this._Label1_i()];
			return t;
		};
		_proto._HorizontalLayout1_i = function () {
			var t = new eui.HorizontalLayout();
			t.gap = 6;
			t.verticalAlign = "middle";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.85;
			t.scaleY = 0.85;
			t.source = "shareIcon1_png";
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.size = 34;
			t.stroke = 3;
			t.strokeColor = 0xb85c00;
			t.text = "重置所有冷却";
			t.textColor = 0xFFFFFF;
			return t;
		};
		return cookActiveSkillSkin$Skin140;
	})(eui.Skin);

	var cookActiveSkillSkin$Skin141 = 	(function (_super) {
		__extends(cookActiveSkillSkin$Skin141, _super);
		function cookActiveSkillSkin$Skin141() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Group1_i()];
			this.states = [
				new eui.State ("Chef",
					[
					])
				,
				new eui.State ("Waiter",
					[
					])
				,
				new eui.State ("Courier",
					[
					])
			];
		}
		var _proto = cookActiveSkillSkin$Skin141.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.minHeight = 120;
			t.minWidth = 320;
			t.scale9Grid = new egret.Rectangle(83,33,1,1);
			t.source = "yellow_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.horizontalCenter = 0;
			t.verticalCenter = -5;
			t.layout = this._HorizontalLayout1_i();
			t.elementsContent = [this._Image2_i(),this._Label1_i()];
			return t;
		};
		_proto._HorizontalLayout1_i = function () {
			var t = new eui.HorizontalLayout();
			t.gap = 6;
			t.verticalAlign = "middle";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.85;
			t.scaleY = 0.85;
			t.source = "playIcon1_png";
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.size = 34;
			t.stroke = 3;
			t.strokeColor = 0xb85c00;
			t.text = "重置所有冷却";
			t.textColor = 0xFFFFFF;
			return t;
		};
		return cookActiveSkillSkin$Skin141;
	})(eui.Skin);

	var cookActiveSkillSkin$Skin142 = 	(function (_super) {
		__extends(cookActiveSkillSkin$Skin142, _super);
		function cookActiveSkillSkin$Skin142() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookActiveSkillSkin$Skin142.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_research_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookActiveSkillSkin$Skin142;
	})(eui.Skin);

	function cookActiveSkillSkin() {
		_super.call(this);
		this.skinParts = ["listGroup","item_scroller","active_btn","active_btn_video","cd_btn","cd_btn_video","close_btn","gpAll"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookActiveSkillSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.gpAll_i()];
		return t;
	};
	_proto.gpAll_i = function () {
		var t = new eui.Group();
		this.gpAll = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Label1_i(),this.item_scroller_i(),this.active_btn_i(),this.active_btn_video_i(),this.cd_btn_i(),this.cd_btn_video_i(),this.close_btn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 700;
		t.fillColor = 0xffc945;
		t.height = 700;
		t.horizontalCenter = 0;
		t.width = 700;
		t.y = 48;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.bottom = 164;
		t.ellipseWidth = 40;
		t.fillColor = 0xffc945;
		t.horizontalCenter = 0;
		t.top = 143;
		t.width = 750;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.bottom = 200;
		t.ellipseWidth = 40;
		t.fillColor = 0xf6f6e6;
		t.top = 198;
		t.width = 690;
		t.x = 30;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "技能激活";
		t.textColor = 0x8b4800;
		t.y = 99;
		return t;
	};
	_proto.item_scroller_i = function () {
		var t = new eui.Scroller();
		this.item_scroller = t;
		t.anchorOffsetY = 0;
		t.bottom = 214;
		t.horizontalCenter = 0;
		t.top = 210;
		t.width = 690;
		t.viewport = this.listGroup_i();
		return t;
	};
	_proto.listGroup_i = function () {
		var t = new eui.Group();
		this.listGroup = t;
		t.width = 690;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 14;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.active_btn_i = function () {
		var t = new cookMyButton();
		this.active_btn = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 62.5;
		t.bottom = 18;
		t.currentState = "Chef";
		t.height = 125;
		t.label = "";
		t.visible = false;
		t.width = 320;
		t.x = 550;
		t.skinName = cookActiveSkillSkin$Skin138;
		return t;
	};
	_proto.active_btn_video_i = function () {
		var t = new cookMyButton();
		this.active_btn_video = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 62.5;
		t.bottom = 18;
		t.currentState = "Chef";
		t.height = 125;
		t.label = "";
		t.visible = false;
		t.width = 320;
		t.x = 550;
		t.skinName = cookActiveSkillSkin$Skin139;
		return t;
	};
	_proto.cd_btn_i = function () {
		var t = new cookMyButton();
		this.cd_btn = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 62.5;
		t.bottom = 18;
		t.currentState = "Waiter";
		t.height = 125;
		t.label = "120";
		t.visible = false;
		t.width = 320;
		t.x = 200;
		t.skinName = cookActiveSkillSkin$Skin140;
		return t;
	};
	_proto.cd_btn_video_i = function () {
		var t = new cookMyButton();
		this.cd_btn_video = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 62.5;
		t.bottom = 18;
		t.currentState = "Waiter";
		t.height = 125;
		t.label = "120";
		t.visible = false;
		t.width = 320;
		t.x = 200;
		t.skinName = cookActiveSkillSkin$Skin141;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new cookMyButton();
		this.close_btn = t;
		t.anchorOffsetX = 36.5;
		t.anchorOffsetY = 40;
		t.label = "";
		t.x = 66.5;
		t.y = 142;
		t.skinName = cookActiveSkillSkin$Skin142;
		return t;
	};
	return cookActiveSkillSkin;
})(eui.Skin);generateEUI.paths['resource/ui/skillpoint/SkillPointItem.exml'] = window.cookSkillPointItem = (function (_super) {
	__extends(cookSkillPointItem, _super);
	function cookSkillPointItem() {
		_super.call(this);
		this.skinParts = ["icon","mask_img","level_text","level_group","star_group"];
		
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.id"],[0],this._Group1,"name");
	}
	var _proto = cookSkillPointItem.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.height = 166;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.width = 146;
		t.elementsContent = [this.icon_i(),this.mask_img_i(),this.level_group_i(),this.star_group_i()];
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.mask_img_i = function () {
		var t = new eui.Image();
		this.mask_img = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.level_group_i = function () {
		var t = new eui.Group();
		this.level_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 118;
		t.y = 139;
		t.elementsContent = [this._Rect1_i(),this.level_text_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.4;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.level_text_i = function () {
		var t = new eui.Label();
		this.level_text = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "LEVEL 1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.star_group_i = function () {
		var t = new eui.Group();
		this.star_group = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 115;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 24;
		t.source = "star_void_png";
		t.width = 25;
		t.x = 54;
		t.y = 108;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 24;
		t.source = "star_void_png";
		t.width = 25;
		t.x = 54;
		t.y = 108;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 24;
		t.source = "star_void_png";
		t.width = 25;
		t.x = 64;
		t.y = 118;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 24;
		t.source = "star_void_png";
		t.width = 25;
		t.x = 74;
		t.y = 128;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 24;
		t.source = "star_void_png";
		t.width = 25;
		t.x = 84;
		t.y = 138;
		return t;
	};
	return cookSkillPointItem;
})(eui.Skin);generateEUI.paths['resource/ui/skillpoint/SkillPointResetSkin.exml'] = window.cookSkillPointResetSkin = (function (_super) {
	__extends(cookSkillPointResetSkin, _super);
	var cookSkillPointResetSkin$Skin143 = 	(function (_super) {
		__extends(cookSkillPointResetSkin$Skin143, _super);
		function cookSkillPointResetSkin$Skin143() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookSkillPointResetSkin$Skin143.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 101;
			t.horizontalCenter = 0;
			t.scaleX = 1;
			t.scaleY = 1;
			t.width = 330;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 101;
			t.scale9Grid = new egret.Rectangle(32,27,196,44);
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "greenBtn_bg_png";
			t.width = 330;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.scaleX = 0.9;
			t.scaleY = 0.9;
			t.source = "sure_text_png";
			t.y = 16;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.height = 40;
			t.source = "cash_png";
			t.width = 51;
			t.x = 170;
			t.y = 51;
			return t;
		};
		return cookSkillPointResetSkin$Skin143;
	})(eui.Skin);

	var cookSkillPointResetSkin$Skin144 = 	(function (_super) {
		__extends(cookSkillPointResetSkin$Skin144, _super);
		function cookSkillPointResetSkin$Skin144() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookSkillPointResetSkin$Skin144.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookSkillPointResetSkin$Skin144;
	})(eui.Skin);

	function cookSkillPointResetSkin() {
		_super.call(this);
		this.skinParts = ["resetBtn","cost_cash","user_cash","closeBtn"];
		
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = cookSkillPointResetSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Group1_i(),this._Group2_i(),this._Label1_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 722;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(50,28,300,47);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_white_btn_png";
		t.verticalCenter = 0;
		t.width = 532;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(86,47,523,10);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "popup_header_png";
		t.width = 575;
		t.x = 88;
		t.y = -14;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sp_reset_big_png";
		t.x = 285;
		t.y = 208;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sp_reset_text_png";
		t.x = 334;
		t.y = 22;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 101;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 330;
		t.x = 210;
		t.y = 541;
		t.elementsContent = [this.resetBtn_i(),this.cost_cash_i()];
		return t;
	};
	_proto.resetBtn_i = function () {
		var t = new cookMyButton();
		this.resetBtn = t;
		t.height = 101;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 330;
		t.skinName = cookSkillPointResetSkin$Skin143;
		return t;
	};
	_proto.cost_cash_i = function () {
		var t = new eui.Label();
		this.cost_cash = t;
		t.bold = true;
		t.right = 168;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x508A02;
		t.text = "200";
		t.top = 62;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 42;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 289;
		t.y = 107;
		t.elementsContent = [this._Rect1_i(),this._Image5_i(),this.user_cash_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 12;
		t.ellipseWidth = 12;
		t.fillColor = 0xA5A68F;
		t.height = 42;
		t.width = 144;
		t.x = 29;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cash_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.user_cash_i = function () {
		var t = new eui.Label();
		this.user_cash = t;
		t.bold = true;
		t.horizontalCenter = 19;
		t.size = 36;
		t.text = "0";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 38;
		t.text = "重制技能树并回收所有 技能点";
		t.textAlign = "center";
		t.textColor = 0x8E7142;
		t.width = 386;
		t.x = 182;
		t.y = 432;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 500;
		t.y = 40;
		t.skinName = cookSkillPointResetSkin$Skin144;
		return t;
	};
	return cookSkillPointResetSkin;
})(eui.Skin);generateEUI.paths['resource/ui/skillpoint/SkillPointSkin.exml'] = window.cookSkillPointSkin = (function (_super) {
	__extends(cookSkillPointSkin, _super);
	var cookSkillPointSkin$Skin145 = 	(function (_super) {
		__extends(cookSkillPointSkin$Skin145, _super);
		function cookSkillPointSkin$Skin145() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookSkillPointSkin$Skin145.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sp_reset_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookSkillPointSkin$Skin145;
	})(eui.Skin);

	var cookSkillPointSkin$Skin146 = 	(function (_super) {
		__extends(cookSkillPointSkin$Skin146, _super);
		function cookSkillPointSkin$Skin146() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookSkillPointSkin$Skin146.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 105;
			t.scale9Grid = new egret.Rectangle(32,27,196,44);
			t.source = "greenBtn_bg_png";
			t.width = 220;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "unlock_btn_text_png";
			t.y = 9;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.height = 40;
			t.source = "skillpoint_coin_png";
			t.width = 33;
			t.x = 134.3;
			t.y = 48.99;
			return t;
		};
		return cookSkillPointSkin$Skin146;
	})(eui.Skin);

	var cookSkillPointSkin$Skin147 = 	(function (_super) {
		__extends(cookSkillPointSkin$Skin147, _super);
		function cookSkillPointSkin$Skin147() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookSkillPointSkin$Skin147.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 105;
			t.scale9Grid = new egret.Rectangle(32,27,196,44);
			t.source = "greenBtn_bg_png";
			t.width = 220;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "sp_upgrade_text_png";
			t.y = 9;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.height = 40;
			t.source = "skillpoint_coin_png";
			t.width = 33;
			t.x = 134.3;
			t.y = 48.99;
			return t;
		};
		return cookSkillPointSkin$Skin147;
	})(eui.Skin);

	var cookSkillPointSkin$Skin148 = 	(function (_super) {
		__extends(cookSkillPointSkin$Skin148, _super);
		function cookSkillPointSkin$Skin148() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookSkillPointSkin$Skin148.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 101;
			t.scale9Grid = new egret.Rectangle(32,27,196,44);
			t.scaleX = 1;
			t.scaleY = 1;
			t.source = "greenBtn_bg_png";
			t.width = 330;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 49;
			t.source = "coin_png";
			t.width = 46;
			t.x = 82;
			t.y = 20;
			return t;
		};
		return cookSkillPointSkin$Skin148;
	})(eui.Skin);

	var cookSkillPointSkin$Skin149 = 	(function (_super) {
		__extends(cookSkillPointSkin$Skin149, _super);
		function cookSkillPointSkin$Skin149() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookSkillPointSkin$Skin149.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookSkillPointSkin$Skin149;
	})(eui.Skin);

	function cookSkillPointSkin() {
		_super.call(this);
		this.skinParts = ["user_sp","addSP","header","line_group","end_img","end_mask","end","start","item_group","resetBtn","start_text","store_img","first_label","current_text","next_text","text_group","unlock","upgrade","cost_text","upgradeBtn","value_group","footer","unlockBtn","unlock_cost","lock_group","closeBtn"];
		
		this.elementsContent = [this._Image1_i(),this.header_i(),this.line_group_i(),this.item_group_i(),this.resetBtn_i(),this.footer_i(),this.lock_group_i(),this.closeBtn_i()];
	}
	var _proto = cookSkillPointSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "skillpoint_bg_jpg";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.header_i = function () {
		var t = new eui.Group();
		this.header = t;
		t.height = 143;
		t.top = 0;
		t.width = 750;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.addSP_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xe39600;
		t.top = 0;
		t.width = 750;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 3;
		t.fillColor = 0xffd133;
		t.top = 0;
		t.width = 750;
		return t;
	};
	_proto.addSP_i = function () {
		var t = new eui.Group();
		this.addSP = t;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 166;
		t.x = 349;
		t.y = 76;
		t.elementsContent = [this._Rect3_i(),this._Image2_i(),this.user_sp_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xc58310;
		t.height = 42;
		t.width = 166;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "skillpoint_coin_add_png";
		t.verticalCenter = 0;
		t.x = -12;
		return t;
	};
	_proto.user_sp_i = function () {
		var t = new eui.BitmapLabel();
		this.user_sp = t;
		t.font = "coinText_fnt";
		t.horizontalCenter = 0;
		t.text = "0";
		t.verticalCenter = 2;
		return t;
	};
	_proto.line_group_i = function () {
		var t = new eui.Group();
		this.line_group = t;
		t.height = 810;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this._Rect7_i(),this._Rect8_i(),this._Rect9_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffff1f;
		t.height = 99;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 15;
		t.x = 378;
		t.y = 613;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x319d9c;
		t.height = 99;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 15;
		t.x = 368;
		t.y = 387;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x319d9c;
		t.height = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 99;
		t.x = 436;
		t.y = 309;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x319d9c;
		t.height = 99;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 15;
		t.x = 584;
		t.y = 161;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x319d9c;
		t.height = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 99;
		t.x = 436;
		t.y = 85;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x319d9c;
		t.height = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 99;
		t.x = 221;
		t.y = 85;
		return t;
	};
	_proto.item_group_i = function () {
		var t = new eui.Group();
		this.item_group = t;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.end_i(),this.start_i()];
		return t;
	};
	_proto.end_i = function () {
		var t = new eui.Group();
		this.end = t;
		t.height = 198;
		t.name = "end";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.width = 205;
		t.x = 55;
		t.elementsContent = [this.end_img_i(),this.end_mask_i()];
		return t;
	};
	_proto.end_img_i = function () {
		var t = new eui.Image();
		this.end_img = t;
		t.horizontalCenter = 0;
		t.source = "sp_end_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.end_mask_i = function () {
		var t = new eui.Image();
		this.end_mask = t;
		t.horizontalCenter = 0;
		t.source = "sp_end_mask_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.start_i = function () {
		var t = new eui.Group();
		this.start = t;
		t.horizontalCenter = 0;
		t.name = "start";
		t.touchChildren = false;
		t.touchEnabled = true;
		t.y = 691;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sp_start_png";
		return t;
	};
	_proto.resetBtn_i = function () {
		var t = new cookMyButton();
		this.resetBtn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 45;
		t.label = "";
		t.x = 629;
		t.y = 218;
		t.skinName = cookSkillPointSkin$Skin145;
		return t;
	};
	_proto.footer_i = function () {
		var t = new eui.Group();
		this.footer = t;
		t.bottom = 0;
		t.height = 143;
		t.visible = false;
		t.width = 750;
		t.elementsContent = [this._Rect10_i(),this._Rect11_i(),this.start_text_i(),this.value_group_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xE39600;
		t.top = 0;
		t.width = 750;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xFFD133;
		t.top = 3;
		t.width = 750;
		return t;
	};
	_proto.start_text_i = function () {
		var t = new eui.Label();
		this.start_text = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "解锁这些强大的技能来获取很多超赞的效果";
		t.textColor = 0xcb8100;
		t.visible = false;
		t.y = 34;
		return t;
	};
	_proto.value_group_i = function () {
		var t = new eui.Group();
		this.value_group = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.store_img_i(),this.first_label_i(),this.text_group_i(),this.upgradeBtn_i()];
		return t;
	};
	_proto.store_img_i = function () {
		var t = new eui.Image();
		this.store_img = t;
		t.bottom = 25;
		t.left = 23;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sp_store_1_png";
		t.x = 23;
		t.y = -7;
		return t;
	};
	_proto.first_label_i = function () {
		var t = new eui.Label();
		this.first_label = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.lineSpacing = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "是啥早餐店的收入增加 40%";
		t.textColor = 0xcb8100;
		t.visible = false;
		t.x = 139;
		t.y = 31;
		return t;
	};
	_proto.text_group_i = function () {
		var t = new eui.Group();
		this.text_group = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 139;
		t.y = 31;
		t.elementsContent = [this.current_text_i(),this._Label1_i(),this.next_text_i()];
		return t;
	};
	_proto.current_text_i = function () {
		var t = new eui.Label();
		this.current_text = t;
		t.bold = true;
		t.size = 28;
		t.text = "早餐店的收入增加40%";
		t.textColor = 0xcb8100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "下个等级";
		t.textColor = 0x76ff00;
		t.y = 50;
		return t;
	};
	_proto.next_text_i = function () {
		var t = new eui.Label();
		this.next_text = t;
		t.bold = true;
		t.text = "44%";
		t.textColor = 0xcb8100;
		t.x = 133;
		t.y = 50;
		return t;
	};
	_proto.upgradeBtn_i = function () {
		var t = new eui.Group();
		this.upgradeBtn = t;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 24;
		t.width = 220;
		t.x = 498;
		t.y = 24;
		t.elementsContent = [this.unlock_i(),this.upgrade_i(),this.cost_text_i()];
		return t;
	};
	_proto.unlock_i = function () {
		var t = new cookMyButton();
		this.unlock = t;
		t.anchorOffsetX = 110;
		t.anchorOffsetY = 52;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.skinName = cookSkillPointSkin$Skin146;
		return t;
	};
	_proto.upgrade_i = function () {
		var t = new cookMyButton();
		this.upgrade = t;
		t.anchorOffsetX = 110;
		t.anchorOffsetY = 52;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.skinName = cookSkillPointSkin$Skin147;
		return t;
	};
	_proto.cost_text_i = function () {
		var t = new eui.Label();
		this.cost_text = t;
		t.bold = true;
		t.right = 98;
		t.size = 36;
		t.stroke = 3;
		t.strokeColor = 0x508a02;
		t.text = "200";
		t.y = 54;
		return t;
	};
	_proto.lock_group_i = function () {
		var t = new eui.Group();
		this.lock_group = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this._Rect12_i(),this._Group2_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.4;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Group1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "skillpoint_lock_png";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "skillpoint_unlock_banner_png";
		t.y = 528;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "icon_down_png";
		t.y = 306;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 101;
		t.horizontalCenter = 0;
		t.width = 330;
		t.y = 385;
		t.elementsContent = [this.unlockBtn_i(),this.unlock_cost_i()];
		return t;
	};
	_proto.unlockBtn_i = function () {
		var t = new cookMyButton();
		this.unlockBtn = t;
		t.anchorOffsetX = 165;
		t.anchorOffsetY = 50;
		t.height = 101;
		t.horizontalCenter = 0;
		t.width = 330;
		t.y = 50;
		t.skinName = cookSkillPointSkin$Skin148;
		return t;
	};
	_proto.unlock_cost_i = function () {
		var t = new eui.Label();
		this.unlock_cost = t;
		t.bold = true;
		t.left = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 3;
		t.strokeColor = 0x508A02;
		t.text = "200";
		t.touchEnabled = false;
		t.verticalCenter = -5;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.label = "";
		t.x = 50;
		t.y = 88;
		t.skinName = cookSkillPointSkin$Skin149;
		return t;
	};
	return cookSkillPointSkin;
})(eui.Skin);generateEUI.paths['resource/ui/upgrade/upgradeSkin.exml'] = window.cookupgradeSkin = (function (_super) {
	__extends(cookupgradeSkin, _super);
	var cookupgradeSkin$Skin150 = 	(function (_super) {
		__extends(cookupgradeSkin$Skin150, _super);
		function cookupgradeSkin$Skin150() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookupgradeSkin$Skin150.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 99;
			t.source = "pop_btn1_png";
			t.width = 245;
			return t;
		};
		return cookupgradeSkin$Skin150;
	})(eui.Skin);

	var cookupgradeSkin$Skin151 = 	(function (_super) {
		__extends(cookupgradeSkin$Skin151, _super);
		function cookupgradeSkin$Skin151() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookupgradeSkin$Skin151.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookupgradeSkin$Skin151;
	})(eui.Skin);

	function cookupgradeSkin() {
		_super.call(this);
		this.skinParts = ["upgrade_btn","lbCost","lbCost0","upcoin_temp","range_group","lbLevelHint","pbUpgrade","lbLevelHint2","waiter_group","courier_group","imgAccountCoin","lbAccountCoin","gpAccountCoin","close_btn","gpAll"];
		
		this.elementsContent = [this._Group17_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.title"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.coin_img"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.cost"],[0],this.lbCost,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.cost"],[0],this.lbCost0,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this._Image8,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.total"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.next_data.total"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.take"],[0],this._Label6,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.next_data.take"],[0],this._Label7,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.speed"],[0],this._Label9,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.next_data.speed"],[0],this._Label10,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.takespeed"],[0],this._Label12,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.next_data.takespeed"],[0],this._Label13,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.number"],[0],this._Label15,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.next_data.number"],[0],this._Label16,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.total"],[0],this._Label18,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.next_data.total"],[0],this._Label19,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.take"],[0],this._Label21,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.next_data.take"],[0],this._Label22,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.speed"],[0],this._Label24,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.next_data.speed"],[0],this._Label25,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.takespeed"],[0],this._Label27,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.next_data.takespeed"],[0],this._Label28,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.number"],[0],this._Label30,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.next_data.number"],[0],this._Label31,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.coin_img"],[0],this._Image19,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.coin_img"],[0],this._Image20,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.coin_img"],[0],this._Image21,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.account_coin_img"],[0],this.imgAccountCoin,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.account_coin"],[0],this.lbAccountCoin,"text");
	}
	var _proto = cookupgradeSkin.prototype;

	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.gpAll_i()];
		return t;
	};
	_proto.gpAll_i = function () {
		var t = new eui.Group();
		this.gpAll = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 750;
		t.x = -297;
		t.y = -86;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Label1_i(),this._Group5_i(),this._Group6_i(),this.waiter_group_i(),this.courier_group_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this.gpAccountCoin_i(),this.close_btn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf6f6e6;
		t.height = 967;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 652;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "popup_header_png";
		t.y = 123;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 43;
		t.y = 154;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 135;
		t.horizontalCenter = 0;
		t.width = 652;
		t.y = 1109;
		t.elementsContent = [this._Rect2_i(),this._Rect3_i(),this.upcoin_temp_i(),this.range_group_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 20;
		t.fillColor = 0xfac845;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xfac845;
		t.height = 20;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.upcoin_temp_i = function () {
		var t = new eui.Group();
		this.upcoin_temp = t;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.x = 367;
		t.y = 18;
		t.elementsContent = [this.upgrade_btn_i(),this._Image2_i(),this.lbCost_i(),this.lbCost0_i()];
		return t;
	};
	_proto.upgrade_btn_i = function () {
		var t = new cookMyButton();
		this.upgrade_btn = t;
		t.anchorOffsetX = 122.5;
		t.anchorOffsetY = 49.5;
		t.label = "";
		t.x = 122.5;
		t.y = 49.5;
		t.skinName = cookupgradeSkin$Skin150;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 49;
		t.touchEnabled = false;
		t.width = 45;
		t.x = 32;
		t.y = 21;
		return t;
	};
	_proto.lbCost_i = function () {
		var t = new eui.Label();
		this.lbCost = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 35;
		t.stroke = 2;
		t.strokeColor = 0x298000;
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalCenter = -4.5;
		t.width = 163;
		t.x = 74;
		return t;
	};
	_proto.lbCost0_i = function () {
		var t = new eui.Label();
		this.lbCost0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 35;
		t.stroke = 2;
		t.strokeColor = 0x298000;
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalCenter = -4.5;
		t.visible = false;
		t.width = 163;
		return t;
	};
	_proto.range_group_i = function () {
		var t = new eui.Group();
		this.range_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.verticalCenter = 0;
		t.x = 26;
		t.elementsContent = [this._Image3_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(21,18,21,40);
		t.source = "upgrade_range_bg_png";
		t.width = 270;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.name = "1";
		t.touchChildren = false;
		t.x = 3;
		t.y = 3;
		t.elementsContent = [this._Image4_i(),this._BitmapLabel1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "upgrade_selected_bg_png";
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "coinText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = -7;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "X1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.name = "2";
		t.touchChildren = false;
		t.x = 69;
		t.y = 3;
		t.elementsContent = [this._Image5_i(),this._BitmapLabel2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "upgrade_selected_bg_png";
		t.visible = false;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "coinText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = -7;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "X10";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.name = "3";
		t.touchChildren = false;
		t.x = 135;
		t.y = 3;
		t.elementsContent = [this._Image6_i(),this._BitmapLabel3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "upgrade_selected_bg_png";
		t.visible = false;
		return t;
	};
	_proto._BitmapLabel3_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "coinText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = -7;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "X50";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.name = "4";
		t.touchChildren = false;
		t.x = 201;
		t.y = 3;
		t.elementsContent = [this._Image7_i(),this._BitmapLabel4_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "upgrade_selected_bg_png";
		t.visible = false;
		return t;
	};
	_proto._BitmapLabel4_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "coinText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = -7;
		t.text = "大";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 240;
		t.horizontalCenter = 0;
		t.width = 598;
		t.y = 232;
		t.elementsContent = [this._Image8_i(),this.lbLevelHint_i(),this.pbUpgrade_i(),this.lbLevelHint2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		this._Image8 = t;
		t.verticalCenter = 0;
		t.x = 12;
		return t;
	};
	_proto.lbLevelHint_i = function () {
		var t = new eui.Label();
		this.lbLevelHint = t;
		t.right = 12;
		t.size = 35;
		t.text = "等级提升x1";
		t.textColor = 0xa09031;
		t.y = 40;
		return t;
	};
	_proto.pbUpgrade_i = function () {
		var t = new eui.ProgressBar();
		this.pbUpgrade = t;
		t.right = 12;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.skinName = "cookUpgradeProgressSkin";
		t.slideDuration = 0;
		t.y = 90;
		return t;
	};
	_proto.lbLevelHint2_i = function () {
		var t = new eui.Label();
		this.lbLevelHint2 = t;
		t.right = 12;
		t.size = 30;
		t.text = "还差可以领取奖励";
		t.textColor = 0xA09031;
		t.y = 160;
		return t;
	};
	_proto.waiter_group_i = function () {
		var t = new eui.Group();
		this.waiter_group = t;
		t.anchorOffsetY = 0;
		t.height = 605;
		t.horizontalCenter = 0;
		t.y = 489;
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.horizontalCenter = 0;
		t.width = 562;
		t.y = 0;
		t.elementsContent = [this._Rect4_i(),this._Image9_i(),this._Label2_i(),this._Rect5_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xe9e1c4;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.left = 8;
		t.source = "upgrade_waiter_total_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.left = 115;
		t.text = "总取餐量";
		t.textColor = 0x663333;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillColor = 0xbbad88;
		t.height = 91;
		t.right = 8;
		t.verticalCenter = 0;
		t.width = 179.09;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.right = 10;
		t.top = 12;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.bottom = 12;
		t.right = 10;
		t.textColor = 0x46f700;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.horizontalCenter = 0;
		t.width = 562;
		t.y = 125;
		t.elementsContent = [this._Rect6_i(),this._Image10_i(),this._Label5_i(),this._Rect7_i(),this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xE9E1C4;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.left = 8;
		t.source = "upgrade_waiter_take_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.left = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "取餐量";
		t.textColor = 0x663333;
		t.verticalCenter = 0;
		t.x = 115;
		t.y = 163;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillColor = 0xbbad88;
		t.height = 91;
		t.right = 8;
		t.verticalCenter = 0;
		t.width = 179.09;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.right = 10;
		t.top = 12;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		this._Label7 = t;
		t.bottom = 12;
		t.right = 10;
		t.textColor = 0x46f700;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.horizontalCenter = 0;
		t.width = 562;
		t.y = 250;
		t.elementsContent = [this._Rect8_i(),this._Image11_i(),this._Label8_i(),this._Rect9_i(),this._Label9_i(),this._Label10_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xE9E1C4;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.left = 8;
		t.source = "upgrade_waiter_speed_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.left = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "移动速度";
		t.textColor = 0x663333;
		t.verticalCenter = 0;
		t.x = 115;
		t.y = 38;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillColor = 0xbbad88;
		t.height = 91;
		t.right = 8;
		t.verticalCenter = 0;
		t.width = 179.09;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		this._Label9 = t;
		t.right = 10;
		t.top = 12;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		this._Label10 = t;
		t.bottom = 12;
		t.right = 10;
		t.textColor = 0x46f700;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 562;
		t.x = 0;
		t.y = 375;
		t.elementsContent = [this._Rect10_i(),this._Image12_i(),this._Label11_i(),this._Rect11_i(),this._Label12_i(),this._Label13_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xE9E1C4;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.left = 8;
		t.source = "upgrade_waiter_takespeed_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.left = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "取餐速度";
		t.textColor = 0x663333;
		t.verticalCenter = 0;
		t.x = 115;
		t.y = -87;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillColor = 0xbbad88;
		t.height = 91;
		t.right = 8;
		t.verticalCenter = 0;
		t.width = 179.09;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		this._Label12 = t;
		t.right = 10;
		t.top = 12;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		this._Label13 = t;
		t.bottom = 12;
		t.right = 10;
		t.textColor = 0x46f700;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.horizontalCenter = 0;
		t.width = 562;
		t.y = 500;
		t.elementsContent = [this._Rect12_i(),this._Image13_i(),this._Label14_i(),this._Rect13_i(),this._Label15_i(),this._Label16_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xE9E1C4;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.left = 8;
		t.source = "upgrade_waiter_number_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.left = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "服务员人数";
		t.textColor = 0x663333;
		t.verticalCenter = 0;
		t.x = 115;
		t.y = -212;
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillColor = 0xbbad88;
		t.height = 91;
		t.right = 8;
		t.verticalCenter = 0;
		t.width = 179.09;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		this._Label15 = t;
		t.right = 10;
		t.top = 12;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		this._Label16 = t;
		t.bottom = 12;
		t.right = 10;
		t.textColor = 0x46f700;
		return t;
	};
	_proto.courier_group_i = function () {
		var t = new eui.Group();
		this.courier_group = t;
		t.anchorOffsetY = 0;
		t.height = 605;
		t.horizontalCenter = 0;
		t.y = 489;
		t.elementsContent = [this._Group12_i(),this._Group13_i(),this._Group14_i(),this._Group15_i(),this._Group16_i()];
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.horizontalCenter = 0;
		t.width = 562;
		t.y = 0;
		t.elementsContent = [this._Rect14_i(),this._Image14_i(),this._Label17_i(),this._Rect15_i(),this._Label18_i(),this._Label19_i()];
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xE9E1C4;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.left = 8;
		t.source = "upgrade_courier_total_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.left = 115;
		t.text = "总外卖量";
		t.textColor = 0x663333;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillColor = 0xBBAD88;
		t.height = 91;
		t.right = 8;
		t.verticalCenter = 0;
		t.width = 179.09;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		this._Label18 = t;
		t.right = 10;
		t.top = 12;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		this._Label19 = t;
		t.bottom = 12;
		t.right = 10;
		t.textColor = 0x46f700;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.horizontalCenter = 0;
		t.width = 562;
		t.y = 125;
		t.elementsContent = [this._Rect16_i(),this._Image15_i(),this._Label20_i(),this._Rect17_i(),this._Label21_i(),this._Label22_i()];
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xE9E1C4;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.left = 8;
		t.source = "upgrade_courier_take_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.left = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "装载量";
		t.textColor = 0x663333;
		t.verticalCenter = 0;
		t.x = 115;
		t.y = 163;
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillColor = 0xBBAD88;
		t.height = 91;
		t.right = 8;
		t.verticalCenter = 0;
		t.width = 179.09;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		this._Label21 = t;
		t.right = 10;
		t.top = 12;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		this._Label22 = t;
		t.bottom = 12;
		t.right = 10;
		t.textColor = 0x46f700;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.horizontalCenter = 0;
		t.width = 562;
		t.y = 250;
		t.elementsContent = [this._Rect18_i(),this._Image16_i(),this._Label23_i(),this._Rect19_i(),this._Label24_i(),this._Label25_i()];
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xE9E1C4;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.left = 8;
		t.source = "upgrade_courier_speed_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.left = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "移动速度";
		t.textColor = 0x663333;
		t.verticalCenter = 0;
		t.x = 115;
		t.y = 38;
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillColor = 0xBBAD88;
		t.height = 91;
		t.right = 8;
		t.verticalCenter = 0;
		t.width = 179.09;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		this._Label24 = t;
		t.right = 10;
		t.top = 12;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		this._Label25 = t;
		t.bottom = 12;
		t.right = 10;
		t.textColor = 0x46f700;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 562;
		t.x = 0;
		t.y = 375;
		t.elementsContent = [this._Rect20_i(),this._Image17_i(),this._Label26_i(),this._Rect21_i(),this._Label27_i(),this._Label28_i()];
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xE9E1C4;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.left = 8;
		t.source = "upgrade_courier_takespeed_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.left = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "装载速度";
		t.textColor = 0x663333;
		t.verticalCenter = 0;
		t.x = 115;
		t.y = -87;
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillColor = 0xBBAD88;
		t.height = 91;
		t.right = 8;
		t.verticalCenter = 0;
		t.width = 179.09;
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		this._Label27 = t;
		t.right = 10;
		t.top = 12;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		this._Label28 = t;
		t.bottom = 12;
		t.right = 10;
		t.textColor = 0x46f700;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.horizontalCenter = 0;
		t.width = 562;
		t.y = 500;
		t.elementsContent = [this._Rect22_i(),this._Image18_i(),this._Label29_i(),this._Rect23_i(),this._Label30_i(),this._Label31_i()];
		return t;
	};
	_proto._Rect22_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xE9E1C4;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.left = 8;
		t.source = "upgrade_courier_number_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label29_i = function () {
		var t = new eui.Label();
		t.left = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "外卖员人数";
		t.textColor = 0x663333;
		t.verticalCenter = 0;
		t.x = 115;
		t.y = -212;
		return t;
	};
	_proto._Rect23_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillColor = 0xBBAD88;
		t.height = 91;
		t.right = 8;
		t.verticalCenter = 0;
		t.width = 179.09;
		return t;
	};
	_proto._Label30_i = function () {
		var t = new eui.Label();
		this._Label30 = t;
		t.right = 10;
		t.top = 12;
		return t;
	};
	_proto._Label31_i = function () {
		var t = new eui.Label();
		this._Label31 = t;
		t.bottom = 12;
		t.right = 10;
		t.textColor = 0x46f700;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		this._Image19 = t;
		t.height = 31;
		t.touchEnabled = false;
		t.width = 29;
		t.x = 471;
		t.y = 502;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		this._Image20 = t;
		t.height = 31;
		t.touchEnabled = false;
		t.width = 29;
		t.x = 471;
		t.y = 627;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		this._Image21 = t;
		t.height = 31;
		t.touchEnabled = false;
		t.width = 29;
		t.x = 471;
		t.y = 877;
		return t;
	};
	_proto.gpAccountCoin_i = function () {
		var t = new eui.Group();
		this.gpAccountCoin = t;
		t.height = 42;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.width = 256;
		t.x = 36;
		t.y = 67;
		t.elementsContent = [this._Rect24_i(),this.imgAccountCoin_i(),this.lbAccountCoin_i(),this._Image22_i()];
		return t;
	};
	_proto._Rect24_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xa85c07;
		t.height = 42;
		t.verticalCenter = 0;
		t.width = 256;
		return t;
	};
	_proto.imgAccountCoin_i = function () {
		var t = new eui.Image();
		this.imgAccountCoin = t;
		t.height = 45;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 42;
		t.x = -14;
		return t;
	};
	_proto.lbAccountCoin_i = function () {
		var t = new eui.BitmapLabel();
		this.lbAccountCoin = t;
		t.font = "commonText_fnt";
		t.horizontalCenter = 0;
		t.letterSpacing = 2;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 26;
		t.source = "open_outerring_png";
		t.touchEnabled = false;
		t.width = 25;
		t.x = 12;
		t.y = 22;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new cookMyButton();
		this.close_btn = t;
		t.label = "";
		t.top = 150;
		t.x = 640;
		t.skinName = cookupgradeSkin$Skin151;
		return t;
	};
	return cookupgradeSkin;
})(eui.Skin);generateEUI.paths['resource/ui/wheel/wheelItemSkin.exml'] = window.cookwheelItemSkin = (function (_super) {
	__extends(cookwheelItemSkin, _super);
	function cookwheelItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","prop","desc"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = cookwheelItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 267;
		t.height = 267;
		t.width = 0;
		t.elementsContent = [this.bg_i(),this.prop_i(),this.desc_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 12;
		t.horizontalCenter = 0;
		t.source = "";
		return t;
	};
	_proto.prop_i = function () {
		var t = new eui.Image();
		this.prop = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "";
		t.y = 17;
		return t;
	};
	_proto.desc_i = function () {
		var t = new eui.Label();
		this.desc = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "";
		t.textColor = 0xcc9458;
		t.y = 123;
		return t;
	};
	return cookwheelItemSkin;
})(eui.Skin);generateEUI.paths['resource/ui/wheel/wheelSkin.exml'] = window.cookwheelSkin = (function (_super) {
	__extends(cookwheelSkin, _super);
	var cookwheelSkin$Skin152 = 	(function (_super) {
		__extends(cookwheelSkin$Skin152, _super);
		function cookwheelSkin$Skin152() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookwheelSkin$Skin152.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookwheelSkin$Skin152;
	})(eui.Skin);

	var cookwheelSkin$Skin153 = 	(function (_super) {
		__extends(cookwheelSkin$Skin153, _super);
		function cookwheelSkin$Skin153() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookwheelSkin$Skin153.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 111;
			t.scale9Grid = new egret.Rectangle(32,32,196,36);
			t.source = "greenBtn_bg_png";
			t.width = 294;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookwheelSkin$Skin153;
	})(eui.Skin);

	var cookwheelSkin$Skin154 = 	(function (_super) {
		__extends(cookwheelSkin$Skin154, _super);
		function cookwheelSkin$Skin154() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = cookwheelSkin$Skin154.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 111;
			t.scale9Grid = new egret.Rectangle(20,24,120,21);
			t.source = "yellow_btn_png";
			t.width = 294;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return cookwheelSkin$Skin154;
	})(eui.Skin);

	function cookwheelSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","imgCoin","coinLb","coinGroup","cashLb","cashGroup","runGroup","freeTip","timerText","timerTextGroup","run_freeBtn","type","timeLb","other_free","run_cashBtn","other_text","other_cash","other_group"];
		
		this.elementsContent = [this._Group5_i()];
	}
	var _proto = cookwheelSkin.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "outtering_bg_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 750;
		t.elementsContent = [this._Rect1_i(),this.closeBtn_i(),this.coinGroup_i(),this.cashGroup_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFD133;
		t.height = 146;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xE39600;
		t.strokeWeight = 3;
		t.verticalCenter = 0;
		t.width = 762;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new cookMyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 27;
		t.label = "";
		t.x = 50;
		t.y = 74;
		t.skinName = cookwheelSkin$Skin152;
		return t;
	};
	_proto.coinGroup_i = function () {
		var t = new eui.Group();
		this.coinGroup = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 21;
		t.height = 42;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 180;
		t.x = 490;
		t.y = 93;
		t.elementsContent = [this._Rect2_i(),this.imgCoin_i(),this.coinLb_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xA85C07;
		t.percentHeight = 100;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.imgCoin_i = function () {
		var t = new eui.Image();
		this.imgCoin = t;
		t.height = 45;
		t.source = "coin1_png";
		t.verticalCenter = 0;
		t.width = 42;
		t.x = -14;
		return t;
	};
	_proto.coinLb_i = function () {
		var t = new eui.BitmapLabel();
		this.coinLb = t;
		t.font = "commonText_fnt";
		t.horizontalCenter = 14;
		t.letterSpacing = 2;
		t.text = "0";
		t.verticalCenter = 0;
		return t;
	};
	_proto.cashGroup_i = function () {
		var t = new eui.Group();
		this.cashGroup = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 24;
		t.height = 42;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 180;
		t.x = 269;
		t.y = 96;
		t.elementsContent = [this._Rect3_i(),this._Image2_i(),this.cashLb_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xA85C07;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "cash_png";
		t.verticalCenter = 0;
		t.x = -16;
		return t;
	};
	_proto.cashLb_i = function () {
		var t = new eui.BitmapLabel();
		this.cashLb = t;
		t.font = "commonText_fnt";
		t.horizontalCenter = 14;
		t.letterSpacing = 2;
		t.text = "0";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this._Group2_i(),this._Image4_i(),this.runGroup_i(),this._Group3_i(),this._Image7_i(),this.freeTip_i(),this.timerTextGroup_i(),this.other_group_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "wheel_title_png";
		t.top = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wheel_bg2_png";
		t.top = 166;
		t.x = 30;
		return t;
	};
	_proto.runGroup_i = function () {
		var t = new eui.Group();
		this.runGroup = t;
		t.anchorOffsetX = 345;
		t.anchorOffsetY = 345;
		t.height = 690;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 690;
		t.x = 30;
		t.y = 511;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 104;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "wheel_point_png";
		t.top = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "wheel_center_png";
		t.y = 322;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wheel_star_png";
		t.touchEnabled = false;
		t.x = 12;
		t.y = 166;
		return t;
	};
	_proto.freeTip_i = function () {
		var t = new eui.Label();
		this.freeTip = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "观看一段视频或花费超级现金";
		t.textColor = 0xa78349;
		t.y = 895;
		return t;
	};
	_proto.timerTextGroup_i = function () {
		var t = new eui.Group();
		this.timerTextGroup = t;
		t.height = 66;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 550;
		t.x = 100;
		t.y = 881;
		t.elementsContent = [this._Rect4_i(),this.timerText_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillAlpha = 0.2;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.timerText_i = function () {
		var t = new eui.Label();
		this.timerText = t;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "下次免费转盘：5时58分";
		t.verticalCenter = 0;
		return t;
	};
	_proto.other_group_i = function () {
		var t = new eui.Group();
		this.other_group = t;
		t.anchorOffsetX = 309;
		t.anchorOffsetY = 55;
		t.left = 66;
		t.right = 66;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.y = 1018;
		t.elementsContent = [this.other_free_i(),this.other_cash_i()];
		return t;
	};
	_proto.other_free_i = function () {
		var t = new eui.Group();
		this.other_free = t;
		t.height = 111;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 294;
		t.x = 0;
		t.elementsContent = [this.run_freeBtn_i(),this._Image8_i(),this.type_i(),this.timeLb_i()];
		return t;
	};
	_proto.run_freeBtn_i = function () {
		var t = new cookMyButton();
		this.run_freeBtn = t;
		t.anchorOffsetX = 147;
		t.anchorOffsetY = 55;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = cookwheelSkin$Skin153;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "free_text_png";
		t.touchEnabled = false;
		t.x = 130;
		t.y = 28;
		return t;
	};
	_proto.type_i = function () {
		var t = new eui.Image();
		this.type = t;
		t.source = "shareIcon1_png";
		t.touchEnabled = false;
		t.x = 59;
		t.y = 28;
		return t;
	};
	_proto.timeLb_i = function () {
		var t = new eui.Label();
		this.timeLb = t;
		t.bold = true;
		t.size = 38;
		t.stroke = 2;
		t.strokeColor = 0xd87615;
		t.text = "[3/3]";
		t.x = 104;
		t.y = 125;
		return t;
	};
	_proto.other_cash_i = function () {
		var t = new eui.Group();
		this.other_cash = t;
		t.height = 111;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 294;
		t.x = 324;
		t.elementsContent = [this.run_cashBtn_i(),this._Image9_i(),this.other_text_i()];
		return t;
	};
	_proto.run_cashBtn_i = function () {
		var t = new cookMyButton();
		this.run_cashBtn = t;
		t.anchorOffsetX = 147;
		t.anchorOffsetY = 55;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = cookwheelSkin$Skin154;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "cash_png";
		t.touchEnabled = false;
		t.x = 67;
		t.y = 28;
		return t;
	};
	_proto.other_text_i = function () {
		var t = new eui.Label();
		this.other_text = t;
		t.size = 44;
		t.stroke = 2;
		t.strokeColor = 0xBC8000;
		t.text = "50";
		t.touchEnabled = false;
		t.x = 151;
		t.y = 28;
		return t;
	};
	return cookwheelSkin;
})(eui.Skin);