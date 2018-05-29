# rc-viewer
Image viewer component for React, supports rotation, scale, zoom and so on, based on [viewer.js](https://github.com/fengyuanchen/viewerjs)

## [Demo](https://hyk51594176.github.io/rc-viewer/demo/demo.html)

## umd

```html
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.bootcss.com/viewerjs/1.0.0/viewer.min.js"></script>
    <link href="https://cdn.bootcss.com/viewerjs/1.0.0/viewer.min.css" rel="stylesheet">
    <script  src="../dist/rc-viewer.js"></script>
```
## Installation 
Install from GitHub via NPM
```bash
npm install rc-viewer
```

## Usage
```javascript
import React,{ Component } from 'react';
import RcViewer from 'rc-viewer'
class Test extends Component{
  render(){
    const options={}
    return <div>
      <RcViewer options={options} ref='viewer'>
        <ul id="images">
            <li><img src="picture-1.jpg" alt="Picture 1"></li>
            <li><img src="picture-2.jpg" alt="Picture 2"></li>
            <li><img src="picture-3.jpg" alt="Picture 3"></li>
        </ul>
      </RcViewer>
      <RcViewer options={options}>
        <img src="picture-3.jpg" alt="Picture 3">
      </RcViewer>
    </div>
      
  }
}
```  


## Keyboard support

> Only available in modal mode.

- `Esc`: Exit full screen or close the viewer or exit modal mode or stop play.
- `Space`: Stop play.
- `←`: View the previous image.
- `→`: View the next image.
- `↑`: Zoom in the image.
- `↓`: Zoom out the image.
- `Ctrl + 0`: Zoom out to initial size.
- `Ctrl + 1`: Zoom in to natural size.



## options

You may set viewer options with `props.options`.
 

### inline

- Type: `Boolean`
- Default: `false`

Enable inline mode.

### button

- Type: `Boolean`
- Default: `true`

Show the button on the top-right of the viewer.

### navbar

- Type: `Boolean` or `Number`
- Default: `true`
- Options:
  - `0` or `false`: hide the navbar
  - `1` or `true`: show the navbar
  - `2`: show the navbar only when the screen width is greater than 768 pixels
  - `3`: show the navbar only when the screen width is greater than 992 pixels
  - `4`: show the navbar only when the screen width is greater than 1200 pixels

Specify the visibility of the navbar.

### title

- Type: `Boolean` or `Number`
- Default: `true`
- Options:
  - `0` or `false`: hide the title
  - `1` or `true`: show the title
  - `2`: show the title only when the screen width is greater than 768 pixels
  - `3`: show the title only when the screen width is greater than 992 pixels
  - `4`: show the title only when the screen width is greater than 1200 pixels

Specify the visibility of the title (the current image's name and dimensions).

> The name comes from the `alt` attribute of an image element or the image name parsed from URL.

### toolbar

- Type: `Boolean` or `Number` or `Object`
- Default: `true`
- Options:
  - `0` or `false`: hide the toolbar.
  - `1` or `true`: show the toolbar.
  - `2`: show the toolbar only when the screen width is greater than 768 pixels.
  - `3`: show the toolbar only when the screen width is greater than 992 pixels.
  - `4`: show the toolbar only when the screen width is greater than 1200 pixels.
  - `{ key: Boolean | Number }`: show or hide the toolbar.
  - `{ key: String }`: customize the size of the button.
  - `{ key: Function }`: customize the click handler of the button.
  - `{ key: { show: Boolean | Number, size: String, click: Function }`: customize each property of the button.
  - Available keys: "zoomIn", "zoomOut", "oneToOne", "reset", "prev", "play", "next", "rotateLeft", "rotateRight", "flipHorizontal" and "flipVertical".
  - Available sizes: "small", "medium" (default) and "large".

Specify the visibility and layout of the toolbar its buttons.

For example, `toolbar: 4` equals to:

```js
toolbar: {
  zoomIn: 4,
  zoomOut: 4,
  oneToOne: 4,
  reset: 4,
  prev: 4,
  play: {
    show: 4,
    size: 'large',
  },
  next: 4,
  rotateLeft: 4,
  rotateRight: 4,
  flipHorizontal: 4,
  flipVertical: 4,
}
```

### tooltip

- Type: `Boolean`
- Default: `true`

Show the tooltip with image ratio (percentage) when zoom in or zoom out.

### movable

- Type: `Boolean`
- Default: `true`

Enable to move the image.

### zoomable

- Type: `Boolean`
- Default: `true`

Enable to zoom the image.

### rotatable

- Type: `Boolean`
- Default: `true`

Enable to rotate the image.

### scalable

- Type: `Boolean`
- Default: `true`

Enable to scale the image.

### transition

- Type: `Boolean`
- Default: `true`

Enable CSS3 Transition for some special elements.

### fullscreen

- Type: `Boolean`
- Default: `true`

Enable to request full screen when play.

> Requires the browser supports [Full Screen API](http://caniuse.com/fullscreen).

### keyboard

- Type: `Boolean`
- Default: `true`

Enable keyboard support.

### backdrop

- Type: `Boolean` or `String`
- Default: `true`

Enable a modal backdrop, specify `static` for a backdrop which doesn't close the modal on click.

### loading

- Type: `Boolean`
- Default: `true`

Indicate if show a loading spinner when load image or not.

### loop

- Type: `Boolean`
- Default: `true`

Indicate if enable loop viewing or not.

> If the current image is the last one, then the next one to view is the first one, and vice versa.

### interval

- Type: `Number`
- Default: `5000`

The amount of time to delay between automatically cycling an image when playing.

### minWidth

- Type: `Number`
- Default: 200

Define the minimum width of the viewer.

> Only available in inline mode (set the `inline` option to `true`).

### minHeight

- Type: `Number`
- Default: 100

Define the minimum height of the viewer.

> Only available in inline mode (set the `inline` option to `true`).

### zoomRatio

- Type: `Number`
- Default: `0.1`

Define the ratio when zoom the image by wheeling mouse.

### minZoomRatio

- Type: `Number`
- Default: `0.01`

Define the min ratio of the image when zoom out.

### maxZoomRatio

- Type: `Number`
- Default: `100`

Define the max ratio of the image when zoom in.

### zIndex

- Type: `Number`
- Default: `2015`

Define the CSS `z-index` value of viewer in modal mode.

### zIndexInline

- Type: `Number`
- Default: `0`

Define the CSS `z-index` value of viewer in inline mode.

### url

- Type: `String` or `Function`
- Default: `'src'`

Define where to get the original image URL for viewing.

> If it is a string, it should be one of the attributes of each image element.
> If it is a function, it should return a valid image URL.

For example:

```html
<img src="picture.jpg?size=160">
```

```js
{
  url(image) {
    return image.src.replace('?size=160', '');
  },
}
```

### container

- Type: `Element` or `String`
- Default: `'body'`
- An element or a valid selector for [Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

The container to put the viewer in modal mode.

> Only available when the `inline` option is set to `false`.

### filter

- Type: `Function`
- Default: `null`

Filter the images for viewing (should return `true` if the image is viewable).

For example:

```js
{
  filter(image) {
    return image.complete;
  },
}
```

### ready

- Type: `Function`
- Default: `null`

A shortcut of the `ready` event.

### show

- Type: `Function`
- Default: `null`

A shortcut of the `show` event.

### shown

- Type: `Function`
- Default: `null`

A shortcut of the `shown` event.

### hide

- Type: `Function`
- Default: `null`

A shortcut of the `hide` event.

### hidden

- Type: `Function`
- Default: `null`

A shortcut of the `hidden` event.

### view

- Type: `Function`
- Default: `null`

A shortcut of the `view` event.

### viewed

- Type: `Function`
- Default: `null`

A shortcut of the `viewed` event.



## Methods

All methods allow chain composition.

As there are some **asynchronous** processes when start the viewer, you should call a method only when it is available, see the following **lifecycle**:

```js
 {
  ready: function () {
    // 2 methods are available here: "show" and "destroy".
  },
  shown: function () {
    // 9 methods are available here: "hide", "view", "prev", "next", "play", "stop", "full", "exit" and "destroy".
  },
  viewed: function () {
    // All methods are available here except "show".
    this.viewer.zoomTo(1).rotateTo(180);
  }
}
```

### show([immediate])

- **immediate** (optional):
  - Type: `Boolean`
  - Default: `false`
  - Indicates if show the viewer immediately or not.

Show the viewer.

> Only available in modal mode.

### hide([immediate])

- **immediate** (optional):
  - Type: `Boolean`
  - Default: `false`
  - Indicates if hide the viewer immediately or not.

hide the viewer.

> Only available in modal mode.

### view([index])

- **index** (optional):
  - Type: `Number`
  - Default: `0`
  - The index of the image for viewing

View one of the images with image's index. If the viewer is not shown, will show the viewer first.

```js
const { viewer } = this.refs.viewer.getViewer()
viewer.view(1); // View the second image
```

### prev([loop=false])

- **loop** (optional):
  - Type: `Boolean`
  - Default: `false`
  - Indicate if turn to view the last one when it is the first one at present.

View the previous image.

### next([loop=false])

- **loop** (optional):
  - Type: `Boolean`
  - Default: `false`
  - Indicate if turn to view the first one  when it is the last one at present.

View the next image.

### move(offsetX[, offsetY])

- **offsetX**:
  - Type: `Number`
  - Moving size (px) in the horizontal direction

- **offsetY** (optional):
  - Type: `Number`
  - Moving size (px) in the vertical direction.
  - If not present, its default value is `offsetX`

Move the image with relative offsets.

```js
const { viewer } = this.refs.viewer.getViewer()
viewer.move(1);
viewer.move(-1, 0); // Move left
viewer.move(1, 0);  // Move right
viewer.move(0, -1); // Move up
viewer.move(0, 1);  // Move down
```

### moveTo(x[, y])

- **x**:
  - Type: `Number`
  - The `left` value of the image

- **y** (optional):
  - Type: `Number`
  - The `top` value of the image
  - If not present, its default value is `x`.

Move the image to an absolute point.

### zoom(ratio[, hasTooltip])

- **ratio**:
  - Type: `Number`
  - Zoom in: requires a positive number (ratio > 0)
  - Zoom out: requires a negative number (ratio < 0)

- **hasTooltip** (optional):
  - Type: `Boolean`
  - Default: `false`
  - Show tooltip

Zoom the image with a relative ratio

```js
const { viewer } = this.refs.viewer.getViewer()
viewer.zoom(0.1);
viewer.zoom(-0.1);
```

### zoomTo(ratio[, hasTooltip])

- **ratio**:
  - Type: `Number`
  - Requires a positive number (ratio > 0)

- **hasTooltip** (optional):
  - Type: `Boolean`
  - Default: `false`
  - Show tooltip

Zoom the image to an absolute ratio.

```js
const { viewer } = this.refs.viewer.getViewer()
viewer.zoomTo(0); // Zoom to zero size (0%)
viewer.zoomTo(1); // Zoom to natural size (100%)
```

### rotate(degree)

- **degree**:
  - Type: `Number`
  - Rotate right: requires a positive number (degree > 0)
  - Rotate left: requires a negative number (degree < 0)

Rotate the image with a relative degree.

```js
const { viewer } = this.refs.viewer.getViewer()
viewer.rotate(90);
viewer.rotate(-90);
```

### rotateTo(degree)

- **degree**:
  - Type: `Number`

Rotate the image to an absolute degree.

```js
const { viewer } = this.refs.viewer.getViewer()
viewer.rotateTo(0); // Reset to zero degree
viewer.rotateTo(360); // Rotate a full round
```

### scale(scaleX[, scaleY])

- **scaleX**:
  - Type: `Number`
  - Default: `1`
  - The scaling factor to apply on the abscissa of the image
  - When equal to `1` it does nothing.

- **scaleY** (optional):
  - Type: `Number`
  - The scaling factor to apply on the ordinate of the image
  - If not present, its default value is `scaleX`.

Scale the image.

```js
const { viewer } = this.refs.viewer.getViewer()
viewer.scale(-1); // Flip both horizontal and vertical
viewer.scale(-1, 1); // Flip horizontal
viewer.scale(1, -1); // Flip vertical
```

### scaleX(scaleX)

- **scaleX**:
  - Type: `Number`
  - Default: `1`
  - The scaling factor to apply on the abscissa of the image
  - When equal to `1` it does nothing

Scale the abscissa of the image.

```js
const { viewer } = this.refs.viewer.getViewer()
viewer.scaleX(-1); // Flip horizontal
```

### scaleY(scaleY)

- **scaleY**:
  - Type: `Number`
  - Default: `1`
  - The scaling factor to apply on the ordinate of the image
  - When equal to `1` it does nothing

Scale the ordinate of the image.

```js
const { viewer } = this.refs.viewer.getViewer()
viewer.scaleY(-1); // Flip vertical
```

### play([fullscreen])

- **fullscreen** (optional):
  - Type: `Boolean`
  - Default: `false`
  - Indicate if request fullscreen or not.

Play the images.

### stop()

Stop play.

### full()

Enter modal mode.

> Only available in inline mode.

### exit()

Exit  modal mode.

> Only available in inline mode.

### tooltip()

Show the current ratio of the image with percentage.

> Requires the `tooltip` option set to `true`.

### toggle()

Toggle the image size between its natural size and initial size.

### reset()

Reset the image to its initial state.

### update()

Update the viewer instance when the source images changed (added, removed or sorted).

> If you load images dynamically (with XMLHTTPRequest), you can use this method to add the new images to the viewer instance.

### destroy()

Destroy the viewer and remove the instance.



## Events

All events can access the viewer instance with `this.viewer` in its handler.

> Be careful to use these events in other component which has the same event names, e.g.: [Bootstrap](https://getbootstrap.com/)'s modal.


```js
const { container } = this.refs.viewer.getViewer()

container.addEventListener('viewed', function () {
   ....
}, false);
 
```

### ready

This event fires when a viewer instance is ready for viewing.

> In modal mode, this event will not be triggered until you click on one of the images.

### show

This event fires when the viewer modal starts to show.

> Only available in modal mode.

### shown

This event fires when the viewer modal has shown.

> Only available in modal mode.

### hide

This event fires when the viewer modal starts to hide.

> Only available in modal mode.

### hidden

This event fires when the viewer modal has hidden.

> Only available in modal mode.

### view

- **event.detail.originalImage**:
  - Type: `HTMLImageElement`
  - The original image.

- **event.detail.index**:
  - Type: `Number`
  - The index of the original image.

- **event.detail.image**:
  - Type: `HTMLImageElement`
  - The current image (a clone of the original image).

This event fires when a viewer starts to show (view) an image.

### viewed

- **event.detail**: the same as the `view` event.

This event fires when a viewer has shown (viewed) an image.



 

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 9+
