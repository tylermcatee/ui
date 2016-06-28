// PROTOTYPE ANIMATIONS

// updateCallback is a function that takes a view and returns
// a mutated view

// completion is a function that takes no parameters and returns
// no parameters

KEYFRAME_KEY = 0;
KEYFRAME_FROM = 1;
KEYFRAME_TO = 2;

class Animation {
	static animate(view, duration, updateCallback) {
		Animation.animateWithCompletion(view, duration, updateCallback, null);
	}

	static animate(view, duration, updateCallback, completion) {
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

				if (completion != null) {
					completion();
				}
				return;
			}
			requestAnimationFrame(update);

			for (var i = 0; i < keyframes.length; i++) {
				var keyframe = keyframes[i];
				var interpolatingFunction = Animation._interpolatingFunctionForKey(keyframe[0]);
				var interpolatedPosition = interpolatingFunction(keyframe[KEYFRAME_FROM], keyframe[KEYFRAME_TO], percent);
				view.setKeyValue(keyframe[KEYFRAME_KEY], interpolatedPosition);
			}
		}
		requestAnimationFrame(update);
	}

	static _interpolatingFunctionForKey(key) {
		switch (key) {
			case 'backgroundColor':
				return interpolatedColor;
				break;
			case 'transform':
				return interpolatedTransform;
				break;
			default:
				return flerp;
				break;
		}
	}

	static _keyframes(oldView, newView) {
		var keys = ['transform', 'x', 'y', 'width', 'height', 'backgroundColor', 'borderRadius', 'opacity'];
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