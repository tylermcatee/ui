// PROTOTYPE ANIMATIONS

// updateCallback is a function that takes a view and returns
// a mutated view

// completion is a function that takes no parameters and returns
// no parameters

KEYFRAME_KEY = 0;
KEYFRAME_FROM = 1;
KEYFRAME_TO = 2;

Easing = {
  // no easing, no acceleration
  linear: function (t) { return t },
  // accelerating from zero velocity
  easeInQuad: function (t) { return t*t },
  // decelerating to zero velocity
  easeOutQuad: function (t) { return t*(2-t) },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
  // accelerating from zero velocity 
  easeInCubic: function (t) { return t*t*t },
  // decelerating to zero velocity 
  easeOutCubic: function (t) { return (--t)*t*t+1 },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
  // accelerating from zero velocity 
  easeInQuart: function (t) { return t*t*t*t },
  // decelerating to zero velocity 
  easeOutQuart: function (t) { return 1-(--t)*t*t*t },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
  // accelerating from zero velocity
  easeInQuint: function (t) { return t*t*t*t*t },
  // decelerating to zero velocity
  easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
}

class Animation {

	static animate(view, duration, updateCallback, completion, curve, delay) {
		if (delay == null) {
			delay = 0.0;
		}
		if (curve == null) {
			curve = Easing.linear;
		}
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
			var timeValue = curve(percent);
			if (fgreater(timeValue, 1.0)) {
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
				var interpolatedPosition = interpolatingFunction(keyframe[KEYFRAME_FROM], keyframe[KEYFRAME_TO], timeValue);
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