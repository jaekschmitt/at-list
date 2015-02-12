(function() {
	"use strict";

	var AtList, AtListView;

	AtListView = function(element, data) {
		

	};

	AtList = function(element) {
		var $input = $(element),
			lastRead = '',
			symbol = '@';

		setupBindings();


		function setupBindings() {
			$input.bind('keypress', watch);
		};

		function watch(event) {
			var value = String.fromCharCode(event.keyCode);
			
			if(lastRead.trim() === '' && value === symbol) 
				launch(event);

			lastRead = value;
		};

		function launch(event) {
			var iCaretPos = 0;

			var field = event.target;

			if(document.selection) {
				field.focus();
				var oSel = document.selection.createRange();
				oSel.moveStart('character', -field.value.length);
				iCaretPos = oSel.text.length;
			} else if (field.selectionStart || field.selectionStart == '0') {
				iCaretPos = field.selectionStart;
			}

			alert(iCaretPos);
		};
	};	

	$.fn.extend({
		atList: function() {
			var $this = $(this);

			this.each(function() {
				AtList($this);
			});
		}
	});

})(this);