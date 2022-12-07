const _data = [
  {
    id: "iN3o9u9J_54",
    title:
      "Build a Drag and Drop Interface in an Hour with React Beautiful DND",
    description:
      "In this live coding workshop you'll learn how to build out a drag and drop interface in React by implementing the React Beautiful DND library.",
  },
  {
    id: "TZw0EAjcH7o",
    title: "Mouse and Viewport Based React Hooks",
    description:
      "Learn about mouse and viewport events in React by building an image spider with a customer cursor and see how you can access the exact positions of  page elements and the user's cursor to create dynamic views.",
  },
  {
    id: "tYVPOcx3cSU",
    title: "Build Website Tooltips using HTML and CSS",
    description:
      "In this live coding workshop, you'll learn how to: design a pricing table, utilize object-fit to get images of varied sizes to fit in a layout, utilize advanced techniques for managing border radius styles, implement media queries for mobile responsive behavior, and Build a tooltip feature using HTML and CSS.",
  },
  {
    id: "3_f5ssj-pm8",
    title: "How to Call and Render API Data in React",
    description:
      "In this React JS live coding workshop, you'll learn how to: - Build a function that retrieves data from an API - Implement a JSON parsing system for extracting data from an API - Populate API data into a component's state using React hooks - Render API data onto the screen",
  },
  {
    id: "bbD-W3tVYs0",
    title: "How to Build a React Component with TypeScript Interfaces",
    description:
      "This guide walks through how to build React components that utilize TypeScript interfaces. This illustrates the power of using TypeScript with tools such as React since they can help guide the development process and document the rules that the application should follow",
  },
  {
    id: "RXLYkKKC948",
    title: "Building a Dynamic Layout in React",
    description:
      "Learn how to create a re-usable list component in React that allows for rendering grid and list based data along with filtering data.",
  },
  {
    id: "8jqRLO9R0HM",
    title: "How to Utilize React's Context API to Build a Login Form",
    description:
      "After completing this workshop, you will be able to: - Create React Context and Provider components to share data throughout an application. - Render the pages a user can access based on a user’s login status. - Build a login form that communicates with an API server to create a secure authentication session",
  },
];
export default _data.map((i) => ({
  ...i,
  videoSrc: `https://youtu.be/${i.id}`,
  thumbnailSrc: `https://i.ytimg.com/vi/${i.id}/maxresdefault.jpg`,
}));
