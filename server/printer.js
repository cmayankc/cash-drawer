var escpos = require('escpos');

function openDrawer() {

	const device 	= new escpos.USB(0x0416, 0x5011);
	var printer 	= new escpos.Printer(device);

	printer.cashdraw();
}

module.exports = {
	openDrawer: openDrawer
};