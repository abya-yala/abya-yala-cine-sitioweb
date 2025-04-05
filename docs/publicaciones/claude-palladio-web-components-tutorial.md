---
title: Tutorial la integración de Palladio en Docusaurus
sidebar_posion: 4
---
# Tutorial: Integrating Palladio Visualizations in Docusaurus

I'll create a step-by-step tutorial for incorporating Palladio web components into your Docusaurus website. Let's begin by integrating the necessary JavaScript and HTML to render Palladio visualizations in your Markdown pages.

## Step 1: Configure Docusaurus for JavaScript Injection

First, we need to ensure Docusaurus can handle custom scripts. This requires modifying your configuration.

```javascript
// docusaurus.config.js
module.exports = {
  // ... your existing configuration
  scripts: [
    // Load Palladio web components from CDN or your own hosted version
    'https://cdn.jsdelivr.net/gh/simonwiles/palladio-webcomponents@main/dist/palladio-webcomponents.js',
  ],
  stylesheets: [
    // Optional: Add Palladio styles if needed
    'https://cdn.jsdelivr.net/gh/simonwiles/palladio-webcomponents@main/dist/palladio-webcomponents.css',
  ],
};

```

## Step 2: Create a Custom Plugin to Enable Script Tags in MDX

By default, Docusaurus won't execute script tags in Markdown. Let's create a plugin to enable this functionality:

```javascript
// plugins/mdx-plugin.js
const visit = require('unist-util-visit');

module.exports = function (options) {
  return {
    name: 'mdx-script-loader',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.mdx?$/,
              use: [
                {
                  loader: '@mdx-js/loader',
                  options: {
                    remarkPlugins: [
                      () => (tree) => {
                        visit(tree, 'html', (node) => {
                          // This will allow script tags in MDX to be executed
                          if (node.value.includes('<script')) {
                            node.value = node.value.replace(
                              /<script/g,
                              '<script dangerouslySetInnerHTML={{__html: `'
                            ).replace(
                              /<\/script>/g,
                              '`}} />'
                            );
                          }
                        });
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      };
    },
  };
};

```

Now add this plugin to your Docusaurus config:

```javascript
// docusaurus.config.js
module.exports = {
  // ... other configs
  plugins: [
    require.resolve('./plugins/mdx-plugin'),
    // ... other plugins
  ],
};

```

## Step 3: Create a Markdown Page with Palladio Visualization

Now, you can create a Markdown page that includes Palladio visualizations:

```markdown
---
title: Palladio Visualization
---

# My Palladio Visualization

Below is an interactive data visualization created with Palladio:

<div className="palladio-container">
  <palladio-map-component 
    data-source="./data/palladio-data.json"
    map-tiles="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    height="500px">
  </palladio-map-component>
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Optional: You can add initialization code here
    const mapComponent = document.querySelector('palladio-map-component');
    if (mapComponent) {
      console.log('Palladio map component loaded!');
      // You can add event listeners or custom configuration here
    }
  });
</script>

The visualization above shows geographic data points from our dataset.

```

## Step 4: Prepare Your Data File

Create a data file in the static folder of your Docusaurus site:

```json
{
  "nodes": [
    {
      "id": "1",
      "label": "Point A",
      "lat": "37.7749",
      "lon": "-122.4194",
      "type": "location"
    },
    {
      "id": "2",
      "label": "Point B",
      "lat": "40.7128",
      "lon": "-74.0060",
      "type": "location"
    }
    // Add more data points as needed
  ],
  "links": [
    {
      "source": "1",
      "target": "2",
      "value": 5
    }
    // Add more links as needed
  ]
}

```

## Step 5: Style Your Visualization

Add some CSS to style your Palladio visualization:

```css
/* In your custom CSS file or in your site's global styles */
.palladio-container {
  margin: 20px 0;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

palladio-map-component {
  width: 100%;
  min-height: 500px;
  display: block;
}

```

## Advanced Usage: Different Palladio Components

The Palladio Web Components library provides several visualization types. Here are examples of different components you can use:

```markdown
---
title: Advanced Palladio Examples
---

# Advanced Palladio Visualizations

## Map Component

<palladio-map-component 
  data-source="./data/geo-data.json"
  map-tiles="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  height="500px">
</palladio-map-component>

## Timeline Component

<palladio-timeline-component 
  data-source="./data/timeline-data.json"
  height="300px">
</palladio-timeline-component>

## Graph Component

<palladio-graph-component 
  data-source="./data/network-data.json"
  height="500px">
</palladio-graph-component>

## Facet Component

<palladio-facet-component 
  data-source="./data/facet-data.json"
  height="400px">
</palladio-facet-component>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize Palladio components if needed
    // This could include setting options or adding event listeners
  });
</script>

```

## Troubleshooting Common Issues

If you encounter issues with your Palladio visualizations, try these solutions:

1. **Components not loading**: Ensure your browser console doesn't show any errors related to CORS. You might need to adjust your server settings.

2. **Data not appearing**: Check that your data file path is correct and the JSON structure matches what Palladio expects.

3. **Layout problems**: Use the browser inspector to check if the component has rendered correctly and adjust CSS as needed.

## Sources and References

1. Palladio Web Components Repository: [GitHub - simonwiles/palladio-webcomponents](https://github.com/simonwiles/palladio-webcomponents)
   - Used for component documentation and usage examples

2. Docusaurus Documentation: [Docusaurus - Scripts and Styles](https://docusaurus.io/docs/api/docusaurus-config#scripts)
   - Referenced for understanding how to inject custom scripts

3. MDX Documentation: [MDX - Using MDX as a content format](https://mdxjs.com/docs/using-mdx/)
   - Used for understanding how to work with HTML and scripts within Markdown

4. Palladio Project: [Palladio - Visualize complex historical data with ease](http://hdlab.stanford.edu/palladio/)
   - The main Palladio project which provides the underlying visualization technology

Would you like me to elaborate on any specific section of this tutorial or provide more examples of data formats for specific visualization types?
