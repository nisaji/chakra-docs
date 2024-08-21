# Chakra Docs

Chakra Docs is a library for creating simple documentation or manuals using React and Chakra UI.

## Features

- Beautiful and responsive design using Chakra UI
- Easy to create structured documents
- Customizable theme
- TypeScript support

## Installation

You can install it using npm:

```bash
npm install chakra-docs @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

## Usage

First, create your manual data:

```typescript
import { IManual } from "chakra-docs";

const manualData: IManual = {
  title: "Sample Manual",
  sections: [
    {
      title: "Section 1",
      content: [
        {
          type: "paragraph",
          content: "This is a sample paragraph.",
        },
        {
          type: "list",
          listType: "unordered",
          content: ["Item 1", "Item 2", "Item 3"],
        },
      ],
    },
    // Add other sections...
  ],
};
```

2. Use the Manual component to render your manual:

```typescript
import { Manual } from "chakra-docs";

const App = () => {
  return <Manual manualData={manualData} />;
};
```
