// Delete property of object inside a map and return object without that property
images.map(({image, ...rest}) => ({...rest, preview: image})) 
