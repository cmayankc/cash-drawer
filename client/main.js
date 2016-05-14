(function() {

	var SERVER_URL = 'http://localhost:4000';

	var btn = document.getElementById('cash-drawer-btn');

	btn.addEventListener('click', openCashDrawer);

	function openCashDrawer() {
		var endpoint = SERVER_URL + '/openCashDrawer';

		$.ajax({
			url: endpoint,
			method: 'POST',
			success: function(result, status, xhr) {
				console.log('Successfully Opened Cash Drawer');
			},
			error: function(xhr, status, error) {
				console.log('Error Opening Cash Drawer');
			}
		});
	}

})(undefined);