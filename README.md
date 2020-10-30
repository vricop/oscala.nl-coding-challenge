# Notes

## Issues

The given JSON file wasn't formatted properly, either strings and objects were
escaped and stringified. I properly formatted the JSON file to better work with
the data.

The 'transmission' and 'fuel' data from JSON file were a bit confusing, at least
without context. They're written as some kind of labels. I guess they stand for
Dutch words. I'm not sure if I've got it right, here's what I did.

I kept them organized in object literals and return their respective strings
with two different functions (see more in './src/utils/convert-label-to-string.js). 

```js
const fuelWords = {
  'E': 'Elektrisch',
  'D': 'Diesel',
  'H': 'Hybride',
  'B': 'Benzine',
}
```

```js
const tranmissionWords = {
  'A': 'Automaat',
  'S': 'Semi-automaat',
  'H': 'Handgeschakeld',
}
```

## Additional modules used

- **sass**: dependency for petricorcss
- **petricorcss**: for working faster when designin components with css
- **purgecss**: to removed unused css

## Techniques used

### React Compound Components

I've used a React pattern called [Compound Components](https://levelup.gitconnected.com/how-to-use-component-composition-to-create-a-flexible-compound-component-in-react-4024660b9613). This way I can build
reusable and flexible components. We can move different parts of a component
around so we can create variations with the same component.

### PetricorCSS

I've used my own scss library for building interfaces. It's a great tool for
building design systems for a brand or company. From a single source of truth I
can manage color palettes, typography scales, etc. This is key for visual
consistency and coherence throughout different components.

### PurgeCSS

This module removes unused css code from our files. I didn't used it at the end,
as its configuration is a bit different for react projects. I'm planning to
implement this for future project though.

### SVG Fragment Identifiers

This is a cool technique for keeping all vector based icons and logos in the same
file and insert them after wherever we want. Benefits:

1. Just 1 http request
2. Browser cache for future request
3. As thery're vector we get crisp and sharp images no matter device resolutions
4. We can apply diffent colors on them, change their size, etc 

