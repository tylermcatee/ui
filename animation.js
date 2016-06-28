// PROTOTYPE ANIMATIONS

// updateCallback is a function that takes a view and returns
// a mutated view
class Animation {
	static animate(view, duration, updateCallback) {
		var mutatableView = view.copy();
		updateCallback(mutatableView);

		var keyframes = Animation._keyframes(view, mutatableView);
		if (keyframes.length == 0) {
			console.log("Animation: No keyframes detected.");
			return;
		}

		var startTime = Date.now();
		var finishTime = startTime + duration * 1000.0;

		function update() {
			var currentTime = Date.now();
			var percent = fpercent(startTime, currentTime, finishTime);
			if (fgreater(percent, 1.0)) {
				// Finished animating
				for (var i = 0; i < keyframes.length; i++) {
					var keyframe = keyframes[i];
					view.setKeyValue(keyframe[0], keyframe[2]);
				}
				return;
			}
			requestAnimationFrame(update);

			for (var i = 0; i < keyframes.length; i++) {
				var keyframe = keyframes[i];
				var interpolatedPosition = flerp(keyframe[1], keyframe[2], percent);
				view.setKeyValue(keyframe[0], interpolatedPosition);
			}
		}
		requestAnimationFrame(update);
	}

	static _keyframes(oldView, newView) {
		var keys = ['x', 'y', 'width', 'height', 'backgroundColor', 'borderRadius', 'opacity'];
		var keyframes = [];
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			
			var oldValue = oldView[key];
			var newValue = newView[key];
			if (!fequal(oldValue, newValue)) {
				keyframes.push([key, oldValue, newValue]);
			}
		}
		return keyframes;
	}
}