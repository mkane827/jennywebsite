app.component('vestly', {
	templateUrl: 'src/components/vestly/vestly.html',
	controllerAs: 'Vestly',
	controller: ['$interval', function ($interval) {
		const Vestly = this;

		const endDate = moment('2017-02-06').add(1, 'years');
		let secondsUntil = endDate.diff(moment(), 'seconds');

		$interval(() => {
			secondsUntil--;
			Vestly.d = Math.floor(secondsUntil / 60 / 60 / 24)
			Vestly.h = Math.floor(secondsUntil / 60 / 60) % 24;
			Vestly.m = Math.floor(secondsUntil / 60) % 24 % 60;
			Vestly.s = secondsUntil % 24 % 60 % 60;
		}, 1000);
	}]
});
