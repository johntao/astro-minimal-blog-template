components folder logic
- put reusable components in the root of the folder
  - components/
- put unreusable components in the sub-folder
  - components/{name}

Page logical workflow P > L > Cn

1. pages as API entry point
2. layouts as outer HTML
  - components as reusable inner HTML
3. components/{name} as inner HTML
  - components as reusable inner HTML

Content logical workflow P > L >  Cn > C

1. pages as API entry point
2. layouts as outer HTML
  - components as reusable inner HTML
3. components/{name} as inner HTML
  - components as reusable inner HTML
4. content as blog-post-content
  - components as reusable inner HTML