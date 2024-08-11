This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Testing

I used Vitest for testing. It contains the complete setup for Vitest with Next.js including `vite-tsconfig-paths` to allow vite to resolve TS paths. To run the tests, run the following command:

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```

# Technical Assessment Approach

## 1. Create a Basic Next.js 14 Application

### 1.1 Technology Stack and Component Library

For this project, I used **Shadcn UI** combined with **TailwindCSS** and **TypeScript**. Shadcn UI provides a set of prebuilt modern UI components that are not only high quality but also highly extensible.

### 1.2 Form Page with Validation

The form page is located at `/form` and contains a simple form with all the necessary fields.
I created a custom form component that is reused throughout the application to maintain consistency and reduce redundancy. It is used in the form page as well as the sign-in page.
It collects the user's name, nickname, and age. Form validation is handled by **Zod**, a powerful schema validation library that ensures the `name` field accepts only strings and uppercase. The `age` field is restricted to a range of 5-15. A custom input component was developed for this form, which is reused across the application to maintain consistency and reduce redundancy.

### 1.3 Dynamic and Reusable Table Component

To display data, I created a custom dynamic and type-safe table component. This component leverages the Table UI component from Shadcn UI and allows user control through props, making it reusable throughout the application. The table is also responsive, with scrolling enabled for overflow content, ensuring it works well across different screen sizes.

### 1.4 Not Found Page

A simple `not-found.tsx` page was implemented to handle 404 errors.

## 2. Implement User Authentication

### 2.1 Authentication Flow

For user authentication, I hardcoded credentials and implemented a server action to create a fake JWT, which is saved in an HTTP-only cookie for security. This JWT is used to manage user sessions, with Next.js middleware protecting routes by checking for the presence of the cookie. Although this is a simplified approach, in a real-world scenario, this would be replaced by a proper JWT verification mechanism.

### 2.2 Security Considerations

The cookie is HTTP-only, adding a layer of security to this process. In production, the cookie is also set to be secure, ensuring it is only transmitted over HTTPS.

## 3. Global State Management

### 3.1 Context API for State Management

Given the scale of the application, I opted for the **Context API** to manage global state. This approach is sufficient for a small to medium-sized application, where more complex state management libraries like Redux would be overkill. The global state stores user data and is available across all pages, it is used in the header to display the user's name. The context also provides centralized login and logout functions, which call server actions and sync the state with local storage. I wrapped the application in a provider and used a custom hook to consume the context.

## 4. API Integration and Data Fetching

### 4.1 API Integration

I integrated the `https://jsonplaceholder.typicode.com/users` API, fetching and displaying the data in the custom table component. The API request is performed server-side, and I used an async component (a feature of Next.js 14) to handle this. The data is sorted randomly before being passed to the table, ensuring that each reload presents different data to observe the reload.

### 4.2 Data Reload Feature

The table includes a reload button, which, when clicked, triggers a data refresh without a full page reload. This is achieved by updating a `refreshId` query parameter, which forces a re-fetch of the data.

### 4.3 Utility Function for Data Fetching

I implemented a utility function responsible for fetching data. This function checks the request status and converts the response to JSON before returning it. This utility is designed to be reusable across different parts of the application.

## 5. Folder Structure and Code Organization

### 5.1 Folder Structure

The application follows a well-structured folder organization, with an `app` folder containing two main layouts: one for authenticated pages (with a header) and another for authentication-related pages (without a header). This separation of concerns improves the seperation of concerns and makes the codebase more maintainable. The `components` folder contains reusable components, such as the custom table, form, and input components. The `context` folder contains the global state management logic.

### 5.2 Reusable and Type-safe Components

Throughout the application, I focused on building reusable, dynamic and type-safe components. Examples include the custom table, input, and form components. The form component is reused in multiple places, such as the form page and login page, minimizing repetition and ensuring consistency.

### 5.3 Adherence to Best Practices

The project follows **SOLID** and **DRY** principles, ensuring that the code is maintainable, scalable, and easy to understand. Each variable and function is given a meaningful, semantic name. Additionally, I ensured complete separation of concerns across different parts of the application, making it easier to manage and extend in the future.

## 6. Testing and Continuous Integration

### 6.1 Basic Testing Setup

To ensure the reliability of the application, I set up basic tests using **Vitest**. The testing environment is configured to work seamlessly with TypeScript and Next.js 14 for example the `ts-config-paths` plugin is used to resolve TS paths for Vite.
