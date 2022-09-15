---
sidebar_label: "Quick Start - React"
sidebar_position: 2
hide_title: true
---

# React Quick Start

In this guide we will get you up and running using API Hero to connect to the GitHub REST API from a React application.

### 1. Run the API Hero CLI

In your terminal, navigate to the root directory of your React application.

:::info

We currently support React 16+

:::

Run the following command to bootstrap your React project with API Hero and add your first API integration:

```zsh
npx apihero@latest add GitHub
```

This command will take you through a series of steps to get started

- Authenticating with API Hero (if you haven't already)
- Selecting an existing Workspace / Project on apihero.run or creating a new one
- Adding the GitHub API to your Project on apihero.run
- Adding the `@apihero/github` and `@apihero/react` packages to your package dependencies

When it's finished it will print out your `projectKey` (a long string of characters like `cl823alx00590eidl9qxg0h6x`). We'll need that in the following steps.

### 2. Add the `ApiHeroProvider`

Before you can begin making API calls, you need to wrap your app in the `ApiHeroProvider` and pass in your projectKey that you should have received from the CLI.

```tsx
export default function App() {
  return (
    <APIHeroProvider projectKey="<Your projectKey Here>">
      <Home />
    </APIHeroProvider>
  );
}
```

### 3. Create your first endpoint hook

Use `createEndpoint` to export a React hook that fetches the [`repos.getRepo`](https://docs.github.com/en/rest/repos/repos#get-a-repository) API

```ts
import { repos } from "@apihero/github";
import { createEndpoint } from "@apihero/react";

export const useGetRepository = createEndpoint(repos.getRepo);
```

### 4. Use endpoint hook in a component

Now you can use the fully typed `useGetRepository` hook in a React component:

```tsx
export function StarCount({ owner, repo }: { owner: string; repo: string }) {
  const { data, status, error } = useGetRepository({
    owner,
    repo,
  });

  return (
    <>
      {status === "loading" ? (
        <Spinner />
      ) : status === "error" ? (
        <p>Oops, repo {error.message.toLowerCase()}</p>
      ) : (
        <h2>{data.stargazers_count} stars</h2>
      )}
    </>
  );
}
```

Because `repos.getRepo` contains the TypeScript types for the endpoint, using the `useGetRepository` hook presents helpful typed suggestions for the props:

![useGetRepository types](/img/react/useGetRepositoryTypes.png)

And the response body:

![stargazers_count](/img/react/stargazers_count.png)

### 4. Inspect the request in API Hero

After running your React app and using the `StarCount` component, head over to [app.apihero.run](https://app.apihero.run) and inspect the request in the [Request History](/features/request-history):

![My API Hero logs](/img/nodeLogs.png)

### 5. Add Authentication

Calling public GitHub endpoints without authentication info is possible but is limited to 60 requests per hour.

:::warning

GitHub rate-limits non-authenticated requests by IP address. Based on personal experience, you can easily use up an entire large office's request quota if you aren't careful!

:::

Don't worry, API Hero makes it really easy to add authentication to your API calls, without having to change a line of code!

First, head over to [GitHub's Personal access tokens page](https://github.com/settings/tokens) and generate a new token to use with API Hero:

![GitHub PAT](/img/authentication/githubPAT.png)

Make sure to select the `repo` scope if you'd like to fetch data about private repositories. If not, leave the scopes blank.

After saving GitHub will show you the PAT string that you'll need to copy out for the next step:

![GitHub PAT copy](/img/authentication/githubPATcopy.png)

Head over to [app.apihero.run](https://app.apihero.run) and navigate to the project page. Click on the "Add" button in the Authentication side panel:

![API Hero Add Auth](/img/authentication/addAuth.png)

Add a Personal Access Token to your project using your GitHub username as the PAT username:

![API Hero Add PAT](/img/authentication/githubPATadd.png)

![API Hero Save PAT](/img/authentication/githubPATsave.png)

Back on the Project page, you should now see that you have 1 authentication method configured:

![Project with PAT Auth](/img/authentication/projectWithAuth.png)

Without changing your code at all, go ahead and make another request and then head back to the Request History page to confirm your raised rate limits:

![History with rate limits](/img/authentication/historyWithRateLimits.png)
